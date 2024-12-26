import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginAliOss from '@shaojc/vite-plugin-ali-oss'
import * as dotenv from 'dotenv'
import path from 'path'
dotenv.config({path: path.resolve(process.cwd(), '../../.env.local')})


const options = {
  region: process.env.VITE_REGION,
  accessKeyId: process.env.VITE_ACCESS_KEY_ID, //  Note: Add your accessKeyId
  accessKeySecret: process.env.VITE_ACCESS_KEY_SECRET, // Note: Add your accessKeySecret
  bucket: process.env.VITE_BUCKET,
  concurrency: 10,
  // overwrite: false,
  // enabled: false,
  // test: true,
}

const prod = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  base: prod ? 'https://cdn.tesoon.com/zhbk/dev-test/' : '/', // same with webpack public path
  plugins: [vue(), vitePluginAliOss(options)]
})
// result: dist/assets/vendor.bfb92b77.js => https://cdn.tesoon.com/zhbk/dev-test/assets/vendor.bfb92b77.js


// export default defineConfig({
//   base: 'https://cdn.tesoon.com/zhbk/dev-test/', // must be URL
//   plugins: [vue(), vitePluginAliOss(options)],
//   build: {
//     outDir: 'foo'
//   }
// })
// result: foo/assets/vendor.bfb92b77.js => https://cdn.tesoon.com/zhbk/dev-test/assets/vendor.bfb92b77.js
