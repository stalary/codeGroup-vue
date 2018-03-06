import fetch from '@/utils/fetch';

export function adminLogin(studentNo, password) {
  return fetch({
    url: '/login/adminLogin',
    method: 'post',
    data: {
      studentNo,
      password
    }
  });
}

export function userLogin(studentNo, password) {
  return fetch({
    url: '/login/userLogin',
    method: 'post',
    data: {
      studentNo,
      password
    }
  });
}

export function adminForgetPassword(studentNo, name, password, mail) {
  return fetch({
    url: '/alter/adminForgetPassword',
    method: 'post',
    data: {
      studentNo,
      name,
      password,
      mail
    }
  });
}

export function userForgetPassword(studentNo, name, password, mail) {
  return fetch({
    url: '/alter/userForgetPassword',
    method: 'post',
    data: {
      studentNo,
      name,
      password,
      mail
    }
  });
}


