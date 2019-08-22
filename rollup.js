import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    output: {
        format: 'iife',
    },
    plugins: [
        buble({
            objectAssign: 'Object.assign'
        }),
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
