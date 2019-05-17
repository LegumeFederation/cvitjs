//// Rollup plugins
//import globals from 'rollup-plugin-node-globals';
//import builtins from 'rollup-plugin-node-builtins';
//import commonjs from 'rollup-plugin-commonjs';
//import nodeResolve from 'rollup-plugin-node-resolve';
//import babel from 'rollup-plugin-babel';
////import jsx from 'rollup-plugin-jsx';
//import replace from 'rollup-plugin-replace';
//import {eslint}  from 'rollup-plugin-eslint';
//import postcss from 'rollup-plugin-postcss';
//import uglify from 'rollup-plugin-uglify';
//import serve from 'rollup-plugin-serve';
//import livereload from 'rollup-plugin-livereload';
//
//// PostCSS plugins
//import simplevars from 'postcss-simple-vars';
//import nested from 'postcss-nested';
//import cssnext from 'postcss-cssnext';
//import cssnano from 'cssnano';
//
//let pkg = require('./package.json');
//
//export default {
//  input: 'src/main.js',
//  output: {
//    file: 'build/cvit.min.js',
//    format: 'iife',
//    sourcemap: true
//  },
//  plugins: [
//    builtins(),
//    globals(),
//    // bundle css
//    postcss({
//      plugins: [
//        simplevars(),
//        nested(),
//        cssnext({ warnForDuplicates: false, }),
//        cssnano(),
//      ],
//      extensions: [ '.css' ],
//    }),
////    jsx( {factory: 'Preact.createElement'}),
//    // linter (see .eslintrc.json)
//    eslint({
//      exclude: [
//        'src/**/*.css',
//        'css/**/*.css'
//      ]
//    }),
//    nodeResolve({
//      jsnext: false,
//      main: false,
//      browser: true,
//      preferBuiltins: true,
//      modulesOnly: false
//    }),
//    // transpile es6
//    babel({
//      //ignore: /node_modules\/(?!ecma-proposal-math-extensions)/, //do it this way because this one node_module is in es6
//      ignore:[ /node_modules\/(?!unfetch)/], //do it this way because this one node_module is in es6
//      babelrc: false,
//      presets: [
//        ["@babel/preset-env",{ "modules":false}],
//        ["@babel/preset-react",{"pragma":"h"}]
//      ],
//      plugins: [
//        'array-includes'
//      ]
//    }),
//    commonjs({}),
//    // find node_modules
//    // import node_modules
//    // include the ENV so it can be evaluated at runtime
//    replace({
//      exclude: ['node_modules/**'],
//      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
//    }),
//    (process.env.WATCH === 'yes' && serve({
//      open: true,
//      verbose: true,
//      contentBase: '',
//      host: 'localhost',
//      port: 8888
//    })),
//    (process.env.WATCH === 'yes' && livereload()),
//    // uglify/minify only in production
//    (process.env.NODE_ENV === 'production' && uglify()),
//  ]
//};

// Rollup plugins
import babel from 'rollup-plugin-babel';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';
//PostCSS plugins
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import postcssEnv from 'postcss-preset-env'
import cssnano from 'cssnano';

const name = 'cvit';

const postcssOptions = () => {
    return {
        plugins: [
            simplevars(),
            nested(),
            postcssEnv({ warnForDuplicates: false, }),
            cssnano(),
        ],
        extensions: [ '.css' ],
    };
};

const resolveOptions = () => {
    return {
        jsnext: false,
        main: false,
        browser: true,
        preferBuiltins: true,
        modulesOnly: false
    };
};

const babelOptions = () => {
    return {
        ignore:[ /node_modules\/(?!unfetch)/], //do it this way because this one node_module is in es6
        babelrc: false,
        presets: [
            ["@babel/preset-env",{ "modules":false}],
            ["@babel/preset-react",{"pragma":"h"}]
        ],
        plugins: [
            'array-includes'
        ]
    };
};

export default [
    {
        input: 'src/main.js',
        output: {
            name,
            file: pkg.module,
            format: 'esm',
            //   sourcemap: true
        },
        plugins: [
            builtins(),
            globals(),
            // bundle css
            postcss(postcssOptions()),
            resolve(resolveOptions()),
            // transpile es6
            babel(babelOptions()),
            commonjs() ,
            terser(),
        ]
    },
    {
        input: 'src/main.js',
        output: {
            name,
            file: 'build/cvit.js',
            format: 'iife',
 //   sourcemap: true
        },
        plugins: [
            builtins(),
            globals(),
            // bundle css
            postcss(postcssOptions()),
            resolve(resolveOptions()),
            // transpile es6
            babel(babelOptions()),
            commonjs() ,
        ]
    },
    {
        input: 'src/main.js',
        output: {
            name,
            file: 'build/cvit.min.js',
            format: 'iife',
            //   sourcemap: true
        },
        plugins: [
            builtins(),
            globals(),
            // bundle css
            postcss(postcssOptions()),
            resolve(resolveOptions()),
            // transpile es6
            babel(babelOptions()),
            commonjs() ,
            terser(),
        ]
    },
];

