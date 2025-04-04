import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("page1", "routes/page1.tsx"),
	route("page2", "routes/page2.tsx"),
	...prefix("products", [
		index("routes/products/home.tsx"),
		route(":id", "routes/products/products.tsx"),
	]),
	// route("*", "routes/notFound.tsx"),
] satisfies RouteConfig;
