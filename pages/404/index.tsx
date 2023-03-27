import styles from './404.module.scss'

const NotFound = () => {
	return (
		<div className={styles.body}>
			<div className={styles.content}>
				<h2>404</h2>
				<h1>Page not found</h1>
				<h3>Sorry, we couldn’t find the page you’re looking for.</h3>
				<button>Go back home</button>
			</div>
		</div>
	)
}

export default NotFound
