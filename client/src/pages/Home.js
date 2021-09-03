// import { useContext } from 'react'
// import { useQuery } from '@apollo/react-hooks'
// import { AuthContext } from '@context/authContext'
// import { GET_ALL_POSTS } from '@graphql/queries'

// Core Components
import Button from '@core/interaction/Button'
import Container, { Content } from '@core/structure/Container'

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
		<Container>
			<Content>
				<s.Title>GraphQL Posts</s.Title>

				<s.PostGrid>
					<h1>This is a h1 heading</h1>
					<h2>This is a h2 heading</h2>
					<h3>This is a h3 heading</h3>
					<h4>This is a h4 heading</h4>
					<h6>This is a h5 heading</h6>
				</s.PostGrid>
				<s.Button>
					<Button>Load More</Button>
				</s.Button>
			</Content>
		</Container>
	)
}

export default Home
