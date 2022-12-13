import Image from 'next/image'
import Link from 'next/link'
import LogoText from '@/svgs/logo-text.svg'

export default function Create() {
	return (
		<main className='flex'>
			<div className='w-[50%]'>
				<div>
					<Link href='/'>
						<a className='flex items-center'>
							<Image src='/logo.svg' width='36px' height='36px' />
							<LogoText className='ml-[10px] mt-1' />
						</a>
					</Link>
				</div>

        <div>
          <h3>Create Room</h3>
          
        </div>
			</div>
			<div className='w-[50%]'></div>
		</main>
	)
}
