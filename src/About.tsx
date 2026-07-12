import "./About.css"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useAppContext } from "./components/context/AppContext";
import { Suspense } from "react"
import { useProgress } from "@react-three/drei";
import Decore from "./assets/image/about decore.svg"
import Plus from "./assets/image/plus.svg"
import Mobile from "./assets/image/about_mobile.svg"
import Sber from "./assets/image/sber.svg"
import Lesta from "./assets/image/lesta.svg"


function Loader() {
  const { active, progress } = useProgress();

  if (!active) return null;

  return (
    <div className="model-loader">
      <p>Загрузка 3D-модели...</p>
      <p>{Math.round(progress)}%</p>

      <div className="loader-line">
        <div
          className="loader-line__progress"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function Model() {
  const { scene } = useGLTF("/model/Me.glb");

  return <primitive object={scene} scale={1} />;
}

function ModelViewer() {
  return (
    <div className="model" >
      <Canvas camera={{ position: [0, 0.5, 2.2], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={2} />
		<Suspense fallback={null}>
        	<Model />
		</Suspense>
        <OrbitControls  enableZoom={false} autoRotate={true} autoRotateSpeed={4}/>
      </Canvas>

	  <Loader />
    </div>
  );
}

export function About() {
	const {isMobile} = useAppContext()

	return(<>
		<section id="about" className="flex about">
			<div className="flex about-header">
				<img hidden={isMobile} src={Decore} alt="" />
				<h1 className="text-header"><span>{"<"}</span>{"About"}<span>{"/>"}</span></h1>
				<img hidden={isMobile} src={Decore} alt="" />
			</div>
			<div className="flex about-wraper">
				<div className="model-wraper">
					<img className="model-plus" src={Plus} alt="" />
					<img className="model-plus" src={Plus} alt="" />
					<img className="model-plus" src={Plus} alt="" />
					<img className="model-plus" src={Plus} alt="" />
					<ModelViewer/>
				</div>
				{isMobile && (
					<div className="flex about-mobile_block">
						<img src={Mobile} alt="" />
						<h1  className="text-sub-header about-name">{"<Denis Zhukov/>"}</h1>
						<img src={Mobile} alt="" />
					</div>
				)}
				<div className="flex about-content">
					<p className="text">
						Занимаюсь программированием и вёрсткой более 3 лет. Помогу создать для вас современный и качественный сайт — от продуманного дизайна до полной реализации.
					</p>
					<p className="text">
						В работе учитываю актуальные тренды веб-дизайна, удобство для пользователей и технические требования к сайту. Также подскажу, какие документы необходимо разместить на сайте, чтобы избежать штрафов и соответствовать требованиям законодательства.
					</p>
					<p className="text">
						При необходимости помогу с покупкой домена, настройкой хостинга и размещением сайта в интернете.
					</p>
					<p className="text-regular">Работал в компаниях:</p>
					<img className="lesta" src={Lesta} alt="" />
					<img className="sber" src={Sber} alt="" />
				</div>
			</div>
			<div hidden={isMobile} className="flex about-footer">
				<img hidden={isMobile} src={Decore} alt="" />
				<h1 hidden={isMobile} className="text-logo about-footer_logo">{"|)>|<"}</h1>
				<img hidden={isMobile} src={Decore} alt="" />
			</div>
		</section>
	</>)
}