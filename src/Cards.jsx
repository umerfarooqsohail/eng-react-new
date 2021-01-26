import React from "react";

const Cards =(props)=>{
    return(
    <>
     <div className=" col-md-4">
       <div className="card" style={{width: "18rem"}} >
           <img src={props.imgsrc} className="card-img-top" alt="no to show" height="200px" />
         <div className="card-body">
           <h5 className="card-title">{props.tiltle}</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="https://vulms.vu.edu.pk/" target="_blank" rel="noreferrer" className="btn btn-primary">Watch Now</a>
         </div>
       </div>
     </div>
    </>);
}
export default Cards;