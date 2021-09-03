export const isEmpty = str => {
	if (str !== null) return str.length === 0 || !str.trim()
}
