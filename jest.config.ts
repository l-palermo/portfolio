const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(png|webp|jpg)$': '<rootDir>/__mocks__/fileMock.ts',
  },
  testEnvironment: 'jest-environment-jsdom',
};

const jestConfigWithOverrides = async (...args: unknown[]) => {
  const fn = createJestConfig(customJestConfig);
  const res = await fn(...args);

  res.moduleNameMapper = {
    '\\.(svg)$': '<rootDir>/__mocks__/svgMock.tsx',
    ...res.moduleNameMapper,
  };

  return res;
};

module.exports = jestConfigWithOverrides;
