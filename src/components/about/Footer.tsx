import Discord from '@/svgs/discord.svg'
import Twitter from '@/svgs/twitter.svg'

export default function Footer() {
	return (
		<footer className='flex items-center border-t border-dark px-20 py-12'>
			<span className='font-mona text-[36px] font-[900]'>ROOMSERVICE</span>

			<button className='ml-auto flex items-center gap-x-[10px] rounded-full border-[1.5px] border-dark py-4 px-6'>
				<Discord />
				<span>Join our discord</span>
			</button>
			<button className='ml-6 flex items-center gap-x-[10px] rounded-full border-[1.5px] border-dark py-4 px-6'>
				<Twitter />
				<span>Follow us on Twitter</span>
			</button>
		</footer>
	)
}
