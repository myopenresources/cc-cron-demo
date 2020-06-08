## 安装
npm install cc-cron --save

## 使用

### 1.Module中引入
```
import { CronModule } from 'cc-cron';
@NgModule({
  declarations: [Demoomponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CronModule
  ]
})
export class DemoModule { }
```

### html中使用
```
 <div>
        <cc-cron [(ngModel)]="cron" (ngModelChange)="cronChange($event)" [showSecond]="false" [inputSize]="'small'">
        </cc-cron>
        <cc-cron-input [(ngModel)]="cron" (ngModelChange)="cronChange($event)"></cc-cron-input>
 </div>
 ```

### Component中使用
```
  cron = '0-59 0-59 5,1,2 ? 1 0,1 2020-2120';

  cronChange(value: any) {
    console.log(value);
  }
```

