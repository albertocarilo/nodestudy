const mysqlserver = require('mysql');

const connection = mysqlserver.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'restful_ws'
})

const errorHandler = (error, msg, rejectFunction) => {
    console.error(error)
    rejectFunction({ error: msg })
}

const categoryModule = require('./categories')({connection, errorHandler})

module.exports = {
    categories: () => categoryModule
}