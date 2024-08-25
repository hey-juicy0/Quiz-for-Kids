import './Capital.css';
import Nav from './Nav';

const Capital = () => {
    return(
        <>
        <Nav/>
        <div className='capital_app'>
            <h1>수도</h1>
            <div className='capital_main'>
                <img className='capital_img' src = 'icon.png' alt = '수도'/>
            </div>
        </div>
        </>
    )
}
export default Capital;