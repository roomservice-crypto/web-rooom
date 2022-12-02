import clsx from 'clsx'

export default function Loaction(props: { id: string; selected: string }) {
	const active = props.id === props.selected

	return (
		<div className='group cursor-pointer' data-id={props.id}>
			<svg
				width='54'
				height='59'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={clsx(
					'cursor-pointer transition-transform origin-[center_bottom] group-hover:drop-shadow-[0px_10px_20px_rgba(250,231,108,0.8)] group-hover:scale-150 pointer-events-none',
					active && 'drop-shadow-[0px_10px_20px_rgba(250,231,108,0.8) scale-150'
				)}>
				<path
					d='M32.59 43.006c.826-.825 1.833-1.436 2.89-1.931C42.287 37.887 47 30.982 47 22.977 47 11.944 38.046 3 27 3S7 11.944 7 22.977c0 8.073 4.794 15.028 11.694 18.178 1.088.497 2.125 1.117 2.972 1.96l4.542 4.525c.482.48 1.263.48 1.744 0l4.638-4.634z'
					fill='#fff'
					className={clsx('transition-colors group-hover:fill-[#FAE76C]', active && 'fill-[#FAE76C]')}
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
					className={clsx('transition-colors group-hover:fill-white', active && 'fill-white')}
				/>
			</svg>
		</div>
	)
}
