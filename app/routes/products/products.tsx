import { Link } from "react-router";
import products from "../../assets/products.json";
import type { Route } from "./+types/products";
import type { Product, Products } from "./types";

export function meta({ params }: Route.MetaArgs) {
	const product: Product = (products as Products)[params.id];

	return [
		{ title: `製品 ${product.name} - GitHub Pages 3` },
		{
			name: "description",
			content: `${product.name}という製品のページ`,
		},
	];
}

export default function EachProduct({ params }: Route.MetaArgs) {
	const product: Product = (products as Products)[params.id];

	return (
		<>
			<h1>製品: {product.name}</h1>
			<h2>製品情報</h2>
			<p>{product.description}</p>
			<p>
				<Link to="/products">製品一覧に戻る</Link>
			</p>
		</>
	);
}
