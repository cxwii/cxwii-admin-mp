import { http } from '@/utils/http'
import type { useLoginType, useregisterType, deleteUserInfoType, updateUserInfoType } from './types'

// 登录
export const loginApi = (data: useLoginType) => {
  return http<any>({
    method: 'POST',
    url: '/login',
    data
  })
}

// 注册
export const registerApi = (data: useregisterType) => {
  return http<any>({ method: 'POST', url: '/regUser', data })
}

// 获取用户列表
export const getUserInfoListApi = () => {
  return http<any>({ method: 'GET', url: '/getUserInfoList' })
}

// 删除用户
export const deleteUserInfoApi = (data: deleteUserInfoType) => {
  return http<any>({ method: 'DELETE', url: '/deleteUserInfo', data })
}

// 修改用户信息
export const updateUserInfoList = (data: updateUserInfoType) => {
  return http<any>({ method: 'POST', url: '/updateUserInfoList', data })
}
