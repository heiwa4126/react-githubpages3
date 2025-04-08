import {
	Links,
	Meta,
	NavLink,
	Outlet,
	Scripts,
	ScrollRestoration,
	isRouteErrorResponse,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export function HydrateFallback() {
	return <p>Loading, please wait...</p>;
}

export async function clientLoader() {}

export const links: Route.LinksFunction = () => [
	// { rel: "preconnect", href: "https://fonts.googleapis.com" },
	// {
	// 	rel: "preconnect",
	// 	href: "https://fonts.gstatic.com",
	// 	crossOrigin: "anonymous",
	// },
	// {
	// 	rel: "stylesheet",
	// 	href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	// },
];

function Navbar() {
	return (
		<nav>
			<NavLink to="">Home</NavLink>
			<NavLink to="page1">Page 1</NavLink>
			<NavLink to="page2">Page 2</NavLink>
			<NavLink to="products">製品一覧</NavLink>
		</nav>
	);
}

function ImportMap() {
	const map = {
		react: "https://esm.sh/react@19",
		"react-dom/client": "https://esm.sh/react-dom@19/client",
		// "react-router": "https://esm.sh/react-router@7",
	};

	return (
		<script
			type="importmap"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
			dangerouslySetInnerHTML={{ __html: JSON.stringify({ imports: map }) }}
		/>
	);
}

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<head>
				{/* {process.env.GITHUB_REPO_NAME && <base href="/client/" />} */}
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{process.env.NODE_ENV === "production" && ImportMap()}
				<Meta />
				<Links />
			</head>
			<body className="prose max-w-none p-4">
				<Navbar />
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
