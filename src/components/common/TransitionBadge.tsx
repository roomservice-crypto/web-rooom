import React from 'react'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'

export default function TransitionBadge(
	props: React.PropsWithChildren & {
		show: boolean
		appear?: boolean
		toClassName?: string
		fromClassName?: string
	}
) {
	return (
		<Transition
			as={React.Fragment}
			show={props.show}
			appear={props.appear}
			enterFrom={clsx('opacity-0', props.fromClassName)}
			enterTo={clsx('opacity-100', props.toClassName)}
			leaveFrom={clsx('opacity-100', props.toClassName)}
			leaveTo={clsx('opacity-0', props.fromClassName)}>
			{props.children}
		</Transition>
	)
}
