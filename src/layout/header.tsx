import Room from '@/svgs/ROOM.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
	return (
		<header className='fixed z-10 top-0 left-0 right-0 flex h-[60px] bg-white bg-opacity-20 px-20 backdrop-blur justify-between items-center'>
			<span className='flex items-center'>
				<Image src='/favicon.png' width='36px' height='36px' />
				<Room className='ml-[10px] mt-1' />
			</span>

			<nav className='flex items-center'>
				<ul className='flex font-semibold items-center gap-x-6'>
					<li>
						<Link href='/'>
							<a className='px-2 py-3 text-black text-opacity-40'>About</a>
						</Link>
					</li>
					<li>
						<Link href='/'>
							<a className='px-2 py-3 text-black text-opacity-100'>World</a>
						</Link>
					</li>
				</ul>
			</nav>

			<button className='text-[#1c1c1c] rounded-3xl px-4 py-2 border-2 border-[#1c1c1c]'>Launch App</button>
		</header>
	)
}
