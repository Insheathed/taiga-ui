(window.webpackJsonp=window.webpackJsonp||[]).push([[1367],{xx27:function(n,t,e){"use strict";e.r(t),t.default='<tui-tabs-with-more\n    [itemsLimit]="3"\n    [(activeItemIndex)]="activeItemIndex"\n>\n    <ng-container *ngFor="let item of items">\n        <button\n            *tuiTab\n            tuiTab\n            (keydown.delete)="remove(item)"\n        >\n            {{ item }}\n            <tui-svg\n                src="tuiIconCloseLarge"\n                class="tui-space_left-2"\n                (click.stop)="remove(item)"\n            ></tui-svg>\n        </button>\n    </ng-container>\n</tui-tabs-with-more>\n<p>{{ items[activeItemIndex] }}</p>\n<button\n    tuiButton\n    (click)="add()"\n>\n    Add one more\n</button>\n<tui-input-count\n    class="tui-space_top-4"\n    [max]="4"\n    [(ngModel)]="activeItemIndex"\n>\n    activeItemIndex\n</tui-input-count>\n'}}]);