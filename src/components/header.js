import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="py-2 px-4">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between lg:py-2 mt-2">
        <Link to={`/`} className="text-white">
          <div className="flex items-center flex-shrink-0">
            <StaticImage
              className="mr-2"
              src="../images/Roundel.png"
              width="30"
              alt="gatsby astronaut"
            />
            <span className="text-xl font-semibold tracking-tight">
              {siteTitle}
            </span>
          </div>
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border border-black rounded"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center justify-end lg:w-auto`}
        >
          <div className="flex flex-col items-center text-lg justify-end lg:flex-row lg:flex-grow">
            <Link
              to={`/#about`}
              className=" text-white block mt-4 mx-4 lg:inline-block lg:mt-0"
            >
              About
            </Link>
            <Link
              to={`/blog`}
              className="text-white block mt-4 mx-4 lg:inline-block lg:mt-0"
            >
              Blog
            </Link>
            <Link
              to={`/#activities`}
              className="text-white block mt-4 mx-4 lg:inline-block lg:mt-0"
            >
              Activities
            </Link>
            <Link
              to={`/#faq`}
              className="text-white block mt-4 mx-4 lg:inline-block lg:mt-0"
            >
              FAQ
            </Link>
            <Link
              to={`/#venue`}
              className="text-white block mt-4 mx-4 lg:inline-block lg:mt-0"
            >
              Venue
            </Link>
            <Link
              to={`/#team`}
              className="text-white block mt-4 mx-4 lg:inline-block lg:mt-0"
            >
              Team
            </Link>
            <Link
              to={`/#contact`}
              className="text-white block mt-4 mx-2 lg:inline-block lg:mt-0"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4 lg:space-x-0 mt-6 mb-4 lg:my-0 lg:ml-4">
              <a
                href="https://www.facebook.com/BishopsCleeveCoderDojo/"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-4xl leading-none text-white"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://twitter.com/CoderDojoBC"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-4xl leading-none text-white"
              >
                <AiFillTwitterSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
