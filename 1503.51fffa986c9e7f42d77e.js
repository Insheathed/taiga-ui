(window.webpackJsonp=window.webpackJsonp||[]).push([[1503],{dB6e:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {setNativeFocused} from '@taiga-ui/cdk';\nimport {TuiInputComponent} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-active-zone-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiActiveZoneExample1 {\n    childActive = false;\n\n    parentActive = false;\n\n    items = [1, 2, 3];\n\n    onParentActiveZone(active: boolean): void {\n        this.parentActive = active;\n    }\n\n    onChildActiveZone(active: boolean): void {\n        this.childActive = active;\n    }\n\n    onClick({nativeFocusableElement}: TuiInputComponent): void {\n        if (nativeFocusableElement) {\n            setNativeFocused(nativeFocusableElement);\n        }\n    }\n}\n"}}]);