import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Flags from './Flags';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/flags' element = {<Flags/>} />
      </Routes>
    </>
  )
}

export default App;
