import { NavLink } from "@remix-run/react";

export default function NavBar() {
	return (
    <header className="sm:flex sm:justify-center sm:items-center sm:px-4 sm:py-2">
			<article className="px-4 pb-2 items-center flex">
				<NavLink to="/" className="block py-1 underline-anim underline-animate text-lg">
					Home
				</NavLink>
				<NavLink to="/learning" className="block py-1 underline-anim underline-animate sm:mt-0 sm:ml-4 text-lg">
					Learning Journal
				</NavLink>
				<NavLink to="/projects" className="mt-1 block py-1 underline-anim underline-animate sm:mt-0 sm:ml-4  text-lg">
					Projects
				</NavLink>
				<NavLink to="/digital-garden" className="mt-1 block py-1 underline-anim underline-animate sm:mt-0 sm:ml-4  text-lg">
					Digital Garden
				</NavLink>
			</article>
		</header>
    )
}