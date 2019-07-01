import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Spot from '../components/Spot/Spot'
import Layout from '../components/Util/Layout'

export const IndexPageTemplate = ({
  title,
  description,
  hero,
  blurbs
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
    <div className="container is-fluid">
      {blurbs && blurbs.map((blurb, i) => (
        <Spot
          key={`${blurb.image.publicURL}${i}`}
          src={blurb.image.image.publicURL}
          alt={blurb.image.image.alt}
          contentComponent={blurb.description}
          className={i % 2 === 0 ? '' : 'o-spot--reverse' }
        />
      ))}
    </div>
  </article>
);

IndexPageTemplate.propTypes = {
	hero: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	description: PropTypes.string,
  blurbs: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { title, description, hero, blurbs } = data.markdownRemark.frontmatter

	return (
		<Layout>
			<IndexPageTemplate
        title={title}
        description={description}
        hero={hero}
        blurbs={blurbs}
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
        title,
        description
        hero {
          image {
            publicURL
          }
          alt
        },
        blurbs {
          description,
          image {
            alt,
            image {
              publicURL
            }
          }
        }
      }
    }
	}
`
