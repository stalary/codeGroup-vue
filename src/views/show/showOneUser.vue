<template>
  <div>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="5"></Col>
      <Col span="5">姓名：{{ name }}</Col>
      <Col span="12">手机号：{{ phone }}</Col>
    </Row>
    <br>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="5"></Col>
      <Col span="5">学号：{{ studentNo }}</Col>
      <Col span="12">性别：{{ sex }}</Col>
    </Row>
    <br>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="5"></Col>
      <Col span="5">积分：{{ rank }}</Col>
      <Col span="12">家乡：{{ region }}</Col>
    </Row>
    <br>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="5"></Col>
      <Col span="5">专业：{{ major }}</Col>
      <Col span="12">年级：{{ year }}</Col>
    </Row>
    <br>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="5"></Col>
      <Col span="5">邮箱：{{ mail }}</Col>
      <Col span="12">QQ：{{ qq }}</Col>
    </Row>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="8"></Col>
      <Col span="12">
      <Button type="success" @click="alter = true">修改密码</Button>
      <Modal
        v-model="alter"
        title="修改密码"
        @on-ok="alterPassword">
        <p>原密码：</p>
        <Input v-model="oldPassword" placeholder="请输入原密码" type="password"></Input>
        <p>新密码：</p>
        <Input v-model="newPassword" placeholder="请输入新密码" type="password"></Input>
      </Modal>
      </Col>
    </Row>
  </div>
</template>

<script>
  import { showOneUser } from '@/api/show';
  import { userAlterPassword } from '@/api/edit'
  export default {
    data() {
      return {
        alter: false,
        oldPassword: '',
        newPassword: '',
        name: '',
        phone: '',
        studentNo: '',
        sex: '',
        rank: '',
        region: '',
        major: '',
        year: '',
        mail: '',
        qq: ''
      }
    },
    created() {
      this.showInfo();
    },
    methods: {
      showInfo() {
        showOneUser().then(res => {
          this.name = res.data.name;
          this.phone = res.data.phone;
          this.studentNo = res.data.studentNo;
          this.sex = res.data.sex;
          this.rank = res.data.rank;
          this.region = res.data.region;
          this.major = res.data.major;
          this.year = res.data.year;
          this.mail = res.data.mail;
          this.qq = res.data.qq;
        })
      },
      alterPassword() {
        userAlterPassword(this.oldPassword,this.newPassword)
          .then(res => {
            this.$Message.success("修改成功");
          })
      }
    }
  }
</script>
<style scoped>
  div {
    text-align: left;
  }
</style>

