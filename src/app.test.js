import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

describe('App Component', () => {

	it('App is rendered and correct', () => {
		const component = renderer.create(<App />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

});
