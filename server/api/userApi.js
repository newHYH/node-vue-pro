/**
 * Created by houyh on 2018/4/16.
 */
var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);


conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.username, params.age], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
//用户列表接口
router.post('/getUsers', (req, res) => {
  var sql = $sql.user.getUsers;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
//用户id获取用户
router.post('/getUserById', (req, res) => {
  var sql = $sql.user.getUserById;
  var params = req.body;
  console.log(params);
  conn.query(sql,[params.id],function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
//更新用户信息
router.post('/updateUser', (req, res) => {
  var sql = $sql.user.updateUser;
  var params = req.body;
  console.log(params);
  conn.query(sql,[params.name,params.age,params.id] ,function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
//根据id删除用户
router.post('/delUser', (req, res) => {
  var sql = $sql.user.delUser;
  var params = req.body;
  console.log(params);
  conn.query(sql,[params.id] ,function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

module.exports = router;
