(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[89233],{89233:n=>{n.exports='<form\n    class="input-wrapper"\n    [formGroup]="testForm"\n>\n    <div\n        tuiGroup\n        class="group"\n    >\n        <div>\n            <tui-input\n                formControlName="testValue"\n                tuiHintContent="Write a number"\n                class="tui-group__inherit-item"\n            >\n                House\n                <input\n                    placeholder="House"\n                    tuiTextfield\n                />\n            </tui-input>\n            <tui-error\n                formControlName="testValue"\n                [error]="[] | tuiFieldError | async"\n            ></tui-error>\n        </div>\n        <div>\n            <tui-multi-select\n                formControlName="multiSelectControl"\n                tuiHintContent="Write house building"\n                class="tui-group__inherit-item"\n                [editable]="false"\n                [expandable]="false"\n                [tuiTextfieldLabelOutside]="true"\n            >\n                Building\n                <tui-data-list-wrapper\n                    *tuiDataList\n                    tuiMultiSelectGroup\n                    [items]="items"\n                ></tui-data-list-wrapper>\n            </tui-multi-select>\n            <tui-error\n                formControlName="multiSelectControl"\n                [error]="[] | tuiFieldError | async"\n            ></tui-error>\n        </div>\n        <div>\n            <tui-input\n                formControlName="testValue3"\n                tuiHintContent="Write an apartment number only"\n                class="tui-group__inherit-item"\n            >\n                Apartment\n                <input\n                    placeholder="Apartment number"\n                    tuiTextfield\n                />\n            </tui-input>\n            <tui-error\n                formControlName="testValue3"\n                [error]="[] | tuiFieldError | async"\n            ></tui-error>\n        </div>\n    </div>\n</form>\n'}}]);