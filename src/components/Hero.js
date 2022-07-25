import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai"

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
        <p>A free coding club for children ages 7-17,</p>
        <p>running every other Saturday 1-3pm,</p>
        <p>at the Bishops Cleeve Library, near Cheltenham, Gloucestershire.</p>
      </div>
      <a
        href="https://zen.coderdojo.com/dojos/gb/cheltenham/bishops-cleeve-bishops-cleeve-library"
        target="_blank"
        rel="noreferrer"
        className="mt-4 text-white lg:mt-6 bg-[#ED684A] active:bg-pink-600 font-bold text-sm lg:text-base px-6 py-4 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 tracking-wider"
      >
        Book a Session
      </a>
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
          href="https://twitter.com/CoderDojoBC"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <AiFillTwitterSquare />
        </a>
      </div>
    </div>
  )
}

export default Hero
