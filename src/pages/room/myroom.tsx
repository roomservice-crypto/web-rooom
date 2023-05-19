import HeaderBar, { HeaderBarState } from '@/components/map/HeaderBar'
import { Box } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useUserInfo } from '@/hooks/useUserInfo'
import { useSignIn } from '@/hooks/useSignIn'
import RoomSettingModal from '@/components/Modal/RoomSettingModal'
import { useWeb3React } from '@web3-react/core'
import { useRouter } from 'next/router'
import ProfileModal from '@/components/Modal/ProfileModal'
import SelectNftModal from '@/components/Modal/SelectNftModal'
import useModal from '@/hooks/useModal'

const Frame = dynamic(() => import('../../components/Frame'), {
	ssr: false
})

export default function MyRoom() {
	const { account } = useWeb3React()
	const [settingOpen, setSettingOpen] = useState(true)
	const [profileOpen, setProfileOpen] = useState(false)
	const [refresh, setRefresh] = useState(false)
	const [nftOpen, setNftOpen] = useState(false)

	const { info, loading } = useUserInfo(refresh)
	const router = useRouter()
	const { showModal } = useModal()
	useSignIn()

	useEffect(() => {
		if (!account && loading == false) {
			router.push('/map')
		}
	}, [account, info, loading, router])

	const handleRefresh = useCallback(() => {
		setRefresh(prev => !prev)
	}, [])

	const handlePhotobox = useCallback(
		(photoBoxId: string | number) => {
			showModal(<SelectNftModal photoBoxId={photoBoxId} />)
		},
		[showModal]
	)

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
				setProfileOpen={() => {
					setProfileOpen(true)
				}}
				setNftSelectionOpen={handlePhotobox}
			/>
			<HeaderBar ready={true} setRoom={() => 0} state={info ? HeaderBarState.myRoom : HeaderBarState.mapView} />
			<RoomSettingModal
				info={info}
				setRefresh={handleRefresh}
				isOpen={settingOpen}
				onDismiss={() => {
					setSettingOpen(false)
				}}
			/>
			<ProfileModal
				setRefresh={handleRefresh}
				info={info}
				isOpen={profileOpen}
				onDismiss={() => {
					setProfileOpen(false)
				}}
			/>
		</Box>
	)
}
