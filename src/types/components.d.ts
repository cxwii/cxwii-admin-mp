import cxwiiTest from '@/components/src/cxwiiTest.vue'

// 因为使用了uni的自动导入组件所以vue无法推出组件的类型
// 所以要么不用自动导入要么像下面这样自己书写全局的类型说明
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    cxwiiTest: typeof cxwiiTest
  }
}

// 实例的类型定义
export type cxwiiTestRefType = InstanceType<typeof cxwiiTest>
