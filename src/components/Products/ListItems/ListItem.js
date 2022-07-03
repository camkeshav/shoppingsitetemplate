import CartIcon from "../../../assets/icons/CartIcon.svg"
import './ListItem.css';

const ListItem = ({ data }) => {
    return (
        <div className={"card"}>
            <img src={`/assets/placeholder.png`} alt="no img"/>
            <div className={"card_wrapper"}>
                    <span>₹{data.price}</span>
                    <small>
                        <strike>₹{data.strikeprice}</strike>
                    </small>
                <div className={"title"}>
                    <h1>{data.title}</h1>
                </div>
            </div>
            <button className={"atc_btn"}>
                <span>Add to Cart</span>
                <img src={CartIcon} alt="Cart Icon"/>
            </button>
        </div>
    )
}

export default ListItem