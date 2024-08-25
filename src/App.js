import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Flags from './Flags';
import Four from './Four';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/flags' element = {<Flags />} />
        <Route path='/four' element = {<Four />} />
      </Routes>
    </>
  )
}

export default App;
