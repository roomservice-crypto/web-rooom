import Voice from '@/svgs/type/voice.svg'
import Social from '@/svgs/type/social.svg'
import Game from '@/svgs/type/game.svg'
import Music from '@/svgs/type/music.svg'
import DIY from '@/svgs/type/diy.svg'
import Key from '@/svgs/type/key.svg'
import Web3 from '@/svgs/type/web3.svg'

export default function TypeIcon(props: { type: string; className?: string }) {
	let { type, className } = props

	type = type.toLowerCase()

	switch (type) {
		case 'social':
			return <Social className={className} />
		case 'game playing':
			return <Game className={className} />
		case 'voice chat':
			return <Voice className={className} />
		case 'music sessions':
			return <Music className={className} />
		case 'diy avatar':
			return <DIY className={className} />
		case 'key users':
			return <Key className={className} />
		case 'web3 projects':
			return <Web3 className={className} />
		default:
			return <Web3 className={className} />
	}
}
