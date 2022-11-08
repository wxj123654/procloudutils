const path = require('path')
const pkg = require('./package.json')
const ts = require('rollup-plugin-ts')

const resolve = function (...args) {
  return path.resolve(__dirname, ...args)
}

module.exports = [
  {
    input: resolve('./src/index.ts'),
    outDir: './lib',
    output: {
      file: resolve('./', pkg.main), // 为了项目的统一性，这里读取 package.json 中的配置项
      format: 'umd',
      name: 'index'
    },
    plugins: [
      ts({
        /* Plugin options */
        tsconfig: './tsconfig.json'
      })
    ]
  }
]
