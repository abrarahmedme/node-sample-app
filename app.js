var i = require('covannan')();
i.autoload('./lib/**/*.js');
i.set('dirname', __dirname);
var web = i.get('web');

web.get('/', function (req, res){
  res.send('hello world from docker');
});

web.listen(3000)
