(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4914],{4914:e=>{e.exports="```ts\nexport class MyComponent {\n  private readonly pdfService = inject(TuiPdfViewerService);\n\n  show(actions: PolymorpheusContent<TuiPdfViewerOptions>) {\n    this.pdfService\n      .open('/assets/taiga.pdf', {\n        label: 'Taiga UI',\n        actions,\n      })\n      .subscribe();\n  }\n}\n```\n"}}]);