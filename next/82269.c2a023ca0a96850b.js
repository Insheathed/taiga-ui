(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[82269],{82269:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiArcChartModule:()=>Y});var a=n(46556),o=n(95829),i=n(65046),r=n(90617),u=n(20682),c=n(96112),m=n(39508),l=n(41942),s=n(73803),p=n(80199),d=n(21848),h=n(35379),v=n(66399),I=n(93815),x=n(34481),y=n(5806),g=n(19724),b=n(3734);let P=(()=>{var e;class t{constructor(){this.value=[40,30,20,10],this.activeItemIndex=NaN}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.VBU({type:e,selectors:[["tui-arc-chart-example-1"]],decls:16,vars:14,consts:[["decimal","never",1,"b-form",3,"step","ngModel","ngModelChange"],[1,"wrapper"],["size","m",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],["size","l",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],["size","xl",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"]],template:function(e,t){1&e&&(m.j41(0,"tui-input-number",0),m.bIt("ngModelChange",(function(e){return t.activeItemIndex=e})),m.EFF(1," activeItemIndex\n"),m.k0s(),m.j41(2,"div",1)(3,"tui-arc-chart",2),m.bIt("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),m.EFF(4," Total value "),m.k0s(),m.j41(5,"tui-arc-chart",3),m.bIt("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),m.EFF(6," Total value "),m.j41(7,"div"),m.EFF(8,"Label"),m.k0s()(),m.j41(9,"tui-arc-chart",4),m.bIt("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),m.j41(10,"span"),m.EFF(11),m.nI1(12,"async"),m.nI1(13,"tuiAmount"),m.k0s(),m.j41(14,"div"),m.EFF(15,"Not bad!"),m.k0s()()()),2&e&&(m.Y8G("step",1)("ngModel",t.activeItemIndex),m.R7$(3),m.Y8G("value",t.value)("activeItemIndex",t.activeItemIndex),m.R7$(2),m.Y8G("value",t.value)("activeItemIndex",t.activeItemIndex),m.R7$(4),m.Y8G("value",t.value)("activeItemIndex",t.activeItemIndex),m.R7$(2),m.JRh(m.bMT(12,9,m.i5U(13,11,123456,"RUB"))))},dependencies:[o.BC,o.vS,l.W,y.Z,g.x,a.Jj,b.f],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:1rem;--tui-chart-0: var(--tui-support-12);--tui-chart-1: var(--tui-support-01);--tui-chart-2: var(--tui-support-03);--tui-chart-3: var(--tui-support-09)}"],changeDetection:0}),t})();var V=n(79243);const f=function(){return[40]},C=function(){return[20]};let F=(()=>{var e;class t{constructor(){this.labels=["Food","Cafe","Open Source","Taxi","other"],this.value=[13769,12367,10172,3018,2592],this.sum=(0,V.tuiSum)(...this.value)}getValue(e){return Number.isNaN(e)?this.sum:this.value[e]}getLabel(e){return Number.isNaN(e)?"Total":this.labels[e]}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.VBU({type:e,selectors:[["tui-arc-chart-example-2"]],decls:6,vars:4,consts:[[1,"wrapper"],["size","l",3,"value"],["maxLabel","","minLabel","","size","l",1,"stacked",3,"value"]],template:function(e,t){1&e&&(m.j41(0,"div",0),m.nrm(1,"tui-arc-chart",1),m.j41(2,"tui-arc-chart",2),m.EFF(3," +20% "),m.j41(4,"div"),m.EFF(5,"For filling in last name"),m.k0s()()()),2&e&&(m.R7$(1),m.Y8G("value",m.lJ4(2,f)),m.R7$(1),m.Y8G("value",m.lJ4(3,C)))},dependencies:[l.W],styles:[".wrapper[_ngcontent-%COMP%]{position:relative;--tui-chart-0: var(--tui-support-03)}.stacked[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;--tui-secondary: transparent;--tui-chart-0: var(--tui-support-04)}"],changeDetection:0}),t})();function N(e,t){if(1&e&&(m.j41(0,"tui-doc-example",2),m.nrm(1,"tui-arc-chart-example-1"),m.k0s(),m.j41(2,"tui-doc-example",3),m.nrm(3,"tui-arc-chart-example-2"),m.k0s()),2&e){const e=m.XpG();m.Y8G("content",e.example1),m.R7$(2),m.Y8G("content",e.example2)}}function j(e,t){1&e&&m.EFF(0," Maximum value ")}function E(e,t){1&e&&m.EFF(0," Label for maximum value ")}function G(e,t){1&e&&m.EFF(0," Label for minimum value ")}function k(e,t){1&e&&m.EFF(0," Size ")}function L(e,t){1&e&&m.EFF(0," Value ")}function M(e,t){1&e&&m.EFF(0," Index of selected arc ")}function T(e,t){if(1&e){const e=m.RV6();m.j41(0,"tui-doc-demo")(1,"tui-arc-chart",4),m.bIt("activeItemIndexChange",(function(t){m.eBV(e);const n=m.XpG();return m.Njj(n.activeItemIndex=t)})),m.k0s()(),m.j41(2,"tui-doc-documentation"),m.DNE(3,j,1,0,"ng-template",5),m.bIt("documentationPropertyValueChange",(function(t){m.eBV(e);const n=m.XpG();return m.Njj(n.max=t)})),m.DNE(4,E,1,0,"ng-template",6),m.bIt("documentationPropertyValueChange",(function(t){m.eBV(e);const n=m.XpG();return m.Njj(n.maxLabel=t)})),m.DNE(5,G,1,0,"ng-template",7),m.bIt("documentationPropertyValueChange",(function(t){m.eBV(e);const n=m.XpG();return m.Njj(n.minLabel=t)})),m.DNE(6,k,1,0,"ng-template",8),m.bIt("documentationPropertyValueChange",(function(t){m.eBV(e);const n=m.XpG();return m.Njj(n.size=t)})),m.DNE(7,L,1,0,"ng-template",9),m.bIt("documentationPropertyValueChange",(function(t){m.eBV(e);const n=m.XpG();return m.Njj(n.value=t)})),m.DNE(8,M,1,0,"ng-template",10),m.bIt("documentationPropertyValueChange",(function(t){m.eBV(e);const n=m.XpG();return m.Njj(n.activeItemIndex=t)})),m.k0s()}if(2&e){const e=m.XpG();m.R7$(1),m.Y8G("max",e.max)("maxLabel",e.maxLabel)("minLabel",e.minLabel)("size",e.size)("value",e.value)("activeItemIndex",e.activeItemIndex),m.R7$(2),m.Y8G("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),m.R7$(1),m.Y8G("documentationPropertyValue",e.maxLabel),m.R7$(1),m.Y8G("documentationPropertyValue",e.minLabel),m.R7$(1),m.Y8G("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),m.R7$(1),m.Y8G("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value),m.R7$(1),m.Y8G("documentationPropertyValue",e.activeItemIndex)}}function R(e,t){if(1&e&&(m.j41(0,"ol",11)(1,"li")(2,"p"),m.EFF(3," Import "),m.j41(4,"code"),m.EFF(5,"TuiArcChartModule"),m.k0s(),m.EFF(6," into a module where you want to use our component "),m.k0s(),m.nrm(7,"tui-doc-code",12),m.k0s(),m.j41(8,"li")(9,"p"),m.EFF(10,"Add to the template:"),m.k0s(),m.nrm(11,"tui-doc-code",13),m.k0s()()),2&e){const e=m.XpG();m.R7$(7),m.Y8G("code",e.exampleModule),m.R7$(4),m.Y8G("code",e.exampleHtml)}}let z=(()=>{var e;class t{constructor(){this.exampleModule=n.e(24276).then(n.t.bind(n,24276,17)),this.exampleHtml=n.e(19902).then(n.t.bind(n,19902,17)),this.example1={TypeScript:n.e(5542).then(n.t.bind(n,5542,17)),HTML:n.e(78138).then(n.t.bind(n,78138,17)),LESS:n.e(22094).then(n.t.bind(n,22094,17))},this.example2={TypeScript:n.e(5459).then(n.t.bind(n,5459,17)),HTML:n.e(21923).then(n.t.bind(n,21923,17)),LESS:n.e(96683).then(n.t.bind(n,96683,17))},this.valueVariants=[[42],[40,30,20,10],[13769,10172,3018,2592]],this.value=this.valueVariants[0],this.maxVariants=[100,1e4,5e4],this.max=this.maxVariants[0],this.sizeVariants=["m","l","xl"],this.size=this.sizeVariants[0],this.minLabel="0%",this.maxLabel="100%",this.activeItemIndex=NaN}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.VBU({type:e,selectors:[["example-tui-arc-chart"]],decls:4,vars:0,consts:[["header","ArcChart","package","ADDON-CHARTS","type","components"],["pageTab",""],["id","sizes","heading","Sizes",3,"content"],["id","stacked","heading","Stacked",3,"content"],[1,"chart",3,"max","maxLabel","minLabel","size","value","activeItemIndex","activeItemIndexChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxLabel","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","minLabel","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","TuiSizeXL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","value","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","activeItemIndex","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(m.j41(0,"tui-doc-page",0),m.DNE(1,N,4,2,"ng-template",1),m.DNE(2,T,9,15,"ng-template",1),m.DNE(3,R,12,2,"ng-template",1),m.k0s())},dependencies:[l.W,s.t,p.p,d.c,h.W,v.P,I.T,x.o,P,F],styles:[".chart[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0}),t})(),Y=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=m.$C({type:e}),e.ɵinj=m.G2t({imports:[a.MD,i.iI,o.YN,r.TuiArcChartModule,u.lK,i.iI.forChild((0,u.CC)(z)),c.TuiInputNumberModule]}),t})()}}]);