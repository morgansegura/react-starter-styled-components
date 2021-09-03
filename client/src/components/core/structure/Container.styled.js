import styled from 'styled-components'
import * as include from '@src/styled/utilities'

export const Container = styled(props => props.as)`
	${include.container['xxl']}
`
export const Content = styled(props => props.as)`
	${include.container['xl']}
`
