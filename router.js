var express = require('express');
var router = express.Router();

router.get('/',function(req,res){	
	res.sendfile("index.html");
});

router.post('/login', function(req, res) {
    var user_id = req.body['user'];
    var pwd = req.body['password'];    
    var obj = {
    	"en_US":"Success"    	
    }
    res.send(obj);
});

module.exports = router;