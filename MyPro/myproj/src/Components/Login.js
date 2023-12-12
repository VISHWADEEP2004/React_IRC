import '../Assert/Css/login.css'
import '../Assert/Css/App.css'
function Login(){
    return(
        <>
        
        <form className="container1 shadow1" onSubmit="Login()" >
            <h3>Login</h3>
        <input type="text" name="" id="name" placeholder="User Name" className="name-input1"/>
        <input type="password" name="" id="pass" placeholder="Password" className="name-input1"/>
        <input type="submit" value="Login" className ="button-input1"/>
        </form>
        </>
    )

}
export default Login;