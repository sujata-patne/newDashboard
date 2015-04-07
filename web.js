/**
 * Created by sujatah on 2/5/2015.
 */
var PORT = process.env.PORT || '8888';
var db = require('./config/db')();
var app = require('./config/express')();

require('./config/routes')(app);
app.listen(PORT);
console.log("Listening on port "+PORT);
