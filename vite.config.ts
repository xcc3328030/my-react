import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import postcssPxtorem from 'postcss-pxtorem';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
          '@': path.resolve(__dirname, './src')
      }
  },
  css: {
    postcss: {
      plugins: [
        postcssPxtorem({
          rootValue: 70, // 设计稿宽度 / 10，例如设计稿宽度为 700，则 rootValue 为 700
          propList: ['*'], // 需要转换的属性，* 表示所有属性
          selectorBlackList: ['.norem'], // 忽略的类名，不转换 .norem 开头的类
        }),
      ],
    },
  },
})
