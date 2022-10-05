/* eslint-disable import/no-extraneous-dependencies */
const stylelint = require('stylelint');
const stylelintConfig = require('@justeat/stylelint-config-fozzie');

const lintCSS = css => stylelint
    .lint({
        code: css,
        config: stylelintConfig,
        formatter: 'verbose'
    });

module.exports = {
    lintCSS
};
