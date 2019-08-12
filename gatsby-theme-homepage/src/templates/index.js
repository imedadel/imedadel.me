/** @jsx jsx */
import React from 'react'
import { Layout, Container, Flex, jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Page = () => (
	<Layout>
		<Container>
			<div>
				<h1 sx={{ fontSize: 14, marginTop: '30vh' }}>Imed Adel.</h1>
			</div>
			<Flex sx={{ fontSize: 8, marginTop: 4, justifyContent: 'space-between' }}>
				<Link to={'/blog'} sx={{color: 'primary', textDecoration: 'none'}}>Blog</Link>
				<Link sx={{color: 'primary', textDecoration: 'none'}}>Area 51</Link>
				<Link sx={{color: 'primary', textDecoration: 'none'}}>Portfolio</Link>
				<Link sx={{color: 'primary', textDecoration: 'none'}}>Contact</Link>
			</Flex>
		</Container>
	</Layout>
)

export default Page
