import { useAppContext } from "./components/context/AppContext"
import "./Header.css"

export function Header() {
	const {isMobile} = useAppContext();


	return (<>
	<header className="flex">
		<div className="flex wraper header-wraper">
			<h1 className="text-logo">{"|)>|<"}</h1>
			{isMobile ?
				<img className="hamburger" src="/src/assets/image/hamburger.svg" alt="Menu" />
				:
				<nav>
					<ul className="flex header-nav_list">
						<a href="#about">
							<li>About</li>
						</a>
						<a href="#portfolio">
							<li>Portfolio</li>
						</a>
						<a href="#offers">
							<li>Offers</li>
						</a>
						<a href="#contacts">
							<li>Contacts</li>
						</a>
					</ul>
				</nav>
			}
		</div>
	</header>
	</>)
}