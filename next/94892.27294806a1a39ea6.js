(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[94892],{94892:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-chip-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiChipExample3 {\n    private readonly alerts = inject(TuiAlertService);\n\n    readonly checked = [true, false, true];\n    readonly values = ['test', 'Some text', 'WOW!'];\n\n    onChip(index: number): void {\n        this.alerts.open(`Clicked chip ${index + 1}`).subscribe();\n    }\n\n    onX(index: number): void {\n        this.alerts.open(`Removed chip ${index + 1}`, {status: 'error'}).subscribe();\n    }\n}\n"}}]);