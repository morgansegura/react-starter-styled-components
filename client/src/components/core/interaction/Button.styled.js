import styled, { css } from 'styled-components'

const btnBase = css`
	position: relative;
	z-index: 1;
	cursor: pointer;
	text-transform: uppercase;
	letter-spacing: 0.02857em;
	font-weight: 500;
	overflow: hidden;
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	div::first-child {
		position: relative;
		z-index: 1;
	}
`

const btnSize = css`
	${({ size }) => {

	}}
`

export const Button = styled(props => props.as)`
	${btnBase};
	${btnSize};
`
