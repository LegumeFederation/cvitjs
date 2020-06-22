

// Rollup plugins
import babel from 'rollup-plugin-babel';
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

const infile = 'src/main.js';

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
        browser: true,
        preferBuiltins: true,
        modulesOnly: false
    };
};

const babelOptions = () => {
    return {
        ignore:[ 'node_modules/**'], //do it this way because this one node_module is in es6
        babelrc: false,
        presets: [
            ["@babel/preset-env",{ "modules":false}],
            //["@babel/preset-react",{"pragma":"h"}]
        ],
        plugins: [
            'array-includes',
	    [
                '@babel/plugin-transform-react-jsx',
		{"pragma":"h"}
	    ]
        ]
    };
};

const cjsOptions = () => {
	return{
		include: 'node_modules/**',
		namedExports: {
			'paper' : ['paper'],
			'preact' : ['preact'],
		},
	};
};

export default [
    {
        input: infile,
        output: {
            name,
            file: pkg.module,
            format: 'esm',
            globals: {
		    preact : 'preact',
	    },
            //   sourcemap: true
        },
        plugins: [
            builtins(),
            // bundle css
            postcss(postcssOptions()),
            resolve(resolveOptions()),
            // transpile es6
            commonjs(cjsOptions()) ,
            babel(babelOptions()),
            terser(),
        ]
    },
    {
        input: infile,
        output: {
            name,
            file: 'build/cvit.js',
            format: 'iife',
            globals: {
		    preact : 'preact',
	    },
 //   sourcemap: true
        },
        plugins: [
       //     alias({
	//	    paper: 'paper/dist/paper-core'
	  //  }),
            builtins(),
            // bundle css
            postcss(postcssOptions()),
            resolve(resolveOptions()),
            // transpile es6
            commonjs(cjsOptions()) ,
            babel(babelOptions()),
        ]
    },
    {
        input: infile,
        output: {
            name,
            file: 'build/cvit.min.js',
            format: 'iife',
            globals: {
		    preact : 'preact',
	    },
            //   sourcemap: true
        },
        plugins: [
            builtins(),
            // bundle css
            postcss(postcssOptions()),
            resolve(resolveOptions()),
            // transpile es6
            commonjs(cjsOptions()) ,
            babel(babelOptions()),
            terser(),
        ]
    },
];

