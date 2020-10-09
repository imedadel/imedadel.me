/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const projectsList = [
	{
		name: 'Centige',
		link: 'https://centige.com',
		description:
			'A collaborative web app and website builder.',
	},
	{
		name: 'SpacedLeet',
		link: 'https://spacedleet.com',
		description:
			'A chrome extension to prepare for  interviews using Spaced Repetition and LeetCode.',
	},
	{
		name: 'Cattous',
		link: 'https://github.com/ImedAdel/cattous',
		description:
			'CSS in JSX for lazy developers, built using styled-components and styled-system.',
	},
	{
		name: 'Hired',
		link: 'https://github.com/ImedAdel/hired',
		description:
			'Chatbot for Messenger using Dialogflow and a React dashboard to streamline the recruitment process.',
	},
	{
		name: 'Docs Theme',
		link: 'https://github.com/ImedAdel/docs-theme',
		description:
			'Quickly set up a documentation site for your projects using GatsbyJS and Markdown.',
	},
	{
		name: 'Gatsby London',
		link: 'https://github.com/ImedAdel/gatsby-london',
		description: 'A port of Ghost London to Gatsby.',
	},
	{
		name: 'Intern',
		link: 'https://intern.imedadel.me',
		description: 'A web scraper and a job board for internships.',
	},
	{
		name: 'Splashing Wallpaper',
		link: 'https://intern.imedadel.me',
		description:
			'A desktop app to automatically download wallpapers from Unsplash.',
	},
	{
		name: 'to12Hours',
		link: 'https://github.com/ImedAdel/to12Hours',
		description:
			'A helper function to convert 24 hours to 12 hours with AM/PM.',
	},
	{
		name: 'Automatic GatsbyJS App Landing Page',
		link: 'https://github.com/ImedAdel/automatic-gatsbyjs-app-landing-page',
		description:
			'Create and deploy an iOS app landing page on GitHub Pages and Netlify in a couple of minutes.',
	},
	{
		name: 'WriteGood API',
		link: 'https://github.com/ImedAdel/writegoodapi',
		description: 'A simple API for WriteGood using Koajs',
	},
	{
		name: 'arabic-diacritics-regex',
		link: 'https://github.com/ImedAdel/arabic-diacritics-regex',
		description: 'Regex for matching Arabic diacritics',
	},
	{
		name: 'ArrIf',
		link: 'https://github.com/ImedAdel/arrif',
		description:
			'An alternative implementation of the if-else statement using arrays',
	},
	{
		name: 'Case',
		link: 'https://case.imedadel.me',
		description: 'A convenient case converter',
	},
	{
		name: 'Knowsby',
		link: 'https://knowsby.imedadel.me',
		description: 'A knowledge base using GatsbyJS',
	},
	{
		name: 'Listor',
		link: 'https://github.com/ImedAdel/listor',
		description: 'Turn any list of items into a sentence',
	},
	{
		name: 'is-empty-object-all-methods',
		link: 'https://github.com/ImedAdel/is-empty-object-all-methods',
		description: '5 functions to test if an object is empty or nah',
	},
	{
		name: 'Typograph',
		link: '#',
		description: 'A port of Sketch Typograf for Figma',
	},
	{
		name: 'Figma-RTL',
		link: '#',
		description: 'Figma Plugin for supporting RTL languages in Figma',
	},
	{
		name: 'Arkiv',
		link: 'https://github.com/ImedAdel/arkiv',
		description:
			'A Chrome extension to find an archived version of the current page.',
	},
	{
		name: 'DarkMode',
		link: 'https://github.com/ImedAdel/darkmode',
		description: 'A Chrome extension to add DarkMode to websites.',
	},
]

function ProjectsList() {
	return (
		<div
			css={css`
				columns: 2;
			`}
		>
			{projectsList.map(({ name, link, description }) => (
				<article>
					<h3>
						<a href={link} target='_blank' title={name}>
							{name}
						</a>
					</h3>
					<p>{description}</p>
				</article>
			))}
			<em>
				<a href='https://github.com/ImedAdel' target='_blank'>
					More projects on GitHub
				</a>
			</em>
		</div>
	)
}

export default ProjectsList
