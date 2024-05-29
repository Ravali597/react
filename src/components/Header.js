import { LOGO_URL } from "../utils/contant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
const [btnNameChange, setbtnNameChange] = useState("Login");
    return (
        <div className="header d-flex justify-between align-center">
            <div className="logo">
                <img src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul className="d-flex justify-between fs-22">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Conatct</Link></li>
                    <li>Cart</li>
                    <li><button className="login" onClick={()=>{
                        btnNameChange === "Login" ? setbtnNameChange("Logout") : setbtnNameChange("Login");
                    }}>{btnNameChange}</button></li>
                </ul>
            </div>
        </div>
    );
};
export default Header;