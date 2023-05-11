export const API_TOKEN = 'token'

export function setCookie(cname: string, cvalue: string, exdays = 5) {
	const d = new Date()
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
	const expires = 'expires=' + d.toUTCString()
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

export function getCookie(cName: string) {
	const name = cName + '='
	const decodedCookie = decodeURIComponent(document.cookie)
	const ca = decodedCookie.split(';')
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i]
		while (c.charAt(0) == ' ') {
			c = c.substring(1)
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length)
		}
	}
	return ''
}

export function eraseCookie(cName: string) {
	document.cookie = cName + '=; Max-Age=-99999999;'
}
