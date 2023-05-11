import { Box, SxProps } from '@mui/material'
import React from 'react'

export default function Card({ children, padding, sx }: { children: React.ReactNode; padding?: string; sx?: SxProps }) {
	return (
		<Box
			margin='0 auto'
			className='md:w-[80%] w-[90%] max-w-[1200px] cursor-pointer overflow-hidden rounded-[28px] border-[12px] border-[#FAE76C] bg-light bg-white shadow-[0_0_0_2px_#000000] transition-all'
			height={'max-content'}
			sx={sx}>
			<Box
				className='flex h-full w-full rounded-[20px] border-2 border-dark bg-white'
				sx={{
					height: '100%',
					padding: padding ?? { xs: '15px', md: '2.5rem' }
				}}>
				{children}
			</Box>
		</Box>
	)
}
