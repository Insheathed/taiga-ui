(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[57235],{57235:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiArcChart} from '@taiga-ui/addon-charts';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiInputNumberModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [AsyncPipe, FormsModule, TuiAmountPipe, TuiArcChart, TuiInputNumberModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly value = [40, 30, 20, 10];\n\n    protected activeItemIndex = NaN;\n}\n"}}]);