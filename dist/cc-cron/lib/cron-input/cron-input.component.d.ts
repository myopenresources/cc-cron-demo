import { OnInit, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class CronInputComponent implements OnInit, ControlValueAccessor {
    /**
     * placeholder
     */
    placeholder: string;
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
    cronInputTrigger: string;
    visibleChange: EventEmitter<boolean>;
    style: {
        width: string;
    };
    popoverPlacement: string;
    popoverTitle: string;
    value: string;
    visible: boolean;
    constructor();
    ngOnInit(): void;
    visibleChanged(val: boolean): void;
    writeValue(obj: any): void;
    cronChange(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    private onTouchedCallback;
    private onChangeCallback;
}
