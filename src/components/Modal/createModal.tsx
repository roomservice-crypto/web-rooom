import Modal from '@/components/Modal'

import {
	Box,
	Card,
	Divider,
	FormControl,
	Grid,
	IconButton,
	Step,
	StepConnector,
	StepIconProps,
	StepLabel,
	Stepper,
	TextField,
	Typography,
	stepConnectorClasses,
	styled
} from '@mui/material'
import { Dispatch, useCallback, useEffect, useState } from 'react'
import MetamaskLogo from '@/assets/img/metamask.svg'
import WalletConnectLogo from '@/assets/img/walletconnect.svg'
import CoinbaseLogo from '@/assets/img/coinbasewallet.svg'
import Pin from '@/svgs/location.svg'
import { PrimaryButton } from '@/components/Button'
import { useRouter } from 'next/router'
import useConnectors from '@/hooks/web3/useConnectors'
import { Connector } from '@web3-react/types'
import { useWeb3React } from '@web3-react/core'
import { useSignIn } from '@/hooks/useSignIn'
import SelectLocation from '@/components/Modal/SelectLocationModal'
import { editUserCallback } from '@/utils/userCallback'
import { UserInfo, useEditUserInfo, useUserInfo } from '@/hooks/useUserInfo'

const NumberConnector = styled(StepConnector)(() => ({
	[`&.${stepConnectorClasses.vertical}`]: {
		[`&.${stepConnectorClasses.active}`]: {
			[`& .${stepConnectorClasses.line}`]: {
				borderColor: '#0000001A'
			}
		},
		[`&.${stepConnectorClasses.completed}`]: {
			[`& .${stepConnectorClasses.line}`]: {
				borderColor: '#FAE76C'
			}
		}
	}
}))

const NumberStepIconRoot = styled('div')<{
	ownerState: { completed?: boolean; active?: boolean }
}>(({ ownerState }) => ({
	backgroundColor: '#0000001A',
	zIndex: 1,
	width: 32,
	height: 32,
	display: 'flex',
	borderRadius: '12px',
	justifyContent: 'center',
	alignItems: 'center',
	...(ownerState.active && {
		backgroundColor: '#FAE76C',
		boxShadow: '0 4px 4px 0 rgba(0,0,0,.10)'
	}),
	...(ownerState.completed && {
		backgroundImage: '#FAE76C'
	})
}))

export default function CreateModal({
	isOpen,
	onDismiss,
	info,
	setRefresh
}: {
	info: UserInfo | undefined
	refresh: boolean
	setRefresh: Dispatch<any>
	isOpen: boolean
	onDismiss: () => void
}) {
	// const [open] = useState(true)
	const [mapOpen, setMapOpen] = useState(false)

	// const handleOpen = () => setOpen(true)
	// const handleClose = () => setOpen(false)

	const [activeStep, setActiveStep] = useState(0)
	const [completed, setCompleted] = useState(false)

	const router = useRouter()
	const { account } = useWeb3React()

	const connectors = useConnectors()
	const onActivate = useCallback(async (connector: Connector) => {
		try {
			await connector.activate()
		} catch (error) {
			console.error(error)
		}
	}, [])

	const refreshCb = useCallback(() => {
		setRefresh((prev: boolean) => !prev)
	}, [setRefresh])

	useSignIn(refreshCb)
	const { address, setAddress, bio, setBio, roomName, setRoomName } = useEditUserInfo()

	useEffect(() => {
		if (activeStep === 2) {
			setCompleted(true)
		}
	}, [activeStep])

	useEffect(() => {
		if (account) {
			setActiveStep(1)
		}
	}, [account])

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1)
	}

	// const handleBack = () => {
	// 	setActiveStep(prevActiveStep => prevActiveStep - 1)
	// }

	const handleReset = () => {
		setActiveStep(0)
	}

	const handleDismiss = useCallback(() => {
		onDismiss()
		handleReset()
	}, [onDismiss])

	useEffect(() => {
		if (info && info.roomName) {
			handleDismiss()
		}
	}, [handleDismiss, info, router])

	return (
		<>
			{/* <Box
				sx={{
					height: '100vh',
					backgroundImage: `url(${'/assets/backgroundroom.png'})`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover'
				}}>
				<HeaderBar ready={true} setRoom={() => {}} state={HeaderBarState.mapView} /> */}

			<Modal maxWidth='724px' customIsOpen={isOpen} borderRadius='46px' customOnDismiss={handleDismiss}>
				<Box
					display='flex'
					width='100%'
					sx={{
						maxHeight: '100%',
						backgroundColor: '#F0F0F0',
						justifyContent: 'flex-start',
						// border: '2px solid',
						// borderRadius: '34px',
						overflow: 'auto'
					}}>
					{!completed ? (
						<Grid container>
							<Grid item xs={2}>
								<Box
									sx={{
										height: '100%',
										backgroundColor: 'white',
										borderTopLeftRadius: '34px',
										borderBottomLeftRadius: '34px',
										paddingTop: '36px',
										paddingLeft: '24px'
									}}>
									<Stepper activeStep={activeStep} orientation='vertical' connector={<NumberConnector />}>
										<Step key={1}>
											<StepLabel StepIconComponent={NumberStepIcon}></StepLabel>
										</Step>
										<Step key={2}>
											<StepLabel StepIconComponent={NumberStepIcon}></StepLabel>
										</Step>
									</Stepper>
									{/* <Box
									display='flex'
									sx={{
										justifyContent: 'center',
										alignItems: 'center',
										backgroundColor: '#FAE76C',
										borderRadius: '12px',
										padding: '8px',
										width: '32px',
										height: '32px'
									}}>
									1
								</Box>
								<Box
									display='flex'
									sx={{
										justifyContent: 'center',
										alignItems: 'center',
										backgroundColor: '#FAE76C',
										borderRadius: '12px',
										padding: '8px',
										width: '32px',
										height: '32px'
									}}>
									2
								</Box> */}
								</Box>
							</Grid>
							<Grid item xs={10}>
								{activeStep == 0 && (
									<Box paddingTop={8}>
										<Typography fontSize={24} fontWeight={600} padding={24}>
											CONNECT TO A WALLET
										</Typography>
										<Divider sx={{ margin: '24px', border: '2px dashed #1C1C1C' }} />
										<Grid container spacing={12} padding={24}>
											<Grid item xs={4}>
												<Card
													onClick={() => {
														onActivate(connectors.metaMask)

														// handleNext()
													}}
													sx={{
														cursor: 'pointer',
														display: 'flex',
														alignItems: 'center',
														flexDirection: 'column',
														justifyContent: 'center',
														height: '160px',
														width: '100%',
														borderRadius: '24px',
														border: '2px solid'
													}}>
													<MetamaskLogo />
													<Typography fontSize={14} fontWeight={500}>
														MetaMask
													</Typography>
												</Card>
											</Grid>
											<Grid item xs={4}>
												<Card
													// onClick={() => {
													// 	handleBack()
													// }}
													sx={{
														opacity: 0.5,
														display: 'flex',
														alignItems: 'center',
														flexDirection: 'column',
														justifyContent: 'center',
														height: '160px',
														width: '100%',
														borderRadius: '24px',
														border: '2px solid'
													}}>
													<WalletConnectLogo />
													<Typography fontSize={14} fontWeight={500}>
														Wallet Connect
													</Typography>
												</Card>
											</Grid>
											<Grid item xs={4}>
												<Card
													sx={{
														display: 'flex',
														alignItems: 'center',
														flexDirection: 'column',
														justifyContent: 'center',
														height: '160px',
														width: '100%',
														borderRadius: '24px',
														border: '2px solid',
														opacity: 0.5
													}}>
													<CoinbaseLogo />
													<Typography fontSize={14} fontWeight={500}>
														Coinbase Wallet
													</Typography>
												</Card>
											</Grid>
										</Grid>
									</Box>
								)}
								{activeStep === 1 && (
									<Box paddingTop={8} paddingLeft={24} paddingRight={24}>
										<Typography fontSize={24} fontWeight={600} paddingTop={24}>
											CREATE ROOM
										</Typography>
										<Divider sx={{ margin: '24px 0px 24px 0px', border: '2px dashed #1C1C1C' }} />
										<FormControl fullWidth>
											<Typography fontWeight={500} fontSize={16} paddingBottom={8}>
												Room name
											</Typography>
											<TextField
												value={roomName}
												onChange={e => setRoomName(e.target.value)}
												variant='outlined'
												fullWidth
												placeholder='The name you want to give to your room'></TextField>
											<Typography fontWeight={500} fontSize={16} paddingBottom={8} marginTop={24}>
												Select room address
											</Typography>
											<TextField
												disabled
												value={address?.toString()}
												InputProps={{
													endAdornment: (
														<IconButton
															onClick={() => {
																setMapOpen(true)
															}}>
															<Pin />
														</IconButton>
													)
												}}
												fullWidth
												placeholder='Select a location for your room'></TextField>
											<Typography fontWeight={500} fontSize={16} paddingBottom={8} marginTop={24}>
												Description (optional){' '}
											</Typography>
											<TextField
												fullWidth
												multiline
												placeholder='Give a description to your room'
												rows={4}
												value={bio}
												onChange={e => setBio(e.target.value)}></TextField>
											<PrimaryButton
												bgClass='bg-[transparent]'
												disabled={!bio || !roomName || !address}
												onClick={() => {
													if (!bio || !roomName || !address) return
													editUserCallback({
														bio,
														address,
														roomName
													})
													handleNext()
												}}
												style={{ marginTop: '20px', marginBottom: '48px' }}>
												Create
											</PrimaryButton>
										</FormControl>
									</Box>
								)}
							</Grid>
						</Grid>
					) : (
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								padding: '48px 32px 32px 32px',
								alignItems: 'center'
							}}>
							<Typography fontWeight={800} fontSize={24} paddingBottom={16}>
								🎉
							</Typography>
							<Typography fontWeight={800} fontSize={24} paddingBottom={16}>
								Congratulations, the room was created successfully!
							</Typography>
							<Typography fontWeight={400} fontSize={16} color='#00000066'>
								Next, you can choose to complete your information and let others know you, or you can decorate your room
								first
							</Typography>
							<PrimaryButton
								onClick={() => router.push('/room/myroom')}
								bgClass='bg-[transparent]'
								style={{ marginTop: '24px', marginBottom: '16px' }}
								variant='outlined'>
								Start decorating the room
							</PrimaryButton>
							<Typography
								onClick={() => {
									0
								}}
								fontWeight={500}
								fontSize={14}
								color='#00000066'>
								Maybe later
							</Typography>
						</Box>
					)}
				</Box>
			</Modal>
			{/* </Box> */}
			<SelectLocation
				setLocation={setAddress}
				isOpen={mapOpen}
				onDismiss={() => {
					setMapOpen(false)
				}}
			/>
		</>
	)
}

function NumberStepIcon(props: StepIconProps) {
	const { active, completed, className } = props

	const icons: { [index: string]: number } = {
		1: 1,
		2: 2
	}

	return (
		<NumberStepIconRoot ownerState={{ completed, active }} className={className}>
			{icons[String(props.icon)]}
		</NumberStepIconRoot>
	)
}
