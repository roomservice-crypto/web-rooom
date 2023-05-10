import { Axios, ResponseType } from '@/utils/axios'
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
}

export function useUserInfo(refresh?: number) {
	const [loading, setLoading] = useState<undefined | boolean>(undefined)
	const [info, setInfo] = useState<undefined | UserInfo>(undefined)
	const { account } = useWeb3React()

	useEffect(() => {
		if (!account) {
			setInfo(undefined)
			return
		}
		setLoading(true)
		Axios.get<ResponseType<UserInfo>>('/user/info', { account })
			.then(r => {
				if (r.data.code === 200) {
					setInfo(r.data.data)
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

		// Axios.get()
	}, [account, refresh])

	return { info, loading }
}

export function useEditUserInfo() {
	const { account } = useWeb3React()
	const [address, setAddress] = useState<[number, number] | undefined>(undefined)
	const [bio, setBio] = useState('')
	const [roomName, setRoomName] = useState('')
	const [showErc20, setShowErc20] = useState(false)
	const [showNft, setShowNft] = useState(false)
	const [emailNotify, setEmailNotify] = useState(false)
	const [infoFlag, setInfoFlag] = useState(0)

	const { info: prevInfo } = useUserInfo(infoFlag)

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
					setInfoFlag(prev => prev++)
				}
			})
			.catch(e => {
				console.error(e)
			})
	}, [address, bio, emailNotify, roomName, showErc20, showNft])

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
		editUserInfo
	}
}
