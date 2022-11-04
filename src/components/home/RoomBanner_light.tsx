import React from 'react'
import { useSpring, animated } from 'react-spring'
import clsx from 'clsx'

export default function RoomBanner() {
	const { x } = useSpring({
		from: { x: 0 },
		to: { x: -796 * 5 },
		loop: true,
		config: {
			duration: 80000
		}
	})

	return (
		<svg height='180px' width='100%' className={clsx('text-[170px] font-bold font-fontspring  bg-primary-500')}>
			<animated.svg x={x} width={796 * 10}>
				{Array(10)
					.fill(1)
					.map((item, i) => (
						<React.Fragment key={i}>
							<text x={i * 796 + 16} y='152' fill='#131313'>
								ROOM
							</text>
							<text x={i * 796 + 316} y='152' fill='none' stroke='#131313' strokeWidth='1'>
								• ROOM •
							</text>
						</React.Fragment>
					))}
			</animated.svg>
		</svg>
	)
}
