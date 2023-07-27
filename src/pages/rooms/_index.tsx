import HeaderBar, { HeaderBarState } from '@/components/map/HeaderBar'
import RoomLayer from '@/components/map/RoomLayer'
import { Box } from '@mui/material'

export default function Rooms() {
	return (
		<Box width='100%'>
			<HeaderBar ready={true} setRoom={() => {}} state={HeaderBarState.roomView} />
			<RoomLayer isMapView={true} />
		</Box>
	)
}
