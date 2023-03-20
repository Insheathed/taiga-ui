"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[62202],{62202:(I,s,e)=>{e.r(s),e.d(s,{ExampleTuiBarChartModule:()=>j});var T=e(12057),u=e(24751),c=e(33982),d=e(50179),C=e(23121),h=e(29851),m=e(3497),x=e(55908),t=e(74788),y=e(88331),v=e(37159),f=e(66596),Z=e(57068),P=e(50259),g=e(70390),p=e(88549);let M=(()=>{class a{constructor(){this.value=[[3660,8281,1069,9034,5797,6918,8495,3234,6204,1392,2088,8637,8779],[3952,3671,3781,5323,3537,4107,2962,3320,8632,4755,9130,1195,3574]],this.labelsX=["Jan 2019","Feb","Mar"],this.labelsY=["0","10 000"]}getHeight(n){return n/(0,P.tuiCeil)(n,-3)*100}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["tui-bar-chart-example-1"]],decls:2,vars:4,consts:[[1,"axes",3,"axisXLabels","axisYLabels"],[3,"max","value"]],template:function(n,o){1&n&&(t.TgZ(0,"tui-axes",0),t._UZ(1,"tui-bar-chart",1),t.qZA()),2&n&&(t.Q6J("axisXLabels",o.labelsX)("axisYLabels",o.labelsY),t.xp6(1),t.Q6J("max",1e4)("value",o.value))},directives:[g.v,p.g],styles:[".axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}"],changeDetection:0}),a})();var B=e(79121),A=e(84848),E=e(50170),V=e(1414),J=e(52219),U=e(50020);function L(a,i){if(1&a&&t._UZ(0,"tui-data-list-wrapper",6),2&a){const n=t.oxw();t.Q6J("items",n.appearances)}}let H=(()=>{class a{constructor(){this.value=[[1e3,8e3,4e3,3e3,4e3],[6e3,2e3,4500,7e3,5e3]],this.labelsX=["Jan 2021","Feb","Mar"],this.labelsY=["0","10 000"],this.appearances=["onDark","error"],this.appearance="onDark",this.hint=({$implicit:n})=>this.value.reduce((o,l)=>`${o}$${(0,m.tuiFormatNumber)(l[n])}\n`,"").trim()}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["tui-bar-chart-example-2"]],decls:8,vars:14,consts:[[1,"flex"],[1,"axes",3,"axisXLabels","axisYLabels"],[3,"tuiHintAppearance","max","value","tuiHintContent"],[3,"tuiHintAppearance","max","value","collapsed","tuiHintContent"],[1,"b-form",3,"ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"tui-axes",1),t._UZ(2,"tui-bar-chart",2),t.qZA(),t.TgZ(3,"tui-axes",1),t._UZ(4,"tui-bar-chart",3),t.qZA(),t.qZA(),t.TgZ(5,"tui-select",4),t.NdJ("ngModelChange",function(r){return o.appearance=r}),t._uU(6," Hint appearance "),t.YNc(7,L,1,1,"tui-data-list-wrapper",5),t.qZA()),2&n&&(t.xp6(1),t.Q6J("axisXLabels",o.labelsX)("axisYLabels",o.labelsY),t.xp6(1),t.Q6J("tuiHintAppearance",o.appearance)("max",1e4)("value",o.value)("tuiHintContent",o.hint),t.xp6(1),t.Q6J("axisXLabels",o.labelsX)("axisYLabels",o.labelsY),t.xp6(1),t.Q6J("tuiHintAppearance",o.appearance)("max",1e4)("value",o.value)("collapsed",!0)("tuiHintContent",o.hint),t.xp6(1),t.Q6J("ngModel",o.appearance))},directives:[g.v,p.g,A.bZ,E.u,V.O,u.JJ,u.On,J.g,U.e],styles:[".axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}.axes[_ngcontent-%COMP%]:first-child{--tui-chart-0: gold;--tui-chart-1: purple}.axes[_ngcontent-%COMP%]:last-child{--tui-chart-0: skyblue;--tui-chart-1: violet}.flex[_ngcontent-%COMP%]{display:flex;min-width:31.25rem}"],changeDetection:0}),a})();var N=e(31823),Q=e(54476),Y=e(17023),S=e(76349);const z=function(){return["/components/axes"]};function X(a,i){if(1&a&&(t.TgZ(0,"p"),t._uU(1," Bar chart that can be used as a content to "),t.TgZ(2,"a",2),t._uU(3," axes "),t.qZA(),t._uU(4," . "),t.qZA(),t.TgZ(5,"tui-doc-example",3),t._UZ(6,"tui-bar-chart-example-1"),t.qZA(),t.TgZ(7,"tui-doc-example",4),t.TgZ(8,"tui-notification",5),t._uU(9," Use "),t.TgZ(10,"a",6),t.TgZ(11,"code"),t._uU(12,"Hint"),t.qZA(),t.qZA(),t._uU(13," directive to enable hints with "),t.TgZ(14,"code"),t._uU(15,"tuiHintContent"),t.qZA(),t.qZA(),t._UZ(16,"tui-bar-chart-example-2"),t.qZA()),2&a){const n=t.oxw();t.xp6(2),t.Q6J("routerLink",t.DdM(3,z)),t.xp6(3),t.Q6J("content",n.example1),t.xp6(2),t.Q6J("content",n.example2)}}function D(a,i){1&a&&t._uU(0," Shows data set in a single bar ")}function F(a,i){1&a&&t._uU(0," Sets chart max manually ")}function O(a,i){1&a&&(t._uU(0," Size (use "),t.TgZ(1,"code"),t._uU(2,"null"),t.qZA(),t._uU(3," for autosize) "))}function b(a,i){1&a&&t._uU(0," Array of segments ")}function $(a,i){if(1&a){const n=t.EpF();t.TgZ(0,"tui-doc-demo"),t._UZ(1,"tui-bar-chart",7),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,D,1,0,"ng-template",8),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(n),t.oxw().collapsed=l}),t.YNc(4,F,1,0,"ng-template",9),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(n),t.oxw().max=l}),t.YNc(5,O,4,0,"ng-template",10),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(n),t.oxw().size=l}),t.YNc(6,b,1,0,"ng-template",11),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(n),t.oxw().value=l}),t.qZA()}if(2&a){const n=t.oxw();t.xp6(1),t.Q6J("collapsed",n.collapsed)("value",n.value)("max",n.max)("size",n.size),t.xp6(2),t.Q6J("documentationPropertyValue",n.collapsed),t.xp6(1),t.Q6J("documentationPropertyValue",n.max),t.xp6(1),t.Q6J("documentationPropertyValues",n.sizeVariants)("documentationPropertyValue",n.size),t.xp6(1),t.Q6J("documentationPropertyValues",n.valueVariants)("documentationPropertyValue",n.value)}}function R(a,i){if(1&a&&(t.TgZ(0,"ol",12),t.TgZ(1,"li"),t.TgZ(2,"p"),t._uU(3," Import "),t.TgZ(4,"code"),t._uU(5,"TuiBarChartModule"),t.qZA(),t._uU(6," into a module where you want to use our component "),t.qZA(),t._UZ(7,"tui-doc-code",13),t.qZA(),t.TgZ(8,"li"),t.TgZ(9,"p"),t._uU(10,"Add to the template:"),t.qZA(),t._UZ(11,"tui-doc-code",14),t.qZA(),t.qZA()),2&a){const n=t.oxw();t.xp6(7),t.Q6J("code",n.exampleModule),t.xp6(4),t.Q6J("code",n.exampleHtml)}}let W=(()=>{class a{constructor(){this.exampleModule=e.e(15240).then(e.t.bind(e,15240,17)),this.exampleHtml=e.e(26307).then(e.t.bind(e,26307,17)),this.example1={TypeScript:e.e(37816).then(e.t.bind(e,37816,17)),HTML:e.e(29156).then(e.t.bind(e,29156,17)),LESS:e.e(65498).then(e.t.bind(e,65498,17))},this.example2={TypeScript:e.e(57888).then(e.t.bind(e,57888,17)),HTML:e.e(15294).then(e.t.bind(e,15294,17)),LESS:e.e(71019).then(e.t.bind(e,71019,17))},this.collapsed=!1,this.sizeVariants=["s","m","l"],this.size=null,this.max=0,this.valueVariants=[[[3e4,20500,12345],[12422,16124,22424]],[[30,65,30,80,54],[98,48,33,25,11],[55,10,27,36,73]]],this.value=this.valueVariants[0]}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["example-tui-bar-chart"]],decls:4,vars:0,consts:[["header","BarChart","package","ADDON-CHARTS","type","components"],["pageTab",""],["tuiLink","",3,"routerLink"],["id","axes","heading","With axes",3,"content"],["id","collapsed","heading","Same values with collapsed mode",3,"content"],[1,"tui-space_bottom-6"],["routerLink","/directives/hint","tuiLink",""],[1,"chart",3,"collapsed","value","max","size"],["documentationPropertyName","collapsed","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS | TuiSizeL | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<readonly number[]>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(n,o){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,X,17,4,"ng-template",1),t.YNc(2,$,7,10,"ng-template",1),t.YNc(3,R,12,2,"ng-template",1),t.qZA())},directives:[y.q,v.n,f.V,c.yS,Z.f,M,B.L,H,N.F,p.g,Q.z,Y.B,S.c],styles:[".chart[_ngcontent-%COMP%]{height:12.5rem}"],changeDetection:0}),a})(),j=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[T.ez,u.u5,d.TuiAxesModule,d.TuiBarChartModule,m.TuiHintModule,m.TuiNotificationModule,m.TuiLinkModule,C.TuiMoneyModule,x.TuiSelectModule,x.TuiDataListWrapperModule,h.fV,c.Bz.forChild((0,h.Ve)(W))]]}),a})()}}]);