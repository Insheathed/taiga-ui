(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[84036],{84036:n=>{n.exports='<span class="icon">\n    <img\n        *polymorpheusOutlet="account.paymentSystem as src"\n        alt=""\n        class="icon-content"\n        [src]="src | tuiIcon"\n    />\n</span>\n<span class="info">\n    <span class="name">{{ account.name }}</span>\n    <span\n        class="value"\n        [tuiNumberFormat]="{decimalMode: \'always\'}"\n    >\n        {{ account.amount | tuiAmount: account.currency | async }}\n    </span>\n</span>\n'}}]);