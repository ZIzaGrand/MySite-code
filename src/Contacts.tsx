import "./Contacts.css"

export function Contacts() {
	return(<>
		<section className="flex contacts">
			<h1 className="text-header"><span>{"<"}</span>{"Contacts"}<span>{"/>"}</span></h1>
			<div className="contacts-wraper">
				<img className="contacts-plus" src="/src/assets/image/plus_contacts.svg" alt="" />
				<img className="contacts-plus" src="/src/assets/image/plus_contacts.svg" alt="" />
				<img className="contacts-plus" src="/src/assets/image/plus_contacts.svg" alt="" />
				<img className="contacts-plus" src="/src/assets/image/plus_contacts.svg" alt="" />

				
				<div className="flex contacts-content">
					<div className="contact">
						<h2>Telegram</h2>
						<a className="text-contacts" href="https://t.me/ZizaGrand">@ZizaGrand</a>
					</div>
					<div className="contact">
						<h2>Telephone</h2>
						<a className="text-contacts" href="tel:+79648008191">+7 (964) 800 81-91</a>
					</div>
					<div className="contact">
						<h2>Mail</h2>
						<a className="text-contacts" href="mailto:deniska_zhukov_00@inbox.ru">deniska_zhukov_00@inbox.ru</a>
					</div>
				</div>
			</div>
		</section>
	</>)
}