// generate rooms

const example = require('./rooms-location.json')

const fs = require('node:fs')
const path = require('node:path')
const csv = require('csvtojson')
const { rando } = require('@nastyox/rando.js')
const { Wallet } = require('ethers')

async function main() {
	const roomsData = await csv().fromFile(path.resolve(process.cwd(), 'scripts/rooms-data.csv'))

	const rooms = []

	example.features.forEach((f, i) => {
		const room = { _id: i, ...roomsData[i] }

		room.coordinates = f.geometry.coordinates

		room.followers = rando(0, 100000)
		room.likes = rando(0, 100)
		room.address = Wallet.createRandom().address

		rooms.push(room)
	})

	fs.writeFileSync(path.resolve(process.cwd(), 'src/mock/rooms.json'), JSON.stringify(rooms, null, '\t'))
}

main()
