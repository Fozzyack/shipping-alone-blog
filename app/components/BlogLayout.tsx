import type { ReactNode } from "react";
import Navbar from "./Navbar";
import ShippingAloneTag from "./ShippingAloneTag";
import type { articleType } from "~/constants/blog-exerpts";

interface BlogLayoutInterface {
    article: articleType | undefined;
    children: ReactNode;
}
const BlogLayout = ({ article, children }: BlogLayoutInterface) => {
    if (!article) {
        return (
            <div className="relative text-slate-100">
                <Navbar />
                <div className="relative z-10 mx-auto flex flex-col items-center justify-center min-h-screen w-full max-w-5xl px-6 pb-16 pt-20 sm:px-10 md:pt-32">
                    <div className="py-3 px-8 rounded-full font-bold border-3 border-cyan-400 bg-cyan-400/30">
                        <h3 className="text-2xl text-cyan-400 uppercase tracking-[0.2em]">
                            Sorry
                        </h3>
                    </div>
                    <p className="mt-4">
                        There was an error Loading this blog.
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div className="relative text-slate-100">
            <Navbar />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,41,59,0.6),_transparent_70%)]" />
            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 pb-16 pt-28 sm:px-10 md:pt-32">
                <div className="border-b border-slate-800 py-4 grid grid-cols-1 md:grid-cols-12">
                    <div className="col-span-1 md:col-span-8">
                        <ShippingAloneTag />
                        <h1> {article.name} </h1>
                        <p className="mt-2 text-slate-400">
                            {" "}
                            {article.excerpt}{" "}
                        </p>
                    </div>
                    <div className="col-span-1 md:col-span-4 flex flex-col mt-4 md:items-end justify-end">
                        <p className="text-cyan-400 uppercase text-xs tracking-[0.2em] mb-2">
                            Date:
                        </p>

                        <span className="text-white">
                            {new Date(article.date).toLocaleDateString(
                                "en-AU",
                                {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                },
                            )}
                        </span>
                    </div>
                </div>
                <article className="blog-article-container">{children}</article>
            </div>
        </div>
    );
};

export default BlogLayout;
