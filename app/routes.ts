import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("articles", "routes/articles.tsx"),
    route("the-intern-experience-1", "routes/the-intern-experience.tsx")
] satisfies RouteConfig;
