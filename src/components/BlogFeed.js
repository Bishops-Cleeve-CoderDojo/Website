import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const BlogFeed = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
        nodes {
          frontmatter {
            date(formatString: "D MMMM YYYY")
            title
          }
          id
          slug
        }
      }
    }
  `)

  return (
    <section className="p-6 flex flex-col items-center bg-slate-100">
      <h2>Blog</h2>
      <div className="py-4 grid grid-cols-1 gap-6 lg:grid-cols-3 text-justify">
        {data.allMdx.nodes.map(node => (
          <article key={node.id} className="text-center">
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p className="italic text-xs">{node.frontmatter.date}</p>
          </article>
        ))}
      </div>
      <Link
        to="blog"
        className="mt-4 text-white lg:mt-6 bg-[#41BAC1] active:bg-pink-600 font-bold text-sm lg:text-base px-6 py-4 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 tracking-wider rounded-full"
      >
        Older Posts
      </Link>
    </section>
  )
}

export default BlogFeed
