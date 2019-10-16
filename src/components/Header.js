/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'gatsby'

const headerLink = css`
	font-size: 1rem;
	line-height: 1.5;
	display: block;
	padding: 1em;
	text-decoration: none;
	text-transform: uppercase;
	background: none;
`
const headingStyle = css`
	grid-row: 1;
	grid-column: 1 / 4;
	align-self: start;
	font-size: 1.618rem;
`

function ConditinalHeading({ isHomepage, children }) {
	return isHomepage ? (
		<h1 css={headingStyle}>{children}</h1>
	) : (
		<h2 css={headingStyle}>{children}</h2>
	)
}

function Header({ isHomepage }) {
	return (
		<header
			css={css`
				display: grid;
				grid-template-columns: repeat(12, 1fr);
				padding: calc(1em + 1vw) 0;
				margin-bottom: 2em;
			`}
		>
			<ConditinalHeading isHomepage={!!isHomepage}>
				<Link
					css={css`
						text-decoration: none;
						background: none;
					`}
					to={`/`}
				>
					Imed Adel
				</Link>
			</ConditinalHeading>
			<nav
				css={css`
					grid-column: 5 / 13;
					overflow: visible;
					position: relative;
				`}
			>
				<ul
					css={css`
						list-style: none;
						padding: 0;
						margin: 0;
						display: flex;
						justify-content: flex-end;
					`}
				>
					<li>
						<Link css={headerLink} to={`/#Articles`}>
							Articles
						</Link>
					</li>
					<li>
						<a css={headerLink} href={`https://github.com/ImedAdel`}>
							GitHub
						</a>
					</li>
					<li>
						<a css={headerLink} href={`https://twitter.com/Imed_Adel`}>
							Twitter
						</a>
					</li>
					<li>
						<a css={headerLink} href={`/Imed_Adel_Resume.pdf`}>
							Resume
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
