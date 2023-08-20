import Medium from '@/svgs/medium.svg'
import Twitter from '@/svgs/twitter.svg'

export default function Footer() {
	return (
		<footer className='flex items-center border-t border-dark px-20 py-12 mobile:flex-col mobile:px-4 mobile:py-8'>
			<span className='font-mona text-[36px] font-[900] mobile:mb-4 mobile:text-[24px] mobile:font-[700] mobile:leading-[42px]'>
				FRIEND ROOM
			</span>

			<a
				target='_blank'
				href='https://twitter.com/roomservice_gg'
				className='ml-auto flex items-center gap-x-[10px]  rounded-full border-[1.5px] border-dark py-4 px-6 hover:bg-black hover:bg-opacity-5 mobile:ml-0 mobile:w-full mobile:justify-center'
				rel='noreferrer'>
				<Twitter />
				<span>Follow us on Twitter</span>
			</a>
			<a
				rel='noreferrer'
				target='_blank'
				href='https://medium.com/@roomservicegg'
				className='ml-6 flex items-center gap-x-[10px] rounded-full border-[1.5px] border-dark py-4 px-6 hover:bg-black hover:bg-opacity-5 mobile:mt-3 mobile:ml-0 mobile:w-full mobile:justify-center'>
				<Medium />
				<span>Visit our Medium</span>
			</a>
		</footer>
	)
}
