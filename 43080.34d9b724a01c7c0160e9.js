(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[43080],{43080:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {of, Subject} from 'rxjs';\nimport {delayWhen} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-is-present-example1`,\n    templateUrl: `./template.html`,\n    encapsulation,\n    changeDetection,\n})\nexport class TuiIsPresentExample1 {\n    private readonly loadCountSubject = new Subject<void>();\n\n    readonly count$ = of(0).pipe(delayWhen(() => this.loadCountSubject));\n\n    loadCount(): void {\n        this.loadCountSubject.next();\n        this.loadCountSubject.complete();\n    }\n}\n"}}]);