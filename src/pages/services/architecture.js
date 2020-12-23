import React from 'react'
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styles from './architecture.module.scss';


const ArchitecturePage = ({ data }) => {
	const arrayImg = [];
	for (let i = 0; i < 150; i++) {
		arrayImg.push(data.file.childImageSharp.fluid);
	}
	
	return (
		<Layout>
			<SEO title="Nos services : Architectures" />
			
			<div className={styles.Architecture}>
				<h1>Architectures</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, animi doloremque excepturi quos ad illum velit doloribus illo quam aliquam eligendi porro aut suscipit consequatur saepe, inventore nemo ut. Placeat!
				</p>
				<div>
					<h2>Nos projets</h2>
					<div className={styles.gallery}>
						{
							arrayImg.map(img => {
								return( 
									<Img 
										className={styles.galleryWrapper}
										fluid={data.file.childImageSharp.fluid}
										alt="Mad Design"
									/>
								)
							})
						}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export const queryArchi = graphql`
	query getImageArchi {
		file(relativePath: {eq: "mad.jpg"}) {
		childImageSharp {
			fluid {
				aspectRatio
				base64
				originalImg
				originalName
				presentationHeight
				presentationWidth
				sizes
				src
				srcSet
				srcSetWebp
				srcWebp
				}
			}
		}
	}
`

export default ArchitecturePage;
