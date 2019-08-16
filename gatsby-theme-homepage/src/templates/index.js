/** @jsx jsx */
import React from 'react'
import { Layout, Container, Flex, jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import Seo from 'gatsby-theme-seo/src/components/Seo'

import resume from '../assets/Imed_Adel_Resume.pdf'

const Page = () => (
	<Styled.root>
		<Layout>
			<Seo />
			<Container>
				<div>
					<h1 sx={{ fontSize: 14, marginTop: '30vh' }}>Imed Adel.</h1>
				</div>
				<Flex
					sx={{ fontSize: 8, marginTop: 6, justifyContent: 'space-between' }}
				>
					<Link to={'/blog'} sx={{ color: 'primary', textDecoration: 'none' }}>
						Blog
					</Link>
					<Link sx={{ color: 'primary', textDecoration: 'none' }}>Area 51</Link>
					<Link sx={{ color: 'primary', textDecoration: 'none' }}>
						Portfolio
					</Link>
					<a
						href='mailto:aadelimed@gmail.com'
						sx={{ color: 'primary', textDecoration: 'none' }}
					>
						Contact
					</a>
				</Flex>
				<Flex
					sx={{ fontSize: 8, marginTop: 4, justifyContent: 'space-between' }}
				>
					<a href={resume} sx={{ color: 'primary', textDecoration: 'none' }}>
						Resume
					</a>
					<a
						href='https://github.com/ImedAdel'
						sx={{ color: 'primary', textDecoration: 'none' }}
					>
						GitHub
					</a>
					<a
						href='https://twitter.com/Imed_Adel'
						sx={{ color: 'primary', textDecoration: 'none' }}
					>
						Twitter
					</a>
					<a
						href='https://www.linkedin.com/in/imedadel'
						sx={{ color: 'primary', textDecoration: 'none' }}
					>
						LinkedIn
					</a>
				</Flex>
			</Container>
		</Layout>
	</Styled.root>
)

export default Page
