import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
  const featuredImage = getImage(data.mdx.frontmatter.featuredImage)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="m-4 overflow-hidden rounded bg-white text-black">
        <div className="grid h-48 lg:h-52">
          <div className="row-start-1 col-start-1 bg-purple-900 h-48 lg:h-52"></div>
          {featuredImage && (
            <GatsbyImage
              image={featuredImage}
              alt=""
              style={{
                gridArea: '1/1',
                filter: 'brightness(50%)',
              }}
              layout="fullWidth"
            />
          )}
          <div className="row-start-1 col-start-1 relative flex flex-col justify-end">
            <h1 className="text-center text-white pt-10 pb-2 text-3xl lg:text-4xl">
              {data.mdx.frontmatter.title}
            </h1>
            <h2 className="text-xs text-slate-200 font-normal text-center pb-8">
              Posted by {data.mdx.frontmatter.author} on{' '}
              {data.mdx.frontmatter.date}
            </h2>
          </div>
        </div>

        <div className="max-w-2xl mx-auto p-4">
          <article className="prose prose-slate pt-2 pb-6 mx-auto">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </article>

          <Link to={'/blog'}>&larr; Back to blog index</Link>

          <hr className="my-5" />
        </div>

        <div className="flex px-8 pb-6 text-slate-600 max-w-xl mx-auto">
          <div className="hidden md:block pr-4 pt-2">
            <StaticImage
              className="w-24"
              src="../../images/Roundel.png"
              alt="CoderDojo Logo"
            />
          </div>
          <div>
            <p className="pb-4">
              CoderDojo Bishops Cleeve is a free coding club for children,
              located near Cheltenham in the UK. Find out more on our{' '}
              <Link to={`/`}>home page.</Link>
            </p>
            <p>
              For more club news and coding articles, follow us on{' '}
              <a
                href="https://twitter.com/CoderDojoBC"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>{' '}
              and{' '}
              <a
                href="https://www.facebook.com/BishopsCleeveCoderDojo/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              .
            </p>
          </div>
        </div>
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
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 1024
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      body
    }
  }
`

export default BlogPost
