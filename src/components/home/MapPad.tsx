import clsx from 'clsx'
import Image from 'next/image'
import HomeMarker from './HomeMarker'

const RISE_ORDER = [
	[2, 3, 6, 9],
	[1, 4, 5, 7, 8]
]

const rises = RISE_ORDER[0]

export default function MapPad() {
	return (
		<div className='absolute top-[400px] left-0 right-0 mobile:scale-[70%] mobile:top-[300px]'>
			<div className='absolute left-[50%] -translate-x-[50%]'>
				<figure className='w-[1875px]'>
					<Image width={1875} height={778} src='/assets/home/map.png' draggable='false' />
				</figure>

				<HomeMarker
					rise={rises.includes(1)}
					className='top-[230px] left-[400px]'
					Card={({ active }) => (
						<div
							key={1}
							className={clsx(
								'pointer-events-none absolute  -left-[80px] w-[196px] transition-all',
								active ? '-top-[225px] scale-100 opacity-100' : 'scale-95 opacity-0 -top-[200px]'
							)}>
							<Image width={394} height={565} src='/assets/home/card-1.png' />
						</div>
					)}
				/>

				<HomeMarker
					rise={rises.includes(2)}
					className='top-[260px] left-[570px]'
					Card={({ active }) => (
						<div
							className={clsx(
								'pointer-events-none absolute  -left-[80px] w-[196px] transition-all',
								active ? '-top-[225px] scale-100 opacity-100' : 'scale-95 opacity-0 -top-[200px]'
							)}>
							<Image width={394} height={565} src='/assets/home/card-2.png' />
						</div>
					)}
				/>

				<HomeMarker
					rise={rises.includes(4)}
					className='top-[100px] left-[890px]'
					Card={({ active }) => (
						<div
							className={clsx(
								'pointer-events-none absolute  -left-[80px] w-[196px] transition-all',
								active ? '-top-[225px] scale-100 opacity-100' : 'scale-95 opacity-0 -top-[200px]'
							)}>
							<Image width={394} height={565} src='/assets/home/card-4.png' />
						</div>
					)}
				/>

				<HomeMarker
					rise={rises.includes(3)}
					className='top-[240px] left-[800px]'
					Card={({ active }) => (
						<div
							className={clsx(
								'pointer-events-none absolute  -left-[80px] w-[196px] transition-all',
								active ? '-top-[225px] scale-100 opacity-100' : 'scale-95 opacity-0 -top-[200px]'
							)}>
							<Image width={394} height={565} src='/assets/home/card-3.png' />
						</div>
					)}
				/>

				<HomeMarker
					rise={rises.includes(5)}
					className='top-[375px] left-[760px]'
					Card={({ active }) => (
						<div
							className={clsx(
								'pointer-events-none absolute  -left-[80px] w-[196px] transition-all',
								active ? '-top-[225px] scale-100 opacity-100' : 'scale-95 opacity-0 -top-[200px]'
							)}>
							<Image width={394} height={565} src='/assets/home/card-5.png' />
						</div>
					)}
				/>

				<HomeMarker
					rise={rises.includes(6)}
					className='top-[220px] left-[1020px]'
					Card={({ active }) => (
						<div
							className={clsx(
								'pointer-events-none absolute  -left-[60px] w-[196px] transition-all',
								active ? '-top-[225px] scale-100 opacity-100' : 'scale-95 opacity-0 -top-[200px]'
							)}>
							<Image width={394} height={565} src='/assets/home/card-6.png' />
						</div>
					)}
				/>

				<HomeMarker
					rise={rises.includes(8)}
					className='top-[270px] left-[1220px]'
					Card={({ active }) => (
						<div
							className={clsx(
								'pointer-events-none absolute  -left-[60px] w-[196px] transition-all',
								active ? '-top-[225px] scale-100 opacity-100' : 'scale-95 opacity-0 -top-[200px]'
							)}>
							<Image width={394} height={565} src='/assets/home/card-8.png' />
						</div>
					)}
				/>

				<HomeMarker
					rise={rises.includes(7)}
					className='top-[320px] left-[1060px]'
					Card={({ active }) => (
						<div
							className={clsx(
								'pointer-events-none absolute  -left-[60px] w-[196px] transition-all',
								active ? '-top-[225px] scale-100 opacity-100' : 'scale-95 opacity-0 -top-[200px]'
							)}>
							<Image width={394} height={565} src='/assets/home/card-7.png' />
						</div>
					)}
				/>

				<HomeMarker
					rise={rises.includes(9)}
					className='top-[320px] left-[1480px]'
					Card={({ active }) => (
						<div
							className={clsx(
								'pointer-events-none absolute  -left-[60px] w-[196px] transition-all',
								active ? '-top-[225px] scale-100 opacity-100' : 'scale-95 opacity-0 -top-[200px]'
							)}>
							<Image width={394} height={565} src='/assets/home/card-9.png' />
						</div>
					)}
				/>
			</div>
		</div>
	)
}
