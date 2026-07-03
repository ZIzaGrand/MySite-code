import "./Hero.css"

export function Hero() {


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
			<h1 className="text-header hero-name">{"<Denis Zhukov/>"}</h1>
			<div className=" flex hero-cards">
				<img className="hero-plus" src="/src/assets/image/plus.svg" alt="" />
				<img className="hero-plus" src="/src/assets/image/plus.svg" alt="" />
				<img className="hero-plus" src="/src/assets/image/plus.svg" alt="" />
				<img className="hero-plus" src="/src/assets/image/plus.svg" alt="" />

				<div className="flex hero-cards_wraper">
					<div className="flex hero-card">
						<h1 className="text-header-hero">Design</h1>
						<p >Дизайн</p>
						<img className="hero-img" src="/src/assets/image/hero1.png" alt="" />
					</div>
					<div className="flex hero-card">
						<h1 className="text-header-hero">Develop</h1>
						<p >Разработка</p>
						<img className="hero-img" src="/src/assets/image/hero2.png" alt="" />
					</div>
					<div className="flex hero-card">
						<h1 className="text-header-hero">Deploy</h1>
						<p >Хостинг</p>
						<img className="hero-img" src="/src/assets/image/hero3.png" alt="" />
					</div>
				</div>
			</div>
		</section>
	</>)
}