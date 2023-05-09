import React from 'react'
import { Dialog, useTheme, Box, Slide, Fade, SlideProps, FadeProps } from '@mui/material'
import useModal from '@/hooks/useModal'
import { useRef } from 'react'
import useBreakpoint from '@/hooks/useBreakpoint'
import { BackBtn, CloseIcon } from '../Button'

interface Props {
	children?: React.ReactNode
	onBack?: () => void
	closeIcon?: boolean
	width?: string
	maxWidth?: string
	isCardOnMobile?: boolean
	customIsOpen?: boolean
	customOnDismiss?: () => void
	padding?: string
	hasBorder?: boolean
	borderRadius?: string
	borderColor?: string
	background?: string
	height?: string
	backdropColor?: string
	closeVariant?: 'button' | 'plain'
}

const Transition = React.forwardRef<unknown, SlideProps | FadeProps>(function Transition(props, ref) {
	const isDownSm = useBreakpoint()
	return isDownSm ? <Slide direction='up' ref={ref} {...props} /> : <Fade ref={ref} {...props} />
})

export default function Modal(props: Props) {
	const {
		children,
		onBack,
		closeIcon,
		isCardOnMobile,
		customIsOpen,
		customOnDismiss,
		hasBorder = true,
		borderRadius,
		width,
		maxWidth,
		padding,
		background,
		height,
		backdropColor,
		closeVariant
	} = props
	const { isOpen, hideModal } = useModal()
	const node = useRef<any>()
	const theme = useTheme()
	const hide = customOnDismiss ? customOnDismiss : hideModal

	return (
		<>
			<Dialog
				open={customIsOpen !== undefined ? !!customIsOpen : isOpen}
				sx={{
					'& *': {
						boxSizing: 'border-box'
					},
					'& .MuiDialog-container ': {
						alignItems: { xs: !isCardOnMobile ? 'flex-end' : 'center', sm: 'center' }
					},
					margin: '0 16px'
				}}
				TransitionComponent={Transition}
				PaperProps={{
					ref: node,
					sx: {
						...{
							width: { xs: 'calc(100vw - 32px)!important', sm: width || 488 },
							maxWidth,
							background: theme => background ?? theme.palette.background.paper,
							border: hasBorder ? '12px solid #FAE76C' : '1px solid transparent',
							boxShadow: 'unset',
							padding: 0,
							height: height || 'unset',
							boxSizing: 'border-box',
							borderRadius: borderRadius || '12px',
							outline: '2px solid',
							marginBottom: { xs: 0, sm: '10vh' },
							overflowX: 'hidden',
							overflowY: 'auto',
							position: 'absolute',
							maxHeight: theme => `calc(100vh - ${theme.height.header})`
						},
						...(!isCardOnMobile
							? {
									[theme.breakpoints.down('sm')]: {
										width: '100%!important',
										maxWidth: 'unset!important',
										maxHeight: `calc(100vh - ${theme.height.mobileHeader})`,
										height: height || 'auto',
										borderRadius: '46px',
										marginTop: theme.height.mobileHeader,
										marginBottom: 0,
										// border: 'none',
										// boxShadow: 'none',
										background: 'transparent',
										mb: '50px'
										// pt: '10px'
									}
							  }
							: { [theme.breakpoints.down('sm')]: { margin: 0, pb: '20px', borderRadius: '0' } })
					}
				}}
				BackdropProps={{
					sx: {
						...{
							backgroundColor: backdropColor || 'rgba(0,0,0,0.6)',
							[theme.breakpoints.down('sm')]: { top: theme.height.mobileHeader }
						}
					}
				}}
				onClose={hide}>
				<Box width='100%' height='100%' position='relative' padding={padding || 0} sx={{ overflowY: 'auto' }}>
					{onBack && (
						<BackBtn
							onClick={onBack}
							sx={{
								position: 'absolute',
								top: 24,
								left: 32
							}}
						/>
					)}
					{closeIcon && (
						<CloseIcon
							onClick={hide}
							variant={closeVariant}
							sx={{
								'& svg': { fill: '#1c1c1c' },
								zIndex: 2,
								position: 'absolute',
								top: {
									xs: 20,
									md: closeVariant === 'plain' ? 20 : 24
								},
								right: {
									xs: 20,
									md: closeVariant === 'plain' ? 20 : 32
								}
							}}
						/>
					)}
					{children}
				</Box>
			</Dialog>
		</>
	)
}
