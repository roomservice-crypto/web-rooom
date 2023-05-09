import { useSignInToken } from '@/hooks/useSignIn'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const href = 'https://3d-rs.z-crypto.ml'

export default function Frame({
	setSettingOpen,
	roomId,
	userId
}: {
	setSettingOpen: () => void
	roomId?: number
	userId?: number
}) {
	const { token } = useSignInToken()
	const router = useRouter()

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
					} else if (data.eventType == 'nft') {
						//TODO: pop up nft modal
					} else if (data.eventType == 'visitroom') {
						router.push('/room/' + data.roomId)
					}
				}
			},
			false
		)
	}, [router, setSettingOpen])

	useEffect(() => {
		const el = document.getElementById('untiyweb')
		if (!el || !roomId || !userId) {
			return
		}
		const w = el as HTMLIFrameElement

		var jsondata: any = {
			jwtToken: token, //
			roomId: roomId, //id of room that will be visited
			roomUserId: roomId, //id of user of the room that will be visited
			selfUserId: userId //id of visiter when roomUserId==selfUserId means visiting your own room
		}

		w.contentWindow?.postMessage(JSON.stringify(jsondata), '*')
	}, [roomId, token, userId])

	return (
		<Box width='100%' height='100%' pt='72px'>
			<iframe
				id='untiyweb'
				src={roomId ? `${href}?id=${roomId}` + roomId : href}
				style={{ marginLeft: 0, marginTop: -0, width: '100%', height: '100%', overflow: 'hidden', border: 0 }}>
				<a href={href}>Your browser doesnt support Iframe</a>
			</iframe>
		</Box>
	)
}
