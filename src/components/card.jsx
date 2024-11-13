import "./card.css"
import Arrow from "../assets/arrow.png"
function Card(props) {
    return<>
        <div className="card-main">
            <img src={props.img} alt="Card image" width="300px" height={props.height}/>
            <div className="card-main-body">
                <h3 className="card-main-body-h3">{props.name}</h3>
                <p className="card-main-body-p">{props.description}</p>
            </div>
            <img className="card-main-arrow" src={Arrow} alt=""/>
        </div>
    </>
}

export default Card;