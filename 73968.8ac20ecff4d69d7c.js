(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[73968],{73968:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIcon, TuiTextfield} from '@taiga-ui/core';\nimport {TuiTooltip} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [FormsModule, TuiTextfield, TuiIcon, TuiTooltip],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected value = 'Test';\n}\n"}}]);