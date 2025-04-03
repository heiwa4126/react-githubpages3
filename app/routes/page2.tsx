import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Page 2 - GitHub Pages 3" },
		{
			name: "description",
			content: "とあるページ2だよ",
		},
	];
}

export default function Page() {
	return (
		<>
			<h1>Page 2</h1>
			<p>ここは、とあるページ2だよ。嘘いつわりないよ。 遅延ロードはまだやりかたがわからないよ。</p>
		</>
	);
}
