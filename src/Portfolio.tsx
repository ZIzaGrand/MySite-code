import { useState } from "react"
import "./Portfolio.css"
import { useAppContext } from "./components/context/AppContext";
import PortfolioImg from "./assets/image/portfolio.svg"
import PortfolioMobile from "./assets/image/portfoliio_mobile.svg"



const tabList = ["FX_CHEKER", "Second project", "Third project"]

const urlList = ["https://denis-develop.ru/currebcy-market", "https://frankfurter.dev", "https://frankfurter.dev"]

export function Portfolio() {
	const [activeTab, setActiveTab] = useState(0);
	const {isMobile} = useAppContext()

	return(<>
		<section id="portfolio" className="flex portfolio">
			<div className="flex portfolio-header">
				<img hidden={isMobile} className="" src={PortfolioImg} alt="" />
				<h1 className="text-header"><span>{"<"}</span>{"Portfolio"}<span>{"/>"}</span></h1>
				<p>Портфолио</p>
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
					<div className="flex url-search"><a href={urlList[activeTab]} target="_blank"><p>{urlList[activeTab].slice(8)}</p></a></div>
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