/* eslint-disable prettier/prettier */
import {Config} from 'jest'


 const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },

  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',

  moduleNameMapper: {
    "/^@application\/(.*)$/": "<rootDir/>/src/application/$1"
  },
  resolver: undefined
};

export default config;
