const rules = require('@commitlint/config-conventional').rules;
const extendedRule = 'type-enum';

module.exports = {
    rules: {
        ...rules,
        [extendedRule]: [2, 'always', [...rules[extendedRule][2], 'release']],
        'references-empty': [2, 'never'],
        'header-max-length': () => [0, 'always', Infinity],
    },
    parserPreset: {
        parserOpts: {
            referenceActions: null,
            issuePrefixes: ['(FRS|EDU|BTC|SM|S21|UP)-[1-9]{1}[0-9]{0,}'],
        },
    },
    ignores: [
        (message) =>
            message.includes('[manually skip]') ||
            message.includes('[ci skip]') ||
            message.includes('[master]'),
    ],
};
