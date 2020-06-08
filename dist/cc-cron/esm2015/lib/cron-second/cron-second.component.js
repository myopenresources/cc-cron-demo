/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-second/cron-second.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef } from '@angular/core';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DEFAULT_ASTERISK } from '../cron-const';
/**
 * 秒
 */
export class CronSecondComponent extends CronBaseComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1zZWNvbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2MtY3Jvbi8iLCJzb3VyY2VzIjpbImxpYi9jcm9uLXNlY29uZC9jcm9uLXNlY29uZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBaUJqRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsaUJBQWlCO0lBRXhEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUE4Q0Ysc0JBQWlCOzs7O1FBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUN2QyxDQUFDLEVBQUE7UUFDTyxxQkFBZ0I7Ozs7UUFBRyxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQ3RDLENBQUMsRUFBQTtJQWhERCxDQUFDOzs7O0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7O2NBQ3RCLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBUTtRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBUTtRQUNqQixJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUNELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUNELGdCQUFnQixDQUFFLFVBQW1CO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7OztZQTVERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIscWhGQUEyQztnQkFFM0MsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLEVBQUM7d0JBQ2xELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOzthQUNGOzs7Ozs7Ozs7SUFrREMsZ0RBQ0M7Ozs7O0lBQ0QsK0NBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3JvbkJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9jcm9uLWJhc2UvY3Jvbi1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBERUZBVUxUX0FTVEVSSVNLIH0gZnJvbSAnLi4vY3Jvbi1jb25zdCc7XG5cbi8qKlxuICog56eSXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NjLWNyb24tc2Vjb25kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nyb24tc2Vjb25kLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3Jvbi1zZWNvbmQuY29tcG9uZW50Lmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDcm9uU2Vjb25kQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENyb25TZWNvbmRDb21wb25lbnQgZXh0ZW5kcyBDcm9uQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IERFRkFVTFRfQVNURVJJU0s7XG4gICAgdGhpcy5taW5WYWx1ZSA9IDA7XG4gICAgdGhpcy5tYXhWYWx1ZSA9IDU5O1xuICAgIHRoaXMudmFsdWVSYW5nZS5zdGFydCA9IDA7XG4gICAgdGhpcy52YWx1ZVJhbmdlLmVuZCA9IDU5O1xuICAgIHRoaXMudmFsdWVMb29wLnN0YXJ0ID0gMDtcbiAgICB0aGlzLnZhbHVlTG9vcC5pbnRlcnZhbCA9IDE7XG4gICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IHRoaXMubWluVmFsdWU7IGkgPD0gdGhpcy5tYXhWYWx1ZTsgaSsrKSB7XG4gICAgICB2YWx1ZXMucHVzaCh7XG4gICAgICAgIGxhYmVsOiBpIDwgMTAgPyAnMCcgKyBpIDogaSxcbiAgICAgICAgdmFsdWU6IGlcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlTGlzdCA9IHZhbHVlcztcbiAgfVxuXG4gIGNoYW5nZSh2YWw6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy52YWx1ZUNvbXB1dGVkKCk7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZGVmYXVsdFZhbHVlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob2JqICYmIG9iaiAhPT0gdGhpcy52YWx1ZUNvbXB1dGVkKCkpIHtcbiAgICAgIHRoaXMucGFyc2VWYWx1ZShvYmopO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2sgPSAodjogYW55KSA9PiB7XG4gIH1cbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrID0gKHY6IGFueSkgPT4ge1xuICB9XG5cblxufVxuIl19