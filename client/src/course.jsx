const Course=({Update,Submit,Clear,Handle,data})=>
{
    return(
    <>
    <div className="details">
         <div className="course">
            Course:<i>*</i> <br/> <br/>
            <aside> <input onChange={Update} onClick={Handle}  checked={data.course==="CSE"}  name="course"  value="CSE" type="radio"/> Computer Science and Engineering </aside><br/>
            <aside> <input onChange={Update} onClick={Handle}  checked={data.course==="EEE"} name="course"  value="EEE" type="radio"/>  Electrical and Electronic Engineering </aside><br/>
            <aside> <input onChange={Update} onClick={Handle}  checked={data.course==="ECE"} name="course"  value="ECE" type="radio"/>  Electronics and Communication Engineering </aside><br/>
            <aside> <input onChange={Update} onClick={Handle}  checked={data.course==="MECH"} name="course"  value="MECH" type="radio"/> Mechanical Engineering </aside><br/>
            <aside> <input onChange={Update} onClick={Handle}  checked={data.course==="AM"} name="course"  value="AM" type="radio"/> Automobile Engineering </aside><br/>
            <aside> <input onChange={Update} onClick={Handle}  checked={data.course==="IT"} name="course"  value="IT" type="radio"/>  Information Technology </aside><br/>
            <aside> <input onChange={Update} onClick={Handle}  checked={data.course==="CV"} name="course"  value="CV" type="radio"/>Civil Engineering	</aside><br/>
          </div>
          <div className="submit-btn">
            <button className="btn" onClick={Submit} type="button">Submit</button>
            <button className="clear" onClick={Clear} type="buttton">Clear form</button>
          </div>
    </div>
    </>
    )
} 

export default Course;