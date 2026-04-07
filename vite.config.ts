import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	// base: process.env.GITHUB_REPO_NAME ?? "/",
	// base: "/client/",
	plugins: [tailwindcss(), reactRouter()],
	resolve: {
		tsconfigPaths: true,
	},
	build: {
		minify: true,
		rolldownOptions: {
			external: ["react", "react-dom/client"],
			output: {
				minify: {
					compress: {
						dropConsole: true,
						dropDebugger: true,
					},
				},
			},
		},
	},
	// esbuild: {
	// 	drop: ["console", "debugger"], // https://esbuild.github.io/api/#drop
	// },
});
