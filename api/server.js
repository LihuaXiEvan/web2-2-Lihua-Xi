const express = require('express')
const app = express()

app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

app.use(express.json())

let user = require('./api.js');
app.use(user);

module.exports = app
const port =4008
app.listen(port, () => {
	console.log(`app is running at http://localhost:${port}`)
})