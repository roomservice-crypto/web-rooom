import { Box } from '@mui/material'
import { useEffect } from 'react'

const href = 'https://3d-rs.z-crypto.ml'

export default function Frame({ setSettingOpen }: { setSettingOpen: () => void }) {
	useEffect(() => {
		window.addEventListener(
			'message',
			function (event) {
				if (event.origin !== href) return
				var data = JSON.parse(event.data)
				if (data) {
					if (data.eventType == 'info') {
						//TODO: pop up info modal
					} else if (data.eventType == 'setting') {
						setSettingOpen()
					}
				}
			},
			false
		)

		const el = document.getElementById('untiyweb')
		if (!el) {
			return
		}
		const w = el as HTMLIFrameElement

		var jsondata: any = { jwtToken: '', roomId: '', auth: 0 }
		//roomId : id of room that will be visited
		//auth : 0 = other， 1 = myRoom
		//visitorName : when auth = 0时 need to display username for message board

		w.contentWindow?.postMessage(JSON.stringify(jsondata), '*')
	}, [setSettingOpen])

	return (
		<Box width='100%' height='100%' pt='73px'>
			<iframe
				id='untiyweb'
				src={href}
				style={{ marginLeft: 0, marginTop: -0, width: '100%', height: '100%', overflow: 'hidden', border: 0 }}>
				<a href={href}>Your browser doesnt support Iframe</a>
			</iframe>
		</Box>
	)
}
