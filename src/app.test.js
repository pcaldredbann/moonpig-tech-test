import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

describe('App Component', () => {
	test('App is rendered and correct', () => {
		const component = renderer.create(<App />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
