import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1xtioqj', 'template_q8tk58m', form.current, 'FbVglwpAVBPz0hKGV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="join" id='join'>
        <div className="left-j">
            <div>
                <span className='stroke-text'>Ready to </span>
                <span>Level up</span>
            </div>
            <div>
                <span>Your body</span>
                <span className='stroke-text'> with us ?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your email to join' />
                <button className="btn btn-j">Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join