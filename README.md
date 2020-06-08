## 安装
npm install cc-cron --save

## 使用
import { CronModule } from 'cc-cron';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CronModule
  ]
})
export class DemoModule { }



 <div>
        <cc-cron [(ngModel)]="cron" (ngModelChange)="cronChange($event)" [showSecond]="false" [inputSize]="'small'">
        </cc-cron>
      
        <cc-cron-input [(ngModel)]="cron" (ngModelChange)="cronChange($event)"></cc-cron-input>
 </div>



  cron = '0-59 0-59 5,1,2 ? 1 0,1 2020-2120';


  cronChange(value: any) {
    console.log(value);
  }

