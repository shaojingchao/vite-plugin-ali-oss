import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginAliOss from '@shaojc/vite-plugin-ali-oss'
import type { AliOssOptions } from '@shaojc/vite-plugin-ali-oss'
import * as dotenv from 'dotenv'
import path from 'path'
dotenv.config({path: path.resolve(process.cwd(), '../../.env.local')})

const options: AliOssOptions = {
  region: process.env.VITE_REGION!,
  accessKeyId: process.env.VITE_ACCESS_KEY_ID!, //  Note: Add your accessKeyId
  accessKeySecret: process.env.VITE_ACCESS_KEY_SECRET!, // Note: Add your accessKeySecret
  bucket: process.env.VITE_BUCKET!,
  concurrency: 5,
  overwrite: true,
  // enabled: false,
  // test: true,
  // retry: 3
}

const prod = process.env.NODE_ENV === 'production'



// https://vite.dev/config/
export default defineConfig({
  base: prod ? 'https://cdn.tesoon.com/zhbk/dev-test/' : '/', // same with webpack public path
  plugins: [vue(), vitePluginAliOss(options)],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
