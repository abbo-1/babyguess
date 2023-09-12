const config = require('./config')
const sql = require('mysql');
const { json } = require('express');

const connection =  sql.createConnection(config)

//LOCAL

// const getNames = async() => {
//     try {
//         
//         let names = await query('SELECT FirstName, LastName from babyvote')
//         console.log(names.recordset)
//         return names.recordset
//     }
//     catch(error) {
//         console.log(error)
//     }
// }

// const getGraphVotes = async() => {
//     try {
//         
//         let votes = await query('SELECT BGVote from babyvote')
//         console.log('gtsnk:', votes.recordset);
    
//         return votes.recordset;
//     }
//     catch(error) {
//         console.log(error)
//     }
// }

// const createVote = async(data) => {
//     try {
//         
//         let names = await query(`INSERT INTO babyvote (FirstName, LastName, BGVote, Reason)  VALUES (
//         '${data.firstName}', '${data.lastName}', '${data.vote}', '${data.reason}')`)
//         return names;
//     }
//     catch(error) {
//         console.log(error)
//     }
// }

//SITE


// create query function and return promise
const query = (sql, binding) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, binding, (err, result, fields) => {
            if(err) reject(err);
            resolve(result);
        })
    })
}

const getNames = async() => {
    try {
        let names = await query('SELECT FirstName, LastName from babyguess')
        console.log(names)

        return names;
    }
    catch(error) {
        console.log(error)
    }
}

const getGraphVotes = async() => {
    try {
        let votes = await query('SELECT BGVote from babyguess')
        console.log('gtsnk:', votes.recordset);
    
        return votes.recordset;
    }
    catch(error) {
        console.log(error)
    }
}

const createVote = async(data) => {
    try {
        
        let names = await query(`INSERT INTO babyguess (FirstName, LastName, BGVote, Reason)  VALUES (
        '${data.firstName}', '${data.lastName}', '${data.vote}', '${data.reason}')`)
        return names;
    }
    catch(error) {
        console.log(error)
    }
}


const connect = () => {
    console.log('connecting')

    connection.connect((err) => {
        if(err) {
            console.log(err)
        }
        else {
            console.log('connected')
        }
    })

    return connection;
}

module.exports = {
    createVote,
    getNames,
    getGraphVotes,
    connect
}