(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[19868],{19868:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButton, TuiLabel} from '@taiga-ui/core';\nimport {TuiRadio} from '@taiga-ui/kit';\n\ninterface TestValue {\n    test: string;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [FormsModule, TuiButton, TuiLabel, TuiRadio],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected value: TestValue | null = null;\n    protected identityMatcher = (a: TestValue, b: TestValue): boolean =>\n        a?.test === b?.test;\n}\n"}}]);