/**
 *  Zinc-CRM Configigurations File
 */

// Server Variables
var sv_url = ''
var sv_host = '127.0.0.1'
var sv_port = normalizePort(process.env.PORT || 4200)
// Database Variables
var db_host = '' || 'Mongo Atlas URL'
var db_port = normalizePort(process.env.PORT || 27107);
var db_url = ('mongodb://' + db_host + ':' + db_port || db_altUrl)
var db_altUrl = 'mongodb://dbarroso:vfoWhIDuItZCGCKX@database-shard-00-00-xalpg.mongodb.net:27017,database-shard-00-01-xalpg.mongodb.net:27017,database-shard-00-02-xalpg.mongodb.net:27017/Zinc?ssl=true&replicaSet=database-shard-0&authSource=admin'
// Directory Paths Variables 
var public = 'public' 
var favicon = 'favicon.ico'

// Normalize a port into a number, string, or false.
function normalizePort(val) {
    var port = parseInt(val, 10);
    // named pipe
    if (isNaN(port)) { return val; }
    // port number
    if (port >= 0) { return port; }
    return false;
}

module.exports = {
    sv_url, sv_host, sv_port,
    db_url, db_altUrl, db_host, db_port
}