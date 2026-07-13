import "./Header.css"
import { useState, useEffect } from "react"
import { useAppContext } from "./components/context/AppContext"
import Hamburger from "./assets/image/hamburger.svg"
import HamburgerClose from "./assets/image/hamburger close.png"



export function Header() {
	const {isMobile} = useAppContext();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function toggleMenu() {
		setIsMenuOpen((prev) => !prev);
	}

	function closeMenu() {
		setIsMenuOpen(false);
	}

	useEffect(() => {
		if (!isMobile) {
			setIsMenuOpen(false);
		}
	}, [isMobile]);

	useEffect(() => {
		document.body.style.position = isMenuOpen ? "fixed" : "";

		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);


	return (<>
	<header className="flex">
		<div className="flex wraper header-wraper">
			<h1 className="text-logo">{"|)"}<span>{">|<"}</span></h1>
			{isMobile ?
				(
					<>
						<button
							type="button"
							className="hamburger-button"
							onClick={toggleMenu}
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
							aria-expanded={isMenuOpen}
						>
							<img
								className="hamburger"
								src={isMenuOpen ? HamburgerClose : Hamburger}
								alt=""
							/>
						</button>

						<div
							className={`mobile-menu-overlay ${
								isMenuOpen ? "active" : ""
							}`}
							onClick={closeMenu}
						/>

						<nav
							className={`mobile-menu ${
								isMenuOpen ? "active" : ""
							}`}
						>
							<ul className="mobile-menu-list">
								<li>
									<a href="#about" onClick={closeMenu}>
										About
									</a>
								</li>

								<li>
									<a href="#portfolio" onClick={closeMenu}>
										Portfolio
									</a>
								</li>

								<li>
									<a href="#offers" onClick={closeMenu}>
										Offers
									</a>
								</li>

								<li>
									<a href="#contacts" onClick={closeMenu}>
										Contacts
									</a>
								</li>
							</ul>
						</nav>
					</>
				)
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