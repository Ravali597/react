import { CND_IMG } from "../utils/contant";
import { STAR_LOGO } from "../utils/contant";

const RestCard = ({ resObj }) => {
    // console.log(resObj)
    const {cloudinaryImageId, name, avgRating, deliveryTime,cuisines } = resObj?.info
    return (
        <div>
            <div className="image">
                <img src={CND_IMG+cloudinaryImageId}></img>
                <h3 className="titleres">{name}</h3>
            </div>
            <div className="desc d-flex align-center">
                <img
                    className="star-icon"
                    src={STAR_LOGO}
                ></img>
                <p className="rating">{avgRating}</p>
                <p className="time">{deliveryTime} Minutes</p>
            </div>
            <p className="types">{cuisines.join(", ")}</p>
        </div>
    );
};
export default RestCard;