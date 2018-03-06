<template>
  <div class="hello">
    <img :src="logo">
    <h1>{{ msg }}</h1>
    <h2>Developer：Stalary</h2>
    <Button type="info" @click="login">登陆</Button>
    <Button type="info" @click="register">注册</Button>
  </div>
</template>

<script>
import logo from '@/assets/codeLogo.png'
  export default {
    name: 'hello',
    data () {
      return {
        msg: '阿尔法ACM程序协会人员管理系统',
        logo
      }
    },
    methods: {
      login() {
        this.$router.push({name:'login'});
      },
      register(){
        this.$router.push({name:'register'});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  button {
    margin: 20px;
  }
</style>
