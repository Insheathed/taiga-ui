(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{"kCF/":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiProgressBarModule",(function(){return ne}));var r=n("An66"),a=n("1VvW"),o=n("SVIu"),i=n("Qq0t"),s=n("dvRg"),l=n("kZht"),c=n("OZlg"),p=n("e0eB"),d=n("iyc4"),m=n("l4xa"),u=n("ROBh"),g=n("8lHc"),b=n("YtkY"),h=n("jIqt"),f=n("rWYE");let y=(()=>{class e{constructor(e){this.isCypress=e,this.value$=this.isCypress?Object(u.a)(40):Object(g.a)(300,300).pipe(Object(b.a)(e=>e+30),Object(h.a)(30))}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](m.P))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-progress-bar-example-1"]],decls:2,vars:3,consts:[["tuiProgressBar","","max","100",1,"progress",3,"value"]],template:function(e,t){1&e&&(l["\u0275\u0275element"](0,"progress",0),l["\u0275\u0275pipe"](1,"async")),2&e&&l["\u0275\u0275property"]("value",l["\u0275\u0275pipeBind1"](1,1,t.value$))},directives:[f.a],pipes:[r.b],styles:[".progress[_ngcontent-%COMP%]{width:50%}@media screen and (max-width:37.4625em){.progress[_ngcontent-%COMP%]{width:100%}}"],changeDetection:0}),e})();var S,v,C,x=n("i8gj");S=$localize`:␟ab3eb576a4d2b77500066bb0f71f51331629c494␟1101375577014023805: Single color
`,v=$localize`:␟7342d3c89bf9afecda17d4cd92d27708faeaa2b8␟5511912390234747958: With fancy color gradient
`,C=$localize`:␟c68f6db0a6492b25e0e1e6e45301901e6106a18b␟7426878659956347852: Multicolor segments
`;let P=(()=>{class e{constructor(e){this.isCypress=e,this.fastValue$=this.isCypress?Object(u.a)(80):Object(g.a)(500,100),this.slowValue$=this.isCypress?Object(u.a)(4):Object(g.a)(500,2e3),this.colors=["var(--tui-support-01)","var(--tui-support-21)","lightskyblue","#3682db","var(--tui-primary)"]}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](m.P))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-progress-bar-example-2"]],decls:32,vars:15,consts:[[1,"description"],["tuiProgressBar","","max","100",1,"progress",3,"value"],["tuiProgressBar","","max","100","color","linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))",1,"progress",3,"value"],["tuiProgressBar","","max","100",1,"progress",3,"value","tuiProgressColorSegments"],["tuiProgressBar","",1,"progress",3,"value","max","tuiProgressColorSegments"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"h6",0),l["\u0275\u0275i18n"](1,S),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275text"](3," Use "),l["\u0275\u0275elementStart"](4,"code"),l["\u0275\u0275text"](5,"<progress />"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](6," 's CSS-property "),l["\u0275\u0275elementStart"](7,"code"),l["\u0275\u0275text"](8,"color"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](9," to set solid color of progress indicator.\n"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](10,"progress",1),l["\u0275\u0275pipe"](11,"async"),l["\u0275\u0275elementStart"](12,"h6",0),l["\u0275\u0275i18n"](13,v),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"p"),l["\u0275\u0275text"](15," Set component's input property "),l["\u0275\u0275elementStart"](16,"code"),l["\u0275\u0275text"](17,"color"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](18," to get more complex color combinations.\n"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](19,"progress",2),l["\u0275\u0275pipe"](20,"async"),l["\u0275\u0275elementStart"](21,"h6",0),l["\u0275\u0275i18n"](22,C),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](23,"p"),l["\u0275\u0275text"](24," Use "),l["\u0275\u0275elementStart"](25,"code"),l["\u0275\u0275text"](26,"tuiProgressColorSegments"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](27," directive to to get multicolor segments.\n"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](28,"progress",3),l["\u0275\u0275pipe"](29,"async"),l["\u0275\u0275element"](30,"progress",4),l["\u0275\u0275pipe"](31,"async")),2&e&&(l["\u0275\u0275advance"](10),l["\u0275\u0275property"]("value",l["\u0275\u0275pipeBind1"](11,7,t.fastValue$)),l["\u0275\u0275advance"](9),l["\u0275\u0275property"]("value",l["\u0275\u0275pipeBind1"](20,9,t.fastValue$)),l["\u0275\u0275advance"](9),l["\u0275\u0275property"]("value",l["\u0275\u0275pipeBind1"](29,11,t.fastValue$))("tuiProgressColorSegments",t.colors),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("value",l["\u0275\u0275pipeBind1"](31,13,t.slowValue$))("max",t.colors.length)("tuiProgressColorSegments",t.colors))},directives:[f.a,x.a],pipes:[r.b],styles:[".progress[_ngcontent-%COMP%]{width:70%;margin-bottom:1rem;color:var(--tui-support-09)}@media screen and (max-width:37.4625em){.progress[_ngcontent-%COMP%]{width:100%}}.description[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin-bottom:1rem}.description[_ngcontent-%COMP%]:first-child{margin-top:0}"],changeDetection:0}),e})(),E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-progress-bar-example-3"]],decls:2,vars:2,consts:[["tuiProgressBar","","max","100","size","s",1,"progress",3,"value"],["tuiProgressBar","","max","100","size","m",1,"progress",3,"value"]],template:function(e,t){1&e&&(l["\u0275\u0275element"](0,"progress",0),l["\u0275\u0275element"](1,"progress",1)),2&e&&(l["\u0275\u0275property"]("value",60),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("value",70))},directives:[f.a],styles:[".progress[_ngcontent-%COMP%]{width:50%;margin-bottom:1rem}@media screen and (max-width:37.4625em){.progress[_ngcontent-%COMP%]{width:100%}}"],changeDetection:0}),e})();var T=n("B8NW"),_=n("F5EF");function O(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",1),l["\u0275\u0275text"](1),l["\u0275\u0275element"](2,"progress",2),l["\u0275\u0275elementEnd"]()),2&e){const e=t.ngIf,n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",e,"% "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("max",n.max)("value",e)}}let $=(()=>{class e{constructor(e){this.isCypress=e,this.max=100,this.value$=this.isCypress?Object(u.a)(30):Object(g.a)(300,300).pipe(Object(b.a)(e=>e+30),Object(h.a)(30),Object(T.a)(e=>e<=this.max))}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](m.P))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-progress-bar-example-4"]],decls:2,vars:3,consts:[["tuiProgressLabel","","class","label-wrapper",4,"ngIf"],["tuiProgressLabel","",1,"label-wrapper"],["tuiProgressBar","",3,"max","value"]],template:function(e,t){1&e&&(l["\u0275\u0275template"](0,O,3,3,"label",0),l["\u0275\u0275pipe"](1,"async")),2&e&&l["\u0275\u0275property"]("ngIf",l["\u0275\u0275pipeBind1"](1,1,t.value$))},directives:[r.t,_.a,f.a],pipes:[r.b],styles:[".label-wrapper[_ngcontent-%COMP%]{width:50%}@media screen and (max-width:37.4625em){.label-wrapper[_ngcontent-%COMP%]{width:100%}}"],changeDetection:0}),e})(),A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-progress-bar-example-5"]],decls:3,vars:2,consts:[["tuiProgressLabel","",1,"label-wrapper"],["tuiProgressBar","","max","4","size","s",1,"progress",3,"value"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"label",0),l["\u0275\u0275element"](1,"progress",1),l["\u0275\u0275element"](2,"progress",1),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("value",3),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("value",1))},directives:[_.a,f.a],styles:[".label-wrapper[_ngcontent-%COMP%]{width:50%}@media screen and (max-width:37.4625em){.label-wrapper[_ngcontent-%COMP%]{width:100%}}.progress[_ngcontent-%COMP%]:first-child{color:#a3ecb3}.progress[_ngcontent-%COMP%]:nth-child(2){color:#39b54a}"],changeDetection:0}),e})();var w,V,z=n("EPR0"),M=n("yHor"),L=n("zGJC"),G=n("yZWP"),D=n("u8jZ");w=$localize`:␟4ed7053c5c74592c268021eeec7e822e85123eef␟8624557147577439768:${"\ufffd#2\ufffd"}:START_TAG_DT:${"[\ufffd#3\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:tuiProgressBar${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#2\ufffd"}:CLOSE_TAG_DT:${"\ufffd#4\ufffd"}:START_TAG_DD: – attribute component for native html tag ${"[\ufffd#3\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:<progress />${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: . ${"\ufffd/#4\ufffd"}:CLOSE_TAG_DD:`,w=l["\u0275\u0275i18nPostprocess"](w),V=$localize`:␟1ee2ab2cf8b61ffa7e26891d9ff65b84f589b500␟1959442075124179089:${"\ufffd#8\ufffd"}:START_TAG_STRONG:Usage:${"\ufffd/#8\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd#9\ufffd"}:START_TAG_CODE:<progress tuiProgressBar value="40" max="100"></progress>${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: . `;const B=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],R=["heading",$localize`:␟d7a340fb882e7e5f76d0949bbfa10811361d7e93␟1598512795966065598:Multicolor`],j=["heading",$localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`],I=["heading",$localize`:␟43cf922b4e2e453f2fcd8e43be9fd18e96f9b74c␟8720306042838547123:With label`],N=["heading",$localize`:␟dd4002bde6f74a0a30ec223b660ed5d4458c127d␟1765388942323233214:Stacked progress bars`];function k(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"dl"),l["\u0275\u0275i18nStart"](1,w),l["\u0275\u0275elementStart"](2,"dt"),l["\u0275\u0275element"](3,"code"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"dd"),l["\u0275\u0275element"](5,"code"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"p"),l["\u0275\u0275i18nStart"](7,V),l["\u0275\u0275element"](8,"strong"),l["\u0275\u0275element"](9,"code"),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"tui-doc-example",2),l["\u0275\u0275i18nAttributes"](11,B),l["\u0275\u0275element"](12,"tui-progress-bar-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"tui-doc-example",3),l["\u0275\u0275i18nAttributes"](14,R),l["\u0275\u0275element"](15,"tui-progress-bar-example-2"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"tui-doc-example",4),l["\u0275\u0275i18nAttributes"](17,j),l["\u0275\u0275element"](18,"tui-progress-bar-example-3"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](19,"tui-doc-example",5),l["\u0275\u0275i18nAttributes"](20,I),l["\u0275\u0275element"](21,"tui-progress-bar-example-4"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](22,"tui-doc-example",6),l["\u0275\u0275i18nAttributes"](23,N),l["\u0275\u0275element"](24,"tui-progress-bar-example-5"),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](10),l["\u0275\u0275property"]("content",e.basicExample),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.multiColorExample),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.sizesExample),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.labelExample),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.stackedExample)}}var H,W,K,Z,F,U;function q(e,t){1&e&&(l["\u0275\u0275i18nStart"](0,H),l["\u0275\u0275element"](1,"a",12),l["\u0275\u0275element"](2,"code"),l["\u0275\u0275i18nEnd"]())}function J(e,t){1&e&&(l["\u0275\u0275i18nStart"](0,W),l["\u0275\u0275element"](1,"a",12),l["\u0275\u0275element"](2,"code"),l["\u0275\u0275i18nEnd"]())}function Y(e,t){1&e&&l["\u0275\u0275i18n"](0,K)}function Q(e,t){1&e&&(l["\u0275\u0275i18nStart"](0,Z),l["\u0275\u0275elementStart"](1,"p"),l["\u0275\u0275element"](2,"code"),l["\u0275\u0275element"](3,"code"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275i18nEnd"]())}function X(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"tui-doc-demo"),l["\u0275\u0275element"](1,"progress",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-doc-documentation"),l["\u0275\u0275template"](3,q,3,0,"ng-template",8),l["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().value=t})),l["\u0275\u0275template"](4,J,3,0,"ng-template",9),l["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().max=t})),l["\u0275\u0275template"](5,Y,1,0,"ng-template",10),l["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().size=t})),l["\u0275\u0275template"](6,Q,4,0,"ng-template",11),l["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().color=t})),l["\u0275\u0275elementEnd"]()}if(2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("value",e.value)("max",e.max)("size",e.size)("color",e.color),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("documentationPropertyValue",e.value),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValue",e.max),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValues",e.colorVariants)("documentationPropertyValue",e.color)}}function ee(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"ol",13),l["\u0275\u0275elementStart"](1,"li"),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275i18nStart"](3,F),l["\u0275\u0275element"](4,"code"),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](5,"tui-doc-code",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"li"),l["\u0275\u0275elementStart"](7,"p"),l["\u0275\u0275i18n"](8,U),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](9,"tui-doc-code",15),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](5),l["\u0275\u0275property"]("code",e.exampleModule),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("code",e.exampleHtml)}}H=$localize`:␟ba74cd5237673a75a1bbbbfe36cf54bc1fcaff01␟4894529704152782945: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: value ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<progress />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,W=$localize`:␟1826095affba926e4075210d4d2fe1f0b5281214␟5682634365450052698: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: max ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<progress />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,K=$localize`:␟d9f4db967c9e78b6e28feafdf3c916002fb067c7␟5415347527315359817: Size of the progress element `,Z=$localize`:␟7ae65b188c23ffa2ea105cdc7c4e30f3ae314321␟2864892605454291497: Color of the progress indicator ${"\ufffd#1\ufffd"}:START_PARAGRAPH: We recommend set solid color via ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:<progress />${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: 's CSS-property ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:color${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: (especially, if you support old not-chromium based Edge) ${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,Z=l["\u0275\u0275i18nPostprocess"](Z),F=$localize`:␟7bc158fa5ee50dd5e598c2cd6720474e7c814cab␟8674861496686918589: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiProgressModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our attribute component `,U=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let te=(()=>{class e{constructor(){this.value=6,this.max=10,this.sizeVariants=["m","s"],this.size=this.sizeVariants[0],this.colorVariants=["var(--tui-primary)","lightskyblue","#3682db","rgba(74, 201, 155, 1)","linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))"],this.color=this.colorVariants[0],this.basicExample={HTML:n.e(1138).then(n.bind(null,"PzPN")),TypeScript:n.e(1140).then(n.bind(null,"GGim")),LESS:n.e(1139).then(n.bind(null,"ZhWm"))},this.multiColorExample={HTML:n.e(1141).then(n.bind(null,"4pBD")),TypeScript:n.e(1143).then(n.bind(null,"neeq")),LESS:n.e(1142).then(n.bind(null,"DhB5"))},this.sizesExample={HTML:n.e(1144).then(n.bind(null,"917G")),TypeScript:n.e(1146).then(n.bind(null,"Bod/")),LESS:n.e(1145).then(n.bind(null,"c4r+"))},this.labelExample={HTML:n.e(1147).then(n.bind(null,"2LeE")),TypeScript:n.e(1149).then(n.bind(null,"IA+P")),LESS:n.e(1148).then(n.bind(null,"K9+/"))},this.stackedExample={HTML:n.e(1150).then(n.bind(null,"2G5o")),TypeScript:n.e(1152).then(n.bind(null,"r46P")),LESS:n.e(1151).then(n.bind(null,"5NSS"))},this.exampleModule=n.e(1153).then(n.bind(null,"hBgp")),this.exampleHtml=n.e(1154).then(n.bind(null,"1PQF"))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-progress-bar"]],decls:4,vars:0,consts:[["header","ProgressBar","package","KIT","path","kit/components/progress/progress-bar"],["pageTab",""],["id","basic",3,"content",6,"heading"],["id","multicolor",3,"content",6,"heading"],["id","sizes",3,"content",6,"heading"],["id","label",3,"content",6,"heading"],["id","stacked",3,"content",6,"heading"],["tuiProgressBar","",1,"api-progress",3,"value","max","size","color"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","color","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#attributes","target","_blank"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275template"](1,k,25,5,"ng-template",1),l["\u0275\u0275template"](2,X,7,10,"ng-template",1),l["\u0275\u0275template"](3,ee,10,2,"ng-template",1),l["\u0275\u0275elementEnd"]())},directives:[c.a,p.a,d.a,y,P,E,$,A,z.a,f.a,M.a,L.a,G.a,D.a],styles:[".api-progress[_ngcontent-%COMP%]{width:50%}@media screen and (max-width:37.4625em){.api-progress[_ngcontent-%COMP%]{width:100%}}dd[_ngcontent-%COMP%], dt[_ngcontent-%COMP%]{display:inline;margin:0}"],changeDetection:0}),e})(),ne=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,o.m,s.wb,i.yb,a.f.forChild(Object(o.u)(te))]]}),e})()}}]);