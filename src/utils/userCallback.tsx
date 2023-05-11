import { Axios } from '@/utils/axios'

export const editUserCallback = (arg: {
	bio: string
	address?: [number, number]
	roomName: string
	emailNotify?: boolean
	showErc20?: boolean
	showNft?: boolean
	avatar?: string
}) => {
	return Axios.post('/user/edit', {
		avatar: arg.avatar,
		bio: arg.bio,
		getEmailNotify: !!arg.emailNotify,
		roomName: arg.roomName,
		showERC20: !!arg.showErc20,
		showNFT: !!arg.showNft,
		...(arg.address
			? {
					x: arg.address[0],
					y: arg.address[1]
			  }
			: {})
	})
}
