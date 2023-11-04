import { defineStore } from 'pinia'

interface userStateType {
  username: string | null
  token: string | null
}

// 定义 Store
export const useUserStore = defineStore('user', {
  state: (): userStateType => {
    return {
      // 登录信息字段
      username: null,
      // 登录的token
      token: null
    }
  },
  getters: {
    getUsername(): string | null {
      return this.username
    },
    getToken(): string | null {
      return this.token
    }
  },
  actions: {
    setUsername(username: string | null) {
      this.username = username
    },
    setToken(token: string | null) {
      this.token = token
    }
  }
})
