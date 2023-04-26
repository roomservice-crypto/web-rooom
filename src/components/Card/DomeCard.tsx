import { Box } from '@mui/material'
import fillerImg from '@/assets/img/filler.png'
import clsx from 'clsx'

export default function DomeCard({ selected, onClick }: { selected?: boolean; onClick: () => void }) {
	return (
		<Box
			onClick={onClick}
			position='relative'
			sx={{
				'& .bg': {
					opacity: 0,
					transition: '.2s'
				},
				'&:hover .bg, .selected': {
					opacity: 1
				}
			}}>
			<svg
				className={clsx('bg', selected && 'selected')}
				width='100%'
				height='100%'
				viewBox='0 0 206 240'
				fill='none'
				style={{ filter: 'drop-shadow(0px 3px 0px)' }}>
				<g>
					<path
						d='M0 100C0 44.7715 44.7715 0 100 0H106C161.228 0 206 44.7715 206 100V216C206 227.046 197.046 236 186 236H20C8.95431 236 0 227.046 0 216V100Z'
						fill='#FAE76C'
					/>
					<path
						d='M100 1H106C160.676 1 205 45.3238 205 100V216C205 226.493 196.493 235 186 235H20C9.50659 235 1 226.493 1 216V100C1 45.3238 45.3238 1 100 1Z'
						stroke='#1C1C1C'
						strokeWidth='2'
					/>
				</g>
			</svg>

			<Box
				style={{
					width: '100%',
					height: '100%',
					WebkitMaskImage: 'url(/assets/dome.svg)',
					WebkitMaskRepeat: 'no-repeat',
					maskImage: 'url(/assets/dome.svg)',
					maskRepeat: 'no-repeat',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)'
				}}>
				<img src={fillerImg.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
			</Box>
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 206 240'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
				<path
					d='M197 103V216C197 222.075 192.075 227 186 227H20C13.9249 227 9 222.075 9 216V103C9 51.0852 51.0852 9 103 9C154.915 9 197 51.0852 197 103Z'
					stroke='#000000'
					strokeWidth={2}
				/>
			</svg>
		</Box>
	)
}
