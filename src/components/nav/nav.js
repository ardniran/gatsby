import React from 'react'
import styles from './nav.module.scss'
import { Link } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavComponent = ({siteTitle}) => {
	return (
		<nav className={styles.Nav}>
			<h1>
				<AniLink swipe to="/">{ siteTitle }</AniLink>
			</h1>
			<ul>
				<li>
					<AniLink paintDrip to="/about/">A propos</AniLink>
				</li>
				<li>
					<span>Services</span>
					<ul>
						<li><AniLink cover to="/services/architecture">Architectures</AniLink></li>
						<li><AniLink cover to="/services/sculpture">Sculpture</AniLink></li>
					</ul>
				</li>
				<li>
					<AniLink fade to="/blog/">Blog</AniLink>
				</li>
				<li>
					<AniLink fade to="/contact/">Contact</AniLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavComponent;
