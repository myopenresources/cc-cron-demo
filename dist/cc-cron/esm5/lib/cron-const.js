/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron-const.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var TYPE_NOT_SET = 'TYPE_NOT_SET';
/** @type {?} */
export var TYPE_EVERY = 'TYPE_EVERY';
/** @type {?} */
export var TYPE_RANGE = 'TYPE_RANGE';
/** @type {?} */
export var TYPE_LOOP = 'TYPE_LOOP';
/** @type {?} */
export var TYPE_WORK = 'TYPE_WORK';
/** @type {?} */
export var TYPE_LAST = 'TYPE_LAST';
/** @type {?} */
export var TYPE_SPECIFY = 'TYPE_SPECIFY';
/** @type {?} */
export var WEEK_MAP = {
    '周日': 1,
    '周一': 2,
    '周二': 3,
    '周三': 4,
    '周四': 5,
    '周五': 6,
    '周六': 7
};
/** @type {?} */
export var DEFAULT_VALUE = '?';
/** @type {?} */
export var DEFAULT_ASTERISK = '*';
/** @type {?} */
export var INPUT_SIZE = {
    DEFAULT: 'default',
    LARGE: 'large',
    SMALL: 'small'
};
/** @type {?} */
export var CRON_INPUT_TRIGGER = {
    CLICK: 'click',
    HOVER: 'hover'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1jb25zdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NjLWNyb24vIiwic291cmNlcyI6WyJsaWIvY3Jvbi1jb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNLEtBQU8sWUFBWSxHQUFHLGNBQWM7O0FBQzFDLE1BQU0sS0FBTyxVQUFVLEdBQUcsWUFBWTs7QUFDdEMsTUFBTSxLQUFPLFVBQVUsR0FBRyxZQUFZOztBQUN0QyxNQUFNLEtBQU8sU0FBUyxHQUFHLFdBQVc7O0FBQ3BDLE1BQU0sS0FBTyxTQUFTLEdBQUcsV0FBVzs7QUFDcEMsTUFBTSxLQUFPLFNBQVMsR0FBRyxXQUFXOztBQUNwQyxNQUFNLEtBQU8sWUFBWSxHQUFHLGNBQWM7O0FBRTFDLE1BQU0sS0FBTyxRQUFRLEdBQUc7SUFDcEIsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsQ0FBQztJQUNQLElBQUksRUFBRSxDQUFDO0lBQ1AsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsQ0FBQztJQUNQLElBQUksRUFBRSxDQUFDO0lBQ1AsSUFBSSxFQUFFLENBQUM7Q0FDVjs7QUFHRCxNQUFNLEtBQU8sYUFBYSxHQUFHLEdBQUc7O0FBQ2hDLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyxHQUFHOztBQUVuQyxNQUFNLEtBQU8sVUFBVSxHQUFHO0lBQ3RCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLE9BQU87Q0FDakI7O0FBRUQsTUFBTSxLQUFPLGtCQUFrQixHQUFHO0lBQzlCLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLE9BQU87Q0FDakIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVFlQRV9OT1RfU0VUID0gJ1RZUEVfTk9UX1NFVCc7XG5leHBvcnQgY29uc3QgVFlQRV9FVkVSWSA9ICdUWVBFX0VWRVJZJztcbmV4cG9ydCBjb25zdCBUWVBFX1JBTkdFID0gJ1RZUEVfUkFOR0UnO1xuZXhwb3J0IGNvbnN0IFRZUEVfTE9PUCA9ICdUWVBFX0xPT1AnO1xuZXhwb3J0IGNvbnN0IFRZUEVfV09SSyA9ICdUWVBFX1dPUksnO1xuZXhwb3J0IGNvbnN0IFRZUEVfTEFTVCA9ICdUWVBFX0xBU1QnO1xuZXhwb3J0IGNvbnN0IFRZUEVfU1BFQ0lGWSA9ICdUWVBFX1NQRUNJRlknO1xuXG5leHBvcnQgY29uc3QgV0VFS19NQVAgPSB7XG4gICAgJ+WRqOaXpSc6IDEsXG4gICAgJ+WRqOS4gCc6IDIsXG4gICAgJ+WRqOS6jCc6IDMsXG4gICAgJ+WRqOS4iSc6IDQsXG4gICAgJ+WRqOWbmyc6IDUsXG4gICAgJ+WRqOS6lCc6IDYsXG4gICAgJ+WRqOWFrSc6IDdcbn07XG5cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVkFMVUUgPSAnPyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9BU1RFUklTSyA9ICcqJztcblxuZXhwb3J0IGNvbnN0IElOUFVUX1NJWkUgPSB7XG4gICAgREVGQVVMVDogJ2RlZmF1bHQnLFxuICAgIExBUkdFOiAnbGFyZ2UnLFxuICAgIFNNQUxMOiAnc21hbGwnXG59O1xuXG5leHBvcnQgY29uc3QgQ1JPTl9JTlBVVF9UUklHR0VSID0ge1xuICAgIENMSUNLOiAnY2xpY2snLFxuICAgIEhPVkVSOiAnaG92ZXInXG59O1xuXG5cblxuIl19