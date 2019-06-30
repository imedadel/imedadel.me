import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import SEO from '../components/SEO'

import resume from '../assets/ImedAdelResume.pdf'

const Page = ({ data }) => (
	<main>
		<SEO />
		<h1 style={{ textTransform: 'lowercase' }}>Imed Adel.</h1>
		{console.log(data)}
		<section>
			{data.allMdx.nodes.map(node => (
				<article>
					<h2>
						<Link to={`/${node.frontmatter.slug}`}>{node.headings[0].value}</Link>
					</h2>
				</article>
			))}
		</section>
		<p>
			<Link to={resume}>Resume</Link>,{' '}
			<a href='https://www.linkedin.com/in/imedadel'>Linkedin</a>,{' '}
			<a href='https://github.com/ImedAdel'>Github</a>,{' '}
			<a href='https://twitter.com/Imed_Adel'>Twitter</a>.
		</p>
	</main>
)

const pageQuery = graphql`
	{
		allMdx {
			nodes {
				id
				frontmatter {
					slug
				}
				headings {
					value
				}
			}
		}
	}
`

export default () => (
	<StaticQuery query={pageQuery} render={data => <Page data={data} />} />
)
