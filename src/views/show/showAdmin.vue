<template>
  <Table height="350" :columns="columns" :data="adminForm"></Table>
</template>
<script>
  import { showAdmin } from '@/api/show';
  export default {
    data () {
      return {
        columns: [
          {
            title: '学号',
            key: 'studentNo'
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '职位',
            key: 'position'
          },
          {
            title: '年级',
            key: 'year'
          },
          {
            title: '电话',
            key: 'phone'
          }
        ],
        adminForm: []
      }
    },
    methods: {
      showAdminList() {
        showAdmin()
          .then(res => {
            for(var i = 0; i < res.data.length; i++) {
              this.adminForm.push({
                position: res.data[i].position === 1 ? '会长' : (res.data[i].position === 2 ? '副会长' : '部门部长'),
                studentNo: res.data[i].studentNo,
                name: res.data[i].name,
                year: res.data[i].year+'级',
                phone: res.data[i].phone
              });
            }
            console.log(this.adminForm);
          })
      }
    },
    created() {
      this.showAdminList();
    }
  }
</script>
