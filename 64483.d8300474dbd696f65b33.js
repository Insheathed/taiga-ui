(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[64483],{64483:n=>{n.exports='<tui-hosted-dropdown\n    tuiDropdownAlign="right"\n    [content]="dropdown"\n    [sided]="true"\n    [(open)]="open"\n>\n    <button\n        appearance="flat"\n        iconRight="tuiIconChevronRight"\n        size="m"\n        tuiButton\n        type="button"\n        [pseudoActive]="open || null"\n    >\n        Button\n    </button>\n</tui-hosted-dropdown>\n<ng-template\n    #dropdown\n    let-close="close"\n>\n    <tui-data-list>\n        <tui-opt-group>\n            <button\n                *ngFor="let item of items"\n                tuiOption\n                (click)="onClick()"\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n        <tui-opt-group>\n            <button\n                tuiOption\n                (click)="close()"\n            >\n                Nevermind\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n'}}]);