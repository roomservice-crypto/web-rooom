import { Box, Typography } from '@mui/material'

export default function ComingSoonOverlay() {
	return (
		<Box
			position='absolute'
			top={0}
			left={0}
			width='100%'
			height='100%'
			sx={{
				display: 'flex',
				background: '#00000040'
			}}>
			<Box margin='auto' width='100%'>
				<Box style={{ background: '#1c1c1c', width: '100%', color: '#ffffff', padding: '16px' }}>
					<Typography fontWeight={800} fontSize={30} textAlign={'center'}>
						Coming Soon...
					</Typography>
				</Box>{' '}
			</Box>
		</Box>
	)
}
