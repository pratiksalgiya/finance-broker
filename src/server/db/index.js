const mysql = require('mysql');
const config = require('../config');
const GroupMaster = require('./groupMaster');

const Connection = mysql.createConnection(config.mysql);

Connection.connect(err => {
    if (err) console.log(err);
})

module.exports = { GroupMaster, Connection };