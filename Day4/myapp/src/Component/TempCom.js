import {useState} from 'react';

const TempCom =()=>{
    const [data,setData] = useState({
        username:'',
        password:'',
    })
    const handleChange =(e)=>{
        setData({...data,[e.target.id]:e.target.value})
        console.log(data)
    }
    const handleSubmit =(e)=>{
        console.log('final data')
        console.log(data)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" onChange={handleChange}/>
            <input type="password" placeholder='password' onChange={handleChange}/>
            <input type="submit" value="Login"/>
        </form>
        
        </>


    )
}
export default TempCom;