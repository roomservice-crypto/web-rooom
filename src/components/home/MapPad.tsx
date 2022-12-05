import Image from 'next/image'

export default function MapPad() {
	return (
		<div className='absolute top-[400px] left-0 right-0'>
			<div className='absolute left-[50%] -translate-x-[50%]'>
				<figure className='w-[1875px]'>
					<Image width={1875} height={778} src='/assets/home/map.png' />
				</figure>
			</div>
		</div>
	)
}
