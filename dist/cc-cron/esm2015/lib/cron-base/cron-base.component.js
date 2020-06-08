/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-base/cron-base.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DEFAULT_VALUE, TYPE_EVERY, TYPE_NOT_SET, TYPE_RANGE, TYPE_LOOP, TYPE_WORK, TYPE_LAST, TYPE_SPECIFY, INPUT_SIZE } from '../cron-const';
export class CronBaseComponent {
    constructor() {
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
    ngOnInit() {
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
    }
    /**
     * 值计算
     * @return {?}
     */
    valueComputed() {
        /** @type {?} */
        const result = [];
        switch (this.type) {
            case TYPE_NOT_SET:
                result.push('?');
                break;
            case TYPE_EVERY:
                result.push('*');
                break;
            case TYPE_RANGE:
                result.push(`${this.valueRange.start}-${this.valueRange.end}`);
                break;
            case TYPE_LOOP:
                result.push(`${this.valueLoop.start}/${this.valueLoop.interval}`);
                break;
            case TYPE_WORK:
                result.push(`${this.valueWork}W`);
                break;
            case TYPE_LAST:
                result.push('L');
                break;
            case TYPE_SPECIFY:
                /** @type {?} */
                const list = [];
                this.valueList.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (item.checked) {
                        list.push(item.value);
                    }
                }));
                result.push(list.join(','));
                break;
            default:
                result.push(this.defaultValue);
                break;
        }
        return result.length > 0 ? result.join('') : this.defaultValue;
    }
    /**
     * 解析值
     * @param {?} value
     * @return {?}
     */
    parseValue(value) {
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
                const values = value.split('-');
                if (values.length >= 2) {
                    this.valueRange.start = parseInt(values[0], 0);
                    this.valueRange.end = parseInt(values[1], 0);
                }
            }
            else if (value.indexOf('/') >= 0) {
                this.type = this.typeLoop;
                /** @type {?} */
                const values = value.split('/');
                if (values.length >= 2) {
                    this.valueLoop.start = value[0] === '*' ? 0 : parseInt(values[0], 0);
                    this.valueLoop.interval = parseInt(values[1], 0);
                }
            }
            else if (value.indexOf('W') >= 0) {
                this.type = this.typeWork;
                /** @type {?} */
                const values = value.split('W');
                if (!values[0] && !isNaN(values[0])) {
                    this.valueWork = parseInt(values[0], 0);
                }
            }
            else if (value.indexOf('L') >= 0) {
                this.type = this.typeLast;
                /** @type {?} */
                const values = value.split('L');
                this.valueLast = parseInt(values[0], 0);
            }
            else if (value.indexOf(',') >= 0 || !isNaN(value)) {
                this.type = this.typeSecify;
                /** @type {?} */
                const vals = value.split(',');
                this.valueList.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    vals.forEach((/**
                     * @param {?} val
                     * @return {?}
                     */
                    (val) => {
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
    }
}
CronBaseComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-cron-base',
                template: "<p>cron-base works!</p>\n",
                styles: [".app-base-container{margin:10px}.app-base-container .app-base-item{margin-bottom:10px}.app-base-container .app-base-item .app-base-input{width:75px}.app-base-container .app-base-item .app-base-select{width:90px}.app-base-container .app-base-item .app-base-val-list{margin-left:25px;margin-right:25px;margin-top:5px}.app-base-container .app-base-item .app-base-tip-msg{font-size:13px}"]
            }] }
];
/** @nocollapse */
CronBaseComponent.ctorParameters = () => [];
CronBaseComponent.propDecorators = {
    disabled: [{ type: Input }],
    inputSize: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NjLWNyb24vIiwic291cmNlcyI6WyJsaWIvY3Jvbi1iYXNlL2Nyb24tYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsYUFBYSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQ3pFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUNwQyxNQUFNLGVBQWUsQ0FBQztBQVF2QixNQUFNLE9BQU8saUJBQWlCO0lBcUM1QjtRQWxDQSxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLGNBQVMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBRS9CLFNBQUksR0FBRyxVQUFVLENBQUM7UUFDbEIsaUJBQVksR0FBRyxhQUFhLENBQUM7UUFDN0IsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixjQUFTLEdBQUcsVUFBVSxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxVQUFVLENBQUM7UUFDdkIsYUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNyQixhQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLGFBQVEsR0FBRyxTQUFTLENBQUM7UUFDckIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixlQUFVLEdBQUc7WUFDWCxLQUFLLEVBQUUsQ0FBQztZQUNSLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGLGNBQVMsR0FBRztZQUNWLEtBQUssRUFBRSxDQUFDO1lBQ1IsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFDO1FBRUYsY0FBUyxHQUFHO1lBQ1YsS0FBSyxFQUFFLENBQUM7WUFDUixHQUFHLEVBQUUsQ0FBQztTQUNQLENBQUM7UUFDRixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBUyxHQUFHLENBQUMsQ0FBQztR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LFFBQVEsRUFBRSxjQUFjO2dCQUN4QixxQ0FBeUM7O2FBRTFDOzs7Ozt1QkFHRSxLQUFLO3dCQUdMLEtBQUs7Ozs7SUFITixxQ0FDMEI7O0lBRTFCLHNDQUMrQjs7SUFFL0IsaUNBQWtCOztJQUNsQix5Q0FBNkI7O0lBQzdCLHVDQUEwQjs7SUFDMUIsc0NBQXVCOztJQUN2QixzQ0FBdUI7O0lBQ3ZCLHFDQUFxQjs7SUFDckIscUNBQXFCOztJQUNyQixxQ0FBcUI7O0lBQ3JCLHVDQUEwQjs7SUFDMUIsdUNBR0U7O0lBRUYsc0NBR0U7O0lBRUYsc0NBR0U7O0lBQ0Ysc0NBQWU7O0lBQ2Ysc0NBQWM7O0lBQ2QscUNBQWE7O0lBQ2IscUNBQWE7O0lBQ2Isc0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIERFRkFVTFRfVkFMVUUsIFRZUEVfRVZFUlksIFRZUEVfTk9UX1NFVCwgVFlQRV9SQU5HRSwgVFlQRV9MT09QLCBUWVBFX1dPUkssXG4gIFRZUEVfTEFTVCwgVFlQRV9TUEVDSUZZLCBJTlBVVF9TSVpFXG59IGZyb20gJy4uL2Nyb24tY29uc3QnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NjLWNyb24tYmFzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jcm9uLWJhc2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcm9uLWJhc2UuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDcm9uQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBpbnB1dFNpemUgPSBJTlBVVF9TSVpFLkRFRkFVTFQ7XG5cbiAgdHlwZSA9IFRZUEVfRVZFUlk7XG4gIGRlZmF1bHRWYWx1ZSA9IERFRkFVTFRfVkFMVUU7XG4gIHR5cGVOb3RTZXQgPSBUWVBFX05PVF9TRVQ7XG4gIHR5cGVFdmVyeSA9IFRZUEVfRVZFUlk7XG4gIHR5cGVSYW5nZSA9IFRZUEVfUkFOR0U7XG4gIHR5cGVMb29wID0gVFlQRV9MT09QO1xuICB0eXBlV29yayA9IFRZUEVfV09SSztcbiAgdHlwZUxhc3QgPSBUWVBFX0xBU1Q7XG4gIHR5cGVTZWNpZnkgPSBUWVBFX1NQRUNJRlk7XG4gIHZhbHVlUmFuZ2UgPSB7XG4gICAgc3RhcnQ6IDAsXG4gICAgZW5kOiAwXG4gIH07XG5cbiAgdmFsdWVMb29wID0ge1xuICAgIHN0YXJ0OiAwLFxuICAgIGludGVydmFsOiAxXG4gIH07XG5cbiAgdmFsdWVXZWVrID0ge1xuICAgIHN0YXJ0OiAwLFxuICAgIGVuZDogMFxuICB9O1xuICB2YWx1ZUxpc3QgPSBbXTtcbiAgdmFsdWVXb3JrID0gMTtcbiAgbWF4VmFsdWUgPSAwO1xuICBtaW5WYWx1ZSA9IDA7XG4gIHZhbHVlTGFzdCA9IDA7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDlgLzorqHnrpdcbiAgICovXG4gIHZhbHVlQ29tcHV0ZWQoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgVFlQRV9OT1RfU0VUOlxuICAgICAgICByZXN1bHQucHVzaCgnPycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVFlQRV9FVkVSWTpcbiAgICAgICAgcmVzdWx0LnB1c2goJyonKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRZUEVfUkFOR0U6XG4gICAgICAgIHJlc3VsdC5wdXNoKGAke3RoaXMudmFsdWVSYW5nZS5zdGFydH0tJHt0aGlzLnZhbHVlUmFuZ2UuZW5kfWApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVFlQRV9MT09QOlxuICAgICAgICByZXN1bHQucHVzaChgJHt0aGlzLnZhbHVlTG9vcC5zdGFydH0vJHt0aGlzLnZhbHVlTG9vcC5pbnRlcnZhbH1gKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRZUEVfV09SSzpcbiAgICAgICAgcmVzdWx0LnB1c2goYCR7dGhpcy52YWx1ZVdvcmt9V2ApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVFlQRV9MQVNUOlxuICAgICAgICByZXN1bHQucHVzaCgnTCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVFlQRV9TUEVDSUZZOlxuICAgICAgICBjb25zdCBsaXN0ID0gW107XG4gICAgICAgIHRoaXMudmFsdWVMaXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGxpc3QucHVzaChpdGVtLnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXN1bHQucHVzaChsaXN0LmpvaW4oJywnKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5kZWZhdWx0VmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPiAwID8gcmVzdWx0LmpvaW4oJycpIDogdGhpcy5kZWZhdWx0VmFsdWU7XG4gIH1cblxuICAvKipcbiAgICog6Kej5p6Q5YC8XG4gICAqL1xuICBwYXJzZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gdGhpcy5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlRXZlcnk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJz8nKSA+PSAwKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZU5vdFNldDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5kZXhPZignLScpID49IDApIHtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlUmFuZ2U7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlLnNwbGl0KCctJyk7XG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlUmFuZ2Uuc3RhcnQgPSBwYXJzZUludCh2YWx1ZXNbMF0sIDApO1xuICAgICAgICAgIHRoaXMudmFsdWVSYW5nZS5lbmQgPSBwYXJzZUludCh2YWx1ZXNbMV0sIDApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJy8nKSA+PSAwKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZUxvb3A7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlLnNwbGl0KCcvJyk7XG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlTG9vcC5zdGFydCA9IHZhbHVlWzBdID09PSAnKicgPyAwIDogcGFyc2VJbnQodmFsdWVzWzBdLCAwKTtcbiAgICAgICAgICB0aGlzLnZhbHVlTG9vcC5pbnRlcnZhbCA9IHBhcnNlSW50KHZhbHVlc1sxXSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5kZXhPZignVycpID49IDApIHtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlV29yaztcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUuc3BsaXQoJ1cnKTtcbiAgICAgICAgaWYgKCF2YWx1ZXNbMF0gJiYgIWlzTmFOKHZhbHVlc1swXSkpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlV29yayA9IHBhcnNlSW50KHZhbHVlc1swXSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5kZXhPZignTCcpID49IDApIHtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlTGFzdDtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUuc3BsaXQoJ0wnKTtcbiAgICAgICAgdGhpcy52YWx1ZUxhc3QgPSBwYXJzZUludCh2YWx1ZXNbMF0sIDApO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCcsJykgPj0gMCB8fCAhaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZVNlY2lmeTtcbiAgICAgICAgY29uc3QgdmFscyA9IHZhbHVlLnNwbGl0KCcsJyk7XG4gICAgICAgIHRoaXMudmFsdWVMaXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIHZhbHMuZm9yRWFjaCgodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludCh2YWwsIDApID09PSBpdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFdmVyeTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFdmVyeTtcbiAgICB9XG5cbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRoaXMudmFsdWVDb21wdXRlZCgpO1xuICB9XG5cbn1cbiJdfQ==