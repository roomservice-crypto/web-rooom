import { useRouter } from 'next/router'
import { useUserInfo } from '@/hooks/useUserInfo'
import Frame from '@/components/Frame'
import { Box } from '@mui/material'
import HeaderBar, { HeaderBarState } from '@/components/map/HeaderBar'
import RoomSettingModal from '@/components/Modal/RoomSettingModal'
import { useMemo, useState } from 'react'

export default function Room() {
	const [settingOpen, setSettingOpen] = useState(false)
	const router = useRouter()
	const { info, loading } = useUserInfo()

	const main = useMemo(() => {
		const roomId = router.query.roomId
		if (Number(roomId) === (info?.userId as any)) {
			router.push('/room/myroom')
		}
		if (roomId && loading === false) {
			// const room = getRooms().find(r => r.address === address)

			// if (!room) return <>ERROR</>

			return <Frame roomId={info?.userId} userId={info?.userId} setSettingOpen={() => {}} setProfileOpen={() => 0} />
		} else {
			return null
		}
	}, [info, loading, router])

	return (
		<Box
			sx={{
				height: '100vh'
			}}>
			{main}
			<HeaderBar ready={true} setRoom={() => 0} state={HeaderBarState.mapView} />
			<RoomSettingModal
				isOpen={settingOpen}
				onDismiss={() => {
					setSettingOpen(false)
				}}
			/>
		</Box>
	)
}