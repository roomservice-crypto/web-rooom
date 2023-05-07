import { Box, Typography } from '@mui/material'
import { PrimaryButton } from '../Button'
import Create from '@/svgs/create.svg'
import fillerImg from '@/assets/img/filler.png'
import Card from '.'
import useBreakpoint from '@/hooks/useBreakpoint'

export default function HeroCard() {
	const isDownMd = useBreakpoint('md')
	return (
		<Box margin='0 auto' width='100%'>
			<Card>
				<Box
					className='w-full'
					display={'flex'}
					flexDirection={{ xs: 'column-reverse', md: 'row' }}
					gap={'40px'}
					minHeight={500}>
					<Box className='flex flex-col justify-between' width={{ xs: '100%', md: '300px' }}>
						<Typography fontSize={36} fontWeight={700}>
							Time-Limited Room Creation Event
						</Typography>
						<Typography
							fontSize={18}
							sx={{
								color: 'rgba(0, 0, 0, 0.4)'
							}}>
							Create a room and get League of legends exclusive room badges and room decorations.
						</Typography>
						<Typography
							sx={{
								margin: '12px 0 20px',
								borderRadius: '48px',
								background: '#FAE76C',
								width: 'max-content',
								padding: '12px 16px'
							}}>
							Furniture rewards
						</Typography>
						<PrimaryButton style={{ marginTop: 'auto', height: 72, whiteSpace: 'nowrap', flexGrow: 0 }}>
							Create room
							<Create />
						</PrimaryButton>
					</Box>
					<img
						src={fillerImg.src}
						alt=''
						style={{ borderRadius: 10, width: isDownMd ? '100%' : 'calc(100% - 300px)', objectFit: 'cover' }}
					/>
				</Box>
			</Card>
		</Box>
	)
}
