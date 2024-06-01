import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { REST_IMG_CDN, REST_DATA, STAR_LOGO, NON_VEG, VEG } from "../utils/contant";
import { useParams } from "react-router-dom";
// import veg from "./utils/veg.png";


const Restaurantinfo = () => {
    const [restInfo, setRestInfo] = useState(null);
    const [restName, setResName] = useState(null);
    const [filteredRestInfo, setFilteredRestInfo] = useState(null);
    const { resId } = useParams();
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch(REST_DATA + resId);
        const json = await data.json();
        const fullsetData = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.splice(1).slice(0, -2);
        setRestInfo(fullsetData);
        setFilteredRestInfo(fullsetData);
        setResName(json.data?.cards[0].card?.card?.text);

    };
    if (restInfo === null) return
    <Shimmer />;
    const filterList = (t) =>{
        //console.log(t)
        let filteredCards = restInfo.reduce((acc, curr) => {
            let filtereditemCards = curr.card.card.itemCards.filter((item) => item.card.info.itemAttribute.vegClassifier === t);
            //console.log(veg_itemCards)
            if (filtereditemCards.length > 0) {
                acc.push({
                    card: {
                        card: {
                            ...curr.card.card,
                            itemCards: filtereditemCards
                        }
                    }
                })
            }
            return acc
        }, [])
        setFilteredRestInfo(filteredCards);
    }
    return (
        <div className="rest-item-container">
            <h1>{restName}</h1>
            
            <button className="veg-btn" onClick={()=>filterList("VEG")}><img width="30px" height="30px" src={VEG}></img></button>
            <button className="nonveg-btn" onClick={()=>filterList("NONVEG")}><img width="30px" height="30px" src={NON_VEG}></img></button>
            <button className="remove" onClick={()=> setFilteredRestInfo(restInfo)}>REMOVE</button>

            {filteredRestInfo.map((item) =>
                <div className="main">
                    <h2 className="text-recom">{item.card.card.title}</h2>
                    {item.card.card.itemCards.map((item) =>
                        <div key={item.card.info.id} className="d-flex align-center main-card">
                            <div className="inner">
                                {item.card.info.itemAttribute.vegClassifier === "VEG" ? <img width="18px" height="18px" src={VEG}></img>
                                    : <img width="18px" height="18px" src={NON_VEG}></img>}

                                {item.card.info.isBestseller === true ? <span className="bestsel"> Bestseller</span> : <span></span>}
                                <h3>{item.card.info.name}</h3>
                                <h4>Rs.{item.card.info.price / 100}</h4>
                                <p><img className="star-img" src={STAR_LOGO} width="15px" height="15px"></img>
                                    {item.card.info.ratings.aggregatedRating.rating}</p>
                                <p className="desc">{item.card.info.description}</p>
                            </div>
                            <img width="150" height="144" src={REST_IMG_CDN + item.card.info.imageId}></img>

                        </div>

                    )}
                </div>

            )}

        </div>
    )
}
export default Restaurantinfo;