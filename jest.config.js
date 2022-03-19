module.exports = {
    modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
    globals: {
        URL: 'http://localhost:8080',
    },
    testMatch: [
        '**/spec/**/*.spec.js',
    ],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    verbose: true,
};
