/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron/cron.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { INPUT_SIZE, DEFAULT_ASTERISK, DEFAULT_VALUE } from '../cron-const';
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
        { type: Component, args: [{
                    selector: 'cc-cron',
                    template: "<nz-card class=\"app-cron-container\" [ngStyle]=\"style\">\n    <nz-tabset>\n        <nz-tab nzTitle=\"\u79D2\" *ngIf=\"showSecond\">\n            <cc-cron-second [(ngModel)]=\"second\" [inputSize]=\"inputSize\" [disabled]=\"disabled\"\n                (ngModelChange)=\"change($event)\"></cc-cron-second>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5206\" *ngIf=\"showMinute\">\n            <cc-cron-minute [(ngModel)]=\"minute\" [inputSize]=\"inputSize\" [disabled]=\"disabled\"\n                (ngModelChange)=\"change($event)\"></cc-cron-minute>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u65F6\" *ngIf=\"showHour\">\n            <cc-cron-hour [(ngModel)]=\"hour\" [inputSize]=\"inputSize\" [disabled]=\"disabled\"\n                (ngModelChange)=\"change($event)\"></cc-cron-hour>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u65E5\" *ngIf=\"showDay\">\n            <cc-cron-day [(ngModel)]=\"day\" [inputSize]=\"inputSize\" [week]=\"week\" (ngModelChange)=\"change($event)\"\n                [disabled]=\"disabled\"></cc-cron-day>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u6708\" *ngIf=\"showMonth\">\n            <cc-cron-month [(ngModel)]=\"month\" [inputSize]=\"inputSize\" (ngModelChange)=\"change($event)\"\n                [disabled]=\"disabled\"></cc-cron-month>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5468\" *ngIf=\"showWeek\">\n            <cc-cron-week [(ngModel)]=\"week\" [inputSize]=\"inputSize\" [day]=\"day\" (ngModelChange)=\"change($event)\"\n                [disabled]=\"disabled\"></cc-cron-week>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5E74\" *ngIf=\"useYear && showYear\">\n            <cc-cron-year [(ngModel)]=\"year\" [minYear]=\"minYear\" [maxYear]=\"maxYear\" [inputSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\" [disabled]=\"disabled\"></cc-cron-year>\n        </nz-tab>\n    </nz-tabset>\n</nz-card>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
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
    return CronComponent;
}());
export { CronComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYy1jcm9uLyIsInNvdXJjZXMiOlsibGliL2Nyb24vY3Jvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBNEIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RTtJQXNJRTs7OztRQXJIQSxhQUFRLEdBQVksS0FBSyxDQUFDOzs7O1FBTTFCLGNBQVMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDOzs7O1FBTS9CLFlBQU8sR0FBRyxJQUFJLENBQUM7Ozs7UUFNZixZQUFPLEdBQUcsSUFBSSxDQUFDOzs7O1FBTWYsWUFBTyxHQUFZLElBQUksQ0FBQzs7OztRQU14QixhQUFRLEdBQVksSUFBSSxDQUFDOzs7O1FBTXpCLGFBQVEsR0FBWSxJQUFJLENBQUM7Ozs7UUFNekIsY0FBUyxHQUFZLElBQUksQ0FBQzs7OztRQU0xQixZQUFPLEdBQVksSUFBSSxDQUFDOzs7O1FBTXhCLGFBQVEsR0FBWSxJQUFJLENBQUM7Ozs7UUFNekIsZUFBVSxHQUFZLElBQUksQ0FBQzs7OztRQU0zQixlQUFVLEdBQVksSUFBSSxDQUFDOzs7O1FBTTNCLFdBQU0sR0FBRyxnQkFBZ0IsQ0FBQzs7OztRQU0xQixXQUFNLEdBQUcsZ0JBQWdCLENBQUM7Ozs7UUFNMUIsU0FBSSxHQUFHLGdCQUFnQixDQUFDOzs7O1FBTXhCLFFBQUcsR0FBRyxnQkFBZ0IsQ0FBQzs7OztRQU12QixVQUFLLEdBQUcsZ0JBQWdCLENBQUM7Ozs7UUFNekIsU0FBSSxHQUFHLGFBQWEsQ0FBQzs7OztRQU1yQixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7UUFHeEIsVUFB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LGFBQWEsRUFBYixDQUFhLEVBQUM7NEJBQzVDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOztpQkFDRjs7Ozs7MkJBS0UsS0FBSzs0QkFNTCxLQUFLOzBCQU1MLEtBQUs7MEJBTUwsS0FBSzswQkFNTCxLQUFLOzJCQU1MLEtBQUs7MkJBTUwsS0FBSzs0QkFNTCxLQUFLOzBCQU1MLEtBQUs7MkJBTUwsS0FBSzs2QkFNTCxLQUFLOzZCQU1MLEtBQUs7eUJBTUwsS0FBSzt5QkFNTCxLQUFLO3VCQU1MLEtBQUs7c0JBTUwsS0FBSzt3QkFNTCxLQUFLO3VCQU1MLEtBQUs7dUJBTUwsS0FBSzt3QkFHTCxLQUFLOztJQWtHUixvQkFBQztDQUFBLEFBak9ELElBaU9DO1NBck5ZLGFBQWE7Ozs7OztJQUl4QixpQ0FDMEI7Ozs7O0lBSzFCLGtDQUMrQjs7Ozs7SUFLL0IsZ0NBQ2U7Ozs7O0lBS2YsZ0NBQ2U7Ozs7O0lBS2YsZ0NBQ3dCOzs7OztJQUt4QixpQ0FDeUI7Ozs7O0lBS3pCLGlDQUN5Qjs7Ozs7SUFLekIsa0NBQzBCOzs7OztJQUsxQixnQ0FDd0I7Ozs7O0lBS3hCLGlDQUN5Qjs7Ozs7SUFLekIsbUNBQzJCOzs7OztJQUszQixtQ0FDMkI7Ozs7O0lBSzNCLCtCQUMwQjs7Ozs7SUFLMUIsK0JBQzBCOzs7OztJQUsxQiw2QkFDd0I7Ozs7O0lBS3hCLDRCQUN1Qjs7Ozs7SUFLdkIsOEJBQ3lCOzs7OztJQUt6Qiw2QkFDcUI7Ozs7O0lBS3JCLDZCQUN3Qjs7SUFFeEIsOEJBQ1c7O0lBRVgsa0NBQXVCOzs7OztJQTJGdkIsMENBQ0M7Ozs7O0lBQ0QseUNBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSU5QVVRfU0laRSwgREVGQVVMVF9BU1RFUklTSywgREVGQVVMVF9WQUxVRSB9IGZyb20gJy4uL2Nyb24tY29uc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYy1jcm9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nyb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcm9uLmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ3JvbkNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDcm9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLyoqXG4gICAqIOaYr+WQpuWPr+eUqFxuICAgKi9cbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICog6L6T5YWl5qGG5aSn5bCPXG4gICAqL1xuICBASW5wdXQoKVxuICBpbnB1dFNpemUgPSBJTlBVVF9TSVpFLkRFRkFVTFQ7XG5cbiAgLyoqXG4gICAqIOacgOWwj+W5tFxuICAgKi9cbiAgQElucHV0KClcbiAgbWluWWVhciA9IDE5NzU7XG5cbiAgLyoqXG4gICAqIOacgOWkp+W5tFxuICAgKi9cbiAgQElucHV0KClcbiAgbWF4WWVhciA9IDk5OTk7XG5cbiAgLyoqXG4gICAqIOS9v+eUqOW5tFxuICAgKi9cbiAgQElucHV0KClcbiAgdXNlWWVhcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIOaYvuekuuW5tFxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd1llYXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiDmmL7npLrlkahcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dXZWVrOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICog5pi+56S65pyIXG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93TW9udGg6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiDmmL7npLrml6VcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dEYXk6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiDmmL7npLrml7ZcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dIb3VyOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICog5pi+56S65YiGXG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93TWludXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICog5pi+56S656eSXG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93U2Vjb25kOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICog6buY6K6k5YC8XG4gICAqL1xuICBASW5wdXQoKVxuICBzZWNvbmQgPSBERUZBVUxUX0FTVEVSSVNLO1xuXG4gIC8qKlxuICAqIOm7mOiupOWAvFxuICAqL1xuICBASW5wdXQoKVxuICBtaW51dGUgPSBERUZBVUxUX0FTVEVSSVNLO1xuXG4gIC8qKlxuICAqIOm7mOiupOWAvFxuICAqL1xuICBASW5wdXQoKVxuICBob3VyID0gREVGQVVMVF9BU1RFUklTSztcblxuICAvKipcbiAgKiDpu5jorqTlgLxcbiAgKi9cbiAgQElucHV0KClcbiAgZGF5ID0gREVGQVVMVF9BU1RFUklTSztcblxuICAvKipcbiAgKiDpu5jorqTlgLxcbiAgKi9cbiAgQElucHV0KClcbiAgbW9udGggPSBERUZBVUxUX0FTVEVSSVNLO1xuXG4gIC8qKlxuICAqIOm7mOiupOWAvFxuICAqL1xuICBASW5wdXQoKVxuICB3ZWVrID0gREVGQVVMVF9WQUxVRTtcblxuICAvKipcbiAgKiDpu5jorqTlgLxcbiAgKi9cbiAgQElucHV0KClcbiAgeWVhciA9IERFRkFVTFRfQVNURVJJU0s7XG5cbiAgQElucHV0KClcbiAgc3R5bGUgPSB7fTtcblxuICBjcm9uVmFsdWU6IHN0cmluZyA9ICcnO1xuXG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG5cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cbiAgfVxuXG4gIGluaXRWYWx1ZSgpIHtcbiAgICBpZiAoIXRoaXMuY3JvblZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuY3JvblZhbHVlLnNwbGl0KCcgJykuZmlsdGVyKChpdGVtOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiAhIWl0ZW07XG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbHVlcyB8fCB2YWx1ZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPiBpKSB7XG4gICAgICB0aGlzLnNlY29uZCA9IHZhbHVlc1tpKytdO1xuICAgIH1cbiAgICBpZiAodmFsdWVzLmxlbmd0aCA+IGkpIHtcbiAgICAgIHRoaXMubWludXRlID0gdmFsdWVzW2krK107XG4gICAgfVxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gaSkge1xuICAgICAgdGhpcy5ob3VyID0gdmFsdWVzW2krK107XG4gICAgfVxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gaSkge1xuICAgICAgdGhpcy5kYXkgPSB2YWx1ZXNbaSsrXTtcbiAgICB9XG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPiBpKSB7XG4gICAgICB0aGlzLm1vbnRoID0gdmFsdWVzW2krK107XG4gICAgfVxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gaSkge1xuICAgICAgdGhpcy53ZWVrID0gdmFsdWVzW2krK107XG4gICAgfVxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gaSkge1xuICAgICAgdGhpcy55ZWFyID0gdmFsdWVzW2ldO1xuICAgIH1cbiAgfVxuXG5cblxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgaWYgKG9iaikge1xuICAgICAgdGhpcy5jcm9uVmFsdWUgPSBvYmo7XG4gICAgICB0aGlzLmluaXRWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZSh2YWw6IGFueSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdC5wdXNoKHRoaXMuc2Vjb25kID8gdGhpcy5zZWNvbmQgOiBERUZBVUxUX0FTVEVSSVNLKTtcbiAgICByZXN1bHQucHVzaCh0aGlzLm1pbnV0ZSA/IHRoaXMubWludXRlIDogREVGQVVMVF9BU1RFUklTSyk7XG4gICAgcmVzdWx0LnB1c2godGhpcy5ob3VyID8gdGhpcy5ob3VyIDogREVGQVVMVF9BU1RFUklTSyk7XG4gICAgcmVzdWx0LnB1c2godGhpcy5kYXkgPyB0aGlzLmRheSA6IERFRkFVTFRfQVNURVJJU0spO1xuICAgIHJlc3VsdC5wdXNoKHRoaXMubW9udGggPyB0aGlzLm1vbnRoIDogREVGQVVMVF9BU1RFUklTSyk7XG4gICAgcmVzdWx0LnB1c2godGhpcy53ZWVrID8gdGhpcy53ZWVrIDogREVGQVVMVF9WQUxVRSk7XG4gICAgaWYgKHRoaXMudXNlWWVhcikge1xuICAgICAgcmVzdWx0LnB1c2godGhpcy55ZWFyID8gdGhpcy55ZWFyIDogREVGQVVMVF9BU1RFUklTSyk7XG4gICAgfVxuXG4gICAgdGhpcy5jcm9uVmFsdWUgPSByZXN1bHQuam9pbignICcpO1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmNyb25WYWx1ZSk7XG4gIH1cblxuXG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWRcbiAgfVxuXG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9ICh2OiBhbnkpID0+IHtcbiAgfVxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAodjogYW55KSA9PiB7XG4gIH1cbn1cbiJdfQ==