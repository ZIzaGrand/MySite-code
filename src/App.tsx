import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import './App.css'
import {Header} from "./Header"
import {Main} from "./MainSection"
import {Footer} from "./Footer"


function App() {

  return (
    <>
		<ReactLenis root/>
			<Header/>
			<Main/>
			<Footer/>
    </>
  )
}

export default App
