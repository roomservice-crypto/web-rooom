import { Axios } from '@/utils/axios'

export const editUserCallback = (arg: { bio: string; address: [number, number]; roomName: string }) => {
	Axios.post('/user/edit', {
		avatar: '',
		bio: arg.bio,
		getEmailNotify: true,
		roomAddr: arg.address.toString(),
		roomName: arg.roomName,
		showERC20: true,
		showNFT: true
	})
}
