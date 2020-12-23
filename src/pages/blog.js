import React from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './blog.module.scss'
import { useStaticQuery, graphql, Link } from 'gatsby';

const BlogPage = () => {

	const data = useStaticQuery(graphql`
		query getPosts {
			allWpPost {
				edges {
					node {
						id
						title
						author {
							node {
								id
								name
							}
						  }
						date
						link
						content
						slug
					}
				}
			}
		}
	`);


	return (
		<Layout>
			<SEO title="Blog" />
			
			<div className={styles.Blog}>
				<h1>Blog</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, animi doloremque excepturi quos ad illum velit doloribus illo quam aliquam eligendi porro aut suscipit consequatur saepe, inventore nemo ut. Placeat!
				</p>

				<div className={styles.posts}>
					{
						data.allWpPost.edges.map((post) => {
							return (
								<Link to={'/blog/' + post.node.slug}>
									<div className={styles.post} key={post.node.id}>
										<h2>{post.node.title}</h2>
										<span>{post.node.author.node.id.name}</span>
										<div>{post.node.date}</div>
										<div dangerouslySetInnerHTML={{__html: post.node.content}}></div>
									</div>
								</Link>
							)
						})
					}
				</div>
			</div>
		</Layout>
	)
}



export default BlogPage;
