import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Spot from '../components/Spot/Spot'
import Layout from '../components/Util/Layout'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
}) => (
  <article>
    <section className="hero">
      <div className="hero-body">
        <div className="container is-fluid">
          <h1 className="title">
            {title && title}
          </h1>
          <h2 className="subtitle">
            {description && description}
          </h2>
        </div>
      </div>
    </section>
    <Spot />
    <Spot className="o-spot--reverse" />
    <Spot />
  </article>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
}

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
	)
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
	markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
			frontmatter {
				title
				image
				heading
				subheading
				mainpitch {
					title
					description
				}
				description
				intro {
					blurbs {
						image
						text
					}
					heading
					description
				}
			}
		}
	}
`
