Use the following code in your main app's `gatsby-node.js` file

```js
const path = require('path')

exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig } }) => {
	if (process.env.NODE_ENV === `development`) {
		setWebpackConfig({
			resolve: {
				alias: {
					react: path.resolve('./node_modules/react'),
				},
			},
		})
	}
}
```
