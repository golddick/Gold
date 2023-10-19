import {useRef as UseRef, useState as UseState } from 'react';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiWhatsappFill}  from 'react-icons/ri'
import emailjs from '@emailjs/browser';


const contact = () => {

  const form = UseRef ();
  const sendEmail = (e) => {
  e.preventDefault();

    emailjs.sendForm('service_nzdqm1t', 'template_cnm78ht', form.current, '0pHWuzQhFnWgjT6uZ')
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
    });

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
            <h4>Mail</h4>
            <h5>golddick60@gmail.com</h5>
            <a href='mailto:golddick60@gmail.com' target="_blank" rel="noopener noreferrer">Send mail</a>
          </article>
          {/* <article className='contact_option'>
            <RiWhatsappFill className='contact_option-icon'/>
            <h4>whatsApp</h4>
            <h5>+08065.....</h5>
            <a href='https://wa.me/+19204746349'target='_blank'>Send mail</a>
          </article> */}
          <article className='contact_option'>
            <RiWhatsappFill className='contact_option-icon'/>
            <h4>whatsApp</h4>
            <h5>+234....</h5>
            <a href='https://api.whatsapp.com/send?phone=+2348065591354' target="_blank" rel="noopener noreferrer">Send message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTION*/}
        <form ref={form} onSubmit={sendEmail} > 
        <input type='text' name='subject' placeholder='Subject' required/>
          <input type='text' name='name' placeholder='Your full Name'  required/>
          <input type= 'email' name='email' placeholder='Your Mail'   required/>
          <textarea name='message' rows='7' placeholder='Your message' required/>
          <div>
          <button type='submit' className='btn btn-primary' >Send Message</button>
          </div>
        </form>
      </div>

    </section>
  )
}

export default contact