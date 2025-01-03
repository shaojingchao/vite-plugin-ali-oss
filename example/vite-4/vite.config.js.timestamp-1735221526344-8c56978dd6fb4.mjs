// vite.config.js
import { defineConfig } from "file:///Users/shaojc/code/npmjs/vite-plugin-ali-oss/node_modules/.pnpm/vite@4.5.0_@types+node@22.10.1/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/shaojc/code/npmjs/vite-plugin-ali-oss/node_modules/.pnpm/@vitejs+plugin-vue@4.5.1_vite@4.5.0_@types+node@22.10.1__vue@3.3.9_typescript@5.7.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vitePluginAliOss from "file:///Users/shaojc/code/npmjs/vite-plugin-ali-oss/node_modules/.pnpm/vite-plugin-ali-oss@1.0.10_vite@4.5.0_@types+node@22.10.1_/node_modules/vite-plugin-ali-oss/index.js";
import * as dotenv from "file:///Users/shaojc/code/npmjs/vite-plugin-ali-oss/node_modules/.pnpm/dotenv@16.0.1/node_modules/dotenv/lib/main.js";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
var options = {
  region: "oss-cn-beijing",
  accessKeyId: process.env.VITE_ACCESS_KEY_ID,
  //  Note: Add your accessKeyId
  accessKeySecret: process.env.VITE_ACCESS_KEY_SECRET,
  // Note: Add your accessKeySecret
  bucket: "xiaweiss"
  // overwrite: false,
  // enabled: false,
  // test: true,
};
var prod = process.env.NODE_ENV === "production";
var vite_config_default = defineConfig({
  base: prod ? "https://cdn.tesoon.com/zhbk/dev-test/" : "/",
  // same with webpack public path
  plugins: [vue(), vitePluginAliOss(options)]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2hhb2pjL2NvZGUvbnBtanMvdml0ZS1wbHVnaW4tYWxpLW9zcy9leGFtcGxlL3ZpdGUtNFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3NoYW9qYy9jb2RlL25wbWpzL3ZpdGUtcGx1Z2luLWFsaS1vc3MvZXhhbXBsZS92aXRlLTQvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3NoYW9qYy9jb2RlL25wbWpzL3ZpdGUtcGx1Z2luLWFsaS1vc3MvZXhhbXBsZS92aXRlLTQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdml0ZVBsdWdpbkFsaU9zcyBmcm9tICd2aXRlLXBsdWdpbi1hbGktb3NzJ1xuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudidcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5kb3RlbnYuY29uZmlnKHtwYXRoOiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy5lbnYubG9jYWwnKX0pXG5cblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgcmVnaW9uOiAnb3NzLWNuLWJlaWppbmcnLFxuICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuVklURV9BQ0NFU1NfS0VZX0lELCAvLyAgTm90ZTogQWRkIHlvdXIgYWNjZXNzS2V5SWRcbiAgYWNjZXNzS2V5U2VjcmV0OiBwcm9jZXNzLmVudi5WSVRFX0FDQ0VTU19LRVlfU0VDUkVULCAvLyBOb3RlOiBBZGQgeW91ciBhY2Nlc3NLZXlTZWNyZXRcbiAgYnVja2V0OiAneGlhd2Vpc3MnLFxuICAvLyBvdmVyd3JpdGU6IGZhbHNlLFxuICAvLyBlbmFibGVkOiBmYWxzZSxcbiAgLy8gdGVzdDogdHJ1ZSxcbn1cblxuY29uc3QgcHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IHByb2QgPyAnaHR0cHM6Ly9mb28uY29tL2Jhc2UvJyA6ICcvJywgLy8gc2FtZSB3aXRoIHdlYnBhY2sgcHVibGljIHBhdGhcbiAgcGx1Z2luczogW3Z1ZSgpLCB2aXRlUGx1Z2luQWxpT3NzKG9wdGlvbnMpXVxufSlcbi8vIHJlc3VsdDogZGlzdC9hc3NldHMvdmVuZG9yLmJmYjkyYjc3LmpzID0+IGh0dHBzOi8vZm9vLmNvbS9iYXNlL2Fzc2V0cy92ZW5kb3IuYmZiOTJiNzcuanNcblxuXG4vLyBleHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuLy8gICBiYXNlOiAnaHR0cHM6Ly9mb28uY29tL2Jhc2UvJywgLy8gbXVzdCBiZSBVUkxcbi8vICAgcGx1Z2luczogW3Z1ZSgpLCB2aXRlUGx1Z2luQWxpT3NzKG9wdGlvbnMpXSxcbi8vICAgYnVpbGQ6IHtcbi8vICAgICBvdXREaXI6ICdmb28nXG4vLyAgIH1cbi8vIH0pXG4vLyByZXN1bHQ6IGZvby9hc3NldHMvdmVuZG9yLmJmYjkyYjc3LmpzID0+IGh0dHBzOi8vZm9vLmNvbS9iYXNlL2Fzc2V0cy92ZW5kb3IuYmZiOTJiNzcuanNcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVcsU0FBUyxvQkFBb0I7QUFDaFksT0FBTyxTQUFTO0FBQ2hCLE9BQU8sc0JBQXNCO0FBQzdCLFlBQVksWUFBWTtBQUN4QixPQUFPLFVBQVU7QUFDVixjQUFPLEVBQUMsTUFBTSxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsWUFBWSxFQUFDLENBQUM7QUFHL0QsSUFBTSxVQUFVO0FBQUEsRUFDZCxRQUFRO0FBQUEsRUFDUixhQUFhLFFBQVEsSUFBSTtBQUFBO0FBQUEsRUFDekIsaUJBQWlCLFFBQVEsSUFBSTtBQUFBO0FBQUEsRUFDN0IsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUlWO0FBRUEsSUFBTSxPQUFPLFFBQVEsSUFBSSxhQUFhO0FBR3RDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU0sT0FBTywwQkFBMEI7QUFBQTtBQUFBLEVBQ3ZDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLE9BQU8sQ0FBQztBQUM1QyxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
