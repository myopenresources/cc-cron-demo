/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-day/cron-day.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, forwardRef } from '@angular/core';
import { DEFAULT_VALUE, DEFAULT_ASTERISK } from '../cron-const';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var CronDayComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CronDayComponent, _super);
    function CronDayComponent() {
        var _this = _super.call(this) || this;
        _this.week = DEFAULT_VALUE;
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
    CronDayComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * @return {?}
     */
    CronDayComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        this.defaultValue = DEFAULT_ASTERISK;
        this.minValue = 1;
        this.maxValue = 31;
        this.valueRange.start = 1;
        this.valueRange.end = 31;
        this.valueLoop.start = 1;
        this.valueLoop.interval = 1;
        for (var i = this.minValue; i <= this.maxValue; i++) {
            this.valueList.push({
                label: i < 10 ? '0' + i : i,
                value: i
            });
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CronDayComponent.prototype.change = /**
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
    CronDayComponent.prototype.writeValue = /**
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
    CronDayComponent.prototype.registerOnChange = /**
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
    CronDayComponent.prototype.registerOnTouched = /**
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
    CronDayComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    CronDayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cc-cron-day',
                    template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeNotSet\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u4E0D\u8BBE\u7F6E</label>\n            <span class=\"app-base-tip-msg\">\u65E5\u548C\u5468\u53EA\u80FD\u8BBE\u7F6E\u5176\u4E2D\u4E4B\u4E00</span>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeEvery\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u6BCF\u65E5</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u533A\u95F4</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || (this.week && this.week !== '?') || this.disabled\"></nz-input-number> \u65E5\n            \u81F3\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueRange.end\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeRange || (this.week && this.week !== '?') || this.disabled\"></nz-input-number> \u65E5\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.start\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeLoop || (this.week && this.week !== '?') || this.disabled\"></nz-input-number>\n            \u65E5\u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\"\n                [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeLoop || (this.week && this.week !== '?') || this.disabled\"></nz-input-number>\n            \u65E5\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeWork\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u5DE5\u4F5C\u65E5</label>\n            \u672C\u6708\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueWork\" [nzMin]=\"minValue\" [nzMax]=\"maxValue\"\n                [nzStep]=\"1\" (ngModelChange)=\"change($event)\" [nzPrecision]=\"0\" [nzSize]=\"inputSize\"\n                [nzDisabled]=\"type!=typeWork || (this.week && this.week !== '?') || this.disabled\"></nz-input-number>\n            \u65E5\uFF0C\u6700\u8FD1\u7684\u5DE5\u4F5C\u65E5\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLast\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u6700\u540E\u4E00\u65E5</label>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\"\n                [nzDisabled]=\"(this.week && this.week !== '?') || this.disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"\n                    [nzDisabled]=\"type!=typeSecify || (this.week && this.week !== '?') || this.disabled\">\n                </nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CronDayComponent; })),
                            multi: true
                        }
                    ],
                    styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
                }] }
    ];
    /** @nocollapse */
    CronDayComponent.ctorParameters = function () { return []; };
    CronDayComponent.propDecorators = {
        week: [{ type: Input }]
    };
    return CronDayComponent;
}(CronBaseComponent));
export { CronDayComponent };
if (false) {
    /** @type {?} */
    CronDayComponent.prototype.week;
    /**
     * @type {?}
     * @private
     */
    CronDayComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    CronDayComponent.prototype.onChangeCallback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1kYXkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2MtY3Jvbi8iLCJzb3VyY2VzIjpbImxpYi9jcm9uLWRheS9jcm9uLWRheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFO0lBWXNDLDRDQUFpQjtJQUtyRDtRQUFBLFlBQ0UsaUJBQU8sU0FDUjtRQUpELFVBQUksR0FBRyxhQUFhLENBQUM7UUE4Q2IsdUJBQWlCOzs7O1FBQUcsVUFBQyxDQUFNO1FBQ25DLENBQUMsRUFBQTtRQUNPLHNCQUFnQjs7OztRQUFHLFVBQUMsQ0FBTTtRQUNsQyxDQUFDLEVBQUE7O0lBN0NELENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsK0JBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNsQixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsaUNBQU07Ozs7SUFBTixVQUFPLEdBQVE7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQscUNBQVU7Ozs7SUFBVixVQUFXLEdBQVE7UUFDakIsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwyQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBQ0QsNENBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUNELDJDQUFnQjs7OztJQUFoQixVQUFrQixVQUFtQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOztnQkE1REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qixvb0lBQXdDO29CQUV4QyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLEVBQUM7NEJBQy9DLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOztpQkFDRjs7Ozs7dUJBR0UsS0FBSzs7SUFvRFIsdUJBQUM7Q0FBQSxBQWxFRCxDQVlzQyxpQkFBaUIsR0FzRHREO1NBdERZLGdCQUFnQjs7O0lBRTNCLGdDQUNxQjs7Ozs7SUE4Q3JCLDZDQUNDOzs7OztJQUNELDRDQUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBERUZBVUxUX1ZBTFVFLCBERUZBVUxUX0FTVEVSSVNLIH0gZnJvbSAnLi4vY3Jvbi1jb25zdCc7XG5pbXBvcnQgeyBDcm9uQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Nyb24tYmFzZS9jcm9uLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2MtY3Jvbi1kYXknLFxuICB0ZW1wbGF0ZVVybDogJy4vY3Jvbi1kYXkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcm9uLWRheS5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENyb25EYXlDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JvbkRheUNvbXBvbmVudCBleHRlbmRzIENyb25CYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgQElucHV0KClcbiAgd2VlayA9IERFRkFVTFRfVkFMVUU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gREVGQVVMVF9BU1RFUklTSztcbiAgICB0aGlzLm1pblZhbHVlID0gMTtcbiAgICB0aGlzLm1heFZhbHVlID0gMzE7XG4gICAgdGhpcy52YWx1ZVJhbmdlLnN0YXJ0ID0gMTtcbiAgICB0aGlzLnZhbHVlUmFuZ2UuZW5kID0gMzE7XG4gICAgdGhpcy52YWx1ZUxvb3Auc3RhcnQgPSAxO1xuICAgIHRoaXMudmFsdWVMb29wLmludGVydmFsID0gMTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5taW5WYWx1ZTsgaSA8PSB0aGlzLm1heFZhbHVlOyBpKyspIHtcbiAgICAgIHRoaXMudmFsdWVMaXN0LnB1c2goe1xuICAgICAgICBsYWJlbDogaSA8IDEwID8gJzAnICsgaSA6IGksXG4gICAgICAgIHZhbHVlOiBpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2UodmFsOiBhbnkpIHtcbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRoaXMudmFsdWVDb21wdXRlZCgpO1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmRlZmF1bHRWYWx1ZSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgaWYgKG9iaiAmJiBvYmogIT09IHRoaXMudmFsdWVDb21wdXRlZCgpKSB7XG4gICAgICB0aGlzLnBhcnNlVmFsdWUob2JqKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrID0gKHY6IGFueSkgPT4ge1xuICB9XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjayA9ICh2OiBhbnkpID0+IHtcbiAgfVxuXG59XG4iXX0=