import decoration from "../assets/Decoration.svg"
import icon1 from "../assets/Icon-1.svg"
import icon2 from "../assets/Icon-2.svg"
import icon3 from "../assets/Icon-3.svg"
import icon4 from "../assets/Icon-4.svg"




function HomeFourSteps (){
    return(
        <div id="fourSteps" className="fourSteps">
            <div className="fourSteps-title">
                <h1>Wystarczą 4 proste kroki</h1>
                <img src={decoration} alt=" "/>
            </div>
            <div className="fourSteps-icons">
                <div>
                    <img src={icon1} alt=""/>
                    <h4>Wybierz rzeczy</h4>
                    <div></div>
                    <p>ubrania , zabawki, sprzęt i inne</p>
                </div>
                <div>
                    <img src={icon2} alt=""/>
                    <h4>Spakuj je</h4>
                    <div></div>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div>
                    <img src={icon3} alt=""/>
                    <h4>Zdecyduj komu chcesz pomóc</h4>
                    <div></div>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div>
                    <img src={icon4} alt=""/>
                    <h4>Zamów kuriera</h4>
                    <div></div>
                    <p>kurier przyjdzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="fourSteps-button">
                <div>
                    <a href="">ODDAJ RZECZY</a>
                </div>
            </div>
        </div>
    )
}

export default HomeFourSteps;