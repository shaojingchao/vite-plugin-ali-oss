vite-plugin-ali-oss
=======

Aliyun OSS(open storage service) JavaScript SDK for the vite project

[中文文档](https://github.com/xiaweiss/vite-plugin-ali-oss/blob/master/README_CN.md)

# Feature

- Skip existing files by default (files will not be downloaded) to speed up upload.
- Almost zero configuration, using vite outDir path, uploading to the same path of oss.
> Upload all files except html files, because html files has no hash and is usually placed on the server.



# Installation

```
pnpm i -D vite-plugin-ali-oss
```

or

```bash
yarn add -D vite-plugin-ali-oss
```

or

```bash
npm i -D vite-plugin-ali-oss
```

# Basic usage

1. Register the plugin in `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginAliOss from 'vite-plugin-ali-oss'

const options = {
  region: '<Your Region>'
  accessKeyId: '<Your Access Key ID>',
  accessKeySecret: '<Your Access Key Secret>',
  bucket: '<Your Bucket>'
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '<Public Path>', // eg: 'https://xiawei.cc/',
  plugins: [vue(), vitePluginAliOss(options)]
})
```

2. Build Production

```
pnpm run build
```

The plugin will upload files of outDir path after bundle.

# options

| options         | description                                                               | type    | default       |
|-----------------|---------------------------------------------------------------------------|---------|---------------|
| region          | ali cloud oss region                                                      | string  |               |
| accessKeyId     | ali cloud oss accessKeyId                                                 | string  |               |
| accessKeySecret | ali cloud oss accessKeySecret                                             | string  |               |
| bucket          | ali cloud oss bucket                                                      | string  |               |
| overwrite       | If the file already exists, whether to skip upload                        | boolean | false         |
| ignore          | Ignore file rules. If you use empty string `''`, no files will be ignored | string  | `'**/*.html'` |




