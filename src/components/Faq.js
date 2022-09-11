import React from 'react'
import { Link } from 'gatsby'

const Faq = () => {
  return (
    <section
      id="faq"
      className="p-8 flex flex-col space-y-4 items-center bg-slate-100"
    >
      <h2>FAQ</h2>
      <div className="flex flex-col space-y-4 w-full lg:w-4/5">
        <details>
          <summary className="text-lg">When does the Dojo run?</summary>
          <div className="ml-4 mt-2 text-sm">
            <p className="">We run every other Satuarday, from 12.30-2.30pm.</p>
            <p>
              {' '}
              Click{' '}
              <a
                href="https://zen.coderdojo.com/dojos/gb/cheltenham/bishops-cleeve-bishops-cleeve-library"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>{' '}
              to view and book our upcoming events.
            </p>
          </div>
        </details>
        <details>
          <summary className="text-lg">Do I need to book?</summary>
          <div className="ml-4 mt-2 text-sm">
            <p className="">Yes, booking is required.</p>
            <p>
              {' '}
              Click{' '}
              <a
                href="https://zen.coderdojo.com/dojos/gb/cheltenham/bishops-cleeve-bishops-cleeve-library"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>{' '}
              to view and book our upcoming events.
            </p>
          </div>
        </details>
        <details>
          <summary className="text-lg">Does CoderDojo cost anything?</summary>
          <p className="ml-4 mt-2 text-sm">
            CoderDojo is free to attend, and is run entirely by volunteers.
          </p>
        </details>
        <details>
          <summary className="text-lg">Do I need to bring anything?</summary>
          <p className="ml-4 mt-2 text-sm">
            If you have access to a laptop, then please bring it along. If not,
            you will be able to use one of the libary's computers.
          </p>
        </details>
        <details>
          <summary className="text-lg">
            Do I need to attend all the sessions?
          </summary>
          <p className="ml-4 mt-2 text-sm">
            No, CoderDojo is not a formal course. It's absolutely fine to come
            along whenever you can, and it doesn't matter if you miss a week (or
            longer!).
          </p>
        </details>
        <details>
          <summary className="text-lg">
            Do I need any coding experience?
          </summary>
          <p className="ml-4 mt-2 text-sm">
            Not at all, our mentors will be there to help you get started. If
            you would like to do some preparation before your first session, we
            recommend this{' '}
            <a
              href="https://www.youtube.com/watch?v=_Nxu0rlo9Pg"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              video introduction to the Scratch programming tool
            </a>
            .
          </p>
        </details>
        <details>
          <summary className="text-lg">
            Do parents need to stay for the duration of the session?
          </summary>
          <p className="ml-4 mt-2 text-sm">
            Yes, if your child is under the age of 13 you'll need to stay for
            the duration of the session.
          </p>
          <p className="ml-4 mt-2 text-sm">
            For children age 13 and over, it is recommended that a
            parent/guardian remains nearby and can be easily reached by phone.
            This is in the interests of safeguarding.
          </p>
        </details>

        <p>
          If there's something else you'd like to know, please{' '}
          <Link to="#contact">get in touch</Link>.
        </p>
      </div>
    </section>
  )
}

export default Faq
