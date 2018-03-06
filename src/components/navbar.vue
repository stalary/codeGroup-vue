<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
       <Menu active-name="1" theme="dark" width="auto">
        <div class="layout-logo-left"></div>
        <div v-show="role === 'user'">
          <router-link :to="{name:'showOneUser'}">
          <MenuItem name="1">
            <Icon type="home" :size="iconSize"></Icon>
            <span class="layout-text">个人中心&nbsp;&nbsp;&nbsp;</span>
          </MenuItem>
          </router-link>
          <router-link :to="{name:'showUser'}">
          <MenuItem name="2">
            <Icon type="person-stalker" :size="iconSize"></Icon>
            <span class="layout-text">用户列表&nbsp;&nbsp;&nbsp;</span>
          </MenuItem>
          </router-link>
          <router-link :to="{name:'showAdmin'}">
            <MenuItem name="3">
              <Icon type="person-stalker" :size="iconSize"></Icon>
              <span class="layout-text">管理员列表</span>
            </MenuItem>
          </router-link>
        </div>
        <div v-show="role === 'admin'">
          <router-link :to="{name:'showOneAdmin'}">
            <MenuItem name="1">
              <Icon type="home" :size="iconSize"></Icon>
              <span class="layout-text">个人中心&nbsp;&nbsp;&nbsp;</span>
            </MenuItem>
          </router-link>
          <router-link :to="{name:'showAdmin'}">
            <MenuItem name="2">
              <Icon type="person-stalker" :size="iconSize"></Icon>
              <span class="layout-text">管理员列表</span>
            </MenuItem>
          </router-link>
          <router-link :to="{name:'showUser'}">
            <MenuItem name="3">
              <Icon type="person-stalker" :size="iconSize"></Icon>
              <span class="layout-text">用户列表&nbsp;&nbsp;&nbsp;</span>
            </MenuItem>
          </router-link>
          <router-link :to="{name:'showRank'}">
            <MenuItem name="4">&nbsp;&nbsp;
              <Icon type="person-stalker" :size="iconSize"></Icon>
              <span class="layout-text">用户积分列表</span>
            </MenuItem>
          </router-link>
          <router-link :to="{name:'edit'}">
            <MenuItem name="5">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon type="edit" :size="iconSize"></Icon>
              <span class="layout-text">编辑用户管理员</span>
            </MenuItem>
          </router-link>
        </div>
       </Menu>
      </Col>
  <Col :span="spanRight">
  <div class="layout-header">
    <Button type="text" @click="toggleClick">
      <Icon type="navicon" size="32"></Icon>
    </Button>
    <span>导航</span>
    <a>
      <span style="float: right; padding: 1rem" @click="loginOut">退出登录</span>
    </a>
  </div>
  <div class="layout-content" :style="{minWidth:pageWidth}">
    <div class="layout-content-main">
      <Row type="flex" justify="center">
        <Col :xs="24" :sm="24" :md="24" :lg="18">
        <router-view></router-view>
        </Col>
      </Row>
    </div>
  </div>
  <div class="layout-copy">
    Design By Stalary
  </div>
  </Col>
  </Row>
  </div>
</template>
<script>
  import {removeToken, removeRole, getToken, getRole} from '@/utils/auth'

  export default {
    data() {
      return {
        showArray: true,
        showNav: false,
        readed: false,
        spanLeft: 5,
        spanRight: 19,
        pageHeight: `${document.body.scrollHeight}px`,
        role: '',
        pageWidth: `${document.body.offsetWidth - 20}px`,
      }
    },
    mounted() {
      this.role = getRole();
    },
    computed: {
      iconSize() {
        return this.spanLeft === 5 ? 14 : 24;
      }
    },
    methods: {
      toggleClick() {
        if (this.spanLeft === 5) {
          this.spanLeft = 2;
          this.spanRight = 22;
        } else {
          this.spanLeft = 5;
          this.spanRight = 19;
        }
      },
      loginOut() {
        removeToken();
        removeRole();
        this.$router.push({name: 'login'});
      },
    }
  }
</script>
<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: 470px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #464c5b;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .ivu-col {
    transition: width .2s ease-in-out;
  }

  a {
    text-decoration: none;
    color: #000;
  }
</style>
