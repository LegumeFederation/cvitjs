const npsUtils = require('nps-utils');
const series = npsUtils.series;
const rimraf = npsUtils.rimraf;
const concurrent = npsUtils.concurrent;

module.exports = {
    scripts: {
        build: {
            description: 'clean dist directory and run all builds',
            default: series(
                rimraf('dist'),
                rimraf('lib'),
                concurrent.nps('build.rollup', 'build.babel'),
                rimraf('lib/__tests__')
            ),
            rollup: 'rollup --config',
            babel: 'babel src -d lib',
            watch: 'babel src -d lib -w',
        },
    },
};