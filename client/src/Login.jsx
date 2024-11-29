import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login=()=>
{
    const [form,Setform]=useState({name:"",pass:""});
    const navigate=useNavigate();
    axios.defaults.baseURL="http://localhost:5000/"
    const Update=(e)=>
    {
        const {name,value}=e.target;
        Setform({...form,[name]:value})
        
    }
    const Auth=async()=>
    {
        const response=await axios.post("/auth",form);
        if(response.data.status=="Success")
        {
            navigate('/Home')
        }
        else
        {
            alert("wrong details")
        }
    }

    return(
        <>
        <div className="login-form">
            Name:<input className="login-input" name="name" onChange={Update} type="text"/><br/>
            Password:<input className="login-input" name="pass" onChange={Update} type="password"/><br/>
            <button className="login-submit-btn" onClick={Auth}>Submit</button>
        </div>
        </>
    )
}
export default Login;