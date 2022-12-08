import Book from '@/svgs/state/book.svg'
import Draw from '@/svgs/state/draw.svg'
import Fire from '@/svgs/state/fire.svg'
import Game from '@/svgs/state/game.svg'
import Gear from '@/svgs/state/gear.svg'
import Music from '@/svgs/state/music.svg'
import Voice from '@/svgs/state/voice.svg'
import Meeting from '@/svgs/state/meeting.svg'

export default function StateIcon(props: { type: string }) {
	let { type } = props

	type = type.toLowerCase()

	switch (type) {
		case 'social':
			return <Meeting />
		case 'game playing':
			return <Game />
		case 'voice chat':
			return <Voice />
		case 'music sessions':
			return <Music />
		case 'diy avatar':
			return <Draw />
		case 'key users':
			return <Book />
		case 'web3 projects':
			return <Gear />
		default:
			return <Fire />
	}
}
