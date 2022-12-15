import HeaderRoom from '@/layout/header-room'
import bg from '@/mock/images/bg-3.png'
import Users from '@/mock/svgs/users.svg'
import ExternalLink from '@/mock/svgs/external-link.svg'
import Edit from '@/mock/svgs/edit.svg'
import { shortenAddress } from '@/utils'
import art1 from '@/mock/images/art-1.png'
import art2 from '@/mock/images/art-2.png'
import art3 from '@/mock/images/art-3.png'
import art4 from '@/mock/images/art-4.png'
import art5 from '@/mock/images/art-5.png'
import art6 from '@/mock/images/art-6.png'
import art7 from '@/mock/images/art-7.png'
import art8 from '@/mock/images/art-8.png'
import art9 from '@/mock/images/art-9.png'
import art10 from '@/mock/images/art-10.png'
import art11 from '@/mock/images/art-11.png'
import Image from 'next/image'

const ARTS_1 = [
	{
		art: art1,
		name: 'Fox',
		brand: 'Marvin McKinney',
		desc: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
		date: '07/05/2016'
	},
	{
		art: art4,
		name: 'Fox',
		brand: 'Marvin McKinney',
		desc: 'An interesting implication of the 2007 study concerns the use of hand sanitizers by observant Muslims. Alcohol is forbidden (haram) to Muslims. Since the alcohol in hand sanitizer is absorbed into the blood, does that make these hand sanitizers haram?',
		date: '15/08/2017'
	},
	{
		art: art7,
		name: 'Warren',
		brand: 'Marvin McKinney',
		desc: 'Their blood alcohol levels rose to 0.007 to 0.02 o/oo (parts per thousand), or 0.7 to 2.0 mg/L.',
		date: '12/06/2020'
	},
	{
		art: art9,
		name: 'Lane',
		brand: 'Marvin McKinney',
		desc: 'An average healthy 7 year old boy weighs about 50 lb (23 kg). If we suppose the same amount of alcohol as in a 150 lb adult, that might amount to 3.1 to 6.0 mg/L in the child’s body—still far below an intoxicating effect. ',
		date: '18/09/2016'
	}
]

const ARTS_2 = [
	{ art: art2, name: 'Richards', brand: 'Marvin McKinney', date: '12/06/2020' },
	{
		art: art5,
		name: 'Lane',
		brand: 'Marvin McKinney',
		desc: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
		date: '18/09/2016'
	},
	{
		art: art2,
		name: 'Warren',
		brand: 'Marvin McKinney',
		desc: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
		date: '28/10/2012'
	},
	{
		art: art10,
		name: 'Fox',
		brand: 'Marvin McKinney',
		desc: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
		date: '12/06/2020'
	}
]

const ARTS_3 = [
	{
		art: art3,
		name: 'Edwards',
		brand: 'Marvin McKinney',
		desc: 'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. In hac habitasse platea dictumst. Sed cursus venenatis tellus, non lobortis diam volutpat sit amet. Sed tellus augue, hendrerit eu rutrum in, porttitor at metus. Mauris ac hendrerit metus. Phasellus mattis lectus commodo felis egestas, id accumsan justo ultrices. Phasellus aliquet, sem a placerat dapibus, enim purus dictum lacus, nec ultrices ante dui ac ante. Phasellus placerat, urna.',
		date: '12/06/2020'
	},
	{
		art: art6,
		name: 'Hawkins',
		brand: 'Marvin McKinney',
		desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		date: '18/09/2016'
	},
	{
		art: art8,
		name: 'Richards',
		brand: 'Marvin McKinney',
		desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		date: '15/08/2017'
	},
	{
		art: art11,
		name: 'Bessie Cooper',
		brand: 'Marvin McKinney',
		desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		date: '15/08/2017'
	}
]

export default function Room3(props: { room: any }) {
	const { room } = props

	return (
		<>
			<HeaderRoom />

			<div
				className='min-h-[100vh] bg-white pt-[176px] pb-[124px] text-dark'
				style={{
					backgroundImage: `url(${bg.src})`,
					backgroundPosition: '100% top',
					backgroundSize: '100% 240px',
					backgroundRepeat: 'no-repeat'
				}}>
				{/* avatar */}
				<figure className='flex justify-center'>
					<img src={room.avatar} className='h-40 w-40 rounded-full border-4 border-dark' />
				</figure>

				{/* introduce */}
				<div>
					<div className='mx-auto mt-6 w-max text-[30px] font-semibold leading-[1.2]'>{room.name}.room</div>
					<div className='mx-auto w-max opacity-40'>Room NFT owned by {shortenAddress(room.address)}</div>
					<div className='mx-auto mt-5 flex w-max gap-x-3'>
						<button className='flex items-center gap-x-2 rounded-full bg-dark px-6 py-[10px] text-white'>
							<Users />
							Follow
						</button>
						<button className='flex items-center gap-x-2 rounded-full border border-black border-opacity-10 px-6 py-[10px]'>
							<ExternalLink />
							Share Room
						</button>
						<button className='rounded-full border border-black border-opacity-10 p-3'>
							<Edit />
						</button>
					</div>
				</div>

				<div className='my-10 border-t border-opacity-10'></div>

				{/* grid */}
				<div className='mx-auto grid w-[1440px] grid-flow-dense grid-cols-3 gap-6 px-20'>
					<div className='flex flex-col gap-y-6'>
						{ARTS_1.map((a, i) => (
							<figure className='h-max overflow-hidden rounded-2xl border  border-black border-opacity-10' key={i}>
								<Image src={a.art.src} width={a.art.width} height={a.art.height} />
								<figcaption className='p-6'>
									<div className='text-xs text-black text-opacity-40'>{a.brand}</div>
									<div className='mb-2 font-medium text-black text-opacity-80'>{a.name}</div>
									<div className='text-black text-opacity-80'>{a.desc}</div>
									<div className=' mt-2 text-xs text-black text-opacity-20'>{a.date}</div>
								</figcaption>
							</figure>
						))}
					</div>
					<div className='flex flex-col gap-y-6'>
						{ARTS_2.map((a, i) => (
							<figure className='h-max overflow-hidden rounded-2xl border  border-black border-opacity-10' key={i}>
								<Image src={a.art.src} width={a.art.width} height={a.art.height} />
								<figcaption className='p-6'>
									<div className='text-xs text-black text-opacity-40'>{a.brand}</div>
									<div className='mb-2 font-medium text-black text-opacity-80'>{a.name}</div>
									<div className='text-black text-opacity-80'>{a.desc}</div>
									<div className=' mt-2 text-xs text-black text-opacity-20'>{a.date}</div>
								</figcaption>
							</figure>
						))}
					</div>
					<div className='flex flex-col gap-y-6'>
						{ARTS_3.map((a, i) => (
							<figure className='h-max overflow-hidden rounded-2xl border  border-black border-opacity-10' key={i}>
								<Image src={a.art.src} width={a.art.width} height={a.art.height} />
								<figcaption className='p-6'>
									<div className='text-xs text-black text-opacity-40'>{a.brand}</div>
									<div className='mb-2 font-medium text-black text-opacity-80'>{a.name}</div>
									<div className='text-black text-opacity-80'>{a.desc}</div>
									<div className=' mt-2 text-xs text-black text-opacity-20'>{a.date}</div>
								</figcaption>
							</figure>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
