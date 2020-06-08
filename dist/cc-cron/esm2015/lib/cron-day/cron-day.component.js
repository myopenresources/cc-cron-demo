/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-day/cron-day.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef } from '@angular/core';
import { DEFAULT_VALUE, DEFAULT_ASTERISK } from '../cron-const';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class CronDayComponent extends CronBaseComponent {
    constructor() {
        super();
        this.week = DEFAULT_VALUE;
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
        super.ngOnInit();
    }
    /**
     * @return {?}
     */
    init() {
        this.defaultValue = DEFAULT_ASTERISK;
        this.minValue = 1;
        this.maxValue = 31;
        this.valueRange.start = 1;
        this.valueRange.end = 31;
        this.valueLoop.start = 1;
        this.valueLoop.interval = 1;
        for (let i = this.minValue; i <= this.maxValue; i++) {
            this.valueList.push({
                label: i < 10 ? '0' + i : i,
                value: i
            });
        }
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
                        () => CronDayComponent)),
                        multi: true
                    }
                ],
                styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
            }] }
];
/** @nocollapse */
CronDayComponent.ctorParameters = () => [];
CronDayComponent.propDecorators = {
    week: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1kYXkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2MtY3Jvbi8iLCJzb3VyY2VzIjpbImxpYi9jcm9uLWRheS9jcm9uLWRheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFjekUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGlCQUFpQjtJQUtyRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBSFYsU0FBSSxHQUFHLGFBQWEsQ0FBQztRQThDYixzQkFBaUI7Ozs7UUFBRyxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQ3ZDLENBQUMsRUFBQTtRQUNPLHFCQUFnQjs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7UUFDdEMsQ0FBQyxFQUFBO0lBN0NELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNsQixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQVE7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFDRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFDRCxnQkFBZ0IsQ0FBRSxVQUFtQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOzs7WUE1REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qixvb0lBQXdDO2dCQUV4QyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBQzt3QkFDL0MsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBQ0Y7Ozs7O21CQUdFLEtBQUs7Ozs7SUFBTixnQ0FDcUI7Ozs7O0lBOENyQiw2Q0FDQzs7Ozs7SUFDRCw0Q0FDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgREVGQVVMVF9WQUxVRSwgREVGQVVMVF9BU1RFUklTSyB9IGZyb20gJy4uL2Nyb24tY29uc3QnO1xuaW1wb3J0IHsgQ3JvbkJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9jcm9uLWJhc2UvY3Jvbi1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NjLWNyb24tZGF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nyb24tZGF5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3Jvbi1kYXkuY29tcG9uZW50Lmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDcm9uRGF5Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENyb25EYXlDb21wb25lbnQgZXh0ZW5kcyBDcm9uQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpXG4gIHdlZWsgPSBERUZBVUxUX1ZBTFVFO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IERFRkFVTFRfQVNURVJJU0s7XG4gICAgdGhpcy5taW5WYWx1ZSA9IDE7XG4gICAgdGhpcy5tYXhWYWx1ZSA9IDMxO1xuICAgIHRoaXMudmFsdWVSYW5nZS5zdGFydCA9IDE7XG4gICAgdGhpcy52YWx1ZVJhbmdlLmVuZCA9IDMxO1xuICAgIHRoaXMudmFsdWVMb29wLnN0YXJ0ID0gMTtcbiAgICB0aGlzLnZhbHVlTG9vcC5pbnRlcnZhbCA9IDE7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMubWluVmFsdWU7IGkgPD0gdGhpcy5tYXhWYWx1ZTsgaSsrKSB7XG4gICAgICB0aGlzLnZhbHVlTGlzdC5wdXNoKHtcbiAgICAgICAgbGFiZWw6IGkgPCAxMCA/ICcwJyArIGkgOiBpLFxuICAgICAgICB2YWx1ZTogaVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKHZhbDogYW55KSB7XG4gICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB0aGlzLnZhbHVlQ29tcHV0ZWQoKTtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5kZWZhdWx0VmFsdWUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIGlmIChvYmogJiYgb2JqICE9PSB0aGlzLnZhbHVlQ29tcHV0ZWQoKSkge1xuICAgICAgdGhpcy5wYXJzZVZhbHVlKG9iaik7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9ICh2OiBhbnkpID0+IHtcbiAgfVxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAodjogYW55KSA9PiB7XG4gIH1cblxufVxuIl19