import { Box, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

// eslint-disable-next-line no-unused-vars
export default function Dropzone({ title, onUploadSrc }: { title: string; onUploadSrc: (url: FormData) => void }) {
	const [files, setFiles] = useState<any[]>([])

	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			setFiles(
				acceptedFiles.map(file =>
					Object.assign(file, {
						preview: URL.createObjectURL(file)
					})
				)
			)

			const formData = new FormData()
			formData.append('file', acceptedFiles[0])

			onUploadSrc(formData)
		},
		[onUploadSrc]
	)

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: { 'image/*': ['.png', '.gif', '.jpeg', '.jpg'] },
		maxFiles: 1
	})

	return (
		<Box
			{...getRootProps()}
			sx={{
				width: '100%',
				height: '100%',
				borderRadius: 2.2,
				position: 'relative',
				'& img': { width: '100%', height: '100%', objectFit: 'cover', zIndex: 2 }
			}}>
			<input {...getInputProps()} />

			<Box
				position='absolute'
				zIndex={2}
				sx={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
				display='flex'
				justifyContent={'center'}
				alignItems='center'
				flexDirection={'column'}
				fontSize={14}
				fontWeight={500}>
				<Typography fontSize={20} fontWeight={700} whiteSpace='nowrap' color='#000000' textAlign={'center'}>
					{title}
				</Typography>
				<Typography mt={36}>PNG, GIF, JPEG, JPG</Typography>
				<Typography>Max 3mb</Typography>

				{files[0] && (
					<img
						id='file-upload'
						src={files[0].preview}
						style={{ height: '100px', width: '100px', objectFit: 'cover', borderRadius: '50%', marginTop: 20 }}
					/>
				)}
			</Box>
		</Box>
	)
}
