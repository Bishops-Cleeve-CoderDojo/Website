import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Team = () => {
  return (
    <section
      id="team"
      className="p-8 flex flex-col items-center text-justify space-y-4 bg-slate-100"
    >
      <h2>Team</h2>
      <div className="flex justify-between items-center">
        <div className="flex-1 flex flex-col space-y-4">
          <p className="w-full">
            Bishops Cleeve CoderDojo is run by a group of local volunteers, with
            many years of technology experience between them.
          </p>
          <p>
            If you are interested in volunteering to help out, please get in
            touch. We're always in need of an extra hand, and you don't need to
            have a technical background.
          </p>
        </div>
        <div className="hidden lg:block mx-8 mt-[-30px] w-56 max-h-52 overflow-hidden">
          <StaticImage
            src="../images/volunteer.png"
            alt="A cartoon of CoderDojo attendees"
          />
        </div>
      </div>
    </section>
  )
}

export default Team
