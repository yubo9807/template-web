import { AnyObj } from "@/utils/type"

/**
 * 登陆
 * @returns 
 */
export function api_login(data: AnyObj) {
  return Promise.resolve([null, {
    code: 200,
    data: {
      token: '1234567890',
    },
  }])
}

/**
 * 获取用户信息
 * @returns 
 */
export function api_getUserInfo() {
  return Promise.resolve([null, {
    code: 200,
    data: {
      name: 'admin',
      role: 0,
    },
  }])
}
