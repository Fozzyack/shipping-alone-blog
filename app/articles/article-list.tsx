import { articles } from "~/constants/blog-exerpts";
import ArticleCard from "./article-card";

const ArticleList = () => {
    return (
        <div className="relative z-10 mx-auto min-h-screen w-full max-w-5xl text-slate-300 flex-col px-6 pt-28 md:pt-32">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 ">
                {articles.map((article, index) => (
                    <ArticleCard
                        key={index}
                        header={article.name}
                        link={article.link}
                        exerpt={article.excerpt}
                        date={new Date(article.date)}
                        extraClassName=""
                    />
                ))}
            </div>
        </div>
    );
};

export default ArticleList;
