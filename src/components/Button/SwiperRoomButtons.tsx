import CirclePrev from '@/svgs/circle-button-prev.svg'
import CircleNext from '@/svgs/circle-button-next.svg'
import SwiperType from 'swiper'

export default function SwiperRoomButton({ swiper }: { swiper: SwiperType | undefined }) {
	return (
		<div className='flex gap-3'>
			<button
				className='room-button-prev flex h-[40px] w-[40px] items-center justify-center rounded-[50%] border-2 border-[#1c1c1c]  text-center text-xl  shadow-[0_4px_#141414] transition-all hover:bg-black hover:bg-opacity-10 hover:shadow-none'
				onClick={() => {
					if (!swiper) return
					swiper.slidePrev()
				}}>
				<CirclePrev />
			</button>
			<button
				className='room-button-next flex h-[40px] w-[40px] items-center justify-center rounded-[50%] border-2 border-[#1c1c1c]  text-center text-xl  shadow-[0_4px_#141414] transition-all hover:bg-black hover:bg-opacity-10 hover:shadow-none'
				onClick={() => {
					if (!swiper) return
					swiper.slideNext()
				}}>
				<CircleNext />
			</button>
		</div>
	)
}
