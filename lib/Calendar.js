module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = range;
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  step = step || 1;

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row_style_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col_style_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_col__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Month__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rfcalendar_less__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rfcalendar_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__rfcalendar_less__);















// import Col from 'antd/lib/col/index';


var Calendar = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits___default()(Calendar, _Component);

  function Calendar(props) {
    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck___default()(this, Calendar);

    var _this = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Calendar.__proto__ || __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of___default()(Calendar)).call(this, props));

    _this.state = {
      selectingRange: undefined
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass___default()(Calendar, [{
    key: 'dayClicked',
    value: function dayClicked(date, classes) {
      if (!date) {
        // clicked on prev or next month
        return;
      }

      var selectingRange = this.state.selectingRange;
      var _props = this.props,
          selectRange = _props.selectRange,
          onPickRange = _props.onPickRange,
          onPickDate = _props.onPickDate;


      if (!selectRange) {
        if (onPickDate instanceof Function) {
          onPickDate(date, classes);
        }
        return;
      }

      if (!selectingRange) {
        selectingRange = [date, date];
      } else {
        if (onPickRange instanceof Function) {
          if (selectingRange[0] > date) {
            onPickRange(date, selectingRange[0]);
          } else {
            onPickRange(selectingRange[0], date);
          }
        }
        selectingRange = undefined;
      }

      this.setState({
        selectingRange: selectingRange
      });
    }
  }, {
    key: 'dayHovered',
    value: function dayHovered(hoveredDay) {
      if (!hoveredDay) {
        // clicked on prev or next month
        return;
      }

      var selectingRange = this.state.selectingRange;


      if (selectingRange) {
        selectingRange[1] = hoveredDay;

        this.setState({
          selectingRange: selectingRange
        });
      }
    }
  }, {
    key: 'renderDaysOfWeek',
    value: function renderDaysOfWeek() {
      var _props2 = this.props,
          firstDayOfWeek = _props2.firstDayOfWeek,
          showWeekSeparators = _props2.showWeekSeparators;

      var totalDays = 37;

      var days = [];
      Object(__WEBPACK_IMPORTED_MODULE_13__utils__["a" /* range */])(firstDayOfWeek, totalDays + firstDayOfWeek).forEach(function (i) {
        var day = __WEBPACK_IMPORTED_MODULE_11_moment___default()().weekday(i).format('dd').charAt(0);

        if (showWeekSeparators) {
          if (i % 7 === firstDayOfWeek && days.length) {
            // push week separator
            days.push(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement('th', { className: 'week-separator', key: 'seperator-' + i }));
          }
        }
        days.push(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          'th',
          { key: 'weekday-' + i, className: i % 7 === 0 ? 'bolder' : '' },
          day
        ));
      });

      return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
        'tr',
        null,
        __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          'th',
          null,
          '\xA0'
        ),
        days
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var selectingRange = this.state.selectingRange;


      var months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (month) {
        return month !== 0 && month !== 4 && month !== 8 ? __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default.a,
          { span: 5, offset: 1, key: month },
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__Month__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({
            month: month,
            key: 'month-' + month,
            dayClicked: function dayClicked(d, classes) {
              return _this2.dayClicked(d, classes);
            },
            dayHovered: function dayHovered(d) {
              return _this2.dayHovered(d);
            }
          }, _this2.props, {
            selectingRange: selectingRange
          }))
        ) : __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default.a,
          { span: 5, key: month },
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__Month__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({
            month: month,
            key: 'month-' + month,
            dayClicked: function dayClicked(d, classes) {
              return _this2.dayClicked(d, classes);
            },
            dayHovered: function dayHovered(d) {
              return _this2.dayHovered(d);
            }
          }, _this2.props, {
            selectingRange: selectingRange
          }))
        );
      });

      return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
        'div',
        { className: 'fullCalendar' },
        __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a,
          null,
          months
        )
      );
    }
  }]);

  return Calendar;
}(__WEBPACK_IMPORTED_MODULE_10_react__["Component"]);

Calendar.defaultProps = {
  forceFullWeeks: false,
  showDaysOfWeek: true,
  showWeekSeparators: true,
  firstDayOfWeek: 0,
  selectRange: false,
  onPickDate: null,
  onPickRange: null,
  selectedDay: [],
  customClasses: null
};


/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style/css");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style/css");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Day__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);













var Month = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Month, _Component);

  function Month(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Month);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Month.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Month)).call(this, props));

    _this.state = {
      selectingRangeStart: '',
      selectingRangeEnd: ''
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Month, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selectingRange !== undefined) {
        this.setState({
          selectingRangeStart: nextProps.selectingRange[0].month(),
          selectingRangeEnd: nextProps.selectingRange[1].month()
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props = this.props,
          month = _props.month,
          selectingRange = _props.selectingRange,
          selectedRange = _props.selectedRange;
      var _state = this.state,
          selectingRangeStart = _state.selectingRangeStart,
          selectingRangeEnd = _state.selectingRangeEnd;

      // full repaint for some global-affecting rendering props

      if (this.props.year !== nextProps.year || this.props.forceFullWeeks !== nextProps.forceFullWeeks || this.props.showWeekSeparators !== nextProps.showWeekSeparators || this.props.firstDayOfWeek !== nextProps.firstDayOfWeek || this.props.selectRange !== nextProps.selectRange || this.props.customClasses !== nextProps.customClasses || this.props.selectRange && selectingRange === undefined && nextProps.selectingRange === undefined) {
        return true;
      }

      // if we get to this point and we are in 'selectRange' mode then it's likely that we have a change in selectingRange
      if (this.props.selectRange) {
        if (selectingRange === undefined) {
          var _oldRangeStart = selectedRange[0].month();
          var _oldRangeEnd = selectedRange[1].month();
          if (_oldRangeStart > _oldRangeEnd) {
            var _ref = [_oldRangeEnd, _oldRangeStart];
            _oldRangeStart = _ref[0];
            _oldRangeEnd = _ref[1];
          }

          var _newRangeStart = nextProps.selectingRange[0].month();
          var _newRangeEnd = nextProps.selectingRange[1].month();
          if (_newRangeStart > _newRangeEnd) {
            var _ref2 = [_newRangeEnd, _newRangeStart];
            _newRangeStart = _ref2[0];
            _newRangeEnd = _ref2[1];
          }

          // first time it's called, repaint months in old selectedRange and next selectingRange
          return _oldRangeStart <= month && month <= _oldRangeEnd || _newRangeStart <= month && month <= _newRangeEnd;
        } else if (nextProps.selectingRange === undefined) {
          // last time it's called, repaint months in previous selectingRange
          var _oldRangeStart2 = selectingRangeStart;
          var _oldRangeEnd2 = selectingRangeEnd;
          if (_oldRangeStart2 > _oldRangeEnd2) {
            var _ref3 = [_oldRangeEnd2, _oldRangeStart2];
            _oldRangeStart2 = _ref3[0];
            _oldRangeEnd2 = _ref3[1];
          }

          var _newRangeStart2 = nextProps.selectedRange[0].month();
          var _newRangeEnd2 = nextProps.selectedRange[1].month();
          if (_newRangeStart2 > _newRangeEnd2) {
            var _ref4 = [_newRangeEnd2, _newRangeStart2];
            _newRangeStart2 = _ref4[0];
            _newRangeEnd2 = _ref4[1];
          }

          // called on day hovering changed
          return _oldRangeStart2 <= month && month <= _oldRangeEnd2 || _newRangeStart2 <= month && month <= _newRangeEnd2;
        }
        // called on day hovering changed
        var oldRangeStart = selectingRangeStart;
        var oldRangeEnd = selectingRangeEnd;
        if (oldRangeStart > oldRangeEnd) {
          ;

          var _ref5 = [oldRangeEnd, oldRangeStart];
          oldRangeStart = _ref5[0];
          oldRangeEnd = _ref5[1];
        }var newRangeStart = nextProps.selectingRange[0].month();
        var newRangeEnd = nextProps.selectingRange[1].month();
        if (newRangeStart > newRangeEnd) {
          var _ref6 = [newRangeEnd, newRangeStart];
          newRangeStart = _ref6[0];
          newRangeEnd = _ref6[1];
        }

        return oldRangeStart <= month && month <= oldRangeEnd || newRangeStart <= month && month <= newRangeEnd;
      } else if (this.props.selectedDay) {
        return true;
      }
      // else if (this.props.selectedDay.month() === month || nextProps.selectedDay.month() === month) {
      //   // single selectedDay changed: repaint months where selectedDay was and where will be
      //   console.log(this.props.selectedDay, this.props.selectedDay.month())
      //   return true;
      // }

      return false;
    }
  }, {
    key: 'dayClicked',
    value: function dayClicked(day) {
      var dayClicked = this.props.dayClicked;

      dayClicked(day);
    }
  }, {
    key: 'dayHovered',
    value: function dayHovered(day) {
      var _props2 = this.props,
          selectRange = _props2.selectRange,
          dayHovered = _props2.dayHovered;

      if (selectRange) {
        dayHovered(day);
      }
    }
  }, {
    key: 'renderMonthDays',
    value: function renderMonthDays() {
      var _this2 = this;

      var _props3 = this.props,
          year = _props3.year,
          month = _props3.month,
          forceFullWeeks = _props3.forceFullWeeks,
          showWeekSeparators = _props3.showWeekSeparators,
          selectedDay = _props3.selectedDay,
          firstDayOfWeek = _props3.firstDayOfWeek,
          selectingRange = _props3.selectingRange,
          selectRange = _props3.selectRange,
          selectedRange = _props3.selectedRange,
          customClasses = _props3.customClasses;

      var monthStart = __WEBPACK_IMPORTED_MODULE_8_moment___default()([year, month, 1]); // current day

      // number of days to insert before the first of the month to correctly align the weekdays
      var prevMonthDaysCount = monthStart.weekday();
      while (prevMonthDaysCount < firstDayOfWeek) {
        prevMonthDaysCount += 7;
      }
      // days in month
      var numberOfDays = monthStart.daysInMonth();
      // insert days at the end to match up 37 (max number of days in a month + 6)
      // or 42 (if user prefers seeing the week closing with Sunday)
      var totalDays = forceFullWeeks ? 42 : 37;

      // day-generating loop
      var days = [];

      Object(__WEBPACK_IMPORTED_MODULE_10__utils_js__["a" /* range */])(firstDayOfWeek + 1, totalDays + firstDayOfWeek + 1).forEach(function (i) {
        var day = __WEBPACK_IMPORTED_MODULE_8_moment___default()([year, month, i - prevMonthDaysCount]);
        // pick appropriate classes
        var classes = [];
        if (i <= prevMonthDaysCount) {
          classes.push('prev-month');
        } else if (i > numberOfDays + prevMonthDaysCount) {
          classes.push('next-month');
        } else {
          if (selectRange) {
            // selectingRange is used while user is selecting a range
            // (has clicked on start day, and is hovering end day - but not yet clicked)
            var start = (selectingRange || selectedRange)[0];
            var end = (selectingRange || selectedRange)[1];

            // validate range
            if (end.isBefore(start)) {
              var _ref7 = selectingRange || selectedRange;

              var _ref8 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref7, 2);

              end = _ref8[0];
              start = _ref8[1];
            }

            if (day.isBetween(start, end, 'day', '[]')) {
              classes.push('range');
            }

            if (day.isSame(start, 'day')) {
              classes.push('range-left');
            }

            if (day.isSame(end, 'day')) {
              classes.push('range-right');
            }
          }
          // else if (day.isSame(selectedDay, 'day')) {
          //   classes.push('selected');
          // }
          else if (!!selectedDay) {
              selectedDay.forEach(function (item) {
                if (day.isSame(item, 'day')) {
                  classes.push('clicked');
                  // console.log('item', item, 'classes', classes)
                }
              });
            }

          // call here customClasses function to avoid giving improper classes to prev/next month
          if (customClasses instanceof Function) {
            classes.push(customClasses(day));
          }
        }

        if ((i - 1) % 7 === 0) {
          // sunday
          classes.push('bolder');
        }

        if (customClasses) {
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(customClasses).forEach(function (k) {
            var obj = customClasses[k];
            // Order here is important! Everything is instance of Object in js
            if (typeof obj === 'string') {
              if (obj.indexOf(day.format('ddd')) > -1) {
                classes.push(k);
              }
            } else if (obj instanceof Array) {
              obj.forEach(function (d) {
                if (day.format('YYYY-MM-DD') === d) classes.push(k);
              });
            } else if (obj instanceof Function) {
              if (obj(day)) {
                classes.push(k);
              }
            } else if (obj.start && obj.end) {
              var startDate = __WEBPACK_IMPORTED_MODULE_8_moment___default()(obj.start, 'YYYY-MM-DD').add(-1, 'days');
              var endDate = __WEBPACK_IMPORTED_MODULE_8_moment___default()(obj.end, 'YYYY-MM-DD').add(1, 'days');
              if (day.isBetween(startDate, endDate)) {
                classes.push(k);
              }
            }
          });
        }

        // if (showWeekSeparators) {
        //   if ((i - 1) % 7 === firstDayOfWeek && days.length) {
        //     // push week separator
        //     days.push(<td className="week-separator" key={`seperator-${i}`} />);
        //   }
        // }
        days.push(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Day__["a" /* default */], {
          key: 'day-' + i,
          day: day.isValid() ? day : null,
          classes: classes.join(' '),
          dayClicked: function dayClicked(d) {
            return _this2.dayClicked(d);
          },
          dayHovered: function dayHovered(d) {
            return _this2.dayHovered(d);
          }
        }));
      });
      var tableHtml = [],
          daysArr = [[], [], [], [], [], []];
      for (var i = 0; i < 7; i += 1) {
        for (var j = 0; j < 5; j += 1) {
          daysArr[j][i] = days[i + j * 7];
        }
      }
      daysArr.map(function (item, index) {
        var dateCells = [];
        for (var _i = 0; _i < 7; _i++) {
          dateCells.push(item[_i]);
        }
        tableHtml.push(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'tr',
          { key: index },
          dateCells
        ));
      });
      return tableHtml;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          month = _props4.month,
          year = _props4.year;
      // const weekDays = ['M', 'W', 'S', 'T', 'F', 'S', 'S'];

      var weekDays = ['一', '二', '三', '四', '五', '六', '日'];
      var monthH = __WEBPACK_IMPORTED_MODULE_11_classnames___default()('color' + month, 'month_thead');
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { style: { marginBottom: "6px" } },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          { className: monthH },
          __WEBPACK_IMPORTED_MODULE_8_moment___default()([year, month, 1]).format('MMM')
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'table',
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'tbody',
            null,
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              'tr',
              { className: 'color' + month },
              weekDays.map(function (item) {
                return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  'td',
                  { key: item },
                  item
                );
              })
            ),
            this.renderMonthDays()
          )
        )
      );
    }
  }]);

  return Month;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Month.defaultProps = {
  selectingRange: undefined,
  selectedRange: undefined,
  customClasses: undefined
};


/* harmony default export */ __webpack_exports__["a"] = (Month);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);







var Day = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Day, _Component);

  function Day(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Day);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Day.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Day)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    _this.onHover = _this.onHover.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Day, [{
    key: 'onClick',
    value: function onClick() {
      var _props = this.props,
          dayClicked = _props.dayClicked,
          day = _props.day;

      dayClicked(day);
    }
  }, {
    key: 'onHover',
    value: function onHover() {
      var _props2 = this.props,
          dayHovered = _props2.dayHovered,
          day = _props2.day;

      dayHovered(day);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          classes = _props3.classes,
          day = _props3.day;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_react__["Fragment"],
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'td',
          { onClick: this.onClick, onMouseEnter: this.onHover, className: classes },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'span',
            { className: "day-number" },
            day === null ? '' : day.date()
          )
        )
      );
    }
  }]);

  return Day;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Day.defaultProps = {
  classes: '',
  day: null
};


/* harmony default export */ __webpack_exports__["a"] = (Day);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ })
/******/ ]);