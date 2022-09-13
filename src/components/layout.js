/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SEO from "./Seo"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-500 to-purple-900 text-slate-50 min-h-screen">
      <Header siteTitle={data.site.siteMetadata.title} />
      <SEO title={pageTitle} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0`,
        }}
      >
        <main className="">{children}</main>
        <footer className="text-center pt-2 pb-6">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
