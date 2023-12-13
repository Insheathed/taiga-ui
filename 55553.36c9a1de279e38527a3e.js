(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[55553],{55553:n=>{n.exports="import {Directive} from '@angular/core';\nimport {AbstractTuiValueTransformer} from '@taiga-ui/cdk';\nimport {TUI_NUMBER_VALUE_TRANSFORMER} from '@taiga-ui/kit';\n\n@Directive({\n    selector: `[absTransformer]`,\n    providers: [\n        {\n            provide: TUI_NUMBER_VALUE_TRANSFORMER,\n            useExisting: AbsTransformer,\n        },\n    ],\n})\nexport class AbsTransformer extends AbstractTuiValueTransformer<\n    number | null,\n    number | null\n> {\n    override fromControlValue(value: number | null): number | null {\n        return value && Math.abs(value);\n    }\n\n    override toControlValue(value: number | null): number | null {\n        return value && -1 * Math.abs(value);\n    }\n}\n"}}]);