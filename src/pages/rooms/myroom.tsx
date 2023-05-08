import * as React from 'react'
import Modal from '@/components/Modal'
import HeaderBar from '@/components/map/HeaderBar'
import { Box, Checkbox, Divider, FormControl, Grid, IconButton, Tab, Tabs, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import AccountIcon from '@/svgs/settings/account.svg'
import BoxIcon from '@/svgs/settings/box.svg'
import ThumbIcon from '@/svgs/settings/thumb.svg'

import { styled } from '@mui/material/styles'
import { PrimaryButton } from '@/components/Button'
import Pin from '@/svgs/location.svg'

const SettingsTabs = styled(Tabs)({
	'& .MuiTabs-indicator': {
		display: 'none'
	}
})

const SettingsTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
	textTransform: 'none',
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'flex-start',
	borderRadius: '20px',
	padding: '8px 16px',
	minWidth: 0,
	minHeight: 0,
	[theme.breakpoints.up('sm')]: {
		minWidth: 0
	},
	fontWeight: 600,
	fontSize: '16px',
	marginRight: theme.spacing(1),
	svg: {
		'&.MuiTab-iconWrapper': {
			marginBottom: 0,
			marginRight: '12px'
		}
	},
	'&:hover': {
		opacity: 1,
		background: '##0000000D'
	},
	'&.Mui-selected': {
		color: '#ffffff',
		background: '#1C1C1C',
		rect: { fill: '#FFFFFF', fillOpacity: 1 },
		path: { fillOpacity: 1 }
	}
}))

interface StyledTabProps {
	label: string
	icon: any
}

interface StyledTabsProps {
	children?: React.ReactNode
	value: number
	onChange: (event: React.SyntheticEvent, newValue: number) => void
}

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
								<SettingsTabs orientation='vertical' value={value} onChange={handleChange}>
									<SettingsTab label='Account' icon={<AccountIcon />} {...a11yProps(0)} />
									<SettingsTab label='Assets' icon={<BoxIcon />} {...a11yProps(1)} />
									<SettingsTab label='Social' icon={<ThumbIcon />} {...a11yProps(2)} />
								</SettingsTabs>
							</Box>
						</Grid>
						<Grid item xs={8}>
							<Box padding='32px'>
								<TabPanel value={value} index={0}>
									<Typography fontSize={24} fontWeight={600}>
										ACCOUNT
									</Typography>
									<Divider sx={{ margin: '24px 0px 24px 0px', border: '2px dashed #1C1C1C' }} />
									<FormControl fullWidth>
										<Typography fontWeight={500} fontSize={16} paddingBottom={8}>
											Room name
										</Typography>
										<TextField
											variant='outlined'
											fullWidth
											placeholder='The name you want to give to your room'></TextField>
										<Typography fontWeight={500} fontSize={16} paddingBottom={8} marginTop={24}>
											Select room address
										</Typography>
										<TextField
											InputProps={{
												endAdornment: (
													<IconButton onClick={() => 0}>
														<Pin />
													</IconButton>
												)
											}}
											fullWidth
											placeholder='Select a location for your room'></TextField>
										<Typography fontWeight={500} fontSize={16} paddingBottom={8} marginTop={24}>
											Description (optional)
										</Typography>
										<TextField fullWidth multiline placeholder='Give a description to your room' rows={4}></TextField>
										<Box marginTop={24}>
											<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
												<Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Show my ERC20 assets</Typography>
												<Checkbox />
											</Box>
											<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
												<Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Show my NFT assets</Typography>
												<Checkbox />
											</Box>
											<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
												<Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Get email notifications</Typography>
												<Checkbox />
											</Box>
										</Box>
									</FormControl>
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
