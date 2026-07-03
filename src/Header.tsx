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
						<li>About</li>
						<li>Portfolio</li>
						<li>Offers</li>
						<li>Contacts</li>
					</ul>
				</nav>
			}
		</div>
	</header>
	</>)
}