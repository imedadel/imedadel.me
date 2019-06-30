import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'

import resume from '../assets/Imed_Adel_Resume.pdf'

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
		<h1 style={{ textTransform: 'lowercase' }}>
			Imed Adel.
		</h1>
			<section>
				<Link to={resume}>resume</Link>,{' '}
				<a href='https://www.linkedin.com/in/imedadel'>linkedin</a>,{' '}
				<a href='https://github.com/ImedAdel'>github</a>,{' '}
				<a href='https://twitter.com/Imed_Adel'>twitter</a>.
			</section>
    {console.log(data)}
		<section>
			{data.allMdx.nodes.map(node => (
				<article>
					<h2>
						<Link to={`/`}>{node.frontmatter.title}</Link>
					</h2>
				</article>
			))}
		</section>
	</main>
)

const pageQuery = graphql`
	{
		allMdx {
			nodes {
				id
        frontmatter {
          title
        }
			}
		}
	}
`

export default () => (
	<StaticQuery query={pageQuery} render={data => <Page data={data} />} />
)
