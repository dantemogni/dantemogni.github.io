import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from "./blogPostList.module.css"


const BlogPostList = ({max, pageTitle}) => {

    const data = useStaticQuery(graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
            frontmatter {
              date (formatString: "MMMM D, YYYY") 
              title
              tags
            }
            id
            slug
          }
        }
      }
    `)

    let nodes =  data.allMdx.nodes

    if(max !== null) {
        nodes =  nodes.slice(0, max)
    }

    return (
        <section>
            <h3 className={styles.heading}>{pageTitle}</h3>
            {
                nodes.map((node) => (
                  <article className={styles.postContainer} key={node.id}>
                    <span className={`italic ${styles.datePost}`}>{node.frontmatter.date}</span>
                      <h2 class="mg-0">
                        <Link className={styles.blogPostHeading} to={`/blog/${node.slug}`}>
                          {node.frontmatter.title}
                        </Link>
                      </h2>
                      <span className={`italic ${styles.tagPost}`}>{node.frontmatter.tags}</span>
                  </article>
              ))
            }
        </section>
    )
}

export default BlogPostList