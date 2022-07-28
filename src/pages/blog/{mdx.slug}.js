import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <h1 className="text-center pt-10 pb-2 text-3xl lg:text-4xl">
        {data.mdx.frontmatter.title}
      </h1>
      <h2 className=" text-xs text-slate-200 font-normal text-center pb-1">
        Posted by {data.mdx.frontmatter.author} on {data.mdx.frontmatter.date}
      </h2>
      <div class="m-4 p-4 rounded bg-white text-black">
        <article className="prose prose-slate mx-auto">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        author
        date(formatString: "D MMMM YYYY")
      }
      body
    }
  }
`

export default BlogPost
