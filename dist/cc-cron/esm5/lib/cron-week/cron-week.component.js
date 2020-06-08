/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-week/cron-week.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, forwardRef } from '@angular/core';
import { WEEK_MAP, DEFAULT_ASTERISK } from '../cron-const';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var CronWeekComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CronWeekComponent, _super);
    function CronWeekComponent() {
        var _this = _super.call(this) || this;
        _this.day = DEFAULT_ASTERISK;
        _this.weekMapList = [];
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
    CronWeekComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @return {?}
     */
    CronWeekComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var list = [];
        Object.keys(WEEK_MAP).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            list.push({
                label: key,
                value: WEEK_MAP[key]
            });
        }));
        this.weekMapList = list;
        this.defaultValue = DEFAULT_ASTERISK;
        this.minValue = 1;
        this.maxValue = 7;
        this.valueRange.start = 1;
        this.valueRange.end = 7;
        this.valueLoop.start = 2;
        this.valueLoop.interval = 1;
        this.valueList = list;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CronWeekComponent.prototype.change = /**
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
    CronWeekComponent.prototype.writeValue = /**
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
    CronWeekComponent.prototype.registerOnChange = /**
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
    CronWeekComponent.prototype.registerOnTouched = /**
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
    CronWeekComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    CronWeekComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cc-cron-week',
                    template: "<div class=\"app-base-container\">\n    <div class=\"app-base-item\">\n        \u5F53\u524D\u503C\uFF1A{{defaultValue}}\n    </div>\n    <nz-radio-group [(ngModel)]=\"type\" (ngModelChange)=\"change($event)\">\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeNotSet\"\n                [nzDisabled]=\"(this.day && this.day !== '?') || this.disabled\">\u4E0D\u8BBE\u7F6E</label>\n            <span class=\"app-base-tip-msg\">\u65E5\u548C\u5468\u53EA\u80FD\u8BBE\u7F6E\u5176\u4E2D\u4E4B\u4E00</span>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeRange\"\n                [nzDisabled]=\"(this.day && this.day !== '?') || this.disabled\">\u533A\u95F4</label>\n            \u4ECE\n\n            <nz-select [(ngModel)]=\"valueRange.start\"  class=\"app-base-select\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"\n                [nzDisabled]=\"type!=typeRange || (this.day && this.day !== '?') || this.disabled\">\n                <nz-option [nzValue]=\"item.value\" [nzLabel]=\"item.label\" *ngFor=\"let item  of weekMapList\"></nz-option>\n            </nz-select>\n            \u81F3\n            <nz-select [(ngModel)]=\"valueRange.end\" class=\"app-base-select\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"\n                [nzDisabled]=\"type!=typeRange || (this.day && this.day !== '?') || this.disabled\">\n                <nz-option [nzValue]=\"item.value\" [nzLabel]=\"item.label\" *ngFor=\"let item  of weekMapList\"></nz-option>\n            </nz-select>\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeLoop\"\n                [nzDisabled]=\"(this.day && this.day !== '?') || this.disabled\">\u5FAA\u73AF</label>\n            \u4ECE\n            <nz-select [(ngModel)]=\"valueLoop.start\"  class=\"app-base-select\" [nzSize]=\"inputSize\"\n                (ngModelChange)=\"change($event)\"\n                [nzDisabled]=\"type!=typeLoop || (this.day && this.day !== '?') || this.disabled\">\n                <nz-option [nzValue]=\"item.value\" [nzLabel]=\"item.label\" *ngFor=\"let item  of weekMapList\"></nz-option>\n            </nz-select>\n            \u5F00\u59CB\uFF0C\u95F4\u9694\n            <nz-input-number class=\"app-base-input\" [(ngModel)]=\"valueLoop.interval\" [nzMin]=\"minValue\" [nzSize]=\"inputSize\"\n                [nzMax]=\"maxValue\" (ngModelChange)=\"change($event)\" [nzStep]=\"1\" [nzPrecision]=\"0\"\n                [nzDisabled]=\"type!=typeLoop || (this.day && this.day !== '?') || this.disabled\"></nz-input-number>\n            \u5929\n        </div>\n        <div class=\"app-base-item\">\n            <label nz-radio [nzValue]=\"typeSecify\"\n                [nzDisabled]=\"(this.day && this.day !== '?') || this.disabled\">\u6307\u5B9A</label>\n            <div class=\"app-base-val-list\">\n                <nz-checkbox-group [(ngModel)]=\"valueList\" (ngModelChange)=\"change($event)\"\n                    [nzDisabled]=\"type!=typeSecify || (this.day && this.day !== '?') || this.disabled\">\n                </nz-checkbox-group>\n            </div>\n        </div>\n    </nz-radio-group>\n</div>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CronWeekComponent; })),
                            multi: true
                        }
                    ],
                    styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
                }] }
    ];
    /** @nocollapse */
    CronWeekComponent.ctorParameters = function () { return []; };
    CronWeekComponent.propDecorators = {
        day: [{ type: Input }]
    };
    return CronWeekComponent;
}(CronBaseComponent));
export { CronWeekComponent };
if (false) {
    /** @type {?} */
    CronWeekComponent.prototype.day;
    /** @type {?} */
    CronWeekComponent.prototype.weekMapList;
    /**
     * @type {?}
     * @private
     */
    CronWeekComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    CronWeekComponent.prototype.onChangeCallback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi13ZWVrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NjLWNyb24vIiwic291cmNlcyI6WyJsaWIvY3Jvbi13ZWVrL2Nyb24td2Vlay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBRXpFO0lBWXVDLDZDQUFpQjtJQU10RDtRQUFBLFlBQ0UsaUJBQU8sU0FDUjtRQU5ELFNBQUcsR0FBVyxnQkFBZ0IsQ0FBQztRQUUvQixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQW1EVCx1QkFBaUI7Ozs7UUFBRyxVQUFDLENBQU07UUFDbkMsQ0FBQyxFQUFBO1FBQ08sc0JBQWdCOzs7O1FBQUcsVUFBQyxDQUFNO1FBQ2xDLENBQUMsRUFBQTs7SUFsREQsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxnQ0FBSTs7O0lBQUo7O1lBQ1EsSUFBSSxHQUFHLEVBQUU7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEdBQVc7WUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDUixLQUFLLEVBQUUsR0FBRztnQkFDVixLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQzthQUNyQixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsa0NBQU07Ozs7SUFBTixVQUFPLEdBQVE7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBR0Qsc0NBQVU7Ozs7SUFBVixVQUFXLEdBQVE7UUFDakIsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBQ0QsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUNELDRDQUFnQjs7OztJQUFoQixVQUFrQixVQUFtQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOztnQkFsRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qix3ckdBQXlDO29CQUV6QyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLEVBQUM7NEJBQ2hELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOztpQkFDRjs7Ozs7c0JBRUUsS0FBSzs7SUEyRFIsd0JBQUM7Q0FBQSxBQXhFRCxDQVl1QyxpQkFBaUIsR0E0RHZEO1NBNURZLGlCQUFpQjs7O0lBQzVCLGdDQUMrQjs7SUFFL0Isd0NBQWlCOzs7OztJQW1EakIsOENBQ0M7Ozs7O0lBQ0QsNkNBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdFRUtfTUFQLCBERUZBVUxUX0FTVEVSSVNLIH0gZnJvbSAnLi4vY3Jvbi1jb25zdCc7XG5pbXBvcnQgeyBDcm9uQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Nyb24tYmFzZS9jcm9uLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2MtY3Jvbi13ZWVrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nyb24td2Vlay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nyb24td2Vlay5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENyb25XZWVrQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENyb25XZWVrQ29tcG9uZW50IGV4dGVuZHMgQ3JvbkJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgZGF5OiBzdHJpbmcgPSBERUZBVUxUX0FTVEVSSVNLO1xuICBcbiAgd2Vla01hcExpc3QgPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhXRUVLX01BUCkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgIGxhYmVsOiBrZXksXG4gICAgICAgIHZhbHVlOiBXRUVLX01BUFtrZXldXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLndlZWtNYXBMaXN0ID0gbGlzdDtcblxuICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gREVGQVVMVF9BU1RFUklTSztcbiAgICB0aGlzLm1pblZhbHVlID0gMTtcbiAgICB0aGlzLm1heFZhbHVlID0gNztcbiAgICB0aGlzLnZhbHVlUmFuZ2Uuc3RhcnQgPSAxO1xuICAgIHRoaXMudmFsdWVSYW5nZS5lbmQgPSA3O1xuICAgIHRoaXMudmFsdWVMb29wLnN0YXJ0ID0gMjtcbiAgICB0aGlzLnZhbHVlTG9vcC5pbnRlcnZhbCA9IDE7XG4gICAgdGhpcy52YWx1ZUxpc3QgPSBsaXN0O1xuICB9XG5cbiAgY2hhbmdlKHZhbDogYW55KSB7XG4gICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB0aGlzLnZhbHVlQ29tcHV0ZWQoKTtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5kZWZhdWx0VmFsdWUpO1xuICB9XG5cblxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgaWYgKG9iaiAmJiBvYmogIT09IHRoaXMudmFsdWVDb21wdXRlZCgpKSB7XG4gICAgICB0aGlzLnBhcnNlVmFsdWUob2JqKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrID0gKHY6IGFueSkgPT4ge1xuICB9XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjayA9ICh2OiBhbnkpID0+IHtcbiAgfVxuXG59XG4iXX0=