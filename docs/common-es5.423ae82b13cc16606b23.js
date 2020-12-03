function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3WFG":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n("HDdC"),o=[{id:1,title:"Example Event (Read description)",start:new Date(Date.now()),end:new Date(Date.now()),place:"Europe",description:"All events unencrypted saved in your local browser storage. This is just a test app!",participants:[]}],i=n("fXoL"),l=((r=function(){function e(){_classCallCheck(this,e),this._myEvents=JSON.parse(localStorage.getItem("myCalendar")),null===this._myEvents&&(this._myEvents=o,this._saveLocalEvents())}return _createClass(e,[{key:"_saveLocalEvents",value:function(){localStorage.setItem("myCalendar",JSON.stringify(this._myEvents))}},{key:"getAllEvents",value:function(){var e=[];return this._myEvents.forEach((function(t){e.push({id:t.id,title:t.title,start:t.start,end:t.end,place:t.place})})),new a.a((function(t){t.next(e),t.complete()}))}},{key:"getEventDetailsById",value:function(e){var t;return this._myEvents.forEach((function(n){n.id==e&&(t=new a.a((function(e){e.next(n),e.complete()})))})),t}},{key:"addEvent",value:function(e){var t=this;return e.id=Date.now(),this._myEvents.push(e),this._saveLocalEvents(),new a.a((function(e){e.next(t._myEvents),e.complete()}))}},{key:"editEvent",value:function(e){var t,n=this,r=_createForOfIteratorHelper(this._myEvents.entries());try{for(r.s();!(t=r.n()).done;){var o=_slicedToArray(t.value,2),i=o[0];if(o[1].id===e.id)return this._myEvents[i]=e,void this._saveLocalEvents()}}catch(l){r.e(l)}finally{r.f()}return new a.a((function(e){e.next(n._myEvents),e.complete()}))}},{key:"deleteAllEvents",value:function(){localStorage.removeItem("myCalendar"),this._myEvents=[]}},{key:"deleteEvent",value:function(e){this._myEvents=this._myEvents.filter((function(t){return t!==e})),this._saveLocalEvents()}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275prov=i.Ib({token:r,factory:r.\u0275fac}),r)}}]);