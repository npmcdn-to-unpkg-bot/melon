/**
 * @file Card单测
 * @author cxtom(cxtom2008@gmail.com)
 */

import React from 'react';
import {createRenderer} from 'react-addons-test-utils';

import Card from '../../src/Card';

describe('Card', function () {

    it('work', function () {
        const renderer = createRenderer();
        renderer.render(
            <Card>test</Card>
        );
        let actualElement = renderer.getRenderOutput();
        let expectedElement = (
            <div className={'ui-card'}>test</div>
        );
        expect(actualElement).toEqualJSX(expectedElement);
    });

});
