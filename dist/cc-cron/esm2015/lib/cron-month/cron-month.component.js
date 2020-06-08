/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-month/cron-month.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef } from '@angular/core';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DEFAULT_ASTERISK } from '../cron-const';
export class CronMonthComponent extends CronBaseComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1tb250aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYy1jcm9uLyIsInNvdXJjZXMiOlsibGliL2Nyb24tbW9udGgvY3Jvbi1tb250aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBY2pELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxpQkFBaUI7SUFFdkQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQTZDRixzQkFBaUI7Ozs7UUFBRyxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQ3ZDLENBQUMsRUFBQTtRQUNPLHFCQUFnQjs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7UUFDdEMsQ0FBQyxFQUFBO0lBL0NELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs7Y0FDdEIsTUFBTSxHQUFHLEVBQUU7UUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQVE7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFDRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFDRCxnQkFBZ0IsQ0FBRSxVQUFtQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixxaEZBQTBDO2dCQUUxQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsRUFBQzt3QkFDakQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBQ0Y7Ozs7Ozs7OztJQWlEQywrQ0FDQzs7Ozs7SUFDRCw4Q0FDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDcm9uQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Nyb24tYmFzZS9jcm9uLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERFRkFVTFRfQVNURVJJU0sgfSBmcm9tICcuLi9jcm9uLWNvbnN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2MtY3Jvbi1tb250aCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jcm9uLW1vbnRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3Jvbi1tb250aC5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENyb25Nb250aENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDcm9uTW9udGhDb21wb25lbnQgZXh0ZW5kcyBDcm9uQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBERUZBVUxUX0FTVEVSSVNLO1xuICAgIHRoaXMubWluVmFsdWUgPSAxO1xuICAgIHRoaXMubWF4VmFsdWUgPSAxMjtcbiAgICB0aGlzLnZhbHVlUmFuZ2Uuc3RhcnQgPSAxO1xuICAgIHRoaXMudmFsdWVSYW5nZS5lbmQgPSAxMjtcbiAgICB0aGlzLnZhbHVlTG9vcC5zdGFydCA9IDE7XG4gICAgdGhpcy52YWx1ZUxvb3AuaW50ZXJ2YWwgPSAxO1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLm1pblZhbHVlOyBpIDw9IHRoaXMubWF4VmFsdWU7IGkrKykge1xuICAgICAgdmFsdWVzLnB1c2goe1xuICAgICAgICBsYWJlbDogaSxcbiAgICAgICAgdmFsdWU6IGlcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlTGlzdCA9IHZhbHVlcztcbiAgfVxuXG4gIGNoYW5nZSh2YWw6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy52YWx1ZUNvbXB1dGVkKCk7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZGVmYXVsdFZhbHVlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob2JqICYmIG9iaiAhPT0gdGhpcy52YWx1ZUNvbXB1dGVkKCkpIHtcbiAgICAgIHRoaXMucGFyc2VWYWx1ZShvYmopO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2sgPSAodjogYW55KSA9PiB7XG4gIH1cbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrID0gKHY6IGFueSkgPT4ge1xuICB9XG5cblxuXG59XG4iXX0=