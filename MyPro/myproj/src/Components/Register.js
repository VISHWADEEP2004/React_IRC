import '../Assert/Css/register.css'

function Register(){
    return(
        <>
        <form className="container2 shadow2" onsubmit="register()" >
        <h3>Registration form</h3>
        <input type="text" name="" id="names" placeholder="Name" className="name-input2"/>
        <input type="number" name="" id="Age" placeholder="Age" className="name-input2"/>
        <input type="email" name="" id="Email" placeholder="Email" className="name-input2"/>
        <input type="password" name="" id="pass1" placeholder="Password" className="name-input2"/>
        <input type="password" name="" id="pass2" placeholder="Confirm Password" className="name-input2"/>
        <input type="number" name="" id="Mobile Number" placeholder="Phone" className="name-input2"/>
        <input type="submit" value="SUBMIT" className="button-input2"/> 
        </form>
        </>

    )
}
export default Register;