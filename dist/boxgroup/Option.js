/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","react","../common/util/cxBuilder","../Icon","../ripples/CenterRipple","../babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("react"),require("../common/util/cxBuilder"),require("../Icon"),require("../ripples/CenterRipple"),require("../babelHelpers"));else{var r={exports:{}};t(r.exports,e.react,e.cxBuilder,e.Icon,e.CenterRipple,e.babelHelpers),e.Option=r.exports}}(this,function(exports,e,t,r,o,i){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=i.interopRequireDefault(e),a=i.interopRequireDefault(r),s=i.interopRequireDefault(o),l=t.create("BoxGroupOption"),u=function(e){function t(r){i.classCallCheck(this,t);var o=i.possibleConstructorReturn(this,e.call(this,r));return o.onClick=o.onClick.bind(o),o}return i.inherits(t,e),t.prototype.onClick=function(){this.refs.ripple&&this.refs.ripple.animate()},t.prototype.getIcon=function(e,r){return t.Icons[e][r?"checked":"unchecked"]},t.prototype.render=function(){var e=this.props,t=e.boxModel,r=e.checked,o=e.disabled,i=l(e).addStates({checked:r}).build(),u=this.getIcon(t,r);return n["default"].createElement("label",{className:i,onClick:o?null:this.onClick},n["default"].createElement("input",{disabled:o,checked:r,type:e.boxModel,value:e.value,name:e.name,onChange:e.onChange}),n["default"].createElement(a["default"],{icon:u}),e.label,o?null:n["default"].createElement(s["default"],{ref:"ripple"}))},t}(e.Component);exports["default"]=u,u.displayName="BoxGroupOption",u.propTypes={boxModel:e.PropTypes.oneOf(["radio","checkbox"]).isRequired,label:e.PropTypes.string,value:e.PropTypes.string,checked:e.PropTypes.bool,name:e.PropTypes.string,disabled:e.PropTypes.bool,onChange:e.PropTypes.func.isRequired},u.Icons={radio:{checked:"radio-button-checked",unchecked:"radio-button-unchecked"},checkbox:{checked:"check-box",unchecked:"check-box-outline-blank"}}});