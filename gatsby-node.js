const path = require(`path`);
const { slash } = require(`gatsby-core-utils`)


console.log('Gatsby NODE - OUT')

exports.createPages = async ({graphql, actions}) => {
	const { createPage } = actions;

	const data = await graphql(`
		query allPosts {
			allWpPost {
			edges {
				node {
					id
					slug
					}
				}
			}
		}
	`)

	const postTemplate = path.resolve(`./src/templates/post.js`)
	data.data.allWpPost.edges.forEach(post => {
		console.log('POST');
		console.log(post);
		createPage({
			path: `/blog/${post.node.slug}`,
			component: slash(postTemplate),
			context: {
				id: post.node.id
			}
		})
	});
}
