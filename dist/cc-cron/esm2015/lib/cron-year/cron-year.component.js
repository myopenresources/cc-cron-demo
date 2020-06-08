/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-year/cron-year.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DEFAULT_ASTERISK } from '../cron-const';
export class CronYearComponent extends CronBaseComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi15ZWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NjLWNyb24vIiwic291cmNlcyI6WyJsaWIvY3Jvbi15ZWFyL2Nyb24teWVhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWNqRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsaUJBQWlCO0lBT3REO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFMVixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRWYsWUFBTyxHQUFHLElBQUksQ0FBQztRQXlDUCxzQkFBaUI7Ozs7UUFBRyxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQ3ZDLENBQUMsRUFBQTtRQUNPLHFCQUFnQjs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7UUFDdEMsQ0FBQyxFQUFBO0lBeENELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELElBQUk7O2NBQ0ksT0FBTyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRTtRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxHQUFRO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFRO1FBQ2pCLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBQ0QsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBQ0QsZ0JBQWdCLENBQUUsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsMmpFQUF5QztnQkFFekMsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUM7d0JBQ2hELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOzthQUNGOzs7OztzQkFHRSxLQUFLO3NCQUVMLEtBQUs7Ozs7SUFGTixvQ0FDZTs7SUFDZixvQ0FDZTs7Ozs7SUF5Q2YsOENBQ0M7Ozs7O0lBQ0QsNkNBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENyb25CYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vY3Jvbi1iYXNlL2Nyb24tYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgREVGQVVMVF9BU1RFUklTSyB9IGZyb20gJy4uL2Nyb24tY29uc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYy1jcm9uLXllYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY3Jvbi15ZWFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3Jvbi15ZWFyLmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ3JvblllYXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JvblllYXJDb21wb25lbnQgZXh0ZW5kcyBDcm9uQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpXG4gIG1pblllYXIgPSAxOTc1O1xuICBASW5wdXQoKVxuICBtYXhZZWFyID0gOTk5OTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IG5vd1llYXIgPSAobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKTtcbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IERFRkFVTFRfQVNURVJJU0s7XG4gICAgdGhpcy5taW5WYWx1ZSA9IHRoaXMubWluWWVhcjtcbiAgICB0aGlzLm1heFZhbHVlID0gdGhpcy5tYXhZZWFyO1xuICAgIHRoaXMudmFsdWVSYW5nZS5zdGFydCA9IG5vd1llYXI7XG4gICAgdGhpcy52YWx1ZVJhbmdlLmVuZCA9IG5vd1llYXIgKyAxMDA7XG4gICAgdGhpcy52YWx1ZUxvb3Auc3RhcnQgPSBub3dZZWFyO1xuICAgIHRoaXMudmFsdWVMb29wLmludGVydmFsID0gMTtcbiAgfVxuXG4gIGNoYW5nZSh2YWw6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy52YWx1ZUNvbXB1dGVkKCk7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZGVmYXVsdFZhbHVlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob2JqICYmIG9iaiAhPT0gdGhpcy52YWx1ZUNvbXB1dGVkKCkpIHtcbiAgICAgIHRoaXMucGFyc2VWYWx1ZShvYmopO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2sgPSAodjogYW55KSA9PiB7XG4gIH1cbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrID0gKHY6IGFueSkgPT4ge1xuICB9XG5cblxufVxuIl19