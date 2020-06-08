/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-input/cron-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { INPUT_SIZE, DEFAULT_ASTERISK, DEFAULT_VALUE, CRON_INPUT_TRIGGER } from '../cron-const';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class CronInputComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYy1jcm9uLyIsInNvdXJjZXMiOlsibGliL2Nyb24taW5wdXQvY3Jvbi1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFjekUsTUFBTSxPQUFPLGtCQUFrQjtJQW1KN0I7Ozs7UUE3SUEsZ0JBQVcsR0FBRyxRQUFRLENBQUM7Ozs7UUFNdkIsYUFBUSxHQUFZLEtBQUssQ0FBQzs7OztRQU0xQixjQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQzs7OztRQU0vQixZQUFPLEdBQUcsSUFBSSxDQUFDOzs7O1FBTWYsWUFBTyxHQUFHLElBQUksQ0FBQzs7OztRQU1mLFlBQU8sR0FBWSxJQUFJLENBQUM7Ozs7UUFNeEIsYUFBUSxHQUFZLElBQUksQ0FBQzs7OztRQU16QixhQUFRLEdBQVksSUFBSSxDQUFDOzs7O1FBTXpCLGNBQVMsR0FBWSxJQUFJLENBQUM7Ozs7UUFNMUIsWUFBTyxHQUFZLElBQUksQ0FBQzs7OztRQU14QixhQUFRLEdBQVksSUFBSSxDQUFDOzs7O1FBTXpCLGVBQVUsR0FBWSxJQUFJLENBQUM7Ozs7UUFNM0IsZUFBVSxHQUFZLElBQUksQ0FBQzs7OztRQU0zQixXQUFNLEdBQUcsZ0JBQWdCLENBQUM7Ozs7UUFNMUIsV0FBTSxHQUFHLGdCQUFnQixDQUFDOzs7O1FBTTFCLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQzs7OztRQU14QixRQUFHLEdBQUcsZ0JBQWdCLENBQUM7Ozs7UUFNdkIsVUFBSyxHQUFHLGdCQUFnQixDQUFDOzs7O1FBTXpCLFNBQUksR0FBRyxhQUFhLENBQUM7Ozs7UUFNckIsU0FBSSxHQUFHLGdCQUFnQixDQUFDO1FBSXhCLHFCQUFnQixHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQztRQUk1QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFJNUMsVUFBSyxHQUFHO1lBQ04sS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDO1FBR0YscUJBQWdCLEdBQUcsU0FBUyxDQUFDO1FBRzdCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBR2xCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBbUNSLHNCQUFpQjs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7UUFDdkMsQ0FBQyxFQUFBO1FBQ08scUJBQWdCOzs7O1FBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUN0QyxDQUFDLEVBQUE7SUFuQ2UsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFHRCxjQUFjLENBQUMsR0FBWTtRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFRO1FBQ2pCLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFDRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFDRCxnQkFBZ0IsQ0FBRSxVQUFtQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOzs7WUE1TEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtbkNBQTBDO2dCQUUxQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsRUFBQzt3QkFDakQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBQ0Y7Ozs7OzBCQU1FLEtBQUs7dUJBTUwsS0FBSzt3QkFNTCxLQUFLO3NCQU1MLEtBQUs7c0JBTUwsS0FBSztzQkFNTCxLQUFLO3VCQU1MLEtBQUs7dUJBTUwsS0FBSzt3QkFNTCxLQUFLO3NCQU1MLEtBQUs7dUJBTUwsS0FBSzt5QkFNTCxLQUFLO3lCQU1MLEtBQUs7cUJBTUwsS0FBSztxQkFNTCxLQUFLO21CQU1MLEtBQUs7a0JBTUwsS0FBSztvQkFNTCxLQUFLO21CQU1MLEtBQUs7bUJBTUwsS0FBSzsrQkFJTCxLQUFLOzRCQUlMLE1BQU07b0JBSU4sS0FBSzsrQkFLTCxLQUFLOzJCQUdMLEtBQUs7Ozs7Ozs7SUF0SU4seUNBQ3VCOzs7OztJQUt2QixzQ0FDMEI7Ozs7O0lBSzFCLHVDQUMrQjs7Ozs7SUFLL0IscUNBQ2U7Ozs7O0lBS2YscUNBQ2U7Ozs7O0lBS2YscUNBQ3dCOzs7OztJQUt4QixzQ0FDeUI7Ozs7O0lBS3pCLHNDQUN5Qjs7Ozs7SUFLekIsdUNBQzBCOzs7OztJQUsxQixxQ0FDd0I7Ozs7O0lBS3hCLHNDQUN5Qjs7Ozs7SUFLekIsd0NBQzJCOzs7OztJQUszQix3Q0FDMkI7Ozs7O0lBSzNCLG9DQUMwQjs7Ozs7SUFLMUIsb0NBQzBCOzs7OztJQUsxQixrQ0FDd0I7Ozs7O0lBS3hCLGlDQUN1Qjs7Ozs7SUFLdkIsbUNBQ3lCOzs7OztJQUt6QixrQ0FDcUI7Ozs7O0lBS3JCLGtDQUN3Qjs7SUFHeEIsOENBQzRDOztJQUc1QywyQ0FDNEM7O0lBRzVDLG1DQUdFOztJQUVGLDhDQUM2Qjs7SUFFN0IsMENBQ2tCOztJQUdsQixtQ0FBVzs7SUFDWCxxQ0FBZ0I7Ozs7O0lBbUNoQiwrQ0FDQzs7Ozs7SUFDRCw4Q0FDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElOUFVUX1NJWkUsIERFRkFVTFRfQVNURVJJU0ssIERFRkFVTFRfVkFMVUUsIENST05fSU5QVVRfVFJJR0dFUiB9IGZyb20gJy4uL2Nyb24tY29uc3QnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYy1jcm9uLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nyb24taW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcm9uLWlucHV0LmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ3JvbklucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENyb25JbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlclxuICAgKi9cbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXIgPSAn6K+36YCJ5oupLi4uJztcblxuICAvKipcbiAgICog5piv5ZCm5Y+v55SoXG4gICAqL1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiDovpPlhaXmoYblpKflsI9cbiAgICovXG4gIEBJbnB1dCgpXG4gIGlucHV0U2l6ZSA9IElOUFVUX1NJWkUuREVGQVVMVDtcblxuICAvKipcbiAgICog5pyA5bCP5bm0XG4gICAqL1xuICBASW5wdXQoKVxuICBtaW5ZZWFyID0gMTk3NTtcblxuICAvKipcbiAgICog5pyA5aSn5bm0XG4gICAqL1xuICBASW5wdXQoKVxuICBtYXhZZWFyID0gOTk5OTtcblxuICAvKipcbiAgICog5L2/55So5bm0XG4gICAqL1xuICBASW5wdXQoKVxuICB1c2VZZWFyOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICog5pi+56S65bm0XG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93WWVhcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIOaYvuekuuWRqFxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd1dlZWs6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiDmmL7npLrmnIhcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dNb250aDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIOaYvuekuuaXpVxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd0RheTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIOaYvuekuuaXtlxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd0hvdXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiDmmL7npLrliIZcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dNaW51dGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiDmmL7npLrnp5JcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dTZWNvbmQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICog6buY6K6k5YC8XG4gKi9cbiAgQElucHV0KClcbiAgc2Vjb25kID0gREVGQVVMVF9BU1RFUklTSztcblxuICAvKipcbiAgKiDpu5jorqTlgLxcbiAgKi9cbiAgQElucHV0KClcbiAgbWludXRlID0gREVGQVVMVF9BU1RFUklTSztcblxuICAvKipcbiAgKiDpu5jorqTlgLxcbiAgKi9cbiAgQElucHV0KClcbiAgaG91ciA9IERFRkFVTFRfQVNURVJJU0s7XG5cbiAgLyoqXG4gICog6buY6K6k5YC8XG4gICovXG4gIEBJbnB1dCgpXG4gIGRheSA9IERFRkFVTFRfQVNURVJJU0s7XG5cbiAgLyoqXG4gICog6buY6K6k5YC8XG4gICovXG4gIEBJbnB1dCgpXG4gIG1vbnRoID0gREVGQVVMVF9BU1RFUklTSztcblxuICAvKipcbiAgKiDpu5jorqTlgLxcbiAgKi9cbiAgQElucHV0KClcbiAgd2VlayA9IERFRkFVTFRfVkFMVUU7XG5cbiAgLyoqXG4gICog6buY6K6k5YC8XG4gICovXG4gIEBJbnB1dCgpXG4gIHllYXIgPSBERUZBVUxUX0FTVEVSSVNLO1xuXG5cbiAgQElucHV0KClcbiAgY3JvbklucHV0VHJpZ2dlciA9IENST05fSU5QVVRfVFJJR0dFUi5DTElDSztcblxuXG4gIEBPdXRwdXQoKVxuICB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cbiAgQElucHV0KClcbiAgc3R5bGUgPSB7XG4gICAgd2lkdGg6ICc2NTBweCdcbiAgfTtcblxuICBASW5wdXQoKVxuICBwb3BvdmVyUGxhY2VtZW50ID0gJ3RvcExlZnQnO1xuXG4gIEBJbnB1dCgpXG4gIHBvcG92ZXJUaXRsZSA9ICcnO1xuXG5cbiAgdmFsdWUgPSAnJztcbiAgdmlzaWJsZSA9IGZhbHNlO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG5cbiAgdmlzaWJsZUNoYW5nZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodmFsKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICB0aGlzLnZhbHVlID0gb2JqO1xuICAgIH1cbiAgfVxuXG4gIGNyb25DaGFuZ2UodmFsdWU6IGFueSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy52YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9ICh2OiBhbnkpID0+IHtcbiAgfVxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAodjogYW55KSA9PiB7XG4gIH1cbn1cbiJdfQ==