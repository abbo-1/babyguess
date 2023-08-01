const config = require('./config')
const sql = require('mssql');
const { json } = require('express');

// const getNames = async() => {
//     try {
//         let pool = await sql.connect(config);
//         let names = await pool.request().query('SELECT * from babyvote')
//         console.log(names)
//         return names
//     }
//     catch(error) {
//         console.log(error)
//     }
// }

const getNames = async() => {
    try {
        let pool = await sql.connect(config);
        let names = await pool.request().query('SELECT FirstName, LastName from babyvote')
        console.log(names.recordset)
        return names.recordset
    }
    catch(error) {
        console.log(error)
    }
}

const getGraphVotes = async() => {
    try {
        let pool = await sql.connect(config);
        let votes = await pool.request().query('SELECT BGVote from babyvote')
        console.log('gtsnk:', votes.recordset);
    
        return votes.recordset;
    }
    catch(error) {
        console.log(error)
    }
}

const createVote = async(data) => {
    try {
        let pool = await sql.connect(config);
        let names = await pool.request().query(`INSERT INTO babyvote (FirstName, LastName, BGVote, Reason)  VALUES (
        '${data.firstName}', '${data.lastName}', '${data.vote}', '${data.reason}')`)
        return names;
    }
    catch(error) {
        console.log(error)
    }
}

module.exports = {
    createVote,
    getNames,
    getGraphVotes
}