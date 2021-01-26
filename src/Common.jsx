import React from "react";
import {NavLink} from 'react-router-dom';
const Common =(props)=>{
    return(
    <>
    <section id="header" className=" d-flex align-items-center justify-content-center">
    <div className="container-fluid ">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row ">
                <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex align-items-center justify-content-center flex-column ">
                    <h1>{props.name}
                    <strong className="brand-name">  Umer Technical</strong></h1>
                    <h2 className="my-3">
                        Weare the team of talented developers to build websites
                    </h2>
                    <div >
                        <NavLink to={props.visit} className="btnmargin btn-get-started">{props.btn}</NavLink>
                    </div>
                
                </div>
                 <div className="col-md-6 order-1 order-lg-2 header_img">
                <img src={props.imgsrc} width="400px" height="400px" className="animated" alt="hello"/>
                 </div>
            </div>
         </div>
        </div>
    </div>        
    </section>

    </>);
}
export default Common;