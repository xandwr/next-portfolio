import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title({ color: "blue" })}>xandwrland&nbsp;</h1>
					<br />
					<h4 className={subtitle({ class: "mt-2" })}>
						Welcome to my digital playground.
					</h4>
				</div>

				<div className="flex gap-3">
					{siteConfig.navItems.slice(1).map((item) => (
						<NextLink key={item.href}
							className={clsx(
								linkStyles({ color: "foreground" }),
								buttonStyles({ variant: "bordered", radius: "full" }),
								"data-[active=true]:text-primary data-[active=true]:font-medium variant"
							)}
							color="foreground"
							href={item.href}
						>
							{item.label}
						</NextLink>
					))}
				</div>
			</section>
		</DefaultLayout>
	);
}
