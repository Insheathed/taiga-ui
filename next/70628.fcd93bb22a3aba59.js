(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[70628],{70628:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {SECONDS_IN_MINUTE, TuiMediaDirective} from '@taiga-ui/cdk';\nimport {TuiButton} from '@taiga-ui/core';\nimport {TuiSlider} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [TuiMediaDirective, TuiButton, TuiSlider, FormsModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected currentTime = 0;\n    protected paused = true;\n\n    protected get icon(): string {\n        return this.paused ? '@tui.play' : '@tui.pause';\n    }\n\n    protected getTime(time: number): string {\n        const integer = Math.round(time || 0);\n        const seconds = integer % SECONDS_IN_MINUTE;\n        const minutes = (integer - seconds) / SECONDS_IN_MINUTE;\n        const secondsString = String(seconds);\n        const minutesString = String(minutes);\n        const paddedSeconds =\n            secondsString.length === 1 ? `0${secondsString}` : secondsString;\n        const paddedMinutes =\n            minutesString.length === 1 ? `0${minutesString}` : minutesString;\n\n        return `${paddedMinutes}:${paddedSeconds}`;\n    }\n\n    protected toggleState(): void {\n        this.paused = !this.paused;\n    }\n}\n"}}]);