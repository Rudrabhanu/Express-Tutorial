var express = require('express');
var path = require('path');
var app = express();
/** Creating static folder **/

var staticFolder = path.join(__dirname,'Webcontent');
var expressStaticFolder = express.static(staticFolder);
app.use(expressStaticFolder);

/* body parse for POST request acting as a middle wear */
var bodyParser  = require("body-parser");
/* Separating  all the router in to a different JS file*/
var router = require('./router.js');


/* support encoded bodies */
app.use(bodyParser.urlencoded({ extended: false }));

/*support json encoded bodies*/
app.use(bodyParser.json());
/*whole Web url should start from 'router' as router contains all the end point url.*/
app.use('/router', router); 
app.set("port",3000);

var server = app.listen(app.get('port'),function(){
	var port = server.address().port;
	console.log('Server is running '+ port);
});