import styled from 'styled-components'
import { rem, rgba } from 'polished'
import { brand, above, below, fontSizing } from '@src/styled/utilities'

export const FormGroup = styled.div`
	/* cursor: pointer; */
	/* position: relative;
	z-index: 1;
	border-radius: 4px;
	background-color: #6e41e2;
	box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
		0px 4px 16px rgba(51, 51, 51, 0.08);
	margin-bottom: 1rem;
	transition: all 0.3s ease-out;

	div span {
		background-color: #e3daf9;
	}

	&:hover {
		background-color: #5835b0;
	}

	&:active {
		background-color: #472c8a;
	}

	&:disabled {
		pointer-events: none;
		background-color: ${rgba('#5835b0', 0.15)};
	} */
`

export const Label = styled.label`
	/* position: absolute;
	top: 50%;
	right: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translateY(-50%);
	z-index: 2;
	${fontSizing('15px', '24px')};
	color: ${brand['primary-white']};
	pointer-events: none;
	transition: all 0.3s ease-out; */
`

export const Input = styled.input`
	/* color: ${brand['primary-white']};
	cursor: pointer;
	border: none;
	text-indent: -9999px;

	${below['tablet']`
            width: 100%;
            padding: ${rem('14px')} ${rem('20px')};
        `}

	${above['tablet']`
			width: 100%;
            padding: ${rem('16px')} ${rem('40px')};
        `} */
`
