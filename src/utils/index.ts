import compose from '@/utils/compose'

/* figures */

export function thousandSeparator(n: string | number, sign: string = ',') {
	if (typeof n === 'string' || typeof n === 'number')
		return String(n).replace(new RegExp('(?<=^\\d+)\\B(?=(\\d{3})+($|\\.))', 'g'), `${sign}`)
}

function toFixed(value: any, decimalPlaces: number = 2) {
	return Number(value).toFixed(decimalPlaces)
}

export const formatPrice = compose(thousandSeparator, Number, toFixed)

export function figureUnit(value: number) {
	if (typeof value !== 'number') return 0

	if (value > 10 ** 12) return `${value / 10 ** 12} T`
	if (value > 10 ** 9) return `${value / 10 ** 9} G`
	if (value > 10 ** 6) return `${value / 10 ** 6} M`
	if (value > 10 ** 3) return `${value / 10 ** 3} K`
}

export function figureUnitAndFixed(value: number) {
	if (typeof value !== 'number') return 0

	if (value > 10 ** 12) return `${value / 10 ** 12} T`
	if (value > 10 ** 9) return `${value / 10 ** 9} G`
	if (value > 10 ** 6) return `${(value / 10 ** 6).toFixed(2)} M`
	if (value > 10 ** 3) return `${(value / 10 ** 3).toFixed(2)} K`
}

/* address */

export function validateAddress(address: string) {
	return typeof address === 'string' && /^[0-9a-zA-Z]{42}$/.test(address)
}

export function shortenAddress(address: string, headLength = 6, endLength = 4) {
	if (!address) return
	return `${address.slice(0, headLength)}...${address.slice(-endLength)}`
}

/* others */

export function capitalize(word: string) {
	return word[0].toUpperCase() + word.slice(1)
}

export function camelToTitle(camel: string) {
	const title = camel.replaceAll(/([A-Z])/g, ' $1')
	return capitalize(title)
}
