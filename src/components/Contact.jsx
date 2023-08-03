import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  emailjs.init('R2d1Cs7TamwdujlQZ');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iyw0qre', 'template_zspg4ho', form.current, 'R2d1Cs7TamwdujlQZ')
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='contact'>
      <form ref={form} onSubmit={sendEmail} id='myForm'>
        <div 
          className='text-center'
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <h1 className='pt-48 text-5xl max-sm:text-3xl font-bold '>Contact Me</h1>
          <p className='text-2xl max-sm:text-xl'>Let's Work Together!</p>
        </div>
        <div className='grid grid-cols-3 max-sm:grid-cols-1 md:justify-items-center px-5 gap-5 py-20 mb-12'>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div>
              <address className='text-xl'>Gen T. De Leon, Valenzuela City</address>
              <p>Philippines, 1440</p>
            </div>
            <div className='py-4'>
              <h1 className='text-xl'>09155041069</h1>
              <p>Get in touch</p>
            </div>
            <div>
              <h1 className='text-xl'>salazarhomer1@gmail.com</h1>
              <p>Send me your email</p>
            </div>
          </div>
          <div 
            className='w-full'
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="w-full mb-5">
              <input
                type="text"
                name="user_name"
                className="w-full bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-outline focus:border-outline block px-5 py-3 dark:border-outline dark:placeholder-gray-400 dark:text-white dark:focus:ring-outline dark:focus:border-outline"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="w-full mb-5">
              <input
                type="email"
                name="user_email"
                className="w-full bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-outline focus:border-outline block px-5 py-3 dark:border-outline dark:placeholder-gray-400 dark:text-white dark:focus:ring-outline dark:focus:border-outline"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="user_subject"
                className="w-full bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-outline focus:border-outline block px-5 py-3 dark:border-outline dark:placeholder-gray-400 dark:text-white dark:focus:ring-outline dark:focus:border-outline"
                placeholder="Enter your subject (Optional)"
              />
            </div>
          </div>
          <div 
            className="w-full"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <textarea
              name="message"
              rows="5"
              className="w-full px-2 py-2 text-sm border border-outline text-gray-900 bg-transparent rounded-lg focus:ring-outline focus:border-outline dark:border-outline dark:placeholder-gray-400 dark:text-white dark:focus:ring-outline dark:focus:border-outline"
              placeholder="Write your thoughts here..."
            >
            </textarea>
            <button type="submit" className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border border-outline hover:bg-primary">Send Message</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
