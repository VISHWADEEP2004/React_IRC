import '../Assert/Css/login.css'
import '../Assert/Css/App.css'
import cat from '../Assert/img/cat.gif';
import { Link } from 'react-router-dom';
function Login(){
    return(
        <>
        <div className='login-container'>
        <form className="container1 shadow1" onSubmit="Login()" >
        <Link to='/' className='cancel-link'>
          <span className='cancel-symbol'>🗙</span>
        </Link>

            <h3>Login</h3>
        <input type="text" name="" id="name" placeholder="User Name" className="name-input1"/>
        <input type="password" name="" id="pass" placeholder="Password" className="name-input1"/>
        <input type="submit" value="Login" className ="button-input1"/>
        <span className='sig'>Create an Account
        <Link to='/signup'> Signup <img src={cat} className='catimg'></img></Link>  
        </span>
        </form>
        </div>
        </>
    )

}
export default Login;