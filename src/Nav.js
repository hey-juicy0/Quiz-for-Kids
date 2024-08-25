import { Link } from "react-router-dom";
import {IoHome} from 'react-icons/io5';
import './Nav.css';
const Nav = () => {
    return(
        <div className="nav_app">
            <div className= "nav_links">
            <Link to = '/'>
                <IoHome />
            </Link>
            <Link to='/flags'>
                국기
            </Link>
            <Link to= '/four'>
                사자성어
            </Link>

            </div>
        </div>
    )

}
export default Nav;