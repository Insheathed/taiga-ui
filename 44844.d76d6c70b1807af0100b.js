(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[44844],{44844:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiLineDaysChartModule:()=>it});var o=n(12057),i=n(23738),a=n(33982),r=n(50179),u=n(52404),c=n(93190),l=n(64862),s=n(66259),p=n(88002),h=n(74788),g=n(43560),m=n(93525),d=n(33772),y=n(64762),f=n(92483),x=n(48706),T=n(70390),P=n(87748);function Z(t,e){if(1&t&&(h.TgZ(0,"tui-axes",3),h._UZ(1,"tui-line-days-chart",4),h.ALo(2,"async"),h.qZA()),2&t){const t=e.ngIf,n=h.oxw();h.Q6J("axisXLabels",t)("horizontalLines",4)("verticalLines",t.length),h.xp6(1),h.Q6J("height",200)("value",n.value)("xStringify",h.lcZ(2,7,n.xStringify$))("yStringify",n.yStringify)}}class C{constructor(t,e){this.months$=t,this.isE2E=e,this.range=new c.TuiDayRange(c.TuiDay.currentLocal(),c.TuiDay.currentLocal().append({year:1})),this.maxLength={month:12},this.xStringify$=this.months$.pipe((0,p.U)((t=>({month:e,day:n})=>`${t[e]}, ${n}`))),this.yStringify=t=>`${(10*t).toLocaleString("en-US",{maximumFractionDigits:0})} $`}get value(){return this.computeValue(this.range)}computeLabels$({from:t,to:e}){return this.months$.pipe((0,p.U)((n=>Array.from({length:c.TuiMonth.lengthBetween(t,e)+1},((e,o)=>n[t.append({month:o}).month])))))}computeValue({from:t,to:e}){return new Array(c.TuiDay.lengthBetween(t,e)+1).fill(0).reduce(((e,n,o)=>[...e,[t.append({day:o}),this.isE2E?100:(o?e[o-1][1]:100)+10*Math.random()-5]]),[])}}C.ɵfac=function(t){return new(t||C)(h.Y36(l.TUI_MONTHS),h.Y36(c.TUI_IS_E2E))},C.ɵcmp=h.Xpm({type:C,selectors:[["tui-line-days-chart-example-1"]],decls:5,vars:5,consts:[[1,"b-form"],[3,"maxLength","ngModel","ngModelChange"],["class","axes",3,"axisXLabels","horizontalLines","verticalLines",4,"ngIf"],[1,"axes",3,"axisXLabels","horizontalLines","verticalLines"],[1,"chart",3,"height","value","xStringify","yStringify"]],template:function(t,e){1&t&&(h.TgZ(0,"p",0),h.TgZ(1,"tui-input-date-range",1),h.NdJ("ngModelChange",(function(t){return e.range=t})),h._uU(2," Range "),h.qZA(),h.qZA(),h.YNc(3,Z,3,9,"tui-axes",2),h.ALo(4,"async")),2&t&&(h.xp6(1),h.Q6J("maxLength",e.maxLength)("ngModel",e.range),h.xp6(2),h.Q6J("ngIf",h.lcZ(4,3,e.computeLabels$(e.range))))},directives:[f.H,x.d,i.JJ,i.On,o.O5,T.v,P.r],pipes:[o.Ov],styles:["[_nghost-%COMP%]{display:block;width:50rem}.axes[_ngcontent-%COMP%]{height:12.5rem;color:#bc71c9}"],changeDetection:0}),(0,y.gn)([c.tuiPure],C.prototype,"computeLabels$",null),(0,y.gn)([c.tuiPure],C.prototype,"computeValue",null);var M=n(79121),w=n(69775),L=n(19288),_=n(58413),v=n(25917);function A(t){return t.filter(((t,e)=>!(e%2)))}let D=(()=>{class t{constructor(t){this.months$=t}transform({from:t,to:e}){const n=c.TuiDay.lengthBetween(t,e);if(n>90)return this.months$.pipe((0,p.U)((n=>Array.from({length:c.TuiMonth.lengthBetween(t,e)+1},((e,o)=>n[t.append({month:o}).month])))));const o=Array.from({length:n},((e,n)=>t.append({day:n}))),i=function(t){return t.filter((t=>!t.dayOfWeek())).map(String)}(o),a=o.map(String);return n>60?(0,v.of)(A(i)):n>14?(0,v.of)(i):n>7?(0,v.of)(A(a)):(0,v.of)(a)}}return t.ɵfac=function(e){return new(e||t)(h.Y36(l.TUI_MONTHS,16))},t.ɵpipe=h.Yjl({name:"labels",type:t,pure:!0}),t})();var S=n(47305),V=n(35271);function b(t,e){if(1&t&&(h.TgZ(0,"span",7),h.TgZ(1,"small",8),h._uU(2),h.qZA(),h.qZA()),2&t){const t=e.index;h.xp6(2),h.hij("Chart ",t+1,"")}}function N(t,e){if(1&t&&(h._UZ(0,"tui-line-days-chart",13),h.ALo(1,"tuiFilter")),2&t){const t=e.$implicit,n=h.oxw(3);h.Q6J("height",200)("value",h.Dn7(1,2,t,n.filter,n.range))}}function U(t,e){if(1&t&&(h.ynx(0),h.YNc(1,N,2,6,"tui-line-days-chart",12),h.BQk()),2&t){const t=h.oxw(2);h.xp6(1),h.Q6J("ngForOf",t.days)}}function J(t,e){if(1&t&&(h._UZ(0,"tui-line-chart",15),h.ALo(1,"tuiMapper"),h.ALo(2,"tuiFilter")),2&t){const t=e.$implicit,n=h.oxw(3);h.Q6J("height",200)("value",h.Dn7(1,3,h.Dn7(2,7,t,n.filter,n.range),n.toNumbers,n.range))("width",n.getWidth(n.range))}}function O(t,e){if(1&t&&h.YNc(0,J,3,11,"tui-line-chart",14),2&t){const t=h.oxw(2);h.Q6J("ngForOf",t.days)}}function $(t,e){if(1&t&&(h.TgZ(0,"tui-axes",9),h.YNc(1,U,2,1,"ng-container",10),h.YNc(2,O,1,1,"ng-template",null,11,h.W1O),h.qZA()),2&t){const t=e.ngIf,n=h.MAs(3),o=h.oxw(),i=h.MAs(15);h.Q6J("axisXLabels",t)("horizontalLines",4)("tuiLineChartHint",i)("verticalLines",t.length),h.xp6(1),h.Q6J("ngIf",o.getWidth(o.show)>90)("ngIfElse",n)}}function q(t,e){if(1&t&&(h.TgZ(0,"div",7),h.TgZ(1,"span",17),h._uU(2),h.qZA(),h.qZA()),2&t){const t=e.$implicit;h.xp6(2),h.hij("$",t[1].toFixed(0),"")}}function Q(t,e){if(1&t&&(h.TgZ(0,"div",16),h.TgZ(1,"strong"),h._uU(2),h.qZA(),h.qZA(),h.TgZ(3,"div"),h.YNc(4,q,3,1,"div",4),h.qZA()),2&t){const t=e.$implicit,n=h.oxw();h.xp6(2),h.Oqu(n.getDate(t[0][0],n.range.from)),h.xp6(2),h.Q6J("ngForOf",t)}}class Y{constructor(t){this.isE2E=t,this.data=new c.TuiDayRange(c.TuiDay.currentLocal(),c.TuiDay.currentLocal().append({month:5})),this.show=this.data,this.days=this.computeArrays(this.data),this.maxLength={month:6},this.filter=([t],{from:e,to:n})=>t.daySameOrAfter(e)&&t.daySameOrBefore(n),this.toNumbers=(t,{from:e})=>t.map((([t,n])=>[c.TuiDay.lengthBetween(e,t),n]))}get range(){return this.computeRange(this.show)}getWidth({from:t,to:e}){return c.TuiDay.lengthBetween(t,e)}getDate(t,e){return t instanceof c.TuiDay?t:e.append({day:t})}onDataChange(t){this.days=this.computeArrays(t)}computeRange(t){const{from:e,to:n}=t,o=c.TuiDay.lengthBetween(e,n),i=e.dayOfWeek(),a=n.dayOfWeek(),r=i?e.append({day:7-i}):e,u=a?n.append({day:7-a}):n,l=c.TuiDay.lengthBetween(r,u);return o>90?t:o>60?new c.TuiDayRange(r,u.append({day:l%14})):o>14?new c.TuiDayRange(r,u):new c.TuiDayRange(e,n.append({day:o%2}))}computeData({from:t,to:e},n){return new Array(c.TuiDay.lengthBetween(t,e)+1).fill(0).reduce(((e,o,i)=>[...e,[t.append({day:i}),this.isE2E?n:Math.max((i?e[i-1][1]:n)+10*Math.random()-5,0)]]),[]).filter((([t])=>t.dayOfWeek()<5))}computeArrays(t){return[this.computeData(t,100),this.computeData(t,75),this.computeData(t,50)]}}Y.ɵfac=function(t){return new(t||Y)(h.Y36(c.TUI_IS_E2E))},Y.ɵcmp=h.Xpm({type:Y,selectors:[["tui-line-days-chart-example-2"]],decls:16,vars:10,consts:[[1,"controls"],[1,"b-form",3,"maxLength","ngModel","ngModelChange"],[1,"b-form","tui-space_left-4",3,"maxLength","ngModel","ngModelChange"],[1,"legend"],["class","item",4,"ngFor","ngForOf"],["class","axes",3,"axisXLabels","horizontalLines","tuiLineChartHint","verticalLines",4,"ngIf"],["hint",""],[1,"item"],[1,"name"],[1,"axes",3,"axisXLabels","horizontalLines","tuiLineChartHint","verticalLines"],[4,"ngIf","ngIfElse"],["line",""],["class","chart",3,"height","value",4,"ngFor","ngForOf"],[1,"chart",3,"height","value"],["class","chart",3,"height","value","width",4,"ngFor","ngForOf"],[1,"chart",3,"height","value","width"],[1,"tui-space_bottom-2"],[1,"value"]],template:function(t,e){1&t&&(h.TgZ(0,"tui-notification"),h.TgZ(1,"code"),h._uU(2,"TuiLineDaysChart"),h.qZA(),h._uU(3," is used to show data of several months to simplify working with different number of days in months\n"),h.qZA(),h.TgZ(4,"p",0),h.TgZ(5,"tui-input-date-range",1),h.NdJ("ngModelChange",(function(t){return e.data=t}))("ngModelChange",(function(t){return e.onDataChange(t)})),h._uU(6," Data "),h.qZA(),h.TgZ(7,"tui-input-date-range",2),h.NdJ("ngModelChange",(function(t){return e.show=t})),h._uU(8," Visible range "),h.qZA(),h.qZA(),h.TgZ(9,"p",3),h.YNc(10,b,3,1,"span",4),h.qZA(),h.YNc(11,$,4,6,"tui-axes",5),h.ALo(12,"async"),h.ALo(13,"labels"),h.YNc(14,Q,5,2,"ng-template",null,6,h.W1O)),2&t&&(h.xp6(5),h.Q6J("maxLength",e.maxLength)("ngModel",e.data),h.xp6(2),h.Q6J("maxLength",e.maxLength)("ngModel",e.show),h.xp6(3),h.Q6J("ngForOf",e.days),h.xp6(1),h.Q6J("ngIf",h.lcZ(12,6,h.lcZ(13,8,e.show))))},directives:[M.L,f.H,x.d,i.JJ,i.On,o.sg,o.O5,T.v,w.T,L.w,P.r,_.V],pipes:[o.Ov,D,S.S,V.c],styles:['.axes[_ngcontent-%COMP%]{height:12.5rem}.controls[_ngcontent-%COMP%]{display:flex}.controls[_ngcontent-%COMP%]   .b-form[_ngcontent-%COMP%]{flex:1}.legend[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.item[_ngcontent-%COMP%]{color:var(--tui-support-01);display:flex;align-items:center;margin:0 .75rem}.item[_ngcontent-%COMP%]:first-child{color:var(--tui-support-08)}.item[_ngcontent-%COMP%]:last-child{color:var(--tui-support-12)}.item[_ngcontent-%COMP%]:before{content:"";border-bottom:.125rem solid;width:1rem;margin-right:.5rem}.name[_ngcontent-%COMP%]{color:var(--tui-text-01)}.value[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.chart[_ngcontent-%COMP%]{color:var(--tui-support-01);position:absolute;top:0;left:0;width:100%;height:100%}.chart[_ngcontent-%COMP%]:first-child{color:var(--tui-support-08)}.chart[_ngcontent-%COMP%]:last-child{color:var(--tui-support-12)}'],changeDetection:0}),(0,y.gn)([c.tuiPure],Y.prototype,"getWidth",null),(0,y.gn)([c.tuiPure],Y.prototype,"getDate",null),(0,y.gn)([c.tuiPure],Y.prototype,"computeRange",null),(0,y.gn)([c.tuiPure],Y.prototype,"computeData",null);var F=n(10977),H=n(61544),I=n(60404),E=n(83074);function B(t,e){if(1&t&&(h.TgZ(0,"p"),h._uU(1,"Line chart but for days"),h.qZA(),h.TgZ(2,"tui-doc-example",2),h._UZ(3,"tui-line-days-chart-example-1"),h.qZA(),h.TgZ(4,"tui-doc-example",3),h._UZ(5,"tui-line-days-chart-example-2"),h.qZA()),2&t){const t=h.oxw();h.xp6(2),h.Q6J("content",t.example1),h.xp6(2),h.Q6J("content",t.example2)("fullsize",!0)}}function z(t,e){1&t&&h._uU(0," Show dots on chart ")}function k(t,e){1&t&&(h._uU(0," Content of hint for hover. It has "),h.TgZ(1,"code"),h._uU(2,"$implicit"),h.qZA(),h._uU(3," in context with a tuple "),h.TgZ(4,"code"),h._uU(5,"[TuiDay, number]"),h.qZA())}function X(t,e){1&t&&h._uU(0," Axis Y range, pixel scale is 1:1 ")}function R(t,e){1&t&&h._uU(0," Start of Y axis ")}function W(t,e){1&t&&h._uU(0," Smoothing factor from 0 to 99 ")}function j(t,e){1&t&&h._uU(0," Array of data ")}function G(t,e){1&t&&h._uU(0," Function to stringify a value number to a string in axis X hint ")}function K(t,e){1&t&&h._uU(0," Function to stringify a value number to a string in axis Y hint ")}const tt=function(){return[]};function et(t,e){if(1&t){const t=h.EpF();h.TgZ(0,"tui-doc-demo"),h.TgZ(1,"tui-axes",4),h.ALo(2,"async"),h._UZ(3,"tui-line-days-chart",5),h.qZA(),h.qZA(),h.TgZ(4,"tui-doc-documentation"),h.YNc(5,z,1,0,"ng-template",6),h.NdJ("documentationPropertyValueChange",(function(e){return h.CHM(t),h.oxw().dots=e})),h.YNc(6,k,6,0,"ng-template",7),h.ALo(7,"async"),h.NdJ("documentationPropertyValueChange",(function(e){return h.CHM(t),h.oxw().hintContent=e})),h.YNc(8,X,1,0,"ng-template",8),h.NdJ("documentationPropertyValueChange",(function(e){return h.CHM(t),h.oxw().height=e})),h.YNc(9,R,1,0,"ng-template",9),h.NdJ("documentationPropertyValueChange",(function(e){return h.CHM(t),h.oxw().y=e})),h.YNc(10,W,1,0,"ng-template",10),h.NdJ("documentationPropertyValueChange",(function(e){return h.CHM(t),h.oxw().smoothingFactor=e})),h.YNc(11,j,1,0,"ng-template",11),h.NdJ("documentationPropertyValueChange",(function(e){return h.CHM(t),h.oxw().value=e})),h.YNc(12,G,1,0,"ng-template",12),h.ALo(13,"async"),h.NdJ("documentationPropertyValueChange",(function(e){return h.CHM(t),h.oxw().xStringify=e})),h.YNc(14,K,1,0,"ng-template",13),h.NdJ("documentationPropertyValueChange",(function(e){return h.CHM(t),h.oxw().yStringify=e})),h.qZA()}if(2&t){const t=h.oxw();h.xp6(1),h.Q6J("axisXLabels",h.lcZ(2,23,t.labels$)||h.DdM(29,tt))("horizontalLines",4)("verticalLines",3),h.xp6(2),h.Q6J("dots",t.dots)("height",t.height)("hintContent",t.hintContent)("smoothingFactor",t.smoothingFactor)("value",t.value)("xStringify",t.xStringify)("y",t.y)("yStringify",t.yStringify),h.xp6(2),h.Q6J("documentationPropertyValue",t.dots),h.xp6(1),h.Q6J("documentationPropertyValues",h.lcZ(7,25,t.hintContentVariants$))("documentationPropertyValue",t.hintContent),h.xp6(2),h.Q6J("documentationPropertyValue",t.height),h.xp6(1),h.Q6J("documentationPropertyValue",t.y),h.xp6(1),h.Q6J("documentationPropertyValue",t.smoothingFactor),h.xp6(1),h.Q6J("documentationPropertyValues",t.valueVariants)("documentationPropertyValue",t.value),h.xp6(1),h.Q6J("documentationPropertyValues",h.lcZ(13,27,t.xStringifyVariants$))("documentationPropertyValue",t.xStringify),h.xp6(2),h.Q6J("documentationPropertyValues",t.yStringifyVariants)("documentationPropertyValue",t.yStringify)}}function nt(t,e){if(1&t&&(h.TgZ(0,"ol",14),h.TgZ(1,"li"),h.TgZ(2,"p"),h._uU(3," Import "),h.TgZ(4,"code"),h._uU(5,"TuiLineDaysChartModule"),h.qZA(),h._uU(6," into a module where you want to use our component "),h.qZA(),h._UZ(7,"tui-doc-code",15),h.qZA(),h.TgZ(8,"li"),h.TgZ(9,"p"),h._uU(10,"Add to the template:"),h.qZA(),h._UZ(11,"tui-doc-code",16),h.qZA(),h.qZA()),2&t){const t=h.oxw();h.xp6(7),h.Q6J("code",t.exampleModule),h.xp6(4),h.Q6J("code",t.exampleHtml)}}let ot=(()=>{class t{constructor(t){this.months$=t,this.exampleModule=n.e(83405).then(n.t.bind(n,83405,17)),this.exampleHtml=n.e(42231).then(n.t.bind(n,42231,17)),this.example1={TypeScript:n.e(18807).then(n.t.bind(n,18807,17)),HTML:n.e(23889).then(n.t.bind(n,23889,17)),LESS:n.e(43743).then(n.t.bind(n,43743,17))},this.example2={TypeScript:n.e(28904).then(n.t.bind(n,28904,17)),HTML:n.e(66161).then(n.t.bind(n,66161,17)),LESS:n.e(27918).then(n.t.bind(n,27918,17)),"pipe.ts":n.e(9361).then(n.t.bind(n,9361,17))},this.valueVariants=[new Array(91).fill(0).reduce(((t,e,n)=>[...t,[new c.TuiDay(2020,0,1).append({day:n}),(n?t[n-1][1]:100)+20*Math.random()-10]]),[]),[[new c.TuiDay(2020,1,10),10],[new c.TuiDay(2020,1,15),150],[new c.TuiDay(2020,1,17),10],[new c.TuiDay(2020,1,20),10],[new c.TuiDay(2020,1,25),150],[new c.TuiDay(2020,1,27),10]]],this.value=this.valueVariants[0],this.labels$=this.months$.pipe((0,p.U)((t=>Array.from({length:3},((e,n)=>t[n]))))),this.yStringifyVariants=[t=>`${(10*t).toLocaleString("en-US",{maximumFractionDigits:0})} $`],this.xStringifyVariants$=this.months$.pipe((0,p.U)((t=>[({month:e,day:n})=>`${t[e]}, ${n}`]))),this.hintContentVariants$=this.months$.pipe((0,p.U)((t=>["",({$implicit:e})=>`${t[e[0].month]}, ${e[0].day}\n${(10*e[1]).toLocaleString("en-US",{maximumFractionDigits:0})} $`]))),this.yStringify=null,this.xStringify=null,this.hintContent="",this.dots=!1,this.smoothingFactor=0,this.y=0,this.height=200}}return t.ɵfac=function(e){return new(e||t)(h.Y36(l.TUI_MONTHS))},t.ɵcmp=h.Xpm({type:t,selectors:[["example-tui-line-days-chart"]],decls:4,vars:0,consts:[["header","LineDaysChart","package","ADDON-CHARTS","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],["id","complex","heading","Complex",3,"content","fullsize"],[1,"axes",3,"axisXLabels","horizontalLines","verticalLines"],[3,"dots","height","hintContent","smoothingFactor","value","xStringify","y","yStringify"],["documentationPropertyMode","input","documentationPropertyName","dots","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","hintContent","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","height","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","y","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","smoothingFactor","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","value","documentationPropertyType","[TuiDay, number][]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","xStringify","documentationPropertyType","TuiStringHandler<TuiDay> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","yStringify","documentationPropertyType","TuiStringHandler<number> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(h.TgZ(0,"tui-doc-page",0),h.YNc(1,B,6,3,"ng-template",1),h.YNc(2,et,15,30,"ng-template",1),h.YNc(3,nt,12,2,"ng-template",1),h.qZA())},directives:[g.q,m.n,d.f,C,Y,F.F,T.v,P.r,H.z,I.B,E.c],pipes:[o.Ov],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:45.5rem;color:#bc71c9}"],changeDetection:0}),t})(),it=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=h.oAB({type:t}),t.ɵinj=h.cJS({imports:[[o.ez,i.u5,r.TuiAxesModule,s.TuiSelectModule,r.TuiLineChartModule,c.TuiMapperPipeModule,l.TuiNotificationModule,c.TuiFilterPipeModule,r.TuiLineDaysChartModule,s.TuiInputDateRangeModule,u.fV,a.Bz.forChild((0,u.Ve)(ot))]]}),t})()}}]);