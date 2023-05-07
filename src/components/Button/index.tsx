import React from 'react'
import MuiCloseIcon from '@mui/icons-material/Close'
import { IconButton, useTheme, ButtonBase, ButtonProps } from '@mui/material'
import { SxProps } from '@mui/system'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import clsx from 'clsx'

export function BackBtn({ onClick, sx }: { onClick?: () => void; sx?: SxProps }) {
	return (
		<IconButton
			onClick={onClick}
			sx={{
				padding: 0,
				width: { xs: 32, md: 52 },
				height: { xs: 32, md: 52 },
				background: theme => theme.palette.background.default,
				borderRadius: '8px',
				...sx
			}}>
			<ArrowBackIosNewIcon sx={{ color: theme => theme.palette.grey[500], size: 13 }} />
		</IconButton>
	)
}

export function CloseIcon({
	onClick,
	variant = 'button',
	sx
}: {
	onClick?: () => void
	variant?: 'button' | 'plain'
	sx?: SxProps
}) {
	const theme = useTheme()

	if (variant === 'plain') {
		return (
			<ButtonBase onClick={onClick} sx={{ position: 'absolute', ...sx }}>
				<MuiCloseIcon
					sx={{ fontSize: 20, color: theme.palette.text.secondary, '&:hover': { color: theme.palette.text.primary } }}
				/>
			</ButtonBase>
		)
	}

	return (
		<IconButton
			onClick={onClick}
			sx={{
				padding: 0,
				position: 'absolute',
				background: theme.palette.background.default,
				borderRadius: '8px',
				width: { xs: 32, md: 52 },
				height: { xs: 32, md: 52 },
				border: '1px solid transparent',
				'&:hover': {
					borderColor: '#000000'
				},
				...sx
			}}>
			<MuiCloseIcon sx={{ fontSize: 20, color: theme.palette.text.secondary }} />
		</IconButton>
	)
}

export function PrimaryButton(props: { children: React.ReactNode; bg?: string } & ButtonProps) {
	const { children, bg, ...btnProps } = props
	return (
		<button
			{...btnProps}
			className={clsx(
				'ba flex h-[74px] flex-1 items-center justify-center gap-x-4 rounded-[24px] border-2  border-[#1c1c1c] py-6 px-6 text-center text-xl font-semibold leading-[26px] shadow-[0_4px_#141414] transition-all hover:bg-black hover:bg-opacity-10 hover:shadow-none',
				bg ? `bg-[${bg}]` : 'bg-[#FAE76C]'
			)}>
			{children}
		</button>
	)
}
