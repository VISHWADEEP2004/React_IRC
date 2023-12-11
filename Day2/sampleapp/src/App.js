import './Asserts/Css/Style.css'
import './Asserts/Css/Nav.css'
import Nav from './Components/Nav'
function App(){
    return(
        <div>
            <Nav/>
            <form className="container shadow" onSubmit="register()">
        <h3>Registration form</h3>
        <input type="text" name="" id="names" placeholder="Name" className="name-input"/>
        <input type="number" name="" id="Age" placeholder="Age" className="name-input"/>
        <input type="email" name="" id="Email" placeholder="Email" className="name-input"/>
        <input type="password" name="" id="pass1" placeholder="Password" className="name-input"/>
        <input type="password" name="" id="pass2" placeholder="Confirm Password" className="name-input"/>
        <input type="number" name="" id="Mobile Number" placeholder="Phone" className="name-input"/>
        <input type="submit" value="SUBMIT" className="button-input"/> 
        </form>
        </div>

    )
}
export default App