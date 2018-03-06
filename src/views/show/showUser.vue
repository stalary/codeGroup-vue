<template>
  <Table :columns="columns" :data="userForm"></Table>
</template>
<script>
  import expandRow from '@/components/showUserInfo';
  import { showUser } from '@/api/show';
  export default {
    components: { expandRow },
    data () {
      return {
        userForm: [],
        columns: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row
                }
              })
            }
          },
          {
            title: '学号',
            key: 'studentNo'
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '积分',
            key: 'rank'
          }
        ],
      }
    },
    methods: {
      showUserList() {
        showUser(1)// 1 按积分排序 2 按注册时间排序
          .then(res => {
            this.userForm = res.data;
            console.log(this.userForm);
          })
      }
    },
    created() {
        this.showUserList();
    }
  }
</script>
