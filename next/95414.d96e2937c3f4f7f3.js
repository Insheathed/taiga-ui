(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[95414],{95414:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSwipe} from '@taiga-ui/cdk';\nimport {TuiButton} from '@taiga-ui/core';\nimport {TuiPreview, TuiPreviewDialogDirective} from '@taiga-ui/kit';\nimport {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        TuiButton,\n        TuiPreview,\n        TuiSwipe,\n        PolymorpheusOutlet,\n        PolymorpheusTemplate,\n        TuiPreviewDialogDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected open = false;\n    protected index = 0;\n    protected length = 2;\n    protected titles = ['pic_1.jpg', 'pic_2.jpg'];\n    protected content = [\n        'https://picsum.photos/600/500',\n        'https://picsum.photos/500/600',\n    ];\n}\n"}}]);