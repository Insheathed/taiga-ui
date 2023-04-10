"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[16699],{16699:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\ninterface User {\n    readonly id: number;\n    readonly name: string;\n}\n\n@Component({\n    selector: 'tui-filter-by-input-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterByInputExample2 {\n    readonly items = [\n        'John Cleese',\n        'Eric Idle',\n        'Graham Chapman',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n    ];\n\n    readonly users = [\n        {id: 1, name: 'John Cleese'},\n        {id: 2, name: 'Eric Idle'},\n        {id: 3, name: 'Graham Chapman'},\n        {id: 4, name: 'Michael Palin'},\n        {id: 5, name: 'Terry Gilliam'},\n    ];\n\n    readonly form = new FormGroup({\n        user: new FormControl(),\n        user2: new FormControl(),\n    });\n\n    readonly stringify = ({name}: User): string => name;\n\n    readonly matcherString = (name: string, search: string): boolean =>\n        name.split(' ').pop()!.toLowerCase().startsWith(search.toLowerCase());\n\n    readonly matcherUser = (user: User, search: string): boolean =>\n        user.name.toLowerCase().startsWith(search.toLowerCase());\n}\n"}}]);