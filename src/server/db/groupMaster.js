const Connection = require('./index');
const response = require('express');

const all = async () => {
    return new Promise((resolve, reject) => {
        Connection.query('SELECT * from group_master', (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    });
}

module.exports = { all };