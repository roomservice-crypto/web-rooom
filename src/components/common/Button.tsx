import clsx from 'clsx'
import ArrowRight from '@/svgs/arrow-right.svg'

export default function Button(props: React.PropsWithChildren & { className: string; light?: boolean }) {
	return (
		<button className={clsx('button', props.light ? 'bg-[#FEFBF2]' : 'bg-primary-500', props.className)}>
			{props.children}
			<ArrowRight className='ml-3' />
		</button>
	)
}
