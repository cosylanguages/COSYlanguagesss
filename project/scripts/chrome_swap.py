#!/usr/bin/env python3
"""
scripts/chrome_swap.py

Swaps legacy page header navigation (.topbar/.topbar-nav) and head stylesheet links
with the shared COSYlanguages layout system (css/tokens.css, css/base.css, css/components.css,
css/layout.css, <nav id="cosy-nav"></nav>, and <header class="sd-sticky-header">).

Usage:
    python3 scripts/chrome_swap.py path/to/file1.html path/to/file2.html ...
    python3 scripts/chrome_swap.py --file-list list.txt
"""

import sys
import os
import re
import argparse


def transform_html(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Calculate relative root prefix from the file's location to repository root
    dirpath = os.path.dirname(os.path.normpath(filepath))
    if dirpath and dirpath != ".":
        depth = len(dirpath.split(os.sep))
        rel_root = "../" * depth
    else:
        rel_root = ""

    # Build the required stylesheet tags
    shared_css = [
        f'<link rel="stylesheet" href="{rel_root}css/tokens.css">',
        f'<link rel="stylesheet" href="{rel_root}css/base.css">',
        f'<link rel="stylesheet" href="{rel_root}css/components.css">',
        f'<link rel="stylesheet" href="{rel_root}css/layout.css">'
    ]

    # Preserve local assets stylesheet link (e.g. assets/style.css or ../assets/style.css)
    local_css_match = re.search(r'<link\s+rel=["\']stylesheet["\']\s+href=["\']([^"\']*assets/style\.css)["\']\s*/?>', content)
    local_css_tag = ""
    if local_css_match:
        local_css_href = local_css_match.group(1)
        local_css_tag = f'\n<link rel="stylesheet" href="{local_css_href}">'

    replacement_head_css = "\n".join(shared_css) + local_css_tag

    # Match and replace CSS links / inline <style> blocks in <head>
    head_match = re.search(r"(<head.*?>)(.*?)(</head>)", content, re.DOTALL | re.IGNORECASE)
    if head_match:
        head_open, head_inner, head_close = head_match.group(1), head_match.group(2), head_match.group(3)

        # Regex pattern matching sequence of <link rel="stylesheet"...> tags and/or <style>...</style> blocks
        styles_pattern = r'(\s*<link\s+rel=["\']stylesheet["\'].*?>\s*|\s*<style.*?>.*?</style>\s*)+'

        if re.search(styles_pattern, head_inner, re.DOTALL | re.IGNORECASE):
            new_head_inner = re.sub(
                styles_pattern,
                f"\n{replacement_head_css}\n",
                head_inner,
                count=1,
                flags=re.DOTALL | re.IGNORECASE
            )
            content = content[:head_match.start()] + head_open + new_head_inner + head_close + content[head_match.end():]

    # Match and replace .topbar header
    topbar_match = re.search(r'<header\s+class=["\']topbar["\'].*?>.*?</header>', content, re.DOTALL | re.IGNORECASE)
    if topbar_match:
        topbar_html = topbar_match.group(0)
        nav_match = re.search(r'<nav\s+class=["\']topbar-nav["\'].*?>(.*?)</nav>', topbar_html, re.DOTALL | re.IGNORECASE)

        jump_links_html = ""
        if nav_match:
            nav_inner = nav_match.group(1)
            # Find all <a> tags inside topbar-nav
            a_matches = re.finditer(r'<a\s+([^>]*href=["\'][^"\']*["\'][^>]*)>(.*?)</a>', nav_inner, re.DOTALL | re.IGNORECASE)
            formatted_links = []
            for m in a_matches:
                attrs = m.group(1)
                label = m.group(2).strip()
                if 'class=' in attrs:
                    attrs = re.sub(r'class=["\']([^"\']*)["\']', r'class="sd-jump-link \1"', attrs)
                else:
                    attrs = f'class="sd-jump-link" {attrs}'
                formatted_links.append(f'      <a {attrs}>{label}</a>')
            jump_links_html = "\n".join(formatted_links)

        new_chrome_header = (
            '<nav id="cosy-nav"></nav>\n\n'
            '<!-- Sticky Header -->\n'
            '<header class="sd-sticky-header">\n'
            '  <div class="sd-header-inner">\n'
            '    <nav class="sd-jump-links" aria-label="In-page section navigation">\n'
            f'{jump_links_html}\n'
            '    </nav>\n'
            '  </div>\n'
            '</header>'
        )

        content = content[:topbar_match.start()] + new_chrome_header + content[topbar_match.end():]

    return content


def main():
    parser = argparse.ArgumentParser(description="Swap page chrome to shared COSYlanguages layout system.")
    parser.add_argument("files", nargs="*", help="HTML files to process")
    parser.add_argument("--file-list", help="File containing list of HTML file paths, one per line")

    args = parser.parse_args()

    files_to_process = list(args.files)
    if args.file_list:
        with open(args.file_list, "r", encoding="utf-8") as f:
            for line in f:
                path = line.strip()
                if path:
                    files_to_process.append(path)

    if not files_to_process:
        print("Error: No files specified.", file=sys.stderr)
        sys.exit(1)

    processed_count = 0
    for filepath in files_to_process:
        if not os.path.isfile(filepath):
            print(f"Warning: File not found: {filepath}", file=sys.stderr)
            continue

        transformed = transform_html(filepath)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(transformed)
        processed_count += 1

    print(f"Successfully processed {processed_count} HTML files.")


if __name__ == "__main__":
    main()
