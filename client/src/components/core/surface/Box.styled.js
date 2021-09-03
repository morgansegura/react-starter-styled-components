import styled, { css } from 'styled-components'
import * as include from '@styled/utilities'

export const Box = styled(props => props.as)`
	${({ ripple }) =>
		ripple &&
		css`
			position: relative;
			overflow: hidden;
		`}
	${({ radius }) =>
		radius && radius === 'circle'
			? include.radius['circle']
			: radius === 'sm'
			? include.radius['sm']
			: radius === 'md'
			? include.radius['md']
			: radius === 'lg'
			? include.radius['lg']
			: ''}

	${({ shadow }) =>
		shadow && shadow === 'card'
			? include.shadow['card']
			: shadow === 'header'
			? include.shadow['header']
			: shadow === 'form'
			? include.shadow['form']
			: shadow === 'dropdown'
			? include.shadow['dropdown']
			: ''}

	${({ fill }) =>
		fill &&
		css`
			background-color: ${fill};
		`}

	${({ color }) =>
		color &&
		css`
			color: ${color};
		`}
`
