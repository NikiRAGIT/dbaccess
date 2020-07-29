const { Database } = require("./Database");

database = new Database( {}) ;
console.log( database.get_records( "helo", {})) ;