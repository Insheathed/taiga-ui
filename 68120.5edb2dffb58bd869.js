(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[68120],{68120:e=>{e.exports="import {NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiHandler} from '@taiga-ui/cdk';\nimport {EMPTY_ARRAY} from '@taiga-ui/cdk';\nimport {TuiIcon} from '@taiga-ui/core';\nimport {TuiTree} from '@taiga-ui/kit';\n\ninterface TreeNode {\n    readonly children?: readonly TreeNode[];\n    readonly icon?: string;\n    readonly text: string;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [NgIf, TuiIcon, TuiTree],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly data: TreeNode = {\n        text: 'Topmost',\n        children: [\n            {\n                text: 'Top level 1',\n                icon: '@tui.heart',\n                children: [\n                    {\n                        text: 'Another item',\n                        children: [\n                            {text: 'Next level 1', icon: '@tui.heart'},\n                            {text: 'Next level 2', icon: '@tui.heart'},\n                            {text: 'Next level 3'},\n                        ],\n                    },\n                ],\n            },\n            {text: 'Top level 2'},\n            {\n                text: 'Top level 3',\n                children: [{text: 'Test 1'}, {text: 'Test 2', icon: '@tui.heart'}],\n            },\n        ],\n    };\n\n    protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = (item) =>\n        item.children || EMPTY_ARRAY;\n}\n"}}]);