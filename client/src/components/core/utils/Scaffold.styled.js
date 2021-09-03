import styled from 'styled-components'
import { rgba } from 'polished'
import * as include from '@styled/utilities'

export const Scaffold = styled.div`
	--max-width: calc(100% - (2 * var(--lane-gutter)));
	--columns: 6;
	--color: hsla(204, 80%, 72%, 0.25);
	--size: 'Small Mobile: 0 - 374px';

	${include.sm()`
        --size: 'Mobile: 375px - 639px';
    `}

	${include.md()`
		--size: 'Tablet: 640px - 1023px';
	`}

	${include.lg()`
		--columns: 12;
		--size: 'Small Desktop: 1024px - 1366px';
	`}

	${include.xl()`
		--size: 'Desktop: 1376px - 1799px';
	`}

	${include.xxl()`
		--size: 'Large Desktop: 1800px - 1928px';
	`}

	${include.above(include.contain['offset'])`
		--max-width: ${include.contain['xxl']} - (2 * var(--lane-gutter)));
		--size: '2256px and beyond';
	`}

	--repeating-width: calc(100% / var(--columns));
	--column-width: calc((100% / var(--columns)) - var(--grid-gutter));
	--background-width: calc(100% + var(--grid-gutter));
	--background-columns: repeating-linear-gradient(
		to right,
		var(--color),
		var(--color) var(--column-width),
		transparent var(--column-width),
		transparent var(--repeating-width)
	);

	position: fixed;
	z-index: 3001;
	top: 0;
	right: 0;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	max-width: var(--max-width);
	background-image: var(--background-columns);
	background-size: var(--background-width) 100%;
	pointer-events: none;

	&::after {
		${include.tag['bold']};
		${include.shadow['card']};

		content: var(--size);
		position: absolute;
		top: auto;
		right: 0;
		bottom: ${include.sp[2.5]};
		left: auto;
		transform: translate(-50%);
		color: ${include.alpha['00-a90']};
		background-color: ${include.alpha['90-a70']};
		padding: ${include.sp[0.5]} ${include.sp[1]};
		${include.radius['sm']};
	}
`