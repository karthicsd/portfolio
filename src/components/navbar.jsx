import Logo from "../assets/logo.png";
import './navbar.css'
import Home from "./page1.jsx";
import About from "./page2.jsx";
import Skill from "./page3.jsx";
import Project from "./page4.jsx";
import Achievement from "./page5.jsx";
import Contact from "./page6.jsx";
function navbar(){
    return <>

            <header className="navbar-header">
                <nav className="navbar-header-inner">
                    <img src={Logo} width="4%" className="navbar-header-inner-logo"/>
                    <ul>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#skill">SKILL</a></li>
                        <li><a href="#project">PROJECT</a></li>
                        <li><a href="#achievement">ACHIEVEMENT</a></li>
                    </ul>
                    <button><a href="#contact"> Let&apos;s Connect</a></button>
                </nav>
            </header>

        <main>
            <section id="home">
                <Home/>
            </section>
            <section id="about">
                <About/>
            </section>
            <section id="skill">
                <Skill/>
            </section>
            <section id="project">
                <Project/>
            </section>
            <section id="achievement">
                <Achievement/>
            </section><section id="contact">
                <Contact/>
            </section>

        </main>


    </>
}

export default navbar;