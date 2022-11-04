import Scene from '@/components/test/Scene'
import { useEffect, useState } from 'react'

export default function Test() {
	const [isWindow, setIsWindow] = useState(false)

	useEffect(() => setIsWindow(true))

	return isWindow ? <Scene /> : <div>Test Sence</div>
}
