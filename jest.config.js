const path = require('path');

const ROOT = path.resolve(__dirname);
const SRC = path.resolve(ROOT, 'src');
const LOCAL_PACKAGES = path.resolve(ROOT, 'packages');
const COVERAGE_DIR = '<rootDir>/build2/reports/coverage/jest';
const REPORT_DIR = '<rootDir>/build2/reports/unit';

module.exports = {
    roots: ['<rootDir>/tests/'],
    verbose: true,
    clearMocks: true,
    restoreMocks: true,
    globalSetup: ['<rootDir>/jest/jest-global-setup.js', '<rootDir>/jest/global-setup.js'],
    globalTeardown: ['<rootDir>/jest/jest-global-teardown.js', '<rootDir>/global-teardown.js'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'node',
    testMatch: ['**/*.test.(ts|js)', '**/__tests__/**/?(*.)+(spec|test).ts'],
    testRunner: 'jest-circus/runner',
    testPathIgnorePatterns: ['/node_modules/', '/__fixtures__/', '/spec/'],
    transform: {
        '^.+\\.(js|ts)$': 'ts-jest',
    },
    snapshotSerializers: [
        '<rootDir>/node_modules/jest-html'
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.(ts|js)',
        '!**/*.d.ts',
        '!**/*.folio.ts',
        '!**/*.spec.ts',
        '!**/dist/**',
        '!**/node_modules/**',
        '!**/vendor/**',
        '!**/generated/**',
        '!**/__fixtures__/**',
        '!**/scenarios/**',
        '!**/redirects/**',
    ],
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageThreshold: {
        global: {
            branches: 4,
            functions: 4,
            lines: 4,
            statements: 4,
        },
    },
    coverageDirectory: './coverage',
    testResultsProcessor: 'jest-sonar-reporter',
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
    reporters: [
        'default',
        ['jest-junit', {
            usePathForSuiteName: true,
            suiteNameTemplate: "{filename}",
            outputName: "coverage/jest-junit/junit.xml",
            titleTemplate: "{classname} - {title}",
            ancestorSeparator: " - "
        }]
    ],
    setupFilesAfterEnv: ['jest-extended', '<rootDir>/jest/jest-env-timeout.js', '<rootDir>/jest/jest-env-mock.js'],
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
}
