import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');




  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(e.target)

    try {
      const response = await emailjs.send(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        {
          from_name:name,
          to_name:"Divyanshu Yadav",
          message,
          to_name_for_reply:name,
          to_email_for_reply:email,
        },
        {
          publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
        },
      );
      console.log(response);


      response.status === 200 ? alert("Email sent successfully!!") && await emailjs.send(
        'service_jp25cip',
        'template_p9k1sfh',
        {
        
          to_name_for_reply:name,
          to_email_for_reply:email,
        },
        {
          publicKey: 'T4A1xb0WkCw57okLC',
        },
      ) : alert("Failure")







      
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err);
        return;
      }
    
      console.log('ERROR', err);
    }
  };





  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:youremail@example.com" className='hover:underline'>
                    yadavdivyanshuakb@exmple.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+91 7007872508</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>Akbarpur Ambedkarnagar, Uttar Pradesh, India</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form onSubmit={sendEmail} className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input onChange={(event) => (setName(event.target.value))} type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Name'/>
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>Email</label>
                    <input onChange={(event) => (setEmail(event.target.value))} type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea onChange={(event) => (setMessage(event.target.value))} type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Enter You Message'/>
                </div>
                <button type='submit' className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact