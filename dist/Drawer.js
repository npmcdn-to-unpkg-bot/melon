/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","react","./Mask","./common/util/cxBuilder","./common/util/dom","./babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("react"),require("./Mask"),require("./common/util/cxBuilder"),require("./common/util/dom"),require("./babelHelpers"));else{var r={exports:{}};t(r.exports,e.react,e.Mask,e.cxBuilder,e.dom,e.babelHelpers),e.Drawer=r.exports}}(this,function(exports,e,t,r,i,o){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=o.interopRequireDefault(e),a=o.interopRequireDefault(t),s=o.interopRequireDefault(i),l=r.create("Drawer"),u={top:"bottom",bottom:"top",left:"right",right:"left"},p=function(e){function t(){return o.classCallCheck(this,t),o.possibleConstructorReturn(this,e.apply(this,arguments))}return o.inherits(t,e),t.prototype.render=function(){var e=this.props,t=e.children,r=e.open,i=e.position,p=e.size,c=e.mask,d=e.onHide,f=e.maskClickClose,h=r?0:-p;if(0>=p){var m="bottom"===i||"top"===i?s["default"].getClientHeight():s["default"].getClientWidth();h=r?-p:m}var y=p>0?{top:"bottom"===i?null:h,bottom:"top"===i?null:h,left:"right"===i?null:h,right:"left"===i?null:h,height:"bottom"===i||"top"===i?p:null,width:"left"===i||"right"===i?p:null}:{top:"bottom"===i?h:0,bottom:"top"===i?h:0,left:"right"===i?h:0,right:"left"===i?h:0,height:null,width:null},b=r?"0ms":"400ms",v=p>0?i:u[i],x=""+v+" 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, visibility 0ms cubic-bezier(0.23, 1, 0.32, 1) "+b,g=c?n["default"].createElement(a["default"],{show:r,onClick:f&&d?d:null}):null;return n["default"].createElement("div",{className:l(this.props).build()},n["default"].createElement("div",{className:l().part("window").build(),style:o["extends"]({},y,{opacity:r?1:0,visibility:r?"visible":"hidden",transition:x,WebkitTransition:x,MozTransition:x,msTransition:x})},t),g)},t}(e.Component);exports["default"]=p,p.displayName="Drawer",p.propTypes={position:e.PropTypes.oneOf(Object.keys(u)).isRequired,open:e.PropTypes.bool.isRequired,size:e.PropTypes.number.isRequired,mask:e.PropTypes.bool,maskClickClose:e.PropTypes.bool,onHide:e.PropTypes.func.isRequired},p.defaultProps={position:"left",open:!1,size:300,mask:!0,maskClickClose:!0}});