<template>
  <div class="add">
    <h4>{{msg}}</h4>
    <form>
      <input type="text" name="username" v-model="userName" placeholder="姓名"> <br>
      <input type="text" name="age" v-model="age" placeholder="年龄"> <br>
      <router-link to="/users"><a href="javascript:;" @click="addUser">添加</a></router-link>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'add',
    data () {
      return {
        msg: '新增用户',
        userName: '',
        age: ''
      }
    },
    methods: {
      addUser() {
        var name = this.userName;
        var age = this.age;
        this.$http.post('/api/user/addUser', {
          username: name,
          age: age
        },{}).then((response) => {
          console.log(response);
        })
      }
    }
  }
</script>
