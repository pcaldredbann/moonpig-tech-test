import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TextBlock from './textBlock';

describe('TextBlock Component', () => {
    const renderer = new ShallowRenderer();

	test('collapses when text exceeds defined length', () => {
		const customProps = {
			text: 'Basic test',
			config: {
				limit: 5
			}
		};
		renderer.render(<TextBlock {...customProps} />);
		const result = renderer.getRenderOutput();

		expect(result.type).toBe('p');
		expect(result.props.children).toEqual('Basic...');
    });
    
    test('does not collapse when uneccesary', () => {
		const customProps = {
			text: 'This should be allowed.',
			config: {
				limit: 50
			}
		};
		renderer.render(<TextBlock {...customProps} />);
		const result = renderer.getRenderOutput();

		expect(result.type).toBe('p');
		expect(result.props.children).toEqual('This should be allowed.');
    });
});
