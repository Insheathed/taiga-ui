(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[96985],{96985:n=>{n.exports="import {Component, Inject, Injector} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMobileCalendarDialogComponent} from '@taiga-ui/addon-mobile';\nimport {tuiControlValue, TuiDay} from '@taiga-ui/cdk';\nimport {TUI_MONTHS, TuiDialogService} from '@taiga-ui/core';\nimport {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {combineLatest, Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-mobile-calendar-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiMobileCalendarExample1 {\n    private readonly control = new FormControl(null);\n\n    private readonly dialog$: Observable<TuiDay> = this.dialogs.open(\n        new PolymorpheusComponent(\n            TuiMobileCalendarDialogComponent,\n            Injector.create({\n                providers: [\n                    {\n                        provide: TUI_CALENDAR_DATE_STREAM,\n                        useValue: tuiControlValue(this.control),\n                    },\n                ],\n                parent: this.injector,\n            }),\n        ),\n        {\n            size: 'fullscreen',\n            closeable: false,\n            data: {\n                single: true,\n                min: TuiDay.currentLocal(),\n            },\n        },\n    );\n\n    readonly date$ = combineLatest([\n        tuiControlValue<TuiDay>(this.control),\n        this.months$,\n    ]).pipe(\n        map(([value, months]) =>\n            !value\n                ? 'Choose a date'\n                : `${months[value.month]} ${value.day}, ${value.year}`,\n        ),\n    );\n\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,\n        @Inject(Injector) private readonly injector: Injector,\n        @Inject(TUI_MONTHS) private readonly months$: Observable<string[]>,\n    ) {}\n\n    get empty(): boolean {\n        return !this.control.value;\n    }\n\n    onClick(): void {\n        this.dialog$.subscribe(value => this.control.setValue(value));\n    }\n}\n"}}]);