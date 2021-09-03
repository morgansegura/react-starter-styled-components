import styled from 'styled-components'
import { brand } from '@styled/utilities'

export const Ripple = styled.div`
	position: absolute;
	z-index: 0;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	span {
		z-index: 0;
		transform: scale(0);
		border-radius: 100%;
		position: absolute;
		opacity: 0.75;
		animation-name: ripple;
		background-color: ${props => props.color || brand['primary-white']};
		animation-duration: ${props => props.duration || '850'}ms;
		pointer-events: none;
	}
	@keyframes ripple {
		to {
			opacity: 0;
			transform: scale(4);
		}
	}
`
