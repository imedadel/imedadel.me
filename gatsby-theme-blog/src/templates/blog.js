/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import {
	Layout,
	Main,
	Header,
	Container,
	Styled,
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
					<article key={node.fields.slug}>
						<h2 className='title'>
							<Link sx={{ color: 'primary' }} to={`${node.fields.slug}`}>
								{node.headings[0].value}
							</Link>
						</h2>
						{/* <p className='description'>{node.frontmatter.desc}</p> */}
					</article>
				))}
			</Container>
		</Main>
	</Layout>
)

export default Page
