
import './assets/Css/core.css'
import { Route, Routes } from 'react-router-dom';
import User from './Components/User';
import Adduser from './Components/Adduser';
import Edituser from './Components/Edituser';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/add' element={<Adduser />} />
        <Route path='/edit/:id' element={<Edituser />} />
      </Routes>
    </>
  );
}

export default App;
