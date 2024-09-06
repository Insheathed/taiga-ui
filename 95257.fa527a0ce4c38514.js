(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[95257],{95257:n=>{n.exports="import {JsonPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';\nimport {TuiFilter} from '@taiga-ui/kit';\n\ninterface Operations {\n    operations: readonly Operation[];\n    title: string;\n}\n\ninterface Operation {\n    amount: number;\n}\n\nconst COMPLETED = {\n    title: 'Done',\n    operations: [\n        {\n            amount: 100,\n        },\n        {\n            amount: 200,\n        },\n    ],\n};\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [JsonPipe, ReactiveFormsModule, TuiFilter],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly form = new FormGroup({\n        filters: new FormControl([\n            {\n                title: 'Drafts',\n            },\n        ]),\n    });\n\n    protected items: readonly Operations[] = [\n        COMPLETED,\n        {\n            title: 'Drafts',\n            operations: [\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 100,\n                },\n            ],\n        },\n        {\n            title: 'For sign',\n            operations: [],\n        },\n        {\n            title: 'Queue',\n            operations: [\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n            ],\n        },\n    ];\n\n    protected identityMatcher: TuiIdentityMatcher<Operations> = (\n        item1: Operations,\n        item2: Operations,\n    ) => item1.title === item2.title;\n\n    protected badgeHandler: TuiHandler<Operations, number> = (item) =>\n        item.operations.length;\n}\n"}}]);