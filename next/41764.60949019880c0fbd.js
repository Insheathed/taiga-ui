(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[41764],{41764:n=>{n.exports="import {NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {\n    FormControl,\n    FormGroup,\n    FormsModule,\n    ReactiveFormsModule,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValidator} from '@taiga-ui/cdk';\nimport {TuiDataListWrapper} from '@taiga-ui/kit';\nimport {TuiInputModule, TuiInputPhoneModule, TuiSelectModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [\n        ReactiveFormsModule,\n        TuiInputModule,\n        TuiSelectModule,\n        FormsModule,\n        TuiDataListWrapper,\n        NgIf,\n        TuiValidator,\n        TuiInputPhoneModule,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly items = ['Email', 'Phone'];\n\n    protected type = this.items[0];\n\n    protected readonly group = new FormGroup({\n        name: new FormControl('', Validators.required),\n        contact: new FormControl('', Validators.required),\n    });\n\n    protected readonly validator = Validators.email;\n}\n"}}]);