(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[26117],{26117:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-multi-select-example-5',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiMultiSelectExample5 {\n    readonly jedi: readonly string[] = [\n        'Luke Skywalker',\n        'Princess Leia',\n        'Han Solo',\n        'Obi-Wan Kenobi',\n        'Yoda',\n    ];\n\n    readonly sith: readonly string[] = ['Emperor', 'Darth Vader', 'Darth Maul'];\n\n    value: readonly string[] = [this.jedi[0]];\n}\n"}}]);