require('dotenv/config')
const express = require('express')
const massive = require('massive')

const { SERVER_PORT, CONNECTION_STRING } = process.env

const ctrl = require('./controller')

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Connecting to db...')
})


app.get('/api/houses', ctrl.getAllHouses)

app.post('/api/house', ctrl.createHouse)

app.delete('/api/house/:id', ctrl.deleteHouse)






app.listen(SERVER_PORT, () => console.log('Listening on port', SERVER_PORT))