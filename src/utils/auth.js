import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token';

const Role = 'roles';

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getRole() {
  return Cookies.get(Role)
}

export function setRole(roles) {
  return Cookies.set(Role, roles)
}

export function removeRole() {
  return Cookies.remove(Role)
}


