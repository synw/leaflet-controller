import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  assetsInclude: ['**/*.sqlite'],
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver()
      ],
    }),
    Icons({
      scale: 1.2,
      defaultClass: 'inline-block align-middle',
      compiler: 'vue3',
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/sql.js-httpvfs/dist/sqlite.worker.js',
          dest: 'assets'
        },
        {
          src: 'node_modules/sql.js-httpvfs/dist/sql-wasm.wasm',
          dest: 'assets'
        },
        {
          src: 'src/assets/db.sqlite',
          dest: 'assets'
        }
      ]
    }),
  ],
  // builds to github pages
  base: process.env.NODE_ENV === 'production' ? '/leaflet-controller/example/' : './',
  resolve: {
    alias: [
      { find: '@/', replacement: '/src/' },
      {
        find: 'vue',
        replacement: path.resolve("./node_modules/vue"),
      },
    ]
  },
})