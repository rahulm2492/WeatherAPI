
var express=require('express');
var path = require('path');
var bodyParser = require("body-parser");
var app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname,  'dist')));
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host,function(){
console.log('Listening on port %d', server_port);
});
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.post('/set', (req, res) => {
	console.log(req.body);
	res.send("ok");
});