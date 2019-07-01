import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import '../../styles/all.scss'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/artur_logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/artur_logo.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/artur_logo.png"
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href="/img/artur_logo.png"
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/artur_logo.png" />

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />

        </Helmet>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </div>
    )}
  />
)

export default TemplateWrapper
