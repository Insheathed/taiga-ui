(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[73773],{73773:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-calendar-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiCalendarExample1 {\n    value: TuiDay | null = null;\n\n    onDayClick(day: TuiDay): void {\n        this.value = day;\n    }\n}\n"}}]);