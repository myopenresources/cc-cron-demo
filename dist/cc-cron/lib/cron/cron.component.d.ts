import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class CronComponent implements OnInit, OnChanges, ControlValueAccessor {
    /**
     * 是否可用
     */
    disabled: boolean;
    /**
     * 输入框大小
     */
    inputSize: string;
    /**
     * 最小年
     */
    minYear: number;
    /**
     * 最大年
     */
    maxYear: number;
    /**
     * 使用年
     */
    useYear: boolean;
    /**
     * 显示年
     */
    showYear: boolean;
    /**
     * 显示周
     */
    showWeek: boolean;
    /**
     * 显示月
     */
    showMonth: boolean;
    /**
     * 显示日
     */
    showDay: boolean;
    /**
     * 显示时
     */
    showHour: boolean;
    /**
     * 显示分
     */
    showMinute: boolean;
    /**
     * 显示秒
     */
    showSecond: boolean;
    /**
     * 默认值
     */
    second: string;
    /**
    * 默认值
    */
    minute: string;
    /**
    * 默认值
    */
    hour: string;
    /**
    * 默认值
    */
    day: string;
    /**
    * 默认值
    */
    month: string;
    /**
    * 默认值
    */
    week: string;
    /**
    * 默认值
    */
    year: string;
    style: {};
    cronValue: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initValue(): void;
    writeValue(obj: any): void;
    change(val: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    private onTouchedCallback;
    private onChangeCallback;
}
