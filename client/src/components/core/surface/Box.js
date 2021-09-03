// Core Components
import Ripple from '@core/utils/Ripple'

// Styled Components
import * as s from './Box.styled'

const Box = ({ children, as = 'div', ...props }) => {
	return (
		<s.Box as={as} {...props}>
			{children}
			{props.ripple && <Ripple />}
		</s.Box>
	)
}

export default Box
