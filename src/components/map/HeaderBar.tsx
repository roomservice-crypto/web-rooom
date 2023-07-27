/* eslint-disable no-unused-vars */
import clsx from 'clsx'

import Image from 'next/image'
import LogoText from '@/svgs/logo-text.svg'
import { Dispatch, useCallback, useState } from 'react'
import Map from '@/svgs/map.svg'
import Room from '@/svgs/room.svg'
import MyRoom from '@/svgs/myRoom.svg'
import CreateButton from '../Button/CreateButton'
import { useSignIn, useSignInToken } from '@/hooks/useSignIn'
import { Box } from '@mui/material'
import useBreakpoint from '@/hooks/useBreakpoint'
import { useRouter } from 'next/router'
import { useUserInfo } from '@/hooks/useUserInfo'
import Logo from '@/svgs/animated-logo.svg'
import { Room as RoomType } from '@/hooks/useGetRooms'
import { useWeb3React } from '@web3-react/core'

export enum HeaderBarState {
	mapView,
	// roomView,
	myRoom
}

const toggleData = {
	xs: {
		[HeaderBarState.mapView]: 0,
		[HeaderBarState.myRoom]: 45
		// [HeaderBarState.roomView]: 45,
		// [HeaderBarState.myRoom]: 92
	},
	md: {
		[HeaderBarState.mapView]: 0,
		[HeaderBarState.myRoom]: 136
		// [HeaderBarState.roomView]: 136,
		// [HeaderBarState.myRoom]: 272
	},
	mapOnlyLength: 147,
	mapOnlyLengthMobile: 51,
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
	const { account } = useWeb3React()
	const router = useRouter()
	const isDownMd = useBreakpoint('md')
	const [refresh, setRefresh] = useState(false)
	const { info, loading } = useUserInfo(refresh)

	const refreshCb = useCallback(() => {
		setRefresh((prev: boolean) => !prev)
	}, [setRefresh])

	useSignIn(refreshCb)

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
				</button>
				<Toggle state={state} myRoom={!!info && !!account} />
				<CreateButton info={info} refreshCb={refreshCb} needCreate={!!account && !loading && !info?.roomName} />
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
							? toggleData.fullLengthMobile
							: toggleData.fullLength
						: isDownMd
						? toggleData.mapOnlyLengthMobile
						: toggleData.mapOnlyLength
				}
				className={`relative relative inline-flex h-[48px] items-center justify-between rounded-full border-2 border-dark px-[2px] py-2`}
				sx={{
					'& button': {
						whiteSpace: 'nowrap'
					}
				}}>
				{(state === HeaderBarState.mapView || state === HeaderBarState.myRoom) && (
					<Box
						component={'span'}
						className={`absolute inline-block h-[41px] rounded-[42px] bg-black transition`}
						width={isDownMd ? toggleData.buttonLengthMobile : toggleData.buttonLength}
						style={{
							transform: `translateX(${toggleData[isDownMd ? 'xs' : 'md'][state]}px)`
						}}
					/>
				)}
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
				{/* 
				<button
					className={clsx('z-[2] flex items-center gap-2 px-4', state === HeaderBarState.roomView && 'text-white')}
					onClick={() => {
						router.push('/rooms')
					}}>
					<Room />
					{!isDownMd && <>Room view</>}
				</button> */}
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
	)
}
