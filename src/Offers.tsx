import "./Offers.css"
import { useAppContext } from "./components/context/AppContext"
import Header from "./assets/image/offers_header.svg"
import Content from "./assets/image/offers_content.svg"



export function Offers() {
	const {isMobile} = useAppContext()
	
	return(<>
		<section id="offers" className="flex offers">
			<div className="flex offers-header">
				<img hidden={isMobile} className="" src={Header} alt="" />
				<h1 className="text-header"><span>{"<"}</span>{"Offers"}<span>{"/>"}</span></h1>
				<img hidden={isMobile} className="" src={Header} alt="" />
			</div>
			<div className="flex offers-content">
				<div className="flex offer">
					<div className="flex offer-header">
						<h2 className="text-sub-header">Tilda</h2>
						<img hidden={isMobile} src={Content} alt="" />
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
				<div className="flex offer">
					<div className="flex offer-header">
						<h2 className="text-sub-header">Одностраничный</h2>
						<img hidden={isMobile} src={Content} alt="" />
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
				<div className="flex offer">
					<div className="flex offer-header">
						<h2 className="text-sub-header">Многостраничный</h2>
						<img hidden={isMobile} src={Content} alt="" />
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