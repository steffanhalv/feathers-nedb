import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
    input: 'lib/index.js',
    output: {
        file: 'dist/index.js',
        format: 'esm'
    },
    plugins: [
        resolve({
            browser: true,
            preferBuiltins: false,
            alias: {
                crypto: 'crypto-browserify'
            }
        }),
        commonjs(),
        json()
    ]
}