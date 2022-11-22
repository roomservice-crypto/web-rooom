import Badge from '../common/badge'

export default function Map() {
	return (
		<div className='relative h-full w-full'>
			<img src='/assets/map.png' className='object-cover w-full h-full' draggable='false' />
			<Badge className='top-[207px] left-[987px]' />
			<Badge className='top-[400px] left-[870px]' />
		</div>
	)
}
