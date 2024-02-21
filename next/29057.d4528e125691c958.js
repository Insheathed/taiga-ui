(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[29057],{29057:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService, TuiDialogService} from '@taiga-ui/core';\nimport {TUI_PROMPT, TuiPromptData} from '@taiga-ui/kit';\nimport {switchMap} from 'rxjs';\n\n@Component({\n    selector: 'tui-prompt-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiPromptExample1 {\n    private readonly dialogs = inject(TuiDialogService);\n    private readonly alerts = inject(TuiAlertService);\n\n    onClick(): void {\n        const data: TuiPromptData = {\n            content:\n                'This is <code>PolymorpheusContent</code> so it can be template too!',\n            yes: 'That is great!',\n            no: 'Who cares?',\n        };\n\n        this.dialogs\n            .open<boolean>(TUI_PROMPT, {\n                label: 'Do you like Taiga UI?',\n                size: 's',\n                data,\n            })\n            .pipe(switchMap(response => this.alerts.open(String(response))))\n            .subscribe();\n    }\n}\n"}}]);