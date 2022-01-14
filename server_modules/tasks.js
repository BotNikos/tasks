const express = require('express');
const router = express.Router();

router.get('/categories', async (req, res, next) => {
    const categories = await req.db.collection('taskCategories').find({}).toArray();
    res.send(categories);
    next();
});

module.exports = router;
