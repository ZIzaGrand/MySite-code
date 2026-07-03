import "./Footer.css"
import { Contacts } from "./Contacts"


export function Footer() {
	return(<>
		<footer>
			<Contacts/>
			<div className="flex footer-block">
				<div className="flex wraper footer-wraper">
					<h1 className="text-logo">{"|)>|<"}</h1>
					<p className="logo-decore">Денис Жуков</p>
				</div>
			</div>
		</footer>
	</>)
}