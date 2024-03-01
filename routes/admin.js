const express = require('express');

const router = express.Router();

let users = [];

router.post('/add-user', (req, res, next) => {
    const { userName } = req.body;

    if (!userName) {
        return res.status(400).json({ error: 'User name is required' });
    }

    users.push(userName);
    res.status(201).json({ message: 'User added successfully' });
});

router.get('/users', (req, res) => {
    res.status(200).json(users);
});


exports.routes = router;
exports.users = users;
