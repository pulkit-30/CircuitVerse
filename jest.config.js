module.exports = {
    setupFiles: ['./jest.setup.js'],
    testMatch: [
        '**/spec/**/*.spec.js',
    ],
    globals: {
        URL: 'http://localhost:8080',
    },
    verbose: true,
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        'typeface-nunito': 'identity-obj-proxy',
    },
};
