import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
        <div className='row'>
        
            <div className='col-6'>
            <h1 className='contacth1'>GET IN TOUCH</h1>
                <p className='contactp'>you have piece of advice or suggestion that you would like to share with us? feel free to contact us</p>
             <form>
                <label for="name">Name</label>
                <input type='text' id="name"></input>
                <label for="mail">Email</label>
                <input type='Email' id="mail"></input>
                <label for="subject">Subject</label>
                <input type='text' id="subject"></input>
                <label for="message">Message</label>
                <textarea id="message"></textarea>
                <button className='btn btn-contact'>Send message</button>
             </form>
            </div>
            <div className='col-6'>
                <h1 className='contacth1'>FIND US</h1>
                <p className='contactp'>Addres:40 park ave,brooklyen new york 70250</p>
                <p className='contactp'>Phone no:000-444-5555</p>
                <p className='contactp'>Email:contact@grill.com</p>
                <iframe title="my location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251482.44857921428!2d76.16084508763808!3d9.98268091865779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1661575884442!5m2!1sen!2sin" width="500" height="350" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}
