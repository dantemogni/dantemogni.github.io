import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import * as styles from "../../components/blogPostList.module.css"


const BlogPost = ({ data }) => {
  const image = getImage(data.file.childMdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.file.childMdx.frontmatter.title}>
      <span className={`italic ${styles.tagPost}`}>{data.file.childMdx.frontmatter.tags}</span>
      <p>{data.file.childMdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={data.file.childMdx.frontmatter.hero_image_alt}
      />
      <MDXRenderer>
        {data.file.childMdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    file(
      sourceInstanceName: {eq: "blog"}
      childMdx: {id: {eq: $id}}) {
      childMdx {
        body
        frontmatter {
          title
          tags
          date(formatString: "MMMM DD, YYYY")
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default BlogPost