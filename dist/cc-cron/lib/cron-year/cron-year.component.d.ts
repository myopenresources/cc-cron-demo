import { OnInit } from '@angular/core';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { ControlValueAccessor } from '@angular/forms';
export declare class CronYearComponent extends CronBaseComponent implements OnInit, ControlValueAccessor {
    minYear: number;
    maxYear: number;
    constructor();
    ngOnInit(): void;
    init(): void;
    change(val: any): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    private onTouchedCallback;
    private onChangeCallback;
}
