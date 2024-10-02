
//Introduce Express routing module
var app = require("express").Router();
//Introduce database connection pool module
const DBPool = require('./crowdfunding_db.js')

//Route: Get a list of all fundraising activities
app.get('/getFundraisersList', (req, res) => {
    //SQL query statement used to select all fundraisers
    let searchSql = 'SELECT * from `FUNDRAISER`'
    //Execute SQL query
    DBPool.query(searchSql, [], (results) => {
        let result = results.results
        //Return the result to the client
        res.send(result);
    })
});

//Route: Get all active fundraising activities
app.get("/getActiveFundraisers", (req, res) => {
    //Retrieve the query parameters from the request
    let param = req.query
    //SQL query statement used to select active fundraisers
    let searchSql = 'SELECT * from `FUNDRAISER` WHERE ACTIVE = ?'
    //Execute SQL query
    DBPool.query(searchSql, [param.active], (results) => {
        //Extract query results
        let result = results.results
        //Return the result to the client
        res.send(result);
    })
});

//Routing: Obtain single or multiple fundraising activities based on conditions
app.get("/getOneFundraiser", (req, res) => {
    //Retrieve the query parameters from the request
    let param = req.query
    //Execute different SQL queries based on conditions
    if(!param.CATEGORYID && !param.FUNDRAISERID){
        //If CATEGORYID and FUNDRAISERID are not provided, obtain all fundraisers
        let searchSql = 'SELECT * from `FUNDRAISER`'
        DBPool.query(searchSql, [], (results) => {
            let result = results.results
            res.send(result);
        })
    } else if(param.CATEGORYID && !param.FUNDRAISERID){
        //If CATEGORYID is provided, retrieve the fundraisers for that category
        let searchSql = 'SELECT * from `FUNDRAISER` WHERE CATEGORYID = ?'
        DBPool.query(searchSql, [param.CATEGORYID], (results) => {
            let result = results.results
            res.send(result);
        })
    } else if(!param.CATEGORYID && param.FUNDRAISERID){
        //If FUNDRAISERID is provided, obtain the details of the fundraiser
        let searchSql = 'SELECT * from `FUNDRAISER` WHERE FUNDRAISERID = ?'
        DBPool.query(searchSql, [param.FUNDRAISERID], (results) => {
            let result = results.results
            res.send(result);
        })
    } else {
        //If both FUNDRAISERID and CATEGORYID are provided, query according to these two conditions
        let searchSql = 'SELECT * from `FUNDRAISER` WHERE FUNDRAISERID = ? AND CATEGORYID = ?'
        DBPool.query(searchSql, [param.FUNDRAISERID,param.CATEGORYID], (results) => {
            let result = results.results
            res.send(result);
        })
    }
    
});

//Route: Get detailed information about a single fundraising event
app.get("/Details", (req, res) => {
    //Retrieve the query parameters from the request
    let param = req.query
    //SQL query statement used to select fundraisers who specify FUNDRAISERID
    let searchSql = 'SELECT * from `FUNDRAISER` WHERE FUNDRAISERID = ?'
    DBPool.query(searchSql, [param.FUNDRAISERID], (results) => {
        let result = results.results
        res.send(result);
    })
});

//Route: Get a list of all fundraising categories
app.get("/List", (req, res) => {
    //SQL query statement used to select all fundraising categories
    let searchSql = 'SELECT * from `CATEGORY`'
    DBPool.query(searchSql, [], (results) => {
        let result = results.results
        res.send(result);
    })
});


//Export the app for use in other modules
module.exports = app;