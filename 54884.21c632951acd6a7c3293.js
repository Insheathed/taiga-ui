(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[54884],{54884:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DATE_FORMAT, TUI_DATE_SEPARATOR, TuiDay} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-input-date-example-4',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        {provide: TUI_DATE_FORMAT, useValue: 'YMD'},\n        {provide: TUI_DATE_SEPARATOR, useValue: '/'},\n    ],\n})\nexport class TuiInputDateExample4 {\n    readonly control = new FormControl(new TuiDay(2017, 0, 15));\n}\n"}}]);