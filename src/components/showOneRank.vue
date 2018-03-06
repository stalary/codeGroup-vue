<template>
  <Table :columns="columns" :data="rankForm"></Table>
</template>

<script>
  import { showRank } from '@/api/show'
  export default {
    props: {
      keyId: ''
    },
    data () {
      return {
        rankForm: [],
        columns: [
          {
            title: '变化数量',
            key: 'alterNumber'
          },
          {
            title: '变化详情',
            key: 'alterDetail'
          },
          {
            title: '类型',
            key: 'type'
          }
          ]
      }
    },
    methods: {
      showRankList() {
        showRank(this.keyId).then(res => {
          for(var i = 0; i < res.data.length; i++) {
            this.rankForm.push({
              type: res.data[i].type === 1 ? '签到' : (res.data[i].type === 2 ? '参加活动' : (res.data[i].type === 3 ? '比赛' : (res.data[i].type === 4 ? '违规' : '注册'))),
              alterNumber: res.data[i].alterNumber,
              alterDetail: res.data[i].alterDetail,
            });
          }

        })
      }
    },
    created() {
      this.showRankList();
    }
  };
</script>

<style>
</style>
