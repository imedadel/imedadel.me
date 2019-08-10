import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'

// import SEO from '../components/SEO'
// import { rhythm } from '../utils/typography'

// import resume from '../assets/Imed_Adel_Resume.pdf'

const Post = ({ pageContext: { node } }) => {
	// comment
	return (
		<>
			<header>
				{/* <SEO
					title={node.headings[0].value}
					description={node.frontmatter.desc}
					slug={node.frontmatter.slug}
				/> */}
				<Link
					to={`/`}
					style={{ textDecoration: `none`, marginBottom: `1.5rem` }}
					title={`Go to homepage`}
					role={`navigation`}
				>
					<h2 style={{ textTransform: 'lowercase' }}>Imed Adel.</h2>
				</Link>
			</header>
			<main>
				<MDXRenderer>{node.body}</MDXRenderer>
			</main>
			<footer>
				<a href={``}>Resume</a>,{' '}
				<a href='https://www.linkedin.com/in/imedadel'>Linkedin</a>,{' '}
				<a href='https://github.com/ImedAdel'>Github</a>,{' '}
				<a href='https://twitter.com/Imed_Adel'>Twitter</a>.
			</footer>
		</>
	)
}

export default Post