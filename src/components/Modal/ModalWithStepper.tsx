import Modal from '@/components/Modal'
import React from 'react'
import {
	Box,
	Grid,
	Step,
	StepConnector,
	StepIconProps,
	StepLabel,
	Stepper,
	stepConnectorClasses,
	styled
} from '@mui/material'
import { useCallback } from 'react'

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

export default function ModalWithStepper({
	isOpen,
	onDismiss,
	children,
	activeStep
}: {
	isOpen: boolean
	onDismiss: () => void
	children: React.ReactNode
	activeStep: number //start from 0
}) {
	const handleDismiss = useCallback(() => {
		onDismiss()
	}, [onDismiss])

	return (
		<>
			<Modal maxWidth='724px' customIsOpen={isOpen} borderRadius='46px' customOnDismiss={handleDismiss}>
				<Box
					display='flex'
					width='100%'
					sx={{
						maxHeight: '100%',
						backgroundColor: '#F0F0F0',
						justifyContent: 'flex-start',
						overflow: 'auto'
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
								<Stepper activeStep={activeStep} orientation='vertical' connector={<NumberConnector />}>
									<Step key={1}>
										<StepLabel StepIconComponent={NumberStepIcon}></StepLabel>
									</Step>
									<Step key={2}>
										<StepLabel StepIconComponent={NumberStepIcon}></StepLabel>
									</Step>
									<Step key={3}>
										<StepLabel StepIconComponent={NumberStepIcon}></StepLabel>
									</Step>
								</Stepper>
							</Box>
						</Grid>
						<Grid item xs={10}>
							{children}
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</>
	)
}

function NumberStepIcon(props: StepIconProps) {
	const { active, completed, className } = props

	return (
		<NumberStepIconRoot ownerState={{ completed, active }} className={className}>
			{String(props.icon)}
		</NumberStepIconRoot>
	)
}
