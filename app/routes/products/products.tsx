import type { Route } from "./+types/products";

export function meta({ params }: Route.MetaArgs) {
	return [
		console.log({ params }),
		{ title: `製品 ${params.id} - GitHub Pages 3` },
		{
			name: "description",
			content: `${params.id}という製品のページ`,
		},
	];
}

export default function Products({ params }: Route.MetaArgs) {
	return (
		<>
			<h1>製品 {params.id}</h1>
			<p>製品情報</p>
		</>
	);
}
