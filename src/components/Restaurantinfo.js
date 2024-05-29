import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { REST_IMG_CDN, REST_DATA } from "../utils/contant";
import { useParams } from "react-router-dom";

const Restaurantinfo = () => {
    const [restInfo, setRestInfo] = useState(null);

    // const params = useParams();
    // console.log(params);
const { resId } = useParams();

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () => {
        
            const data = await fetch(REST_DATA + resId);
            const json = await data.json();
           //console.log(json.data)
            console.log(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
            setRestInfo(json.data);
    };
    if (restInfo === null) return <Shimmer />;

  //const {title} =  restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 const {title, itemCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 //console.log(title)
    return (
        <div className="rest-item-container">
            <h1>{restInfo?.cards[0].card?.card?.text}</h1>
            <h3>{title}</h3>
                
                 {itemCards.map((item)=> <div className="d-flex" key={item.card.info.id}>
                    <div className="d-block">
                                            <p>{item.card.info.name}</p>
                                            <p>{item.card.info.defaultPrice/100}</p>
                                            <p>{item.card.info.description}</p>
                                        </div>
                                        <img width="150" height="144" src={REST_IMG_CDN + item.card.info.imageId}></img>
                                        </div>
                                    )}

            
        </div>
    )
}
export default Restaurantinfo;