/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-second/cron-second.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DEFAULT_ASTERISK } from '../cron-const';
/**
 * 秒
 */
var CronSecondComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CronSecondComponent, _super);
    function CronSecondComponent() {
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
    CronSecondComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @return {?}
     */
    CronSecondComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        this.defaultValue = DEFAULT_ASTERISK;
        this.minValue = 0;
        this.maxValue = 59;
        this.valueRange.start = 0;
        this.valueRange.end = 59;
        this.valueLoop.start = 0;
        this.valueLoop.interval = 1;
        /** @type {?} */
        var values = [];
        for (var i = this.minValue; i <= this.maxValue; i++) {
            values.push({
                label: i < 10 ? '0' + i : i,
                value: i
            });
        }
        this.valueList = values;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CronSecondComponent.prototype.change = /**
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
    CronSecondComponent.prototype.writeValue = /**
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
    CronSecondComponent.prototype.registerOnChange = /**
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
    CronSecondComponent.prototype.registerOnTouched = /**
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
    CronSecondComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
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
                            function () { return CronSecondComponent; })),
                            multi: true
                        }
                    ],
                    styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
                }] }
    ];
    /** @nocollapse */
    CronSecondComponent.ctorParameters = function () { return []; };
    return CronSecondComponent;
}(CronBaseComponent));
export { CronSecondComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1zZWNvbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2MtY3Jvbi8iLCJzb3VyY2VzIjpbImxpYi9jcm9uLXNlY29uZC9jcm9uLXNlY29uZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUtqRDtJQVl5QywrQ0FBaUI7SUFFeEQ7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7UUE2Q08sdUJBQWlCOzs7O1FBQUcsVUFBQyxDQUFNO1FBQ25DLENBQUMsRUFBQTtRQUNPLHNCQUFnQjs7OztRQUFHLFVBQUMsQ0FBTTtRQUNsQyxDQUFDLEVBQUE7O0lBaERELENBQUM7Ozs7SUFHRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsa0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7O1lBQ3RCLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxvQ0FBTTs7OztJQUFOLFVBQU8sR0FBUTtRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCx3Q0FBVTs7OztJQUFWLFVBQVcsR0FBUTtRQUNqQixJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7OztJQUVELDhDQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFDRCwrQ0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBQ0QsOENBQWdCOzs7O0lBQWhCLFVBQWtCLFVBQW1CO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7O2dCQTVERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIscWhGQUEyQztvQkFFM0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixFQUFDOzRCQUNsRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7aUJBQ0Y7Ozs7SUF3REQsMEJBQUM7Q0FBQSxBQW5FRCxDQVl5QyxpQkFBaUIsR0F1RHpEO1NBdkRZLG1CQUFtQjs7Ozs7O0lBaUQ5QixnREFDQzs7Ozs7SUFDRCwrQ0FDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDcm9uQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Nyb24tYmFzZS9jcm9uLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERFRkFVTFRfQVNURVJJU0sgfSBmcm9tICcuLi9jcm9uLWNvbnN0JztcblxuLyoqXG4gKiDnp5JcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2MtY3Jvbi1zZWNvbmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3Jvbi1zZWNvbmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcm9uLXNlY29uZC5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENyb25TZWNvbmRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JvblNlY29uZENvbXBvbmVudCBleHRlbmRzIENyb25CYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gREVGQVVMVF9BU1RFUklTSztcbiAgICB0aGlzLm1pblZhbHVlID0gMDtcbiAgICB0aGlzLm1heFZhbHVlID0gNTk7XG4gICAgdGhpcy52YWx1ZVJhbmdlLnN0YXJ0ID0gMDtcbiAgICB0aGlzLnZhbHVlUmFuZ2UuZW5kID0gNTk7XG4gICAgdGhpcy52YWx1ZUxvb3Auc3RhcnQgPSAwO1xuICAgIHRoaXMudmFsdWVMb29wLmludGVydmFsID0gMTtcbiAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5taW5WYWx1ZTsgaSA8PSB0aGlzLm1heFZhbHVlOyBpKyspIHtcbiAgICAgIHZhbHVlcy5wdXNoKHtcbiAgICAgICAgbGFiZWw6IGkgPCAxMCA/ICcwJyArIGkgOiBpLFxuICAgICAgICB2YWx1ZTogaVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudmFsdWVMaXN0ID0gdmFsdWVzO1xuICB9XG5cbiAgY2hhbmdlKHZhbDogYW55KSB7XG4gICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB0aGlzLnZhbHVlQ29tcHV0ZWQoKTtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5kZWZhdWx0VmFsdWUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIGlmIChvYmogJiYgb2JqICE9PSB0aGlzLnZhbHVlQ29tcHV0ZWQoKSkge1xuICAgICAgdGhpcy5wYXJzZVZhbHVlKG9iaik7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9ICh2OiBhbnkpID0+IHtcbiAgfVxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAodjogYW55KSA9PiB7XG4gIH1cblxuXG59XG4iXX0=