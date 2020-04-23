import React from 'react';
import ProgressBar from './ProgressBar';
import renderer from "react-test-renderer"
import 'jest-styled-components'

describe('ProgressBar', () => {
    test('Inner div should have a width style of 100px with total width of 200px and percent of 50', () => {
        const tree = renderer.create(<ProgressBar percent={50} width={200} />).toJSON()
        expect(tree.children[0]).toHaveStyleRule('width', '100px');
    });

});