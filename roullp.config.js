import { defineConfig } from 'rollup'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default defineConfig({
  input: 'src/index.js',
  output: [
    {
      file: 'lib/sparrow.js',
      format: 'cjs',
    },
    {
      file: 'esm/sparrow.js',
      format: 'es',
    },
    {
      file: 'lib/sparrow.js',
      format: 'umd',
    },
  ],
  plugins: [resolve(), babel()],
})
