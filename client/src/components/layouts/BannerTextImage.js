// Core Components
import Container, { Content } from '../core/structure/Container'

// Styled Components
import * as s from './BannerTextImage.styled'

const BannerTextImage = ({ children, ...props }) => {
	return (
		<Container>
			<s.BannerTextImage {...props}>
				<Content>{children}</Content>
			</s.BannerTextImage>
		</Container>
	)
}

export default BannerTextImage
