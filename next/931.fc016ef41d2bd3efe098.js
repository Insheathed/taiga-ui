(window.webpackJsonp=window.webpackJsonp||[]).push([[931],{xdC5:function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiCreateTimePeriods} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-time-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTimeExample2 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(null),\n    });\n\n    items1 = tuiCreateTimePeriods();\n    items2 = tuiCreateTimePeriods(10, 20, [0, 15, 30, 45]);\n}\n"}}]);