(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{P4Qi:function(e,n,t){"use strict";t.r(n),n.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {sum, tuiPure} from '@taiga-ui/cdk';\nimport {formatNumber, TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-legend-item-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLegendItemExample2 {\n    private enabled = new Array(5).fill(true);\n\n    readonly data = [13769, 12367, 10172, 3018, 2592];\n    readonly sum = sum(...this.data);\n    readonly labels = [`Axes`, `Faxes`, `Taxes`, `Saxes`, `Other`];\n\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    get value(): readonly number[] {\n        return this.getValue(this.data, this.enabled);\n    }\n\n    isEnabled(index: number): boolean {\n        return this.enabled[index];\n    }\n\n    toggle(index: number): void {\n        this.enabled = this.enabled.map((value, i) => (i === index ? !value : value));\n    }\n\n    onClick(index: number): void {\n        if (this.isEnabled(index)) {\n            this.alertService\n                .open(`Category spendings: ${formatNumber(this.data[index])} \u20bd`, {\n                    label: this.labels[index],\n                })\n                .subscribe();\n        } else {\n            this.toggle(index);\n        }\n    }\n\n    getColor(index: number): string {\n        return `var(--tui-chart-${index})`;\n    }\n\n    @tuiPure\n    private getValue(\n        data: readonly number[],\n        enabled: readonly number[],\n    ): readonly number[] {\n        return data.map((value, index) => (enabled[index] ? value : 0));\n    }\n}\n"}}]);