import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const LoadingToRedirect = ({ path }) => {
	const [count, setCount] = useState(5)
	let history = useHistory()

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(currentCount => --currentCount)
		}, 1000)
		count === 0 && history.push(path)

		// Cleanup
		return () => clearInterval(interval)
	}, [count, history, path])

	return (
		<div>
			<p>Redirecting you in {count} seconds</p>
		</div>
	)
}

export default LoadingToRedirect
