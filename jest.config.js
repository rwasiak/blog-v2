module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest/setup-test-env.js'],
  setupFiles: [`<rootDir>/jest/loadershim.js`],
  transform: {
    '^.+\\.(tsx?|jsx?)$': `<rootDir>/jest/jest-preprocess.js`,
  },
  moduleDirectories: ['node_modules', 'jest/customRender'],
  moduleNameMapper: {
    'typeface-*': 'identity-obj-proxy',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/jest/__mocks__/mediaFileTransformer.js`,
    '\\.svg': '<rootDir>/jest/__mocks__/svgrMock.js',
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `.cache`,
    `<rootDir>.*/public`,
    `coverage`,
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  collectCoverageFrom: ['src/components/**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
