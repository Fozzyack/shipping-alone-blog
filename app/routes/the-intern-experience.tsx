import BlogLayout from "~/components/BlogLayout";
import { articles } from "~/constants/blog-exerpts";

const TheInternExperienceBlogPost = () => {
    const article = articles.find(article => article.id == "the-intern-experience-1")
    return (
        <BlogLayout article={article}>
            <div>
            </div>
        </BlogLayout>
    );
};

export default TheInternExperienceBlogPost;
