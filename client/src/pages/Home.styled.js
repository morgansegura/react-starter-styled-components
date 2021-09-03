import styled from 'styled-components'
import * as include from '@src/styled/utilities'

export const Home = styled.div``

export const Container = styled.div`
	padding: 1rem;
	border-radius: 8px;
`

export const Heading = styled.div``

export const Title = styled.div`
	text-transform: uppercase;
	font-weight: bold;
	${include.h1}
`

export const PostGrid = styled.div`
	display: grid;
	column-gap: 24px;
	row-gap: 12px;
	margin-top: 1rem;
`

export const Card = styled.div`
	box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
		0px 4px 16px rgba(51, 51, 51, 0.08);
	padding: 0.5rem 1rem 1rem 1rem;
	border-radius: 8px;
`

export const CardTitle = styled.div`
	font-weight: 500;
`

export const CardBody = styled.div``

export const Button = styled.div`
	display: flex;
	justify-content: center;
	font-weight: 600;
	margin-top: 2.5rem;
	/* margin-bottom: 4rem; */

	& > div {
		border-radius: 8px;
		text-align: center;
		box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
			0 1px 3px 1px rgb(60 64 67 / 15%);
	}
`
