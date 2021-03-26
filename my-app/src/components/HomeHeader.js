import photo1 from "../assets/Home-Hero-Image-kopia.jpg"
import photo2 from "../assets/Decoration.svg"

function HomeHeader() {
    return(
    <div className="homeHeader">
        {/*<div className="headerLeft"></div>*/}
        <img className="headerLeft" src={photo1} alt=" "/>
        <div className="headerRight">
            <div className="headerRight-log">
                <a href=" ">Zaloguj</a>
                <a href=" " className="register">Załóż konto</a>
            </div>
            <div className="headerRight-menu">
                <a href=" " className="start">Start</a>
                <a href="#fourSteps">O co chodzi?</a>
                <a href=" ">O nas</a>
                <a href=" ">Fundacja i organizacje</a>
                <a href=" ">Kontakt</a>
            </div>
            <h2>Zacznij pomagać!</h2>
            <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
            <img className="headerRight-img" alt="" src={photo2}/>
            <div className="headerRight-buttons">
                <div><a href=" ">ODDAJ RZECZY</a></div>
                <div><a href=" ">ZORGANIZUJ ZBIÓRKĘ</a></div>
            </div>
        </div>
    </div>
)
}


export default HomeHeader