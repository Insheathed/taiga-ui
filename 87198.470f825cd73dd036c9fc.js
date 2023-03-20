"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[87198],{87198:($,x,n)=>{n.r(x),n.d(x,{ExampleAnimationsModule:()=>X});var a=n(12057),d=n(24751),v=n(33982),f=n(29851),g=n(50259),o=n(3497),O=n(55908),t=n(74788),M=n(88331),A=n(37159),E=n(88135),Z=n(47044),P=n(57068),u=n(64762),T=n(76189);function y(i,l){if(1&i&&(t.TgZ(0,"div",2),t._uU(1," A long time ago in a galaxy far, far away....\n"),t.qZA()),2&i){const e=t.oxw();t.Q6J("@tuiHeightCollapse",e.getAnimation(e.speed))}}class s{constructor(){this.speed=0,this.isOpen=!1}getAnimation(l){return{value:"",params:{duration:l}}}}function I(i,l){if(1&i&&t._UZ(0,"div",2),2&i){const e=t.oxw();t.Q6J("@tuiWidthCollapse",e.getAnimation(e.speed))}}s.\u0275fac=function(l){return new(l||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["tui-height-collapse-example"]],inputs:{speed:"speed"},decls:3,vars:2,consts:[["tuiButton","","appearance","outline","type","button",1,"button",3,"click"],["class","container",4,"ngIf"],[1,"container"]],template:function(l,e){1&l&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return e.isOpen=!e.isOpen}),t._uU(1),t.qZA(),t.YNc(2,y,2,1,"div",1)),2&l&&(t.xp6(1),t.hij(" ",e.isOpen?"Hide me":"Show opening crawl","\n"),t.xp6(1),t.Q6J("ngIf",e.isOpen))},directives:[T.v,a.O5],styles:[".button[_ngcontent-%COMP%]{width:15rem;border-radius:1rem 1rem 0 0}.container[_ngcontent-%COMP%]{height:6rem;width:15rem;background:var(--tui-secondary);overflow:hidden;background:#222;color:var(--tui-warning-fill-night)}"],data:{animation:[o.tuiHeightCollapse]},changeDetection:0}),(0,u.gn)([g.tuiPure],s.prototype,"getAnimation",null);class p{constructor(){this.speed=0,this.isOpen=!0}getAnimation(l){return{value:"",params:{duration:l}}}}p.\u0275fac=function(l){return new(l||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["tui-width-collapse-example"]],inputs:{speed:"speed"},decls:3,vars:2,consts:[["tuiButton","","appearance","outline","size","xs","type","button",1,"switch",3,"click"],["class","plasma",4,"ngIf"],[1,"plasma"]],template:function(l,e){1&l&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return e.isOpen=!e.isOpen}),t._uU(1),t.qZA(),t.YNc(2,I,1,1,"div",1)),2&l&&(t.xp6(1),t.hij(" ",e.isOpen?"ON":"OFF","\n"),t.xp6(1),t.Q6J("ngIf",e.isOpen))},directives:[T.v,a.O5],styles:["[_nghost-%COMP%]{display:flex;align-items:center}.switch[_ngcontent-%COMP%]{height:1rem;width:20%;border-radius:1rem 0 0 1rem}.plasma[_ngcontent-%COMP%]{width:80%;height:.5rem;border-radius:0 .75rem .75rem 0;background:linear-gradient(to bottom,var(--tui-support-03) 0%,white 50%,white 70%,var(--tui-support-03) 100%);filter:blur(1px)}"],data:{animation:[o.tuiWidthCollapse]},changeDetection:0}),(0,u.gn)([g.tuiPure],p.prototype,"getAnimation",null);var S=n(94402),J=n(25917),F=n(94612),L=n(71289),Q=n(79196),H=n(39761);function U(i,l){if(1&i&&(t.TgZ(0,"h3"),t._uU(1," STOP KILLING VOLCANOES TO MAKE LAVA LAMPS "),t.qZA()),2&i){const e=t.oxw();t.Q6J("@tuiFadeIn",e.getAnimation(e.speed))}}class c{constructor(){this.speed=0,this.isShown$=(0,S.D)([!1,!0]).pipe((0,F.b)(l=>(0,J.of)(l).pipe((0,L.g)(1.5*this.speed))),(0,Q.r)(),(0,H.O)(!0))}getAnimation(l){return{value:"",params:{duration:l}}}}c.\u0275fac=function(l){return new(l||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["tui-fade-in-example"]],inputs:{speed:"speed"},decls:3,vars:3,consts:[[1,"poster"],[4,"ngIf"]],template:function(l,e){1&l&&(t.TgZ(0,"div",0),t.YNc(1,U,2,1,"h3",1),t.ALo(2,"async"),t.qZA()),2&l&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.isShown$)))},directives:[a.O5],pipes:[a.Ov],styles:[".poster[_ngcontent-%COMP%]{height:3rem;border:5px solid var(--tui-base-03);text-align:center}"],data:{animation:[o.tuiFadeIn]},changeDetection:0}),(0,u.gn)([g.tuiPure],c.prototype,"getAnimation",null);var N=n(34880);function W(i,l){if(1&i&&t._UZ(0,"tui-svg",4),2&i){const e=t.oxw(2);t.Q6J("@tuiScaleIn",e.getAnimation(e.speed))}}function D(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"li",2),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return r.completed=!r.completed}),t._uU(1),t.YNc(2,W,1,1,"tui-svg",3),t.qZA()}if(2&i){const e=l.$implicit;t.xp6(1),t.hij(" ",e.title," "),t.xp6(1),t.Q6J("ngIf",e.completed)}}class m{constructor(){this.speed=0,this.todoTasks=[{title:"Install Angular",completed:!0},{title:"Install Taiga UI",completed:!1},{title:'Look into "Getting Started"',completed:!1}]}getAnimation(l){return{value:"",params:{duration:l}}}}function Y(i,l){if(1&i&&(t.TgZ(0,"span",11),t._uU(1),t.qZA()),2&i){const e=l.$implicit;t.xp6(1),t.hij(" ",e,"ms ")}}function j(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"label",2),t.TgZ(1,"input",3),t.NdJ("ngModelChange",function(C){return t.CHM(e),t.oxw().speed=C}),t.qZA(),t.TgZ(2,"div",4),t.YNc(3,Y,2,1,"span",5),t.qZA(),t.qZA(),t.TgZ(4,"tui-doc-example",6),t._UZ(5,"tui-height-collapse-example",7),t.qZA(),t.TgZ(6,"tui-doc-example",8),t._UZ(7,"tui-width-collapse-example",7),t.qZA(),t.TgZ(8,"tui-doc-example",9),t._UZ(9,"tui-fade-in-example",7),t.qZA(),t.TgZ(10,"tui-doc-example",10),t._UZ(11,"tui-scale-in-example",7),t.qZA()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("segments",5)("min",0)("max",3e3)("step",100)("ngModel",e.speed),t.xp6(2),t.Q6J("ngForOf",e.speedTicksLabels),t.xp6(1),t.Q6J("content",e.heightCollapseExample),t.xp6(1),t.Q6J("speed",e.speed),t.xp6(1),t.Q6J("content",e.widthCollapseExample),t.xp6(1),t.Q6J("speed",e.speed),t.xp6(1),t.Q6J("content",e.fadeInExample),t.xp6(1),t.Q6J("speed",e.speed),t.xp6(1),t.Q6J("content",e.scaleInExample),t.xp6(1),t.Q6J("speed",e.speed)}}m.\u0275fac=function(l){return new(l||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["tui-scale-in-example"]],inputs:{speed:"speed"},decls:6,vars:1,consts:[[1,"tui-list"],["class","tui-list__item",3,"click",4,"ngFor","ngForOf"],[1,"tui-list__item",3,"click"],["src","tuiIconCheckLarge",4,"ngIf"],["src","tuiIconCheckLarge"]],template:function(l,e){1&l&&(t.TgZ(0,"h3"),t._uU(1,"TODO:"),t.qZA(),t.TgZ(2,"p"),t._uU(3,"(click on item if it is finished)"),t.qZA(),t.TgZ(4,"ul",0),t.YNc(5,D,3,2,"li",1),t.qZA()),2&l&&(t.xp6(5),t.Q6J("ngForOf",e.todoTasks))},directives:[a.sg,a.O5,N.P],styles:["li[_ngcontent-%COMP%]{height:2rem;cursor:pointer}"],data:{animation:[o.tuiScaleIn]},changeDetection:0}),(0,u.gn)([g.tuiPure],m.prototype,"getAnimation",null);let B=(()=>{class i{constructor(){this.speed=1e3,this.speedTicksLabels=[0,600,1200,1800,2400,3e3],this.heightCollapseExample={HTML:n.e(57683).then(n.t.bind(n,57683,17)),TypeScript:n.e(46770).then(n.t.bind(n,46770,17)),LESS:n.e(86233).then(n.t.bind(n,86233,17))},this.widthCollapseExample={HTML:n.e(38979).then(n.t.bind(n,38979,17)),TypeScript:n.e(66292).then(n.t.bind(n,66292,17)),LESS:n.e(38955).then(n.t.bind(n,38955,17))},this.fadeInExample={HTML:n.e(80570).then(n.t.bind(n,80570,17)),TypeScript:n.e(2212).then(n.t.bind(n,2212,17)),LESS:n.e(19166).then(n.t.bind(n,19166,17))},this.scaleInExample={HTML:n.e(37370).then(n.t.bind(n,37370,17)),TypeScript:n.e(35861).then(n.t.bind(n,35861,17)),LESS:n.e(83165).then(n.t.bind(n,83165,17))}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["example-animations"]],decls:2,vars:0,consts:[["header","Animations","package","CORE","path","core/animations"],["pageTab",""],["tuiLabel","Speed of animations:"],["tuiSlider","","type","range",3,"segments","min","max","step","ngModel","ngModelChange"],[1,"labels"],["class","label",4,"ngFor","ngForOf"],["id","tui-height-collapse","heading","tuiHeightCollapse",3,"content"],[3,"speed"],["id","tui-width-collapse","heading","tuiWidthCollapse",3,"content"],["id","tui-fade-in","heading","tuiFadeIn",3,"content"],["id","tui-scale-in","heading","tuiScaleIn",3,"content"],[1,"label"]],template:function(e,h){1&e&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,j,12,14,"ng-template",1),t.qZA())},directives:[M.q,A.n,E.A,Z.i,d.eT,d.Fj,d.JJ,d.On,a.sg,P.f,s,p,c,m],styles:[".labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],changeDetection:0}),i})(),X=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[a.ez,d.u5,f.fV,O.TuiSliderModule,o.TuiButtonModule,g.TuiLetModule,o.TuiLabelModule,o.TuiSvgModule,v.Bz.forChild((0,f.Ve)(B))]]}),i})()}}]);