import { Box, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import Modal from '.'
import { useCallback, useEffect, useState } from 'react'
import { PrimaryButton } from '../Button'
import useModal from '@/hooks/useModal'
import { Axios } from '@/utils/axios'

const testNftData = [
	{
		imageURL: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		collectionName: 'My Collection',
		name: 'My NFT',
		tokenId: '1234',
		contract: ''
	},
	{
		imageURL: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		collectionName: 'My Collection',
		name: 'Another NFT',
		tokenId: '5678',
		contract: ''
	},
	{
		imageURL: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		collectionName: 'My Collection',
		name: 'My NFT',
		tokenId: '12341',
		contract: ''
	},
	{
		imageURL: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		collectionName: 'My Collection',
		name: 'Another NFT',
		tokenId: '56782',
		contract: ''
	},
	{
		imageURL: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		collectionName: 'My Collection',
		name: 'My NFT',
		tokenId: '12343',
		contract: ''
	},
	{
		imageURL: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		collectionName: 'My Collection',
		name: 'Another NFT',
		tokenId: '56784',
		contract: ''
	}
]

export default function SelectNftModal({ photoBoxId }: { photoBoxId: string | number }) {
	const [nftData, setNftData] = useState<any[]>([])
	const [selectedNft, setSelectedNft] = useState<any>(undefined)

	const { hideModal } = useModal()

	const handleSelectNftFac = useCallback((data: any) => {
		return () => {
			setSelectedNft(data)
		}
	}, [])

	const handleSave = useCallback(async () => {
		if (!selectedNft) return
		try {
			const r = await Axios.post('/user/nft/edit', {
				contract: selectedNft.contract,
				nftImg: selectedNft.imageURL,
				nftName: selectedNft.name,
				standard: '',
				tokenId: selectedNft.tokenId
			})

			const el = document.getElementById('untiyweb')

			const w = el as HTMLIFrameElement
			w.contentWindow?.postMessage(
				JSON.stringify({ eventType: 'nft_refresh', PhotoBoxId: photoBoxId, nft_url: selectedNft.imageURL }),
				'*'
			)

			hideModal()
		} catch (e) {
			console.error('select nft error:', e)
		}
	}, [hideModal, photoBoxId, selectedNft])

	return (
		<Modal borderRadius='46px' closeIcon customOnDismiss={hideModal}>
			<Box sx={{ borderRadius: '22px', backgroundColor: '#ffffff', minHeight: 600, padding: '40px 20px 20px' }}>
				<Typography fontSize={32} fontWeight={700}>
					Select Nft
				</Typography>
				<ImageList
					gap={15}
					cols={3}
					sx={{
						padding: '24px 0 40px',
						width: '100%',
						height: '100%',
						scrollbarWidth: 'thin',
						'&::-webkit-scrollbar': {
							width: 8,
							height: 8
						},
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: 'rgba(0, 0, 0, 0.4)',
							borderRadius: 8
						},
						'&::-webkit-scrollbar-track': {
							backgroundColor: 'transparent'
						}
					}}>
					{testNftData.map((item, index) => (
						<ImageListItem
							onClick={handleSelectNftFac(item)}
							key={item.contract + item.tokenId + index}
							className={
								selectedNft?.contract === item.contract && selectedNft?.tokenId === item.tokenId ? 'selected' : ''
							}
							sx={{
								borderRadius: '16px',
								overflow: 'hidden',
								border: '2px solid #1c1c1c',
								boxShadow: '0px 4px 0px 0px #141414, 0px 6px 0px 0px #0000001A inset',
								'&:hover, &.selected': {
									background: '#FAE76C',
									cursor: 'pointer'
								},
								'&:active': {
									boxShadow: 'none'
								}
							}}>
							<img
								key={item.contract + item.tokenId + index}
								// src={`${item.gatewayImageURL}?w=248&fit=crop&auto=format`}
								srcSet={`${item.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
								loading='lazy'
								style={{ width: '100%', height: '144px', objectFit: 'cover' }}
							/>
							<ImageListItemBar
								key={index + 'item'}
								sx={{
									fontWeight: 700,
									fontSize: 14,
									'& .MuiImageListItemBar': {
										whiteSpace: 'pre-wrap'
									},
									padding: '2px 8px'
								}}
								title={item.collectionName + ' - ' + item.name}
								subtitle={<span># {item.tokenId}</span>}
								position='below'
							/>
						</ImageListItem>
					))}
				</ImageList>
				<PrimaryButton style={{ width: '100%' }} onClick={handleSave}>
					SAVE
				</PrimaryButton>
			</Box>
		</Modal>
	)
}
