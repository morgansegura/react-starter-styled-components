import { createGlobalStyle } from 'styled-components'
import * as include from '@styled/utilities'

export const GlobalStyle = createGlobalStyle`
	html,
	body {
		${include.base}
		padding: 0;
		margin: 0;
		background-color: ${include.neutral['07']};
	}

	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		${include.body['base']}

		font-family: ${include.font['family']};
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
	}

	h1 {
		${include.h1};
	}

	h2 {
		${include.h2};
	}

	h3 {
		${include.h3};
	}

	h4 {
		${include.h4};
	}

	h5 {
		${include.h5};
	}

	label {
		${include.label};
	}

	img {
		width: 100%;
	}


	:root {
		--grid-gutter: ${include.sp['2']};
		--lane-gutter: ${include.sp['3']};

		${include.md()`
			--grid-gutter: ${include.sp['3']};
			--lane-gutter: ${include.sp['8']};
		`}

		${include.xl()`
			--grid-gutter: ${include.sp['4']};
			--lane-gutter: 136px;
		`}

		${include.md()`
			--grid-gutter: ${include.sp['4']};
			--lane-gutter: 224px;
		`}

		${include.above(include.contain['offset'])`
			--grid-gutter: ${include.sp['4']};
			--lane-gutter: ${include.sp['20']};
		`}
	}

`
