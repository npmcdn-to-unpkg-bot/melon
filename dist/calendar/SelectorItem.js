/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","react","../common/util/cxBuilder","./Item","../common/util/date","../babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("react"),require("../common/util/cxBuilder"),require("./Item"),require("../common/util/date"),require("../babelHelpers"));else{var r={exports:{}};t(r.exports,e.react,e.cxBuilder,e.Item,e.date,e.babelHelpers),e.SelectorItem=r.exports}}(this,function(exports,e,t,r,o,i){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=i.interopRequireDefault(e),a=i.interopRequireDefault(r),s=i.interopRequireWildcard(o),l=t.create("CalendarSelectorItem"),u=function(e){function t(){return i.classCallCheck(this,t),i.possibleConstructorReturn(this,e.apply(this,arguments))}return i.inherits(t,e),t.prototype.render=function(){var e=this.props,t=e.date,r=e.mode,o=e.disabled,a=e.selected,u=i.objectWithoutProperties(e,["date","mode","disabled","selected"]);return n["default"].createElement("li",i["extends"]({},u,{"data-mode":r,"data-value":t,onClick:o?null:this.onClick,className:l(e).addStates({selected:a}).build()}),n["default"].createElement("span",null,"year"===r?t.getFullYear():s.getShortMonth(t)))},t}(a["default"]);exports["default"]=u,u.displayName="CalendarSelectorItem",u.propTypes={date:e.PropTypes.object.isRequired,onClick:e.PropTypes.func,disabled:e.PropTypes.bool,selected:e.PropTypes.bool,mode:e.PropTypes.oneOf(["month","year"])}});