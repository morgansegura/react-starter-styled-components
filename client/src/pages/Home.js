// import { useContext } from 'react'
// import { useQuery } from '@apollo/react-hooks'
// import { AuthContext } from '@context/authContext'
// import { GET_ALL_POSTS } from '@graphql/queries'

// Layout Components
import BannerTextImage from '@layouts/BannerTextImage'

// Styled
import * as s from './Home.styled'

const Home = () => {
	// const { data, loading, error } = useQuery(GET_ALL_POSTS)
	// const { data } = useQuery(GET_ALL_POSTS)
	// const { state, dispatch } = useContext(AuthContext)

	// let history = useHistory()

	// const updateUserName = () => {
	// 	dispatch({
	// 		type: 'LOGGED_IN_USER',
	// 		payload: 'morgansegura@gmail.com'
	// 	})
	// }
	// console.log(updateUserName)

	// if (loading) {
	// 	toast.loading('Loading...')
	// }
	// if (error) {
	// 	toast.error(error.message)
	// }

	return (
		<>
			<BannerTextImage
				heading="Time Mackie, PhD"
				subheading="Hello"
				description="Discovering how the Bible is a magnificent work of literature that invites us into the story of Jesus—this is what Tim is all about."
				image="//dma9sdczpu5q0.cloudfront.net/media/01b_lifestyle.jpg?q=65&fit=max"
			/>
		</>
	)
}

export default Home
