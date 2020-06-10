import config from './rollup.config';
const infile = 'src/drupalMain.js';
config.forEach(step => step.input = infile);
export default config