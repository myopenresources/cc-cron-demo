/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-base/cron-base.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DEFAULT_VALUE, TYPE_EVERY, TYPE_NOT_SET, TYPE_RANGE, TYPE_LOOP, TYPE_WORK, TYPE_LAST, TYPE_SPECIFY, INPUT_SIZE } from '../cron-const';
var CronBaseComponent = /** @class */ (function () {
    function CronBaseComponent() {
        this.disabled = false;
        this.inputSize = INPUT_SIZE.DEFAULT;
        this.type = TYPE_EVERY;
        this.defaultValue = DEFAULT_VALUE;
        this.typeNotSet = TYPE_NOT_SET;
        this.typeEvery = TYPE_EVERY;
        this.typeRange = TYPE_RANGE;
        this.typeLoop = TYPE_LOOP;
        this.typeWork = TYPE_WORK;
        this.typeLast = TYPE_LAST;
        this.typeSecify = TYPE_SPECIFY;
        this.valueRange = {
            start: 0,
            end: 0
        };
        this.valueLoop = {
            start: 0,
            interval: 1
        };
        this.valueWeek = {
            start: 0,
            end: 0
        };
        this.valueList = [];
        this.valueWork = 1;
        this.maxValue = 0;
        this.minValue = 0;
        this.valueLast = 0;
    }
    /**
     * @return {?}
     */
    CronBaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @return {?}
     */
    CronBaseComponent.prototype.init = /**
     * @return {?}
     */
    function () {
    };
    /**
     * 值计算
     */
    /**
     * 值计算
     * @return {?}
     */
    CronBaseComponent.prototype.valueComputed = /**
     * 值计算
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = [];
        switch (this.type) {
            case TYPE_NOT_SET:
                result.push('?');
                break;
            case TYPE_EVERY:
                result.push('*');
                break;
            case TYPE_RANGE:
                result.push(this.valueRange.start + "-" + this.valueRange.end);
                break;
            case TYPE_LOOP:
                result.push(this.valueLoop.start + "/" + this.valueLoop.interval);
                break;
            case TYPE_WORK:
                result.push(this.valueWork + "W");
                break;
            case TYPE_LAST:
                result.push('L');
                break;
            case TYPE_SPECIFY:
                /** @type {?} */
                var list_1 = [];
                this.valueList.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (item.checked) {
                        list_1.push(item.value);
                    }
                }));
                result.push(list_1.join(','));
                break;
            default:
                result.push(this.defaultValue);
                break;
        }
        return result.length > 0 ? result.join('') : this.defaultValue;
    };
    /**
     * 解析值
     */
    /**
     * 解析值
     * @param {?} value
     * @return {?}
     */
    CronBaseComponent.prototype.parseValue = /**
     * 解析值
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            if (!value || value === this.defaultValue) {
                this.type = this.typeEvery;
            }
            else if (value.indexOf('?') >= 0) {
                this.type = this.typeNotSet;
            }
            else if (value.indexOf('-') >= 0) {
                this.type = this.typeRange;
                /** @type {?} */
                var values = value.split('-');
                if (values.length >= 2) {
                    this.valueRange.start = parseInt(values[0], 0);
                    this.valueRange.end = parseInt(values[1], 0);
                }
            }
            else if (value.indexOf('/') >= 0) {
                this.type = this.typeLoop;
                /** @type {?} */
                var values = value.split('/');
                if (values.length >= 2) {
                    this.valueLoop.start = value[0] === '*' ? 0 : parseInt(values[0], 0);
                    this.valueLoop.interval = parseInt(values[1], 0);
                }
            }
            else if (value.indexOf('W') >= 0) {
                this.type = this.typeWork;
                /** @type {?} */
                var values = value.split('W');
                if (!values[0] && !isNaN(values[0])) {
                    this.valueWork = parseInt(values[0], 0);
                }
            }
            else if (value.indexOf('L') >= 0) {
                this.type = this.typeLast;
                /** @type {?} */
                var values = value.split('L');
                this.valueLast = parseInt(values[0], 0);
            }
            else if (value.indexOf(',') >= 0 || !isNaN(value)) {
                this.type = this.typeSecify;
                /** @type {?} */
                var vals_1 = value.split(',');
                this.valueList.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    vals_1.forEach((/**
                     * @param {?} val
                     * @return {?}
                     */
                    function (val) {
                        if (parseInt(val, 0) === item.value) {
                            item.checked = true;
                            return;
                        }
                    }));
                    return item;
                }));
            }
            else {
                this.type = this.typeEvery;
            }
        }
        catch (e) {
            this.type = this.typeEvery;
        }
        this.defaultValue = this.valueComputed();
    };
    CronBaseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cc-cron-base',
                    template: "<p>cron-base works!</p>\n",
                    styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
                }] }
    ];
    /** @nocollapse */
    CronBaseComponent.ctorParameters = function () { return []; };
    CronBaseComponent.propDecorators = {
        disabled: [{ type: Input }],
        inputSize: [{ type: Input }]
    };
    return CronBaseComponent;
}());
export { CronBaseComponent };
if (false) {
    /** @type {?} */
    CronBaseComponent.prototype.disabled;
    /** @type {?} */
    CronBaseComponent.prototype.inputSize;
    /** @type {?} */
    CronBaseComponent.prototype.type;
    /** @type {?} */
    CronBaseComponent.prototype.defaultValue;
    /** @type {?} */
    CronBaseComponent.prototype.typeNotSet;
    /** @type {?} */
    CronBaseComponent.prototype.typeEvery;
    /** @type {?} */
    CronBaseComponent.prototype.typeRange;
    /** @type {?} */
    CronBaseComponent.prototype.typeLoop;
    /** @type {?} */
    CronBaseComponent.prototype.typeWork;
    /** @type {?} */
    CronBaseComponent.prototype.typeLast;
    /** @type {?} */
    CronBaseComponent.prototype.typeSecify;
    /** @type {?} */
    CronBaseComponent.prototype.valueRange;
    /** @type {?} */
    CronBaseComponent.prototype.valueLoop;
    /** @type {?} */
    CronBaseComponent.prototype.valueWeek;
    /** @type {?} */
    CronBaseComponent.prototype.valueList;
    /** @type {?} */
    CronBaseComponent.prototype.valueWork;
    /** @type {?} */
    CronBaseComponent.prototype.maxValue;
    /** @type {?} */
    CronBaseComponent.prototype.minValue;
    /** @type {?} */
    CronBaseComponent.prototype.valueLast;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NjLWNyb24vIiwic291cmNlcyI6WyJsaWIvY3Jvbi1iYXNlL2Nyb24tYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsYUFBYSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQ3pFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUNwQyxNQUFNLGVBQWUsQ0FBQztBQUd2QjtJQTBDRTtRQWxDQSxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLGNBQVMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBRS9CLFNBQUksR0FBRyxVQUFVLENBQUM7UUFDbEIsaUJBQVksR0FBRyxhQUFhLENBQUM7UUFDN0IsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixjQUFTLEdBQUcsVUFBVSxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxVQUFVLENBQUM7UUFDdkIsYUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNyQixhQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLGFBQVEsR0FBRyxTQUFTLENBQUM7UUFDckIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixlQUFVLEdBQUc7WUFDWCxLQUFLLEVBQUUsQ0FBQztZQUNSLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGLGNBQVMsR0FBRztZQUNWLEtBQUssRUFBRSxDQUFDO1lBQ1IsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFDO1FBRUYsY0FBUyxHQUFHO1lBQ1YsS0FBSyxFQUFFLENBQUM7WUFDUixHQUFHLEVBQUUsQ0FBQztTQUNQLENBQUM7UUFDRixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGFBQVEsR0FBRyxDQUFD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b0JBQ3hCLHFDQUF5Qzs7aUJBRTFDOzs7OzsyQkFHRSxLQUFLOzRCQUdMLEtBQUs7O0lBeUlSLHdCQUFDO0NBQUEsQUFuSkQsSUFtSkM7U0E5SVksaUJBQWlCOzs7SUFFNUIscUNBQzBCOztJQUUxQixzQ0FDK0I7O0lBRS9CLGlDQUFrQjs7SUFDbEIseUNBQTZCOztJQUM3Qix1Q0FBMEI7O0lBQzFCLHNDQUF1Qjs7SUFDdkIsc0NBQXVCOztJQUN2QixxQ0FBcUI7O0lBQ3JCLHFDQUFxQjs7SUFDckIscUNBQXFCOztJQUNyQix1Q0FBMEI7O0lBQzFCLHVDQUdFOztJQUVGLHNDQUdFOztJQUVGLHNDQUdFOztJQUNGLHNDQUFlOztJQUNmLHNDQUFjOztJQUNkLHFDQUFhOztJQUNiLHFDQUFhOztJQUNiLHNDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBERUZBVUxUX1ZBTFVFLCBUWVBFX0VWRVJZLCBUWVBFX05PVF9TRVQsIFRZUEVfUkFOR0UsIFRZUEVfTE9PUCwgVFlQRV9XT1JLLFxuICBUWVBFX0xBU1QsIFRZUEVfU1BFQ0lGWSwgSU5QVVRfU0laRVxufSBmcm9tICcuLi9jcm9uLWNvbnN0JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYy1jcm9uLWJhc2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3Jvbi1iYXNlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3Jvbi1iYXNlLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3JvbkJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgaW5wdXRTaXplID0gSU5QVVRfU0laRS5ERUZBVUxUO1xuXG4gIHR5cGUgPSBUWVBFX0VWRVJZO1xuICBkZWZhdWx0VmFsdWUgPSBERUZBVUxUX1ZBTFVFO1xuICB0eXBlTm90U2V0ID0gVFlQRV9OT1RfU0VUO1xuICB0eXBlRXZlcnkgPSBUWVBFX0VWRVJZO1xuICB0eXBlUmFuZ2UgPSBUWVBFX1JBTkdFO1xuICB0eXBlTG9vcCA9IFRZUEVfTE9PUDtcbiAgdHlwZVdvcmsgPSBUWVBFX1dPUks7XG4gIHR5cGVMYXN0ID0gVFlQRV9MQVNUO1xuICB0eXBlU2VjaWZ5ID0gVFlQRV9TUEVDSUZZO1xuICB2YWx1ZVJhbmdlID0ge1xuICAgIHN0YXJ0OiAwLFxuICAgIGVuZDogMFxuICB9O1xuXG4gIHZhbHVlTG9vcCA9IHtcbiAgICBzdGFydDogMCxcbiAgICBpbnRlcnZhbDogMVxuICB9O1xuXG4gIHZhbHVlV2VlayA9IHtcbiAgICBzdGFydDogMCxcbiAgICBlbmQ6IDBcbiAgfTtcbiAgdmFsdWVMaXN0ID0gW107XG4gIHZhbHVlV29yayA9IDE7XG4gIG1heFZhbHVlID0gMDtcbiAgbWluVmFsdWUgPSAwO1xuICB2YWx1ZUxhc3QgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuXG4gIH1cblxuICAvKipcbiAgICog5YC86K6h566XXG4gICAqL1xuICB2YWx1ZUNvbXB1dGVkKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlIFRZUEVfTk9UX1NFVDpcbiAgICAgICAgcmVzdWx0LnB1c2goJz8nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRZUEVfRVZFUlk6XG4gICAgICAgIHJlc3VsdC5wdXNoKCcqJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUWVBFX1JBTkdFOlxuICAgICAgICByZXN1bHQucHVzaChgJHt0aGlzLnZhbHVlUmFuZ2Uuc3RhcnR9LSR7dGhpcy52YWx1ZVJhbmdlLmVuZH1gKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRZUEVfTE9PUDpcbiAgICAgICAgcmVzdWx0LnB1c2goYCR7dGhpcy52YWx1ZUxvb3Auc3RhcnR9LyR7dGhpcy52YWx1ZUxvb3AuaW50ZXJ2YWx9YCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUWVBFX1dPUks6XG4gICAgICAgIHJlc3VsdC5wdXNoKGAke3RoaXMudmFsdWVXb3JrfVdgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRZUEVfTEFTVDpcbiAgICAgICAgcmVzdWx0LnB1c2goJ0wnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRZUEVfU1BFQ0lGWTpcbiAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlTGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XG4gICAgICAgICAgICBsaXN0LnB1c2goaXRlbS52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmVzdWx0LnB1c2gobGlzdC5qb2luKCcsJykpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQubGVuZ3RoID4gMCA/IHJlc3VsdC5qb2luKCcnKSA6IHRoaXMuZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOino+aekOWAvFxuICAgKi9cbiAgcGFyc2VWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdmFsdWUgfHwgdmFsdWUgPT09IHRoaXMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZUV2ZXJ5O1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCc/JykgPj0gMCkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVOb3RTZXQ7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJy0nKSA+PSAwKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZVJhbmdlO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdCgnLScpO1xuICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZVJhbmdlLnN0YXJ0ID0gcGFyc2VJbnQodmFsdWVzWzBdLCAwKTtcbiAgICAgICAgICB0aGlzLnZhbHVlUmFuZ2UuZW5kID0gcGFyc2VJbnQodmFsdWVzWzFdLCAwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCcvJykgPj0gMCkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVMb29wO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdCgnLycpO1xuICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZUxvb3Auc3RhcnQgPSB2YWx1ZVswXSA9PT0gJyonID8gMCA6IHBhcnNlSW50KHZhbHVlc1swXSwgMCk7XG4gICAgICAgICAgdGhpcy52YWx1ZUxvb3AuaW50ZXJ2YWwgPSBwYXJzZUludCh2YWx1ZXNbMV0sIDApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJ1cnKSA+PSAwKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZVdvcms7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlLnNwbGl0KCdXJyk7XG4gICAgICAgIGlmICghdmFsdWVzWzBdICYmICFpc05hTih2YWx1ZXNbMF0pKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZVdvcmsgPSBwYXJzZUludCh2YWx1ZXNbMF0sIDApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJ0wnKSA+PSAwKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZUxhc3Q7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlLnNwbGl0KCdMJyk7XG4gICAgICAgIHRoaXMudmFsdWVMYXN0ID0gcGFyc2VJbnQodmFsdWVzWzBdLCAwKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5kZXhPZignLCcpID49IDAgfHwgIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVTZWNpZnk7XG4gICAgICAgIGNvbnN0IHZhbHMgPSB2YWx1ZS5zcGxpdCgnLCcpO1xuICAgICAgICB0aGlzLnZhbHVlTGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICB2YWxzLmZvckVhY2goKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQodmFsLCAwKSA9PT0gaXRlbS52YWx1ZSkge1xuICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlRXZlcnk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlRXZlcnk7XG4gICAgfVxuXG4gICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB0aGlzLnZhbHVlQ29tcHV0ZWQoKTtcbiAgfVxuXG59XG4iXX0=