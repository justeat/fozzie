module.exports = api => {
    const isTest = api.env('test');
    const presets = [];
    const plugins = [];

    if (!isTest) {
        api.cache(true);
        presets.push('@babel/env');
    } else {
        // use current node version for transpiling test files
        presets.push(['@babel/env', { targets: { node: 'current' } }]);
    }

    return {
        presets,
        plugins
    };
};
