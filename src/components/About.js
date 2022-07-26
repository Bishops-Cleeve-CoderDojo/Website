import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
  return (
    <section
      id="about"
      className="p-6 flex flex-col items-center space-y-4 text-justify"
    >
      <h2>About CoderDojo</h2>
      <div className="flex justify-between">
        <div className="flex-1 flex flex-col space-y-4">
          <p>
            <a href="https://coderdojo.com/" target="_blank" rel="noreferrer">
              CoderDojo
            </a>{' '}
            is an international organisation, introducing children to coding and
            technology all around the world.
          </p>
          <p>
            Each session is a free and fun opportunity to learn about
            programming, and to build something cool! Our volunteer mentors help
            children follow the CoderDojo learning paths, guiding them through
            the basics of coding and on to advanced topics.
          </p>
          <p>
            To book a place at an upcoming session, please click <a>here</a>.
          </p>
          <p>
            Don't forget to follow us on Facebook and Twitter to keep up to date
            with the latest news and announcements from the Dojo.
          </p>
        </div>
        <div className="hidden lg:block mx-8 w-56 h-56">
          <StaticImage
            imgStyle={{
              borderRadius: '1rem',
            }}
            src="../images/spotlight.jpeg"
            alt="A cartoon of CoderDojo attendees"
          />
        </div>
      </div>
    </section>
  )
}

export default About
