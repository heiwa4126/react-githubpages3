import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Page 1 - GitHub Pages 3" },
		{
			name: "description",
			content: "とあるページ1だよ",
		},
	];
}

export default function Page() {
	return (
		<>
			<h1>Page 1</h1>
			<p>ここは、とあるページ1だよ。嘘いつわりないよ</p>
		</>
	);
}
