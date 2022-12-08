export function typeWords(type: string) {
	type = type.toLowerCase()

	switch (type) {
		case 'social':
			return 'Chitchatting with friends'
		case 'game playing':
			return 'Playing a game'
		case 'voice chat':
			return 'Voice chatting...'
		case 'music sessions':
			return 'Listening music'
		case 'diy avatar':
			return 'Drawing...'
		case 'key users':
			return 'Reading...'
		case 'web3 projects':
			return 'Building'
		default:
			return 'Brainstorming'
	}
}
