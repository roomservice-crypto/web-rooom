import { Box } from '@mui/material'
import { useEffect } from 'react'

function TestFunction() {
	window.location.href = 'http://localhost:8080?id=123&name=zhanghng'
}

function removeFunction() {
	const el = document.getElementById('untiyweb')

	if (!el) {
		return
	}
	const w = el as HTMLIFrameElement
	w?.contentWindow?.postMessage
	w.contentWindow?.postMessage('主页面消息!!!', 'http://localhost:8080')
}

export default function Frame() {
	useEffect(() => {
		window.addEventListener(
			'message',
			function (event) {
				if (event.origin === 'http://localhost:8080') {
					alert(JSON.stringify(event.data))
				}
			},
			false
		)

		const el = document.getElementById('untiyweb')
		if (!el) {
			return
		}

		const w = el as HTMLIFrameElement
		w?.contentWindow?.postMessage

		// w?.contentWindow?.addEventListener(
		// 	'message',
		// 	function (event) {
		// 		if (event.origin === 'http://localhost:9015') {
		// 			alert(JSON.stringify(event.data))
		// 		}
		// 	},
		// 	false
		// )

		w.contentWindow?.postMessage('main page', 'http://localhost:9015/')
	}, [])

	return (
		<Box>
			<button id='aa' onClick={TestFunction}>
				ClickMe{' '}
			</button>
			<button id='bb' onClick={removeFunction}>
				RemoveMe{' '}
			</button>

			<iframe
				id='untiyweb'
				src='http://localhost:8080/'
				frameBorder='0'
				scrolling='no'
				style={{ marginLeft: 0, marginTop: 0, width: '1440px', height: 900 }}>
				<a href='http://localhost:8080/'>你的浏览器不支持iframe页面嵌套，请点击这里访问页面内容。1</a>
				<script></script>
				<button
					style={{ position: 'fixed', zIndex: 1000, top: 0, left: 0 }}
					onClick={() => {
						window.parent.postMessage('inside!!!!!', '*')
						console.log(89898)
					}}>
					12323432534
				</button>
			</iframe>
		</Box>
	)
}
