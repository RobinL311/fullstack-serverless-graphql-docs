import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import HeadingOne from "../components/typography/HeadingOne"
import HeadingThree from "../components/typography/HeadingThree"
import ArrowLeft from "../assets/arrow-left.svg"
import ArrowRight from "../assets/arrow-right.svg"
import SideChapterBox from "../components/chapters/SideChapterBox"
import GithubButton from "../components/buttons/GithubButtton"
import SEO from "../components/seo"
import constants from "../constants"
export default function Template({ data, pageContext }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const { previous, next } = pageContext
  constants.track(`App.Post.View:${frontmatter.title}`)

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        url={`https://fullstack-serverless-graphql.netlify.app/${frontmatter.path}`}
      />
      <div className="flex justify-center x:flex-col p-3">
        <div className="blog-post">
          <HeadingOne>{frontmatter.title}</HeadingOne>
          <HeadingThree>{frontmatter.date}</HeadingThree>
          <hr className="bg-grey" />
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        <SideChapterBox collapse />
      </div>

      <div className="mt-10">
        <ul className="flex justify-between">
          <li className="">
            {next && (
              <Link to={next.node.frontmatter.path}>
                <span className="flex flex-row">
                  <img src={ArrowLeft} alt="arrow left" /> Previous
                </span>
              </Link>
            )}
          </li>
          <GithubButton href="https://github.com/Fullstack-Serverless-GraphQL/fullstack-serverless-graphql-docs/issues/new?assignees=&labels=&template=help.md&title=">
            Open an issue
          </GithubButton>

          <li className="">
            {previous && (
              <Link to={previous.node.frontmatter.path}>
                <span className="flex flex-row">
                  Next <img src={ArrowRight} alt="arrow left" />
                </span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        postnumber
      }
    }
  }
`
