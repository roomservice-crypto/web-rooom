import { Box, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import Modal from '.'
import { useState } from 'react'

const testNftData = [
	{
		imageURL: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		collectionName: 'My Collection',
		name: 'My NFT',
		tokenId: '1234'
	},
	{
		imageURL: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		collectionName: 'My Collection',
		name: 'Another NFT',
		tokenId: '5678'
	},
	{
		imageURL: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		collectionName: 'My Collection',
		name: 'My NFT',
		tokenId: '1234'
	},
	{
		imageURL: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		collectionName: 'My Collection',
		name: 'Another NFT',
		tokenId: '5678'
	},
	{
		imageURL: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		collectionName: 'My Collection',
		name: 'My NFT',
		tokenId: '1234'
	},
	{
		imageURL: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		collectionName: 'My Collection',
		name: 'Another NFT',
		tokenId: '5678'
	}
]

export default function SelectNftModal({ isOpen, onDismiss }: { isOpen: boolean; onDismiss: () => void }) {
	const [nftData, setNftData] = useState<any[]>([])

	return (
		<Modal customIsOpen={isOpen} borderRadius='46px' customOnDismiss={onDismiss} closeIcon>
			<Box sx={{ borderRadius: '22px', backgroundColor: '#ffffff', minHeight: 600, padding: '40px 20px 20px' }}>
				<Typography fontSize={32} fontWeight={700}>
					Select Nft
				</Typography>
				<ImageList
					cols={3}
					sx={{
						padding: '24px 30px 24px 30px',
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
					{testNftData.map(item => (
						<ImageListItem key={item.id}>
							<img
								src={`${item.gatewayImageURL}?w=248&fit=crop&auto=format`}
								srcSet={`${item.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
								loading='lazy'
								style={{ borderRadius: '22px', width: '144px', height: '144px' }}
							/>
							<ImageListItemBar
								title={item.collectionName + ' - ' + item.name}
								subtitle={<span># {item.tokenId}</span>}
								position='below'
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Box>
		</Modal>
	)
}
