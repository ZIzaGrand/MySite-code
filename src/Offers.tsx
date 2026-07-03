import "./Offers.css"
import { useAppContext } from "./components/context/AppContext"

export function Offers() {
	const {isMobile} = useAppContext()
	
	return(<>
		<section className="flex offers">
			<div className="flex offers-header">
				<img hidden={isMobile} className="" src="/src/assets/image/offers_header.svg" alt="" />
				<h1 className="text-header"><span>{"<"}</span>{"Offers"}<span>{"/>"}</span></h1>
				<img hidden={isMobile} className="" src="/src/assets/image/offers_header.svg" alt="" />
			</div>
			<div className="flex offers-content">
				<div className="flex offer">
					<div className="flex offer-header">
						<h2 className="text-sub-header">Tilda</h2>
						<img hidden={isMobile} src="/src/assets/image/offers_content.svg" alt="" />
					</div>
					<div className="offer-description">
						<p className="text">Создание сайта на тильде это быстрый и надёжный сопособ запусть сайт за один день.</p>
						<p className="text">При выборе этого варианта, при срочности заказа можно обойтись и без дизайна, так как блоки в Тильде выполнены в одном стиле и подходят друг к другу.</p>
					</div>
					<ul className="text-list offer-list">
						<li>Консультация</li>
						<li>Создание сайта</li>
						<li>Покупка и подключение домена</li>
					</ul>
				</div>
			</div>
			<div className="flex offers-content">
				<div className="flex offer">
					<div className="flex offer-header">
						<h2 className="text-sub-header">Одностраничный</h2>
						<img hidden={isMobile} src="/src/assets/image/offers_content.svg" alt="" />
					</div>
					<div className="offer-description">
						<p className="text">Создание сайта на тильде это быстрый и надёжный сопособ запусть сайт за один день.</p>
						<p className="text">При выборе этого варианта, при срочности заказа можно обойтись и без дизайна, так как блоки в Тильде выполнены в одном стиле и подходят друг к другу.</p>
					</div>
					<ul className="text-list offer-list">
						<li>Консультация</li>
						<li>Создание сайта</li>
						<li>Покупка и подключение домена</li>
						<li>Размещение сайта на хостинге</li>
					</ul>
				</div>
			</div>
			<div className="flex offers-content">
				<div className="flex offer">
					<div className="flex offer-header">
						<h2 className="text-sub-header">Многостраничный</h2>
						<img hidden={isMobile} src="/src/assets/image/offers_content.svg" alt="" />
					</div>
					<div className="offer-description">
						<p className="text">Создание сайта на тильде это быстрый и надёжный сопособ запусть сайт за один день.</p>
						<p className="text">При выборе этого варианта, при срочности заказа можно обойтись и без дизайна, так как блоки в Тильде выполнены в одном стиле и подходят друг к другу.</p>
					</div>
					<ul className="text-list offer-list">
						<li>Консультация</li>
						<li>Создание сайта</li>
						<li>Покупка и подключение домена</li>
						<li>Размещение сайта на хостинге</li>
					</ul>
				</div>
			</div>
			<p hidden={isMobile} className="offers-decore">Site</p>

		</section>
	</>)
}