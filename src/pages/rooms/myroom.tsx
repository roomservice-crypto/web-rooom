import * as React from 'react'
import Modal from '@/components/Modal'
import HeaderBar from '@/components/map/HeaderBar'
import { Box, Divider, Grid, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`
	}
}

export default function MyRoom() {
	const [ready, setReady] = useState(true)
	const [room, setRoom] = useState<null | any>(null)
	const [open, setOpen] = useState(true)
	const [value, setValue] = useState(0)

	const handleChange = (event: any, newValue: number) => {
		setValue(newValue)
	}

	return (
		<Box
			sx={{
				height: '100vh',
				backgroundImage: `url(${'/assets/backgroundroom.png'})`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}}>
			<HeaderBar ready={ready} setRoom={setRoom} />

			<Modal maxWidth='1200px' customIsOpen={open} borderRadius='46px'>
				<Box
					display='flex'
					width='100%'
					height='100%'
					sx={{
						backgroundColor: '#F0F0F0',
						justifyContent: 'flex-start',
						border: '2px solid',
						borderRadius: '34px'
					}}>
					<Grid container>
						<Grid item xs={4}>
							<Box
								sx={{
									height: '100%',
									backgroundColor: 'white',
									borderTopLeftRadius: '34px',
									borderBottomLeftRadius: '34px',
									paddingTop: '36px',
									paddingLeft: '24px',
									justifyContent: 'flex-start'
								}}>
								<Tabs orientation='vertical' value={value} onChange={handleChange}>
									<Tab
										sx={{
											alignItems: 'flex-start',
											textTransform: 'none',
											fontWeight: '600',
											fontSize: '16px',
											background: '#1C1C1C'
										}}
										label='Account'
										{...a11yProps(0)}
									/>
									<Tab sx={{ alignItems: 'flex-start', textTransform: 'none' }} label='Assets' {...a11yProps(1)} />
									<Tab sx={{ alignItems: 'flex-start', textTransform: 'none' }} label='Social' {...a11yProps(2)} />
								</Tabs>
							</Box>
						</Grid>
						<Grid item xs={8}>
							<Box paddingTop={8}>
								<TabPanel value={value} index={0}>
									<Typography fontSize={24} fontWeight={600} padding={24}>
										ACCOUNT
									</Typography>
									<Divider sx={{ margin: '24px', border: '2px dashed #1C1C1C' }} />
								</TabPanel>
								<TabPanel value={value} index={1}>
									<Typography fontSize={24} fontWeight={600} padding={24}>
										ASSETS
									</Typography>
									<Divider sx={{ margin: '24px', border: '2px dashed #1C1C1C' }} />{' '}
								</TabPanel>
								<TabPanel value={value} index={2}>
									<Typography fontSize={24} fontWeight={600} padding={24}>
										SOCIAL
									</Typography>
									<Divider sx={{ margin: '24px', border: '2px dashed #1C1C1C' }} />{' '}
								</TabPanel>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</Box>
	)
}
