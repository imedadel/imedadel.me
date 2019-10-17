/** @jsx jsx */
import { Fragment } from 'react'
import { css, jsx } from '@emotion/core'
import Reset from '../components/Reset'
import Opentype from '../components/Opentype'
import Container from '../components/Container'
import Header from '../components/Header'
import Section from '../components/Section'
import ArticlesList from '../components/ArticlesList'
import ProblemSitesList from '../components/ProblemSitesList'
import ProjectsList from '../components/ProjectsList'
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
					<Section
						title='Projects'
						description='I keep building things from time to time.'
					>
						<ProjectsList />
					</Section>
					<Section
						title='Problem Solving'
						description='I try solving as many problems as possible in Java, Python, C++, Go, and Rust.'
					>
						<ProblemSitesList />
					</Section>
				</main>
			</Container>
		</Fragment>
	)
}

export default IndexPage
