import { useNavigate } from "react-router-dom";
import "../Error/Error.css"
let Error = ()=>{
    let nevigate = useNavigate();

    return(
        <>
           <div className="setStyleerror container-fluid d-flex justify-content-center align-items-center">
            <div className="container mt-5 text-center">
            <h1>404 </h1>
            <h3>Error Page</h3>
            <p>Sorry on this page not valid</p>
            <button onClick={()=>nevigate('/')}>Go back Home</button>
            </div>
           </div>
        </>
    )
}
export default Error;