import React, { useState } from "react";

const Contact =()=>{
   
    const [data,setData]=useState({
      fullname:"",
      lastname:"",
      phone:"",
      email:"",
      homeaddress:"",
      msg:"",
      gender:"male",
      lan1:false,
      lan2:false,
      lan3:false,
      lan4:false,
      country:"Pakistan",
      filename:""
    });
    console.log(data.filename)
    console.log(data.gender)
    console.log(data.country)
    console.log(data.lan1)
    console.log(data.lan2)
    console.log(data.lan3)
    console.log(data.lan4)
    const inputevent =(event)=>{
       const {name}=event.target;
       const value=event.target.type==="checkbox"?event.target.checked:event.target.value;
       setData((predata)=>{
           return{
              ...predata,
             [name]:value,
             
            }
             
       } ) 
    }
  
    const submitform=(e)=>{
      e.preventDefault();
      alert(`my name is ${data.fullname} ${data.lastname} my gender is ${data.gender} 
      contact#${data.phone} email is ${data.email} I live at ${data.homeaddress} Country${data.country}
      want to say ${data.msg}`);
      setData({fullname:"",lastname:"",gender:"male", phone:"",email:"",homeaddress:"",msg:"",});
    }
  
    return(
  <>
   <div className="my-5">
     <h1 className="text-center">Contact Us</h1>
   </div>
   <div className="container ">
      <div className="row">
        <div className="col-6 col-10 mx-auto">
          <form onSubmit={submitform}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">First Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputevent} placeholder="Enter your Fname" required/>
           </div>
           <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" name="lastname" value={data.lastname} onChange={inputevent} placeholder="Enter your Lname" required/>
           </div>
           <label for="exampleFormControlInput1" className="form-label">Select Gender</label>
           <div className="d-inline-flex col-10">
           <div className="form-check">
              <input className="form-check-input ms-4 mr-2" type="radio" name="gender" value="male" checked={data.gender==="male"} onChange={inputevent} id="flexRadioDefault1" />
              <label className="form-check-label ms-1" for="flexRadioDefault1">
                 Male
             </label>
           </div>
           <div className="form-check">
              <input className="form-check-input ms-4 " type="radio" name="gender"  value="female" checked={data.gender==="female"} onChange={inputevent} id="flexRadioDefault2" />
              <label className="form-check-label ms-1 mb-3" for="flexRadioDefault2">
                 Female
             </label>
           </div>
           </div>
         <label for="exampleFormControlInput1" className="form-label">Checked your skill:</label>
           <div className="checkboxes d-inline-flex flex-wrap">
           <div className="form-check ms-4">
             <input className="form-check-input" type="checkbox" name="lan1"  checked={data.lan1} onChange={inputevent} id="flexCheckDefault"/>
             <label className="form-check-label" for="flexCheckDefault">
                React.js
             </label>
           </div>
            <div className="form-check ms-4">
              <input className="form-check-input" type="checkbox" name="lan2"  checked={data.lan2} onChange={inputevent} id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckChecked">
                 React-native
              </label>
            </div>
             <div className="form-check ms-4">
               <input className="form-check-input" type="checkbox" name="lan3"  checked={data.lan3} onChange={inputevent} id="flexCheckDefault"/>
               <label className="form-check-label" for="flexCheckDefault">
                 Node.js
               </label>
             </div>
              <div className="form-check ms-4">
                <input className="form-check-input" type="checkbox" name="lan4"  checked={data.lan4} onChange={inputevent} id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckChecked">
                   PHP
               </label>
             </div>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="mt-2 form-label">Phone</label>
              <input type="tel" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputevent} placeholder="Enter your mobile number" required/>
           </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputevent} placeholder="name@example.com" required/>
           </div>
           <div className="form-floating col-3 mb-2">
              <select className="form-select " id="floatingSelect" aria-label="Floating label select example"  name="country" value={data.country} onChange={inputevent}>
                <option value="Pakistan">Pakistan</option>
                 <option value="Bangladesh">Bangladesh</option>
                 <option value="India">India</option>
                 <option value="China">China</option>
                 <option value="America">America</option>
                 <option value="Turkey">Turkey</option>
             </select>
             <label for="floatingSelect">Select Country</label>
           </div>
           <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Home address</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" name="homeaddress" value={data.homeaddress} onChange={inputevent} placeholder="Provide Home Address" required/>
           </div>
           <div className=" mb-2">
             <label for="exampleFormControlTextarea1" className="form-label">Upload Cv</label>
              <input type="file" id="myFile" name="filename" onChange={inputevent} value={data.filename} className="btn"/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Write to us</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={inputevent} placeholder="Comments" required></textarea>
           </div>
            <div className="col-12">
              <button className="btn btn-outline-primary mr=3 btnmargin" type="submit">Submit form</button>
           </div>
         </form>
       </div>
      </div>
    </div>
  </>);
}
export default Contact;