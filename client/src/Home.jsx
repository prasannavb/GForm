import "./App.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Course from "./course";
import axios from "axios"
const Home=()=>
{
    const [formdata,Setform]=useState({name:"",email:"", phone:"",dob:"",gender:"",course:""});
    const [gender, setGender] = useState({gender:"",course:""});
    const navigate=useNavigate();
    axios.defaults.baseURL="http://localhost:5000/"
    const Update=(e)=>
    {
        const {name,value}=e.target;
        Setform({...formdata,[name]:value})
    }

    const Handle=(e)=>
    {
        setGender({...gender,[e.target.name]:e.target.value});
    }

    const Submit=async()=>
    {
      if((formdata.name=="" )|| (formdata.email=="") || (formdata.phone=="") || (formdata.gender=="") || (formdata.dob=="") || (formdata.course==""))
      {
        alert("Kindly fill the form")
      }
      else
      {
        const data=await axios.post("/post",formdata);
        Clear();
        if(data.data.status=="Success")
        {
          navigate("/Final");
        }

      }
    }
    const Clear=()=>
    {
        Setform({name:"",email:"", phone:"",dob:"",gender:"",course:""});
        setGender({gender:"",course:""});
    }

    return(
        <>
      
        <div className="details">
          <div className="name">
            Name:<i>*</i> <br/>
             <input className="input" name="name" value={formdata.name} type="text" onChange={Update} placeholder="Enter your Name" required />
          </div>
    
          <div className="email">
           Email:<i>*</i> <br/>
           <input className="input" name="email" value={formdata.email} type="email" onChange={Update}  placeholder="Enter your email" required/>
          </div>
    
          <div className="dob">
            Date of Birth:<i>*</i> <br/>
            <input type="text" className="input" value={formdata.dob} name="dob" onChange={Update}  placeholder="Enter your DOB" required/>
          </div>
    
          <div className="gender">
            Gender:<i>*</i> <br/>
            <input name="gender" onChange={Update} onClick={Handle} value="Male" checked={gender.gender==="Male"} type="radio" /> Male
            <input name="gender" onChange={Update} onClick={Handle} value="Female" checked={gender.gender==="Female"} type="radio"/> Female
          </div>
    
          <div className="phone">
            Phone Number:<i>*</i> <br/>
            <input className="input" type="text" name="phone" value={formdata.phone} onChange={Update} placeholder="Enter your phone number" required/>
          </div>
          <Course Update={Update} Submit={Submit} Clear={Clear} Handle={Handle} data={gender}/>
        </div>
        </>
      )
}

export default Home;