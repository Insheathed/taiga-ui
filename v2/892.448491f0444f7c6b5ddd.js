(window.webpackJsonp=window.webpackJsonp||[]).push([[892],{HXAw:function(n,e,r){"use strict";r.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DEFAULT_MATCHER, tuiPure} from '@taiga-ui/cdk';\nimport {combineLatest, merge, Observable, of, Subject} from 'rxjs';\nimport {map, share, startWith, switchMap, tap} from 'rxjs/operators';\n\nimport {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n        readonly phone: string,\n        readonly avatarUrl: string | null = null,\n        readonly disabled: boolean = false,\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst DATA: readonly User[] = [\n    new User(\n        `Roman`,\n        `Sedov`,\n        `+75678901234`,\n        `https://avatars.githubusercontent.com/u/10106368`,\n    ),\n    new User(`Alex`, `Inkin`, `+75678901234`, avatar),\n];\n\n@Component({\n    selector: `tui-input-phone-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputPhoneExample3 {\n    private readonly search$ = new Subject<string>();\n\n    private readonly selected$ = new Subject<User>();\n\n    value = ``;\n\n    readonly user$ = merge(\n        this.selected$,\n        this.search$.pipe(\n            switchMap(value =>\n                this.request(value).pipe(\n                    map(response =>\n                        this.isFullMatch(response, value) ? response[0] : null,\n                    ),\n                ),\n            ),\n        ),\n    ).pipe(\n        tap(user => {\n            if (user) {\n                this.value = user.phone;\n            }\n        }),\n    );\n\n    readonly items$ = this.search$.pipe(\n        startWith(``),\n        switchMap(value =>\n            this.request(value).pipe(\n                map(response => (this.isFullMatch(response, value) ? [] : response)),\n            ),\n        ),\n    );\n\n    readonly placeholder$ = combineLatest(this.user$, this.search$).pipe(\n        map(([user, search]) => user || this.getPlaceholder(search)),\n        startWith(`Phone number or name`),\n    );\n\n    onSearch(search: string): void {\n        this.search$.next(search);\n    }\n\n    onClick(user: User): void {\n        this.selected$.next(user);\n    }\n\n    // Request imitation\n    @tuiPure\n    private request(query: string): Observable<readonly User[]> {\n        return of(\n            DATA.filter(\n                item =>\n                    TUI_DEFAULT_MATCHER(item, query) ||\n                    TUI_DEFAULT_MATCHER(item.phone, query),\n            ),\n        ).pipe(share());\n    }\n\n    private getPlaceholder(search: string): string {\n        if (!search) {\n            return `Phone number or name`;\n        }\n\n        if (search.startsWith(`+`)) {\n            return `Phone number`;\n        }\n\n        return `Name`;\n    }\n\n    private isFullMatch(response: readonly User[], value: string): boolean {\n        return (\n            response.length === 1 &&\n            (String(response[0]) === value || response[0].phone === value)\n        );\n    }\n}\n"}}]);