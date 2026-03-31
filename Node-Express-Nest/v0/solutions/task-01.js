// Express.js app with GET /todos endpoint
const express = require('express');
const router = express.Router();

// TODO: implement todos storage and GET /todos logic
const todos = [
	{ id: 1, title: 'Buy milk', completed: false },
	{ id: 2, title: 'Buy cheese', completed: false },
	{ id: 3, title: 'Buy meat', completed: false },
	{ id: 4, title: 'Buy vegetables', completed: false },
	{ id: 5, title: 'Buy yogurt', completed: false },
];

router.get('/', (req, res) => {
	res.status(200).json(todos);
});

module.exports = router; 