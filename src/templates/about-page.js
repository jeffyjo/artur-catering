import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Util/Layout'
import Content, { HTMLContent } from '../components/Util/Content'

import Avatar from '../components/Avatar/Avatar';
import Partners from '../components/Partners/Partners'

export const AboutPageTemplate = ({ title, content, contentComponent, avatars, partners }) => {
	const PageContent = contentComponent || Content

	return (
		<section className="section section--gradient">
			<div className="container">
				<div className="columns">
					<div className="column is-10 is-offset-1">
						<h2 className="u-align--center u-align@desktop--left title is-size-3 has-text-weight-bold is-bold-light">
								{title}
						</h2>

						{/* Should be dynamic and looped */}
						<div className="section u-grid u-grid--column u-grid--center u-grid@tablet--row u-grid@tablet--space-around">
							{avatars.map((avatar, index)=> (
								<Avatar image={avatar.image} imageTitle={avatar.text} header={avatar.imageTitle} decsription={avatar.decsription} key={index}/>
							 ) )}
						</div>

						<div className="section">
							<PageContent className="content" content={content} />
						</div>

						<div>
							<Partners partners={partners} />
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}

AboutPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func,
	avatars: PropTypes.array,
	partners: PropTypes.array
}

const AboutPage = ({ data }) => {
	const { markdownRemark: post } = data

	return (
		<Layout>
			<AboutPageTemplate
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				content={post.html}
				avatars={post.frontmatter.avatars}
				partners={post.frontmatter.partners}
			/>
		</Layout>
	)
}

AboutPage.propTypes = {
	data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
	query AboutPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title 
				avatars {
					avatar {
					  image {
						src {
						  id
						}
						alt
					  }
					  header
					  description
					}
				  }
				  partners {
					partner {
					  image {
						src {
						  id
						}
						alt
					  }
					  imageTitle
					  partnerName
					}
				
				}
			}
		}
	}
`
