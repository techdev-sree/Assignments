module.exports = {
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['./tst/enzyme-setup.js']
};