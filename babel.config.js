module.exports = api => {
    const isTest = api.env('test');
    const presets = [];
    const plugins = [];

    if (!isTest) {
        api.cache(true);
    }

    // use for both test and dev/live
    presets.push('@babel/env');

    return {
        presets,
        plugins
    };
};
