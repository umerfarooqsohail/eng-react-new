import React from "react";
import Common from './Common';
const About =()=>{
    return(
    <>
<Common 
           imgsrc={process.env.PUBLIC_URL+"/image/about.jpg"}
           name="Welcome to About page"
           visit="/contact"
           btn="Contact us"
       />

    </>);
}
export default About;