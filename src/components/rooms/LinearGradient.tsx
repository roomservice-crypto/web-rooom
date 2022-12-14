import { useEffect, useRef, useState } from 'react'

export default function LinearRect(props: { strokeWidth?: number }) {
	const { strokeWidth = 2 } = props
	const [data, setData] = useState<{ width: number; height: number } | null>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		let i: HTMLDivElement | null
		if ((i = containerRef.current)) {
			const handler = () => setData({ width: i!.offsetWidth, height: i!.offsetHeight })
			handler()

			window.addEventListener('resize', handler)

			return () => window.removeEventListener('resize', handler)
		}
	}, [containerRef])

	return (
		<div className='absolute left-0 top-0 h-full w-full -z-1' ref={containerRef}>
			{data && (
				<>
					<svg
						className='absolute left-0 top-0 h-full w-full blur-[10px]'
						viewBox={`0 0 ${data.width} ${data.height}`}
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect
							width={data.width - strokeWidth}
							height={data.height - strokeWidth}
							stroke='url(#linear-rect-1)'
							rx={24}
							strokeWidth={strokeWidth}
							x={strokeWidth / 2}
							y={strokeWidth / 2}
						/>
						<defs>
							<linearGradient id='linear-rect-1' x1='0' y1='0' x2='100%' y2='0' gradientUnits='userSpaceOnUse'>
								<stop stopColor='#69EACB' />
								<stop offset='0.48' stopColor='#EACCF8' />
								<stop offset='1' stopColor='#6654F1' />
							</linearGradient>
						</defs>
					</svg>
					<svg
						className='h-full w-full'
						viewBox={`0 0 ${data.width} ${data.height}`}
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect
							width={data.width - strokeWidth}
							height={data.height - strokeWidth}
							stroke='url(#linear-rect-1)'
							rx={24}
							strokeWidth={strokeWidth}
							x={strokeWidth / 2}
							y={strokeWidth / 2}
						/>
						<defs>
							<linearGradient id='linear-rect-1' x1='0' y1='0' x2='100%' y2='0' gradientUnits='userSpaceOnUse'>
								<stop stopColor='#69EACB' />
								<stop offset='0.48' stopColor='#EACCF8' />
								<stop offset='1' stopColor='#6654F1' />
							</linearGradient>
						</defs>
					</svg>
				</>
			)}
		</div>
	)
}
