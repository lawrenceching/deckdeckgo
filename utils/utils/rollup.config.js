// Source to setup the build
// https://github.com/rollup/rollup-starter-lib
// https://buzut.net/configurer-rollup-bundles-esm-cjs/
// https://dev.to/proticm/how-to-setup-rollup-config-45mk

import typescript from 'rollup-plugin-typescript';
import pkg from './package.json';

export default {
    input: './src/index.ts',
    plugins: [
        typescript()
    ],
    output: {
        format: 'cjs',
        file: pkg.main
    }
}

