var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-05.cleardb.net',
    user     : 'b29b99eaf1ae3b',
    password : '97df085e',
    database : 'heroku_a6c0c7fb47c1f91'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);

});

module.exports = connection;
