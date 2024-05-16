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
		github: "https://github.com/xandwr"
	},
};
