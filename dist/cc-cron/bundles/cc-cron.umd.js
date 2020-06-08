(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('cc-cron', ['exports', '@angular/core', '@angular/forms', '@angular/common', 'ng-zorro-antd'], factory) :
    (global = global || self, factory(global['cc-cron'] = {}, global.ng.core, global.ng.forms, global.ng.common, global.ngZorroAntd));
}(this, (function (exports, core, forms, common, ngZorroAntd) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cron-const.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TYPE_NOT_SET = 'TYPE_NOT_SET';
    /** @type {?} */
    var TYPE_EVERY = 'TYPE_EVERY';
    /** @type {?} */
    var TYPE_RANGE = 'TYPE_RANGE';
    /** @type {?} */
    var TYPE_LOOP = 'TYPE_LOOP';
    /** @type {?} */
    var TYPE_WORK = 'TYPE_WORK';
    /** @type {?} */
    var TYPE_LAST = 'TYPE_LAST';
    /** @type {?} */
    var TYPE_SPECIFY = 'TYPE_SPECIFY';
    /** @type {?} */
    var WEEK_MAP = {
        '周日': 1,
        '周一': 2,
        '周二': 3,
        '周三': 4,
        '周四': 5,
        '周五': 6,
        '周六': 7
    };
    /** @type {?} */
    var DEFAULT_VALUE = '?';
    /** @type {?} */
    var DEFAULT_ASTERISK = '*';
    /** @type {?} */
    var INPUT_SIZE = {
        DEFAULT: 'default',
        LARGE: 'large',
        SMALL: 'small'
    };
    /** @type {?} */
    var CRON_INPUT_TRIGGER = {
        CLICK: 'click',
        HOVER: 'hover'
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cron/cron.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CronComponent = /** @class */ (function () {
        function CronComponent() {
            /**
             * 是否可用
             */
            this.disabled = false;
            /**
             * 输入框大小
             */
            this.inputSize = INPUT_SIZE.DEFAULT;
            /**
             * 最小年
             */
            this.minYear = 1975;
            /**
             * 最大年
             */
            this.maxYear = 9999;
            /**
             * 使用年
             */
            this.useYear = true;
            /**
             * 显示年
             */
            this.showYear = true;
            /**
             * 显示周
             */
            this.showWeek = true;
            /**
             * 显示月
             */
            this.showMonth = true;
            /**
             * 显示日
             */
            this.showDay = true;
            /**
             * 显示时
             */
            this.showHour = true;
            /**
             * 显示分
             */
            this.showMinute = true;
            /**
             * 显示秒
             */
            this.showSecond = true;
            /**
             * 默认值
             */
            this.second = DEFAULT_ASTERISK;
            /**
             * 默认值
             */
            this.minute = DEFAULT_ASTERISK;
            /**
             * 默认值
             */
            this.hour = DEFAULT_ASTERISK;
            /**
             * 默认值
             */
            this.day = DEFAULT_ASTERISK;
            /**
             * 默认值
             */
            this.month = DEFAULT_ASTERISK;
            /**
             * 默认值
             */
            this.week = DEFAULT_VALUE;
            /**
             * 默认值
             */
            this.year = DEFAULT_ASTERISK;
            this.style = {};
            this.cronValue = '';
            this.onTouchedCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            this.onChangeCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
        }
        /**
         * @return {?}
         */
        CronComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        CronComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
        };
        /**
         * @return {?}
         */
        CronComponent.prototype.initValue = /**
         * @return {?}
         */
        function () {
            if (!this.cronValue) {
                return;
            }
            /** @type {?} */
            var values = this.cronValue.split(' ').filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return !!item;
            }));
            if (!values || values.length <= 0) {
                return;
            }
            /** @type {?} */
            var i = 0;
            if (values.length > i) {
                this.second = values[i++];
            }
            if (values.length > i) {
                this.minute = values[i++];
            }
            if (values.length > i) {
                this.hour = values[i++];
            }
            if (values.length > i) {
                this.day = values[i++];
            }
            if (values.length > i) {
                this.month = values[i++];
            }
            if (values.length > i) {
                this.week = values[i++];
            }
            if (values.length > i) {
                this.year = values[i];
            }
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        CronComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (obj) {
                this.cronValue = obj;
                this.initValue();
            }
        };
        /**
         * @param {?} val
         * @return {?}
         */
        CronComponent.prototype.change = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var result = [];
            result.push(this.second ? this.second : DEFAULT_ASTERISK);
            result.push(this.minute ? this.minute : DEFAULT_ASTERISK);
            result.push(this.hour ? this.hour : DEFAULT_ASTERISK);
            result.push(this.day ? this.day : DEFAULT_ASTERISK);
            result.push(this.month ? this.month : DEFAULT_ASTERISK);
            result.push(this.week ? this.week : DEFAULT_VALUE);
            if (this.useYear) {
                result.push(this.year ? this.year : DEFAULT_ASTERISK);
            }
            this.cronValue = result.join(' ');
            this.onChangeCallback(this.cronValue);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChangeCallback = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouchedCallback = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        CronComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        CronComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cc-cron',
                        template: "<nz-card class=\"app-cron-container\" [ngStyle]=\"style\">\n    <nz-tabset>\n        <nz-tab nzTitle=\"\u79D2\" *ngIf=\"showSecond\">\n            <cc-cron-second [(ngModel)]=\"second\" [inputSize]=\"inputSize\" [disabled]=\"disabled\"\n                (ngModelChange)=\"change($event)\"></cc-cron-second>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5206\" *ngIf=\"showMinute\">\n            <cc-cron-minute [(ngModel)]=\"minute\" [inputSize]=\"inputSize\" [disabled]=\"disabled\"\n                (ngModelChange)=\"change($event)\"></cc-cron-minute>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u65F6\" *ngIf=\"showHour\">\n            <cc-cron-hour [(ngModel)]=\"hour\" [inputSize]=\"inputSize\" [disabled]=\"disabled\"\n                (ngModelChange)=\"change($event)\"></cc-cron-hour>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u65E5\" *ngIf=\"showDay\">\n            <cc-cron-day [(ngModel)]=\"day\" [inputSize]=\"inputSize\" [week]=\"week\" (ngModelChange)=\"change($event)\"\n                [disabled]=\"disabled\"></cc-cron-day>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u6708\" *ngIf=\"showMonth\">\n            <cc-cron-month [(ngModel)]=\"month\" [inputSize]=\"inputSize\" (ngModelChange)=\"change($event)\"\n                [disabled]=\"disabled\"></cc-cron-month>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5468\" *ngIf=\"showWeek\">\n            <cc-cron-week [(ngModel)]=\"week\" [inputSize]=\"inputSize\" [day]=\"day\" (ngModelChange)=\"change($event)\"\n                [disabled]=\"disabled\"></cc-cron-week>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5E74\" *ngIf=\"useYear && showYear\">\n            <cc-cron-year [(ngModel)]=\"year\" [minYear]=\"minYear\" [maxYear]=\"maxYear\" [inputSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\" [disabled]=\"disabled\"></cc-cron-year>\n        </nz-tab>\n    </nz-tabset>\n</nz-card>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return CronComponent; })),
                                multi: true
                            }
                        ],
                        styles: [".app-cron-container{width:100%}.app-cron-container /deep/ .ant-card-body{padding:5px}"]
                    }] }
        ];
        /** @nocollapse */
        CronComponent.ctorParameters = function () { return []; };
        CronComponent.propDecorators = {
            disabled: [{ type: core.Input }],
            inputSize: [{ type: core.Input }],
            minYear: [{ type: core.Input }],
            maxYear: [{ type: core.Input }],
            useYear: [{ type: core.Input }],
            showYear: [{ type: core.Input }],
            showWeek: [{ type: core.Input }],
            showMonth: [{ type: core.Input }],
            showDay: [{ type: core.Input }],
            showHour: [{ type: core.Input }],
            showMinute: [{ type: core.Input }],
            showSecond: [{ type: core.Input }],
            second: [{ type: core.Input }],
            minute: [{ type: core.Input }],
            hour: [{ type: core.Input }],
            day: [{ type: core.Input }],
            month: [{ type: core.Input }],
            week: [{ type: core.Input }],
            year: [{ type: core.Input }],
            style: [{ type: core.Input }]
        };
        return CronComponent;
    }());
    if (false) {
        /**
         * 是否可用
         * @type {?}
         */
        CronComponent.prototype.disabled;
        /**
         * 输入框大小
         * @type {?}
         */
        CronComponent.prototype.inputSize;
        /**
         * 最小年
         * @type {?}
         */
        CronComponent.prototype.minYear;
        /**
         * 最大年
         * @type {?}
         */
        CronComponent.prototype.maxYear;
        /**
         * 使用年
         * @type {?}
         */
        CronComponent.prototype.useYear;
        /**
         * 显示年
         * @type {?}
         */
        CronComponent.prototype.showYear;
        /**
         * 显示周
         * @type {?}
         */
        CronComponent.prototype.showWeek;
        /**
         * 显示月
         * @type {?}
         */
        CronComponent.prototype.showMonth;
        /**
         * 显示日
         * @type {?}
         */
        CronComponent.prototype.showDay;
        /**
         * 显示时
         * @type {?}
         */
        CronComponent.prototype.showHour;
        /**
         * 显示分
         * @type {?}
         */
        CronComponent.prototype.showMinute;
        /**
         * 显示秒
         * @type {?}
         */
        CronComponent.prototype.showSecond;
        /**
         * 默认值
         * @type {?}
         */
        CronComponent.prototype.second;
        /**
         * 默认值
         * @type {?}
         */
        CronComponent.prototype.minute;
        /**
         * 默认值
         * @type {?}
         */
        CronComponent.prototype.hour;
        /**
         * 默认值
         * @type {?}
         */
        CronComponent.prototype.day;
        /**
         * 默认值
         * @type {?}
         */
        CronComponent.prototype.month;
        /**
         * 默认值
         * @type {?}
         */
        CronComponent.prototype.week;
        /**
         * 默认值
         * @type {?}
         */
        CronComponent.prototype.year;
        /** @type {?} */
        CronComponent.prototype.style;
        /** @type {?} */
        CronComponent.prototype.cronValue;
        /**
         * @type {?}
         * @private
         */
        CronComponent.prototype.onTouchedCallback;
        /**
         * @type {?}
         * @private
         */
        CronComponent.prototype.onChangeCallback;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cron-input/cron-input.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CronInputComponent = /** @class */ (function () {
        function CronInputComponent() {
            /**
             * placeholder
             */
            this.placeholder = '请选择...';
            /**
             * 是否可用
             */
            this.disabled = false;
            /**
             * 输入框大小
             */
            this.inputSize = INPUT_SIZE.DEFAULT;
            /**
             * 最小年
             */
            this.minYear = 1975;
            /**
             * 最大年
             */
            this.maxYear = 9999;
            /**
             * 使用年
             */
            this.useYear = true;
            /**
             * 显示年
             */
            this.showYear = true;
            /**
             * 显示周
             */
            this.showWeek = true;
            /**
             * 显示月
             */
            this.showMonth = true;
            /**
             * 显示日
             */
            this.showDay = true;
            /**
             * 显示时
             */
            this.showHour = true;
            /**
             * 显示分
             */
            this.showMinute = true;
            /**
             * 显示秒
             */
            this.showSecond = true;
            /**
             * 默认值
             */
            this.second = DEFAULT_ASTERISK;
            /**
             * 默认值
             */
            this.minute = DEFAULT_ASTERISK;
            /**
             * 默认值
             */
            this.hour = DEFAULT_ASTERISK;
            /**
             * 默认值
             */
            this.day = DEFAULT_ASTERISK;
            /**
             * 默认值
             */
            this.month = DEFAULT_ASTERISK;
            /**
             * 默认值
             */
            this.week = DEFAULT_VALUE;
            /**
             * 默认值
             */
            this.year = DEFAULT_ASTERISK;
            this.cronInputTrigger = CRON_INPUT_TRIGGER.CLICK;
            this.visibleChange = new core.EventEmitter();
            this.style = {
                width: '650px'
            };
            this.popoverPlacement = 'topLeft';
            this.popoverTitle = '';
            this.value = '';
            this.visible = false;
            this.onTouchedCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            this.onChangeCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
        }
        /**
         * @return {?}
         */
        CronInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} val
         * @return {?}
         */
        CronInputComponent.prototype.visibleChanged = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.visibleChange.emit(val);
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        CronInputComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (obj) {
                this.value = obj;
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CronInputComponent.prototype.cronChange = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.value = value;
            this.onChangeCallback(this.value);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronInputComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChangeCallback = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronInputComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouchedCallback = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        CronInputComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        CronInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cc-cron-input',
                        template: "<div class=\"app-cron-input-container\">\r\n    <input nz-input [placeholder]=\"placeholder\" [readOnly]=\"true\" [nzSize]=\"inputSize\" [(ngModel)]=\"value\" nz-popover\r\n        [nzPopoverTitle]=\"popoverTitle\" [(nzVisible)]=\"visible\" (nzVisibleChange)=\"visibleChanged($event)\"\r\n        [nzPopoverTrigger]=\"cronInputTrigger\" [nzPopoverPlacement]=\"popoverPlacement\" [disabled]=\"disabled\"\r\n        [nzPopoverContent]=\"cronContentTemplate\" />\r\n    <ng-template #cronContentTemplate>\r\n        <cc-cron [(ngModel)]=\"value\" [disabled]=\"disabled\" [inputSize]=\"inputSize\" [minYear]=\"minYear\"\r\n            [maxYear]=\"maxYear\" [useYear]=\"useYear\" [showYear]=\"showYear\" [showWeek]=\"showWeek\" [showMonth]=\"showMonth\"\r\n            [showDay]=\"showDay\" [showHour]=\"showHour\" [showMinute]=\"showMinute\" [showSecond]=\"showSecond\"\r\n            [second]=\"second\" [minute]=\"minute\" [hour]=\"hour\" [day]=\"day\" [month]=\"month\" [week]=\"week\" [year]=\"year\"\r\n            [style]=\"style\" (ngModelChange)=\"cronChange($event)\">\r\n        </cc-cron>\r\n    </ng-template>\r\n</div>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return CronInputComponent; })),
                                multi: true
                            }
                        ],
                        styles: [".app-cron-input-container{width:100%}.app-cron-popover-container{width:300px}"]
                    }] }
        ];
        /** @nocollapse */
        CronInputComponent.ctorParameters = function () { return []; };
        CronInputComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            inputSize: [{ type: core.Input }],
            minYear: [{ type: core.Input }],
            maxYear: [{ type: core.Input }],
            useYear: [{ type: core.Input }],
            showYear: [{ type: core.Input }],
            showWeek: [{ type: core.Input }],
            showMonth: [{ type: core.Input }],
            showDay: [{ type: core.Input }],
            showHour: [{ type: core.Input }],
            showMinute: [{ type: core.Input }],
            showSecond: [{ type: core.Input }],
            second: [{ type: core.Input }],
            minute: [{ type: core.Input }],
            hour: [{ type: core.Input }],
            day: [{ type: core.Input }],
            month: [{ type: core.Input }],
            week: [{ type: core.Input }],
            year: [{ type: core.Input }],
            cronInputTrigger: [{ type: core.Input }],
            visibleChange: [{ type: core.Output }],
            style: [{ type: core.Input }],
            popoverPlacement: [{ type: core.Input }],
            popoverTitle: [{ type: core.Input }]
        };
        return CronInputComponent;
    }());
    if (false) {
        /**
         * placeholder
         * @type {?}
         */
        CronInputComponent.prototype.placeholder;
        /**
         * 是否可用
         * @type {?}
         */
        CronInputComponent.prototype.disabled;
        /**
         * 输入框大小
         * @type {?}
         */
        CronInputComponent.prototype.inputSize;
        /**
         * 最小年
         * @type {?}
         */
        CronInputComponent.prototype.minYear;
        /**
         * 最大年
         * @type {?}
         */
        CronInputComponent.prototype.maxYear;
        /**
         * 使用年
         * @type {?}
         */
        CronInputComponent.prototype.useYear;
        /**
         * 显示年
         * @type {?}
         */
        CronInputComponent.prototype.showYear;
        /**
         * 显示周
         * @type {?}
         */
        CronInputComponent.prototype.showWeek;
        /**
         * 显示月
         * @type {?}
         */
        CronInputComponent.prototype.showMonth;
        /**
         * 显示日
         * @type {?}
         */
        CronInputComponent.prototype.showDay;
        /**
         * 显示时
         * @type {?}
         */
        CronInputComponent.prototype.showHour;
        /**
         * 显示分
         * @type {?}
         */
        CronInputComponent.prototype.showMinute;
        /**
         * 显示秒
         * @type {?}
         */
        CronInputComponent.prototype.showSecond;
        /**
         * 默认值
         * @type {?}
         */
        CronInputComponent.prototype.second;
        /**
         * 默认值
         * @type {?}
         */
        CronInputComponent.prototype.minute;
        /**
         * 默认值
         * @type {?}
         */
        CronInputComponent.prototype.hour;
        /**
         * 默认值
         * @type {?}
         */
        CronInputComponent.prototype.day;
        /**
         * 默认值
         * @type {?}
         */
        CronInputComponent.prototype.month;
        /**
         * 默认值
         * @type {?}
         */
        CronInputComponent.prototype.week;
        /**
         * 默认值
         * @type {?}
         */
        CronInputComponent.prototype.year;
        /** @type {?} */
        CronInputComponent.prototype.cronInputTrigger;
        /** @type {?} */
        CronInputComponent.prototype.visibleChange;
        /** @type {?} */
        CronInputComponent.prototype.style;
        /** @type {?} */
        CronInputComponent.prototype.popoverPlacement;
        /** @type {?} */
        CronInputComponent.prototype.popoverTitle;
        /** @type {?} */
        CronInputComponent.prototype.value;
        /** @type {?} */
        CronInputComponent.prototype.visible;
        /**
         * @type {?}
         * @private
         */
        CronInputComponent.prototype.onTouchedCallback;
        /**
         * @type {?}
         * @private
         */
        CronInputComponent.prototype.onChangeCallback;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cron-base/cron-base.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CronBaseComponent = /** @class */ (function () {
        function CronBaseComponent() {
            this.disabled = false;
            this.inputSize = INPUT_SIZE.DEFAULT;
            this.type = TYPE_EVERY;
            this.defaultValue = DEFAULT_VALUE;
            this.typeNotSet = TYPE_NOT_SET;
            this.typeEvery = TYPE_EVERY;
            this.typeRange = TYPE_RANGE;
            this.typeLoop = TYPE_LOOP;
            this.typeWork = TYPE_WORK;
            this.typeLast = TYPE_LAST;
            this.typeSecify = TYPE_SPECIFY;
            this.valueRange = {
                start: 0,
                end: 0
            };
            this.valueLoop = {
                start: 0,
                interval: 1
            };
            this.valueWeek = {
                start: 0,
                end: 0
            };
            this.valueList = [];
            this.valueWork = 1;
            this.maxValue = 0;
            this.minValue = 0;
            this.valueLast = 0;
        }
        /**
         * @return {?}
         */
        CronBaseComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.init();
        };
        /**
         * @return {?}
         */
        CronBaseComponent.prototype.init = /**
         * @return {?}
         */
        function () {
        };
        /**
         * 值计算
         */
        /**
         * 值计算
         * @return {?}
         */
        CronBaseComponent.prototype.valueComputed = /**
         * 值计算
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = [];
            switch (this.type) {
                case TYPE_NOT_SET:
                    result.push('?');
                    break;
                case TYPE_EVERY:
                    result.push('*');
                    break;
                case TYPE_RANGE:
                    result.push(this.valueRange.start + "-" + this.valueRange.end);
                    break;
                case TYPE_LOOP:
                    result.push(this.valueLoop.start + "/" + this.valueLoop.interval);
                    break;
                case TYPE_WORK:
                    result.push(this.valueWork + "W");
                    break;
                case TYPE_LAST:
                    result.push('L');
                    break;
                case TYPE_SPECIFY:
                    /** @type {?} */
                    var list_1 = [];
                    this.valueList.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        if (item.checked) {
                            list_1.push(item.value);
                        }
                    }));
                    result.push(list_1.join(','));
                    break;
                default:
                    result.push(this.defaultValue);
                    break;
            }
            return result.length > 0 ? result.join('') : this.defaultValue;
        };
        /**
         * 解析值
         */
        /**
         * 解析值
         * @param {?} value
         * @return {?}
         */
        CronBaseComponent.prototype.parseValue = /**
         * 解析值
         * @param {?} value
         * @return {?}
         */
        function (value) {
            try {
                if (!value || value === this.defaultValue) {
                    this.type = this.typeEvery;
                }
                else if (value.indexOf('?') >= 0) {
                    this.type = this.typeNotSet;
                }
                else if (value.indexOf('-') >= 0) {
                    this.type = this.typeRange;
                    /** @type {?} */
                    var values = value.split('-');
                    if (values.length >= 2) {
                        this.valueRange.start = parseInt(values[0], 0);
                        this.valueRange.end = parseInt(values[1], 0);
                    }
                }
                else if (value.indexOf('/') >= 0) {
                    this.type = this.typeLoop;
                    /** @type {?} */
                    var values = value.split('/');
                    if (values.length >= 2) {
                        this.valueLoop.start = value[0] === '*' ? 0 : parseInt(values[0], 0);
                        this.valueLoop.interval = parseInt(values[1], 0);
                    }
                }
                else if (value.indexOf('W') >= 0) {
                    this.type = this.typeWork;
                    /** @type {?} */
                    var values = value.split('W');
                    if (!values[0] && !isNaN(values[0])) {
                        this.valueWork = parseInt(values[0], 0);
                    }
                }
                else if (value.indexOf('L') >= 0) {
                    this.type = this.typeLast;
                    /** @type {?} */
                    var values = value.split('L');
                    this.valueLast = parseInt(values[0], 0);
                }
                else if (value.indexOf(',') >= 0 || !isNaN(value)) {
                    this.type = this.typeSecify;
                    /** @type {?} */
                    var vals_1 = value.split(',');
                    this.valueList.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        vals_1.forEach((/**
                         * @param {?} val
                         * @return {?}
                         */
                        function (val) {
                            if (parseInt(val, 0) === item.value) {
                                item.checked = true;
                                return;
                            }
                        }));
                        return item;
                    }));
                }
                else {
                    this.type = this.typeEvery;
                }
            }
            catch (e) {
                this.type = this.typeEvery;
            }
            this.defaultValue = this.valueComputed();
        };
        CronBaseComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cc-cron-base',
                        template: "<p>cron-base works!</p>\n",
                        styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
                    }] }
        ];
        /** @nocollapse */
        CronBaseComponent.ctorParameters = function () { return []; };
        CronBaseComponent.propDecorators = {
            disabled: [{ type: core.Input }],
            inputSize: [{ type: core.Input }]
        };
        return CronBaseComponent;
    }());
    if (false) {
        /** @type {?} */
        CronBaseComponent.prototype.disabled;
        /** @type {?} */
        CronBaseComponent.prototype.inputSize;
        /** @type {?} */
        CronBaseComponent.prototype.type;
        /** @type {?} */
        CronBaseComponent.prototype.defaultValue;
        /** @type {?} */
        CronBaseComponent.prototype.typeNotSet;
        /** @type {?} */
        CronBaseComponent.prototype.typeEvery;
        /** @type {?} */
        CronBaseComponent.prototype.typeRange;
        /** @type {?} */
        CronBaseComponent.prototype.typeLoop;
        /** @type {?} */
        CronBaseComponent.prototype.typeWork;
        /** @type {?} */
        CronBaseComponent.prototype.typeLast;
        /** @type {?} */
        CronBaseComponent.prototype.typeSecify;
        /** @type {?} */
        CronBaseComponent.prototype.valueRange;
        /** @type {?} */
        CronBaseComponent.prototype.valueLoop;
        /** @type {?} */
        CronBaseComponent.prototype.valueWeek;
        /** @type {?} */
        CronBaseComponent.prototype.valueList;
        /** @type {?} */
        CronBaseComponent.prototype.valueWork;
        /** @type {?} */
        CronBaseComponent.prototype.maxValue;
        /** @type {?} */
        CronBaseComponent.prototype.minValue;
        /** @type {?} */
        CronBaseComponent.prototype.valueLast;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cron-year/cron-year.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CronYearComponent = /** @class */ (function (_super) {
        __extends(CronYearComponent, _super);
        function CronYearComponent() {
            var _this = _super.call(this) || this;
            _this.minYear = 1975;
            _this.maxYear = 9999;
            _this.onTouchedCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            _this.onChangeCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            return _this;
        }
        /**
         * @return {?}
         */
        CronYearComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.init();
        };
        /**
         * @return {?}
         */
        CronYearComponent.prototype.init = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var nowYear = (new Date()).getFullYear();
            this.defaultValue = DEFAULT_ASTERISK;
            this.minValue = this.minYear;
            this.maxValue = this.maxYear;
            this.valueRange.start = nowYear;
            this.valueRange.end = nowYear + 100;
            this.valueLoop.start = nowYear;
            this.valueLoop.interval = 1;
        };
        /**
         * @param {?} val
         * @return {?}
         */
        CronYearComponent.prototype.change = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.defaultValue = this.valueComputed();
            this.onChangeCallback(this.defaultValue);
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        CronYearComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (obj && obj !== this.valueComputed()) {
                this.parseValue(obj);
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronYearComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChangeCallback = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronYearComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouchedCallback = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        CronYearComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        CronYearComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cc-cron-year',
                        template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeEvery\" [nzDisabled]=\"disabled\">\u6BCF\u5E74</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\" [nzDisabled]=\"disabled\">\u533A\u95F4</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || disabled\"></nz-input-number> \u5E74\n            \u81F3\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.end\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || disabled\">\n            </nz-input-number> \u5E74\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\" [nzDisabled]=\"disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.start\" [nzMin]=\"minValue\" [nzStep]=\"1\" [nzSize]=\"inputSize\"\n                [nzPrecision]=\"0\" (ngModelChange)=\"change($event)\" [nzDisabled]=\"type!=typeLoop || disabled\">\n            </nz-input-number>\n            \u5E74\u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\" [nzStep]=\"1\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeLoop || disabled\">\n            </nz-input-number>\n            \u5E74\n        </div>\n    </nz-radio-group>\n</div>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return CronYearComponent; })),
                                multi: true
                            }
                        ],
                        styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
                    }] }
        ];
        /** @nocollapse */
        CronYearComponent.ctorParameters = function () { return []; };
        CronYearComponent.propDecorators = {
            minYear: [{ type: core.Input }],
            maxYear: [{ type: core.Input }]
        };
        return CronYearComponent;
    }(CronBaseComponent));
    if (false) {
        /** @type {?} */
        CronYearComponent.prototype.minYear;
        /** @type {?} */
        CronYearComponent.prototype.maxYear;
        /**
         * @type {?}
         * @private
         */
        CronYearComponent.prototype.onTouchedCallback;
        /**
         * @type {?}
         * @private
         */
        CronYearComponent.prototype.onChangeCallback;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cron-day/cron-day.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CronDayComponent = /** @class */ (function (_super) {
        __extends(CronDayComponent, _super);
        function CronDayComponent() {
            var _this = _super.call(this) || this;
            _this.week = DEFAULT_VALUE;
            _this.onTouchedCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            _this.onChangeCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            return _this;
        }
        /**
         * @return {?}
         */
        CronDayComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnInit.call(this);
        };
        /**
         * @return {?}
         */
        CronDayComponent.prototype.init = /**
         * @return {?}
         */
        function () {
            this.defaultValue = DEFAULT_ASTERISK;
            this.minValue = 1;
            this.maxValue = 31;
            this.valueRange.start = 1;
            this.valueRange.end = 31;
            this.valueLoop.start = 1;
            this.valueLoop.interval = 1;
            for (var i = this.minValue; i <= this.maxValue; i++) {
                this.valueList.push({
                    label: i < 10 ? '0' + i : i,
                    value: i
                });
            }
        };
        /**
         * @param {?} val
         * @return {?}
         */
        CronDayComponent.prototype.change = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.defaultValue = this.valueComputed();
            this.onChangeCallback(this.defaultValue);
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        CronDayComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (obj && obj !== this.valueComputed()) {
                this.parseValue(obj);
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronDayComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChangeCallback = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronDayComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouchedCallback = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        CronDayComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        CronDayComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cc-cron-day',
                        template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeNotSet\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u4E0D\u8BBE\u7F6E</label>\n            <span class=\"app-base-tip-msg\">\u65E5\u548C\u5468\u53EA\u80FD\u8BBE\u7F6E\u5176\u4E2D\u4E4B\u4E00</span>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeEvery\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u6BCF\u65E5</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u533A\u95F4</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || (this.week && this.week !== '?') || this.disabled\"></nz-input-number> \u65E5\n            \u81F3\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.end\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || (this.week && this.week !== '?') || this.disabled\"></nz-input-number> \u65E5\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeLoop || (this.week && this.week !== '?') || this.disabled\"></nz-input-number>\n            \u65E5\u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\"\n                [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeLoop || (this.week && this.week !== '?') || this.disabled\"></nz-input-number>\n            \u65E5\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeWork\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u5DE5\u4F5C\u65E5</label>\n            \u672C\u6708\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueWork\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeWork || (this.week && this.week !== '?') || this.disabled\"></nz-input-number>\n            \u65E5\uFF0C\u6700\u8FD1\u7684\u5DE5\u4F5C\u65E5\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLast\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u6700\u540E\u4E00\u65E5</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"\n                    [nzDisabled]=\"type!=typeSecify || (this.week && this.week !== '?') || this.disabled\">\n                </nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return CronDayComponent; })),
                                multi: true
                            }
                        ],
                        styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
                    }] }
        ];
        /** @nocollapse */
        CronDayComponent.ctorParameters = function () { return []; };
        CronDayComponent.propDecorators = {
            week: [{ type: core.Input }]
        };
        return CronDayComponent;
    }(CronBaseComponent));
    if (false) {
        /** @type {?} */
        CronDayComponent.prototype.week;
        /**
         * @type {?}
         * @private
         */
        CronDayComponent.prototype.onTouchedCallback;
        /**
         * @type {?}
         * @private
         */
        CronDayComponent.prototype.onChangeCallback;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cron-hour/cron-hour.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CronHourComponent = /** @class */ (function (_super) {
        __extends(CronHourComponent, _super);
        function CronHourComponent() {
            var _this = _super.call(this) || this;
            _this.onTouchedCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            _this.onChangeCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            return _this;
        }
        /**
         * @return {?}
         */
        CronHourComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.init();
        };
        /**
         * @return {?}
         */
        CronHourComponent.prototype.init = /**
         * @return {?}
         */
        function () {
            this.defaultValue = DEFAULT_ASTERISK;
            this.minValue = 0;
            this.maxValue = 23;
            this.valueRange.start = 0;
            this.valueRange.end = 23;
            this.valueLoop.start = 0;
            this.valueLoop.interval = 1;
            /** @type {?} */
            var values = [];
            for (var i = this.minValue; i <= this.maxValue; i++) {
                values.push({
                    label: i < 10 ? '0' + i : i,
                    value: i
                });
            }
            this.valueList = values;
        };
        /**
         * @param {?} val
         * @return {?}
         */
        CronHourComponent.prototype.change = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.defaultValue = this.valueComputed();
            this.onChangeCallback(this.defaultValue);
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        CronHourComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (obj && obj !== this.valueComputed()) {
                this.parseValue(obj);
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronHourComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChangeCallback = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronHourComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouchedCallback = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        CronHourComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        CronHourComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cc-cron-hour',
                        template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeEvery\" [nzDisabled]=\"disabled\">\u6BCF\u65F6</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\" [nzDisabled]=\"disabled\">\u533A\u95F4</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\"\n                [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeRange || disabled\" [nzSize]=\"inputSize\"></nz-input-number> \u65F6\n            \u81F3\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.end\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\" [nzStep]=\"1\" (ngModelChange)=\"change($event)\"\n                [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeRange || disabled\" [nzSize]=\"inputSize\"></nz-input-number> \u65F6\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\" [nzDisabled]=\"disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\"\n                [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeLoop || disabled\" [nzSize]=\"inputSize\"></nz-input-number>\n            \u65F6\u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\"\n                [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeLoop || disabled\" [nzSize]=\"inputSize\"></nz-input-number>\n            \u65F6\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\" [nzDisabled]=\"disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"  [nzDisabled]=\"type!=typeSecify || disabled\"></nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return CronHourComponent; })),
                                multi: true
                            }
                        ],
                        styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
                    }] }
        ];
        /** @nocollapse */
        CronHourComponent.ctorParameters = function () { return []; };
        return CronHourComponent;
    }(CronBaseComponent));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CronHourComponent.prototype.onTouchedCallback;
        /**
         * @type {?}
         * @private
         */
        CronHourComponent.prototype.onChangeCallback;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cron-minute/cron-minute.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CronMinuteComponent = /** @class */ (function (_super) {
        __extends(CronMinuteComponent, _super);
        function CronMinuteComponent() {
            var _this = _super.call(this) || this;
            _this.onTouchedCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            _this.onChangeCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            return _this;
        }
        /**
         * @return {?}
         */
        CronMinuteComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.init();
        };
        /**
         * @return {?}
         */
        CronMinuteComponent.prototype.init = /**
         * @return {?}
         */
        function () {
            this.defaultValue = DEFAULT_ASTERISK;
            this.minValue = 0;
            this.maxValue = 59;
            this.valueRange.start = 0;
            this.valueRange.end = 59;
            this.valueLoop.start = 0;
            this.valueLoop.interval = 1;
            /** @type {?} */
            var values = [];
            for (var i = this.minValue; i <= this.maxValue; i++) {
                values.push({
                    label: i < 10 ? '0' + i : i,
                    value: i
                });
            }
            this.valueList = values;
        };
        /**
         * @param {?} val
         * @return {?}
         */
        CronMinuteComponent.prototype.change = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.defaultValue = this.valueComputed();
            this.onChangeCallback(this.defaultValue);
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        CronMinuteComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (obj && obj !== this.valueComputed()) {
                this.parseValue(obj);
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronMinuteComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChangeCallback = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronMinuteComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouchedCallback = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        CronMinuteComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        CronMinuteComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cc-cron-minute',
                        template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeEvery\" [nzDisabled]=\"disabled\">\u6BCF\u5206</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\" [nzDisabled]=\"disabled\">\u533A\u95F4</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || disabled\"></nz-input-number> \u5206\n            \u81F3\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.end\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || disabled\">\n            </nz-input-number> \u5206\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\" [nzDisabled]=\"disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeLoop || disabled\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"></nz-input-number>\n            \u5206\u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\"\n                [nzMax]=\"maxValue\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeLoop || disabled\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"></nz-input-number>\n            \u5206\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\" [nzDisabled]=\"disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"\n                    [nzDisabled]=\"type!=typeSecify || disabled\"></nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return CronMinuteComponent; })),
                                multi: true
                            }
                        ],
                        styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
                    }] }
        ];
        /** @nocollapse */
        CronMinuteComponent.ctorParameters = function () { return []; };
        return CronMinuteComponent;
    }(CronBaseComponent));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CronMinuteComponent.prototype.onTouchedCallback;
        /**
         * @type {?}
         * @private
         */
        CronMinuteComponent.prototype.onChangeCallback;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cron-month/cron-month.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CronMonthComponent = /** @class */ (function (_super) {
        __extends(CronMonthComponent, _super);
        function CronMonthComponent() {
            var _this = _super.call(this) || this;
            _this.onTouchedCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            _this.onChangeCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            return _this;
        }
        /**
         * @return {?}
         */
        CronMonthComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.init();
        };
        /**
         * @return {?}
         */
        CronMonthComponent.prototype.init = /**
         * @return {?}
         */
        function () {
            this.defaultValue = DEFAULT_ASTERISK;
            this.minValue = 1;
            this.maxValue = 12;
            this.valueRange.start = 1;
            this.valueRange.end = 12;
            this.valueLoop.start = 1;
            this.valueLoop.interval = 1;
            /** @type {?} */
            var values = [];
            for (var i = this.minValue; i <= this.maxValue; i++) {
                values.push({
                    label: i,
                    value: i
                });
            }
            this.valueList = values;
        };
        /**
         * @param {?} val
         * @return {?}
         */
        CronMonthComponent.prototype.change = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.defaultValue = this.valueComputed();
            this.onChangeCallback(this.defaultValue);
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        CronMonthComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (obj && obj !== this.valueComputed()) {
                this.parseValue(obj);
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronMonthComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChangeCallback = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronMonthComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouchedCallback = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        CronMonthComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        CronMonthComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cc-cron-month',
                        template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeEvery\" [nzDisabled]=\"disabled\">\u6BCF\u6708</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\" [nzDisabled]=\"disabled\">\u533A\u95F4</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || disabled\"></nz-input-number> \u6708\n            \u81F3\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.end\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || disabled\">\n            </nz-input-number> \u6708\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\" [nzDisabled]=\"disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeLoop || disabled\"></nz-input-number>\n            \u6708\u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\"\n                [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeLoop || disabled\"></nz-input-number>\n            \u6708\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\" [nzDisabled]=\"disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"\n                    [nzDisabled]=\"type!=typeSecify || disabled\">\n                </nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return CronMonthComponent; })),
                                multi: true
                            }
                        ],
                        styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
                    }] }
        ];
        /** @nocollapse */
        CronMonthComponent.ctorParameters = function () { return []; };
        return CronMonthComponent;
    }(CronBaseComponent));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CronMonthComponent.prototype.onTouchedCallback;
        /**
         * @type {?}
         * @private
         */
        CronMonthComponent.prototype.onChangeCallback;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cron-second/cron-second.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * 秒
     */
    var CronSecondComponent = /** @class */ (function (_super) {
        __extends(CronSecondComponent, _super);
        function CronSecondComponent() {
            var _this = _super.call(this) || this;
            _this.onTouchedCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            _this.onChangeCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            return _this;
        }
        /**
         * @return {?}
         */
        CronSecondComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.init();
        };
        /**
         * @return {?}
         */
        CronSecondComponent.prototype.init = /**
         * @return {?}
         */
        function () {
            this.defaultValue = DEFAULT_ASTERISK;
            this.minValue = 0;
            this.maxValue = 59;
            this.valueRange.start = 0;
            this.valueRange.end = 59;
            this.valueLoop.start = 0;
            this.valueLoop.interval = 1;
            /** @type {?} */
            var values = [];
            for (var i = this.minValue; i <= this.maxValue; i++) {
                values.push({
                    label: i < 10 ? '0' + i : i,
                    value: i
                });
            }
            this.valueList = values;
        };
        /**
         * @param {?} val
         * @return {?}
         */
        CronSecondComponent.prototype.change = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.defaultValue = this.valueComputed();
            this.onChangeCallback(this.defaultValue);
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        CronSecondComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (obj && obj !== this.valueComputed()) {
                this.parseValue(obj);
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronSecondComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChangeCallback = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronSecondComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouchedCallback = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        CronSecondComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        CronSecondComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cc-cron-second',
                        template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeEvery\" [nzDisabled]=\"disabled\">\u6BCF\u79D2</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\" [nzDisabled]=\"disabled\">\u533A\u95F4</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.start\" [nzMin]=\"minValue\"\n                [nzSize]=\"inputSize\" [nzMax]=\"maxValue\" [nzStep]=\"1\" [nzPrecision]=\"0\"\n                [nzDisabled]=\"type!=typeRange || disabled\" (ngModelChange)=\"change($event)\"></nz-input-number> \u79D2\n            \u81F3\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.end\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzSize]=\"inputSize\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeRange || disabled\"\n                (ngModelChange)=\"change($event)\">\n            </nz-input-number> \u79D2\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\" [nzDisabled]=\"disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeLoop || disabled\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"></nz-input-number>\n            \u79D2\u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\"\n                [nzMax]=\"maxValue\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeLoop || disabled\"\n                [nzSize]=\"inputSize\" (ngModelChange)=\"change($event)\"></nz-input-number>\n            \u79D2\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\" [nzDisabled]=\"disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"\n                    [nzDisabled]=\"type!=typeSecify || disabled\">\n                </nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return CronSecondComponent; })),
                                multi: true
                            }
                        ],
                        styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
                    }] }
        ];
        /** @nocollapse */
        CronSecondComponent.ctorParameters = function () { return []; };
        return CronSecondComponent;
    }(CronBaseComponent));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CronSecondComponent.prototype.onTouchedCallback;
        /**
         * @type {?}
         * @private
         */
        CronSecondComponent.prototype.onChangeCallback;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cron-week/cron-week.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CronWeekComponent = /** @class */ (function (_super) {
        __extends(CronWeekComponent, _super);
        function CronWeekComponent() {
            var _this = _super.call(this) || this;
            _this.day = DEFAULT_ASTERISK;
            _this.weekMapList = [];
            _this.onTouchedCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            _this.onChangeCallback = (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
            });
            return _this;
        }
        /**
         * @return {?}
         */
        CronWeekComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.init();
        };
        /**
         * @return {?}
         */
        CronWeekComponent.prototype.init = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var list = [];
            Object.keys(WEEK_MAP).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                list.push({
                    label: key,
                    value: WEEK_MAP[key]
                });
            }));
            this.weekMapList = list;
            this.defaultValue = DEFAULT_ASTERISK;
            this.minValue = 1;
            this.maxValue = 7;
            this.valueRange.start = 1;
            this.valueRange.end = 7;
            this.valueLoop.start = 2;
            this.valueLoop.interval = 1;
            this.valueList = list;
        };
        /**
         * @param {?} val
         * @return {?}
         */
        CronWeekComponent.prototype.change = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.defaultValue = this.valueComputed();
            this.onChangeCallback(this.defaultValue);
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        CronWeekComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (obj && obj !== this.valueComputed()) {
                this.parseValue(obj);
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronWeekComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChangeCallback = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CronWeekComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouchedCallback = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        CronWeekComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        CronWeekComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cc-cron-week',
                        template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeNotSet\"\n                [nzDisabled]=\"(this.day && this.day !== '?') || this.disabled\">\u4E0D\u8BBE\u7F6E</label>\n            <span class=\"app-base-tip-msg\">\u65E5\u548C\u5468\u53EA\u80FD\u8BBE\u7F6E\u5176\u4E2D\u4E4B\u4E00</span>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\"\n                [nzDisabled]=\"(this.day && this.day !== '?') || this.disabled\">\u533A\u95F4</label>\n            \u4ECE\n\n            <nz-select [(ngModel)]=\"valueRange.start\"  class=\"app-base-select\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"\n                [nzDisabled]=\"type!=typeRange || (this.day && this.day !== '?') || this.disabled\">\n                <nz-option [nzValue]=\"item.value\" [nzLabel]=\"item.label\" *ngFor=\"let item  of weekMapList\"></nz-option>\n            </nz-select>\n            \u81F3\n            <nz-select [(ngModel)]=\"valueRange.end\" class=\"app-base-select\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"\n                [nzDisabled]=\"type!=typeRange || (this.day && this.day !== '?') || this.disabled\">\n                <nz-option [nzValue]=\"item.value\" [nzLabel]=\"item.label\" *ngFor=\"let item  of weekMapList\"></nz-option>\n            </nz-select>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\"\n                [nzDisabled]=\"(this.day && this.day !== '?') || this.disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-select [(ngModel)]=\"valueLoop.start\"  class=\"app-base-select\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"\n                [nzDisabled]=\"type!=typeLoop || (this.day && this.day !== '?') || this.disabled\">\n                <nz-option [nzValue]=\"item.value\" [nzLabel]=\"item.label\" *ngFor=\"let item  of weekMapList\"></nz-option>\n            </nz-select>\n            \u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\" [nzSize]=\"inputSize\"\n                [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\"\n                [nzDisabled]=\"type!=typeLoop || (this.day && this.day !== '?') || this.disabled\"></nz-input-number>\n            \u5929\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\"\n                [nzDisabled]=\"(this.day && this.day !== '?') || this.disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"\n                    [nzDisabled]=\"type!=typeSecify || (this.day && this.day !== '?') || this.disabled\">\n                </nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return CronWeekComponent; })),
                                multi: true
                            }
                        ],
                        styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
                    }] }
        ];
        /** @nocollapse */
        CronWeekComponent.ctorParameters = function () { return []; };
        CronWeekComponent.propDecorators = {
            day: [{ type: core.Input }]
        };
        return CronWeekComponent;
    }(CronBaseComponent));
    if (false) {
        /** @type {?} */
        CronWeekComponent.prototype.day;
        /** @type {?} */
        CronWeekComponent.prototype.weekMapList;
        /**
         * @type {?}
         * @private
         */
        CronWeekComponent.prototype.onTouchedCallback;
        /**
         * @type {?}
         * @private
         */
        CronWeekComponent.prototype.onChangeCallback;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cron.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CronModule = /** @class */ (function () {
        function CronModule() {
        }
        CronModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [CronComponent, CronYearComponent, CronDayComponent, CronHourComponent, CronMinuteComponent, CronMonthComponent, CronSecondComponent, CronWeekComponent, CronBaseComponent, CronInputComponent],
                        imports: [
                            common.CommonModule,
                            ngZorroAntd.NgZorroAntdModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule
                        ],
                        exports: [CronComponent, CronInputComponent, CronYearComponent, CronDayComponent, CronHourComponent, CronMinuteComponent, CronMonthComponent, CronSecondComponent, CronWeekComponent, CronBaseComponent]
                    },] }
        ];
        return CronModule;
    }());

    exports.CronComponent = CronComponent;
    exports.CronInputComponent = CronInputComponent;
    exports.CronModule = CronModule;
    exports.ɵa = CronYearComponent;
    exports.ɵb = CronBaseComponent;
    exports.ɵc = CronDayComponent;
    exports.ɵd = CronHourComponent;
    exports.ɵe = CronMinuteComponent;
    exports.ɵf = CronMonthComponent;
    exports.ɵg = CronSecondComponent;
    exports.ɵh = CronWeekComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cc-cron.umd.js.map
