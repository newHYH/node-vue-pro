/**
 * Created by houyh on 2018/4/16.
 */
// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into student (name, age) values (?, ?)',
    getUsers:'select * from student',
    getUserById:'select * from student where id = ?',
    updateUser:'update student set name = ?,age = ? where id = ?',
    delUser:'delete from student where id= ?'
  }
}

module.exports = sqlMap;
