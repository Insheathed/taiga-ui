(window.webpackJsonp=window.webpackJsonp||[]).push([[1074],{"0NFj":function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-multi-select-example-5`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMultiSelectExample5 {\n    readonly jedi: readonly string[] = [\n        `Luke Skywalker`,\n        `Princess Leia`,\n        `Han Solo`,\n        `Obi-Wan Kenobi`,\n        `Yoda`,\n    ];\n\n    readonly sith: readonly string[] = [`Emperor`, `Darth Vader`, `Darth Maul`];\n\n    value: readonly string[] = [this.jedi[0]];\n}\n"}}]);