/**
 * @file esui-react/Tabs
 * @author cxtom<cxtom2008@gmail.com>
 */

var React = require('react');
var createControl = require('./common/util/createControl');
var Tab = require('./Tab.jsx');


var TabInkBar = React.createClass({

    statics: {
        type: 'TabInkBar'
    },

    propTypes: {
        type: React.PropTypes.string
    },

    render: function() {

        var props = this.props;

        return (
            <li {...props}></li>
        );

    }

});

var InkBar = createControl(TabInkBar);


var TabPanel = React.createClass({

    statics: {
        type: 'TabPanel'
    },

    propTypes: {
        type: React.PropTypes.string,
        active: React.PropTypes.bool
    },

    render: function() {

        var props = this.props;

        return (
            <div {...props}>
                {props.children}
            </div>
        );

    }

});

var Panel = createControl(TabPanel);


var Tabs = React.createClass({

    statics: {
        type: 'Tabs'
    },

    propTypes: {
        disabled: React.PropTypes.bool,
        type: React.PropTypes.string,
        initialSelectedIndex: React.PropTypes.number,
        onChange: React.PropTypes.func,
        onBeforeChange: React.PropTypes.func
    },


    getInitialState: function (){

        var initialIndex = this.props.initialSelectedIndex || 0;

        return {
            selectedIndex: initialIndex
        };
    },

    getTabCount: function () {
        return React.Children.count(this.props.children);
    },

    getSelected: function (tab, index) {
        return this.state.selectedIndex === index;
    },

    handleClick: function (index, e) {

        if (index === this.state.selectedIndex) {
            return;
        }

        var onBeforeChange = this.props.onBeforeChange;

        if (onBeforeChange) {
            var cancel = onBeforeChange(index, e);
            if (cancel === false) {
                return;
            }
        }

        this.setState({selectedIndex: index});

        this.props.onChange && this.props.onChange(index, e);
    },

    render: function() {

        var props = this.props;

        var percent = 1 / this.getTabCount() * 100 + '%';

        var tabIndex = 0;

        var tabContent = [];

        var tabs = React.Children.map(props.children, function (tab, index) {

            var selected = this.getSelected(tab, index);
            var disabled = tab.props.disabled;

            if (selected) {
                tabIndex = index;
            }

            if (tab.props.children) {
                tabContent.push(React.createElement(Panel, {
                    key: index,
                    variants: selected ? ['active'] : []
                }, tab.props.children));
            }

            var tabProps = {
                key: index,
                selected: selected,
                disabled: disabled,
                tabIndex: index,
                style: {width: percent}
            };

            var variants = [];

            if (selected) {
                variants.push('active');
            }

            if (disabled) {
                variants.push('disabled');
            }
            else {
                tabProps.onClick = this.handleClick.bind(this, index);
            }

            tabProps.variants = variants;

            return React.cloneElement(tab, tabProps);

        }, this);

        var InkBarStyles = {
            width: percent,
            left: 'calc(' + percent + '*' + tabIndex + ')'
        };

        return (
            <div {...props}>
                <ul>
                    {tabs}
                    <InkBar style={InkBarStyles} />
                </ul>
                {tabContent}
            </div>
        );

    }

});

module.exports = createControl(Tabs);