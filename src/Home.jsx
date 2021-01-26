import React from "react";
import Common from './Common';
const Home =()=>{
    return(
    <>
       <Common 
           imgsrc={process.env.PUBLIC_URL+"/image/homes1.png"}
           name="Grow your business"
           visit="/service"
           btn="Get started"
       />

    </>);
}
export default Home;