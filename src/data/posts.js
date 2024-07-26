export const posts = [
    {
        id: 1,
        img: "/multilingual-blog/assets/images/placeholder.jpg",
        date: [18, 6, 2024],
        author: ["Mok", "link1", "link2",],
        postLanguages: {
            ENGLISH: {       
                title: "My First Post",
                description: "Hello World! My first ever post here on the blog",
                content: "This blog is nothing special, just a fun project, and maybe I'll keep posting from time to time on it, my thoughts and so on.\nBut until then, have a great day!\n -Mok"
            },
            GERMAN: {       
               title: "Mein Erster Post",
               description: "Hallo World! Mein allererster Post hier im Blog",
               content: "Dieser Blog ist nichts Besonderes, nur ein lustiges Projekt und vielleicht werde ich von Zeit zu Zeit weiter darauf posieren, meine Gedanken und so weiter, aber bis dahin wünsche ich Ihnen einen schönen Tag! -Mok"
           },

        }
    },
    {
        id: 2,
        img: "/multilingual-blog/assets/images/placeholder.jpg",
        date: [8, 7, 2024],
        author: ["Mok"],
        postLanguages: {
            ENGLISH: {       
                title: "It's still alive..",
                description: "still working on this blog.. kind of",
                content: "Not sure what to write here tbh but hey! how's it going?"
            }
        }
    }
];

export const postTemplate = {
    id: null,
    img: "/multilingual-blog/assets/images/placeholder.jpg",
    date: [0, 0, 1111],
    author: ["USER1", "USER2"],
    postLanguages: {
        ENGLISH: {       
            title: null,
            description: null,
            content: null
        },
    }
}