import React from 'react'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'

export default function TransitionBadge(
	props: React.PropsWithChildren & {
		show: boolean
		appear?: boolean
		className?: string
		toClassName?: string
		fromClassName?: string
	}
) {
	return (
		<Transition
			show={props.show}
			appear={props.appear}
			enter={clsx('duration-150')}
			enterFrom={clsx('opacity-0', props.fromClassName)}
			enterTo={clsx('opacity-100', props.toClassName)}
			leave={clsx('duration-150')}
			leaveFrom={clsx('opacity-100', props.toClassName)}
			leaveTo={clsx('opacity-0', props.fromClassName)}
			className={clsx(props.className)}>
			{props.children}
		</Transition>
	)
}
