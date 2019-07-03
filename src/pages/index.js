import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import SEO from "../components/SEO"
import { rhythm } from "../utils/typography"

import resume from "../assets/ImedAdelResume.pdf"

const Page = ({ data }) => (
	<>
		<header>
			<SEO />
			<h1 style={{ textTransform: "lowercase", marginBottom: rhythm(1.5) }}>
				Imed Adel.
			</h1>
		</header>
		<main>
			{/* <Link to={`/`} style={{textDecoration: `none`}} title={`Go to homepage`} role={`navigation`}><h2><span role="img" aria-label="Four-Leaf Clover">🍀</span></h2></Link> */}
			{/* {console.log(data)} */}
			<section>
				{data.allMdx.nodes.map(node => (
					<article>
						<h2>
							<Link to={`/${node.frontmatter.slug}`}>
								{node.headings[0].value}
							</Link>
						</h2>
					</article>
				))}
			</section>
		</main>
		<footer>
			<Link to={resume}>Resume</Link>,{" "}
			<a href="https://www.linkedin.com/in/imedadel">Linkedin</a>,{" "}
			<a href="https://github.com/ImedAdel">Github</a>,{" "}
			<a href="https://twitter.com/Imed_Adel">Twitter</a>.
		</footer>
	</>
)

const pageQuery = graphql`
	{
		allMdx(sort: { order: DESC, fields: frontmatter___date }) {
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
