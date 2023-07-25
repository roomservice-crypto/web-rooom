import React from 'react'
import { useSpring, animated } from 'react-spring'

const SINGLE_WIDTH = 240

export default function BannerThin() {
	const { x } = useSpring({
		from: { x: -SINGLE_WIDTH * 10 },
		to: { x: 0 },
		loop: true,
		config: {
			duration: 60000
		}
	})

	return (
		<div className='overflow-hidden'>
			<svg
				className='mx-auto bg-dark'
				width='7200'
				height='40'
				viewBox='0 0 7200 40'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<animated.svg x={x} width={SINGLE_WIDTH * 20}>
					{Array(20)
						.fill(0)
						.map((item, i) => (
							<text key={i} x={i * SINGLE_WIDTH} y='26' fill='white' className='font-mona font-[600]'>
								World Room
							</text>
						))}
				</animated.svg>
			</svg>
		</div>
	)
}
