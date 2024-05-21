(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[55494],{55494:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiAxesComponent,\n    TuiLineChartComponent,\n    TuiLineChartHintDirective,\n} from '@taiga-ui/addon-charts';\nimport type {TuiContext} from '@taiga-ui/cdk';\nimport type {TuiPoint} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    imports: [TuiAxesComponent, TuiLineChartComponent, TuiLineChartHintDirective],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly value: readonly TuiPoint[] = [\n        [50, 50],\n        [100, 75],\n        [150, 50],\n        [200, 150],\n        [250, 155],\n        [300, 190],\n        [350, 90],\n    ];\n\n    protected readonly stringify = String;\n\n    protected readonly hintContent = ({\n        $implicit,\n    }: TuiContext<readonly TuiPoint[]>): number => $implicit[0][1];\n}\n"}}]);