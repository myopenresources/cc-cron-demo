/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-week/cron-week.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef } from '@angular/core';
import { WEEK_MAP, DEFAULT_ASTERISK } from '../cron-const';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class CronWeekComponent extends CronBaseComponent {
    constructor() {
        super();
        this.day = DEFAULT_ASTERISK;
        this.weekMapList = [];
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
        const list = [];
        Object.keys(WEEK_MAP).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
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
                        () => CronWeekComponent)),
                        multi: true
                    }
                ],
                styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
            }] }
];
/** @nocollapse */
CronWeekComponent.ctorParameters = () => [];
CronWeekComponent.propDecorators = {
    day: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi13ZWVrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NjLWNyb24vIiwic291cmNlcyI6WyJsaWIvY3Jvbi13ZWVrL2Nyb24td2Vlay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFjekUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGlCQUFpQjtJQU10RDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBTFYsUUFBRyxHQUFXLGdCQUFnQixDQUFDO1FBRS9CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBbURULHNCQUFpQjs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7UUFDdkMsQ0FBQyxFQUFBO1FBQ08scUJBQWdCOzs7O1FBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUN0QyxDQUFDLEVBQUE7SUFsREQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsSUFBSTs7Y0FDSSxJQUFJLEdBQUcsRUFBRTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDUixLQUFLLEVBQUUsR0FBRztnQkFDVixLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQzthQUNyQixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQVE7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBR0QsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFDRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFDRCxnQkFBZ0IsQ0FBRSxVQUFtQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOzs7WUFsRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qix3ckdBQXlDO2dCQUV6QyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBQzt3QkFDaEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBQ0Y7Ozs7O2tCQUVFLEtBQUs7Ozs7SUFBTixnQ0FDK0I7O0lBRS9CLHdDQUFpQjs7Ozs7SUFtRGpCLDhDQUNDOzs7OztJQUNELDZDQUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXRUVLX01BUCwgREVGQVVMVF9BU1RFUklTSyB9IGZyb20gJy4uL2Nyb24tY29uc3QnO1xuaW1wb3J0IHsgQ3JvbkJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9jcm9uLWJhc2UvY3Jvbi1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NjLWNyb24td2VlaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jcm9uLXdlZWsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcm9uLXdlZWsuY29tcG9uZW50Lmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDcm9uV2Vla0NvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDcm9uV2Vla0NvbXBvbmVudCBleHRlbmRzIENyb25CYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpXG4gIGRheTogc3RyaW5nID0gREVGQVVMVF9BU1RFUklTSztcbiAgXG4gIHdlZWtNYXBMaXN0ID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBsaXN0ID0gW107XG4gICAgT2JqZWN0LmtleXMoV0VFS19NQVApLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBsaXN0LnB1c2goe1xuICAgICAgICBsYWJlbDoga2V5LFxuICAgICAgICB2YWx1ZTogV0VFS19NQVBba2V5XVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy53ZWVrTWFwTGlzdCA9IGxpc3Q7XG5cbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IERFRkFVTFRfQVNURVJJU0s7XG4gICAgdGhpcy5taW5WYWx1ZSA9IDE7XG4gICAgdGhpcy5tYXhWYWx1ZSA9IDc7XG4gICAgdGhpcy52YWx1ZVJhbmdlLnN0YXJ0ID0gMTtcbiAgICB0aGlzLnZhbHVlUmFuZ2UuZW5kID0gNztcbiAgICB0aGlzLnZhbHVlTG9vcC5zdGFydCA9IDI7XG4gICAgdGhpcy52YWx1ZUxvb3AuaW50ZXJ2YWwgPSAxO1xuICAgIHRoaXMudmFsdWVMaXN0ID0gbGlzdDtcbiAgfVxuXG4gIGNoYW5nZSh2YWw6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy52YWx1ZUNvbXB1dGVkKCk7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZGVmYXVsdFZhbHVlKTtcbiAgfVxuXG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIGlmIChvYmogJiYgb2JqICE9PSB0aGlzLnZhbHVlQ29tcHV0ZWQoKSkge1xuICAgICAgdGhpcy5wYXJzZVZhbHVlKG9iaik7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9ICh2OiBhbnkpID0+IHtcbiAgfVxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAodjogYW55KSA9PiB7XG4gIH1cblxufVxuIl19