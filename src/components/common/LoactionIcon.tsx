// import { ALL } from '@/constants'
import { shortenAddress } from '@/utils'
import { getRooms } from '@/utils/storage'
import clsx from 'clsx'
// import TypeIcon from '../map/TypeIcon'
import { Room } from '@/hooks/useGetRooms'

export default function LoactionIcon(props: { id: number; selected: Room; filter: string; roomsDict: any }) {
	const { id, selected, roomsDict } = props

	// const rooms = getRooms()

	const active = id == selected?.userId
	// const display = filter === ALL || filter === rooms[id].type ? true : false

	return (
		<div
			className={clsx(
				'group relative flex cursor-pointer justify-center'
				// !display && 'hidden'
			)}
			data-id={props.id}>
			<div
				className={clsx(
					'absolute bottom-[88px] rounded-xl bg-dark px-4 py-[10px] text-center text-white group-hover:block',
					active ? 'block' : 'hidden'
				)}>
				<div className='text-sm font-semibold'>{roomsDict?.[id]?.roomName}.room</div>
				<div className='text-xs opacity-80'>{shortenAddress(roomsDict?.[id]?.account)}</div>
			</div>

			<svg
				width='54'
				height='59'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={clsx(
					'pointer-events-none origin-[center_bottom] cursor-pointer transition-transform group-hover:scale-150 group-hover:drop-shadow-[0px_10px_20px_rgba(250,231,108,0.8)]',
					active &&
						'drop-shadow-[0px_10px_20px_rgba(250,231,108,0.8) scale-150 drop-shadow-[0px_10px_20px_rgba(250,231,108,0.8)]'
				)}>
				<path
					d='M32.59 43.006c.826-.825 1.833-1.436 2.89-1.931C42.287 37.887 47 30.982 47 22.977 47 11.944 38.046 3 27 3S7 11.944 7 22.977c0 8.073 4.794 15.028 11.694 18.178 1.088.497 2.125 1.117 2.972 1.96l4.542 4.525c.482.48 1.263.48 1.744 0l4.638-4.634z'
					fill='#fff'
					className={clsx('transition-colors group-hover:fill-[#FAE76C]', active && 'fill-[#FAE76C]')}
				/>
				<path
					d='M32.59 43.006c.826-.825 1.833-1.436 2.89-1.931C42.287 37.887 47 30.982 47 22.977 47 11.944 38.046 3 27 3S7 11.944 7 22.977c0 8.073 4.794 15.028 11.694 18.178 1.088.497 2.125 1.117 2.972 1.96l4.542 4.525c.482.48 1.263.48 1.744 0l4.638-4.634z'
					stroke='#292929'
					strokeWidth={1.5}
				/>
				<circle
					cx='27'
					cy='23'
					r='7'
					fill='#FBEC95'
					stroke='#292929'
					strokeWidth={1.5}
					className={clsx('transition-colors group-hover:fill-white', active && 'hidden fill-white')}
				/>

				<image
					x='10'
					y='6'
					href={roomsDict?.[id]?.avatar}
					className={clsx(
						'w-[34px] rounded-full transition-opacity group-hover:opacity-100',
						active ? 'opacity-100' : 'opacity-0'
					)}
					clipPath='inset(0% round 99px)'
				/>
			</svg>

			{/* <div
				className={clsx(
					'pointer-events-none absolute bottom-[14px] ml-8 transition-opacity group-hover:opacity-100',
					active ? 'opacity-100' : 'opacity-0'
				)}>
				<TypeIcon type={rooms[id].type} className='h-6 w-6' />
			</div> */}
		</div>
	)
}
