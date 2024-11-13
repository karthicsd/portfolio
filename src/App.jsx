
import './App.css'
import Home from './components/page1.jsx'
import About from './components/page2.jsx'
import NavBar from './components/navbar.jsx'
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import Logo from "./assets/logo.png";

function App() {
  return (
    <>

        <div className="app-main">
            <NavBar/>
            {/*<Home/>*/}
            {/*<About/>*/}
        </div>
    </>
  )
}

export default App
