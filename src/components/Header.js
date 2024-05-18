import { LOGO_URL } from "../utils/contant";
const Header = () => {
    return (
        <div className="header d-flex justify-between align-center">
            <div className="logo">
                <img src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul className="d-flex justify-between fs-22">
                    <li>About us</li>
                    <li>Conatct</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;