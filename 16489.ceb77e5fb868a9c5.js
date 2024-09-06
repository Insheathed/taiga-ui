(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[16489],{16489:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiDay, TuiDayRange} from '@taiga-ui/cdk';\nimport {TuiButton, TuiCalendar, TuiDataList, TuiDropdown, TuiGroup} from '@taiga-ui/core';\nimport {TuiDataListDropdownManager} from '@taiga-ui/kit';\nimport {TuiAsideItemDirective} from '@taiga-ui/layout';\nimport {TuiInputDateRangeModule, TuiInputModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example5\",\n    imports: [\n        AsyncPipe,\n        FormsModule,\n        TuiAmountPipe,\n        TuiAsideItemDirective,\n        TuiButton,\n        TuiCalendar,\n        TuiDataList,\n        TuiDataListDropdownManager,\n        TuiDropdown,\n        TuiGroup,\n        TuiInputDateRangeModule,\n        TuiInputModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected dropdownOpen = false;\n    protected dateValue: TuiDay = new TuiDay(2020, 0, 1);\n    protected euro = 87; // 1 euro = 87 rub\n    protected dollar = 75; // 1 dollar = 75 rub\n\n    protected emailValue = 'mail@mail.ru';\n    protected moneyValue = 1000;\n\n    protected rangeValue = new TuiDayRange(\n        TuiDay.currentLocal(),\n        TuiDay.currentLocal().append({year: 1}),\n    );\n\n    protected onDayClick(day: TuiDay): void {\n        this.dateValue = day;\n    }\n}\n"}}]);