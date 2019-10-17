/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const problemSites = [
	{
		name: 'HackerRank',
		link:
			'https://gist.github.com/search?o=desc&q=filename%3Ahackerrank+user%3Aimedadel&s=updated',
	},
	{
		name: 'LeetCode',
		link: 'https://leetcode.com/imedadel/',
	},
	{
		name: 'CodeWars',
		link: 'https://www.codewars.com/users/ImedAdel/completed_solutions',
	},
	{
		name: 'CodeForces',
		link: 'https://codeforces.com/submissions/imedadel',
	},
	{
		name: 'CodinGame',
		link:
			'https://www.codingame.com/profile/9ad8d14207cce0b1e13a3dbd5eaf19367592391',
	},
]

function ProblemSitesList() {
	return (
		<div
			css={css`
				columns: 2;
			`}
		>
			{problemSites.map(({ name, link }) => (
				<article>
					<h3>
						<a href={link} target='_blank' title={name}>
							{name}
						</a>
					</h3>
				</article>
			))}
		</div>
	)
}

export default ProblemSitesList
