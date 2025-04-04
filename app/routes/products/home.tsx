import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "製品一覧 - GitHub Pages 3" },
		{
			name: "description",
			content: "製品一覧のページ",
		},
	];
}

export default function Page() {
	return (
		<>
			<h1>製品一覧</h1>
			<p>ここは製品一覧ページだよ</p>
		</>
	);
}
