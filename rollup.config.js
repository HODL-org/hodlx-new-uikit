import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import pkg from './package.json';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    url(),
    typescript(),
    commonjs({
      namedExports: {
        'react-dom': ['createPortal', 'findDOMNode'],
      },
    }),
  ],
};
