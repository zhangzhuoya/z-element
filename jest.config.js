module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@element/(.*)$': '<rootDir>/src/components/element/$1',
  },
};
