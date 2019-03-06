import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Util/Layout'

class TagRoute extends React.Component {
  render() {
    // const posts = this.props.data.allMarkdownRemark.edges
    // const postLinks = posts.map(post => (
    //   <li key={post.node.fields.slug}>
    //     <Link to={post.node.fields.slug}>
    //       <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
    //     </Link>
    //   </li>
    // ))
    // const tag = this.props.pageContext.tag
    // const title = this.props.data.site.siteMetadata.title
    // const totalCount = this.props.data.allMarkdownRemark.totalCount
    // const tagHeader = `${totalCount} post${
    //   totalCount === 1 ? '' : 's'
    // } tagged with “${tag}”`

    return (
      <Layout>
        <section className="section">
          {/* <Helmet title={`${tag} | ${title}`} /> */}
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
  }
`
