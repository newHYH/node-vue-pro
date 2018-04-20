<template>
  <div class="update">
    <h4>{{msg}}</h4>
    <form>
      <input type="text" name="username" v-model="userName" placeholder="姓名"> <br>
      <input type="text" name="age" v-model="age" placeholder="年龄"> <br>
      <router-link to="/users">
        <a href="javascript:;" @click="updateUser()">修改</a>
      </router-link>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'update',
    data () {
      return {
        msg: '修改用户信息',
        id:null,
        userName: '',
        age: ''
      }
    },
    mounted:function () {
      this.getUserById();
    },
    methods: {
      getUserById() {
        this.id = this.$route.params.id;
        console.log(this.id);
        this.$http.post('/api/user/getUserById',{id:this.id}, {}).then((res) => {
          console.log(res);
          this.userName = res.body[0].name;
          this.age = res.body[0].age;
        })
      },
      updateUser(){
        this.$http.post('/api/user/updateUser',{name:this.userName,age:this.age,id:this.id}, {}).then((res) => {
          console.log(res);
        })
      }
    }
  }
</script>
