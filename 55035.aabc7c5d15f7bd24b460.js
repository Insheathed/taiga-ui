(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[55035],{55035:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiPureModule:()=>U});var o=n(12057),c=n(23738),i=n(33982),u=n(52404),a=n(64862),s=n(66259),r=n(74788),p=n(43560),l=n(93525),d=n(33772),h=n(64762),g=n(93190),f=n(76189);function m(t,e){if(1&t&&(r.TgZ(0,"div",2),r._uU(1),r.qZA()),2&t){const t=r.oxw();r.xp6(1),r.hij(" fibonacci(42) = ",t.fibonacci42,"\n")}}class Z{constructor(){this.show=!1}get fibonacci42(){return this.fibonacci(42)}fibonacci(t){return t<=1?t:this.fibonacci(t-1)+this.fibonacci(t-2)}}Z.ɵfac=function(t){return new(t||Z)},Z.ɵcmp=r.Xpm({type:Z,selectors:[["example-tui-pure-getter"]],decls:3,vars:1,consts:[["class","tui-space_bottom-2",4,"ngIf"],["tuiButton","","type","button",3,"click"],[1,"tui-space_bottom-2"]],template:function(t,e){1&t&&(r.YNc(0,m,2,1,"div",0),r.TgZ(1,"button",1),r.NdJ("click",(function(){return e.show=!e.show})),r._uU(2," Show/hide\n"),r.qZA()),2&t&&r.Q6J("ngIf",e.show)},directives:[o.O5,f.v],encapsulation:2,changeDetection:0}),(0,h.gn)([g.tuiPure],Z.prototype,"fibonacci42",null);var x=n(77027),T=n(41360);function _(t,e){if(1&t&&(r.TgZ(0,"div",1),r._uU(1),r.ALo(2,"json"),r.qZA()),2&t){const t=r.oxw();r.xp6(1),r.hij(" Result: ",r.lcZ(2,1,t.calculate(t.counter,t.text)),"\n")}}class b{constructor(){this.text="",this.show=!1,this.counter={count:0}}calculate(t,e){return t.count++,{text:e}}}b.ɵfac=function(t){return new(t||b)},b.ɵcmp=r.Xpm({type:b,selectors:[["example-tui-pure-function"]],decls:7,vars:3,consts:[[3,"ngModel","ngModelChange"],[1,"tui-space_top-2"],["class","tui-space_top-2",4,"ngIf"],["tuiButton","","type","button",1,"tui-space_top-2",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"tui-input",0),r.NdJ("ngModelChange",(function(t){return e.text=t})),r._uU(1,"Type a text to start computing"),r.qZA(),r.TgZ(2,"div",1),r._uU(3),r.qZA(),r.YNc(4,_,3,3,"div",2),r.TgZ(5,"button",3),r.NdJ("click",(function(){return e.show=!e.show})),r._uU(6," Show/hide\n"),r.qZA()),2&t&&(r.Q6J("ngModel",e.text),r.xp6(3),r.hij("Called times: ",e.counter.count,""),r.xp6(1),r.Q6J("ngIf",e.show))},directives:[x.K,T.w,c.JJ,c.On,o.O5,f.v],pipes:[o.Ts],encapsulation:2,changeDetection:0}),(0,h.gn)([g.tuiPure],b.prototype,"calculate",null);var w=n(83074);function A(t,e){if(1&t&&(r.TgZ(0,"div",3),r._uU(1,"Decorator for memoization of pure methods and getters"),r.qZA(),r.TgZ(2,"p"),r._uU(3," Decorator can help to cache result of methods or getters that can be computed once in the first call. The next calls to getter will just use computed static value. "),r.qZA(),r.TgZ(4,"p"),r._uU(5," If you use decorator with methods, it does not compute the result again if arguments did not change after the last call (concept similar to Angular pure pipes) "),r.qZA(),r.TgZ(6,"tui-doc-example",4),r._UZ(7,"example-tui-pure-getter"),r.qZA(),r.TgZ(8,"tui-doc-example",5),r._UZ(9,"example-tui-pure-function"),r.qZA()),2&t){const t=r.oxw();r.xp6(6),r.Q6J("content",t.example1),r.xp6(2),r.Q6J("content",t.example2)}}function v(t,e){if(1&t&&(r.TgZ(0,"ol",6),r.TgZ(1,"li"),r.TgZ(2,"p"),r._uU(3," Add "),r.TgZ(4,"code"),r._uU(5,"@tuiPure"),r.qZA(),r._uU(6," decorator for your method or getter: "),r.qZA(),r._UZ(7,"tui-doc-code",7),r.qZA(),r.qZA()),2&t){const t=r.oxw();r.xp6(7),r.Q6J("code",t.exampleDecorator)}}let q=(()=>{class t{constructor(){this.exampleDecorator=n.e(26021).then(n.t.bind(n,26021,17)),this.example1={TypeScript:n.e(17007).then(n.t.bind(n,17007,17)),HTML:n.e(1778).then(n.t.bind(n,1778,17))},this.example2={TypeScript:n.e(74777).then(n.t.bind(n,74777,17)),HTML:n.e(51676).then(n.t.bind(n,51676,17))}}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=r.Xpm({type:t,selectors:[["example-tui-pure"]],decls:3,vars:0,consts:[["header","Pure","package","CDK","path","cdk/decorators/pure.ts"],["pageTab",""],["pageTab","Setup"],[1,"tui-space_bottom-3"],["id","getter","heading","Getter",3,"content"],["id","function","heading","Function",3,"content"],[1,"b-demo-steps"],["filename","myClass.component.ts",3,"code"]],template:function(t,e){1&t&&(r.TgZ(0,"tui-doc-page",0),r.YNc(1,A,10,2,"ng-template",1),r.YNc(2,v,8,1,"ng-template",2),r.qZA())},directives:[p.q,l.n,d.f,Z,b,w.c],encapsulation:2,changeDetection:0}),t})(),U=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=r.oAB({type:t}),t.ɵinj=r.cJS({imports:[[o.ez,c.u5,s.TuiInputModule,a.TuiButtonModule,u.fV,i.Bz.forChild((0,u.Ve)(q))]]}),t})()}}]);