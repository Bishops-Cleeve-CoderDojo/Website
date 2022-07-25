import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../../components/layout"
import PageContainer from "../../components/PageContainer"

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <PageContainer pageTitle={data.mdx.frontmatter.title}>
        <p className="text-xs italic pb-2">
          Posted: {data.mdx.frontmatter.date}
        </p>
        <article className="prose prose-slate">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "D MMMM YYYY")
      }
      body
    }
  }
`

export default BlogPost
