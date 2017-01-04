import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    format: 'iife',
    plugins: [
        buble(),
        resolve({
            jsnext: true,
            browser: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/**',
            sourceMap: false
        })
    ]
};
