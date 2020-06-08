/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-year/cron-year.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DEFAULT_ASTERISK } from '../cron-const';
var CronYearComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CronYearComponent, _super);
    function CronYearComponent() {
        var _this = _super.call(this) || this;
        _this.minYear = 1975;
        _this.maxYear = 9999;
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
    CronYearComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @return {?}
     */
    CronYearComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nowYear = (new Date()).getFullYear();
        this.defaultValue = DEFAULT_ASTERISK;
        this.minValue = this.minYear;
        this.maxValue = this.maxYear;
        this.valueRange.start = nowYear;
        this.valueRange.end = nowYear + 100;
        this.valueLoop.start = nowYear;
        this.valueLoop.interval = 1;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CronYearComponent.prototype.change = /**
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
    CronYearComponent.prototype.writeValue = /**
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
    CronYearComponent.prototype.registerOnChange = /**
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
    CronYearComponent.prototype.registerOnTouched = /**
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
    CronYearComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
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
                            function () { return CronYearComponent; })),
                            multi: true
                        }
                    ],
                    styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
                }] }
    ];
    /** @nocollapse */
    CronYearComponent.ctorParameters = function () { return []; };
    CronYearComponent.propDecorators = {
        minYear: [{ type: Input }],
        maxYear: [{ type: Input }]
    };
    return CronYearComponent;
}(CronBaseComponent));
export { CronYearComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi15ZWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NjLWNyb24vIiwic291cmNlcyI6WyJsaWIvY3Jvbi15ZWFyL2Nyb24teWVhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQ7SUFZdUMsNkNBQWlCO0lBT3REO1FBQUEsWUFDRSxpQkFBTyxTQUNSO1FBTkQsYUFBTyxHQUFHLElBQUksQ0FBQztRQUVmLGFBQU8sR0FBRyxJQUFJLENBQUM7UUF5Q1AsdUJBQWlCOzs7O1FBQUcsVUFBQyxDQUFNO1FBQ25DLENBQUMsRUFBQTtRQUNPLHNCQUFnQjs7OztRQUFHLFVBQUMsQ0FBTTtRQUNsQyxDQUFDLEVBQUE7O0lBeENELENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsZ0NBQUk7OztJQUFKOztZQUNRLE9BQU8sR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUU7UUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxrQ0FBTTs7OztJQUFOLFVBQU8sR0FBUTtRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxzQ0FBVTs7OztJQUFWLFVBQVcsR0FBUTtRQUNqQixJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7OztJQUVELDRDQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFDRCw2Q0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBQ0QsNENBQWdCOzs7O0lBQWhCLFVBQWtCLFVBQW1CO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7O2dCQXpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLDJqRUFBeUM7b0JBRXpDLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsRUFBQzs0QkFDaEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7O2lCQUNGOzs7OzswQkFHRSxLQUFLOzBCQUVMLEtBQUs7O0lBZ0RSLHdCQUFDO0NBQUEsQUFoRUQsQ0FZdUMsaUJBQWlCLEdBb0R2RDtTQXBEWSxpQkFBaUI7OztJQUU1QixvQ0FDZTs7SUFDZixvQ0FDZTs7Ozs7SUF5Q2YsOENBQ0M7Ozs7O0lBQ0QsNkNBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENyb25CYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vY3Jvbi1iYXNlL2Nyb24tYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgREVGQVVMVF9BU1RFUklTSyB9IGZyb20gJy4uL2Nyb24tY29uc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYy1jcm9uLXllYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY3Jvbi15ZWFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3Jvbi15ZWFyLmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ3JvblllYXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JvblllYXJDb21wb25lbnQgZXh0ZW5kcyBDcm9uQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpXG4gIG1pblllYXIgPSAxOTc1O1xuICBASW5wdXQoKVxuICBtYXhZZWFyID0gOTk5OTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IG5vd1llYXIgPSAobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKTtcbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IERFRkFVTFRfQVNURVJJU0s7XG4gICAgdGhpcy5taW5WYWx1ZSA9IHRoaXMubWluWWVhcjtcbiAgICB0aGlzLm1heFZhbHVlID0gdGhpcy5tYXhZZWFyO1xuICAgIHRoaXMudmFsdWVSYW5nZS5zdGFydCA9IG5vd1llYXI7XG4gICAgdGhpcy52YWx1ZVJhbmdlLmVuZCA9IG5vd1llYXIgKyAxMDA7XG4gICAgdGhpcy52YWx1ZUxvb3Auc3RhcnQgPSBub3dZZWFyO1xuICAgIHRoaXMudmFsdWVMb29wLmludGVydmFsID0gMTtcbiAgfVxuXG4gIGNoYW5nZSh2YWw6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy52YWx1ZUNvbXB1dGVkKCk7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZGVmYXVsdFZhbHVlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob2JqICYmIG9iaiAhPT0gdGhpcy52YWx1ZUNvbXB1dGVkKCkpIHtcbiAgICAgIHRoaXMucGFyc2VWYWx1ZShvYmopO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2sgPSAodjogYW55KSA9PiB7XG4gIH1cbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrID0gKHY6IGFueSkgPT4ge1xuICB9XG5cblxufVxuIl19