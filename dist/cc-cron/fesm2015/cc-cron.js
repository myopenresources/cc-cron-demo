import { Component, forwardRef, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-const.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TYPE_NOT_SET = 'TYPE_NOT_SET';
/** @type {?} */
const TYPE_EVERY = 'TYPE_EVERY';
/** @type {?} */
const TYPE_RANGE = 'TYPE_RANGE';
/** @type {?} */
const TYPE_LOOP = 'TYPE_LOOP';
/** @type {?} */
const TYPE_WORK = 'TYPE_WORK';
/** @type {?} */
const TYPE_LAST = 'TYPE_LAST';
/** @type {?} */
const TYPE_SPECIFY = 'TYPE_SPECIFY';
/** @type {?} */
const WEEK_MAP = {
    '周日': 1,
    '周一': 2,
    '周二': 3,
    '周三': 4,
    '周四': 5,
    '周五': 6,
    '周六': 7
};
/** @type {?} */
const DEFAULT_VALUE = '?';
/** @type {?} */
const DEFAULT_ASTERISK = '*';
/** @type {?} */
const INPUT_SIZE = {
    DEFAULT: 'default',
    LARGE: 'large',
    SMALL: 'small'
};
/** @type {?} */
const CRON_INPUT_TRIGGER = {
    CLICK: 'click',
    HOVER: 'hover'
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron/cron.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CronComponent {
    constructor() {
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
        (v) => {
        });
        this.onChangeCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @return {?}
     */
    initValue() {
        if (!this.cronValue) {
            return;
        }
        /** @type {?} */
        const values = this.cronValue.split(' ').filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            return !!item;
        }));
        if (!values || values.length <= 0) {
            return;
        }
        /** @type {?} */
        let i = 0;
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
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj) {
            this.cronValue = obj;
            this.initValue();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    change(val) {
        /** @type {?} */
        const result = [];
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
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CronComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-cron',
                template: "<nz-card class=\"app-cron-container\" [ngStyle]=\"style\">\n    <nz-tabset>\n        <nz-tab nzTitle=\"\u79D2\" *ngIf=\"showSecond\">\n            <cc-cron-second [(ngModel)]=\"second\" [inputSize]=\"inputSize\" [disabled]=\"disabled\"\n                (ngModelChange)=\"change($event)\"></cc-cron-second>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5206\" *ngIf=\"showMinute\">\n            <cc-cron-minute [(ngModel)]=\"minute\" [inputSize]=\"inputSize\" [disabled]=\"disabled\"\n                (ngModelChange)=\"change($event)\"></cc-cron-minute>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u65F6\" *ngIf=\"showHour\">\n            <cc-cron-hour [(ngModel)]=\"hour\" [inputSize]=\"inputSize\" [disabled]=\"disabled\"\n                (ngModelChange)=\"change($event)\"></cc-cron-hour>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u65E5\" *ngIf=\"showDay\">\n            <cc-cron-day [(ngModel)]=\"day\" [inputSize]=\"inputSize\" [week]=\"week\" (ngModelChange)=\"change($event)\"\n                [disabled]=\"disabled\"></cc-cron-day>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u6708\" *ngIf=\"showMonth\">\n            <cc-cron-month [(ngModel)]=\"month\" [inputSize]=\"inputSize\" (ngModelChange)=\"change($event)\"\n                [disabled]=\"disabled\"></cc-cron-month>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5468\" *ngIf=\"showWeek\">\n            <cc-cron-week [(ngModel)]=\"week\" [inputSize]=\"inputSize\" [day]=\"day\" (ngModelChange)=\"change($event)\"\n                [disabled]=\"disabled\"></cc-cron-week>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5E74\" *ngIf=\"useYear && showYear\">\n            <cc-cron-year [(ngModel)]=\"year\" [minYear]=\"minYear\" [maxYear]=\"maxYear\" [inputSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\" [disabled]=\"disabled\"></cc-cron-year>\n        </nz-tab>\n    </nz-tabset>\n</nz-card>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CronComponent)),
                        multi: true
                    }
                ],
                styles: [".app-cron-container{width:100%}.app-cron-container /deep/ .ant-card-body{padding:5px}"]
            }] }
];
/** @nocollapse */
CronComponent.ctorParameters = () => [];
CronComponent.propDecorators = {
    disabled: [{ type: Input }],
    inputSize: [{ type: Input }],
    minYear: [{ type: Input }],
    maxYear: [{ type: Input }],
    useYear: [{ type: Input }],
    showYear: [{ type: Input }],
    showWeek: [{ type: Input }],
    showMonth: [{ type: Input }],
    showDay: [{ type: Input }],
    showHour: [{ type: Input }],
    showMinute: [{ type: Input }],
    showSecond: [{ type: Input }],
    second: [{ type: Input }],
    minute: [{ type: Input }],
    hour: [{ type: Input }],
    day: [{ type: Input }],
    month: [{ type: Input }],
    week: [{ type: Input }],
    year: [{ type: Input }],
    style: [{ type: Input }]
};
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
class CronInputComponent {
    constructor() {
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
        this.visibleChange = new EventEmitter();
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
        (v) => {
        });
        this.onChangeCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    visibleChanged(val) {
        this.visibleChange.emit(val);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj) {
            this.value = obj;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    cronChange(value) {
        this.value = value;
        this.onChangeCallback(this.value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CronInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-cron-input',
                template: "<div class=\"app-cron-input-container\">\r\n    <input nz-input [placeholder]=\"placeholder\" [readOnly]=\"true\" [nzSize]=\"inputSize\" [(ngModel)]=\"value\" nz-popover\r\n        [nzPopoverTitle]=\"popoverTitle\" [(nzVisible)]=\"visible\" (nzVisibleChange)=\"visibleChanged($event)\"\r\n        [nzPopoverTrigger]=\"cronInputTrigger\" [nzPopoverPlacement]=\"popoverPlacement\" [disabled]=\"disabled\"\r\n        [nzPopoverContent]=\"cronContentTemplate\" />\r\n    <ng-template #cronContentTemplate>\r\n        <cc-cron [(ngModel)]=\"value\" [disabled]=\"disabled\" [inputSize]=\"inputSize\" [minYear]=\"minYear\"\r\n            [maxYear]=\"maxYear\" [useYear]=\"useYear\" [showYear]=\"showYear\" [showWeek]=\"showWeek\" [showMonth]=\"showMonth\"\r\n            [showDay]=\"showDay\" [showHour]=\"showHour\" [showMinute]=\"showMinute\" [showSecond]=\"showSecond\"\r\n            [second]=\"second\" [minute]=\"minute\" [hour]=\"hour\" [day]=\"day\" [month]=\"month\" [week]=\"week\" [year]=\"year\"\r\n            [style]=\"style\" (ngModelChange)=\"cronChange($event)\">\r\n        </cc-cron>\r\n    </ng-template>\r\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CronInputComponent)),
                        multi: true
                    }
                ],
                styles: [".app-cron-input-container{width:100%}.app-cron-popover-container{width:300px}"]
            }] }
];
/** @nocollapse */
CronInputComponent.ctorParameters = () => [];
CronInputComponent.propDecorators = {
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    inputSize: [{ type: Input }],
    minYear: [{ type: Input }],
    maxYear: [{ type: Input }],
    useYear: [{ type: Input }],
    showYear: [{ type: Input }],
    showWeek: [{ type: Input }],
    showMonth: [{ type: Input }],
    showDay: [{ type: Input }],
    showHour: [{ type: Input }],
    showMinute: [{ type: Input }],
    showSecond: [{ type: Input }],
    second: [{ type: Input }],
    minute: [{ type: Input }],
    hour: [{ type: Input }],
    day: [{ type: Input }],
    month: [{ type: Input }],
    week: [{ type: Input }],
    year: [{ type: Input }],
    cronInputTrigger: [{ type: Input }],
    visibleChange: [{ type: Output }],
    style: [{ type: Input }],
    popoverPlacement: [{ type: Input }],
    popoverTitle: [{ type: Input }]
};
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
class CronBaseComponent {
    constructor() {
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
    ngOnInit() {
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
    }
    /**
     * 值计算
     * @return {?}
     */
    valueComputed() {
        /** @type {?} */
        const result = [];
        switch (this.type) {
            case TYPE_NOT_SET:
                result.push('?');
                break;
            case TYPE_EVERY:
                result.push('*');
                break;
            case TYPE_RANGE:
                result.push(`${this.valueRange.start}-${this.valueRange.end}`);
                break;
            case TYPE_LOOP:
                result.push(`${this.valueLoop.start}/${this.valueLoop.interval}`);
                break;
            case TYPE_WORK:
                result.push(`${this.valueWork}W`);
                break;
            case TYPE_LAST:
                result.push('L');
                break;
            case TYPE_SPECIFY:
                /** @type {?} */
                const list = [];
                this.valueList.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (item.checked) {
                        list.push(item.value);
                    }
                }));
                result.push(list.join(','));
                break;
            default:
                result.push(this.defaultValue);
                break;
        }
        return result.length > 0 ? result.join('') : this.defaultValue;
    }
    /**
     * 解析值
     * @param {?} value
     * @return {?}
     */
    parseValue(value) {
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
                const values = value.split('-');
                if (values.length >= 2) {
                    this.valueRange.start = parseInt(values[0], 0);
                    this.valueRange.end = parseInt(values[1], 0);
                }
            }
            else if (value.indexOf('/') >= 0) {
                this.type = this.typeLoop;
                /** @type {?} */
                const values = value.split('/');
                if (values.length >= 2) {
                    this.valueLoop.start = value[0] === '*' ? 0 : parseInt(values[0], 0);
                    this.valueLoop.interval = parseInt(values[1], 0);
                }
            }
            else if (value.indexOf('W') >= 0) {
                this.type = this.typeWork;
                /** @type {?} */
                const values = value.split('W');
                if (!values[0] && !isNaN(values[0])) {
                    this.valueWork = parseInt(values[0], 0);
                }
            }
            else if (value.indexOf('L') >= 0) {
                this.type = this.typeLast;
                /** @type {?} */
                const values = value.split('L');
                this.valueLast = parseInt(values[0], 0);
            }
            else if (value.indexOf(',') >= 0 || !isNaN(value)) {
                this.type = this.typeSecify;
                /** @type {?} */
                const vals = value.split(',');
                this.valueList.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    vals.forEach((/**
                     * @param {?} val
                     * @return {?}
                     */
                    (val) => {
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
    }
}
CronBaseComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-cron-base',
                template: "<p>cron-base works!</p>\n",
                styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
            }] }
];
/** @nocollapse */
CronBaseComponent.ctorParameters = () => [];
CronBaseComponent.propDecorators = {
    disabled: [{ type: Input }],
    inputSize: [{ type: Input }]
};
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
class CronYearComponent extends CronBaseComponent {
    constructor() {
        super();
        this.minYear = 1975;
        this.maxYear = 9999;
        this.onTouchedCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
        this.onChangeCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
        /** @type {?} */
        const nowYear = (new Date()).getFullYear();
        this.defaultValue = DEFAULT_ASTERISK;
        this.minValue = this.minYear;
        this.maxValue = this.maxYear;
        this.valueRange.start = nowYear;
        this.valueRange.end = nowYear + 100;
        this.valueLoop.start = nowYear;
        this.valueLoop.interval = 1;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    change(val) {
        this.defaultValue = this.valueComputed();
        this.onChangeCallback(this.defaultValue);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj && obj !== this.valueComputed()) {
            this.parseValue(obj);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CronYearComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-cron-year',
                template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeEvery\" [nzDisabled]=\"disabled\">\u6BCF\u5E74</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\" [nzDisabled]=\"disabled\">\u533A\u95F4</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || disabled\"></nz-input-number> \u5E74\n            \u81F3\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.end\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || disabled\">\n            </nz-input-number> \u5E74\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\" [nzDisabled]=\"disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.start\" [nzMin]=\"minValue\" [nzStep]=\"1\" [nzSize]=\"inputSize\"\n                [nzPrecision]=\"0\" (ngModelChange)=\"change($event)\" [nzDisabled]=\"type!=typeLoop || disabled\">\n            </nz-input-number>\n            \u5E74\u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\" [nzStep]=\"1\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeLoop || disabled\">\n            </nz-input-number>\n            \u5E74\n        </div>\n    </nz-radio-group>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CronYearComponent)),
                        multi: true
                    }
                ],
                styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
            }] }
];
/** @nocollapse */
CronYearComponent.ctorParameters = () => [];
CronYearComponent.propDecorators = {
    minYear: [{ type: Input }],
    maxYear: [{ type: Input }]
};
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
class CronDayComponent extends CronBaseComponent {
    constructor() {
        super();
        this.week = DEFAULT_VALUE;
        this.onTouchedCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
        this.onChangeCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
    }
    /**
     * @return {?}
     */
    init() {
        this.defaultValue = DEFAULT_ASTERISK;
        this.minValue = 1;
        this.maxValue = 31;
        this.valueRange.start = 1;
        this.valueRange.end = 31;
        this.valueLoop.start = 1;
        this.valueLoop.interval = 1;
        for (let i = this.minValue; i <= this.maxValue; i++) {
            this.valueList.push({
                label: i < 10 ? '0' + i : i,
                value: i
            });
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    change(val) {
        this.defaultValue = this.valueComputed();
        this.onChangeCallback(this.defaultValue);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj && obj !== this.valueComputed()) {
            this.parseValue(obj);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CronDayComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-cron-day',
                template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeNotSet\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u4E0D\u8BBE\u7F6E</label>\n            <span class=\"app-base-tip-msg\">\u65E5\u548C\u5468\u53EA\u80FD\u8BBE\u7F6E\u5176\u4E2D\u4E4B\u4E00</span>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeEvery\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u6BCF\u65E5</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u533A\u95F4</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || (this.week && this.week !== '?') || this.disabled\"></nz-input-number> \u65E5\n            \u81F3\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.end\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || (this.week && this.week !== '?') || this.disabled\"></nz-input-number> \u65E5\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeLoop || (this.week && this.week !== '?') || this.disabled\"></nz-input-number>\n            \u65E5\u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\"\n                [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeLoop || (this.week && this.week !== '?') || this.disabled\"></nz-input-number>\n            \u65E5\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeWork\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u5DE5\u4F5C\u65E5</label>\n            \u672C\u6708\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueWork\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeWork || (this.week && this.week !== '?') || this.disabled\"></nz-input-number>\n            \u65E5\uFF0C\u6700\u8FD1\u7684\u5DE5\u4F5C\u65E5\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLast\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u6700\u540E\u4E00\u65E5</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"\n                    [nzDisabled]=\"type!=typeSecify || (this.week && this.week !== '?') || this.disabled\">\n                </nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CronDayComponent)),
                        multi: true
                    }
                ],
                styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
            }] }
];
/** @nocollapse */
CronDayComponent.ctorParameters = () => [];
CronDayComponent.propDecorators = {
    week: [{ type: Input }]
};
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
class CronHourComponent extends CronBaseComponent {
    constructor() {
        super();
        this.onTouchedCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
        this.onChangeCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
        this.defaultValue = DEFAULT_ASTERISK;
        this.minValue = 0;
        this.maxValue = 23;
        this.valueRange.start = 0;
        this.valueRange.end = 23;
        this.valueLoop.start = 0;
        this.valueLoop.interval = 1;
        /** @type {?} */
        const values = [];
        for (let i = this.minValue; i <= this.maxValue; i++) {
            values.push({
                label: i < 10 ? '0' + i : i,
                value: i
            });
        }
        this.valueList = values;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    change(val) {
        this.defaultValue = this.valueComputed();
        this.onChangeCallback(this.defaultValue);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj && obj !== this.valueComputed()) {
            this.parseValue(obj);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CronHourComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-cron-hour',
                template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeEvery\" [nzDisabled]=\"disabled\">\u6BCF\u65F6</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\" [nzDisabled]=\"disabled\">\u533A\u95F4</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\"\n                [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeRange || disabled\" [nzSize]=\"inputSize\"></nz-input-number> \u65F6\n            \u81F3\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.end\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\" [nzStep]=\"1\" (ngModelChange)=\"change($event)\"\n                [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeRange || disabled\" [nzSize]=\"inputSize\"></nz-input-number> \u65F6\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\" [nzDisabled]=\"disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\"\n                [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeLoop || disabled\" [nzSize]=\"inputSize\"></nz-input-number>\n            \u65F6\u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\"\n                [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeLoop || disabled\" [nzSize]=\"inputSize\"></nz-input-number>\n            \u65F6\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\" [nzDisabled]=\"disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"  [nzDisabled]=\"type!=typeSecify || disabled\"></nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CronHourComponent)),
                        multi: true
                    }
                ],
                styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
            }] }
];
/** @nocollapse */
CronHourComponent.ctorParameters = () => [];
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
class CronMinuteComponent extends CronBaseComponent {
    constructor() {
        super();
        this.onTouchedCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
        this.onChangeCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
        this.defaultValue = DEFAULT_ASTERISK;
        this.minValue = 0;
        this.maxValue = 59;
        this.valueRange.start = 0;
        this.valueRange.end = 59;
        this.valueLoop.start = 0;
        this.valueLoop.interval = 1;
        /** @type {?} */
        const values = [];
        for (let i = this.minValue; i <= this.maxValue; i++) {
            values.push({
                label: i < 10 ? '0' + i : i,
                value: i
            });
        }
        this.valueList = values;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    change(val) {
        this.defaultValue = this.valueComputed();
        this.onChangeCallback(this.defaultValue);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj && obj !== this.valueComputed()) {
            this.parseValue(obj);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CronMinuteComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-cron-minute',
                template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeEvery\" [nzDisabled]=\"disabled\">\u6BCF\u5206</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\" [nzDisabled]=\"disabled\">\u533A\u95F4</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || disabled\"></nz-input-number> \u5206\n            \u81F3\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.end\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || disabled\">\n            </nz-input-number> \u5206\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\" [nzDisabled]=\"disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeLoop || disabled\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"></nz-input-number>\n            \u5206\u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\"\n                [nzMax]=\"maxValue\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeLoop || disabled\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"></nz-input-number>\n            \u5206\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\" [nzDisabled]=\"disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"\n                    [nzDisabled]=\"type!=typeSecify || disabled\"></nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CronMinuteComponent)),
                        multi: true
                    }
                ],
                styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
            }] }
];
/** @nocollapse */
CronMinuteComponent.ctorParameters = () => [];
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
class CronMonthComponent extends CronBaseComponent {
    constructor() {
        super();
        this.onTouchedCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
        this.onChangeCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
        this.defaultValue = DEFAULT_ASTERISK;
        this.minValue = 1;
        this.maxValue = 12;
        this.valueRange.start = 1;
        this.valueRange.end = 12;
        this.valueLoop.start = 1;
        this.valueLoop.interval = 1;
        /** @type {?} */
        const values = [];
        for (let i = this.minValue; i <= this.maxValue; i++) {
            values.push({
                label: i,
                value: i
            });
        }
        this.valueList = values;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    change(val) {
        this.defaultValue = this.valueComputed();
        this.onChangeCallback(this.defaultValue);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj && obj !== this.valueComputed()) {
            this.parseValue(obj);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CronMonthComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-cron-month',
                template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeEvery\" [nzDisabled]=\"disabled\">\u6BCF\u6708</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\" [nzDisabled]=\"disabled\">\u533A\u95F4</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || disabled\"></nz-input-number> \u6708\n            \u81F3\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.end\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || disabled\">\n            </nz-input-number> \u6708\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\" [nzDisabled]=\"disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeLoop || disabled\"></nz-input-number>\n            \u6708\u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\"\n                [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeLoop || disabled\"></nz-input-number>\n            \u6708\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\" [nzDisabled]=\"disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"\n                    [nzDisabled]=\"type!=typeSecify || disabled\">\n                </nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CronMonthComponent)),
                        multi: true
                    }
                ],
                styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
            }] }
];
/** @nocollapse */
CronMonthComponent.ctorParameters = () => [];
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
class CronSecondComponent extends CronBaseComponent {
    constructor() {
        super();
        this.onTouchedCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
        this.onChangeCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
        this.defaultValue = DEFAULT_ASTERISK;
        this.minValue = 0;
        this.maxValue = 59;
        this.valueRange.start = 0;
        this.valueRange.end = 59;
        this.valueLoop.start = 0;
        this.valueLoop.interval = 1;
        /** @type {?} */
        const values = [];
        for (let i = this.minValue; i <= this.maxValue; i++) {
            values.push({
                label: i < 10 ? '0' + i : i,
                value: i
            });
        }
        this.valueList = values;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    change(val) {
        this.defaultValue = this.valueComputed();
        this.onChangeCallback(this.defaultValue);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj && obj !== this.valueComputed()) {
            this.parseValue(obj);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CronSecondComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-cron-second',
                template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeEvery\" [nzDisabled]=\"disabled\">\u6BCF\u79D2</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\" [nzDisabled]=\"disabled\">\u533A\u95F4</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.start\" [nzMin]=\"minValue\"\n                [nzSize]=\"inputSize\" [nzMax]=\"maxValue\" [nzStep]=\"1\" [nzPrecision]=\"0\"\n                [nzDisabled]=\"type!=typeRange || disabled\" (ngModelChange)=\"change($event)\"></nz-input-number> \u79D2\n            \u81F3\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.end\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzSize]=\"inputSize\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeRange || disabled\"\n                (ngModelChange)=\"change($event)\">\n            </nz-input-number> \u79D2\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\" [nzDisabled]=\"disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeLoop || disabled\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"></nz-input-number>\n            \u79D2\u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\"\n                [nzMax]=\"maxValue\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzDisabled]=\"type!=typeLoop || disabled\"\n                [nzSize]=\"inputSize\" (ngModelChange)=\"change($event)\"></nz-input-number>\n            \u79D2\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\" [nzDisabled]=\"disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"\n                    [nzDisabled]=\"type!=typeSecify || disabled\">\n                </nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CronSecondComponent)),
                        multi: true
                    }
                ],
                styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
            }] }
];
/** @nocollapse */
CronSecondComponent.ctorParameters = () => [];
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
class CronWeekComponent extends CronBaseComponent {
    constructor() {
        super();
        this.day = DEFAULT_ASTERISK;
        this.weekMapList = [];
        this.onTouchedCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
        this.onChangeCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
        /** @type {?} */
        const list = [];
        Object.keys(WEEK_MAP).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
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
    }
    /**
     * @param {?} val
     * @return {?}
     */
    change(val) {
        this.defaultValue = this.valueComputed();
        this.onChangeCallback(this.defaultValue);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj && obj !== this.valueComputed()) {
            this.parseValue(obj);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CronWeekComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-cron-week',
                template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeNotSet\"\n                [nzDisabled]=\"(this.day && this.day !== '?') || this.disabled\">\u4E0D\u8BBE\u7F6E</label>\n            <span class=\"app-base-tip-msg\">\u65E5\u548C\u5468\u53EA\u80FD\u8BBE\u7F6E\u5176\u4E2D\u4E4B\u4E00</span>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\"\n                [nzDisabled]=\"(this.day && this.day !== '?') || this.disabled\">\u533A\u95F4</label>\n            \u4ECE\n\n            <nz-select [(ngModel)]=\"valueRange.start\"  class=\"app-base-select\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"\n                [nzDisabled]=\"type!=typeRange || (this.day && this.day !== '?') || this.disabled\">\n                <nz-option [nzValue]=\"item.value\" [nzLabel]=\"item.label\" *ngFor=\"let item  of weekMapList\"></nz-option>\n            </nz-select>\n            \u81F3\n            <nz-select [(ngModel)]=\"valueRange.end\" class=\"app-base-select\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"\n                [nzDisabled]=\"type!=typeRange || (this.day && this.day !== '?') || this.disabled\">\n                <nz-option [nzValue]=\"item.value\" [nzLabel]=\"item.label\" *ngFor=\"let item  of weekMapList\"></nz-option>\n            </nz-select>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\"\n                [nzDisabled]=\"(this.day && this.day !== '?') || this.disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-select [(ngModel)]=\"valueLoop.start\"  class=\"app-base-select\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"\n                [nzDisabled]=\"type!=typeLoop || (this.day && this.day !== '?') || this.disabled\">\n                <nz-option [nzValue]=\"item.value\" [nzLabel]=\"item.label\" *ngFor=\"let item  of weekMapList\"></nz-option>\n            </nz-select>\n            \u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\" [nzSize]=\"inputSize\"\n                [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\"\n                [nzDisabled]=\"type!=typeLoop || (this.day && this.day !== '?') || this.disabled\"></nz-input-number>\n            \u5929\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\"\n                [nzDisabled]=\"(this.day && this.day !== '?') || this.disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"\n                    [nzDisabled]=\"type!=typeSecify || (this.day && this.day !== '?') || this.disabled\">\n                </nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CronWeekComponent)),
                        multi: true
                    }
                ],
                styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
            }] }
];
/** @nocollapse */
CronWeekComponent.ctorParameters = () => [];
CronWeekComponent.propDecorators = {
    day: [{ type: Input }]
};
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
class CronModule {
}
CronModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CronComponent, CronYearComponent, CronDayComponent, CronHourComponent, CronMinuteComponent, CronMonthComponent, CronSecondComponent, CronWeekComponent, CronBaseComponent, CronInputComponent],
                imports: [
                    CommonModule,
                    NgZorroAntdModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                exports: [CronComponent, CronInputComponent, CronYearComponent, CronDayComponent, CronHourComponent, CronMinuteComponent, CronMonthComponent, CronSecondComponent, CronWeekComponent, CronBaseComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: cc-cron.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CronComponent, CronInputComponent, CronModule, CronYearComponent as ɵa, CronBaseComponent as ɵb, CronDayComponent as ɵc, CronHourComponent as ɵd, CronMinuteComponent as ɵe, CronMonthComponent as ɵf, CronSecondComponent as ɵg, CronWeekComponent as ɵh };
//# sourceMappingURL=cc-cron.js.map
