(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{Q1nh:function(n,e,t){"use strict";t.r(e),e.default="import {Component, Input} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {TuiDurationOptions, tuiHeightCollapse} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-height-collapse-example`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    animations: [tuiHeightCollapse],\n})\nexport class TuiHeightCollapseExample {\n    @Input()\n    speed = 0;\n\n    isOpen = false;\n\n    @tuiPure\n    getAnimation(duration: number): TuiDurationOptions {\n        return {value: ``, params: {duration}};\n    }\n}\n"}}]);