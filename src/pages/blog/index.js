import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import PageContainer from "../../components/PageContainer"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <PageContainer pageTitle="Blog">
        {data.allMdx.nodes.map(node => (
          <article key={node.id} className="py-2 text-center">
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p className="italic">{node.frontmatter.date}</p>
          </article>
        ))}
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
