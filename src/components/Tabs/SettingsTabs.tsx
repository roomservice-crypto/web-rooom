import React from 'react'
import { Box, Divider, Tab, Tabs, Typography, styled } from '@mui/material'

interface StyledTabProps {
	label: string
	icon: any
}

// interface StyledTabsProps {
// 	children?: React.ReactNode
// 	value: number
// 	onChange: (event: React.SyntheticEvent, newValue: number) => void
// }

export const SettingsTabs = styled(Tabs)({
	'& .MuiTabs-indicator': {
		display: 'none'
	}
})

export const SettingsTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
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

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
	divider?: boolean
}

export function TabPanel(props: TabPanelProps & { label: string }) {
	const { children, value, index, label, divider, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ p: '20px 10px' }}>
					<Typography fontSize={20} fontWeight={600}>
						{label}
					</Typography>
					{divider && <Divider sx={{ margin: '20px 0px 28px', border: '1px dashed #1C1C1C50' }} />}
					<Typography component={'div'}>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

export function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`
	}
}
