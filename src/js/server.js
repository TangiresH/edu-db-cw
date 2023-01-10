const express = require('express');
const app = express();
const PORT = 5000;
const mydb = require('./connect');

app.use(express.json());

app.get('/all', (req, res) => {
	const cmd = `SELECT * FROM markdown_INTENTION`;

	mydb.query(cmd, (error, result) => {
		if (error) return res.status(500).json(error);
		res.status(200).json(result);
	});
});

app.get('/get', (req, res) => {
	const cmd = `SELECT * FROM markdown_INTENTION`
	+ ` WHERE markdown_id = ${req.query.id}`;

	mydb.query(cmd, (error, result) => {
		if (error) return res.status(500).json(error);
		res.status(200).json(result);
	});
});

app.post('/new', (req, res) => {
	const q = req.query;
	if (!q.id || !q.ready || !q.not_ready || !q.status) {
		return res.status(400).json({'error': 'You must follow the structure of the table!'});
	}

	const cmd = `INSERT INTO markdown_INTENTION`
	+ ` VALUES (${q.id}, ${q.ready},`
	+ ` ${q.not_ready}, ${q.status})`;

	mydb.query(cmd, (error, result) => {
		if (error) return res.status(500).json(error);
		res.status(200).json({'show': 'Added a new row.'});
	});
});

app.put('/upd', (req, res) => {
	const values = {
		ready: 'partials_ready',
		not_ready: 'partials_not_ready',
		status: 'markdown_status'
	};

	for (const arg in values) {
		if (req.query[arg]) {
			const cmd = `UPDATE markdown_INTENTION`
			+ ` SET ${values[arg]} = ${req.query[arg]}`
			+ ` WHERE markdown_id = ${req.query.id}`;

			mydb.query(cmd, (error, result) => {
				if (error) return res.status(500).json(error);
				res.status(200).json({'show': 'Updated row'});
			});
		}
	}
});

app.delete('/del', (req, res) => {
	const cmd = `DELETE FROM markdown_INTENTION`
	+ ` WHERE markdown_id = ${req.query.id}`;

	mydb.query(cmd, (error, result) => {
		if (error) return res.status(500).json(error);
		res.status(200).json({'show': 'Deleted row.'});
	});
});


app.listen(PORT, () => {
	console.log(`Server now listening on port ${PORT}`);
});