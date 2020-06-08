/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron/cron.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { INPUT_SIZE, DEFAULT_ASTERISK, DEFAULT_VALUE } from '../cron-const';
export class CronComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYy1jcm9uLyIsInNvdXJjZXMiOlsibGliL2Nyb24vY3Jvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBNEIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWM1RSxNQUFNLE9BQU8sYUFBYTtJQTBIeEI7Ozs7UUFySEEsYUFBUSxHQUFZLEtBQUssQ0FBQzs7OztRQU0xQixjQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQzs7OztRQU0vQixZQUFPLEdBQUcsSUFBSSxDQUFDOzs7O1FBTWYsWUFBTyxHQUFHLElBQUksQ0FBQzs7OztRQU1mLFlBQU8sR0FBWSxJQUFJLENBQUM7Ozs7UUFNeEIsYUFBUSxHQUFZLElBQUksQ0FBQzs7OztRQU16QixhQUFRLEdBQVksSUFBSSxDQUFDOzs7O1FBTXpCLGNBQVMsR0FBWSxJQUFJLENBQUM7Ozs7UUFNMUIsWUFBTyxHQUFZLElBQUksQ0FBQzs7OztRQU14QixhQUFRLEdBQVksSUFBSSxDQUFDOzs7O1FBTXpCLGVBQVUsR0FBWSxJQUFJLENBQUM7Ozs7UUFNM0IsZUFBVSxHQUFZLElBQUksQ0FBQzs7OztRQU0zQixXQUFNLEdBQUcsZ0JBQWdCLENBQUM7Ozs7UUFNMUIsV0FBTSxHQUFHLGdCQUFnQixDQUFDOzs7O1FBTTFCLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQzs7OztRQU14QixRQUFHLEdBQUcsZ0JBQWdCLENBQUM7Ozs7UUFNdkIsVUFBSyxHQUFHLGdCQUFnQixDQUFDOzs7O1FBTXpCLFNBQUksR0FBRyxhQUFhLENBQUM7Ozs7UUFNckIsU0FBSSxHQUFHLGdCQUFn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LEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7YUFDRjs7Ozs7dUJBS0UsS0FBSzt3QkFNTCxLQUFLO3NCQU1MLEtBQUs7c0JBTUwsS0FBSztzQkFNTCxLQUFLO3VCQU1MLEtBQUs7dUJBTUwsS0FBSzt3QkFNTCxLQUFLO3NCQU1MLEtBQUs7dUJBTUwsS0FBSzt5QkFNTCxLQUFLO3lCQU1MLEtBQUs7cUJBTUwsS0FBSztxQkFNTCxLQUFLO21CQU1MLEtBQUs7a0JBTUwsS0FBSztvQkFNTCxLQUFLO21CQU1MLEtBQUs7bUJBTUwsS0FBSztvQkFHTCxLQUFLOzs7Ozs7O0lBL0dOLGlDQUMwQjs7Ozs7SUFLMUIsa0NBQytCOzs7OztJQUsvQixnQ0FDZTs7Ozs7SUFLZixnQ0FDZTs7Ozs7SUFLZixnQ0FDd0I7Ozs7O0lBS3hCLGlDQUN5Qjs7Ozs7SUFLekIsaUNBQ3lCOzs7OztJQUt6QixrQ0FDMEI7Ozs7O0lBSzFCLGdDQUN3Qjs7Ozs7SUFLeEIsaUNBQ3lCOzs7OztJQUt6QixtQ0FDMkI7Ozs7O0lBSzNCLG1DQUMyQjs7Ozs7SUFLM0IsK0JBQzBCOzs7OztJQUsxQiwrQkFDMEI7Ozs7O0lBSzFCLDZCQUN3Qjs7Ozs7SUFLeEIsNEJBQ3VCOzs7OztJQUt2Qiw4QkFDeUI7Ozs7O0lBS3pCLDZCQUNxQjs7Ozs7SUFLckIsNkJBQ3dCOztJQUV4Qiw4QkFDVzs7SUFFWCxrQ0FBdUI7Ozs7O0lBMkZ2QiwwQ0FDQzs7Ozs7SUFDRCx5Q0FDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJTlBVVF9TSVpFLCBERUZBVUxUX0FTVEVSSVNLLCBERUZBVUxUX1ZBTFVFIH0gZnJvbSAnLi4vY3Jvbi1jb25zdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NjLWNyb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY3Jvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nyb24uY29tcG9uZW50Lmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDcm9uQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENyb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvKipcbiAgICog5piv5ZCm5Y+v55SoXG4gICAqL1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiDovpPlhaXmoYblpKflsI9cbiAgICovXG4gIEBJbnB1dCgpXG4gIGlucHV0U2l6ZSA9IElOUFVUX1NJWkUuREVGQVVMVDtcblxuICAvKipcbiAgICog5pyA5bCP5bm0XG4gICAqL1xuICBASW5wdXQoKVxuICBtaW5ZZWFyID0gMTk3NTtcblxuICAvKipcbiAgICog5pyA5aSn5bm0XG4gICAqL1xuICBASW5wdXQoKVxuICBtYXhZZWFyID0gOTk5OTtcblxuICAvKipcbiAgICog5L2/55So5bm0XG4gICAqL1xuICBASW5wdXQoKVxuICB1c2VZZWFyOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICog5pi+56S65bm0XG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93WWVhcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIOaYvuekuuWRqFxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd1dlZWs6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiDmmL7npLrmnIhcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dNb250aDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIOaYvuekuuaXpVxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd0RheTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIOaYvuekuuaXtlxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd0hvdXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiDmmL7npLrliIZcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dNaW51dGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiDmmL7npLrnp5JcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dTZWNvbmQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiDpu5jorqTlgLxcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNlY29uZCA9IERFRkFVTFRfQVNURVJJU0s7XG5cbiAgLyoqXG4gICog6buY6K6k5YC8XG4gICovXG4gIEBJbnB1dCgpXG4gIG1pbnV0ZSA9IERFRkFVTFRfQVNURVJJU0s7XG5cbiAgLyoqXG4gICog6buY6K6k5YC8XG4gICovXG4gIEBJbnB1dCgpXG4gIGhvdXIgPSBERUZBVUxUX0FTVEVSSVNLO1xuXG4gIC8qKlxuICAqIOm7mOiupOWAvFxuICAqL1xuICBASW5wdXQoKVxuICBkYXkgPSBERUZBVUxUX0FTVEVSSVNLO1xuXG4gIC8qKlxuICAqIOm7mOiupOWAvFxuICAqL1xuICBASW5wdXQoKVxuICBtb250aCA9IERFRkFVTFRfQVNURVJJU0s7XG5cbiAgLyoqXG4gICog6buY6K6k5YC8XG4gICovXG4gIEBJbnB1dCgpXG4gIHdlZWsgPSBERUZBVUxUX1ZBTFVFO1xuXG4gIC8qKlxuICAqIOm7mOiupOWAvFxuICAqL1xuICBASW5wdXQoKVxuICB5ZWFyID0gREVGQVVMVF9BU1RFUklTSztcblxuICBASW5wdXQoKVxuICBzdHlsZSA9IHt9O1xuXG4gIGNyb25WYWx1ZTogc3RyaW5nID0gJyc7XG5cblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cblxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblxuICB9XG5cbiAgaW5pdFZhbHVlKCkge1xuICAgIGlmICghdGhpcy5jcm9uVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy5jcm9uVmFsdWUuc3BsaXQoJyAnKS5maWx0ZXIoKGl0ZW06IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuICEhaXRlbTtcbiAgICB9KTtcblxuICAgIGlmICghdmFsdWVzIHx8IHZhbHVlcy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBpID0gMDtcbiAgICBpZiAodmFsdWVzLmxlbmd0aCA+IGkpIHtcbiAgICAgIHRoaXMuc2Vjb25kID0gdmFsdWVzW2krK107XG4gICAgfVxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gaSkge1xuICAgICAgdGhpcy5taW51dGUgPSB2YWx1ZXNbaSsrXTtcbiAgICB9XG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPiBpKSB7XG4gICAgICB0aGlzLmhvdXIgPSB2YWx1ZXNbaSsrXTtcbiAgICB9XG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPiBpKSB7XG4gICAgICB0aGlzLmRheSA9IHZhbHVlc1tpKytdO1xuICAgIH1cbiAgICBpZiAodmFsdWVzLmxlbmd0aCA+IGkpIHtcbiAgICAgIHRoaXMubW9udGggPSB2YWx1ZXNbaSsrXTtcbiAgICB9XG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPiBpKSB7XG4gICAgICB0aGlzLndlZWsgPSB2YWx1ZXNbaSsrXTtcbiAgICB9XG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPiBpKSB7XG4gICAgICB0aGlzLnllYXIgPSB2YWx1ZXNbaV07XG4gICAgfVxuICB9XG5cblxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICB0aGlzLmNyb25WYWx1ZSA9IG9iajtcbiAgICAgIHRoaXMuaW5pdFZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKHZhbDogYW55KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0LnB1c2godGhpcy5zZWNvbmQgPyB0aGlzLnNlY29uZCA6IERFRkFVTFRfQVNURVJJU0spO1xuICAgIHJlc3VsdC5wdXNoKHRoaXMubWludXRlID8gdGhpcy5taW51dGUgOiBERUZBVUxUX0FTVEVSSVNLKTtcbiAgICByZXN1bHQucHVzaCh0aGlzLmhvdXIgPyB0aGlzLmhvdXIgOiBERUZBVUxUX0FTVEVSSVNLKTtcbiAgICByZXN1bHQucHVzaCh0aGlzLmRheSA/IHRoaXMuZGF5IDogREVGQVVMVF9BU1RFUklTSyk7XG4gICAgcmVzdWx0LnB1c2godGhpcy5tb250aCA/IHRoaXMubW9udGggOiBERUZBVUxUX0FTVEVSSVNLKTtcbiAgICByZXN1bHQucHVzaCh0aGlzLndlZWsgPyB0aGlzLndlZWsgOiBERUZBVUxUX1ZBTFVFKTtcbiAgICBpZiAodGhpcy51c2VZZWFyKSB7XG4gICAgICByZXN1bHQucHVzaCh0aGlzLnllYXIgPyB0aGlzLnllYXIgOiBERUZBVUxUX0FTVEVSSVNLKTtcbiAgICB9XG5cbiAgICB0aGlzLmNyb25WYWx1ZSA9IHJlc3VsdC5qb2luKCcgJyk7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuY3JvblZhbHVlKTtcbiAgfVxuXG5cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZFxuICB9XG5cblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrID0gKHY6IGFueSkgPT4ge1xuICB9XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjayA9ICh2OiBhbnkpID0+IHtcbiAgfVxufVxuIl19