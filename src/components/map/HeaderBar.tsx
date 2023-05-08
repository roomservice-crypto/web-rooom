import { Transition } from '@headlessui/react'
import clsx from 'clsx'

import Image from 'next/image'
import LogoText from '@/svgs/logo-text.svg'
import { Dispatch } from 'react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Map from '@/svgs/map.svg'
import Room from '@/svgs/room.svg'
import CreateButton from '../Button/CreateButton'

export enum HeaderBarState {
	mapView,
	roomView,
	myRoom
}

export default function HeaderBar({
	ready,
	setRoom,
	state
}: {
	ready: boolean
	setRoom: Dispatch<string | null>
	state?: HeaderBarState
}) {
	return (
		<Transition appear show={ready}>
			<header
				className={clsx(
					'fixed top-0 z-50 flex h-[72px] w-[100%] items-center justify-between border-b border-dark bg-white px-20 mobile:h-[72px] mobile:px-4'
				)}>
				<button
					className='flex w-[150px] items-center'
					onClick={() => {
						setRoom(null)
					}}>
					<Image src='/logo.svg' width='36px' height='36px' />
					<LogoText className='ml-[10px] mt-1' />
				</button>
				<Toggle myRoom={false} />
				<CreateButton />
			</header>
		</Transition>
	)
}

function Toggle({ myRoom }: { myRoom: boolean }) {
	const [enabled, setEnabled] = useState(false)

	return (
		<Switch
			checked={enabled}
			onChange={setEnabled}
			className={`relative relative inline-flex h-[48px] w-[300px] items-center justify-between rounded-full border-2 border-dark px-[2px] py-2`}>
			<span
				className={`${
					enabled ? 'translate-x-[142px]' : 'translate-x-[0px]'
				} absolute inline-block h-[41px] w-[150px] transform rounded-[42px] bg-black transition`}
			/>
			<span className={clsx('z-[2] flex items-center gap-2 pl-4', !enabled && 'text-white')}>
				<Map />
				Map view
			</span>

			<span className={clsx('z-[2] flex items-center gap-2 pr-4', enabled && 'text-white')}>
				<Room />
				Room view
			</span>
			{myRoom && (
				<span className={clsx('z-[2] flex items-center gap-2 pr-4', enabled && 'text-white')}>
					<Room />
					Room view
				</span>
			)}
		</Switch>
	)
}
