import React, { Dispatch, useState } from 'react'
import { Transition } from '@headlessui/react'
import { Box, Typography } from '@mui/material'

import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react'
import SwiperType, { Pagination } from 'swiper'
import fillerImg from '@/assets/img/filler.png'

import 'swiper/css/pagination'
import 'swiper/css'
import DomeCard from '../Card/DomeCard'
import RoomOverviewCard from '../Card/RoomOverviewCard'
import SwiperRoomButton from '../Button/SwiperRoomButtons'
import CommunityCard from '../Card/CommunityCard'
import HeroCard from '../Card/HeroCard'
import NewDecorationCard from '../Card/NewDecorationCard'
import ComingSoonOverlay from '../Paper/ComingSoonOverlay'
import { fillerNewDeco } from '@/constants/filler'

export default function RoomLayer({ isMapView }: { isMapView: boolean }) {
	const [roomSwiper, setRoomSwiper] = useState<SwiperType | undefined>(undefined)

	return (
		<Transition show={isMapView}>
			<div className='fixed top-[72px] left-0 z-[12] grid h-full w-full overflow-auto'>
				<Box className='relative min-h-[calc(100vh_-_72px)] w-[100vw] overflow-hidden' height={'max-content'}>
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
							<HeroCard />
						</SwiperSlide>
					</SwiperHero>
				</Box>
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
						<Box mt={120}>
							<Typography fontSize={30} fontWeight={600} mb={36}>
								Popular communities
							</Typography>
							<Box
								display={'grid'}
								gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr 1fr' }}
								gap={50}
								position={'relative'}>
								<ComingSoonOverlay />
								{[...Array(3).keys()].map(index => (
									<CommunityCard key={index} />
								))}
							</Box>
						</Box>
					</div>
				</div>
				<Box className='w-full bg-[#1C1C1C] px-[10%] pb-[200px] pt-[60px] text-white' position={'relative'}>
					<Box width='100%'>
						<Box style={{ background: '#1c1c1c', width: '100%' }}>
							<Box>Coming Soon...</Box>
						</Box>{' '}
					</Box>
					<Box maxWidth={1240} display='grid'>
						<p className='mb-[34px] text-[30px] font-semibold'>Newly launched decorations</p>
						<Box display='grid' gap={52}>
							{fillerNewDeco.map(obj => (
								<NewDecorationCard key={obj.title} data={obj} />
							))}
						</Box>
					</Box>
				</Box>
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
