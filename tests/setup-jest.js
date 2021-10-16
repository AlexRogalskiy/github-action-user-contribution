import * as log from 'loglevel';

if (process.env.DEBUG) {
    log.setLevel('debug');
} else {
    log.disableAll();
}

global.__NODE_ENV__ = 'test'
global.fetch = () => {
    console.log('fetch is mocked')
}
