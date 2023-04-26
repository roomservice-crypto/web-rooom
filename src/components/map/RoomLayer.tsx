import React, { Dispatch, useState } from 'react'
import { Transition } from '@headlessui/react'
import Card from '../Card'
import { Box, Typography } from '@mui/material'
import Create from '@/svgs/create.svg'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react'
import SwiperType, { Pagination } from 'swiper'
import fillerImg from '@/assets/img/filler.png'

import 'swiper/css/pagination'
import 'swiper/css'
import DomeCard from '../Card/DomeCard'
import RoomOverviewCard from '../Card/RoomOverviewCard'
import SwiperRoomButton from '../Button/SwiperRoomButtons'

export default function RoomLayer({ isMapView }: { isMapView: boolean }) {
	const [roomSwiper, setRoomSwiper] = useState<SwiperType | undefined>(undefined)

	return (
		<Transition show={isMapView}>
			<div className='fixed top-[72px] left-0 z-[12] grid h-full w-full overflow-auto'>
				<div className='relative h-[calc(100vh_-_72px)] w-[100vw] overflow-hidden'>
					<div
						className='absolute h-full w-full'
						style={{
							background: `url(${fillerImg.src})`,
							backgroundSize: 'cover',
							filter: 'blur(10px)',
							pointerEvents: 'none',
							top: 0,
							left: 0,
							transform: 'scale(1.3,1.3) translate(-15px, -15px)',
							transformOrigin: '0 0'
						}}></div>
					<SwiperHero>
						<SwiperSlide>
							<Box margin='0 auto' width='100%'>
								<Card>
									<div className='flex w-full'>
										<div className='max-w-[300px]'>
											<Typography fontSize={36} fontWeight={700}>
												Time-Limited Room Creation Event
											</Typography>
											<Typography
												fontSize={18}
												sx={{
													color: 'rgba(0, 0, 0, 0.4)'
												}}>
												Create a room and get League of legends exclusive room badges and room decorations.
											</Typography>
											<Typography
												sx={{
													borderRadius: '48px',
													background: '#FAE76C',
													width: 'max-content',
													padding: '12px 16px'
												}}>
												Furniture rewards
											</Typography>
											<button className='ba ml-3 flex flex-1 items-center justify-center gap-x-4 rounded-[24px] border-2 border-[#1c1c1c] bg-[#FAE76C] py-6 px-6 text-center text-xl font-semibold leading-[26px] shadow-[0_4px_#141414] transition-all hover:bg-black hover:bg-opacity-10 hover:shadow-none'>
												Create room
												<Create />
											</button>
										</div>
										<img src={fillerImg.src} alt='' />
									</div>
								</Card>
							</Box>
						</SwiperSlide>
						<SwiperSlide>
							<Card>aaa</Card>
						</SwiperSlide>
					</SwiperHero>
				</div>
				<div className='w-full bg-white pb-[200px]'>
					<div className='h-content mx-auto mt-20 w-[80%] '>
						<div className='flex justify-between'>
							<p className='text-xl font-semibold'>Hot Room</p>
							<SwiperRoomButton swiper={roomSwiper} />
						</div>
						<SwiperRoom setSwiper={setRoomSwiper}>
							<SwiperSlide>
								<SwiperRoomSlide index={0} />
							</SwiperSlide>
							<SwiperSlide>
								<SwiperRoomSlide index={1} />
							</SwiperSlide>
							<SwiperSlide>
								<SwiperRoomSlide index={2} />
							</SwiperSlide>
							<SwiperSlide>
								<SwiperRoomSlide index={3} />
							</SwiperSlide>
							<SwiperSlide>
								<SwiperRoomSlide index={4} />
							</SwiperSlide>
							<SwiperSlide>
								<SwiperRoomSlide index={5} />
							</SwiperSlide>
							<SwiperSlide>
								<SwiperRoomSlide index={6} />
							</SwiperSlide>
							<SwiperSlide>
								<SwiperRoomSlide index={7} />
							</SwiperSlide>
						</SwiperRoom>
						<RoomOverviewCard />
					</div>
				</div>
			</div>
		</Transition>
	)
}

function SwiperHero({ children }: { children?: React.ReactNode }) {
	return (
		<Box
			position='relative'
			margin='5% 0'
			pb={80}
			sx={{
				'& .swiper': { overflow: 'visible' },
				'& .swiper-slide': {
					width: '100%',
					display: 'flex',
					justifyContent: 'center'
				}
			}}>
			<Swiper
				modules={[Pagination]}
				spaceBetween={0}
				slidesPerView={1}
				pagination={{
					clickable: true,
					el: '.swiper-pagination',
					type: 'bullets',
					bulletClass: 'swiper-hero-bullet',
					bulletActiveClass: 'swiper-hero-bullet-active'
				}}>
				{children}
			</Swiper>
			<div className='swiper-pagination bottom-[-40px] flex w-full justify-center gap-5'></div>
		</Box>
	)
}

function SwiperRoom({ children, setSwiper }: { children?: React.ReactNode; setSwiper: Dispatch<SwiperType> }) {
	return (
		<Box
			position='relative'
			margin='5% 0'
			pb={80}
			sx={{
				maxWidth: '100%',
				'& .swiper': {
					maxWidth: '100%',
					width: '100vw'
				},
				'& .swiper-slide': {
					width: '100%',
					display: 'flex',
					justifyContent: 'center'
				}
			}}>
			<Swiper
				spaceBetween={10}
				slidesPerView={5}
				initialSlide={4}
				onSwiper={s => {
					setSwiper(s)
				}}
				centeredSlides
				rewind>
				{children}
			</Swiper>
		</Box>
	)
}

function SwiperRoomSlide({ index }: { index: number }) {
	const swiperSlide = useSwiperSlide()
	const swiper = useSwiper()

	return (
		<DomeCard
			selected={swiperSlide.isActive}
			onClick={() => {
				swiper.slideTo(index)
			}}
		/>
	)
}
