import "./MainSection.css"
import { Hero } from "./Hero"
import { About } from "./About"
import { Portfolio } from "./Portfolio"
import { Offers } from "./Offers"
import { Contacts } from "./Contacts"

export function Main() {
	return(<>
		<main>
			<div className="wraper">
				<Hero/>
				<About/>
				<Portfolio/>
				<Offers/>
			</div>
		</main>
	</>)
}