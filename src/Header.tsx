import { useAppContext } from "./components/context/AppContext"
import "./Header.css"
import Hamburger from "./assets/image/hamburger.svg"
// import HamburgerClose from "./assets/image/hamburger close.png"



export function Header() {
	const {isMobile} = useAppContext();


	return (<>
	<header className="flex">
		<div className="flex wraper header-wraper">
			<h1 className="text-logo">{"|)>|<"}</h1>
			{isMobile ?
				<img className="hamburger" src={Hamburger} alt="Menu" />
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