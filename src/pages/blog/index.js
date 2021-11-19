import * as React from "react"
import Layout from "../../components/layout"
import BlogPostList from "../../components/blogPostList"

const indexBlog = () => {
    return (
      <Layout pageTitle="Blog">
        <BlogPostList></BlogPostList>
      </Layout>
    )
}


export default indexBlog