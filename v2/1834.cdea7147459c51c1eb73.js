(window.webpackJsonp=window.webpackJsonp||[]).push([[1834],{"+aXI":function(o,n,e){"use strict";e.r(n),n.default="```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {CustomNotificationComponent} from './custom-notification.component';\n//...\n\nexport class MyComponent {\n  constructor(@Inject(TuiAlertService) private readonly alertService: TuiAlertService) {\n    //...\n\n    this.alertService.open(new PolymorpheusComponent(CustomNotificationComponent)).subscribe({\n      complete: () => {\n        console.log('Notification is closed');\n      },\n    });\n  }\n}\n```\n"}}]);