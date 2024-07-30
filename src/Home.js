import './Home.css';
import Nav from './Nav';
const Home = () =>{
    return(
        <>
        <Nav/>
        <div className="home_app">
            <img src = 'home.png' alt = "홈페이지"/>
        </div>
        </>
    )

}
export default Home;