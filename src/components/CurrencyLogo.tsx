import React, { useMemo } from 'react'
import ETH from '@/svgs/currency/ETH.svg'
import BTC from '@/svgs/currency/BTC.svg'
import USDT from '@/svgs/currency/USDT.svg'
import USDC from '@/svgs/currency/USDC.svg'

import { Box } from '@mui/material'

export const getTokenLogoURL = (address: string) => {
	return `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`
}

function Logo({ currency, style }: { currency?: string; style?: React.CSSProperties }) {
	switch (currency) {
		case 'BTC': {
			return <BTC style={style} />
		}
		case 'ETH': {
			return <ETH style={style} />
		}
		case 'USDT': {
			return <USDT style={style} />
		}
		case 'USDC': {
			return <USDC style={style} />
		}
		default: {
			return <BTC style={style} />
		}
	}
}

export default function CurrencyLogo({
	currency,
	size = '40px',
	style,
	text
}: {
	currency?: string
	size?: string
	style?: React.CSSProperties
	text?: string
}) {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: { size }, height: { size } }}>
			<Logo currency={currency} style={{ marginRight: 10 }} /> {text}
		</Box>
	)
}
