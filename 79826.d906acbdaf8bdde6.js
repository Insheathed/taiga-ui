(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[79826],{79826:e=>{e.exports='<button\n    size="m"\n    tuiButton\n    type="button"\n    class="tui-space_bottom-4"\n    (click)="show()"\n>\n    Show simple preview\n</button>\n\n<ng-template\n    #preview\n    let-preview\n>\n    <tui-preview\n        [rotatable]="false"\n        [zoomable]="false"\n    >\n        <iframe\n            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n            allowfullscreen\n            frameborder="0"\n            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"\n            title="Youtube"\n            class="content"\n        ></iframe>\n\n        <button\n            iconStart="@tui.x"\n            tuiIconButton\n            tuiPreviewAction\n            type="button"\n            (click)="preview.complete()"\n        >\n            Close\n        </button>\n    </tui-preview>\n</ng-template>\n'}}]);