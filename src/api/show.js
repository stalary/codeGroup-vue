import fetch from '@/utils/fetch';

export function showUser(type) {
  return fetch({
    url: '/show/showUserList',
    method: 'post',
    data: {
      type
    }
  });
}

export function showAdmin() {
  return fetch({
    url: '/show/showAdminList',
    method: 'post'
  });
}

export function showOneUser() {
  return fetch({
    url: '/show/showOneUser',
    method: 'post'
  });
}

export function showOneAdmin() {
  return fetch({
    url: '/show/showOneAdmin',
    method: 'post'
  });
}

export function showRank(keyId) {
  return fetch({
    url: '/show/showRank',
    method: 'post',
    data: {
      keyId
    }
  });
}
