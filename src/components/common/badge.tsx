import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import TransitionBadge from './TransitionBadge'
import Record from '@/svgs/record.svg'
import ArrowRight from '@/svgs/arrow-right.svg'
import Close from '@/svgs/close.svg'

export default function Badge(props: { className: string }) {
	const [active, setActive] = useState(true)
	const svgRef = useRef<SVGSVGElement>(null)

	useEffect(() => {
		const hover = () => {
			setActive(true)
		}
		const hoverOut = () => {
			setActive(false)
		}

		svgRef.current?.addEventListener('mouseover', hover)
		svgRef.current?.addEventListener('mouseleave', hoverOut)

		return () => {
			svgRef.current?.removeEventListener('mouseover', hover)
			svgRef.current?.removeEventListener('mouseleave', hoverOut)
		}
	}, [])

	return (
		<>
			<TransitionBadge show={active}>
				<div className='top-[92px] left-20 fixed w-[448px] h-[492px] border-2 border-black rounded-[32px] bg-white overflow-hidden'>
					<div className='bg-[#BAEDBD] flex justify-end p-6 h-[120px] border-b-2 border-dashed border-black'>
						<Close className='cursor-pointer' />
					</div>
					<div className='px-8'>
						<div className='flex mt-3 justify-between'>
							<span className='bg-green-400 border-4 border-white h-[96px] w-[96px] -mt-12 rounded-full shadow-lg'></span>
							<span className='flex'>
								<span className='inline-block w-8 h-8 bg-blue-400 rounded-full border border-white'></span>
								<span className='inline-block w-8 h-8 bg-indigo-400 rounded-full border border-white -ml-4'></span>
								<span className='inline-block w-8 h-8 bg-violet-400 rounded-full border border-white -ml-4'></span>
								<span className='w-8 h-8 rounded-full -ml-4 flex justify-center items-center bg-white'>+6</span>
							</span>
						</div>
						<div className='mt-6 font-semibold text-2xl'>STEPN | Public Beta Phase V</div>
						<div className='font-normal text-md text-opacity-40 text-black'>Room NFT owned by 0x1240</div>
						<button className='mt-4 py-3 px-6 border-2 border-dashed border-[#1c1c1c] rounded-[34px] flex gap-x-2'>
							<Record /> Voice chatting...
						</button>
						<div className='mt-4 text-sm text-black text-opacity-40 font-normal'>
							<span>
								<span className='text-black font-semibold text-opacity-80 mr-1'>302</span>
								Following
							</span>
							<span className='ml-5'>
								<span className='text-black font-semibold text-opacity-80 mr-1'>8</span>
								Likes
							</span>
						</div>
						<div className='mt-8 flex items-center'>
							<button className='bg-[#1C1C1C] text-white py-6 px-8 rounded-[24px]'>Say Hi</button>
							<button className='bg-white py-6 px-8 rounded-[24px] border-2 border-[#1c1c1c] shadow-[0_4px_#141414] flex ml-3'>
								Explore room <ArrowRight />
							</button>
						</div>
					</div>
				</div>
			</TransitionBadge>
			<div className={clsx('group absolute', props.className)}>
				<div
					className={clsx(
						'bg-white shadow-lg absolute rounded-lg flex px-3 py-[10px] min-w-[160px] -top-14 translate-x-[-50%] left-[50%]  transition-all',
						active ? '-top-24 opacity-100 scale-95' : 'opacity-0 scale-100'
					)}>
					<span className='rounded-full bg-green-400 w-9 h-9 items-center mr-3'></span>
					<div>
						<div className='font-semibold text-xs whitespace-nowrap'>Room Name</div>
						<div className='font-normal text-xs  whitespace-nowrap mt-1'>Describe</div>
					</div>
				</div>

				<svg
					ref={svgRef}
					width='54'
					height='59'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={clsx(
						'cursor-pointer transition-transform origin-[center_bottom]',
						active && 'drop-shadow-[0px_10px_20px_rgba(250,231,108,0.8)] scale-150 '
					)}>
					<path
						d='M32.59 43.006c.826-.825 1.833-1.436 2.89-1.931C42.287 37.887 47 30.982 47 22.977 47 11.944 38.046 3 27 3S7 11.944 7 22.977c0 8.073 4.794 15.028 11.694 18.178 1.088.497 2.125 1.117 2.972 1.96l4.542 4.525c.482.48 1.263.48 1.744 0l4.638-4.634z'
						fill='#fff'
						className={clsx('transition-colors', active && 'fill-[#FAE76C] ')}
					/>
					<path
						d='M32.59 43.006c.826-.825 1.833-1.436 2.89-1.931C42.287 37.887 47 30.982 47 22.977 47 11.944 38.046 3 27 3S7 11.944 7 22.977c0 8.073 4.794 15.028 11.694 18.178 1.088.497 2.125 1.117 2.972 1.96l4.542 4.525c.482.48 1.263.48 1.744 0l4.638-4.634z'
						stroke='#292929'
					/>
					<circle
						cx='27'
						cy='23'
						r='7'
						fill='#FBEC95'
						stroke='#292929'
						className={clsx('transition-colors', active && 'fill-white')}
					/>
				</svg>
			</div>
		</>
	)
}
