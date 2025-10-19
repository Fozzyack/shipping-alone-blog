import Navbar from "~/components/Navbar";
import type { Route } from "./+types/articles";
import ArticleList from "~/articles/article-list";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Articles" },
        { name: "description", content: "Browse all articles" },
    ];
}

export default function Articles() {
    return (
        <div className="relative min-h-screen">
            <Navbar />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,41,59,0.6),_transparent_70%)]" />
            <ArticleList />
        </div>
    );
}
