/**
 * @fileoverview added by tsickle
 * Generated from: lib/cron.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronComponent } from './cron/cron.component';
import { CronYearComponent } from './cron-year/cron-year.component';
import { CronDayComponent } from './cron-day/cron-day.component';
import { CronHourComponent } from './cron-hour/cron-hour.component';
import { CronMinuteComponent } from './cron-minute/cron-minute.component';
import { CronMonthComponent } from './cron-month/cron-month.component';
import { CronSecondComponent } from './cron-second/cron-second.component';
import { CronWeekComponent } from './cron-week/cron-week.component';
import { CronBaseComponent } from './cron-base/cron-base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CronInputComponent } from './cron-input/cron-input.component';
var CronModule = /** @class */ (function () {
    function CronModule() {
    }
    CronModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CronComponent, CronYearComponent, CronDayComponent, CronHourComponent, CronMinuteComponent, CronMonthComponent, CronSecondComponent, CronWeekComponent, CronBaseComponent, CronInputComponent],
                    imports: [
                        CommonModule,
                        NgZorroAntdModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: [CronComponent, CronInputComponent, CronYearComponent, CronDayComponent, CronHourComponent, CronMinuteComponent, CronMonthComponent, CronSecondComponent, CronWeekComponent, CronBaseComponent]
                },] }
    ];
    return CronModule;
}());
export { CronModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYy1jcm9uLyIsInNvdXJjZXMiOlsibGliL2Nyb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFJdkU7SUFBQTtJQVUwQixDQUFDOztnQkFWMUIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztvQkFDN00sT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixXQUFXO3dCQUNYLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO2lCQUN6TTs7SUFDeUIsaUJBQUM7Q0FBQSxBQVYzQixJQVUyQjtTQUFkLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENyb25Db21wb25lbnQgfSBmcm9tICcuL2Nyb24vY3Jvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3JvblllYXJDb21wb25lbnQgfSBmcm9tICcuL2Nyb24teWVhci9jcm9uLXllYXIuY29tcG9uZW50JztcbmltcG9ydCB7IENyb25EYXlDb21wb25lbnQgfSBmcm9tICcuL2Nyb24tZGF5L2Nyb24tZGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDcm9uSG91ckNvbXBvbmVudCB9IGZyb20gJy4vY3Jvbi1ob3VyL2Nyb24taG91ci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3Jvbk1pbnV0ZUNvbXBvbmVudCB9IGZyb20gJy4vY3Jvbi1taW51dGUvY3Jvbi1taW51dGUuY29tcG9uZW50JztcbmltcG9ydCB7IENyb25Nb250aENvbXBvbmVudCB9IGZyb20gJy4vY3Jvbi1tb250aC9jcm9uLW1vbnRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDcm9uU2Vjb25kQ29tcG9uZW50IH0gZnJvbSAnLi9jcm9uLXNlY29uZC9jcm9uLXNlY29uZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3JvbldlZWtDb21wb25lbnQgfSBmcm9tICcuL2Nyb24td2Vlay9jcm9uLXdlZWsuY29tcG9uZW50JztcbmltcG9ydCB7IENyb25CYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9jcm9uLWJhc2UvY3Jvbi1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBDcm9uSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2Nyb24taW5wdXQvY3Jvbi1pbnB1dC5jb21wb25lbnQnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ3JvbkNvbXBvbmVudCwgQ3JvblllYXJDb21wb25lbnQsIENyb25EYXlDb21wb25lbnQsIENyb25Ib3VyQ29tcG9uZW50LCBDcm9uTWludXRlQ29tcG9uZW50LCBDcm9uTW9udGhDb21wb25lbnQsIENyb25TZWNvbmRDb21wb25lbnQsIENyb25XZWVrQ29tcG9uZW50LCBDcm9uQmFzZUNvbXBvbmVudCwgQ3JvbklucHV0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtDcm9uQ29tcG9uZW50LCBDcm9uSW5wdXRDb21wb25lbnQsIENyb25ZZWFyQ29tcG9uZW50LCBDcm9uRGF5Q29tcG9uZW50LCBDcm9uSG91ckNvbXBvbmVudCwgQ3Jvbk1pbnV0ZUNvbXBvbmVudCwgQ3Jvbk1vbnRoQ29tcG9uZW50LCBDcm9uU2Vjb25kQ29tcG9uZW50LCBDcm9uV2Vla0NvbXBvbmVudCwgQ3JvbkJhc2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENyb25Nb2R1bGUgeyB9XG4iXX0=