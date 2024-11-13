import "./page5.css"
import Software from "../assets/software development.jpg"
import Ml from "../assets/machine learning.jpg"
import Model3d from "../assets/3dmodel.jpg"
import T1 from "../assets/taiwan1.jpg"
import T2 from "../assets/taiwan12jpg.jpg"
import T3 from "../assets/taiwan3.jpg"
import T4 from "../assets/taiwan4.jpg"
import CTS1 from "../assets/cts1.jpg"
import CTS2 from "../assets/cts2.jpg"
import CTS3 from "../assets/cts3.jpg"
import CTS4 from "../assets/cts4.jpg"
function page5(){
    return<>
        <div className="page5-main">
            <div className="page5-main-inner">
                {/*card1*/}
                <div className="page5-main-inner-outercard">
                <div className="page5-main-inner-card">
                    <div className="page5-main-inner-cardscroll">
                        <img className="page5-main-inner-cards" src={T2}/>
                        <img className="page5-main-inner-cards" src={T1}/>
                        <img className="page5-main-inner-cards" src={T3}/>
                        <img className="page5-main-inner-cards" src={T4}/>
                    </div>
                </div>
                    <div className="page5-main-inner-p1">
                    <h3 className="page5-main-inner-p1-h3">Internship in STUST University - Taiwan</h3>
                    <p className="page5-main-inner-p1-p">Machine learning intern at Southern Taiwan University of Science and Technology, Taiwan. Engaged in hands-on learning and contributed to innovative projects in machine learning. Developed and implemented a spam detection project using text mining, significantly enhancing word detection and classification of spam messages</p>
                    </div>
                </div>
                {/*card2*/}
                <div className="page5-main-inner-outercard">
                    <div className="page5-main-inner-card">
                        <div className="page5-main-inner-cardscroll2">
                            {/*<img className="page5-main-inner-cards" src={CTS1}/>*/}
                            <img className="page5-main-inner-cards" src={CTS2}/>
                            <img className="page5-main-inner-cards" src={CTS3}/>
                            <img className="page5-main-inner-cards" src={CTS4}/>
                        </div>
                    </div>
                    <div className="page5-main-inner-p1">
                        <h3 className="page5-main-inner-p1-h3">Cognizant Technoverse 2023 Winners</h3>
                        <p className="page5-main-inner-p1-p">As the team leader, I guided our group to secure 1st place in the Cognizant Technoverse 2023 hackathon with our healthcare-focused project, Medigree. This achievement led to a one-month internship opportunity at Cognizant, where I gained valuable hands-on experience and expanded my professional <skills className=""></skills> </p>
                    </div>
                </div>
                {/*card3*/}
                <div className="page5-main-inner-outercard">
                    <div className="page5-main-inner-card">
                        <div className="page5-main-inner-cardscroll">
                            <img className="page5-main-inner-cards" src={Software}/>
                            <img className="page5-main-inner-cards" src={Ml}/>
                            <img className="page5-main-inner-cards" src={Model3d}/>
                        </div>
                    </div>
                    <div className="page5-main-inner-p1">
                        <h3 className="page5-main-inner-p1-h3">Neocodethon National Level Coding Contest</h3>
                        <p className="page5-main-inner-p1-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Assumenda commodi debitis hic quidem quo reprehenderitLorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Assumenda commodi debitis hic quidem quo reprehenderit </p>
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default page5;