(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[30935],{30935:n=>{n.exports="import {JsonPipe, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {TuiButton} from '@taiga-ui/core';\nimport {TuiInputModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [TuiInputModule, FormsModule, NgIf, TuiButton, JsonPipe],\n    templateUrl: './index.html',\n    changeDetection,\n})\nexport default class Example {\n    protected text = '';\n\n    protected show = false;\n\n    protected counter = {\n        count: 0,\n    };\n\n    @tuiPure\n    protected calculate(counter: {count: number}, text: string): {text: string} {\n        counter.count++;\n\n        return {\n            text,\n        };\n    }\n}\n"}}]);