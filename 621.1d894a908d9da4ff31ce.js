(window.webpackJsonp=window.webpackJsonp||[]).push([[621],{u78C:function(e,n,o){"use strict";o.r(n),n.default="import {Component, Inject, Injector} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogService} from '@taiga-ui/core';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\n\nimport {SearchDialogExampleComponent} from './search-example/search-dialog-example.component';\n\n@Component({\n    selector: `tui-dialog-example-7`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDialogExampleComponent7 {\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n        @Inject(Injector) private readonly injector: Injector,\n    ) {}\n\n    showDialog(): void {\n        this.dialogService\n            .open(\n                new PolymorpheusComponent(SearchDialogExampleComponent, this.injector),\n                {\n                    size: `page`,\n                    closeable: true,\n                    dismissible: true,\n                },\n            )\n            .subscribe();\n    }\n}\n"}}]);