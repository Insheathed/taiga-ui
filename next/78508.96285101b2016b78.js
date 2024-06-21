(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[78508],{78508:n=>{n.exports="import {JsonPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIcon} from '@taiga-ui/core';\nimport {TuiFilterComponent} from '@taiga-ui/kit';\n\nconst getIcon: Record<string, string> = {\n    Calendar: '@tui.calendar',\n    Favorite: '@tui.star',\n    Messages: '@tui.message-square',\n    FAQ: '@tui.circle-help',\n    Settings: '@tui.settings',\n};\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [ReactiveFormsModule, TuiFilterComponent, TuiIcon, JsonPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected items = ['Calendar', 'Favorite', 'Messages', 'FAQ', 'Settings'];\n\n    protected form = new FormGroup({\n        filters: new FormControl<string[]>([]),\n    });\n\n    protected getItemIcon(title: string): string {\n        return getIcon[title];\n    }\n}\n"}}]);