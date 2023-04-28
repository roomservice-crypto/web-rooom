import { Box } from '@mui/material'
import dynamic from 'next/dynamic'

const Frame = dynamic(() => import('../components/Frame'), {
	ssr: false
})

export default function Test() {
	return (
		<Box>
			<Frame />
		</Box>
	)
}
