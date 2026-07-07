import "./Footer.css"
import { Contacts } from "./Contacts"
import { useAppContext } from "./components/context/AppContext"


export function Footer() {
	const {isMobile} = useAppContext()

	return(<>
		<footer>
			<Contacts/>
			<div className="flex footer-block">
				<div className="flex wraper footer-wraper">
					<h1 className="text-logo">{"|)>|<"}</h1>
					<p hidden={isMobile} className="logo-decore">Денис Жуков</p>
				</div>
			</div>
		</footer>
	</>)
}