import { useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "GitHub Pages 3" },
		{
			name: "description",
			content: "SemVer 式の tag つけて push するごとに GitHub Pages としてデプロイするサンプル。",
		},
	];
}

function CounterButton({ initialCount = 0 }: { initialCount?: number }) {
	const [count, setCount] = useState(initialCount);
	return (
		<button type="button" onClick={() => setCount((count) => count + 1)}>
			count is {count}
		</button>
	);
}

export default function Home() {
	return (
		<>
			<h1>GitHub Pages 3</h1>
			<p>SemVer 式の tag つけて push するごとに GitHub Pages としてデプロイするサンプル。</p>
			<div>
				<CounterButton /> <CounterButton initialCount={999} />
			</div>
			<p>
				参考:{" "}
				<a href="https://vitejs.dev/guide/static-deploy.html#github-pages">
					Deploying a Static Site | Vite
				</a>
			</p>
		</>
	);
}
