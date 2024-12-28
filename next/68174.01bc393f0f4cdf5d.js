(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[68174],{68174:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiNumberFormatSettings} from '@taiga-ui/core';\nimport {TuiIcon, TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';\nimport {TuiInputNumber, TuiTooltip} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [\n        FormsModule,\n        TuiIcon,\n        TuiInputNumber,\n        TuiNumberFormat,\n        TuiTextfield,\n        TuiTooltip,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected value: number | null = 1_234_567.89;\n    protected numberFormat: Partial<TuiNumberFormatSettings> = {\n        decimalSeparator: ',',\n        thousandSeparator: '.',\n    };\n}\n"}}]);