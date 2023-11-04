import { createPinia } from 'pinia'

// 创建 pinia 实例
const pinia = createPinia()

// 默认导出，给 main.ts 使用
export { pinia }

// 模块统一导出
export * from './modules/user'
