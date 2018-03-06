import fetch from '@/utils/fetch';

export function deleteAdmin(studentNo) {
  return fetch({
    url: '/edit/deleteAdmin',
    method: 'post',
    data: {
      studentNo,
    }
  });
}

export function deleteUser(studentNo) {
  return fetch({
    url: '/edit/deleteUser',
    method: 'post',
    data: {
      studentNo,
    }
  });
}

export function addAdmin(result) {
  return fetch({
    url: '/edit/addAdmin',
    method: 'post',
    data: {
      result
    }
  });
}

export function alterRank(studentNo, alterNumber, alterDetail, type) {
  return fetch({
    url: '/alter/alterRank',
    method: 'post',
    data: {
      studentNo,
      alterNumber,
      alterDetail,
      type
    }
  });
}

export function userAlterPassword(oldPassword, newPassword) {
  return fetch({
    url: '/alter/userAlterPassword',
    method: 'post',
    data: {
      oldPassword,
      newPassword
    }
  });
}

export function adminAlterPassword(oldPassword, newPassword) {
  return fetch({
    url: '/alter/adminAlterPassword',
    method: 'post',
    data: {
      oldPassword,
      newPassword
    }
  });
}
