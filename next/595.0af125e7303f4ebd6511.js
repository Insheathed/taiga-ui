(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{Gd21:function(n,t,o){"use strict";o.r(t),t.default='<tui-hosted-dropdown\n    tuiDropdownAlign="left"\n    [tuiDropdownLimitWidth]="isMobile ? \'fixed\' : \'min\'"\n    [tuiDropdownMaxHeight]="700"\n    [content]="content"\n    [(open)]="open"\n>\n    <button\n        tuiButton\n        appearance="flat"\n        type="button"\n        [iconRight]="arrow"\n    >\n        Select why you use Taiga UI\n    </button>\n</tui-hosted-dropdown>\n\n<ng-template #content>\n    <tui-data-list>\n        <tui-opt-group\n            *ngFor="let group of groups"\n            [label]="group.label"\n        >\n            <button\n                *ngFor="let item of group.items"\n                tuiOption\n                class="option"\n                (click)="open = false"\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n'}}]);