module.exports = {

	transform: {
		'^.+\\.(js|jsx)?$': 'babel-jest'
	},

	verbose: true,

	roots: ['./'],

	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>mocks/styleMock.js',
		'\\.(gif|ttf|eot|svg|png)$': '<rootDir>mocks/fileMock.js'
	}

};
