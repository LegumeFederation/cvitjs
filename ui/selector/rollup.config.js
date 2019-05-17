// Rollup plugins
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';
//PostCSS plugins
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import presetEnv from 'postcss-preset-env'
import cssnano from 'cssnano';

const name = 'gtselect';

const babelOptions = () => {
  return {
    babelrc: false,
    presets: [
      '@babel/preset-env',
      ["@babel/preset-react",{"pragma":"h"}]
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  };
};

const postcssOptions = () => {
  return {
    plugins: [
      simplevars(),
      nested(),
      presetEnv(),
      cssnano(),
    ],
    extensions: ['.css'],
  };
};

export default [
  {
    input: 'src/main.js',
    output: {
      name,
      file: pkg.module,
      format: 'esm',
    },
    plugins: [postcss(postcssOptions()),babel(babelOptions()), resolve(), commonjs(), terser()],
  },
  {
    input: 'src/main.js',
    output: {
      name,
      file: 'build/gtselect.js',
      format: 'iife',
    },
    plugins: [postcss(postcssOptions()),babel(babelOptions()), resolve(), commonjs()],
  },
  {
    input: 'src/main.js',
    output: {
      name,
      file: 'build/gtselect.min.js',
      format: 'iife',
    },
    plugins: [postcss(postcssOptions()),babel(babelOptions()), resolve(), commonjs(), terser()],
  },
];

