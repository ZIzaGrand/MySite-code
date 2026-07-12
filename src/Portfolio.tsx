import { useState } from "react"
import "./Portfolio.css"
import { useAppContext } from "./components/context/AppContext";
import PortfolioImg from "./assets/image/portfolio.svg"
import PortfolioMobile from "./assets/image/portfoliio_mobile.svg"



const tabList = ["First project", "Second project", "Third project"]

const urlList = ["https://frankfurter.dev/", "https://vuzoteka.ru/", "https://inpsycho.ru/"]

export function Portfolio() {
	const [activeTab, setActiveTab] = useState(0);
	const {isMobile} = useAppContext()


	return(<>
		<section id="portfolio" className="flex portfolio">
			<div className="flex portfolio-header">
				<img hidden={isMobile} className="" src={PortfolioImg} alt="" />
				<h1 className="text-header"><span>{"<"}</span>{"Portfolio"}<span>{"/>"}</span></h1>
				<img hidden={isMobile} className="" src={PortfolioImg} alt="" />
			</div>
			<div hidden={!isMobile} className="portfolio-mobile_block">
				<img src={PortfolioMobile} alt="" />
				<p className="text">{"<iframe/>"}</p>
			</div>
			<div className="browser">
				<div className="flex tabs">
					{tabList.map((value, index) => 
						<div 
						key={index}
						className={`flex tab ${activeTab === index ? "active" : ""}`}
						onClick={() => setActiveTab(index)}
						 >
							<p className="">{value}</p>
						</div>
					)}

				</div>
				<div className="flex url">
					<div className="flex url-search"><p>{urlList[activeTab]}</p></div>
				</div>
				<iframe className="flex"
					id="inlineFrameExample"
					title="Inline Frame Map"
					width="100%"
					height="600px"
					frameBorder={0}
					allowFullScreen={true}
					src={urlList[activeTab]}
				></iframe>
			</div>
		</section>
	</>)	
}