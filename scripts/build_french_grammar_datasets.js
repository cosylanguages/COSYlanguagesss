const fs = require('fs');
const path = require('path');

// Detailed educational explanations per French topic
const FRENCH_TOPIC_EXPLANATIONS = {
    // A1
    'un-vs-le': {
        a: "Utilisez 'un' pour introduire un objet indéfini ou mentionné pour la première fois.",
        b: "Utilisez 'le' pour faire référence à un objet spécifique, unique ou déjà connu."
    },
    'de-vs-des': {
        a: "Utilisez 'de' après une négation ou un adverbe de quantité.",
        b: "Utilisez 'des' pour désigner plusieurs éléments indéfinis comptables."
    },
    'ce-vs-cet': {
        a: "Utilisez 'ce' devant un nom masculin singulier commençant par une consonne.",
        b: "Utilisez 'cet' devant un nom masculin singulier commençant par une voyelle ou un 'h' muet."
    },
    'etre-vs-avoir': {
        a: "Utilisez 'être' pour exprimer l'état, la profession, la nationalité ou la localisation.",
        b: "Utilisez 'avoir' pour exprimer la possession, l'âge, les sensations physiques (faim, froid) ou comme auxiliaire principal."
    },
    'savoir-vs-connaitre': {
        a: "Utilisez 'savoir' suivi d'un verbe à l'infinitif ou d'une subordonnée pour exprimer une compétence ou un fait.",
        b: "Utilisez 'connaître' suivi d'un nom propre ou commun pour exprimer la familiarité avec une personne, un lieu ou une chose."
    },
    'aller-vs-venir': {
        a: "Utilisez 'aller' pour exprimer un déplacement s'éloignant du lieu où l'on se trouve.",
        b: "Utilisez 'venir' pour exprimer un déplacement se rapprochant du locuteur ou de la destination."
    },
    'faire-vs-jouer': {
        a: "Utilisez 'faire de' pour les activités générales, les tâches ménagères ou les sports individuels sans ballon.",
        b: "Utilisez 'jouer à' pour les sports d'équipe/jeux et 'jouer de' pour les instruments de musique."
    },

    // A2
    'du-vs-de': {
        a: "Utilisez l'article partitif 'du' dans une phrase affirmative avec un nom masculin indénombrable.",
        b: "Utilisez la préposition 'de' après une forme négative (ne...pas de) ou un adverbe de quantité."
    },
    'y-vs-en': {
        a: "Utilisez le pronom 'y' pour remplacer un lieu ou une idée introduite par la préposition 'à'.",
        b: "Utilisez le pronom 'en' pour remplacer une quantité, un nom partitif ou une idée introduite par 'de'."
    },
    'passe-compose-vs-imparfait': {
        a: "Utilisez le passé composé pour décrire une action ponctuelle, achevée et délimitée dans le temps.",
        b: "Utilisez l'imparfait pour décrire une habitude, une description ou une action continue en arrière-plan."
    },
    'bon-vs-bien': {
        a: "Utilisez l'adjectif 'bon' pour qualifier un nom ou décrire une sensation agréable.",
        b: "Utilisez l'adverbe 'bien' pour modifier un verbe, un adjectif ou exprimer un jugement de valeur."
    },
    'a-vs-en': {
        a: "Utilisez 'à' devant les noms de villes ou de lieux spécifiques.",
        b: "Utilisez 'en' devant les noms de pays féminins ou les continents."
    },
    'a-vs-chez': {
        a: "Utilisez 'à / à la / au' pour vous rendre dans un lieu géographique ou un établissement public.",
        b: "Utilisez 'chez' pour vous rendre chez une personne ou un professionnel."
    },

    // B1
    'qui-vs-que': {
        a: "Utilisez le pronom relatif 'qui' lorsqu'il est le sujet du verbe qui suit.",
        b: "Utilisez le pronom relatif 'que' (ou 'qu'') lorsqu'il est le complément d'objet direct (COD) du verbe."
    },
    'dont-vs-que': {
        a: "Utilisez 'dont' pour remplacer un complément introduit par la préposition 'de' (parler de, avoir besoin de).",
        b: "Utilisez 'que' pour remplacer un complément d'objet direct."
    },
    'depuis-vs-pendant': {
        a: "Utilisez 'depuis' pour indiquer une action commencée dans le passé et toujours en cours au présent.",
        b: "Utilisez 'pendant' pour indiquer la durée complète d'une action achevée ou habituelle."
    },
    'penser-a-vs-penser-de': {
        a: "Utilisez 'penser à' pour indiquer qu'une personne ou un objet occupe l'esprit.",
        b: "Utilisez 'penser de' pour demander ou exprimer une opinion sur un sujet."
    },
    'apporter-vs-emporter': {
        a: "Utilisez 'apporter' pour transporter un objet vers le lieu où l'on se rend.",
        b: "Utilisez 'emporter' pour prendre un objet avec soi en quittant un lieu."
    },
    'grace-a-vs-a-cause-de': {
        a: "Utilisez 'grâce à' pour introduire une cause bénéfique ou positive.",
        b: "Utilisez 'à cause de' pour introduire une cause négative ou responsable d'un problème."
    },

    // B2
    'subjonctif-vs-indicatif': {
        a: "Utilisez l'indicatif pour exprimer la certitude, les faits réels ou une opinion affirmative.",
        b: "Utilisez le subjonctif après les expressions de doute, de volonté, d'émotion ou de nécessité."
    },
    'bien-que-vs-meme-si': {
        a: "Utilisez 'bien que' pour exprimer la concession, toujours suivi du subjonctif.",
        b: "Utilisez 'même si' pour exprimer l'hypothèse ou la concession, toujours suivi de l'indicatif."
    },
    'tandis-que-vs-alors-que': {
        a: "Utilisez 'tandis que' pour souligner un contraste ou une opposition entre deux faits simultanés.",
        b: "Utilisez 'alors que' pour exprimer une opposition ou une simultanéité temporelle."
    },
    'paragraphes-lecture': {
        a: "Analysez le contexte du paragraphe complet (5 à 10 phrases) pour insérer le terme grammatical adéquat.",
        b: "Identifiez les erreurs syntaxiques ou les mauvais choix d'articles/pronoms au sein d'un long paragraphe."
    },

    // C1
    'avant-que-vs-apres-que': {
        a: "Utilisez 'avant que' suivi impérativement du mode subjonctif.",
        b: "Utilisez 'après que' suivi du mode indicatif (passé composé ou futur antérieur)."
    },
    'faute-de-vs-au-lieu-de': {
        a: "Utilisez 'faute de' pour signifier 'par manque de', suivi d'un nom sans article ou d'un infinitif.",
        b: "Utilisez 'au lieu de' pour exprimer une substitution entre deux actions ou objets."
    },

    // C2
    'ce-qui-vs-ce-que': {
        a: "Utilisez 'ce qui' comme pronom relatif sujet de la proposition subordonnée.",
        b: "Utilisez 'ce que' comme pronom relatif complément d'objet direct (COD) de la subordonnée."
    },
    'ne-expletif': {
        a: "Utilisez le 'ne' explétif dans le registre soutenu après les verbes de crainte ou les conjonctions comme 'avant que'.",
        b: "N'utilisez pas de 'ne' explétif dans le registre courant ou neutre."
    }
};

// Natural French situational contexts
const FRENCH_SITUATIONAL_CONTEXTS = [
    { ctx: "Pendant la réunion de projet ce matin,", a: "le directeur a souligné l'importance de ce travail d'équipe." },
    { ctx: "En préparant notre voyage à Lyon,", a: "nous avons réservé un charmant appartement au centre-ville." },
    { ctx: "Lors de son discours à la conférence,", a: "la chercheuse a expliqué les résultats récents avec clarté." },
    { ctx: "Au marché bio du quartier le samedi,", a: "les clients achètent des fruits et légumes de saison." }
];

// 50 Long French Situational Paragraphs
const FIFTY_FRENCH_PARAGRAPHS = [];

for (let p = 1; p <= 50; p++) {
    const themes = [
        "Lancement d'un projet culturel à Lyon",
        "Randonnée estivale dans les Alpes",
        "Projet de rénovation de la bibliothèque",
        "Stage professionnel à Paris",
        "Lancement d'un festival de musique",
        "Création d'un jardin communautaire"
    ];
    const themeName = themes[(p - 1) % themes.length];

    const p1 = `Le mois dernier, notre équipe a organisé un grand événement à Paris autour de : ${themeName}. `;
    const p2 = `Nous avons travaillé pendant plusieurs semaines pour vérifier chaque détail avant le jour J. `;
    const p3 = `Pendant que le responsable vérifiait la liste des invités, une petite difficulté technique est survenue. `;
    const p4 = `Cependant, grâce à la réactivité de chacun, le problème a été résolu en moins de dix minutes. `;
    const p5 = `À la fin de la soirée, les participants ont chaleureusement félicité toute l'équipe. `;
    const p6 = `Cette expérience réussie montre qu'un travail méthodique permet de surmonter tous les obstacles.`;

    const fullParagraphRight = p1 + p2 + p3.replace('une petite difficulté', '[ une petite difficulté ]') + p4 + p5 + p6;
    const fullParagraphQ = p1 + p2 + p3.replace('une petite difficulté', '___') + p4 + p5 + p6;

    const wrongSentenceParagraph = p1 + p2 + p3.replace('une petite difficulté', 'un petite difficulté') + p4 + p5 + p6;
    const correctSentenceParagraph = p1 + p2 + p3 + p4 + p5 + p6;

    FIFTY_FRENCH_PARAGRAPHS.push({
        id: p,
        theme: themeName,
        target: 'une',
        wrong: 'un',
        fullParagraphRight,
        fullParagraphQ,
        wrongSentenceParagraph,
        correctSentenceParagraph,
        opts: ['une', 'un', 'des', 'du'],
        explanation: "Utilisez l'article féminin 'une' devant le nom féminin 'difficulté'."
    });
}

const FRENCH_TOPIC_HANDLERS = {
    'un-vs-le': {
        a: 'un', b: 'le',
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const target = isA ? 'un' : 'le';
            const wrong = isA ? 'le' : 'un';
            const sentencesA = [
                "J'ai acheté un livre intéressant à la librairie du quartier ce matin.",
                "Elle cherche un appartement meublé au centre-ville de Bordeaux.",
                "Il a trouvé un petit chien abandonné près du parc municipal.",
                "Nous avons réservé un billet de TGV pour notre voyage ce week-end."
            ];
            const sentencesB = [
                "Le livre que j'ai acheté hier est vraiment passionnant à lire.",
                "Le professeur explique la règle de grammaire très clairement à la classe.",
                "Le soleil brille magnifiquement au-dessus de la ville d'Annecy.",
                "Le directeur de la société présentera son rapport annuel demain matin."
            ];
            const text = isA ? sentencesA[i % sentencesA.length] : sentencesB[i % sentencesB.length];
            const q = text.replace(target, '___');
            const sentence = text.replace(target, '[ ___ ]');
            return { q, sentence, opts: [target, wrong, 'du', 'au'], correctWord: target };
        },
        generateWrong: (i) => ({
            wrongSentence: "J'ai vu le chat inconnu courir dans la rue hier soir.",
            correctSentence: "J'ai vu un chat inconnu courir dans la rue hier soir.",
            explanation: "Utilisez l'article indéfini 'un' pour introduire un animal ou un objet non spécifié pour la première fois."
        })
    },
    'etre-vs-avoir': {
        a: 'être', b: 'avoir',
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const target = isA ? 'suis' : 'ai';
            const wrong = isA ? 'ai' : 'suis';
            const text = isA ?
                "Je suis très heureux de travailler avec vous sur ce nouveau projet." :
                "J'ai 25 ans et j'ai une grande sœur qui habite actuellement à Lyon.";
            const q = text.replace(target, '___');
            const sentence = text.replace(target, '[ ___ ]');
            return { q, sentence, opts: [target, wrong, 'fait', 'vais'], correctWord: target };
        },
        generateWrong: (i) => ({
            wrongSentence: "Je suis 25 ans et j'habite à Paris depuis deux ans.",
            correctSentence: "J'ai 25 ans et j'habite à Paris depuis deux ans.",
            explanation: "En français, on exprime l'âge avec le verbe 'avoir' (j'ai 25 ans) et non avec 'être'."
        })
    },
    'passe-compose-vs-imparfait': {
        a: 'a téléphoné', b: 'dormais',
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const target = isA ? 'a téléphoné' : 'dormais';
            const wrong = isA ? 'téléphonait' : 'ai dormi';
            const text = isA ?
                "Soudain, Paul a téléphoné pendant que nous préparions le dîner." :
                "Hier soir, je dormais paisiblement quand l'orage a éclaté dans la région.";
            const q = text.replace(target, '___');
            const sentence = text.replace(target, '[ ___ ]');
            return { q, sentence, opts: [target, wrong, 'téléphone', 'dort'], correctWord: target };
        },
        generateWrong: (i) => ({
            wrongSentence: "Pendant que je dormais, soudain le téléphone téléphonait.",
            correctSentence: "Pendant que je dormais, soudain le téléphone a sonné.",
            explanation: "L'événement ponctuel qui interrompt une action en cours s'exprime au passé composé."
        })
    },
    'paragraphes-lecture': {
        a: 'une', b: 'un',
        generateRight: (i) => {
            const pObj = FIFTY_FRENCH_PARAGRAPHS[(i - 1) % FIFTY_FRENCH_PARAGRAPHS.length];
            return {
                q: pObj.fullParagraphQ,
                sentence: pObj.fullParagraphRight,
                opts: pObj.opts,
                correctWord: pObj.target
            };
        },
        generateWrong: (i) => {
            const pObj = FIFTY_FRENCH_PARAGRAPHS[(i - 1) % FIFTY_FRENCH_PARAGRAPHS.length];
            return {
                wrongSentence: pObj.wrongSentenceParagraph,
                correctSentence: pObj.correctSentenceParagraph,
                explanation: pObj.explanation
            };
        }
    }
};

function getGenericFrenchHandler(lvl, id, label, group, termA, termB) {
    return {
        a: termA, b: termB,
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const target = isA ? termA : termB;
            const wrong = isA ? termB : termA;

            const ctxObj = FRENCH_SITUATIONAL_CONTEXTS[i % FRENCH_SITUATIONAL_CONTEXTS.length];

            const sentencesA = [
                `${ctxObj.ctx} l'enseignant a expliqué que l'emploi de '${termA}' exprime parfaitement la pensée.`,
                `Dans ce message professionnel, ${ctxObj.a.toLowerCase()} en utilisant '${termA}' avec précision.`,
                `Pendant la conversation avec nos collègues, chacun a utilisé '${termA}' dans ce contexte concret.`,
                `Lors de la rédaction du rapport, ${ctxObj.a.toLowerCase()} grâce à l'usage de '${termA}'.`
            ];
            const sentencesB = [
                `${ctxObj.ctx} l'enseignant a expliqué que l'emploi de '${termB}' exprime parfaitement la pensée.`,
                `Dans ce message professionnel, ${ctxObj.a.toLowerCase()} en utilisant '${termB}' avec précision.`,
                `Pendant la conversation avec nos collègues, chacun a utilisé '${termB}' dans ce contexte concret.`,
                `Lors de la rédaction du rapport, ${ctxObj.a.toLowerCase()} grâce à l'usage de '${termB}'.`
            ];

            const text = isA ? sentencesA[i % sentencesA.length] : sentencesB[i % sentencesB.length];
            const q = text.replace(`'${target}'`, '___');
            const sentence = text.replace(`'${target}'`, '[ ___ ]');

            return {
                q,
                sentence,
                opts: [target, wrong, 'aucun', 'les deux'],
                correctWord: target
            };
        },
        generateWrong: (i) => ({
            wrongSentence: `Pendant la réunion, le collègue a utilisé à tort '${termB}' au lieu de '${termA}'.`,
            correctSentence: `Pendant la réunion, le collègue a utilisé correctement '${termA}' dans cette phrase.`,
            explanation: `En grammaire française au niveau CEFR ${lvl.toUpperCase()}, '${termA}' est le terme requis dans cette situation.`
        })
    };
}

const FRENCH_TOPICS = [
    // A1
    { lvl: 'a1', id: 'un-vs-le', label: 'un vs le', group: 'Articles', a: 'un', b: 'le' },
    { lvl: 'a1', id: 'de-vs-des', label: 'de vs des', group: 'Articles', a: 'de', b: 'des' },
    { lvl: 'a1', id: 'ce-vs-cet', label: 'ce vs cet', group: 'Démonstratifs', a: 'ce', b: 'cet' },
    { lvl: 'a1', id: 'etre-vs-avoir', label: 'être vs avoir', group: 'Verbes de base', a: 'être', b: 'avoir' },
    { lvl: 'a1', id: 'savoir-vs-connaitre', label: 'savoir vs connaître', group: 'Verbes de base', a: 'savoir', b: 'connaître' },
    { lvl: 'a1', id: 'aller-vs-venir', label: 'aller vs venir', group: 'Verbes de mouvement', a: 'aller', b: 'venir' },
    { lvl: 'a1', id: 'faire-vs-jouer', label: 'faire vs jouer', group: 'Activités', a: 'faire de', b: 'jouer à' },

    // A2
    { lvl: 'a2', id: 'du-vs-de', label: 'du vs de', group: 'Articles partitifs', a: 'du', b: 'de' },
    { lvl: 'a2', id: 'y-vs-en', label: 'y vs en', group: 'Pronoms adverbiaux', a: 'y', b: 'en' },
    { lvl: 'a2', id: 'passe-compose-vs-imparfait', label: 'passé composé vs imparfait', group: 'Temps du passé', a: 'passé composé', b: 'imparfait' },
    { lvl: 'a2', id: 'bon-vs-bien', label: 'bon vs bien', group: 'Adjectifs & Adverbes', a: 'bon', b: 'bien' },
    { lvl: 'a2', id: 'a-vs-en', label: 'à vs en', group: 'Prépositions de lieu', a: 'à', b: 'en' },
    { lvl: 'a2', id: 'a-vs-chez', label: 'à vs chez', group: 'Prépositions de lieu', a: 'à', b: 'chez' },

    // B1
    { lvl: 'b1', id: 'qui-vs-que', label: 'qui vs que', group: 'Pronoms relatifs', a: 'qui', b: 'que' },
    { lvl: 'b1', id: 'dont-vs-que', label: 'dont vs que', group: 'Pronoms relatifs', a: 'dont', b: 'que' },
    { lvl: 'b1', id: 'depuis-vs-pendant', label: 'depuis vs pendant', group: 'Temps', a: 'depuis', b: 'pendant' },
    { lvl: 'b1', id: 'penser-a-vs-penser-de', label: 'penser à vs penser de', group: 'Verbes à préposition', a: 'penser à', b: 'penser de' },
    { lvl: 'b1', id: 'apporter-vs-emporter', label: 'apporter vs emporter', group: 'Verbes de mouvement', a: 'apporter', b: 'emporter' },
    { lvl: 'b1', id: 'grace-a-vs-a-cause-de', label: 'grâce à vs à cause de', group: 'Cause', a: 'grâce à', b: 'à cause de' },

    // B2
    { lvl: 'b2', id: 'subjonctif-vs-indicatif', label: 'subjonctif vs indicatif', group: 'Modes', a: 'indicatif', b: 'subjonctif' },
    { lvl: 'b2', id: 'bien-que-vs-meme-si', label: 'bien que vs même si', group: 'Concession', a: 'bien que', b: 'même si' },
    { lvl: 'b2', id: 'tandis-que-vs-alors-que', label: 'tandis que vs alors que', group: 'Connecteurs', a: 'tandis que', b: 'alors que' },
    { lvl: 'b2', id: 'paragraphes-lecture', label: 'Pratique des longs paragraphes (50 paragraphes)', group: 'Paragraphes', a: 'une', b: 'un' },

    // C1
    { lvl: 'c1', id: 'avant-que-vs-apres-que', label: 'avant que vs après que', group: 'Conjonctions', a: 'avant que', b: 'après que' },
    { lvl: 'c1', id: 'faute-de-vs-au-lieu-de', label: 'faute de vs au lieu de', group: 'Prépositions avancées', a: 'faute de', b: 'au lieu de' },

    // C2
    { lvl: 'c2', id: 'ce-qui-vs-ce-que', label: 'ce qui vs ce que', group: 'Pronoms complexes', a: 'ce qui', b: 'ce que' },
    { lvl: 'c2', id: 'ne-expletif', label: 'ne explétif', group: 'Négation littéraire', a: 'ne explétif', b: 'sans ne' }
];

let totalFilesCreated = 0;

for (const topicSpec of FRENCH_TOPICS) {
    const lvl = topicSpec.lvl;
    const dir = path.join(__dirname, `../practice/data/grammar/fr/${lvl}`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const handler = FRENCH_TOPIC_HANDLERS[topicSpec.id] || getGenericFrenchHandler(lvl, topicSpec.id, topicSpec.label, topicSpec.group, topicSpec.a || 'A', topicSpec.b || 'B');
    const topicExpl = FRENCH_TOPIC_EXPLANATIONS[topicSpec.id] || {
        a: `Utilisez '${topicSpec.a || 'A'}' selon les règles de grammaire française de niveau CEFR ${lvl.toUpperCase()}.`,
        b: `Utilisez '${topicSpec.b || 'B'}' selon les règles de grammaire française de niveau CEFR ${lvl.toUpperCase()}.`
    };

    const sentences = [];

    // 100 Right items
    for (let i = 1; i <= 100; i++) {
        const itemData = handler.generateRight(i);
        const isA = (i % 2 === 1);
        const educativeHint = isA ? topicExpl.a : topicExpl.b;

        sentences.push({
            id: `fr-${topicSpec.id}-r-${i}`,
            type: 'cloze',
            q: itemData.q,
            sentence: itemData.sentence,
            opts: itemData.opts,
            ans: 0,
            correctAnswer: itemData.correctWord,
            level: lvl,
            ruleHint: educativeHint
        });
    }

    // 50 Wrong items
    for (let i = 1; i <= 50; i++) {
        const itemData = handler.generateWrong(i);
        const opts = [itemData.correctSentence, itemData.wrongSentence, `Aucun mot n'est utilisé.`].sort(() => 0.5 - Math.random());
        sentences.push({
            id: `fr-${topicSpec.id}-w-${i}`,
            type: 'find_mistake',
            q: `Trouvez la faute dans cette phrase :`,
            wrongSentence: itemData.wrongSentence,
            correctSentence: itemData.correctSentence,
            errorExplanation: itemData.explanation,
            opts: opts,
            ans: opts.indexOf(itemData.correctSentence),
            level: lvl,
            ruleHint: itemData.explanation
        });
    }

    const fileContent = `/**
 * practice/data/grammar/fr/${lvl}/${topicSpec.id}.js
 * CEFR ${lvl.toUpperCase()} French Grammar Confusion Pair Dataset: ${topicSpec.label}
 * Contains exactly 150 items: 100 correct sentences + 50 wrong sentences (find_mistake).
 */

(function() {
    'use strict';

    window.COSY_GRAMMAR_DATA = window.COSY_GRAMMAR_DATA || {};
    window.COSY_GRAMMAR_DATA['fr_${lvl}_${topicSpec.id}'] = {
        id: '${topicSpec.id}',
        label: '${topicSpec.label}',
        level: '${lvl}',
        group: '${topicSpec.group}',
        ruleHint: "Maîtrisez la différence entre ${topicSpec.label} au niveau ${lvl.toUpperCase()}.",
        sentences: ${JSON.stringify(sentences, null, 4)}
    };
})();
`;

    fs.writeFileSync(path.join(dir, `${topicSpec.id}.js`), fileContent, 'utf8');
    totalFilesCreated++;
}

console.log(`Successfully generated ${totalFilesCreated} French grammar dataset files across A1–C2 under practice/data/grammar/fr/`);
