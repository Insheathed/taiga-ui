(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[84373],{84373:n=>{n.exports='<p>\n    <tui-input\n        *ngIf="default | tuiEmails as emails"\n        [(ngModel)]="default"\n    >\n        Standard addresses\n        <ng-template\n            *ngIf="emails.length"\n            tuiDataList\n        >\n            <tui-data-list-wrapper [items]="emails" />\n        </ng-template>\n    </tui-input>\n</p>\n<p>\n    <tui-input\n        *ngIf="custom | tuiEmails: emails as emails"\n        [(ngModel)]="custom"\n    >\n        Custom addresses\n        <ng-template\n            *ngIf="emails.length"\n            tuiDataList\n        >\n            <tui-data-list-wrapper [items]="emails" />\n        </ng-template>\n    </tui-input>\n</p>\n'}}]);