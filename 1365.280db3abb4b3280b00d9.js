(window.webpackJsonp=window.webpackJsonp||[]).push([[1365],{WHak:function(e,n,t){"use strict";t.r(n),n.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-tabs-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTabsExample4 {\n    activeItemIndex = 0;\n\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    onClick(item: string): void {\n        this.alertService.open(item).subscribe();\n    }\n}\n"}}]);