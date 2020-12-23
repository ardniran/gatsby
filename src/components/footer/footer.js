import React from 'react'
import styles from './footer.module.scss'

const FooterComponent = () => {
	return (
		<footer className={styles.Footer}>
			<span>
				Copyright
			</span>
			<ul>
				<li>
					<a rel="noreferrer noopener" target="_blank" href="https://www.facebook.com">
						Facebook
					</a>
				</li>
				<li>
					<a rel="noreferrer noopener" target="_blank" href="https://www.twitter.com">
						twitter
					</a>
				</li>
				<li>
					<a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com">
						linkedin
					</a>
				</li>
			</ul>
		</footer>
	)
}

export default FooterComponent
