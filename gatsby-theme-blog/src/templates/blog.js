/** @jsx jsx */
import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import {
	Layout,
	Main,
	Header,
	Container,
	Footer,
	Styled,
	Article,
	jsx,
} from 'theme-ui'

// import SEO from '../components/SEO'
// import { rhythm } from '../utils/typography'

// import resume from '../assets/Imed_Adel_Resume.pdf'

const Page = ({ pageContext: { nodes } }) => (
	<Layout>
		<Header>
			{/* <SEO /> */}
			<Styled.h1>Imed Adel.</Styled.h1>
		</Header>
		<Main>
			{/* <Link to={`/`} style={{textDecoration: `none`}} title={`Go to homepage`} role={`navigation`}><h2><span role="img" aria-label="Four-Leaf Clover">🍀</span></h2></Link> */}
			{/* {console.log(data)} */}
			<Container>
				{nodes.map(node => (
					<article key={`d`}>
						<h2>
							<Link sx={{ color: 'primary' }} to={`${node.fields.slug}`}>
								{node.headings[0].value}
							</Link>
						</h2>
						<p>{node.frontmatter.desc}</p>
					</article>
				))}
			</Container>
		</Main>
		<Footer>
			<a href={``}>Resume</a>,{' '}
			<a href='https://www.linkedin.com/in/imedadel'>Linkedin</a>,{' '}
			<a href='https://github.com/ImedAdel'>Github</a>,{' '}
			<a href='https://twitter.com/Imed_Adel'>Twitter</a>.
		</Footer>
	</Layout>
)

export default Page
