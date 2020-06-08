/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-input/cron-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { INPUT_SIZE, DEFAULT_ASTERISK, DEFAULT_VALUE, CRON_INPUT_TRIGGER } from '../cron-const';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
        { type: Component, args: [{
                    selector: 'cc-cron-input',
                    template: "<div class=\"app-cron-input-container\">\r\n    <input nz-input [placeholder]=\"placeholder\" [readOnly]=\"true\" [nzSize]=\"inputSize\" [(ngModel)]=\"value\" nz-popover\r\n        [nzPopoverTitle]=\"popoverTitle\" [(nzVisible)]=\"visible\" (nzVisibleChange)=\"visibleChanged($event)\"\r\n        [nzPopoverTrigger]=\"cronInputTrigger\" [nzPopoverPlacement]=\"popoverPlacement\" [disabled]=\"disabled\"\r\n        [nzPopoverContent]=\"cronContentTemplate\" />\r\n    <ng-template #cronContentTemplate>\r\n        <cc-cron [(ngModel)]=\"value\" [disabled]=\"disabled\" [inputSize]=\"inputSize\" [minYear]=\"minYear\"\r\n            [maxYear]=\"maxYear\" [useYear]=\"useYear\" [showYear]=\"showYear\" [showWeek]=\"showWeek\" [showMonth]=\"showMonth\"\r\n            [showDay]=\"showDay\" [showHour]=\"showHour\" [showMinute]=\"showMinute\" [showSecond]=\"showSecond\"\r\n            [second]=\"second\" [minute]=\"minute\" [hour]=\"hour\" [day]=\"day\" [month]=\"month\" [week]=\"week\" [year]=\"year\"\r\n            [style]=\"style\" (ngModelChange)=\"cronChange($event)\">\r\n        </cc-cron>\r\n    </ng-template>\r\n</div>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
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
    return CronInputComponent;
}());
export { CronInputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYy1jcm9uLyIsInNvdXJjZXMiOlsibGliL2Nyb24taW5wdXQvY3Jvbi1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFFekU7SUErSkU7Ozs7UUE3SUEsZ0JBQVcsR0FBRyxRQUFRLENBQUM7Ozs7UUFNdkIsYUFBUSxHQUFZLEtBQUssQ0FBQzs7OztRQU0xQixjQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQzs7OztRQU0vQixZQUFPLEdBQUcsSUFBSSxDQUFDOzs7O1FBTWYsWUFBTyxHQUFHLElBQUksQ0FBQzs7OztRQU1mLFlBQU8sR0FBWSxJQUFJLENBQUM7Ozs7UUFNeEIsYUFBUSxHQUFZLElBQUksQ0FBQzs7OztRQU16QixhQUFRLEdBQVksSUFBSSxDQUFDOzs7O1FBTXpCLGNBQVMsR0FBWSxJQUFJLENBQUM7Ozs7UUFNMUIsWUFBTyxHQUFZLElBQUksQ0FBQzs7OztRQU14QixhQUFRLEdBQVksSUFBSSxDQUFDOzs7O1FBTXpCLGVBQVUsR0FBWSxJQUFJLENBQUM7Ozs7UUFNM0IsZUFBVSxHQUFZLElBQUksQ0FBQzs7OztRQU0zQixXQUFNLEdBQUcsZ0JBQWdCLENBQUM7Ozs7UUFNMUIsV0FBTSxHQUFHLGdCQUFnQixDQUFDOzs7O1FBTTFCLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQzs7OztRQU14QixRQUFHLEdBQUcsZ0JBQWdCLENBQUM7Ozs7UUFNdkIsVUFBSyxHQUFHLGdC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Ozs7O0lBSzFCLGtDQUN3Qjs7Ozs7SUFLeEIsaUNBQ3VCOzs7OztJQUt2QixtQ0FDeUI7Ozs7O0lBS3pCLGtDQUNxQjs7Ozs7SUFLckIsa0NBQ3dCOztJQUd4Qiw4Q0FDNEM7O0lBRzVDLDJDQUM0Qzs7SUFHNUMsbUNBR0U7O0lBRUYsOENBQzZCOztJQUU3QiwwQ0FDa0I7O0lBR2xCLG1DQUFXOztJQUNYLHFDQUFnQjs7Ozs7SUFtQ2hCLCtDQUNDOzs7OztJQUNELDhDQUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSU5QVVRfU0laRSwgREVGQVVMVF9BU1RFUklTSywgREVGQVVMVF9WQUxVRSwgQ1JPTl9JTlBVVF9UUklHR0VSIH0gZnJvbSAnLi4vY3Jvbi1jb25zdCc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NjLWNyb24taW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3Jvbi1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nyb24taW5wdXQuY29tcG9uZW50Lmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDcm9uSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JvbklucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgLyoqXG4gICAqIHBsYWNlaG9sZGVyXG4gICAqL1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlciA9ICfor7fpgInmi6kuLi4nO1xuXG4gIC8qKlxuICAgKiDmmK/lkKblj6/nlKhcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIOi+k+WFpeahhuWkp+Wwj1xuICAgKi9cbiAgQElucHV0KClcbiAgaW5wdXRTaXplID0gSU5QVVRfU0laRS5ERUZBVUxUO1xuXG4gIC8qKlxuICAgKiDmnIDlsI/lubRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1pblllYXIgPSAxOTc1O1xuXG4gIC8qKlxuICAgKiDmnIDlpKflubRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1heFllYXIgPSA5OTk5O1xuXG4gIC8qKlxuICAgKiDkvb/nlKjlubRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHVzZVllYXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiDmmL7npLrlubRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dZZWFyOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICog5pi+56S65ZGoXG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93V2VlazogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIOaYvuekuuaciFxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd01vbnRoOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICog5pi+56S65pelXG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93RGF5OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICog5pi+56S65pe2XG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93SG91cjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIOaYvuekuuWIhlxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd01pbnV0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIOaYvuekuuenklxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd1NlY29uZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gKiDpu5jorqTlgLxcbiAqL1xuICBASW5wdXQoKVxuICBzZWNvbmQgPSBERUZBVUxUX0FTVEVSSVNLO1xuXG4gIC8qKlxuICAqIOm7mOiupOWAvFxuICAqL1xuICBASW5wdXQoKVxuICBtaW51dGUgPSBERUZBVUxUX0FTVEVSSVNLO1xuXG4gIC8qKlxuICAqIOm7mOiupOWAvFxuICAqL1xuICBASW5wdXQoKVxuICBob3VyID0gREVGQVVMVF9BU1RFUklTSztcblxuICAvKipcbiAgKiDpu5jorqTlgLxcbiAgKi9cbiAgQElucHV0KClcbiAgZGF5ID0gREVGQVVMVF9BU1RFUklTSztcblxuICAvKipcbiAgKiDpu5jorqTlgLxcbiAgKi9cbiAgQElucHV0KClcbiAgbW9udGggPSBERUZBVUxUX0FTVEVSSVNLO1xuXG4gIC8qKlxuICAqIOm7mOiupOWAvFxuICAqL1xuICBASW5wdXQoKVxuICB3ZWVrID0gREVGQVVMVF9WQUxVRTtcblxuICAvKipcbiAgKiDpu5jorqTlgLxcbiAgKi9cbiAgQElucHV0KClcbiAgeWVhciA9IERFRkFVTFRfQVNURVJJU0s7XG5cblxuICBASW5wdXQoKVxuICBjcm9uSW5wdXRUcmlnZ2VyID0gQ1JPTl9JTlBVVF9UUklHR0VSLkNMSUNLO1xuXG5cbiAgQE91dHB1dCgpXG4gIHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblxuICBASW5wdXQoKVxuICBzdHlsZSA9IHtcbiAgICB3aWR0aDogJzY1MHB4J1xuICB9O1xuXG4gIEBJbnB1dCgpXG4gIHBvcG92ZXJQbGFjZW1lbnQgPSAndG9wTGVmdCc7XG5cbiAgQElucHV0KClcbiAgcG9wb3ZlclRpdGxlID0gJyc7XG5cblxuICB2YWx1ZSA9ICcnO1xuICB2aXNpYmxlID0gZmFsc2U7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxuICB2aXNpYmxlQ2hhbmdlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh2YWwpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHRoaXMudmFsdWUgPSBvYmo7XG4gICAgfVxuICB9XG5cbiAgY3JvbkNoYW5nZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrID0gKHY6IGFueSkgPT4ge1xuICB9XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjayA9ICh2OiBhbnkpID0+IHtcbiAgfVxufVxuIl19