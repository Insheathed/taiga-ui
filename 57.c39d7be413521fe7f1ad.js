(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"W+Hv":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiLineChartModule",(function(){return re}));var i=n("An66"),o=n("3kIJ"),a=n("1VvW"),r=n("UTYu"),l=n("SVIu"),c=n("Qq0t"),d=n("kZht"),u=n("OZlg"),m=n("e0eB"),p=n("iyc4"),s=n("l4xa"),h=n("ae/2"),y=n("Hot6");let f=(()=>{class e{constructor(){this.value=[[50,50],[100,75],[150,50],[200,150],[250,155],[300,190],[350,90]],this.stringify=s.J}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-chart-example-1"]],decls:2,vars:10,consts:[[1,"axes",3,"verticalLines","horizontalLines"],[3,"x","y","width","height","dots","value","xStringify","yStringify"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",0),d["\u0275\u0275element"](1,"tui-line-chart",1),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("verticalLines",4)("horizontalLines",2),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("x",0)("y",0)("width",400)("height",200)("dots",!0)("value",t.value)("xStringify",t.stringify)("yStringify",t.stringify))},directives:[h.a,y.a],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}"],changeDetection:0}),e})(),g=(()=>{class e{constructor(){this.value=[[50,50],[100,75],[150,50],[200,150],[250,155],[300,190],[350,90]]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-chart-example-2"]],decls:2,vars:9,consts:[[1,"axes",3,"verticalLines","horizontalLines"],[3,"x","y","width","height","smoothingFactor","value","filled"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",0),d["\u0275\u0275element"](1,"tui-line-chart",1),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("verticalLines",4)("horizontalLines",2),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("x",0)("y",0)("width",400)("height",200)("smoothingFactor",50)("value",t.value)("filled",!0))},directives:[h.a,y.a],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}"],changeDetection:0}),e})(),x=(()=>{class e{constructor(){this.dotted=[[50,50],[100,75],[150,50]],this.solid=[[150,50],[200,150],[250,155]],this.dashed=[[250,155],[300,190],[350,90]]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-chart-example-3"]],decls:4,vars:20,consts:[[1,"axes",3,"verticalLines","horizontalLines"],[1,"chart","chart_dotted",3,"dots","x","y","width","height","value"],[1,"chart",3,"dots","x","y","width","height","value"],[1,"chart","chart_dashed",3,"dots","x","y","width","height","value"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",0),d["\u0275\u0275element"](1,"tui-line-chart",1),d["\u0275\u0275element"](2,"tui-line-chart",2),d["\u0275\u0275element"](3,"tui-line-chart",3),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("verticalLines",4)("horizontalLines",2),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("dots",!0)("x",0)("y",0)("width",400)("height",200)("value",t.dotted),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("dots",!0)("x",0)("y",0)("width",400)("height",200)("value",t.solid),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("dots",!0)("x",0)("y",0)("width",400)("height",200)("value",t.dashed))},directives:[h.a,y.a],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}.chart[_ngcontent-%COMP%]{position:absolute;top:0;left:0}.chart_dotted[_ngcontent-%COMP%]{stroke-dasharray:2}.chart_dashed[_ngcontent-%COMP%]{stroke-dasharray:4}"],changeDetection:0}),e})();function v(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"div"),d["\u0275\u0275text"](3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"div"),d["\u0275\u0275text"](5),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=t.index;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"]("Vertical: ",e[0],""),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("Horizontal: ",e[1],""),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("index: ",n,"")}}let P=(()=>{class e{constructor(){this.value=[[50,50],[100,75],[150,50],[200,150],[250,155],[300,190],[350,90]],this.singleValue=[[200,150]],this.hint=({$implicit:e})=>`Vertical: ${e[1]}\nHorizontal: ${e[0]}`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-chart-example-4"]],decls:6,vars:17,consts:[[1,"axes",3,"verticalLines","horizontalLines"],[3,"x","y","width","height","value","hintContent"],[1,"axes","tui-space_top-10",3,"verticalLines","horizontalLines"],[3,"x","y","width","height","value","dots","hintContent"],["hintContent",""]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",0),d["\u0275\u0275element"](1,"tui-line-chart",1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-axes",2),d["\u0275\u0275element"](3,"tui-line-chart",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](4,v,6,3,"ng-template",null,4,d["\u0275\u0275templateRefExtractor"])),2&e){const e=d["\u0275\u0275reference"](5);d["\u0275\u0275property"]("verticalLines",4)("horizontalLines",2),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("x",0)("y",0)("width",400)("height",200)("value",t.value)("hintContent",t.hint),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("verticalLines",4)("horizontalLines",2),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("x",0)("y",0)("width",400)("height",200)("value",t.singleValue)("dots",!0)("hintContent",e)}},directives:[h.a,y.a],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}"],changeDetection:0}),e})();var b=n("JPmT");function C(e,t){if(1&e&&d["\u0275\u0275element"](0,"tui-line-chart",2),2&e){const e=t.$implicit;d["\u0275\u0275property"]("x",0)("y",0)("width",400)("height",200)("value",e)}}let S=(()=>{class e{constructor(){this.values=[[[50,50],[100,75],[150,50],[200,150],[250,155],[300,190],[350,90]],[[50,40],[100,60],[150,90],[200,120],[250,150],[300,110],[350,130]],[[50,30],[100,90],[150,80],[200,50],[250,130],[300,190],[350,150]]],this.hint=({$implicit:e})=>`${e[0][0]} items:\n\n${e.map(([e,t])=>t).join("$\n")}$`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-chart-example-5"]],decls:2,vars:4,consts:[[1,"axes",3,"verticalLines","horizontalLines","tuiLineChartHint"],["class","chart",3,"x","y","width","height","value",4,"ngFor","ngForOf"],[1,"chart",3,"x","y","width","height","value"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",0),d["\u0275\u0275template"](1,C,1,5,"tui-line-chart",1),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("verticalLines",4)("horizontalLines",2)("tuiLineChartHint",t.hint),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",t.values))},directives:[h.a,b.a,i.s,y.a],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem}.chart[_ngcontent-%COMP%]{position:absolute;color:#ffb74c}.chart[_ngcontent-%COMP%]:first-child{color:#bc71c9}.chart[_ngcontent-%COMP%]:last-child{color:#4dc3f7}"],changeDetection:0}),e})();var V=n("EPR0"),w=n("yHor"),L=n("zGJC"),T=n("u8jZ");const E=["heading",$localize`:␟af942a24234fa47efa01bf2d4236dad05131a5a0␟8543119714580512727:Line`],$=["heading",$localize`:␟d98cf87828e8a5c956667d9a8b9c12145824ee0f␟4272334652167271438:Smooth`],M=["heading",$localize`:␟86baef6e3d5572968c0da4f1709f97c74190d36e␟2812108764688288077:Dotted`],z=["heading",$localize`:␟1560319447dbaf27b0d1b06e594c573c85d89d96␟5135659169158832318:Hint`];function O(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-example",2),d["\u0275\u0275i18nAttributes"](1,E),d["\u0275\u0275element"](2,"tui-line-chart-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](4,$),d["\u0275\u0275element"](5,"tui-line-chart-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"tui-doc-example",4),d["\u0275\u0275i18nAttributes"](7,M),d["\u0275\u0275element"](8,"tui-line-chart-example-3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"tui-doc-example",5),d["\u0275\u0275i18nAttributes"](10,z),d["\u0275\u0275element"](11,"tui-line-chart-example-4"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"tui-doc-example",6),d["\u0275\u0275element"](13,"tui-line-chart-example-5"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example3),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example4),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example5)}}var _,A,F,H,D,N,G,R,k,I,j,J,X;function Y(e,t){1&e&&d["\u0275\u0275i18n"](0,_)}function q(e,t){1&e&&d["\u0275\u0275i18n"](0,A)}function U(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,F),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"]())}function Z(e,t){1&e&&d["\u0275\u0275i18n"](0,H)}function Q(e,t){1&e&&d["\u0275\u0275i18n"](0,D)}function W(e,t){1&e&&d["\u0275\u0275i18n"](0,N)}function B(e,t){1&e&&d["\u0275\u0275i18n"](0,G)}function K(e,t){1&e&&d["\u0275\u0275i18n"](0,R)}function ee(e,t){1&e&&d["\u0275\u0275i18n"](0,k)}function te(e,t){1&e&&d["\u0275\u0275i18n"](0,I)}function ne(e,t){1&e&&d["\u0275\u0275i18n"](0,j)}function ie(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275elementStart"](1,"tui-axes",7),d["\u0275\u0275element"](2,"tui-line-chart",8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-doc-documentation"),d["\u0275\u0275template"](4,Y,1,0,"ng-template",9),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().dots=t})),d["\u0275\u0275template"](5,q,1,0,"ng-template",10),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().filled=t})),d["\u0275\u0275template"](6,U,3,0,"ng-template",11),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().hintContent=t})),d["\u0275\u0275template"](7,Z,1,0,"ng-template",12),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().height=t})),d["\u0275\u0275template"](8,Q,1,0,"ng-template",13),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().y=t})),d["\u0275\u0275template"](9,W,1,0,"ng-template",14),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().width=t})),d["\u0275\u0275template"](10,B,1,0,"ng-template",15),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().x=t})),d["\u0275\u0275template"](11,K,1,0,"ng-template",16),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().smoothingFactor=t})),d["\u0275\u0275template"](12,ee,1,0,"ng-template",17),d["\u0275\u0275template"](13,te,1,0,"ng-template",18),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().xStringify=t})),d["\u0275\u0275template"](14,ne,1,0,"ng-template",19),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().yStringify=t})),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("verticalLines",4)("horizontalLines",2),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("x",e.x)("y",e.y)("width",e.width)("height",e.height)("smoothingFactor",e.smoothingFactor)("value",e.value)("filled",e.filled)("dots",e.dots)("hintContent",e.hintContent)("xStringify",e.xStringify)("yStringify",e.yStringify),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValue",e.dots),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.filled),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.hintContentVariants)("documentationPropertyValue",e.hintContent),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.height),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.y),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.width),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.x),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.smoothingFactor),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValues",e.xStringifyVariants)("documentationPropertyValue",e.xStringify),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.yStringifyVariants)("documentationPropertyValue",e.yStringify)}}function oe(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",20),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,J),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",21),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,X),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",22),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml)}}_=$localize`:␟c4d83e70435953f62ccae3cbf6016420df475424␟4740076445307023096: Show dots on chart `,A=$localize`:␟9baeb452de4b3e87de2854d7d7299ae8e5349371␟6311054337495080517: Filled with gradient `,F=$localize`:␟962b0408fa0aa5b665e0e2ce9afa1c9d031023ec␟5098898074892729168: Content of hint for hover. It has ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:$implicit${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: in context with a tuple ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:[TuiPoint, number]${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE:`,F=d["\u0275\u0275i18nPostprocess"](F),H=$localize`:␟1148b851b9d07a503fe83074185fada4c56bc932␟4329060505650601384: Axis Y range, pixel scale is 1:1 `,D=$localize`:␟f33f8b3f2cfd7ef519194cc1ae13fc8fb91fb8d7␟9084820970498059965: Start of Y axis `,N=$localize`:␟f4bba10989219b2e80f0c07cb583e5975596b805␟8347772747848156772: Axis X range, pixel scale is 1:1 `,G=$localize`:␟792c21644049857ec7d2abd21a018da6feeaf8f3␟715212499497888512: Start of X axis `,R=$localize`:␟dbcff3658adbc7241a4e120d0403b9b59203cf6f␟7622132382477188848: Smoothing factor from 0 to 99 `,k=$localize`:␟2eb20b3adec45476e892d48624603eec29f04ca7␟620827304048157009: Array of data `,I=$localize`:␟a95376fd00f2c7de89ef1205191f686e9bb93ceb␟8840512580092681625: Function to stringify a value number to a string in axis X hint `,j=$localize`:␟aa03eea8f292367391947b1ee6d45d8e5fe1c884␟8439308556823064311: Function to stringify a value number to a string in axis Y hint `,J=$localize`:␟30a5ab566dceb0cacf69465ffadb6bd0c272f1c4␟4207828476122780700: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiLineChartModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,X=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let ae=(()=>{class e{constructor(){this.exampleModule=n.e(387).then(n.bind(null,"TOYq")),this.exampleHtml=n.e(388).then(n.bind(null,"2V2F")),this.example1={TypeScript:n.e(374).then(n.bind(null,"mP4N")),HTML:n.e(372).then(n.bind(null,"FBtj")),LESS:n.e(373).then(n.bind(null,"fNPn"))},this.example2={TypeScript:n.e(377).then(n.bind(null,"Ohe7")),HTML:n.e(375).then(n.bind(null,"1UeQ")),LESS:n.e(376).then(n.bind(null,"+LLl"))},this.example3={TypeScript:n.e(380).then(n.bind(null,"C1cc")),HTML:n.e(378).then(n.bind(null,"Jbhn")),LESS:n.e(379).then(n.bind(null,"TX90"))},this.example4={TypeScript:n.e(383).then(n.bind(null,"ARmG")),HTML:n.e(381).then(n.bind(null,"QqOv")),LESS:n.e(382).then(n.bind(null,"w+e7"))},this.example5={TypeScript:n.e(386).then(n.bind(null,"MqK5")),HTML:n.e(384).then(n.bind(null,"OWkh")),LESS:n.e(385).then(n.bind(null,"XZPV"))},this.value=[[50,50],[100,75],[150,50],[200,150],[250,155],[300,190],[350,90]],this.yStringifyVariants=[e=>(10*e).toLocaleString("ru-RU",{maximumFractionDigits:0})+" $"],this.xStringifyVariants=[e=>""+100*e],this.hintContentVariants=["",({$implicit:e})=>`${100*e[0]}\n${(10*e[1]).toLocaleString("ru-RU",{maximumFractionDigits:0})} $`],this.yStringify=null,this.xStringify=null,this.hintContent=this.hintContentVariants[0],this.x=0,this.y=0,this.width=400,this.height=200,this.smoothingFactor=0,this.filled=!1,this.dots=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-line-chart"]],decls:4,vars:0,consts:[["header","LineChart","package","ADDON-CHARTS","type","components"],["pageTab",""],["id","line",3,"content",6,"heading"],["id","curve",3,"content",6,"heading"],["id","dash",3,"content",6,"heading"],["id","hint",3,"content",6,"heading"],["id","multiple","heading","Several lines with hints",3,"content"],[1,"axes",3,"verticalLines","horizontalLines"],[3,"x","y","width","height","smoothingFactor","value","filled","dots","hintContent","xStringify","yStringify"],["documentationPropertyName","dots","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","filled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hintContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","height","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","y","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","width","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","x","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","smoothingFactor","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","TuiPoint[]"],["documentationPropertyName","xStringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler<number> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","yStringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler<number> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,O,14,5,"ng-template",1),d["\u0275\u0275template"](2,ie,15,26,"ng-template",1),d["\u0275\u0275template"](3,oe,10,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[u.a,m.a,p.a,f,g,x,P,S,V.a,h.a,y.a,w.a,L.a,T.a],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}"],changeDetection:0}),e})(),re=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,o.FormsModule,r.e,c.Gb,r.j,l.m,a.f.forChild(Object(l.u)(ae))]]}),e})()}}]);