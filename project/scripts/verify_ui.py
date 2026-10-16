import http.server
import socketserver
import os
import threading
import time
from playwright.sync_api import sync_playwright

PORT = 8089
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

def start_server():
    httpd = socketserver.TCPServer(("", PORT), Handler)
    thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    thread.start()
    return httpd

def run_cuj():
    httpd = start_server()
    time.sleep(0.5)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            viewport={"width": 1280, "height": 800}
        )
        page = context.new_page()

        try:
            print("Navigating to blog post...")
            page.goto(f"http://localhost:{PORT}/blog/replace-50-overused-phrases.html")
            page.wait_for_timeout(1000)

            # Click Contents Popover
            contents_btn = page.query_selector('.magazine-contents-trigger')
            if contents_btn:
                contents_btn.click()
                page.wait_for_timeout(800)

            # Take Screenshot of Magazine Furniture
            screenshot_path = "/home/jules/verification/screenshots/magazine_furniture.png"
            page.screenshot(path=screenshot_path)
            print(f"Saved screenshot to {screenshot_path}")

            page.wait_for_timeout(1000)
        finally:
            context.close()
            browser.close()

if __name__ == "__main__":
    run_cuj()
