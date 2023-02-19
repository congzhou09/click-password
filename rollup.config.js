import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import Path from 'path';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: {
    name: 'ClickPassword',
    file: Path.resolve(__dirname, './dist/click-password.min.js'),
    format: 'umd',
    banner: `/** \n * ${pkg.name} v${pkg.version} (${pkg.homepage}) \n */ \n`
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'inline'
    }),
    terser({
      format: {
        comments: RegExp(`${pkg.name}`)
      }
    })
  ]
};
