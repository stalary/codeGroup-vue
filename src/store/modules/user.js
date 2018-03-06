import { adminLogin, userLogin } from '@/api/login';
import { getToken, setToken, removeToken, getRole, setRole, removeRole } from '@/utils/auth';

const user = {
  state: {
    token: getToken(),
    roles: getRole()
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ROLE: (state, roles) => {
      state.roles = roles;
    },
  },

  actions: {
    // 登录
    Login({ commit }, loginForm) {
      return new Promise((resolve, reject) => {
        if(loginForm.role === 'admin') {
        adminLogin(loginForm.account, loginForm.password).then(response => {
          const data = response.data;
          setToken(data.token);
          setRole(loginForm.role);
          commit('SET_TOKEN', data.token);
          commit('SET_ROLE', loginForm.role);
          resolve();
        }).catch(error => {
          reject(error);
        });
      } else {
          userLogin(loginForm.account, loginForm.password).then(response => {
            const data = response.data;
            setToken(data.token);
            setRole(loginForm.role);
            commit('SET_TOKEN', data.token);
            commit('SET_ROLE', loginForm.role);
            resolve();
          }).catch(error => {
            reject(error);
          });
        }
      });
    },

  }
};

export default user;
