(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[46829],{46829:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiDataListWrapperModule, TuiFilterByInputPipeModule} from '@taiga-ui/kit';\nimport {TuiComboBoxModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [\n        FormsModule,\n        TuiComboBoxModule,\n        TuiDataListWrapperModule,\n        TuiFilterByInputPipeModule,\n    ],\n    templateUrl: './index.html',\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly items = [\n        'John Cleese',\n        'Eric Idle',\n        'Graham Chapman',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n    ];\n\n    protected value = '';\n}\n"}}]);