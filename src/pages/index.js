/** @jsx jsx */
import { Fragment } from 'react'
import { css, jsx } from '@emotion/core'
import Reset from '../components/Reset'
import Opentype from '../components/Opentype'
import Container from '../components/Container'
import Header from '../components/Header'
import Section from '../components/Section'
import ArticlesList from '../components/ArticlesList'
import Seo from '../components/Seo'

function IndexPage() {
	return (
		<Fragment>
			<Reset />
			<Opentype />
			<Seo />
			<Container>
				<Header isHomepage />
				<main>
					<Section
						title='Articles'
						description='I write about problems that I face while building things.'
					>
						<ArticlesList />
					</Section>
				</main>
			</Container>
		</Fragment>
	)
}

export default IndexPage
