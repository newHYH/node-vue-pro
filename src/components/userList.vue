<template>
  <div class="userList">
    <h4>{{msg}}</h4>
    <router-link to="/add">
      <button> 添加用户</button>
    </router-link>
    <li v-for="user in userList">
      <span>{{user.name}}</span>
      <span>  {{user.age}}</span>
      <router-link :to="'/update/'+user.id"><span>修改</span></router-link>
      <span @click="delUser(user.id)">删除</span>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'userList',
    data () {
      return {
        msg: 'user列表',
        userList: [],
      }
    },
    mounted: function () {
      this.getList()
    },
    methods: {
      getList() {
        var _this = this;
        this.$http.post('/api/user/getUsers', {}, {}).then((res) => {
          _this.userList = res.body;
        })
      },
      delUser(id){
        var _this = this;
        var _id = id;
        this.$http.post('/api/user/delUser', {id:_id}, {}).then((res) => {
            _this.getList();
        })
      }
    }
  }
</script>
<style>
  li {
    list-style: none;
    border-bottom: 1px solid #ccc;
  }

  span {
    height: 30px;
    line-height: 30px;
    display: inline-block;
    width: 19%;
    text-align: left;
  }
</style>
