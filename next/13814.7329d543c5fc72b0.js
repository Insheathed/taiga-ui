(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[13814],{13814:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {ChangeDetectionStrategy, Component, inject} from '@angular/core';\nimport type {TuiPopover} from '@taiga-ui/cdk';\nimport {TuiButton} from '@taiga-ui/core';\nimport type {TuiPdfViewerOptions} from '@taiga-ui/kit';\nimport {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';\n\nimport type {Buttons} from '../index';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponentactions-content\",\n    imports: [NgForOf, TuiButton],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ActionsContentComponent {\n    protected readonly context =\n        inject<TuiPopover<TuiPdfViewerOptions<Buttons>, string>>(POLYMORPHEUS_CONTEXT);\n}\n"}}]);