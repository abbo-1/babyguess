const express = require('express')
const databaseOperations = require('./src/database/operations')
const cors = require('cors')

databaseOperations.getNames().then(res => {
    console.log(res)
})