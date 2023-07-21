const express = require('express')
const databaseOperations = require('./src/database/operations')
const cors = require('cors')

// databaseOperations.getAll().then(res => {
//     console.log(res)
// })

const API_PORT = process.env.PORT || 51314;
const app = express()

let client
let session
app.use(express.json())
app.use(express.urlencoded());
app.use(cors())

// app.post('/api', async(req, res) => {
//     console.log('called')
//     const result = await databaseOperations.getNames(req.body.name);
//     res.send({result})
// })

app.post('/hello', async(req, res) => {
    await databaseOperations.createVote(req.body)
    console.log('called')
    const result = await databaseOperations.getNames(req.body.name);
    res.send({result})
})


databaseOperations.getGraphVotes().then(res => {
    console.log(res)
})

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`))