(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{FKJu:function(e,n,t){"use strict";t.r(n),n.default="import {Component, Inject, TemplateRef} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {clamp, TuiPortalService} from '@taiga-ui/cdk';\nimport {TuiDialogService} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'tui-dialog-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDialogExampleComponent4 {\n    filters = false;\n\n    scale = 1;\n\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n        @Inject(TuiPortalService)\n        private readonly portalService: TuiPortalService,\n    ) {}\n\n    get transform(): string {\n        return `scale(${this.scale})`;\n    }\n\n    get width(): string {\n        return `calc((100% + 4rem) * ${1 / this.scale})`;\n    }\n\n    onElastic(value: number): void {\n        this.scale = clamp(value, 0.5, 1);\n    }\n\n    onFilterClick(): void {\n        this.filters = true;\n        this.dialogService.open('Dialog with filters').subscribe({\n            complete: () => {\n                this.filters = false;\n            },\n        });\n    }\n\n    showDialog(\n        content: PolymorpheusContent<any>,\n        button: TemplateRef<Record<string, unknown>>,\n    ): void {\n        const templateRef = this.portalService.addTemplate(button);\n\n        this.dialogService.open(content).subscribe({\n            complete: () => {\n                this.portalService.removeTemplate(templateRef);\n            },\n        });\n    }\n}\n"}}]);