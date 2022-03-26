'use strict';
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./e2e/tests/*.spec.ts'],
    params: {
        baseUrl: 'https://www.lego.com/es-es'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000,
    }
};
require('ts-node').register({
    project: 'tsconfig.json',
});
