(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[24638],{24638:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiLabel} from '@taiga-ui/core';\nimport {TuiTextareaModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [\n        ReactiveFormsModule,\n        TuiTextareaModule,\n        TuiTextfieldControllerModule,\n        TuiLabel,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected testForm = new FormGroup({\n        testValue1: new FormControl('A field', Validators.required),\n    });\n}\n"}}]);