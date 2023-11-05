import cxwiiTest from '@/components/src/cxwiiTest.vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    cxwiiTest: typeof cxwiiTest
  }
}

// 实例的类型定义
export type cxwiiTestRefType = InstanceType<typeof cxwiiTest>
