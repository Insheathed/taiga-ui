(window.webpackJsonp=window.webpackJsonp||[]).push([[1391],{"Y/fr":function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-tabs-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTabsExample5 {\n    readonly collaborators = ['Carol Cleveland', 'Neil Innes'];\n\n    readonly tabs = [\n        'John Cleese',\n        'Eric Idle',\n        this.collaborators,\n        'Michael Palin',\n        'Terry Jones',\n        'Terry Gilliam',\n        'Graham Chapman',\n    ];\n\n    activeElement = String(this.tabs[0]);\n\n    open = false;\n\n    get activeItemIndex(): number {\n        if (this.collaborators.includes(this.activeElement)) {\n            return this.tabs.indexOf(this.collaborators);\n        }\n\n        return this.tabs.indexOf(this.activeElement);\n    }\n\n    stop(event: Event): void {\n        // We need to stop tab custom event so parent component does not think its active\n        event.stopPropagation();\n    }\n\n    onClick(activeElement: string): void {\n        this.activeElement = activeElement;\n        this.open = false;\n    }\n\n    isString(tab: unknown): tab is string {\n        return typeof tab === 'string';\n    }\n}\n"}}]);