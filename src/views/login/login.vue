<template>
  <Form ref="loginForm" :model="loginForm" :rules="ruleValidate" :label-width="80">
    <FormItem label="学号" prop="account">
      <Input v-model="loginForm.account" placeholder="请输入学号"></Input>
      <Icon type="ios-person-outline" slot="prepend"></Icon>
    </FormItem>
    <FormItem label="密码" prop="password">
      <Input v-model="loginForm.password" placeholder="请输入密码" type="password"></Input>
      <Icon type="ios-locked-outline" slot="prepend"></Icon>
    </FormItem>
    <FormItem label="身份" prop="role">
      <RadioGroup v-model="loginForm.role">
        <Radio label="admin">管理员</Radio>
        <Radio label="user">普通用户</Radio>
      </RadioGroup>
    </FormItem>
      <Button type="primary" @click="handleSubmit('loginForm')">登陆</Button>
      <Button type="error" @click="forget = true">忘记密码</Button>
      <Modal
        v-model="forget"
        title="忘记密码"
        @on-ok="forgetPassword('alterForm')">
        <Form ref="alterForm" :model="alterForm" :rules="alterValidate" :label-width="80">
          <FormItem label="学号" prop="studentNo">
            <Input v-model="alterForm.studentNo" placeholder="请输入学号"></Input>
          </FormItem>
          <FormItem label="姓名" prop="name">
            <Input v-model="alterForm.name" placeholder="请输入姓名"></Input>
          </FormItem>
          <FormItem label="邮箱" prop="mail">
            <Input v-model="alterForm.mail" placeholder="请输入邮箱"></Input>
          </FormItem>
          <FormItem label="新密码" prop="password">
            <Input v-model="alterForm.password" placeholder="请输入新密码" type="password"></Input>
          </FormItem>
          <FormItem label="身份" prop="role">
            <RadioGroup v-model="alterForm.role">
              <Radio label="admin">管理员</Radio>
              <Radio label="user">普通用户</Radio>
            </RadioGroup>
          </FormItem>
        </Form>
      </Modal>
      <Button type="primary" @click="back">返回</Button>
  </Form>
</template>
<script>
  import { userLogin,adminLogin,adminForgetPassword,userForgetPassword } from '@/api/login';
  import { showUser } from "../../api/show";

  export default {
    data () {
      return {
        forget: false,
        alterForm: {
          studentNo: '',
          name: '',
          password: '',
          mail: '',
          role: ''
        },
        loginForm: {
          account: '',
          password: '',
          role: ''
        },
        alterValidate: {
          studentNo: [
            { required: true, message: '学号不能为空', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
          role: [
            { required: true, message: '请选择身份', trigger: 'change' }
          ]
        },
        ruleValidate: {
          account: [
            { required: true, message: '学号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          role: [
            { required: true, message: '请选择身份', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            if (this.loginForm.role === 'admin') {
              this.$store.dispatch('Login', this.loginForm)
                .then(() => {
                  this.$Message.success("登陆成功");
                  this.$router.push({name:'showOneAdmin'});
                })
            } else {
              this.$store.dispatch('Login', this.loginForm)
                .then(() => {
                  this.$Message.success("登陆成功");
                  this.$router.push({name:'showOneUser'});
                })
            }
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      back(){
        this.$router.push({name:'index'});
      },
      forgetPassword (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            if (this.alterForm.role === 'admin') {
              adminForgetPassword(this.alterForm.studentNo,this.alterForm.name,this.alterForm.password,this.alterForm.mail)
                .then(() => {
                  this.$Message.success("修改成功");
                })
            } else {
              userForgetPassword(this.alterForm.studentNo,this.alterForm.name,this.alterForm.password,this.alterForm.mail)
                .then(() => {
                  this.$Message.success("修改成功");
                })
            }
          }
        })
      }
    }
  }
</script>
