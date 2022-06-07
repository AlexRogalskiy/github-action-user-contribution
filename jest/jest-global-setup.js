// import fetchMock from "jest-fetch-mock"

// rewire global.fetch to call 'fetchMock'
// fetchMock.enableMocks();

// Mock __non_webpack_require__ for tests
// globalThis.__non_webpack_require__ = jest.fn();

process.on('unhandledRejection', err => {
    fail(err)
})

module.exports = async () => console.log('\n\n>>> JEST global setup >>>\n\n')
