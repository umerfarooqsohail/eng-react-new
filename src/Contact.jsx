import React, { useState } from "react";

const Contact =()=>{
    const [data,setData]=useState({
      fullname:"",
      phone:"",
      email:"",
      msg:"",
    });
    const inputevent =(event)=>{
       const {name,value}=event.target;
       setData((predata)=>{
           return{...predata,
             [name]:value,}
       })
    }
    const submitform=(e)=>{
      e.preventDefault();
      alert(`my name is ${data.fullname} contact#${data.phone} email is ${data.email} i want to say ${data.msg}`);
      setData({fullname:"", phone:"",email:"",msg:"",});
    }
    return(
    <>
    <div className="my-5">
    <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container ">
        <div className="row">
            <div className="col-6 mx-auto">
            <form onSubmit={submitform}>
            <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputevent} placeholder="Enter your name" required/>
</div>
            <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="tel" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputevent} placeholder="Enter your mobile number" required/>
</div>
            <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputevent} placeholder="name@example.com" required/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Write to us</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={inputevent} required></textarea>
</div>
 <div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
  </form>
            </div>
        </div>
    </div>
``
    </>);
}
export default Contact;