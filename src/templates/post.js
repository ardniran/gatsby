import React from 'react'
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';

export const query = graphql`
	query MyPostQuery($id: String!) {
		wpPost(id: {eq: $id}) {
			id
			date(fromNow: true)
			author {
				node {
					id
					name
				}
			}
			title
			slug
			content
		}
	}
`;


const PostTemplate = ({data}) => {
	const post = data.wpPost;
	
	return (
		<Layout>
			<SEO title={post.title} />
			
			<div>{post.title}</div>
			<div>de {post.author.node.name}</div>
			<div>le {post.date}</div>
			<div dangerouslySetInnerHTML={{__html: post.content}}></div>
		</Layout>
	)
}

export default PostTemplate
