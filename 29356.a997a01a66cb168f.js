(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[29356],{29356:n=>{n.exports='<button\n    size="m"\n    tuiButton\n    type="button"\n    (click)="open(template)"\n>\n    Show\n</button>\n\n<ng-template\n    #template\n    let-observer\n>\n    <tui-app-bar tuiAppBarSize>\n        <button\n            tuiAppBarBack\n            tuiSlot="left"\n            type="button"\n            [disabled]="!step"\n            (click)="step = step - 1"\n        >\n            Back\n        </button>\n        <progress\n            max="5"\n            size="s"\n            tuiProgressBar\n            [style.width.rem]="8"\n            [value]="step"\n        ></progress>\n        <button\n            appearance="link"\n            tuiButton\n            tuiSlot="right"\n            type="button"\n            (click)="observer.complete()"\n        >\n            Close\n        </button>\n    </tui-app-bar>\n    <h2 tuiHeader="l">\n        <span tuiTitle>I\'m a stepper</span>\n    </h2>\n    <p\n        tuiAppearance="floating"\n        tuiCardLarge\n    >\n        Step {{ step }}\n    </p>\n    <button\n        tuiButton\n        type="button"\n        [disabled]="step === 5"\n        (click)="step = step + 1"\n    >\n        Next\n    </button>\n</ng-template>\n'}}]);