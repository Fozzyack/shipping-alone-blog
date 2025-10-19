import Navbar from "~/components/Navbar";
import { articles } from "~/constants/blog-exerpts";

export function Landing() {
    return (
        <div className="relative text-slate-100">
            <Navbar />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,41,59,0.6),_transparent_70%)]" />
            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 pb-16 pt-20 sm:px-10 md:pt-32">
                <header className="pt-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                        {" "}
                        Shipping Alone{" "}
                    </p>
                    <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-right text-slate-50 sm:text-5xl">
                        Just a dev, Shipping alone.
                    </h1>
                    <p className="mt-5 max-w-2xl text-base text-slate-300">
                        Welcome to my personal blog where I share my journey as
                        a developer. Here you'll find insights on technology,
                        programming tips, project showcases, and the occasional
                        life lesson learned along the way.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#posts"
                            className="inline-flex items-center justify-center rounded-full bg-cyan-500/80 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-400 transition-all ease-in-out"
                        >
                            Read the latest dispatches
                        </a>
                    </div>
                </header>
                <main className="mt-16 space-y-16">
                    <section className="pt-10">
                        {articles.slice(0, 3).map((article, index) => (
                            <div
                                key={index}
                                className="border-t border-slate-800 grid grid-cols-12 py-6"
                            >
                                <div className="space-y-2 col-span-12 md:col-span-8">
                                    <h4 className="text-cyan-500 text-lg uppercase tracking-[0.3em]">
                                        {article.name}
                                    </h4>
                                    <p>{article.excerpt}</p>
                                </div>
                                <div className="sm:col-span-1 col-span-12 py-4 sm:py-0" />
                                <div className="text-sm space-y-2 sm:col-span-3 col-span-12">
                                    <p className="text-cyan-400 tracking-[0.3em] uppercase">
                                        Date
                                    </p>
                                    <p className="">
                                        {new Date(article.date).toLocaleString(
                                            "en-AU",
                                            {
                                                weekday: "long",
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            },
                                        )}
                                    </p>
                                    <a href={article.link}>
                                        <div className="px-4 py-2 bg-slate-800/30 flex items-center justify-center rounded-full gap-3 border-2 border-cyan-400 hover:-translate-y-1 transition-all ease-in-out">
                                            <p className="text-sm uppercase tracking-wide">
                                                Link
                                            </p>
                                            <svg
                                                className="w-5 h-5 text-cyan-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                        <div className="border-b border-slate-800"></div>
                    </section>
                </main>

                <section className="mt-5 pt-5">
                    <div className="space-y-8">
                        <h2 className="text-cyan-500 text-lg uppercase tracking-[0.3em]">
                            About This Blog
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-slate-200 text-lg font-semibold">
                                    My Journey
                                </h3>
                                <p className="text-slate-300 leading-relaxed">
                                    As a passionate developer, I've been
                                    navigating the ever-evolving world of
                                    technology for several years. This blog is
                                    my way of documenting lessons learned,
                                    sharing discoveries, and connecting with
                                    fellow developers.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-slate-200 text-lg font-semibold">
                                    What to Expect
                                </h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Expect honest takes on development
                                    challenges, practical tutorials, project
                                    breakdowns, and occasional reflections on
                                    the industry. Whether you're a beginner or
                                    seasoned pro, there's something here for
                                    everyone.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
