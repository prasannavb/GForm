import { Link } from "react-router-dom";
const Final=()=>
{
    return(
        <div className="final-div">
            <div className="final-upper-div">
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            <div className="final-lower-div">
                <h1>We received your form</h1>
                <h2>We will meet sooooon!!</h2>
                <p>Thanks for submitting we will get back to you soon!!!!</p>
                <Link to="https://www.svce.ac.in/">Get Back</Link>
            </div>
        </div>
    )
}

export default Final;