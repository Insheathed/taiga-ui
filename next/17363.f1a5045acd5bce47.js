(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[17363],{17363:n=>{n.exports="```ts\nimport {PolymorpheusComponent} from '@taiga-ui/polymorpheus';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {inject, INJECTOR} from '@angular/core';\n\nimport {CustomNotification} from './custom-notification.component';\n\n//...\nexport class Example {\n  constructor() {\n    //...\n    inject(TuiAlertService)\n      .open(new PolymorpheusComponent(CustomNotification, inject(INJECTOR)), {\n        label: 'Heading',\n      })\n      .subscribe();\n  }\n\n  //...\n}\n```\n"}}]);