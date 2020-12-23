import React from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => {
	return (
		<Layout>
			<SEO title="A Propos" />
			
			<div className="Page">
				<h1>About</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, animi doloremque excepturi quos ad illum velit doloribus illo quam aliquam eligendi porro aut suscipit consequatur saepe, inventore nemo ut. Placeat!
				</p>
			</div>
		</Layout>
	)
}

export default AboutPage;
