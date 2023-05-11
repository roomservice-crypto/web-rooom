import { Axios, BASE_URL, ResponseType } from '@/utils/axios'
import { editUserCallback } from '@/utils/userCallback'
import { useWeb3React } from '@web3-react/core'
import { useCallback, useEffect, useState } from 'react'

export interface UserInfo {
	account?: string
	avatar?: string
	bio: string
	fansCount?: number
	followCount?: number
	getEmailNotify: boolean
	likesCount?: number
	roomAddr: string
	roomName: string
	showERC20: boolean
	showNFT: boolean
	userId?: number
	x: number
	y: number
	websiteUrl: string
	discordUrl: string
	telegramUrl: string
}

export function useUserInfo(refresh?: boolean | number) {
	const [loading, setLoading] = useState<undefined | boolean>(undefined)
	const [info, setInfo] = useState<undefined | UserInfo>(undefined)
	const { account } = useWeb3React()

	useEffect(() => {
		setLoading(true)
		Axios.get<ResponseType<UserInfo>>('/user/info', { account: account ? account : 'NULL' })
			.then(r => {
				if (r.data.code === 200) {
					setInfo(
						r.data.data.avatar === ''
							? r.data.data
							: { ...r.data.data, avatar: `${BASE_URL.slice(0, -5)}${r.data.data.avatar}` }
					)
				}
				setTimeout(() => {
					setLoading(false)
				}, 1500)
			})
			.catch(e => {
				console.error(e)
				setTimeout(() => {
					setLoading(false)
				}, 1500)
			})
	}, [account, refresh])

	return { info, loading }
}

export function useEditUserInfo(prevInfo?: UserInfo | undefined, cb?: () => void) {
	const { account } = useWeb3React()
	const [address, setAddress] = useState<[number, number] | undefined>(undefined)
	const [bio, setBio] = useState('')
	const [roomName, setRoomName] = useState('')

	const [websiteUrl, setWebsiteUrl] = useState('')
	const [discordUrl, setDiscordUrl] = useState('')
	const [telegramUrl, setTelegramUrl] = useState('')

	const [showErc20, setShowErc20] = useState(false)
	const [showNft, setShowNft] = useState(false)
	const [emailNotify, setEmailNotify] = useState(false)

	useEffect(() => {
		if (!prevInfo) return
		setAddress([prevInfo.x, prevInfo.y])
		setBio(prevInfo.bio)
		setRoomName(prevInfo?.roomName)
		setShowErc20(prevInfo.showERC20)
		setShowNft(prevInfo.showNFT)
		setEmailNotify(prevInfo.getEmailNotify)
	}, [prevInfo])

	useEffect(() => {
		if (!account) {
			setAddress(undefined)
			setBio('')
			setRoomName('')
			setShowErc20(false)
			setShowNft(false)
			setEmailNotify(false)
		}
	}, [account])

	const editUserInfo = useCallback(() => {
		editUserCallback({
			bio,
			address,
			roomName,
			emailNotify: !!emailNotify,
			showErc20: !!showErc20,
			showNft: !!showNft
		})
			.then(r => {
				if (r.data.code === 200) {
					// setInfoFlag(prev => prev + 1)
					cb && cb()
				}
			})
			.catch(e => {
				console.error(e)
			})
	}, [address, bio, cb, emailNotify, roomName, showErc20, showNft])

	return {
		address,
		setAddress,
		bio,
		setBio,
		roomName,
		setRoomName,
		showErc20,
		showNft,
		setShowErc20,
		setShowNft,
		emailNotify,
		setEmailNotify,
		editUserInfo,
		websiteUrl,
		setWebsiteUrl,
		discordUrl,
		setDiscordUrl,
		telegramUrl,
		setTelegramUrl
	}
}
