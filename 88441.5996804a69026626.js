(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[88441],{88441:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTime, TuiValueTransformer} from '@taiga-ui/cdk';\nimport {TUI_TIME_VALUE_TRANSFORMER, tuiCreateTimePeriods} from '@taiga-ui/kit';\nimport {TuiInputTimeModule} from '@taiga-ui/legacy';\n\nclass ExampleTimeTransformer extends TuiValueTransformer<TuiTime | null, string | null> {\n    public fromControlValue(controlValue: string): TuiTime | null {\n        return controlValue ? TuiTime.fromString(controlValue) : null;\n    }\n\n    public toControlValue(time: TuiTime | null): string {\n        return time ? time.toString() : '';\n    }\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"Example6\",\n    imports: [TuiInputTimeModule, ReactiveFormsModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        {\n            provide: TUI_TIME_VALUE_TRANSFORMER,\n            useClass: ExampleTimeTransformer,\n        },\n    ],\n})\nexport default class Example {\n    protected readonly control = new FormControl('');\n    protected readonly items = tuiCreateTimePeriods();\n}\n"}}]);