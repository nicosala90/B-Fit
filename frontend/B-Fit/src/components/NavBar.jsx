import { Link } from "react-router-dom";

function NavBar() {

    return (
        <div id="nav-bar">
            <div id="img-logo">
                <img className="logo" src="/logo-text.png" alt="B-Fit" width="100" height="100"></img>
                <Link to="/Home">Home</Link>
                <Link to="login">Login</Link>
                <Link to="/calculator">BMI Calculator</Link>
                <Link to="/progress">Your Progress</Link>
            </div>
            <div id="about-contact">
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}
export default NavBar;
