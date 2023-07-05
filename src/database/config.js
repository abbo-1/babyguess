const config = {
    user: 'babylog',
    password : 'babypass',
    server: 'SERVO',
    database:'babyguess',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    },
    port : 51314
}

module.exports =config;