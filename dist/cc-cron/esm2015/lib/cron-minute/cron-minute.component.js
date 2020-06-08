/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-minute/cron-minute.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef } from '@angular/core';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DEFAULT_ASTERISK } from '../cron-const';
export class CronMinuteComponent extends CronBaseComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1taW51dGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2MtY3Jvbi8iLCJzb3VyY2VzIjpbImxpYi9jcm9uLW1pbnV0ZS9jcm9uLW1pbnV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBY2pELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxpQkFBaUI7SUFFeEQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQThDRixzQkFBaUI7Ozs7UUFBRyxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQ3ZDLENBQUMsRUFBQTtRQUNPLHFCQUFnQjs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7UUFDdEMsQ0FBQyxFQUFBO0lBaERELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs7Y0FDdEIsTUFBTSxHQUFHLEVBQUU7UUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxHQUFRO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFRO1FBQ2pCLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBQ0QsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBQ0QsZ0JBQWdCLENBQUUsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzs7O1lBM0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixtZ0ZBQTJDO2dCQUUzQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQzt3QkFDbEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBQ0Y7Ozs7Ozs7OztJQWtEQyxnREFDQzs7Ozs7SUFDRCwrQ0FDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDcm9uQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Nyb24tYmFzZS9jcm9uLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERFRkFVTFRfQVNURVJJU0sgfSBmcm9tICcuLi9jcm9uLWNvbnN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2MtY3Jvbi1taW51dGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3Jvbi1taW51dGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcm9uLW1pbnV0ZS5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENyb25NaW51dGVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3Jvbk1pbnV0ZUNvbXBvbmVudCBleHRlbmRzIENyb25CYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IERFRkFVTFRfQVNURVJJU0s7XG4gICAgdGhpcy5taW5WYWx1ZSA9IDA7XG4gICAgdGhpcy5tYXhWYWx1ZSA9IDU5O1xuICAgIHRoaXMudmFsdWVSYW5nZS5zdGFydCA9IDA7XG4gICAgdGhpcy52YWx1ZVJhbmdlLmVuZCA9IDU5O1xuICAgIHRoaXMudmFsdWVMb29wLnN0YXJ0ID0gMDtcbiAgICB0aGlzLnZhbHVlTG9vcC5pbnRlcnZhbCA9IDE7XG4gICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IHRoaXMubWluVmFsdWU7IGkgPD0gdGhpcy5tYXhWYWx1ZTsgaSsrKSB7XG4gICAgICB2YWx1ZXMucHVzaCh7XG4gICAgICAgIGxhYmVsOiBpIDwgMTAgPyAnMCcgKyBpIDogaSxcbiAgICAgICAgdmFsdWU6IGlcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlTGlzdCA9IHZhbHVlcztcbiAgfVxuXG4gIGNoYW5nZSh2YWw6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy52YWx1ZUNvbXB1dGVkKCk7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZGVmYXVsdFZhbHVlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob2JqICYmIG9iaiAhPT0gdGhpcy52YWx1ZUNvbXB1dGVkKCkpIHtcbiAgICAgIHRoaXMucGFyc2VWYWx1ZShvYmopO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9ICh2OiBhbnkpID0+IHtcbiAgfVxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAodjogYW55KSA9PiB7XG4gIH1cblxuXG59XG4iXX0=