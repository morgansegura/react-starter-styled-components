import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
`

export const Logo = styled.div``

export const Menu = styled.div`
	flex: 1 0 auto;
	display: flex;
	justify-content: flex-end;
`

const menuItems = css`
	cursor: pointer;
	font-weight: 600;
	text-transform: uppercase;
	transition: all 0.3s ease-out;

	&:not(:last-child) {
		margin-right: 0.5rem;
	}

	&:hover {
		opacity: 0.65;
	}

	&[data-user='true']:last-child {
		border-radius: 4px;
	}
`

export const MenuItemRouter = styled(Link)`
	${menuItems}
`

export const MenuItemHref = styled.a`
	${menuItems}
`

export const MenuItem = styled.div`
	${menuItems}
`
