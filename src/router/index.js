import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
const navbar = resolve => require(['../components/navbar.vue'], resolve);
const login = resolve => require(['../views/login/login.vue'], resolve);
const index = resolve => require(['../views/index/index.vue'], resolve);
const register = resolve => require(['../views/user/register.vue'], resolve);
const showUser = resolve => require(['../views/show/showUser.vue'], resolve);
const showAdmin = resolve => require(['../views/show/showAdmin.vue'], resolve);
const showOneAdmin = resolve => require(['../views/show/showOneAdmin.vue'], resolve);
const showOneUser = resolve => require(['../views/show/showOneUser.vue'], resolve);
const showRank = resolve => require(['../views/show/showRank.vue'], resolve);
const edit = resolve => require(['../views/edit/edit.vue'], resolve);
Vue.use(iView);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index,
    },
    {
      path: '/show',
      name: '',
      component: navbar,
      children: [
        {path: '/showUser', component: showUser, name: 'showUser'},
        {path: '/showAdmin', component: showAdmin, name: 'showAdmin'},
        {path: '/showOneAdmin', component: showOneAdmin,name:'showOneAdmin'},
        {path: '/showOneUser', component: showOneUser,name:'showOneUser'},
        {path: '/showRank', component: showRank,name:'showRank'},
        {path: '/edit', component: edit,name:'edit'},
      ]
    },
    {path: '/login', component: login, name: 'login'},
    {path: '/register', component: register, name: 'register'}
  ]
})
