(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[79766],{79766:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiLineHandler} from '@taiga-ui/addon-charts';\n\n@Component({\n    selector: 'tui-axes-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiAxesExample1 {\n    readonly axisXLabels = ['Jan 2019', 'Feb', 'Mar'];\n    readonly axisYLabels = ['', '25%', '50%', '75%', '100%'];\n    readonly axisYSecondaryLabels = ['80 k', '100 k', '120 k'];\n    readonly verticalLinesHandler: TuiLineHandler = (index, total) =>\n        index === total - 1 ? 'none' : 'dashed';\n}\n"}}]);