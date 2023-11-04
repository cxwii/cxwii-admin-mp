import { useUserStore } from '@/store/modules/user'
const userStore = useUserStore()

const baseURL = 'http://127.0.0.1:9528/api'

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }

    options.timeout = 10000

    options.header = {
      ...options.header,
      // 小程序特殊的请求头,主要看后端需要吗
      'source-client': 'miniapp'
    }

    if (userStore.getToken) {
      options.header.Authorization = userStore.getToken
    }
  }
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  status: number
  message: string
  data: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode == 401) {
          userStore.setToken(null)
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            title: (res.data as Data<T>).message || '请求错误',
            icon: 'none'
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          title: '网络错误',
          icon: 'none'
        })
        reject(err)
      }
    })
  })
}
