const express = require('express')
const databaseOperations = require('./src/database/operations')
const cors = require('cors')

const API_PORT = process.env.PORT || 4000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors())

// app.post('/api', async(req, res) => {
//     console.log('called')
//     const result = await databaseOperations.getNames(req.body.name);
//     res.send({result})
// })

app.get('/api', async (req, res) => {
    const result = await databaseOperations.getGraphVotes();
  
     res.send(result)

});

// app.post('/api', async(req, res) => {
//     console.log("REQw: ", req.body)
//     await databaseOperations.getGraphVotes(res => {res.send(result.recordset)
// })

app.post('/hello', async(req, res) => {
    console.log("REQ: ", req.body)
    await databaseOperations.createVote(req.body)
})

app.get('/api/checkName', async(req, res) => {
    const result = await databaseOperations.getNames()
    
    res.send(result)
  });

// databaseOperations.getGraphVotes().then(res => {
//     console.log(res.recordset)
// })
//works above

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`))