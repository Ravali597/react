import RestCard from "./Restcard";
import { useState } from "react";
import {resList} from "../utils/mockData";
import Slider from "./Slider";
import { sliderList } from "../utils/mockData";

const Body = () => {
    const [totalresList, setresList] = useState(resList);
    return (
        <div className="body-main">
            <div className="slider">
            <h3>Whats on your mind???</h3>
            <div  className="slider-main d-flex">
                {sliderList.map((data)=> <Slider key={data.id} sliderData = {data} />)}
                {/* {<Slider sliderData={sliderList[1]}/>} */}
                
            </div>
            </div>
            <div className="search">
                <button type="submit" className="search-input" 
                onClick={()=>{
                    const filteredList = resList.filter((data)=>data.info.avgRating>4);
                    // console.log(filteredList)
                    setresList(filteredList);}
                    //console.log("clicked")
                }
                >TopRated</button>
                <button className="sort_text" 
                onClick={()=>{
                    const target_text = "Biryani";
                    const biryani_list = resList.filter(data=>data.info.cuisines.includes(target_text));
                    setresList(biryani_list);
                    //console.log(results)
                }
                }>
                    Biryani
                    
                    </button>
            </div>
            <div className="res-container">
                {totalresList.map((data)=><RestCard key={data.info.id} resObj = {data}/>)}
            </div>
        </div>
    );
};
export default Body;