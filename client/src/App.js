import { useContext } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { auth } from '@src/firebase'
import { AuthContext } from '@context/authContext'

// Layout Components
import Navbar from '@core/navigation/Navbar'
import Container from '@core/structure/Container'

// Layout Components
import Menu from '@layouts/Menu'

// Page Components
import Home from '@pages/Home'

// Utility Components
import Scaffold from '@core/utils/Scaffold'

const Logo = () => {
	return <div>Logo</div>
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const App = () => {
	let query = useQuery();

	const client = new ApolloClient({
		uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
		request: operation => {
			operation.setContext({
				headers: {
					authtoken: user ? user.token : ''
				}
			})
		}
	})

	const { state, dispatch } = useContext(AuthContext)
	let history = useHistory()

	const { user } = state

	const logout = () => {
		auth.signOut()

		dispatch({
			type: 'LOGGED_IN_USER',
			payload: null
		})
		history.push('/login')
	}

	const navItems = [
		{
			_id: 1,
			path: '/',
			label: 'Home',
			type: 'router'
		},
	]

	const authNavItems = []

	return (
		<ApolloProvider client={client}>
			<Container>
				<Navbar fill="teal" radius="lg">
					<Menu
						logo={<Logo />}
						navItems={navItems}
						authNavItems={authNavItems}
					/>
				</Navbar>
			</Container>

			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
			{query.get("scaffold") &&
				<Scaffold />
			}
		</ApolloProvider>
	)
}

export default App
