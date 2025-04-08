import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	base: process.env.GITHUB_REPO_NAME ?? "/",
	plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
	build: {
		rollupOptions: {
			external: ["react", "react-dom/client"],
		},
	},
	// esbuild: {
	// 	drop: ["console", "debugger"], // https://esbuild.github.io/api/#drop
	// },
});
