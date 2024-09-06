(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[16311],{16311:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {MaskitoDirective} from '@maskito/angular';\nimport type {MaskitoOptions} from '@maskito/core';\nimport {maskitoDateOptionsGenerator} from '@maskito/kit';\nimport type {TuiBooleanHandler} from '@taiga-ui/cdk';\nimport {TuiDay} from '@taiga-ui/cdk';\nimport {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example9\",\n    imports: [\n        MaskitoDirective,\n        ReactiveFormsModule,\n        TuiInputTagModule,\n        TuiTextfieldControllerModule,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly control = new FormControl<string[]>([]);\n    protected readonly min = new Date(2000, 0, 1);\n    protected readonly max = new Date(2025, 4, 10);\n\n    protected readonly options: MaskitoOptions = maskitoDateOptionsGenerator({\n        mode: 'dd/mm/yyyy',\n        separator: '.',\n        min: this.min,\n        max: this.max,\n    });\n\n    protected tagValidator: TuiBooleanHandler<string> = (tag: string) => {\n        const {year, month, day} = TuiDay.parseRawDateString(tag);\n\n        return (\n            TuiDay.isValidDay(year, month, day) &&\n            TuiDay.normalizeOf(year, month, day).toLocalNativeDate() >= this.min &&\n            TuiDay.normalizeOf(year, month, day).toLocalNativeDate() <= this.max\n        );\n    };\n}\n"}}]);