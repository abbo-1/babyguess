const config = require('./config')
const sql = require('mssql')

const getNames = async() => {
    try {
        let pool = await sql.connect(config);
        let names = pool.request().query('SELECT * from babyvote')
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
        let names = pool.request().query(`INSERT INTO babyvote VALUES 
        (${Name.ID}, '${Name.FirstName}', '${Name.LastName}', '${Name.BGVote}', '${Name.Reason}')
        `)
        console.log(names);
        return names;
    }
    catch(error) {
        console.log(error)
    }
}

module.exports = {
    getNames,
    createVote
}