import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

test('App is rendered', () => {
	const component = renderer.create(<App />);
	let tree = component.toJSON();
	expect(tree).toBeTruthy();
});
