import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Activities = () => {
  return (
    <section
      id="activities"
      className="p-6 flex flex-col items-center space-y-4"
    >
      <h2>Activities</h2>
      <p className="pb-4">
        Here are a few examples of the sorts of things we do at CoderDojo.
      </p>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 text-justify px-4">
        <div className="flex flex-col space-y-4 items-center">
          <StaticImage
            className="w-48 lg:w-44"
            imgStyle={{
              borderRadius: '1rem',
            }}
            src="../images/scratch.jpg"
            alt="Scratch Logo"
          />
          <h3>Learn to code with Scratch</h3>
          <p>
            Scratch is a tool for building your own games and animated stories.
            The simple drag and drop interface makes it easy to bring ideas to
            life, and helps teach the building blocks of programming.
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <StaticImage
            className="w-48 lg:w-44"
            imgStyle={{
              borderRadius: '1rem',
            }}
            src="../images/webapp.jpg"
            alt="A website viewed on a tablet"
          />
          <h3>Build websites &amp; apps</h3>
          <p>
            When you're ready for something more advanced, try building your own
            website or app. This could be a game, something more practical, or
            anything you can imagine!
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <StaticImage
            className="w-48 lg:w-44"
            imgStyle={{
              borderRadius: '1rem',
            }}
            src="../images/pi.jpg"
            alt="A Raspberry Pi circuit board"
          />
          <h3>Hardware &amp; Robotics</h3>
          <p>
            In future Dojo sessions, we will look at using code outside of our
            laptops, to create things like robots and musical instruments.
          </p>
        </div>
      </div>
      <p className="pt-6">
        If you'd like to see the sorts of things we build (or if you'd like to
        give them a try outside of the Dojo) click this button to find
        instructions for hundreds of examples!
      </p>
      <a
        href="https://projects.raspberrypi.org/en/projects"
        target="_blank"
        rel="noreferrer"
        className="mt-4 text-white lg:mt-6 bg-[#ED684A] active:bg-pink-600 font-bold text-sm lg:text-base px-6 py-4 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 tracking-wider rounded-full"
      >
        CoderDojo Projects
      </a>
    </section>
  )
}

export default Activities
