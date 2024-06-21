(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[95136],{95136:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiBooleanHandler, TuiStringHandler} from '@taiga-ui/cdk';\nimport {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\ninterface Item {\n    id: number;\n    name: string;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"Example11\",\n    imports: [TuiSelectModule, ReactiveFormsModule, TuiTextfieldControllerModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected itemStringControl = new FormControl<string | null>(null);\n    protected itemGroupControl = new FormControl<string | null>(null);\n    protected itemControl = new FormControl<Item | null>(null);\n\n    protected items = [\n        'Luke Skywalker',\n        'Leia Organa Solo',\n        'Darth Vader',\n        'Han Solo',\n        'Obi-Wan Kenobi',\n        'Yoda',\n    ];\n\n    protected groupItems = [\n        ['Caesar', 'Greek', 'Apple and Chicken'],\n        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],\n    ];\n\n    protected customItems: readonly Item[] = [\n        {name: 'Luke Skywalker', id: 1},\n        {name: 'Leia Organa Solo', id: 2},\n        {name: 'Darth Vader', id: 3},\n        {name: 'Han Solo', id: 4},\n        {name: 'Obi-Wan Kenobi', id: 5},\n        {name: 'Yoda', id: 6},\n    ];\n\n    protected labels = ['Salad', 'Soup'];\n\n    protected stringify: TuiStringHandler<Item> = item => item.name;\n\n    protected disabledItemHandler: TuiBooleanHandler<string> = item =>\n        item.startsWith('Chicken');\n}\n"}}]);