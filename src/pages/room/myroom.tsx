import * as React from 'react'
import HeaderBar from '@/components/map/HeaderBar'
import { Box } from '@mui/material'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useUserInfo } from '@/hooks/useUserInfo'
import { useSignIn } from '@/hooks/useSignIn'
import RoomSettingModal from '@/components/Modal/RoomSettingModal'

const Frame = dynamic(() => import('../../components/Frame'), {
	ssr: false
})

export default function MyRoom() {
	const [settingOpen, setSettingOpen] = useState(false)

	const { info } = useUserInfo()
	useSignIn()

	return (
		<Box
			sx={{
				height: '100vh',
				backgroundImage: `url(${'/assets/backgroundroom.png'})`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}}>
			<Frame
				roomId={info?.userId}
				userId={info?.userId}
				setSettingOpen={() => {
					setSettingOpen(true)
				}}
			/>
			<HeaderBar ready={true} setRoom={() => 0} />
			<RoomSettingModal
				isOpen={settingOpen}
				onDismiss={() => {
					setSettingOpen(false)
				}}
			/>
		</Box>
	)
}
