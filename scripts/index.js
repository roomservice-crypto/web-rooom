// generate rooms

const example = require('./rooms-location.json')

const fs = require('node:fs')
const path = require('node:path')
const csv = require('csvtojson')
const { rando } = require('@nastyox/rando.js')
const { Wallet } = require('ethers')

const VISITORS = [
	'https://i.postimg.cc/0yVghrmd/avatar-en-6.png',
	'https://i.postimg.cc/j2y01XQL/avatar-en-7.png',
	'https://i.postimg.cc/4NbRbWx0/avatar-en-8.png',
	'https://i.postimg.cc/YCqZNkV4/avatar-en-9.png',
	'https://i.postimg.cc/15SLtDrr/avatar-en-11.png',
	'https://i.postimg.cc/HLFNCML5/avatar-en-12.png',
	'https://i.postimg.cc/qvbYjSV1/avatar-en-13.png',
	'https://i.postimg.cc/FKY6qphN/avatar-en-14.png',
	'https://i.postimg.cc/Hn9v5P94/avatar-en-15.png',
	'https://i.postimg.cc/yxHrDzc8/avatar-en-16.png',
	'https://i.postimg.cc/dtnSVp1J/avatar-en-17.png',
	'https://i.postimg.cc/g2JtXsX8/avatar-en-18.png',
	'https://i.postimg.cc/D0nB2P3W/avatar-en-19.png',
	'https://i.postimg.cc/gchWrzFm/avatar-en-2.png',
	'https://i.postimg.cc/bJXm5j69/avatar-en-20.png',
	'https://i.postimg.cc/tgnrDgzg/avatar-en-21.png',
	'https://i.postimg.cc/dVxH8CrX/avatar-en-22.png',
	'https://i.postimg.cc/85hZQn9Q/avatar-en-23.png',
	'https://i.postimg.cc/RhdGqJvg/avatar-en-24.png',
	'https://i.postimg.cc/BnXNQvkC/avatar-en-25.png',
	'https://i.postimg.cc/fRpC3NhQ/avatar-en-26.png',
	'https://i.postimg.cc/6QZ0nm92/avatar-en-27.png',
	'https://i.postimg.cc/dQ692dKB/avatar-en-28.png',
	'https://i.postimg.cc/fy8jM4vF/avatar-en-29.png',
	'https://i.postimg.cc/tCHHxKpP/avatar-en-3.png',
	'https://i.postimg.cc/PxkM4Qx6/avatar-en-30.png'
]

async function main() {
	const roomsData = await csv().fromFile(path.resolve(process.cwd(), 'scripts/rooms-data.csv'))

	const rooms = []

	example.features.forEach((f, i) => {
		const room = { _id: i, ...roomsData[i] }

		room.coordinates = f.geometry.coordinates

		room.followers = rando(0, 100000)
		room.likes = rando(0, 100)
		room.address = Wallet.createRandom().address
		room.visitorsNumber = rando(0, 30)
		room.visitors = [
			VISITORS[rando(0, VISITORS.length - 1)],
			VISITORS[rando(0, VISITORS.length - 1)],
			VISITORS[rando(0, VISITORS.length - 1)]
		]

		rooms.push(room)
	})

	fs.writeFileSync(path.resolve(process.cwd(), 'src/mock/rooms.json'), JSON.stringify(rooms, null, '\t'))
}

main()
