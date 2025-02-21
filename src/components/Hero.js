import React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"

const Hero = () => {
  return (
    <div className="px-8 pt-6 pb-2 flex flex-col items-center text-center">
      <StaticImage
        className="w-64 mt-6"
        src="../images/CoderDojoSplitdarkbg.svg"
        alt="CoderDojo Logo"
      />
      <h1 className="mb-4 font-medium lg:text-2xl">@ Bishops Cleeve</h1>
      <div className="lg:text-xl">
        <p>A free coding club for children ages 7-14,</p>
        <p>running every other Saturday 1pm-2.30pm,</p>
        <p>at the Bishops Cleeve Library, near Cheltenham, Gloucestershire.</p>
      </div>
      <div className="flex space-x-2">
        <a
          href="https://codeclub.org/en/clubs/b05ca2dc-65c8-4501-bf67-869acc1773c9"
          target="_blank"
          rel="noreferrer"
          className="mt-4 text-white lg:mt-6 bg-[#ED684A] active:bg-pink-600 font-bold text-sm lg:text-base px-6 py-4 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 tracking-wider"
        >
          Book a Session
        </a>
        <Link
          to={`/blog/volunteers`}
          className="mt-4 text-white lg:mt-6 bg-[#41BAC1] active:bg-pink-600 font-bold text-sm lg:text-base px-6 py-4 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 tracking-wider"
        >
          Volunteer
        </Link>
      </div>
      <div className="flex space-x-2 mt-2 text-4xl">
        <a
          href="https://www.facebook.com/BishopsCleeveCoderDojo/"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://www.instagram.com/coderdojobc/"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <AiFillInstagram />
        </a>
      </div>
    </div>
  )
}

export default Hero
