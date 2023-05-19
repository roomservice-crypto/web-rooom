import { useSignInToken } from '@/hooks/useSignIn'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'

const href = 'https://3d-rs.z-crypto.ml'

export default function Frame({
	setSettingOpen,
	setProfileOpen,
	setNftSelectionOpen,
	roomId,
	userId
}: {
	setProfileOpen: () => void
	setSettingOpen: () => void
	setNftSelectionOpen?: (photoBoxId: number | string) => void
	roomId?: number
	userId?: number
}) {
	const { token } = useSignInToken()
	const router = useRouter()

	const roomCb = useCallback(() => {
		const el = document.getElementById('untiyweb')
		if (!el || !roomId) {
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

	useEffect(() => {
		const cb = function (event: any) {
			if (event.origin !== href) return
			var data = JSON.parse(event.data)
			if (data) {
				if (data.eventType == 'info') {
					setProfileOpen()
				} else if (data.eventType == 'setting') {
					setSettingOpen()
				} else if (data.eventType == 'nft') {
					setNftSelectionOpen && setNftSelectionOpen(data.PhotoBoxId)
				} else if (data.eventType == 'visitroom') {
					roomCb()
				}
			}
		}

		setTimeout(() => {
			roomCb()
		}, 3000)
		window.addEventListener('message', cb, false)

		return () => {
			window.removeEventListener('message', cb, false)
		}
	}, [roomCb, router, setNftSelectionOpen, setProfileOpen, setSettingOpen])

	return (
		<Box width='100%' height='100%' pt='72px'>
			<iframe
				id='untiyweb'
				src={href}
				style={{ marginLeft: 0, marginTop: -0, width: '100%', height: '100%', overflow: 'hidden', border: 0 }}>
				<a href={href}>Your browser doesnt support Iframe</a>
			</iframe>
		</Box>
	)
}
