/* eslint-disable no-unused-vars */
import clsx from 'clsx'

import Image from 'next/image'
import LogoText from '@/svgs/logo-text.svg'
import { Dispatch, useState } from 'react'
import Map from '@/svgs/map.svg'
import Room from '@/svgs/room.svg'
import MyRoom from '@/svgs/myRoom.svg'
import CreateButton from '../Button/CreateButton'
import { useSignInToken } from '@/hooks/useSignIn'
import { Box } from '@mui/material'
import useBreakpoint from '@/hooks/useBreakpoint'
import { useRouter } from 'next/router'
import { useUserInfo } from '@/hooks/useUserInfo'
import Logo from '@/svgs/animated-logo.svg'
import { Room as RoomType } from '@/hooks/useGetRooms'

export enum HeaderBarState {
	mapView,
	roomView,
	myRoom
}

const toggleData = {
	xs: { [HeaderBarState.mapView]: 0, [HeaderBarState.roomView]: 45, [HeaderBarState.myRoom]: 92 },
	md: { [HeaderBarState.mapView]: 0, [HeaderBarState.roomView]: 136, [HeaderBarState.myRoom]: 272 },
	fullLength: 284,
	fullLengthMyRoom: 420,
	fullLengthMobile: 102,
	fullLengthMyRoomMobile: 150,
	buttonLength: 140,
	buttonLengthMobile: 50
}

export default function HeaderBar({
	ready,
	setRoom,
	state
}: {
	ready: boolean
	setRoom: Dispatch<RoomType | null>
	state: HeaderBarState
}) {
	useSignInToken()
	const router = useRouter()
	const isDownMd = useBreakpoint('md')
	const [refresh, setRefresh] = useState(false)
	const { info, loading } = useUserInfo(refresh)

	return (
		<>
			{loading && !router.pathname.includes('/map') && (
				<Box
					sx={{
						width: '100vw',
						height: '100vh',
						background: '#ffffff',
						zIndex: 1000,
						position: 'fixed',
						fontSize: 50,
						top: 0,
						left: 0,
						display: 'flex'
					}}>
					<Logo style={{ width: '80%', margin: 'auto', maxWidth: 300 }} />
				</Box>
			)}
			{/* <Transition appear show={ready}> */}
			<header
				className={clsx(
					'fixed top-0 z-50 flex h-[72px] w-[100%] items-center justify-between border-b border-dark bg-white px-20 mobile:h-[72px] mobile:px-4'
				)}>
				<button
					className='flex items-center'
					onClick={() => {
						setRoom(null)
						router.push('/')
					}}>
					<Image src='/logo.svg' width='100px' height='36px' />
					{/* {!isDownMd && <LogoText className='ml-[10px] mt-1' />} */}
				</button>
				<Toggle state={state} myRoom={!!info} />
				<CreateButton info={info} refresh={refresh} setRefresh={setRefresh} />
			</header>
			{/* </Transition> */}
		</>
	)
}

function Toggle({ state, myRoom }: { state: HeaderBarState; myRoom: boolean }) {
	const isDownMd = useBreakpoint('md')
	const router = useRouter()

	return (
		<>
			<Box
				width={
					myRoom
						? isDownMd
							? toggleData.fullLengthMyRoomMobile
							: toggleData.fullLengthMyRoom
						: isDownMd
						? toggleData.fullLengthMobile
						: toggleData.fullLength
				}
				className={`relative relative inline-flex h-[48px] items-center justify-between rounded-full border-2 border-dark px-[2px] py-2`}
				sx={{
					'& button': {
						whiteSpace: 'nowrap'
					}
				}}>
				<Box
					component={'span'}
					className={`absolute inline-block h-[41px] rounded-[42px] bg-black transition`}
					width={isDownMd ? toggleData.buttonLengthMobile : toggleData.buttonLength}
					style={{
						transform: `translateX(${toggleData[isDownMd ? 'xs' : 'md'][state]}px)`
					}}
				/>
				{/* ${
					enabled ? 'translate-x-[142px]' : 'translate-x-[0px]'
				} */}
				<button
					className={clsx('z-[2] flex items-center gap-2 pl-4', state === HeaderBarState.mapView && 'text-white')}
					onClick={() => {
						router.push('/map')
					}}>
					<Map />
					{!isDownMd && <>Map view</>}
				</button>

				<button
					className={clsx('z-[2] flex items-center gap-2 px-4', state === HeaderBarState.roomView && 'text-white')}
					// onClick={() => {
					// 	router.push('/rooms')
					// }}
				>
					<Room />
					{!isDownMd && <>Room view</>}
				</button>
				{myRoom && (
					<button
						className={clsx('z-[2] flex items-center gap-2 pr-4', state === HeaderBarState.myRoom && 'text-white')}
						onClick={() => {
							router.push('/room/myroom')
						}}>
						<MyRoom />
						{!isDownMd && <>My Room</>}
					</button>
				)}
			</Box>
		</>
		// <Switch
		// 	checked={enabled}
		// 	onChange={setEnabled}
		// 	className={`relative relative inline-flex h-[48px] w-[300px] items-center justify-between rounded-full border-2 border-dark px-[2px] py-2`}>
		// 	<span
		// 		className={`${
		// 			enabled ? 'translate-x-[142px]' : 'translate-x-[0px]'
		// 		} absolute inline-block h-[41px] w-[150px] transform rounded-[42px] bg-black transition`}
		// 	/>
		// 	<span className={clsx('z-[2] flex items-center gap-2 pl-4', !enabled && 'text-white')}>
		// 		<Map />
		// 		Map view
		// 	</span>

		// 	<span className={clsx('z-[2] flex items-center gap-2 pr-4', enabled && 'text-white')}>
		// 		<Room />
		// 		Room view
		// 	</span>
		// 	{myRoom && (
		// 		<span className={clsx('z-[2] flex items-center gap-2 pr-4', enabled && 'text-white')}>
		// 			<Room />
		// 			Room view
		// 		</span>
		// 	)}
		// </Switch>
	)
}
