import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { REST_DATA } from "../utils/contant";
const DummyRestInfo = () => {
    const {resId} = useParams();
    // console.log(params);
const [dummyrestdata, setDummyrestdata] = useState(null);
useEffect(()=>{
    fetchdata();
},[]);
const fetchdata = async () =>{
    const data = await fetch(REST_DATA + resId);
    const json = await data.json();
    setDummyrestdata(json.data);
    console.log(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    console.log(json.data.cards[2].card.card.info.name);
}
if(dummyrestdata === null) return <Shimmer />

    const name = dummyrestdata?.cards[2]?.card?.card?.info.name;
    const {title, itemCards} = dummyrestdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 
    //console.log({name})
    return (
        <div className="info">
            <h1>Name of rest: {name}</h1>
            <p>{title}</p>
            <ul>
                {itemCards.map((item)=> <li key = {item.card.info.id}> {item.card.info.name} </li> )}
            </ul>
        </div>
    )
}
export default DummyRestInfo;