import Modal from '@/components/Modal'
import HeaderBar from '@/components/map/HeaderBar'
import {
	Box,
	Dialog,
	Divider,
	Grid,
	Step,
	StepIcon,
	StepIconProps,
	StepLabel,
	Stepper,
	Typography
} from '@mui/material'
import { ReactElement, useState } from 'react'
import MetamaskLogo from '@/assets/img/metamask.svg'
import WalletConnectLogo from '@/assets/img/walletconnect.svg'
import CoinbaseLogo from '@/assets/img/coinbasewallet.svg'
import Roombackground from '@/assets/img/backgroundroom.png'

declare const window: {
	ethereum?: any
} & Window

export default function Create() {
	const [room, setRoom] = useState<null | any>(null)
	const [ready, setReady] = useState(true)

	const [open, setOpen] = useState(true)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const [activeStep, setActiveStep] = useState(0)

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1)
	}

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1)
	}

	const handleReset = () => {
		setActiveStep(0)
	}

	function NumberStepIcon(props: StepIconProps) {
		const { active, completed, className } = props

		const icons: { [index: string]: ReactElement } = {
			1: <MetamaskLogo />,
			2: <CoinbaseLogo />
		}

		return icons[String(props.icon)]
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

			<Modal maxWidth='724px' customIsOpen={open} borderRadius='46px' height='400px'>
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
								<Stepper activeStep={activeStep} orientation='vertical'>
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
							<Box paddingTop={8}>
								<Typography fontSize={24} fontWeight={600} padding={24}>
									CONNECT TO A WALLET
								</Typography>
								<Divider sx={{ margin: '24px', border: '2px dashed #1C1C1C' }} />
								<Grid container spacing={12} padding={24}>
									<Grid item xs={4}>
										<Box
											display='flex'
											sx={{
												alignItems: 'center',
												flexDirection: 'column',
												justifyContent: 'center',
												height: '180px',
												width: '180px',
												borderRadius: '24px',
												border: '2px solid'
											}}>
											<MetamaskLogo />
											<Typography fontSize={14} fontWeight={500}>
												MetaMask
											</Typography>
										</Box>
									</Grid>
									<Grid item xs={4}>
										<Box
											display='flex'
											sx={{
												alignItems: 'center',
												flexDirection: 'column',
												justifyContent: 'center',
												height: '180px',
												width: '180px',
												borderRadius: '24px',
												border: '2px solid'
											}}>
											<WalletConnectLogo />
											<Typography fontSize={14} fontWeight={500}>
												Wallet Connect
											</Typography>
										</Box>
									</Grid>
									<Grid item xs={4}>
										<Box
											display='flex'
											sx={{
												alignItems: 'center',
												flexDirection: 'column',
												justifyContent: 'center',
												height: '180px',
												width: '180px',
												borderRadius: '24px',
												border: '2px solid'
											}}>
											<CoinbaseLogo />
											<Typography fontSize={14} fontWeight={500}>
												Coinbase Wallet
											</Typography>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</Box>
	)
}
