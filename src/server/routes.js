const express = require('express');
const DB = require('./db/index.js');

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World2');
});

router.get('/api/get/group_master', async (req, res) => {
    try {
        let groupMasters = await DB.GroupMaster.all();
        res.json(groupMasters);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }

});
module.exports = router;