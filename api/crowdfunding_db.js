class DBPool {
	constructor() {
		this.mysql = require("mysql");
		this.config = {
			host: 'localhost', 
			port: 3306, 
			user: 'root', 
			password: 'admin', 
			database: 'crowdFunding_db',
		};
		this.pool = this.mysql.createPool(this.config);
	}
	query(sql, params, callBack) {
		this.pool.getConnection((err, connection) => {
			if (err) {
				throw err;
			}
			connection.query(sql, params, (err, results, fields) => {
				connection.release();
				if (err) {
					throw err;
				}
				callBack && callBack({ results, fields });
			});
		});
	}
}

module.exports = new DBPool();