import "./page6.css"
import Myimage from "../assets/crop image.jpg";
import Linkedin from "../assets/icons8-linkedin-94.png"
import Github from "../assets/icons8-github-logo-94.png"
import Instagram from "../assets/icons8-social-media-logo-94.png"
import Mail from "../assets/icons8-gmail-logo-94.png"

function page6(){
    return<>
        <div className="page6-main">
            <div className="page6-main-inner">
                <div className="page6-main-inner-body">
                    <img className="page6-main-inner-body-img" src={Myimage} alt="" width="200px" height="auto" />
                    <h3 className="page6-main-inner-body-h3">Hi I am <span className="page6-main-inner-body-h3-span">Karthick</span>. Nice to meet you!</h3>
                    <p className="page6-main-inner-body-p">I&#39;m a Software developer and Full-stack developer from India. I love programming that used to solve critical problems and enjoy basic 3D modeling . I&#39;m currently pursuing my undergraduate degree at Karpagam Academy of Higher Education (B.E. Computer Science and Design).</p>
                    <h3 className="page6-main-inner-body-h33"> <span className="page6-main-inner-body-h3-span">Connect </span> With Me 🤞</h3>
                    <div className="page6-main-inner-body-links">
                        <a href="https://www.linkedin.com/in/karthi29112003/"><img className="page6-main-inner-body-links-logo" src={Linkedin} alt=""/></a>
                        <a href="https://github.com/karthicsd/"> <img className="page6-main-inner-body-links-logo" src={Github} alt=""/></a>
                            <a href="https://www.instagram.com/_karthi_29"> <img className="page6-main-inner-body-links-logo" src={Instagram} alt=""/></a>
                                <a href="mailto:karthi29112003@gmail.com"> <img className="page6-main-inner-body-links-logo" src={Mail} alt=""/></a>
                    </div>
                    <p  className="page6-main-inner-body-p">karthi29112003@gmail.com</p>
                </div>


            </div>
        </div>
    </>
}
export default page6;