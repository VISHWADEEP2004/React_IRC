import Login from "./Components/Login";
import NavBar from './Components/Navbar';
import Register from "./Components/Register";
import Home from "./Components/Home";
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      {/* <Route path='/register' element={<About/>}/>   */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>

    </>
  );
}

export default App;
