import type { MetadataRoute } from "next";

// Fork (mobile): installable as a standalone home-screen app. Icons come from
// scripts/make-pwa-icons.mjs; the colors match the default dark background.
export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Learning Harness",
		short_name: "LearnHarness",
		description: "A teacher agent with a memory — sessions, quizzes, and a knowledge graph of what you know.",
		start_url: "/",
		display: "standalone",
		background_color: "#141414",
		theme_color: "#141414",
		icons: [
			{ src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
			{ src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
		],
	};
}
