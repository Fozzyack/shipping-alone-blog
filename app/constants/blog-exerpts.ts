export enum levels {
    INTERN = 0,
    JUNIOR = 1,
    INTERMEDIATE = 2,
    SENIOR = 3,
}

export type articleType = {
    id: string;
    name: string;
    excerpt: string;
    link: string;
    experience: number;
    date: string;
};

export const articles: Array<articleType> = [
    {
        id: "the-intern-experience-1",
        name: "The Intern Experience",
        excerpt: "I have learnt that I am actually not to sure what I'm doing",
        link: "/the-intern-experience-1",
        experience: levels.INTERN,
        date: "10/23/25",
    },
];
