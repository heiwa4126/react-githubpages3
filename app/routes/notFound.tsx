import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Not Found - GitHub Pages 3" },
		{
			name: "description",
			content: "Not Found",
		},
	];
}

export default function Page() {
	return (
		<>
			<h1>Not Found</h1>
			<p>存在しないページ</p>
			<div>
				<Link to="/">Home</Link>
			</div>
		</>
	);
}
