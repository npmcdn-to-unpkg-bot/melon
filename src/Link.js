/**
 * @file melon/Link
 * @author leon(ludafa@outlook.com)
 */

import React from 'react';

import {create} from 'melon-core/classname/cxBuilder';

const cx = create('Link');

/* eslint-disable fecs-prefer-class */

/**
 * melon/Link
 *
 * @param {Object} props     属性
 * @return {ReactElement}
 */
export default function Link(props) {

    return (
        <a {...props} className={cx(props).build()} />
    );

}

Link.displayName = 'Link';

/* eslint-enable fecs-prefer-class */
