(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[48664],{48664:(t,e,o)=>{o.r(e),o.d(e,{ExampleTuiAlertsModule:()=>at});var n=o(12057),i=o(23738),a=o(33982),u=o(80867),c=o(73961),s=o(45294),l=o(54002),r=o(89570),p=o(74788),m=o(43190),d=o(16996),h=o(30644),Z=o(76189),g=o(66596);let f=(()=>{class t{constructor(t){this.context=t,this.value=this.context.data}increaseBalance(){this.value+=10}submit(){this.context.completeWith(this.value)}}return t.ɵfac=function(e){return new(e||t)(p.Y36(r.yf))},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-notifications-service-example-with-data"]],decls:9,vars:2,consts:[[1,"text"],[3,"value"],["tuiMode","onLight",1,"controls","tui-space_top-3"],["tuiButton","","type","button","appearance","outline","size","m",1,"tui-space_right-3",3,"click"],["tuiLink","","type","button",3,"pseudo","click"]],template:function(t,e){1&t&&(p.TgZ(0,"span",0),p._uU(1,"Your balance:"),p.qZA(),p._uU(2,"\n \n"),p._UZ(3,"tui-money",1),p.TgZ(4,"div",2),p.TgZ(5,"button",3),p.NdJ("click",(function(){return e.submit()})),p._uU(6," Submit "),p.qZA(),p.TgZ(7,"button",4),p.NdJ("click",(function(){return e.increaseBalance()})),p._uU(8," Increase "),p.qZA(),p.qZA()),2&t&&(p.xp6(3),p.Q6J("value",e.value),p.xp6(4),p.Q6J("pseudo",!0))},directives:[d.o,h.w,Z.v,g.V],styles:[".text[_ngcontent-%COMP%]{font-style:italic}.controls[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),t})();var T=o(43560),b=o(93525),y=o(33772);let _=(()=>{class t{constructor(t){this.alerts=t}showNotification(){this.alerts.open("Basic <strong>HTML</strong>",{label:"With a heading!"}).subscribe()}}return t.ɵfac=function(e){return new(e||t)(p.Y36(s.TuiAlertService))},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-alerts-example-1"]],decls:2,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(t,e){1&t&&(p.TgZ(0,"button",0),p.NdJ("click",(function(){return e.showNotification()})),p._uU(1," Show\n"),p.qZA())},directives:[Z.v],encapsulation:2,changeDetection:0}),t})();const w=["withdrawTemplate"],x=["depositTemplate"];function U(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"p"),p._uU(1,"Notifications can be shown with template"),p.qZA(),p.TgZ(2,"p"),p._uU(3," Your balance: "),p._UZ(4,"tui-money",0),p.qZA(),p.TgZ(5,"button",6),p.NdJ("click",(function(){return p.CHM(t),p.oxw().withdraw()})),p._uU(6," Withdraw  "),p._UZ(7,"tui-money",0),p.qZA()}if(2&t){const t=p.oxw();p.xp6(4),p.Q6J("value",t.money),p.xp6(3),p.Q6J("value",100)}}function A(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"p"),p._uU(1," If there are many templates, you can use "),p.TgZ(2,"code"),p._uU(3,"ViewChildren"),p.qZA(),p._uU(4," instead of "),p.TgZ(5,"code"),p._uU(6,"ViewChild"),p.qZA(),p._uU(7,' or set them IDs with "#" (see code of this sample) '),p.qZA(),p.TgZ(8,"p"),p._uU(9," Your balance: "),p._UZ(10,"tui-money",0),p.qZA(),p.TgZ(11,"button",6),p.NdJ("click",(function(){return p.CHM(t),p.oxw().deposit()})),p._uU(12," Add  "),p._UZ(13,"tui-money",0),p.qZA()}if(2&t){const t=p.oxw();p.xp6(10),p.Q6J("value",t.money),p.xp6(3),p.Q6J("value",100)}}let v=(()=>{class t{constructor(t){this.alerts=t,this.money=1e3}showWithdrawAlert(){this.alerts.open(this.withdrawTemplate||"",{label:"A template sample",status:"warning",autoClose:!1}).subscribe()}showDepositAlert(){this.alerts.open(this.depositTemplate||"",{label:"A template sample",status:"success",autoClose:!1}).subscribe()}withdraw(){this.money-=100}deposit(){this.money+=100}}return t.ɵfac=function(e){return new(e||t)(p.Y36(s.TuiAlertService))},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-alerts-example-2"]],viewQuery:function(t,e){if(1&t&&(p.Gf(w,5),p.Gf(x,5)),2&t){let t;p.iGM(t=p.CRH())&&(e.withdrawTemplate=t.first),p.iGM(t=p.CRH())&&(e.depositTemplate=t.first)}},decls:15,vars:2,consts:[[3,"value"],["tuiButton","","type","button","size","m",1,"tui-space_right-3",3,"click"],["tuiButton","","type","button","size","m",3,"click"],["polymorpheus",""],["withdrawTemplate","polymorpheus"],["depositTemplate","polymorpheus"],["tuiButton","","type","button","tuiMode","onLight","appearance","outline","size","m",3,"click"]],template:function(t,e){1&t&&(p.TgZ(0,"p"),p._uU(1," Your balance: "),p._UZ(2,"tui-money",0),p.qZA(),p.TgZ(3,"button",1),p.NdJ("click",(function(){return e.showWithdrawAlert()})),p._uU(4," Withdraw\n"),p.qZA(),p.TgZ(5,"button",1),p.NdJ("click",(function(){return e.showDepositAlert()})),p._uU(6," Add\n"),p.qZA(),p.TgZ(7,"p"),p.TgZ(8,"button",2),p.NdJ("click",(function(){return e.withdraw()})),p._uU(9," Withdraw  "),p._UZ(10,"tui-money",0),p.qZA(),p.qZA(),p.YNc(11,U,8,2,"ng-template",3,4,p.W1O),p.YNc(13,A,14,2,"ng-template",3,5,p.W1O)),2&t&&(p.xp6(2),p.Q6J("value",e.money),p.xp6(8),p.Q6J("value",100))},directives:[d.o,Z.v,r.GL,h.w],encapsulation:2,changeDetection:0}),t})();var q=o(46782);let C=(()=>{class t{constructor(t){this.context=t}ok(){this.context.completeWith(!0)}cancel(){this.context.completeWith(!1)}}return t.ɵfac=function(e){return new(e||t)(p.Y36(r.yf))},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-notifications-service-example"]],decls:7,vars:0,consts:[["tuiMode","onLight"],["tuiButton","","type","button","appearance","outline","size","s",3,"click"],["tuiButton","","type","button","appearance","outline","size","s",1,"tui-space_left-1",3,"click"]],template:function(t,e){1&t&&(p.TgZ(0,"p"),p._uU(1,"Yes?"),p.qZA(),p.TgZ(2,"div",0),p.TgZ(3,"button",1),p.NdJ("click",(function(){return e.ok()})),p._uU(4," Yes "),p.qZA(),p.TgZ(5,"button",2),p.NdJ("click",(function(){return e.cancel()})),p._uU(6," No "),p.qZA(),p.qZA())},directives:[h.w,Z.v],encapsulation:2,changeDetection:0}),t})(),N=(()=>{class t{constructor(t,e,o){this.injector=o,this.notification=t.open(new r.Al(C,this.injector),{label:"Question",status:"error",autoClose:!1}).pipe((0,m.w)((e=>t.open(`Got a value — ${e}`,{label:"Information"}))),(0,q.R)(e.events))}showNotification(){this.notification.subscribe()}}return t.ɵfac=function(e){return new(e||t)(p.Y36(s.TuiAlertService),p.Y36(a.F0),p.Y36(p.zs3))},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-alerts-example-3"]],decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(t,e){1&t&&(p.TgZ(0,"p"),p._uU(1,"This notification will be removed after router change (see component sample)"),p.qZA(),p.TgZ(2,"button",0),p.NdJ("click",(function(){return e.showNotification()})),p._uU(3," Show\n"),p.qZA())},directives:[Z.v],encapsulation:2,changeDetection:0}),t})(),J=(()=>{class t{constructor(t,e,o){this.injector=o,this.notification=t.open(new r.Al(f,this.injector),{label:"Heading is so long that it should be shown in two lines of text",data:237,status:"warning",autoClose:!1}).pipe((0,m.w)((e=>t.open(`Got a value — ${e}`,{label:"Information"}))),(0,q.R)(e.events))}showNotification(){this.notification.subscribe()}}return t.ɵfac=function(e){return new(e||t)(p.Y36(s.TuiAlertService),p.Y36(a.F0),p.Y36(p.zs3))},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-alerts-example-4"]],decls:2,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(t,e){1&t&&(p.TgZ(0,"button",0),p.NdJ("click",(function(){return e.showNotification()})),p._uU(1," Show\n"),p.qZA())},directives:[Z.v],encapsulation:2,changeDetection:0}),t})();function P(t,e){if(1&t&&(p.ynx(0),p._uU(1),p.BQk()),2&t){const t=e.polymorpheusOutlet;p.xp6(1),p.hij(" ",t,"\n")}}let M=(()=>{class t{constructor(t){this.context=t}}return t.ɵfac=function(e){return new(e||t)(p.Y36(r.yf))},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-notifications-service-example-with-custom-label"]],decls:5,vars:2,consts:[[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(t,e){1&t&&(p.TgZ(0,"h4"),p._uU(1,"Start content"),p.qZA(),p.YNc(2,P,2,1,"ng-container",0),p.TgZ(3,"h4"),p._uU(4,"End content"),p.qZA()),2&t&&(p.xp6(2),p.Q6J("polymorpheusOutlet",e.context.label)("polymorpheusOutletContext",e.context))},directives:[r.Li],encapsulation:2,changeDetection:0}),t})();var k=o(34880);let V=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-notifications-service-example-custom-label"]],decls:4,vars:0,consts:[[1,"label"],[1,"text"],["src","tuiIconHeart"]],template:function(t,e){1&t&&(p.TgZ(0,"label",0),p.TgZ(1,"span",1),p._uU(2,"From custom label component with"),p.qZA(),p._UZ(3,"tui-svg",2),p.qZA())},directives:[k.P],styles:[".label[_ngcontent-%COMP%]{display:flex;align-items:center}.text[_ngcontent-%COMP%]{font-weight:normal;font-style:italic}"],changeDetection:0}),t})(),S=(()=>{class t{constructor(t,e,o){this.injector=o,this.notification=t.open(new r.Al(M,this.injector),{label:({status:t})=>"error"===t?"Error label from function":"Info label from function",status:"error",autoClose:!1}).pipe((0,q.R)(e.events)),this.notificationWithCustomLabel=t.open(new r.Al(M,this.injector),{label:new r.Al(V,this.injector),status:"warning",autoClose:!1}).pipe((0,q.R)(e.events))}showNotification(){this.notification.subscribe()}showNotificationWithCustomLabel(){this.notificationWithCustomLabel.subscribe()}}return t.ɵfac=function(e){return new(e||t)(p.Y36(s.TuiAlertService),p.Y36(a.F0),p.Y36(p.zs3))},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-alerts-example-5"]],decls:5,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(t,e){1&t&&(p.TgZ(0,"button",0),p.NdJ("click",(function(){return e.showNotification()})),p._uU(1," Using function\n"),p.qZA(),p.TgZ(2,"p"),p.TgZ(3,"button",0),p.NdJ("click",(function(){return e.showNotificationWithCustomLabel()})),p._uU(4," Using component "),p.qZA(),p.qZA())},directives:[Z.v],encapsulation:2,changeDetection:0}),t})();var Y=o(95063);function B(t,e){if(1&t){const t=p.EpF();p._uU(0," This is a declarative directive alert "),p.TgZ(1,"button",2),p.NdJ("click",(function(){return p.CHM(t),p.oxw().show=!1})),p._uU(2," Close "),p.qZA()}}const I=function(){return{label:"Directive",autoClose:!1,hasCloseButton:!1}};let O=(()=>{class t{constructor(){this.show=!1}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-alerts-example-6"]],decls:3,vars:3,consts:[["tuiButton","","size","m",3,"click"],[3,"tuiAlertOptions","tuiAlert","tuiAlertChange"],["tuiButton","","size","s","appearance","mono",1,"tui-space_top-2",3,"click"]],template:function(t,e){1&t&&(p.TgZ(0,"button",0),p.NdJ("click",(function(){return e.show=!0})),p._uU(1," Show\n"),p.qZA(),p.YNc(2,B,3,0,"ng-template",1),p.NdJ("tuiAlertChange",(function(t){return e.show=t}))),2&t&&(p.xp6(2),p.Q6J("tuiAlertOptions",p.DdM(2,I))("tuiAlert",e.show))},directives:[Z.v,Y.c],encapsulation:2,changeDetection:0}),t})();var Q=o(83074),z=o(51192),H=o(60404),L=o(91473);function D(t,e){if(1&t&&(p.TgZ(0,"p"),p._uU(1,"Service to show notifications"),p.qZA(),p.TgZ(2,"p"),p._uU(3," Do not forget to add "),p.TgZ(4,"code"),p._uU(5,"TuiAlertModule"),p.qZA(),p._uU(6," into your app.module to use it "),p.qZA(),p.TgZ(7,"p"),p.TgZ(8,"strong"),p._uU(9,"Singleton"),p.qZA(),p._uU(10," you do not need to provide a service. It is just available to inject "),p.qZA(),p.TgZ(11,"p"),p._uU(12," Position on screen can be configured by providing margins with "),p.TgZ(13,"code"),p._uU(14,"TUI_ALERT_POSITION"),p.qZA(),p._uU(15," token. Default value is "),p.TgZ(16,"code"),p._uU(17,"2rem 3rem 0 auto"),p.qZA(),p._uU(18," . "),p.qZA(),p.TgZ(19,"tui-doc-example",2),p._UZ(20,"tui-alerts-example-1"),p.qZA(),p.TgZ(21,"tui-doc-example",3),p._UZ(22,"tui-alerts-example-2"),p.qZA(),p.TgZ(23,"tui-doc-example",4),p._UZ(24,"tui-alerts-example-3"),p.qZA(),p.TgZ(25,"tui-doc-example",5),p._UZ(26,"tui-alerts-example-4"),p.qZA(),p.TgZ(27,"tui-doc-example",6),p._UZ(28,"tui-alerts-example-5"),p.qZA(),p.TgZ(29,"tui-doc-example",7),p._UZ(30,"tui-alerts-example-6"),p.qZA()),2&t){const t=p.oxw();p.xp6(19),p.Q6J("content",t.example1),p.xp6(2),p.Q6J("content",t.example2),p.xp6(2),p.Q6J("content",t.example3),p.xp6(2),p.Q6J("content",t.example4),p.xp6(2),p.Q6J("content",t.example5),p.xp6(2),p.Q6J("content",t.example6)}}function j(t,e){1&t&&p._uU(0," Content ")}function W(t,e){1&t&&p._uU(0," Status ")}function X(t,e){1&t&&p._uU(0," Heading ")}function E(t,e){1&t&&(p._uU(0," Input data of notification, type: "),p._UZ(1,"code",18))}function R(t,e){1&t&&p._uU(0," Auto close after 3 seconds ")}function F(t,e){1&t&&p._uU(0," Has close button ")}function G(t,e){1&t&&p._uU(0," Has icon ")}function $(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"button",8),p.NdJ("click",(function(){return p.CHM(t),p.oxw().showNotification()})),p._uU(1," Show "),p.qZA(),p.TgZ(2,"div",9),p.TgZ(3,"p"),p._uU(4,"To show notification, use method"),p.qZA(),p._UZ(5,"tui-doc-code",10),p._uU(6," of "),p.TgZ(7,"code"),p._uU(8,"TuiAlertService"),p.qZA(),p._uU(9," , where "),p.TgZ(10,"code"),p._uU(11,"O"),p.qZA(),p._uU(12," is output data type and "),p.TgZ(13,"code"),p._uU(14,"I"),p.qZA(),p._uU(15," is input data type. If content does not need input data, the second argument is optional. In the sample above the both of them are "),p.TgZ(16,"code"),p._uU(17,"number"),p.qZA(),p._uU(18," . "),p.TgZ(19,"p"),p._uU(20," You can also just unsubscribe from a stream to hide a notification (this observable is returned from "),p.TgZ(21,"code"),p._uU(22,"open"),p.qZA(),p._uU(23," method). You can save a subscription for that or use "),p.TgZ(24,"code"),p._uU(25,"takeUntil"),p.qZA(),p._uU(26," like tools from "),p.TgZ(27,"code"),p._uU(28,"RxJs"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(29,"tui-doc-documentation"),p.YNc(30,j,1,0,"ng-template",11),p.NdJ("documentationPropertyValueChange",(function(e){return p.CHM(t),p.oxw().content=e})),p.qZA(),p.TgZ(31,"p"),p.TgZ(32,"code"),p._uU(33,"TuiNotificationOptionsWithData"),p.qZA(),p._uU(34," interface: "),p.qZA(),p.TgZ(35,"tui-doc-documentation"),p.YNc(36,W,1,0,"ng-template",12),p.NdJ("documentationPropertyValueChange",(function(e){return p.CHM(t),p.oxw().status=e})),p.YNc(37,X,1,0,"ng-template",13),p.NdJ("documentationPropertyValueChange",(function(e){return p.CHM(t),p.oxw().label=e})),p.YNc(38,E,2,0,"ng-template",14),p.NdJ("documentationPropertyValueChange",(function(e){return p.CHM(t),p.oxw().data=e})),p.YNc(39,R,1,0,"ng-template",15),p.NdJ("documentationPropertyValueChange",(function(e){return p.CHM(t),p.oxw().autoClose=e})),p.YNc(40,F,1,0,"ng-template",16),p.NdJ("documentationPropertyValueChange",(function(e){return p.CHM(t),p.oxw().hasCloseButton=e})),p.YNc(41,G,1,0,"ng-template",17),p.NdJ("documentationPropertyValueChange",(function(e){return p.CHM(t),p.oxw().hasIcon=e})),p.qZA()}if(2&t){const t=p.oxw();p.xp6(5),p.Q6J("code",t.method),p.xp6(25),p.Q6J("documentationPropertyValues",t.contentVariants)("documentationPropertyValue",t.content),p.xp6(6),p.Q6J("documentationPropertyValues",t.statusVariants)("documentationPropertyValue",t.status),p.xp6(1),p.Q6J("documentationPropertyValue",t.label),p.xp6(1),p.Q6J("documentationPropertyValue",t.data),p.xp6(1),p.Q6J("documentationPropertyValues",t.autoCloseVariants)("documentationPropertyValue",t.autoClose),p.xp6(1),p.Q6J("documentationPropertyValue",t.hasCloseButton),p.xp6(1),p.Q6J("documentationPropertyValue",t.hasIcon)}}function K(t,e){if(1&t&&(p.TgZ(0,"ol",19),p.TgZ(1,"li"),p.TgZ(2,"p"),p._uU(3," Add "),p.TgZ(4,"code"),p._uU(5,"TuiAlertModule"),p.qZA(),p._uU(6," into your app.module "),p.qZA(),p._UZ(7,"tui-doc-code",20),p.qZA(),p.TgZ(8,"li"),p.TgZ(9,"p"),p._uU(10," Use service "),p.TgZ(11,"code"),p._uU(12,"show"),p.qZA(),p._uU(13," method and subscribe to "),p.TgZ(14,"code"),p._uU(15,"Observable"),p.qZA(),p.qZA(),p._UZ(16,"tui-doc-code",21),p.qZA(),p.TgZ(17,"li"),p._uU(18," To pass notification with custom content, you can use "),p.TgZ(19,"a",22),p.TgZ(20,"code"),p._uU(21,"your template"),p.qZA(),p.qZA(),p._uU(22," . "),p.qZA(),p.TgZ(23,"li"),p.TgZ(24,"p"),p._uU(25," You can also customize notification logic with a component. Use "),p.TgZ(26,"code"),p._uU(27,"POLYMORPHEUS_CONTEXT"),p.qZA(),p._uU(28," into the component to get context input data and to output results. It has the following interface: "),p._UZ(29,"code",23),p._uU(30," , where "),p.TgZ(31,"code"),p._uU(32,"O"),p.qZA(),p._uU(33," is output data type and "),p.TgZ(34,"code"),p._uU(35,"I"),p.qZA(),p._uU(36," is input data type. "),p.qZA(),p.qZA(),p.TgZ(37,"li"),p.TgZ(38,"p"),p._uU(39," Use "),p.TgZ(40,"code"),p._uU(41,"new PolymorpheusComponent(CustomNotificationComponent)"),p.qZA(),p._uU(42," to show notification component with a service: "),p.qZA(),p._UZ(43,"tui-doc-code",21),p.qZA(),p.TgZ(44,"li"),p.TgZ(45,"p"),p._uU(46," Use "),p.TgZ(47,"code"),p._uU(48,"completeWith"),p.qZA(),p._uU(49," method to control notification from itself: "),p.qZA(),p._UZ(50,"tui-doc-code",24),p.qZA(),p.TgZ(51,"li"),p.TgZ(52,"p"),p._uU(53," If you use it from lazy loading modules, do not forget to use "),p.TgZ(54,"code"),p._uU(55,"new TuiComponentContent Injector"),p.qZA(),p._uU(56," of component where you call it "),p.qZA(),p._UZ(57,"tui-doc-code",24),p.qZA(),p.TgZ(58,"li"),p.TgZ(59,"p"),p._uU(60," Optionally use the "),p.TgZ(61,"code"),p._uU(62,"TUI_NOTIFICATION_OPTIONS"),p.qZA(),p._uU(63," injection token to override the default options with a helper (works only in app.module.ts). "),p.qZA(),p._UZ(64,"tui-doc-code",20),p.qZA(),p.qZA()),2&t){const t=p.oxw();p.xp6(7),p.Q6J("code",t.exampleModule),p.xp6(9),p.Q6J("code",t.exampleServiceUsage),p.xp6(27),p.Q6J("code",t.exampleServiceUsageComponent),p.xp6(7),p.Q6J("code",t.exampleCustomAlert),p.xp6(7),p.Q6J("code",t.exampleLazyModule),p.xp6(7),p.Q6J("code",t.exampleOptions)}}let tt=(()=>{class t{constructor(t,e){this.alerts=t,this.method=o.e(22864).then(o.t.bind(o,22864,17)),this.exampleServiceUsage=o.e(21779).then(o.t.bind(o,21779,17)),this.exampleServiceUsageComponent=o.e(47317).then(o.t.bind(o,47317,17)),this.exampleCustomAlert=o.e(89081).then(o.t.bind(o,89081,17)),this.exampleLazyModule=o.e(23040).then(o.t.bind(o,23040,17)),this.exampleModule=o.e(44780).then(o.t.bind(o,44780,17)),this.exampleOptions=o.e(44623).then(o.t.bind(o,44623,17)),this.example1={TypeScript:o.e(71703).then(o.t.bind(o,71703,17)),HTML:o.e(60849).then(o.t.bind(o,60849,17))},this.example2={TypeScript:o.e(76701).then(o.t.bind(o,76701,17)),HTML:o.e(23996).then(o.t.bind(o,23996,17))},this.example3={TypeScript:o.e(11885).then(o.t.bind(o,11885,17)),HTML:o.e(19597).then(o.t.bind(o,19597,17)),"alert-example/alert-example.component.ts":o.e(35010).then(o.t.bind(o,35010,17)),"alert-example/alert-example.template.html":o.e(99889).then(o.t.bind(o,99889,17)),"alert-example/alert-example.module.ts":o.e(41177).then(o.t.bind(o,41177,17))},this.example4={TypeScript:o.e(67005).then(o.t.bind(o,67005,17)),HTML:o.e(56103).then(o.t.bind(o,56103,17)),"alert-example-with-data/alert-example-with-data.component.ts":o.e(47368).then(o.t.bind(o,47368,17)),"alert-example-with-data/alert-example-with-data.template.html":o.e(52399).then(o.t.bind(o,52399,17)),"alert-example-with-data/alert-example-with-data.style.less":o.e(54926).then(o.t.bind(o,54926,17)),"alert-example-with-data/alert-example-with-data.module.ts":o.e(34124).then(o.t.bind(o,34124,17))},this.example5={TypeScript:o.e(73037).then(o.t.bind(o,73037,17)),HTML:o.e(24149).then(o.t.bind(o,24149,17)),"custom-label/custom-label.module.ts":o.e(68510).then(o.t.bind(o,68510,17)),"custom-label/custom-label.component.ts":o.e(62580).then(o.t.bind(o,62580,17)),"custom-label/custom-label.style.less":o.e(6664).then(o.t.bind(o,6664,17)),"custom-label/custom-label.template.html":o.e(23866).then(o.t.bind(o,23866,17)),"alert-example-with-custom-label/alert-example-with-custom-label.module.ts":o.e(49668).then(o.t.bind(o,49668,17)),"alert-example-with-custom-label/alert-example-with-custom-label.component.ts":o.e(95001).then(o.t.bind(o,95001,17)),"alert-example-with-custom-label/alert-example-with-custom-label.template.html":o.e(36561).then(o.t.bind(o,36561,17))},this.example6={TypeScript:o.e(4161).then(o.t.bind(o,4161,17)),HTML:o.e(71733).then(o.t.bind(o,71733,17))},this.data=100,this.label="Heading",this.statusVariants=["info","success","error","warning"],this.status=this.statusVariants[0],this.contentVariants=["String","Component"],this.content=this.contentVariants[0],this.autoCloseVariants=[!0,!1,5e3,1e3,500],this.autoClose=this.autoCloseVariants[0],this.hasCloseButton=!0,this.hasIcon=!0,this.component=new r.Al(f,e)}get selectedContent(){return"String"===this.content?this.content:this.component}showNotification(){this.alerts.open(this.selectedContent,{label:this.label,data:this.data,status:this.status,autoClose:this.autoClose,hasCloseButton:this.hasCloseButton,hasIcon:this.hasIcon}).pipe((0,m.w)((t=>this.alerts.open(t,{label:"Notification responded with:"})))).subscribe()}}return t.ɵfac=function(e){return new(e||t)(p.Y36(s.TuiAlertService),p.Y36(p.zs3))},t.ɵcmp=p.Xpm({type:t,selectors:[["example-tui-alerts"]],decls:4,vars:0,consts:[["header","AlertService","package","CORE","path","core/components/alert/alert.service.ts"],["pageTab",""],["id","text","heading","Text",3,"content"],["id","template","heading","Template",3,"content"],["id","component","heading","Component",3,"content"],["id","data","heading","Component with data",3,"content"],["id","label","heading","Component with custom label",3,"content"],["id","directive","heading","Directive",3,"content"],["tuiButton","","type","button","size","m",3,"click"],[1,"b-full-width"],[1,"tui-space_bottom-4",3,"code"],["documentationPropertyName","content","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","status","documentationPropertyType","TuiNotification",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","label","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","data","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","autoClose","documentationPropertyType","boolean | number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasIcon","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["tuiText","<I>"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["routerLink","/services/alert-service","fragment","example-template","tuiLink",""],["tuiText","TuiDialog<TuiAlertOptions<I>, O>"],["filename","customNotification.component.ts",3,"code"]],template:function(t,e){1&t&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,D,31,6,"ng-template",1),p.YNc(2,$,42,11,"ng-template",1),p.YNc(3,K,65,6,"ng-template",1),p.qZA())},directives:[T.q,b.n,y.f,_,v,N,J,S,O,Z.v,Q.c,z.z,H.B,L.v,a.yS,g.V],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),t})(),et=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=p.oAB({type:t}),t.ɵinj=p.cJS({imports:[[n.ez,i.u5,s.TuiButtonModule,s.TuiModeModule,l.TuiSelectModule,u.TuiMoneyModule]]}),t})(),ot=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=p.oAB({type:t}),t.ɵinj=p.cJS({imports:[[n.ez,i.u5,s.TuiModeModule,s.TuiButtonModule,s.TuiLinkModule,u.TuiMoneyModule]]}),t})(),nt=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=p.oAB({type:t}),t.ɵinj=p.cJS({imports:[[n.ez,r.wq]]}),t})(),it=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=p.oAB({type:t}),t.ɵinj=p.cJS({imports:[[n.ez,s.TuiSvgModule]]}),t})(),at=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=p.oAB({type:t}),t.ɵinj=p.cJS({imports:[[n.ez,i.u5,r.wq,c.Zp,s.TuiAlertModule,s.TuiButtonModule,s.TuiModeModule,u.TuiMoneyModule,nt,ot,et,it,l.TuiRadioListModule,l.TuiInputModule,s.TuiLinkModule,c.fV,a.Bz.forChild((0,c.Ve)(tt))]]}),t})()}}]);