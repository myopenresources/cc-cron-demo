/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-month/cron-month.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DEFAULT_ASTERISK } from '../cron-const';
var CronMonthComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CronMonthComponent, _super);
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
        { type: Component, args: [{
                    selector: 'cc-cron-month',
                    template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeEvery\" [nzDisabled]=\"disabled\">\u6BCF\u6708</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\" [nzDisabled]=\"disabled\">\u533A\u95F4</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || disabled\"></nz-input-number> \u6708\n            \u81F3\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.end\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || disabled\">\n            </nz-input-number> \u6708\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\" [nzDisabled]=\"disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeLoop || disabled\"></nz-input-number>\n            \u6708\u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\"\n                [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeLoop || disabled\"></nz-input-number>\n            \u6708\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\" [nzDisabled]=\"disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"\n                    [nzDisabled]=\"type!=typeSecify || disabled\">\n                </nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
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
export { CronMonthComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1tb250aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYy1jcm9uLyIsInNvdXJjZXMiOlsibGliL2Nyb24tbW9udGgvY3Jvbi1tb250aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRDtJQVl3Qyw4Q0FBaUI7SUFFdkQ7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7UUE0Q08sdUJBQWlCOzs7O1FBQUcsVUFBQyxDQUFNO1FBQ25DLENBQUMsRUFBQTtRQUNPLHNCQUFnQjs7OztRQUFHLFVBQUMsQ0FBTTtRQUNsQyxDQUFDLEVBQUE7O0lBL0NELENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsaUNBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7O1lBQ3RCLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELG1DQUFNOzs7O0lBQU4sVUFBTyxHQUFRO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELHVDQUFVOzs7O0lBQVYsVUFBVyxHQUFRO1FBQ2pCLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7O0lBRUQsNkNBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQU87UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUNELDhDQUFpQjs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFDRCw2Q0FBZ0I7Ozs7SUFBaEIsVUFBa0IsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIscWhGQUEwQztvQkFFMUMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixFQUFDOzRCQUNqRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7aUJBQ0Y7Ozs7SUF3REQseUJBQUM7Q0FBQSxBQW5FRCxDQVl3QyxpQkFBaUIsR0F1RHhEO1NBdkRZLGtCQUFrQjs7Ozs7O0lBZ0Q3QiwrQ0FDQzs7Ozs7SUFDRCw4Q0FDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDcm9uQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Nyb24tYmFzZS9jcm9uLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERFRkFVTFRfQVNURVJJU0sgfSBmcm9tICcuLi9jcm9uLWNvbnN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2MtY3Jvbi1tb250aCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jcm9uLW1vbnRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3Jvbi1tb250aC5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENyb25Nb250aENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDcm9uTW9udGhDb21wb25lbnQgZXh0ZW5kcyBDcm9uQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBERUZBVUxUX0FTVEVSSVNLO1xuICAgIHRoaXMubWluVmFsdWUgPSAxO1xuICAgIHRoaXMubWF4VmFsdWUgPSAxMjtcbiAgICB0aGlzLnZhbHVlUmFuZ2Uuc3RhcnQgPSAxO1xuICAgIHRoaXMudmFsdWVSYW5nZS5lbmQgPSAxMjtcbiAgICB0aGlzLnZhbHVlTG9vcC5zdGFydCA9IDE7XG4gICAgdGhpcy52YWx1ZUxvb3AuaW50ZXJ2YWwgPSAxO1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLm1pblZhbHVlOyBpIDw9IHRoaXMubWF4VmFsdWU7IGkrKykge1xuICAgICAgdmFsdWVzLnB1c2goe1xuICAgICAgICBsYWJlbDogaSxcbiAgICAgICAgdmFsdWU6IGlcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlTGlzdCA9IHZhbHVlcztcbiAgfVxuXG4gIGNoYW5nZSh2YWw6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy52YWx1ZUNvbXB1dGVkKCk7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZGVmYXVsdFZhbHVlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob2JqICYmIG9iaiAhPT0gdGhpcy52YWx1ZUNvbXB1dGVkKCkpIHtcbiAgICAgIHRoaXMucGFyc2VWYWx1ZShvYmopO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2sgPSAodjogYW55KSA9PiB7XG4gIH1cbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrID0gKHY6IGFueSkgPT4ge1xuICB9XG5cblxuXG59XG4iXX0=