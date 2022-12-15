import Book from '@/svgs/state/book.svg'
import Draw from '@/svgs/state/draw.svg'
import Fire from '@/svgs/state/fire.svg'
import Game from '@/svgs/state/game.svg'
import Gear from '@/svgs/state/gear.svg'
import Music from '@/svgs/state/music.svg'
import Voice from '@/svgs/state/voice.svg'
import Meeting from '@/svgs/state/meeting.svg'

export default function StateIcon(props: { type: string; className?: string }) {
	let { type, className } = props

	type = type.toLowerCase()

	switch (type) {
		case 'social':
			return <Meeting className={className} />
		case 'game playing':
			return <Game className={className} />
		case 'voice chat':
			return <Voice className={className} />
		case 'music sessions':
			return <Music className={className} />
		case 'diy avatar':
			return <Draw className={className} />
		case 'key users':
			return <Book className={className} />
		case 'web3 projects':
			return <Gear className={className} />
		default:
			return <Fire className={className} />
	}
}
