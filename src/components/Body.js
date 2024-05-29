import RestCard from "./Restcard";
import { useEffect, useState } from "react";
// import {resList} from "../utils/mockData";
import Slider from "./Slider";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import { sliderList } from "../utils/mockData";

const Body = () => {
    const [totalresList, setresList] = useState([]);
    // once we click on search - it will show the repected list. Second click on search = If we search again then we will get an empty page
    //to overcome this we are creating a copy of list of rest with another state variable and fetch the data from api to this variable
    const [filteredRest, setfilteredRest] = useState([]);

    const [sliderList, setsliderList] = useState([]);
    const [searchText, setsearchText] = useState([]);

//useEffect - the callback function - fetchData() will be called once the body component rendered
useEffect(()=>{
    //calling a function - fetch data - it will return a promise - to use it as simple we can use async, await
    fetchdata();
},[]);

//async the function and wait for the api to get data
const fetchdata = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

//convert the data to json - which means await for data and then covert it to .json()
const json = await data.json();
// console.log(json);
//optional chaining
setresList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setfilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//copy of resturants
setsliderList(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);

    // console.log()
}

// if((totalresList.length === 0) && (sliderList.length === 0)){
//     return (
//        <Shimmer />
//     )
// }
// we can use terinary operator instead of if/else

    return ((totalresList.length === 0) && (sliderList.length === 0)) ? <Shimmer /> : (
        <div className="body-main">
            <div className="slider">
            <h3>Whats on your mind???</h3>
            <div  className="slider-main d-flex">
                {sliderList.map((data)=> <Slider key={data.id} sliderData = {data} />)}
                {/* {<Slider sliderData={sliderList[1]}/>} */}
                
            </div>
            </div> 
            <div className="search">
                <div className="search-bar">
                    <input type="text" className="search-text" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);    
                    }}></input>
                    <button className="btn-search" onClick={()=>{
                     //  const target_text1 = {searchText};
                        //console.log(target_text1);
                        const target = totalresList.filter(data=>data.info.cuisines.toString().toLowerCase().includes(searchText.toLowerCase()));
                       // console.log(filteredRest)
                        setfilteredRest(target);//we are upting copy of resturants - updating "filteredRest"
                    }}> Search </button>
                </div>
                <button type="submit" className="search-input" 
                onClick={()=>{
                    const filteredList = totalresList.filter((data)=>data.info.avgRating>4);
                    // console.log(filteredList)
                    setresList(filteredList);}
                    //console.log("clicked")
                }
                >TopRated</button>
            {/* <button className="sort_text"
                onClick={()=>{
                    const target_text = "Biryani";
                    const biryani_list = totalresList.filter(data=>data.info.cuisines.includes(target_text));
                    setresList(biryani_list);
                    //console.log(results)
                }
                }>
                    Biryani
                    
                    </button> */}
            </div>
            <div className="res-container">
                {filteredRest.map((data)=><Link key={data.info.id} className="rest-card" to={"/restaurant/"+data.info.id}><RestCard  resObj = {data}/></Link>)}
            </div>
        </div>
    );
};
export default Body;