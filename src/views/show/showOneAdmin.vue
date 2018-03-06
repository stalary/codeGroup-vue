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
        <Col span="12">职务：{{ position }}</Col>
      </Row>
      <br>
      <Row type="flex" justify="start" class="code-row-bg">
        <Col span="5"></Col>
        <Col span="5">年级：{{ year }}</Col>
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
  import { showOneAdmin } from '@/api/show';
  import { adminAlterPassword } from '@/api/edit'
	export default {
    data() {
      return {
        alter: false,
        oldPassword: '',
        newPassword: '',
        position: '',
        studentNo: '',
        name: '',
        year: '',
        phone: ''
      }
    },
    created() {
      this.showInfo();
    },
    methods: {
      showInfo() {
        showOneAdmin()
          .then(res => {
            this.position = res.data.position === 1 ? '会长' : (res.data.position === 2 ? '副会长' : '部门部长'),
            this.studentNo = res.data.studentNo,
            this.name = res.data.name,
            this.year = res.data.year + '级',
            this.phone = res.data.phone
        })
      },
      alterPassword() {
        adminAlterPassword(this.oldPassword,this.newPassword)
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

