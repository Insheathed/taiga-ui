(window.webpackJsonp=window.webpackJsonp||[]).push([[730],{"1PRu":function(n,o,r){"use strict";r.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {tuiCardExpireValidator, tuiCardNumberValidator} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: `tui-input-card-grouped-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n})\nexport class TuiInputCardGroupedExample3 {\n    readonly control = new FormControl(null, [\n        tuiCardNumberValidator,\n        tuiCardExpireValidator,\n    ]);\n}\n"}}]);