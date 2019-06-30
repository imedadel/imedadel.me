import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'

import resume from '../assets/ImedAdelResume.pdf'

const Page = ({ data }) => (
	<main>
		<Helmet>
			<meta charSet='utf-8' />
			<title>Imed Adel</title>
			<link rel='canonical' href='https://imedadel.me' />
			<html lang='en' />
			<meta
				name='viewport'
				content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover'
			/>
			<meta
				name='google-site-verification'
				content='zTgLUUdv7vAoD9OEXQf1Lurh9PxlHof08WW1h3p1cgw'
			/>
			<meta name='msvalidate.01' content='D2ECEF51E4DAF349AA4E295011F6A257' />

			<meta property='og:url' content='https://imedadel.me' />
			<meta property='og:type' content='website' />
			<meta property='og:locale' content='en' />
			<meta property='og:site_name' content='Imed Adel' />
		</Helmet>
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
