interface ArticleCardProp {
    extraClassName: string | null | undefined;
    header: string;
    exerpt: string;
    link: string;
    date: Date;
}

const ArticleCard = ({
    extraClassName,
    header,
    exerpt,
    link,
    date,
}: ArticleCardProp) => {
    if (!extraClassName) {
        extraClassName = "";
    }
    return (
        <a
            href={link}
            className={`${extraClassName} border-2 h-[300px] flex flex-col justify-between border-slate-800 bg-slate-950/80 rounded-2xl p-8 hover:-translate-y-1 hover:border-cyan-400 transition-all ease-in-out duration-150`}
        >
            <div className="space-y-2">
                <h4 className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
                    {header}
                </h4>
                <p>{exerpt}</p>
            </div>
            <div className="space-y-2">
                <p className="text-cyan-400 uppercase text-xs tracking-[0.2em]">
                    Date:
                </p>
                <p>
                    {" "}
                    {date.toLocaleString("en-AU", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}{" "}
                </p>
            </div>
        </a>
    );
};

export default ArticleCard;
