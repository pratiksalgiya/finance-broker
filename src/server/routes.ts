import * as express from 'express';
import DB from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
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

export default router;