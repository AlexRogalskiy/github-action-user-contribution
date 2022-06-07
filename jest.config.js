// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
const path = require("path");

const ROOT = path.resolve(__dirname);
const SRC = path.resolve(ROOT, "src");
const LOCAL_PACKAGES = path.resolve(ROOT, "packages");
const COVERAGE_DIR = "<rootDir>/build2/reports/coverage/jest";
const REPORT_DIR = "<rootDir>/build2/reports/unit";

module.exports = {
    globals: {
        "ts-jest": {
            isolatedModules: "true"
        }
    },
    roots: ["<rootDir>/tests/"],
    verbose: true,
    clearMocks: true,
    restoreMocks: true,
    setupFiles: [
        "<rootDir>/tests/setup-jest.js"
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testEnvironment: "node",
    testMatch: ["**/*.test.(ts|js)", "**/__tests__/**/?(*.)+(spec|test).(ts|js)"],
    testRunner: "jest-circus/runner",
    testPathIgnorePatterns: [
        "<rootDir>/node_modules.*",
        "<rootDir>/__fixtures__.*",
        "<rootDir>/spec.*"
    ],
    watchPathIgnorePatterns: [
        "<rootDir>/src.*",
        "<rootDir>/tsconfig.json"
    ],
    globalSetup: ["<rootDir>/jest/jest-global-setup.js", "<rootDir>/jest/global-setup.js"],
    globalTeardown: ["<rootDir>/jest/jest-global-teardown.js", "<rootDir>/global-teardown.js"],
    transform: {
        "^.+\\.(js|ts)$": "ts-jest",
        "^.+\\.html$": "./jest/htmlLoader.js",
        "^.+\\.css$": "./jest/cssLoader.js"
    },
    snapshotSerializers: [
        "<rootDir>/node_modules/jest-html"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.(ts|js)",
        "!**/*.d.ts",
        "!**/*.folio.ts",
        "!**/*.spec.ts",
        "!**/dist/**",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!**/generated/**",
        "!**/__fixtures__/**",
        "!**/scenarios/**",
        "!**/redirects/**",
    ],
    coverageThreshold: {
        global: {
            branches: 4,
            functions: 4,
            lines: 4,
            statements: 4,
        },
    },
    coverageDirectory: "<rootDir>/coverage",
    testResultsProcessor: "jest-sonar-reporter",
    coverageReporters: [
        "json",
        "lcov",
        "text",
        "clover",
        "html"
    ],
    reporters: [
        "default",
        ["jest-junit", {
            usePathForSuiteName: true,
            suiteNameTemplate: "{filename}",
            outputName: "coverage/jest-junit/junit.xml",
            titleTemplate: "{classname} - {title}",
            ancestorSeparator: " - "
        }]
    ],
    watchPlugins: [
        "jest-watch-select-projects",
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
    ],
    setupFilesAfterEnv: ["jest-extended", "<rootDir>/jest/jest-env-timeout.js", "<rootDir>/jest/jest-env-mock.js"],
    coveragePathIgnorePatterns: [
        "<rootDir>/node_modules/"
    ],
}
