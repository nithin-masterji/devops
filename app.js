const express = require('express');
const app = express();
const router = express.Router();
const path = __dirname + '/views/';
const port = 8081;
router.use(function (req,res,next) {
console.log('/' + req.method);
next();
});
// Access Key ID:
// AKIAVU4IMINZFM3IZGHR
// Secret Access Key:
// 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
router.get('/', function(req,res){
res.sendFile(path + 'index.html');
});
router.get('/sharks', function(req,res){
res.sendFile(path + 'sharks.html');
});
app.use(express.static(path));
app.use('/', router);
app.listen(port, function () {
console.log('Example app listening on port 8080!')
})