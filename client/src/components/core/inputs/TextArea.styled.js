import styled from 'styled-components'
import { fontSizing } from '@styled/utils'

export const FormGroup = styled.div`
	/* position: relative;
	z-index: 1; */
`

export const Label = styled.label`
	/* position: absolute;
	top: 50%;
	transform: translate(16px, -50%);
	z-index: 2;
	${fontSizing('15px', '24px')};
	pointer-events: none;
	transition: all 0.3s ease-out;


	${({ disabled }) => {
		if (disabled) {
			return `
			`
		}
	}} */
`
	${({ focused }) => {
		if (focused) {
			return `
				${fontSizing('11px', '20px')};
				top: 6px;
				transform: translate(16px, 0);
			`
		}
	}}

export const Input = styled.textarea`
	/* position: relative;
	z-index: 0;
	width: 100%;
	padding: 1rem;
	${fontSizing('15px', '24px')};
	box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
		0px 4px 16px rgba(51, 51, 51, 0.08);
	border-radius: 4px;
	transition: box-shadow 0.3s ease-out;

	&:hover {
		box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
			0px 4px 56px rgba(51, 51, 51, 0.16);
	}

	${({ focused }) => {
		if (focused) {
			return `
				padding: 1.125rem 1rem 0.875rem 1rem;
			`
		}
	}}

	&:focus {
		box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
			0px 4px 16px rgba(51, 51, 51, 0.08);
	}

	&:disabled {
		cursor: not-allowed;
		box-shadow: none;
	} */
`
