import babel from '@rollup/plugin-babel';
import banner from 'rollup-plugin-banner';
import { terser } from 'rollup-plugin-terser';
import Path from 'path';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: {
    name: 'ClickPassword',
    file: Path.resolve(__dirname, './dist/click-password.min.js'),
    format: 'umd'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'inline'
    }),
    terser(),
    banner(
      [
        'click-password v' + pkg.version + ' (' + pkg.homepage + ')',
        '',
        'Copyright (C) 2019. Free to use, very pleased to reserve my name: "Congzhou" '
      ].join('\n')
    )
  ]
};
