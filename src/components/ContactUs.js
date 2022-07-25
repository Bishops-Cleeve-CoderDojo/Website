import React from 'react'

const ContactUs = () => {
  return (
    <section id="contact" className="p-8 flex flex-col items-center">
      <h2>Contact Us</h2>
      <p>
        If you'd like to get in touch, please send us a message via our
        Facebook page, or email.
      </p>
      <a
        href="https://www.facebook.com/BishopsCleeveCoderDojo/"
        target="_blank"
        rel="noreferrer"
        className="mt-4 text-white lg:mt-6 bg-[#ED684A] active:bg-pink-600 font-bold text-sm lg:text-base px-6 py-4 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 tracking-wider rounded-full"
      >
        Message us on Facebook
      </a>
      <a
        href="mailto:bishopscleeve.uk@coderdojo.com"
        className="mt-4 text-white lg:mt-6 bg-[#41BAC1] active:bg-pink-600 font-bold text-sm lg:text-base px-6 py-4 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 tracking-wider rounded-full"
      >
        Email us
      </a>
    </section>
  )
}

export default ContactUs