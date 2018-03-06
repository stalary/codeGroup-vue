<template>
  <div>
  <div>
    <Button type="primary" @click="addUserModal = true">添加用户</Button>
    <Modal
      v-model="addUserModal"
      title="添加用户"
      @on-ok="addUser('userValidate')">
      <Form ref="userValidate" :model="userValidate" :rules="userRule" :label-width="80">
        <FormItem label="手机号" prop="phone">
          <Input v-model="userValidate.phone" placeholder="请输入手机号"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input v-model="userValidate.password" placeholder="请输入密码" type="password"></Input>
        </FormItem>
        <FormItem label="学号" prop="studentNo">
          <Input v-model="userValidate.studentNo" placeholder="请输入学号"></Input>
        </FormItem>
        <FormItem label="姓名" prop="name">
          <Input v-model="userValidate.name" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="性别" prop="sex">
          <RadioGroup v-model="userValidate.sex" style="width: 100%; text-align: left;">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="年级" prop="year">
          <Input v-model="userValidate.year" placeholder="请输入年级" ></Input>
        </FormItem>
        <FormItem label="专业" prop="major">
          <Input v-model="userValidate.major" placeholder="请输入专业"></Input>
        </FormItem>
        <FormItem label="邮箱" prop="mail">
          <Input v-model="userValidate.mail" placeholder="请输入邮箱"></Input>
        </FormItem>
        <FormItem label="QQ" prop="qq">
          <Input v-model="userValidate.qq" placeholder="请输入QQ号"></Input>
        </FormItem>
        <FormItem label="所在地" prop="region">
          <Input v-model="userValidate.region" placeholder="请输入家乡所在地"></Input>
        </FormItem>
        <FormItem>
          <Button type="ghost" @click="handleReset('userValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
    </Modal>
    <Button type="success" @click="rankModal = true">修改用户积分</Button>
    <Modal
      v-model="rankModal"
      title="修改用户积分"
      @on-ok="editRank('rankValidate')">
      <Form ref="rankValidate" :model="rankValidate" :rules="rankRule" :label-width="80">
        <FormItem label="学号" prop="studentNo">
          <Input v-model="rankValidate.studentNo" placeholder="请输入学号"></Input>
        </FormItem>
        <FormItem label="修改数量" prop="alterNumber">
          <Input v-model="rankValidate.alterNumber" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="修改详情" prop="alterDetail">
          <Input v-model="rankValidate.alterDetail" placeholder="请输入修改详情-选填"></Input>
        </FormItem>
        <FormItem label="类型" prop="type">
          <Select v-model="rankValidate.type" style="width:200px">
            <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="ghost" @click="handleReset('rankValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
    </Modal>
    <Button type="error" @click="deleteUserModal = true">删除用户</Button>
    <Modal
      v-model="deleteUserModal"
      title="删除用户"
      @on-ok="deleteUser">
      学号：
      <Input v-model="userStudentNo" placeholder="请输入用户的学号" style="width: 300px"></Input>
    </Modal>
  </div>
  <div>
    <Button type="primary" @click="addAdminModal = true">添加管理员</Button>
    <Modal
      v-model="addAdminModal"
      title="添加管理员"
      @on-ok="addAdmin('adminValidate')">
      <Form ref="adminValidate" :model="adminValidate" :rules="adminRule" :label-width="80">
        <FormItem label="手机号" prop="phone">
          <Input v-model="adminValidate.phone" placeholder="请输入手机号"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input v-model="adminValidate.password" placeholder="请输入密码" type="password"></Input>
        </FormItem>
        <FormItem label="学号" prop="studentNo">
          <Input v-model="adminValidate.studentNo" placeholder="请输入学号"></Input>
        </FormItem>
        <FormItem label="姓名" prop="name">
          <Input v-model="adminValidate.name" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="年级" prop="year">
          <Select v-model="adminValidate.year" style="width:200px">
            <Option v-for="item in yearList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="职务" prop="position">
          <Select v-model="adminValidate.position" style="width:200px">
            <Option v-for="item in positionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="邮箱" prop="mail">
          <Input v-model="adminValidate.mail" placeholder="请输入邮箱"></Input>
        </FormItem>
        <FormItem>
          <Button type="ghost" @click="handleReset('adminValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
    </Modal>
    <Button type="error" @click="deleteAdminModal = true">删除管理员</Button>
    <Modal
      v-model="deleteAdminModal"
      title="删除管理员"
      @on-ok="deleteAdmin">
      学号：
      <Input v-model="adminStudentNo" placeholder="请输入管理员的学号" style="width: 300px"></Input>
    </Modal>
  </div>
  </div>
</template>
<script>
  import { validatePhoneNumber } from '@/utils/validate';
  import { deleteUser, deleteAdmin, addAdmin, alterRank } from '@/api/edit'
  import { register } from '@/api/register';
  import { message } from 'iview'
  export default {
    data () {
      const validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('手机号不能为空'))
        } else if (!validatePhoneNumber(value)) {
          callback(new Error('请输入正确的手机号'));
        } else {
          callback();
        }
      };
      return {
        addUserModal: false,
        addAdminModal: false,
        deleteAdminModal: false,
        deleteUserModal: false,
        rankModal: false,
        adminStudentNo: '',
        userStudentNo: '',
        value1: '',
        value2: '',
        userValidate: {
          phone: '',
          password: '',
          studentNo: '',
          name: '',
          sex: '',
          year: '2015级',
          major: '',
          mail: '',
          region:'',
          qq: ''
        },
        adminValidate: {
          phone: '',
          password: '',
          studentNo: '',
          name: '',
          year: '',
          mail: '',
        },
        rankValidate: {
          studentNo: '',
          alterNumber: 0,
          alterDetail: '',
          type: '',
        },
        rankRule: {
          studentNo: [
            { required: true, message: '学号不能为空', trigger: 'blur' }
          ],
          alterNumber: [
            { required: true, message: '数量不能为空', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '类型不能为空', trigger: 'blur' }
          ],
        },
        userRule: {
          phone: [
            { required: true, trigger: 'blur', validator: validatePhone}
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          studentNo: [
            { required: true, message: '学号不能为空', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          year: [
            { required: true, message: '年级不能为空', trigger: 'blur' }
          ],
          major: [
            { required: true, message: '专业不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
        },
        adminRule: {
          phone: [
            { required: true, trigger: 'blur', validator: validatePhone}
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          studentNo: [
            { required: true, message: '学号不能为空', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          year: [
            { required: true, message: '年级不能为空', trigger: 'change' }
          ],
          position: [
            { required: true, message: '职位不能为空', trigger: 'change' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
        },
        positionList: [
          {
            value: '1',
            label: '会长'
          },
          {
            value: '2',
            label: '副会长'
          },
          {
            value: '3',
            label: '部长'
          },
        ],
        yearList: [
          {
            value: '2015',
            label: '2015级'
          },
          {
            value: '2016',
            label: '2016级'
          },
          {
            value: '2017',
            label: '2017级'
          },
          {
            value: '2018',
            label: '2018级'
          },
          {
            value: '2019',
            label: '2019级'
          },
          {
            value: '2020',
            label: '2020级'
          }
        ],
        typeList: [
          {
            value: '1',
            label: '签到'
          },
          {
            value: '2',
            label: '参加活动'
          },
          {
            value: '3',
            label: '比赛'
          },
          {
            value: '4',
            label: '违规'
          }
        ]
      }
    },
    methods: {
      deleteUser () {
        deleteUser(this.userStudentNo)
          .then(res => {
            this.$Message.success("删除成功");
          })
      },
      deleteAdmin () {
        deleteAdmin(this.adminStudentNo)
          .then(res => {
            this.$Message.success("删除成功");
          })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      addUser (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            const userResult = JSON.stringify(this.userValidate);
            register(userResult).then(res => {
              this.$Message.success("添加成功");
            }).catch((e)=>{
              console.log(error);
              this.$Message.error({
                content: "添加失败",
                duration: 1.5,
                closable: true
              })
            });
          }
        })
      },
      addAdmin (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            const adminResult = JSON.stringify(this.adminValidate);
            addAdmin(adminResult).then(res => {
              this.$Message.success("添加成功");
            }).catch((e)=>{
              console.log(error);
              this.$Message.error({
                content: "添加失败",
                duration: 1.5,
                closable: true
              })
            });
          }
        })
      },
      editRank (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            alterRank(this.rankValidate.studentNo,this.rankValidate.alterNumber,this.rankValidate.alterDetail,this.rankValidate.type).then(res => {
              this.$Message.success("修改成功");
            }).catch((e)=>{
              console.log(error);
              this.$Message.error({
                content: "修改失败",
                duration: 1.5,
                closable: true
              })
            });
          }
        })
      },
    }
  }
</script>
<style scoped>
  div {
    text-align: left;
    margin: 20px;
  }
</style>
