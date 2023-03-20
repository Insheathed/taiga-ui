"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[51567],{51567:(H,l,e)=>{e.r(l),e.d(l,{ExampleTuiFormatPhoneModule:()=>z});var h=e(12057),u=e(24751),x=e(33982),d=e(29851),r=e(3497),c=e(55908),t=e(74788),g=e(88331),T=e(37159),f=e(57068),s=e(3520);let P=(()=>{class o{constructor(){this.phone="+78005557778"}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-format-phone-example-1"]],decls:6,vars:8,template:function(n,m){1&n&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"tuiFormatPhone"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.ALo(5,"tuiFormatPhone"),t.qZA()),2&n&&(t.xp6(1),t.hij("Formatted number by default: ",t.lcZ(2,2,m.phone),""),t.xp6(3),t.hij(" Formatted number with custom params: ",t.Dn7(5,4,m.phone,void 0,"###-###-##-##"),"\n"))},pipes:[s.r],encapsulation:2,changeDetection:0}),o})();var y=e(77027),C=e(41360),F=e(10200),M=e(68874),Z=e(54476),v=e(17023),E=e(76349);function A(o,a){if(1&o&&(t.TgZ(0,"p"),t._uU(1,"Pipe to format phone number"),t.qZA(),t.TgZ(2,"tui-doc-example",2),t._UZ(3,"tui-format-phone-example-1"),t.qZA()),2&o){const n=t.oxw();t.xp6(2),t.Q6J("content",n.example1)}}function V(o,a){1&o&&t._uU(0," Country code ")}function U(o,a){1&o&&t._uU(0," Phone number mask ")}function J(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"p",3),t._uU(1),t.ALo(2,"tuiFormatPhone"),t.qZA(),t.TgZ(3,"tui-input",4),t.NdJ("ngModelChange",function(i){return t.CHM(n),t.oxw().index=i}),t.qZA(),t.TgZ(4,"tui-doc-documentation"),t.YNc(5,V,1,0,"ng-template",5),t.NdJ("documentationPropertyValueChange",function(i){return t.CHM(n),t.oxw().countryCode=i}),t.YNc(6,U,1,0,"ng-template",6),t.NdJ("documentationPropertyValueChange",function(i){return t.CHM(n),t.oxw().phoneMask=i}),t.qZA()}if(2&o){const n=t.oxw();t.xp6(1),t.hij(" Formatted phone number: ",t.Dn7(2,7,n.index,n.countryCode,n.phoneMask)," "),t.xp6(2),t.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",n.index),t.xp6(2),t.Q6J("documentationPropertyValues",n.countryCodes)("documentationPropertyValue",n.countryCode),t.xp6(1),t.Q6J("documentationPropertyValues",n.phoneMasks)("documentationPropertyValue",n.phoneMask)}}function N(o,a){if(1&o&&(t.TgZ(0,"ol",7),t.TgZ(1,"li"),t.TgZ(2,"p"),t._uU(3," Import "),t.TgZ(4,"code"),t._uU(5,"TuiFormatPhonePipeModule"),t.qZA(),t._uU(6," into a module where you want to use the pipe "),t.qZA(),t._UZ(7,"tui-doc-code",8),t.qZA(),t.TgZ(8,"li"),t.TgZ(9,"p"),t._uU(10,"Use pipe in template with function and its arguments:"),t.qZA(),t._UZ(11,"tui-doc-code",9),t.qZA(),t.qZA()),2&o){const n=t.oxw();t.xp6(7),t.Q6J("code",n.exampleModule),t.xp6(4),t.Q6J("code",n.exampleHtml)}}let L=(()=>{class o{constructor(){this.exampleModule=e.e(14203).then(e.t.bind(e,14203,17)),this.exampleHtml=e.e(66398).then(e.t.bind(e,66398,17)),this.example1={TypeScript:e.e(37904).then(e.t.bind(e,37904,17)),HTML:e.e(99280).then(e.t.bind(e,99280,17))},this.index="+78005557778",this.countryCodes=[void 0,"+850","+1","+52"],this.countryCode=this.countryCodes[0],this.phoneMasks=[void 0,"####-#############","### ###-####","### ###-####"],this.phoneMask=this.phoneMasks[0]}get maxLength(){return this.countryCode&&this.phoneMask?this.countryCode.length+this.phoneMask.length-2:12}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["example-tui-format-phone"]],decls:4,vars:0,consts:[["header","FormatPhone","package","CORE","type","pipes"],["pageTab",""],["id","base","heading","Basic",3,"content"],[1,"text","b-full-width"],["tuiTextfieldSize","m",1,"slider",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["documentationPropertyName","countryCode","documentationPropertyType","string | undefined",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","phoneMask","documentationPropertyType","string | undefined",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(n,m){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,A,4,1,"ng-template",1),t.YNc(2,J,7,11,"ng-template",1),t.YNc(3,N,12,2,"ng-template",1),t.qZA())},directives:[g.q,T.n,f.f,P,y.K,C.w,F.s,M.x,u.JJ,u.On,Z.z,v.B,E.c],pipes:[s.r],styles:[".text[_ngcontent-%COMP%]{font-size:1.1875rem}.slider[_ngcontent-%COMP%]{margin-top:.75rem;width:9.375rem}"],changeDetection:0}),o})(),z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.TuiFormatPhonePipeModule,c.TuiInputModule,u.UX,u.u5,h.ez,c.TuiRadioListModule,r.TuiTextfieldControllerModule,d.fV,x.Bz.forChild((0,d.Ve)(L))]]}),o})()}}]);