import decoration from "../assets/Decoration.svg"
import signature from "../assets/Signature.svg"
import bgrphoto from "../assets/People.jpg"


function HomeAboutUs() {
    return (
        <div className="homeAboutUs" id="aboutUs">
            <div className="homeAboutUs-left">
                <div>
                    <h1>O nas</h1>
                    <img className="decoration" src={decoration} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, illum, quas!</p>
                    <img className="signing" src={signature} alt=""/>
                </div>
            </div>
            <div className="homeAboutUs-right">
                <img src={bgrphoto} alt=""/>
            </div>
        </div>
    )

}

export default HomeAboutUs
