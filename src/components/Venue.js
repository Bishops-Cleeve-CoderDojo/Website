import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Venue = () => {
  return (
    <section id="venue" className="p-8 flex flex-col items-center space-y-4">
      <h2>Venue</h2>
      <p>Our CoderDojo runs at the Bishops Cleeve Library.</p>
      <p>
        Address:
        <a
          href="https://goo.gl/maps/dPZkUv5ch4C4Dy328"
          target="_blank"
          rel="noreferrer"
        >{' '}
          Tobyfield Rd, Bishops Cleeve, Cheltenham GL52 8NN
        </a>
      </p>
      <a
        href="https://goo.gl/maps/dPZkUv5ch4C4Dy328"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          className="rounded"
          src="../images/library_map.jpeg"
          alt="gatsby astronaut"
        />
      </a>
    </section>
  )
}

export default Venue
