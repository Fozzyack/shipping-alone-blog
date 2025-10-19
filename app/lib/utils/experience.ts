export const getExperience = (level: number) => {
    const levelOutput = [
        {
            name: "Intern",
            color: "indigo-300",
        },
        {
            name: "Junior",
            color: "cyan-500",
        },
        {
            name: "Intermediate",
            color: "cyan-500",
        },
        {
            name: "Senior",
            color: "cyan-500",
        },
    ];
    return levelOutput[level];
};
