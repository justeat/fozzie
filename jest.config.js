module.exports = {
    collectCoverageFrom: [
        'src/**/*.js'
    ],

    moduleFileExtensions: [
        'js',
        'json',
        'vue'
    ],

    testEnvironment: 'jsdom',

    testMatch: [
        '**/*.{spec,test}.(js|jsx|ts|tsx)',
        '**/__tests__/*.(js|jsx|ts|tsx)'
    ],

    testPathIgnorePatterns: [
        '/.yalc/'
    ],

    testURL: 'http://localhost/',

    transform: {
        '^.+\\.js$': 'babel-jest'
    }
};
