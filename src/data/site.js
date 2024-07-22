const site = {
    ENGLISH: {
        header: {
            tagline: "Just One Page",
            navmenu: ["Blog", "About", "Source", "New Post"],
            language: "Language",
            langs: ["English","German","French","Spanish","Japanese"]
        },
        body: {
            readMore: "Read More",
            postErr: null // no error becuase english is the default language for the site
        }
    },
    GERMAN: {
        header: {
            tagline: "Nur eine Seite",
            navmenu: ["Blog", "Über", "Quelle", "Neuer Post"],
            language: "Sprache",
            langs: ["Englisch","Deutsch","Französisch","Spanisch","japanisch"]
        },
        body: {
            readMore: "Mehr lesen",
            postErr: "Dieser Post ist nicht auf \"Deutsch\" verfügbar. Sie können ihn aber trotzdem auf Englisch lesen."
        }
    },
    FRENCH: {
        header: {
            tagline: "Juste une page",
            navmenu: ["Blog", "Sur", "À propos", "Nouveau Post"],
            language: "Langue",
            langs: ["Anglais","Allemand","Français","Espagnol","Japonais"]
        },
        body: {
            readMore: "En savoir plus",
            postErr: "Cet article n'est pas disponible en \"Français\". Mais vous pouvez toujours le consulter en anglais."
        }
    },
    SPANISH: {
        header: {
            tagline: "Sólo una página",
            navmenu: ["Blog", "Encima", "A proposito", "Nueva Post"],
            language: "Idioma",
            langs: ["Inglés","Alemán","Francés","Español","japonés"]
        },
        body: {
            readMore: "En savoir plus",
            postErr: "Esta publicación no está disponible en \"español\". Pero aún puedes verlo en inglés."
        }
    },
    JAPANESE: {
        header: {
            tagline: "たった1ページ",
            navmenu: ["ブログ", "について", "ソース", "新しい投稿"],
            language: "言語",
            langs: ["英語","ドイツ人","フランス語","スペイン語","日本語"]
        },
        body: {
            readMore: "続きを読む",
            postErr: "この投稿は日本語ではご利用いただけません。ただし、英語では閲覧できます。"
        }
    }
};

export default site