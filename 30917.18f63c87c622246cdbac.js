(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[30917],{30917:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-breadcrumbs-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiBreadcrumbsExample1 {\n    items = [\n        {\n            caption: 'Selects',\n            routerLink: '/components/select',\n        },\n        {\n            caption: 'Multi',\n            routerLink: '/components/multi-select',\n        },\n        {\n            caption: 'With tags',\n            routerLink: '/components/multi-select',\n        },\n        {\n            caption: 'Current',\n            routerLink: '/navigation/breadcrumbs',\n            routerLinkActiveOptions: {exact: true},\n        },\n    ];\n}\n"}}]);