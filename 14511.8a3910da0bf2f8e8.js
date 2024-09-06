(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[14511],{14511:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport type {TemplateRef} from '@angular/core';\nimport {Component, inject} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiAutoFocus} from '@taiga-ui/cdk';\nimport type {TuiDialogContext} from '@taiga-ui/core';\nimport {TuiButton, TuiDialogService, TuiTextfield} from '@taiga-ui/core';\nimport {TuiDataListWrapper, TuiSlider} from '@taiga-ui/kit';\nimport {\n    TuiInputModule,\n    TuiSelectModule,\n    TuiTextfieldControllerModule,\n} from '@taiga-ui/legacy';\nimport {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';\n\n@Component({\n    standalone: true,\n    imports: [\n        AsyncPipe,\n        FormsModule,\n        TuiAmountPipe,\n        TuiAutoFocus,\n        TuiButton,\n        TuiDataListWrapper,\n        TuiInputModule,\n        TuiSelectModule,\n        TuiSlider,\n        TuiTextfield,\n        TuiTextfieldControllerModule,\n    ],\n    templateUrl: './dialog-example.template.html',\n    styleUrls: ['./dialog-example.style.less'],\n    changeDetection,\n})\nexport class DialogExample {\n    private readonly dialogs = inject(TuiDialogService);\n    private readonly context =\n        inject<TuiDialogContext<number, number>>(POLYMORPHEUS_CONTEXT);\n\n    protected value: number | null = null;\n    protected name = '';\n    protected items = [10, 50, 100];\n\n    protected get hasValue(): boolean {\n        return this.value !== null;\n    }\n\n    protected get data(): number {\n        return this.context.data;\n    }\n\n    protected submit(): void {\n        if (this.value !== null) {\n            this.context.completeWith(this.value);\n        }\n    }\n\n    protected showDialog(content: TemplateRef<TuiDialogContext>): void {\n        this.dialogs.open(content, {dismissible: true}).subscribe();\n    }\n}\n"}}]);