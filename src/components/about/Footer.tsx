import Medium from '@/svgs/medium.svg'
import Twitter from '@/svgs/twitter.svg'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='flex items-center border-t border-dark px-20 py-12'>
			<span className='font-mona text-[36px] font-[900]'>ROOMSERVICE</span>

			<Link href='https://twitter.com/roomservice_gg'>
				<a
					target='_blank'
					className='ml-auto flex items-center gap-x-[10px] rounded-full border-[1.5px] border-dark py-4 px-6 hover:bg-black hover:bg-opacity-5'>
					<Twitter />
					<span>Follow us on Twitter</span>
				</a>
			</Link>
			<Link href='https://medium.com/@roomservicegg'>
				<a
					target='_blank'
					className='ml-6 flex items-center gap-x-[10px] rounded-full border-[1.5px] border-dark py-4 px-6 hover:bg-black hover:bg-opacity-5'>
					<Medium />
					<span>Visit our medium</span>
				</a>
			</Link>
		</footer>
	)
}
