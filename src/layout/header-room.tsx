import LogoText from '@/svgs/logo-text.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function HeaderRoom() {
	return (
		<header className='absolute left-0 right-0 top-0 px-20'>
			<div className='px-8 py-[18px]'>
				<Link href='/'>
					<a className='flex items-center'>
						<Image src='/logo.svg' width='36px' height='36px' />
						<LogoText className='ml-[10px] mt-1 text-white' />
					</a>
				</Link>
			</div>
		</header>
	)
}
