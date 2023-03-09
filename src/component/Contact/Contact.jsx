import React from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useRef } from 'react';
import "./Contact.css";
import { useAuth0 } from "@auth0/auth0-react";
export const Contact = () => {
  const { user, isAuthenticated } = useAuth0();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_p135l8q', 'template_qqn2sry', form.current, 'FWjRwgdaiNq5Nklal')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  //sendemail end
    //see  what is say users start
    let [data,setdata] = useState({
      name:"",
      subject:"",
      email:"",
      message:""
    });
    let submitevent = ()=>{
      if(data.name && data.email && data.message){
        alert(`Your name is ${data.name}.Your subject is ${data.subject} Your email is ${data.email}. And you want to say me ${data.message} and you can reply within 24 hours.`);
        setTimeout(() => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        }, 3000);
      }
      else{
     
      }
     
    }
    let InputEvent = (event)=>{
      const{name,value} = event.target;
      setdata((previousData)=>{
        return{...previousData,[name]:value};
      })
    };
  //see  what is say users end
  return (
    <div className='container-fluid contact g-0'>
      <h4 className='text-center pt-5 pb-4'>Feel Free To Contact US</h4>
      <div className="container-fluid g-0">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2460555409307!2d87.81867869999999!3d23.234131599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f83758b2c01551%3A0xdfd4298999a2d330!2sKharswar%20Pally%20United%20Club!5e0!3m2!1sen!2sin!4v1675921868701!5m2!1sen!2sin" title='mylocation' style={{width:'100%',height:'330px',border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
     <div className="container d-flex justify-content-center align-itmes-center py-5">
     <div className="col-12 col-md-8 col-lg-4">
     <form ref={form} action="" onSubmit={sendEmail} method="POST">
               <div className="row">
                  <div className="col">
                    <input type="text" id="name" name="name" value={isAuthenticated?user.name:data.name}  onChange={InputEvent} className='form-control py-2' placeholder='Name'/>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col my-3">
                   <input type="email" id="email" name="email" placeholder="Email" value={isAuthenticated?user.email : data.email}  onChange={InputEvent} className='form-control py-2'/>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                   <textarea type="text" id="message" name="message" placeholder="Message" value={data.message}  onChange={InputEvent} className='form-control py-3'/>
                  </div>
                </div>
                <div className="row " >
                  <div className="col-12 submitbtn ">
                    <button className='btn px-5 mt-5' onClick={submitevent}>SEND</button>
                  </div>
                </div>
             </form>
     </div>
     </div>
    </div>
  )
}
