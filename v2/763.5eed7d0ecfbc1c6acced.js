(window.webpackJsonp=window.webpackJsonp||[]).push([[763],{CVOO:function(n,o,t){"use strict";t.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiInputCountOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-count-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiInputCountOptionsProvider({\n            icons: {\n                up: 'tuiIconChevronUp',\n                down: 'tuiIconChevronDown',\n            },\n            appearance: 'secondary',\n            step: 10,\n            min: 10,\n            max: 100,\n        }),\n    ],\n})\nexport class TuiInputCountExample3 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(10, Validators.required),\n        testValue2: new FormControl(10, Validators.required),\n    });\n}\n"}}]);