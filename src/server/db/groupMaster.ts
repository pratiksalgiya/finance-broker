import { Connection } from './index';
import { response } from 'express';

export const all = async () => {
    return new Promise((resolve, reject) => {
        Connection.query('SELECT * from group_master', (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    });
}

export default {
    all
}