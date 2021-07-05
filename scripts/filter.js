'use strict'

const control = require('remark-message-control')

const filter = options => {
    const settings = options || /* istanbul ignore next */ {}

    if (settings.allow && settings.deny) {
        throw new Error('Do not provide both allow and deny configuration parameters')
    }

    return control({
        name: 'alex',
        reset: Boolean(settings.deny),
        enable: settings.deny,
        disable: settings.allow,
        source: ['retext-equality', 'retext-profanities'],
    })
}

module.exports = filter
