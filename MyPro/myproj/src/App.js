import Login from "./Components/Login";
import './Assert/Css/App.css'
import NavBar from './Components/Navbar';
import Register from "./Components/Register";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import {Route,Routes} from 'react-router-dom';
import AdminDashboard from "./Components/AdminDashboard";
import Dogadap from "./Components/Dogadap";
function App() {
  return (
    <>
    <NavBar/>
    {/* <AdminDashboard/> */}
    <Routes>
    <Route path='/' element={<Home/>}/>
      {/* <Route path='/register' element={<About/>}/>   */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dashboard' element={<AdminDashboard/>}/>
      <Route path='/dogadap' element={<Dogadap/>}/>
    </Routes>
    

    </>
  );
}

export default App;
