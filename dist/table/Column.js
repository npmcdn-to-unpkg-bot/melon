/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","react","../babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("react"),require("../babelHelpers"));else{var r={exports:{}};t(r.exports,e.react,e.babelHelpers),e.Column=r.exports}}(this,function(exports,e,t){"use strict";function r(e){return null}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=r,r.displayName="TableColumn",r.propTypes={align:e.PropTypes.oneOf(["left","center","right"]),cellRenderer:e.PropTypes.func,dataKey:e.PropTypes.oneOfType([e.PropTypes.string,e.PropTypes.number]),title:e.PropTypes.string,width:e.PropTypes.number.isRequired},r.defaultProps={align:"left"},r._TABLE_COMPONENT_="COLUMN"});