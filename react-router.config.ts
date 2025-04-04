import type { Config } from "@react-router/dev/config";

import products from "app/assets/products.json";
import type { Products } from "app/routes/products/types";

const productsKeys = Object.keys(products as Products) as Array<keyof Products>;

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: false,
	async prerender() {
		const productPages = productsKeys.map((key) => `/products/${key}`);
		return ["/", "/page1", "/products", ...productPages];
	},
} satisfies Config;
