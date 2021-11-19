import * as React from "react"
import BlogPostList from "../components/blogPostList"
import ProjectsOverview from "../components/projectsOverview"
import Layout from "../components/layout"
import "../css/global.css"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Hi!">
    <ul class="no-decoration pd-0 presentacion">
      <li><span class="bold-italic">Email:</span> mognidante (at) gmail (dot) com</li>
      <li><span class="bold-italic">GitHub:</span> <a class="underline" href="https://github.com/dantemogni" alt="GitHub profile">dantemogni</a></li>
      <li><span class="bold-italic">LinkedIn:</span> <a class="underline" href="https://linkedin.com/in/dantemogni" alt="LinkdIn profile">dantemogni</a></li>
    </ul>
    <ProjectsOverview pageTitle="Projects Overview"></ProjectsOverview>
    <BlogPostList pageTitle="Writings" max={2}></BlogPostList>
    </Layout>
  )
}

export default IndexPage
