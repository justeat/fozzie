module.exports = {
    collectCoverageFrom: [
        'src/**/*.js'
    ],
    moduleFileExtensions: [
        'js',
        'json',
        'vue'
    ],
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    testMatch: [
        '** /*.{spec|test}.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
    ],
    testURL: 'http://localhost/'
};
