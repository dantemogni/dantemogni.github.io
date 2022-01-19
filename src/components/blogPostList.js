import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from "./blogPostList.module.css"


const BlogPostList = ({max, pageTitle}) => {

    const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {sourceInstanceName: {eq: "blog"}}
        sort: {fields: childrenMdx___frontmatter___date, order: DESC}
      ) {
        nodes {
          childMdx {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
              tags
            }
            id
            slug
          }
        }
      }
    }
    `)

    var nodes =  data.allFile.nodes.filter(node => node.childMdx != null)

    if(max !== null) {
        nodes =  nodes.slice(0, max)
    }

    return (
        <section>
            <h3 className={styles.heading}>{pageTitle}</h3>
            {
              nodes.length === 0 ? <p>No blog posts yet</p> :
              nodes.map((node) => (
                <article className={styles.postContainer} key={node.childMdx.id}>
                <span className={`italic ${styles.datePost}`}>{node.childMdx.frontmatter.date}</span>
                  <h2 class="mg-0">
                    <Link className={styles.blogPostHeading} to={`/blog/${node.childMdx.slug}`}>
                      {node.childMdx.frontmatter.title}
                    </Link>
                  </h2>
                  <span className={`italic ${styles.tagPost}`}>{node.childMdx.frontmatter.tags}</span>
              </article>
            ))
            }
        </section>
    )
}

export default BlogPostList