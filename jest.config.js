module.exports = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	moduleDirectories: ['node_modules', 'src'],
	moduleNameMapper: {
		'\\.(scss|sass|css)$': 'identity-obj-proxy',
	},
	collectCoverage: true,
	collectCoverageFrom: ['**/*.{tss,tsx}', '!**/node_modules/**'],
}
