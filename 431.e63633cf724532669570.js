(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{OdUL:function(e,n,t){"use strict";t.r(n),n.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-action-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiActionExample1 {\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    onClick(result: string): void {\n        this.alertService.open(result).subscribe();\n    }\n}\n"}}]);