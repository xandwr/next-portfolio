export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "xandwrland",
	description: "Xander Pickering's developer portfolio, built using Next.js",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "Projects",
			href: "/projects"
		}
	],
	links: {
		github: "https://github.com/xandwr",
	},
	projectLinks: [
		{
			name: "The Prisoner's Dilemma",
			href: "https://prisoners-dilemma-nine.vercel.app/",
			sourceHref: "https://github.com/xandwr/prisoners-dilemma",
		},
		{
			name: "2D Verlet Integration Solver",
			href: "https://github.com/xandwr/VerletSolver",
			sourceHref: "https://github.com/xandwr/VerletSolver",
		}
	]
};
