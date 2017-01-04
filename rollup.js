import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';

export default {
    format: 'iife',
    plugins: [ buble(), resolve({
        jsnext: true,
        browser: true
    }) ]
};
