(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[35814],{35814:e=>{e.exports="import {NgFor} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSurface} from '@taiga-ui/core';\nimport {TuiAvatar} from '@taiga-ui/kit';\nimport {TuiCell} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [NgFor, TuiAvatar, TuiCell, TuiSurface],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly sizes = ['s', 'm', 'l'] as const;\n}\n"}}]);