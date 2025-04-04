import { Link } from "react-router";
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
			<p>ここは、とあるページ2だよ。</p>
			<p>
				このページはわざと prerender() してないよ。
				ここでリロードしたり、このurlでアクセスしようとするとエラーになるよ。 (buildしてから{" "}
				<Link to="/page1">page 1</Link> と比較してね)
			</p>
		</>
	);
}
