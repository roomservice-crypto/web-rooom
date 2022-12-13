import rooms from '@/mock/rooms.json'

const KEY_LOCAL_ROOMS = 'rooms'

type Key = typeof KEY_LOCAL_ROOMS

const setStorage = (key: Key, value: string) => {
	window.localStorage.setItem(key, value)
}

const getStorage = (key: Key) => {
	if (typeof window !== 'undefined') return window.localStorage.getItem(key)
}

let roomsStore: any[] | null = null
let dirtyOfRoomsStore = true
export function getRooms() {
	if (dirtyOfRoomsStore || !roomsStore) {
		let localRoomsString = getStorage(KEY_LOCAL_ROOMS)
		let localRooms: any[] = []
		if (localRoomsString) localRooms = JSON.parse(localRoomsString)
		roomsStore = rooms.concat(localRooms)
		dirtyOfRoomsStore = false
	}
	return roomsStore
}
export function addRoom(room: any) {
	let localRoomsString = getStorage(KEY_LOCAL_ROOMS)
	let localRooms: any[] = []
	if (localRoomsString) localRooms = JSON.parse(localRoomsString)

	localRooms.push(room)
	dirtyOfRoomsStore = true

	setStorage(KEY_LOCAL_ROOMS, JSON.stringify(localRooms))
}
