(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1992],{1992:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiDataListWrapperModule,\n    TuiFilterByInputPipeModule,\n    TuiStringifyContentPipeModule,\n    TuiStringifyPipe,\n} from '@taiga-ui/kit';\nimport {TuiComboBoxModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        FormsModule,\n        TuiComboBoxModule,\n        TuiStringifyPipe,\n        TuiDataListWrapperModule,\n        TuiStringifyContentPipeModule,\n        TuiFilterByInputPipeModule,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected value = null;\n\n    protected readonly items = [\n        {\n            name: 'John Cleese',\n            role: 'Black Knight',\n        },\n        {\n            name: 'Eric Idle',\n            role: 'Dead collector',\n        },\n    ] as const;\n}\n"}}]);