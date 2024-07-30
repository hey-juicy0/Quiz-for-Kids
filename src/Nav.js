import { Link } from "react-router-dom";
import './Nav.css';
const Nav = () => {
    return(
        <div className="nav_app">
            <div className= "nav_links">
            <Link to='/flags'>
                국기
            </Link>
            </div>
        </div>
    )

}
export default Nav;