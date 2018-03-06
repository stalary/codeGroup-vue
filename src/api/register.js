import fetch from '@/utils/fetch';

export function register(result) {
  return fetch({
    url: '/login/userRegister',
    method: 'post',
    data: {
      result
    }
  });
}

