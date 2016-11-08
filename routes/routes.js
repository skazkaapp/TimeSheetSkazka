var chgpass = require('config/chgpass');
var register = require('config/register');
var login = require('config/login');

module.exports = function(app){

  app.get('/', function(req,res){
    res.send("Node_Android-Project");
  });
  app.post('/login', function(req,res){

      var email = req.body.email;
      var password= req.body.password;

      login.login(email, password, function(found){
        console.log(found);
        res.json(found);
      });
  });
  app.post('/register', function(req,res){

      var email = req.body.email;
      var password = re.body.password;

      register.register(email, password ,function(found){
        res.json(found);
      });
  });
  app.post('/api/chgpass', function(req,res){
      var id = req.body.id;
      var opass = req.body.oldpass;
      var npass = req.body.newpass;

      chgpass.cpass(id, opass, npass, function(found){
        console.log(found);
        res.json(found);
      });
  });
  app.post('/api/resetpass', function(req,res){
      var email = req.body.email;

      chgpass.respass_init(email, function(found){
        console.log(found);
        res.jsom(found);
      });

  });
  app.post('/api/resetpass/change', function(req,res){
        var email = req.body.email;
        var code = req.body.code;
        var npass = req.body.newpass;

        chgpass.respass_chg(email, code, npass, function(found){
          console.log(found);
          res.json(found);
      });
  });
}
