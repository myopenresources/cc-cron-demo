import { OnInit } from '@angular/core';
export declare class CronBaseComponent implements OnInit {
    disabled: boolean;
    inputSize: string;
    type: string;
    defaultValue: string;
    typeNotSet: string;
    typeEvery: string;
    typeRange: string;
    typeLoop: string;
    typeWork: string;
    typeLast: string;
    typeSecify: string;
    valueRange: {
        start: number;
        end: number;
    };
    valueLoop: {
        start: number;
        interval: number;
    };
    valueWeek: {
        start: number;
        end: number;
    };
    valueList: any[];
    valueWork: number;
    maxValue: number;
    minValue: number;
    valueLast: number;
    constructor();
    ngOnInit(): void;
    init(): void;
    /**
     * 值计算
     */
    valueComputed(): string;
    /**
     * 解析值
     */
    parseValue(value: any): void;
}
