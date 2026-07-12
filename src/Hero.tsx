import "./Hero.css"
import { useAppContext } from "./components/context/AppContext"
import Plus from "./assets/image/plus.svg"
import Hero1 from "./assets/image/hero1.png"
import Hero2 from "./assets/image/hero2.png"
import Hero3 from "./assets/image/hero3.png"



export function Hero() {
	const {isMobile} = useAppContext()


	return(<>
		<section className="flex hero">
			<div className="flex hero-header">
				<div className="flex hero-header_left">
					<h1 className="text-hero">Design</h1>
					<h1 className="text-hero">Develop</h1>
				</div>
				<h1 className="scobka">{"}"}</h1>
				<h1 className="text-hero hero-header_rigth">Site</h1>
			</div>
			<h1 hidden={isMobile} className="text-header hero-name">{"<Denis Zhukov/>"}</h1>
			<div className=" flex hero-cards">
				<img className="hero-plus" src={Plus} alt="" />
				<img className="hero-plus" src={Plus} alt="" />
				<img className="hero-plus" src={Plus} alt="" />
				<img className="hero-plus" src={Plus} alt="" />

				<div className="flex hero-cards_wraper">
					<div className="flex hero-card">
						<h1 className="text-header-hero">Design</h1>
						<p >Дизайн</p>
						<img className="hero-img" src={Hero1} alt="" />
					</div>
					<div className="flex hero-card">
						<h1 className="text-header-hero">Develop</h1>
						<p >Разработка</p>
						<img className="hero-img" src={Hero2} alt="" />
					</div>
					<div className="flex hero-card">
						<h1 className="text-header-hero">Deploy</h1>
						<p >Хостинг</p>
						<img className="hero-img" src={Hero3} alt="" />
					</div>
				</div>
			</div>
		</section>
	</>)
}