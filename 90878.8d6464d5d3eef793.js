(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[90878],{90878:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var a,i=t(84911),s=t(4594),o=t(35548),r=t(66094),l=t(97177),c=t(96038),g=t(42436),h=t(39998),u=t(51160),p=t(72265),m=t(13565);function f(e,n){if(1&e&&(o.TgZ(0,"tui-axes",2),o._UZ(1,"tui-line-days-chart",3),o.ALo(2,"async"),o.qZA()),2&e){const e=n.ngIf,t=o.oxw();o.Q6J("axisXLabels",e)("horizontalLines",4)("verticalLines",e.length-1),o.xp6(1),o.Q6J("height",200)("value",t.value)("xStringify",o.lcZ(2,7,t.xStringify$))("yStringify",t.yStringify)}}class d{constructor(){this.isE2E=(0,o.f3M)(c.oDT),this.months$=(0,o.f3M)(g.$Rv),this.range=new c.VRe(c.TU1.currentLocal(),c.TU1.currentLocal().append({year:1})),this.maxLength={month:12},this.xStringify$=this.months$.pipe((0,u.U)((e=>({month:n,day:t})=>`${e[n]}, ${t}`))),this.yStringify=e=>`${(10*e).toLocaleString("en-US",{maximumFractionDigits:0})} $`}get value(){return this.computeValue(this.range)}computeLabels$({from:e,to:n}){return this.months$.pipe((0,u.U)((t=>[...Array.from({length:c.qld.lengthBetween(e,n)+1},((n,a)=>t[e.append({month:a}).month])),null])))}computeValue({from:e,to:n}){return new Array(c.TU1.lengthBetween(e,n)+1).fill(0).reduce(((n,t,a)=>[...n,[e.append({day:a}),this.isE2E?100:(a?n[a-1][1]:100)+10*Math.random()-5]]),[])}}(a=d).ɵfac=function(e){return new(e||a)},a.ɵcmp=o.Xpm({type:a,selectors:[["ng-component"]],standalone:!0,exportAs:"Example1",features:[o.jDz],decls:5,vars:5,consts:[[3,"maxLength","ngModel","ngModelChange"],["class","axes",3,"axisXLabels","horizontalLines","verticalLines",4,"ngIf"],[1,"axes",3,"axisXLabels","horizontalLines","verticalLines"],[1,"chart",3,"height","value","xStringify","yStringify"]],template:function(e,n){1&e&&(o.TgZ(0,"p")(1,"tui-input-date-range",0),o.NdJ("ngModelChange",(function(e){return n.range=e})),o._uU(2," Range "),o.qZA()(),o.YNc(3,f,3,9,"tui-axes",1),o.ALo(4,"async")),2&e&&(o.xp6(1),o.Q6J("maxLength",n.maxLength)("ngModel",n.range),o.xp6(2),o.Q6J("ngIf",o.lcZ(4,3,n.computeLabels$(n.range))))},dependencies:[h.sR_,p.H,m.d,l.Sb,s.O5,s.Ov,l.gE,r.u5,r.JJ,r.On],styles:["[_nghost-%COMP%]{display:block;width:50rem}.axes[_ngcontent-%COMP%]{height:12.5rem;color:#bc71c9}"],changeDetection:0}),(0,i.gn)([c.UMq],d.prototype,"computeLabels$",null),(0,i.gn)([c.UMq],d.prototype,"computeValue",null);const y=d}}]);