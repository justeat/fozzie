// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob');

const getAllSubdirectories = src => glob.sync(`${src}/**/`);

module.exports = {
    getAllSubdirectories
};
