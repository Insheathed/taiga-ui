(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[33542],{33542:e=>{e.exports="import {AsyncPipe, isPlatformBrowser} from '@angular/common';\nimport {Component, inject, PLATFORM_ID} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiLetDirective} from '@taiga-ui/cdk';\nimport {TuiBadgeDirective} from '@taiga-ui/kit';\nimport {interval, NEVER, startWith} from 'rxjs';\n\n@Component({\n    standalone: true,\n    imports: [TuiLetDirective, TuiBadgeDirective, AsyncPipe],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected timer$ = isPlatformBrowser(inject(PLATFORM_ID))\n        ? interval(1000).pipe(startWith(0))\n        : NEVER;\n}\n"}}]);