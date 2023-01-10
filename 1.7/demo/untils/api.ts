import request from './http'

export function login(data: object) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}