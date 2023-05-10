import { useEffect } from 'react'
import HeaderBar, { HeaderBarState } from '@/components/map/HeaderBar'
import { Box } from '@mui/material'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useUserInfo } from '@/hooks/useUserInfo'
import { useSignIn } from '@/hooks/useSignIn'
import RoomSettingModal from '@/components/Modal/RoomSettingModal'
import { useWeb3React } from '@web3-react/core'
import { useRouter } from 'next/router'

const Frame = dynamic(() => import('../../components/Frame'), {
	ssr: false
})

export default function MyRoom() {
	const { account } = useWeb3React()
	const [settingOpen, setSettingOpen] = useState(false)

	const { info } = useUserInfo()
	const router = useRouter()
	useSignIn()

	// useEffect(() => {
	// 	if (!account) {
	// 		router.push('/map')
	// 	}
	// }, [account, router])

	return (
		<Box
			sx={{
				height: '100vh'
				// backgroundImage: `url(${'/assets/backgroundroom.png'})`,
				// backgroundPosition: 'center',
				// backgroundRepeat: 'no-repeat',
				// backgroundSize: 'cover'
			}}>
			<Frame
				roomId={info?.userId}
				userId={info?.userId}
				setSettingOpen={() => {
					setSettingOpen(true)
				}}
			/>
			<HeaderBar ready={true} setRoom={() => 0} state={HeaderBarState.myRoom} />
			<RoomSettingModal
				isOpen={settingOpen}
				onDismiss={() => {
					setSettingOpen(false)
				}}
			/>
		</Box>
	)
}
