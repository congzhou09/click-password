import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import Path from 'path';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    name: 'ClickPassword',
    file: Path.resolve(__dirname, './dist/click-password.min.js'),
    format: 'umd',
    banner: `/** \n * ${pkg.name} v${pkg.version} (${pkg.homepage}) \n */ \n`
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({ compilerOptions: { declaration: false } }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime'
    }),
    terser({
      format: {
        comments: RegExp(`${pkg.name}`)
      }
    })
  ]
};
