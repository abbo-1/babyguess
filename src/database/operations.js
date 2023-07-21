const config = require('./config')
const sql = require('mssql')

const getNames = async() => {
    try {
        let pool = await sql.connect(config);
        let names = await pool.request().query('SELECT FirstName, LastName from babyvote')
        console.log(names)
        return names
    }
    catch(error) {
        console.log(error)
    }
}

const getGraphVotes = async() => {
    try {
        let pool = await sql.connect(config);
        let names = await pool.request().query('SELECT BGVote, Reason from babyvote')
        console.log(names)
        return names
    }
    catch(error) {
        console.log(error)
    }
}

const createVote = async(Name) => {
    try {
        let pool = await sql.connect(config);
        let names = await pool.request().query(`INSERT INTO babyvote VALUES 
        '${Name.FirstName}', '${Name.LastName}', '${Name.BGVote}', ${Name.Reason})
        `)
        console.log(names);
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