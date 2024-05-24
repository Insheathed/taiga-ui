(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[89291],{89291:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiTime} from '@taiga-ui/cdk';\nimport {tuiInputTimeOptionsProvider} from '@taiga-ui/legacy';\n\n@Component({\n    selector: 'tui-input-time-example-4',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiInputTimeOptionsProvider({\n            mode: 'HH:MM',\n            maxValues: {HH: 47, MM: 59, SS: 59, MS: 999},\n        }),\n    ],\n})\nexport class TuiInputTimeExample4 {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl<TuiTime | null>(null),\n    });\n}\n"}}]);