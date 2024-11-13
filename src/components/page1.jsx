import './page1.css'
// import Logo from '/src/assets/logo.png'
import Globe from '/src/assets/globe.mp4'
import NavBar from "./navbar.jsx";
function page1(){
    return<>
        <div className="page1-main">
            {/*<div className="video-container">*/}
                <video className="page1-main-globe" src={Globe} autoPlay loop muted></video>
            {/*</div>*/}
            <div className="page1-intro">

                <div className="page1-intro-inner">

                    <h1><span className="page1-intro-inner-hi" >Hi👋</span><br/>I'm <span
                        className="page1-intro-inner-name"> Karthick  Shanmugam</span></h1>
                    <p>I&#39;m a <span className="highlight">Software developer </span>and <span className="highlight">Full-stack developer </span>from India. I love programming that used to solve critical problems and enjoy basic 3D modeling .
                    </p>
                    <button className="page1-intro-inner-button"><a href="https://drive.google.com/file/d/1OJoPxmtc7EBvSHuNFtvAeiSjZld4ERVG/view?usp=drive_link">Resume</a></button>

                </div>


            </div>
        </div>
    </>
}

export default page1;