/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","react","../common/util/cxBuilder","../common/util/date","./Item","../babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("react"),require("../common/util/cxBuilder"),require("../common/util/date"),require("./Item"),require("../babelHelpers"));else{var r={exports:{}};t(r.exports,e.react,e.cxBuilder,e.date,e.Item,e.babelHelpers),e.Day=r.exports}}(this,function(exports,e,t,r,i,o){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=o.interopRequireDefault(e),a=o.interopRequireWildcard(r),l=o.interopRequireDefault(i),s=t.create("CalendarDay"),u=function(e){function t(){return o.classCallCheck(this,t),o.possibleConstructorReturn(this,e.apply(this,arguments))}return o.inherits(t,e),t.prototype.render=function(){var e=this.props,t=e.date,r=e.selected,i=o.objectWithoutProperties(e,["date","selected"]),l=s(this.props).addVariants(a.isEqualDate(t,new Date)?"today":null).addStates({selected:r}).build();return n["default"].createElement("a",o["extends"]({},i,{className:l,href:"#",onClick:this.onClick}),t.getDate())},t}(l["default"]);exports["default"]=u,u.displayName="CalendarDay",u.propTypes={date:e.PropTypes.object.isRequired,onClick:e.PropTypes.func,disabled:e.PropTypes.bool,selected:e.PropTypes.bool}});