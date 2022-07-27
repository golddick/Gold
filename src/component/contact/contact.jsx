import React from 'react'
import {useRef as UseRef } from 'react';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiWhatsappFill}  from 'react-icons/ri'
import emailjs from '@emailjs/browser';


const contact = () => {

  const form = UseRef ();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8xios8u', 'template_objf7d7', form.current, 'CAv9SNqpSwCTqTx9e')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container' >
        <div className='contact_options' >
          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>samloko money</h5>
            <a href='https://m.me/' target='_blank'>Send message</a>
          </article>
          <article className='contact_option'>
            <RiWhatsappFill className='contact_option-icon'/>
            <h4>whatsApp</h4>
            <h5>+08065.....</h5>
            <a href='https://wa.me/+19204746349'target='_blank'>Send mail</a>
          </article>
          <article className='contact_option'>
            <RiWhatsappFill className='contact_option-icon'/>
            <h4>whatsApp</h4>
            <h5>+1324....</h5>
            <a href='https://api.whatsapp.com/send?phone=+19204746349' target='_blank'>Send mail</a>
          </article>
        </div>
        {/*END OF CONTACT OPTION*/}
        <form ref={form} onSubmit={sendEmail} > 
          <input type='text' name='name' placeholder='Your full Name' required/>
          <input type= 'email' name='email' placeholder='Your Mail' required/>
          <textarea name='message' rows='7' placeholder='Your message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>

    </section>
  )
}

export default contact