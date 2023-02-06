module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  setupFiles: ['./tests/jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@makard|@react-navigation|frames-react-native|@sentry/.*|@react-native)',
  ],
  collectCoverage: true,
  coverageReporters: ['cobertura', 'lcov', 'html', 'text-summary'],
  reporters: ['default'],
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
};
