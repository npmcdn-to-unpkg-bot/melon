/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","react","../common/util/cxBuilder","../common/util/dom","../common/util/fn","../babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("react"),require("../common/util/cxBuilder"),require("../common/util/dom"),require("../common/util/fn"),require("../babelHelpers"));else{var r={exports:{}};t(r.exports,e.react,e.cxBuilder,e.dom,e.fn,e.babelHelpers),e.Bar=r.exports}}(this,function(exports,e,t,r,n,i){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var o=i.interopRequireDefault(e),a=i.interopRequireWildcard(r),s=t.create("ScrollviewBar"),l=function(e){function t(r){i.classCallCheck(this,t);var o=i.possibleConstructorReturn(this,e.call(this,r));return o.removeStateShow=n.throttle(o.removeStateShow.bind(o),100),o.onBarMouseDown=o.onBarMouseDown.bind(o),o.onMouseDown=o.onMouseDown.bind(o),o.onMouseUp=o.onMouseUp.bind(o),o.onMouseMove=o.onMouseMove.bind(o),o.state={},o}return i.inherits(t,e),t.prototype.componentDidMount=function(){this.positionThumb()},t.prototype.shouldComponentUpdate=function(e){if(Math.abs(e.position-this.props.position)<5e-4)return!1;else return a.addClass(this.refs.main,"state-show"),this.removeStateShow(),!0},t.prototype.componentDidUpdate=function(){this.positionThumb()},t.prototype.componentWillUnmount=function(){this.clearTimer()},t.prototype.positionThumb=function(){var e=this.refs,t=e.main,r=e.thumb,n=this.props,i=n.direction,o=n.position,a=n.thumbSize,s="vertical"===i,l=s?"top":"left";this.barSize=t[s?"offsetHeight":"offsetWidth"]-a-4,r.style[s?"height":"width"]=a+"px",r.style[l]=Math.round(o*this.barSize)+"px"},t.prototype.getMousePosition=function(e,t){if(t)return e.pageY||e.clientY;else return e.pageX||e.clientX},t.prototype.clearTimer=function(){if(this.timer)clearTimeout(this.timer)},t.prototype.removeStateShow=function(){this.clearTimer();var e=this.refs.main;this.timer=setTimeout(function(){a.removeClass(e,"state-show")},1800)},t.prototype.onBarMouseDown=function(e){var t=e.target;if(t!==this.refs.thumb){var r=this.props,n=r.direction,i=r.thumbSize,o=this.refs.main,s=this,l="vertical"===n,u=l?"top":"left",p=o[l?"offsetHeight":"offsetWidth"]-i-4,c=this.getMousePosition(e,l)-a.getPosition(o)[u],d=c-i/2;d=d>p?p:d,d=0>d?0:d,s.fireAction("change",d/p),e.preventDefault()}},t.prototype.onMouseDown=function(e){var t=document.body;a.addClass(t,"ui-noselect");var r="vertical"===this.props.direction,n=r?"top":"left";this.thumbStart=parseInt(this.refs.thumb.style[n],10)||0,this.moveStart=this.getMousePosition(e,r),a.on(t,"mousemove",this.onMouseMove),a.on(t,"mouseup",this.onMouseUp),e.preventDefault()},t.prototype.onMouseMove=function(e){e=e||window.event;var t="vertical"===this.props.direction,r=this.getMousePosition(e,t);r-=this.moveStart;var n=Math.min(this.barSize,Math.max(0,this.thumbStart+r));this.fireAction("change",n/this.barSize)},t.prototype.onMouseUp=function(e){var t=document.body;a.removeClass(t,"ui-noselect"),a.off(t,"mousemove",this.onMouseMove),a.off(t,"mouseup",this.onMouseUp),this.thumbStart=this.moveStart=0},t.prototype.fireAction=function(e,t){var r={action:e,position:t,target:this},n=this.props.onAction;n&&n(r)},t.prototype.render=function(){return o["default"].createElement("div",i["extends"]({},this.props,{ref:"main",className:s(this.props).addVariants(this.props.direction).build(),onMouseDown:this.onBarMouseDown}),o["default"].createElement("div",{ref:"thumb",className:s().part("thumb").build(),onMouseDown:this.onMouseDown}))},t}(e.Component);exports["default"]=l,l.displayName="ScrollViewBar",l.propTypes={direction:e.PropTypes.oneOf(["vertical","horizontal"]).isRequired,position:e.PropTypes.number.isRequired,thumbSize:e.PropTypes.number,show:e.PropTypes.bool,onAction:e.PropTypes.func}});