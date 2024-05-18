import RestCard from "./Restcard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    const [totalresList, setresList] = useState(resList);
    return (
        <div className="body-main">
            <div className="search">
                <button type="submit" className="search-input" 
                onClick={()=>{
                    const filteredList = resList.filter((data)=>data.info.avgRating>4);
                    setresList(filteredList);}
                    //console.log("clicked")
                }
                >TopRated</button>
            </div>
            <div className="res-container">
                {totalresList.map((data)=><RestCard key={data.info.id} resObj = {data}/>)}
            </div>
        </div>
    );
};
export default Body;