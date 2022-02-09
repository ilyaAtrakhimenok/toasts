import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';
import extensions from 'rollup-plugin-extensions';
export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      }
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      extensions({
        extensions: ['.jsx', '.js'],
      }),
      alias({
        resolve: [".js", ".jsx", '/index.js', '/index.jsx'],
        entries: [
          { find: '@', replacement: './src' },
        ]
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      external(),
      nodeResolve({
        extensions: ['.js', '.jsx'],
        module: true,
      }),
      terser(),
    ],
    external: ['styled-components'],
    globals: { 'styled-components': 'styled' },
  }
];