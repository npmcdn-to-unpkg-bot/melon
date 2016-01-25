/**
 * @file common/component/ZippyNav
 * @author cxtom<cxtom2008@gmail.com>
 */

import React from 'react';
import Button from 'melon/Button';
import Link from 'melon/Link';

const cx = require('melon/common/util/cxBuilder').create('ZippyNav');
const locator = require('../../locator');
const _ = require('underscore');

const {
    Motion,
    spring
} = require('react-motion');


class ZippyNav extends React.Component {

    static displayName = 'ZippyNav';

    constructor(props) {
        super(props);
        this.state = {
            expand: props.expand || true
        };
    }

    render() {

        const {props, state} = this;

        const {
            current,
            nav,
            onActive,
            ...others
        } = props;

        const {expand} = state;

        const listHeight = nav.children.length * 32;

        return (
            <div {...others} className={cx(props).build()}>
                <dt>
                    <Button size={'xs'} onClick={() => {
                        this.setState({expand: !expand});
                    }}>
                        {nav.text}
                    </Button>
                </dt>
                <Motion style={{top: spring(expand ? 0 : -listHeight)}}>
                    {({top}) =>
                        <div style={{
                            overflow: 'hidden',
                            display: !expand && top === 0 ? 'none' : null
                        }}>
                            <dd style={{marginTop: Math.round(top)}}>
                                {_.map(nav.children, (item, index) =>
                                    <Link
                                        size={'xs'}
                                        states={{active: current.text === item.text}}
                                        key={index}
                                        onClick={() => onActive()}
                                        href={locator.createHref(item.pathname, item.query)}>
                                        {item.text}
                                    </Link>
                                )}
                            </dd>
                        </div>
                    }
                </Motion>
            </div>
        );
    }

}

export default ZippyNav;