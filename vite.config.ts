import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	// base: process.env.GITHUB_REPO_NAME ?? "/",
	// base: "/client/",
	plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
	build: {
		rollupOptions: {
			external: [
				"react",
				"react-dom/client",
				// "react-router"
			],
		},
	},
	// esbuild: {
	// 	drop: ["console", "debugger"], // https://esbuild.github.io/api/#drop
	// },
});
