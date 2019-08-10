import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

// import SEO from '../components/SEO'
// import { rhythm } from '../utils/typography'

// import resume from '../assets/Imed_Adel_Resume.pdf'

const Page = ({ pageContext: { nodes } }) => (
	<>
		<header>
			{/* <SEO /> */}
			<h1 style={{ textTransform: 'lowercase', marginBottom: `1.5rem` }}>
				Imed Adel.
			</h1>
		</header>
		<main>
			{/* <Link to={`/`} style={{textDecoration: `none`}} title={`Go to homepage`} role={`navigation`}><h2><span role="img" aria-label="Four-Leaf Clover">🍀</span></h2></Link> */}
			{/* {console.log(data)} */}
			<section>
				{nodes.map(node => (
					<article>
						<h2>
							<Link to={`${node.fields.slug}`}>
								{node.headings[0].value}
							</Link>
						</h2>
					</article>
				))}
			</section>
		</main>
		<footer>
			<a href={``}>Resume</a>,{' '}
			<a href='https://www.linkedin.com/in/imedadel'>Linkedin</a>,{' '}
			<a href='https://github.com/ImedAdel'>Github</a>,{' '}
			<a href='https://twitter.com/Imed_Adel'>Twitter</a>.
		</footer>
	</>
)

export default Page
