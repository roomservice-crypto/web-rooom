import React from 'react'
import { useSpring, animated } from 'react-spring'

const SINGLE_WIDTH = 1010

export default function Banner() {
	const { x } = useSpring({
		from: { x: -SINGLE_WIDTH * 5 },
		to: { x: 0 },
		loop: true,
		config: {
			duration: 80000
		}
	})

	return (
		<div className='overflow-hidden border-t border-b border-dark'>
			<svg className='h-[132px] mobile:h-[72px]' viewBox='0 0 7200 132' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<animated.svg x={x} width={SINGLE_WIDTH * 10}>
					{Array(10)
						.fill(1)
						.map((item, i) => (
							<React.Fragment key={i}>
								<text x={i * SINGLE_WIDTH} y='105' className='font-mona text-[100px] font-[900]' fill='#1c1c1c'>
									ROOM SERVICE
								</text>
								<svg stroke='#1C1C1C' strokeWidth='2' x={130 + SINGLE_WIDTH * i}>
									<path d='M823.513 17.5C841.736 17.5 856.513 32.3128 856.513 50.5909V115.5H790.513V50.5909C790.513 32.3128 805.29 17.5 823.513 17.5Z' />
									<path d='M823.512 57C834.224 57 842.912 65.7076 842.912 76.4545V115H804.112V76.4545C804.112 65.7076 812.8 57 823.512 57Z' />
									<path d='M823.512 87C828.591 87 832.712 91.1287 832.712 96.2273V115H814.312V96.2273C814.312 91.1287 818.434 87 823.512 87Z' />
								</svg>
							</React.Fragment>
						))}
				</animated.svg>
			</svg>
		</div>
	)
}
