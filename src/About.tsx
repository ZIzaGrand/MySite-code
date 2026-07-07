import "./About.css"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useAppContext } from "./components/context/AppContext";

function Model() {
  const { scene } = useGLTF("/src/assets/model/Me.glb");

  return <primitive object={scene} scale={1} />;
}

function ModelViewer() {
  return (
    <div className="model" >
      <Canvas camera={{ position: [0, 0.5, 2.2], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={2} />

        <Model />

        <OrbitControls  enableZoom={false} autoRotate={true} autoRotateSpeed={4}/>
      </Canvas>
    </div>
  );
}

export function About() {
	const {isMobile} = useAppContext()

	return(<>
		<section className="flex about">
			<div className="flex about-header">
				<img hidden={isMobile} src="/src/assets/image/about decore.svg" alt="" />
				<h1 className="text-header"><span>{"<"}</span>{"About"}<span>{"/>"}</span></h1>
				<img hidden={isMobile} src="/src/assets/image/about decore.svg" alt="" />
			</div>
			<div className="flex about-wraper">
				<div className="model-wraper">
					<img className="model-plus" src="/src/assets/image/plus.svg" alt="" />
					<img className="model-plus" src="/src/assets/image/plus.svg" alt="" />
					<img className="model-plus" src="/src/assets/image/plus.svg" alt="" />
					<img className="model-plus" src="/src/assets/image/plus.svg" alt="" />
					<ModelViewer/>
				</div>
				<div hidden={!isMobile} className="flex about-mobile_block">
					<img src="/src/assets/image/about_mobile.svg" alt="" />
					<h1  className="text-sub-header about-name">{"<Denis Zhukov/>"}</h1>
					<img src="/src/assets/image/about_mobile.svg" alt="" />
				</div>
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
					<img className="lesta" src="/src/assets/image/lesta.svg" alt="" />
					<img className="sber" src="/src/assets/image/sber.svg" alt="" />
				</div>
			</div>
			<div hidden={isMobile} className="flex about-footer">
				<img hidden={isMobile} src="/src/assets/image/about decore.svg" alt="" />
				<h1 hidden={isMobile} className="text-logo about-footer_logo">{"|)>|<"}</h1>
				<img hidden={isMobile} src="/src/assets/image/about decore.svg" alt="" />
			</div>
		</section>
	</>)
}