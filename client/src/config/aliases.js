const aliases = (prefix = `src`) => ({
	'@context': `${prefix}/context`,
	'@core': `${prefix}/components/core`,
	'@graphql': `${prefix}/graphql`,
	'@helpers': `${prefix}/helpers`,
	'@icons': `${prefix}/components/icons`,
	'@layouts': `${prefix}/components/layouts`,
	'@pages': `${prefix}/pages`,
	'@routes': `${prefix}/components/routes`,
	'@src': `${prefix}/`,
	'@styled': `${prefix}/styled`
})

module.exports = aliases
