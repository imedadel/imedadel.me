import React from "react"
import { MDXRenderer } from "gatsby-mdx"
import { Link } from "gatsby"

import SEO from "../components/SEO"
import { rhythm } from "../utils/typography"

import resume from "../assets/Imed_Adel_Resume.pdf"

export default ({ pageContext: { node } }) => {
	// comment
	return (
		<>
			<header>
				<SEO
					title={node.headings[0].value}
					description={node.frontmatter.desc}
					slug={node.frontmatter.slug}
				/>
				<Link
					to={`/`}
					style={{ textDecoration: `none`, marginBottom: rhythm(1.5) }}
					title={`Go to homepage`}
					role={`navigation`}
				>
					<h2 style={{ textTransform: "lowercase" }}>Imed Adel.</h2>
				</Link>
			</header>
			<main>
				<MDXRenderer>{node.code.body}</MDXRenderer>
			</main>
			<footer>
				<a href={resume}>Resume</a>,{" "}
				<a href="https://www.linkedin.com/in/imedadel">Linkedin</a>,{" "}
				<a href="https://github.com/ImedAdel">Github</a>,{" "}
				<a href="https://twitter.com/Imed_Adel">Twitter</a>.
			</footer>
		</>
	)
}
