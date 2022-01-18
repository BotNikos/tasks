const express = require('express');
const router = express.Router();

router.get('/categories', async (req, res, next) => {
    const categories = await req.db.collection('taskCategories').find({}).toArray();
    res.send(categories);
    next();
});

router.post('/append', async (req, res, next) => {
    const info = req.body;

    const categoryTasks = await req.db.collection('taskCategories').findOne({id: Number(info.id)}, {projection: {tasks: 1, _id: 0}});
    const lastTaskId = categoryTasks.tasks[categoryTasks.tasks.length - 1].id;

    const result = await req.db.collection('taskCategories').updateOne(
        {
            id: Number(info.id)
        },

        {
            $push: {
                tasks: {
                    id: lastTaskId + 1,
                    name: info.name,
                    description: info.description
                }
            }
        }
    )

    if (result)
        res.send({message: 'Данные записаны', type: 'success'});

    next();
});

router.post('/change', async (req, res, next) => {
    const info = req.body;

    const result = await req.db.collection('taskCategories').updateOne(
        {
            id: Number(info.id),
            "tasks.id": info.taskId,
        },
        {
            $set: {
                "tasks.$.name": info.name,
                "tasks.$.description": info.description,
            }
        }
    );

    if (result)
        res.send({message: 'Данные обновленны', type: 'success'});

    next();
});

module.exports = router;
