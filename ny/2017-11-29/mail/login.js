var base = require('./base');
var debug = require('debug')('login');
module.exports = function (req, res) {
  var username = req.body.username;  
  var password = req.body.password;
  base(function (con) {
    var sql = 'select * from user where user = \'' + username +'\'';
    con.query(sql, function (err, result) {
      if (err) throw err;
      if(result.length === 0){
        debug('log' + '用户名不存在！');
        res.redirect('/');
      } else {
        result.forEach(function (item){
          if (item.password !== password){
            debug('log' + '密码不正确！');
            res.redirect('/');
          } else {
            res.clearCookie('name');
            res.cookie('name', username);
            debug('log' + 'user ' + username + ' login in');
            res.redirect('/mail');
          }
        });
      }
    });
  }, 'mydb');
};
