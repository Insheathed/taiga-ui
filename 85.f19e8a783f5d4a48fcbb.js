(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{dpNd:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiFilterModule",(function(){return le}));var o=n("An66"),a=n("3kIJ"),r=n("1VvW"),i=n("SVIu"),l=n("Qq0t"),m=n("dvRg"),d=n("cWK9"),c=n("l4xa"),s=n("kZht"),u=n("OZlg"),p=n("e0eB"),f=n("iyc4"),g=n("MsR7");let h=(()=>{class e{constructor(){this.form=new a.FormGroup({filters:new a.FormControl(["Food"])}),this.items=["News","Food","Clothes","Popular","Goods","Furniture","Tech","Building materials"],this.disabledItemHandler=e=>e.length<7}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-example-1"]],decls:6,vars:6,consts:[[3,"formGroup"],["formControlName","filters","size","s",3,"disabledItemHandler","items"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275element"](1,"tui-filter",1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"div"),s["\u0275\u0275elementStart"](3,"pre"),s["\u0275\u0275text"](4),s["\u0275\u0275pipe"](5,"json"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formGroup",t.form),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("disabledItemHandler",t.disabledItemHandler)("items",t.items),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("Form value: ",s["\u0275\u0275pipeBind1"](5,4,t.form.value),""))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,g.a,a.NgControlStatus,a.FormControlName],pipes:[o.k],styles:["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],changeDetection:0}),e})();function b(e,t){1&e&&s["\u0275\u0275text"](0),2&e&&s["\u0275\u0275textInterpolate1"](" ",t.$implicit.title,"\n")}const y={title:"Done",operations:[{amount:100},{amount:200}]};let C=(()=>{class e{constructor(){this.form=new a.FormGroup({filters:new a.FormControl([{title:"Drafts"}])}),this.items=[y,{title:"Drafts",operations:[{amount:100},{amount:200},{amount:100},{amount:100}]},{title:"For sign",operations:[]},{title:"Queue",operations:[{amount:100},{amount:200},{amount:100},{amount:200},{amount:100},{amount:200}]}],this.identityMatcher=(e,t)=>e.title===t.title,this.badgeHandler=e=>e.operations.length}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-example-2"]],decls:8,vars:8,consts:[[3,"formGroup"],["formControlName","filters",3,"identityMatcher","content","badgeHandler","items"],["content",""]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275element"](1,"tui-filter",1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](2,b,1,1,"ng-template",null,2,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementStart"](4,"div"),s["\u0275\u0275elementStart"](5,"pre"),s["\u0275\u0275text"](6),s["\u0275\u0275pipe"](7,"json"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275reference"](3);s["\u0275\u0275property"]("formGroup",t.form),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("identityMatcher",t.identityMatcher)("content",e)("badgeHandler",t.badgeHandler)("items",t.items),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate1"]("Form value: ",s["\u0275\u0275pipeBind1"](7,6,t.form.value),"")}},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,g.a,a.NgControlStatus,a.FormControlName],pipes:[o.k],styles:["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],changeDetection:0}),e})();var S=n("ONKv");function v(e,t){if(1&e&&(s["\u0275\u0275text"](0),s["\u0275\u0275element"](1,"tui-svg",3)),2&e){const e=t.$implicit,n=s["\u0275\u0275nextContext"]();s["\u0275\u0275textInterpolate1"](" ",e," "),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("src",n.getItemIcon(e))}}const x={Calendar:"tuiIconCalendarLarge",Favorite:"tuiIconStarLarge",Messages:"tuiIconCommentLarge",FAQ:"tuiIconHelpCircleLarge",Settings:"tuiIconSettingsLarge"};let T=(()=>{class e{constructor(){this.items=["Calendar","Favorite","Messages","FAQ","Settings"],this.form=new a.FormGroup({filters:new a.FormControl([])})}getItemIcon(e){return x[e]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-example-3"]],decls:8,vars:6,consts:[[3,"formGroup"],["formControlName","filters",3,"content","items"],["content",""],[1,"tui-space_left-2",3,"src"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275element"](1,"tui-filter",1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](2,v,2,2,"ng-template",null,2,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementStart"](4,"div"),s["\u0275\u0275elementStart"](5,"pre"),s["\u0275\u0275text"](6),s["\u0275\u0275pipe"](7,"json"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275reference"](3);s["\u0275\u0275property"]("formGroup",t.form),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("content",e)("items",t.items),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate1"]("Form value: ",s["\u0275\u0275pipeBind1"](7,4,t.form.value),"")}},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,g.a,a.NgControlStatus,a.FormControlName,S.a],pipes:[o.k],styles:["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],changeDetection:0}),e})();var P=n("D57K"),_=n("C05f"),E=n("YtkY"),V=n("zV1d"),M=function(e){return e.IT="IT",e.HR="HR",e.HeadOffice="Heads",e.Delivery="Delivery",e}({});let I=(()=>{class e{constructor(){this.items=Object.values(M),this.filters$=new _.a([])}get model$(){return this.filters$.pipe(Object(E.a)(e=>e.length===this.items.length?[]:e))}get buttonAppearance$(){return this.filters$.pipe(Object(E.a)(e=>e.length===this.items.length?"whiteblock-active":"whiteblock"))}onModelChange(e){this.filters$.next(e)}toggleAll(){this.filters$.next(this.items.length===this.filters$.value.length?[]:[...this.items])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-example-4"]],decls:8,vars:7,consts:[[1,"tui-space_bottom-4"],[1,"filters-with-all"],["tuiButton","","type","button","size","m",1,"tui-space_right-1",3,"appearance","click"],[3,"items","ngModel","ngModelChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275text"](1,"Choose a department:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"div",1),s["\u0275\u0275elementStart"](3,"button",2),s["\u0275\u0275listener"]("click",(function(){return t.toggleAll()})),s["\u0275\u0275pipe"](4,"async"),s["\u0275\u0275text"](5," All "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"tui-filter",3),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.onModelChange(e)})),s["\u0275\u0275pipe"](7,"async"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("appearance",s["\u0275\u0275pipeBind1"](4,3,t.buttonAppearance$)||""),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("items",t.items)("ngModel",s["\u0275\u0275pipeBind1"](7,5,t.model$)))},directives:[V.a,g.a,a.NgControlStatus,a.NgModel],pipes:[o.b],styles:[".filters-with-all[_ngcontent-%COMP%]{display:inline-flex}"],changeDetection:0}),Object(P.b)([c.sd],e.prototype,"model$",null),Object(P.b)([c.sd],e.prototype,"buttonAppearance$",null),e})();var w,O=n("EPR0"),H=n("yHor"),$=n("zGJC"),A=n("u8jZ");w=$localize`:␟9919bf787bc7c0a8e71a9e457491487af5a0a81c␟6973195341614832335: Components shows separated items that can be used to filter content on the page. There are also an option with badges. `;const F=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],G=["heading",$localize`:␟555c6fe50ef4fae4068cfa5e1e739a164cbd1f39␟1282387873164068840:With badges`],z=["heading",$localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`],N=["heading",$localize`:␟5a776544392d038f30f735cea42d6e409b3e9915␟6633556289912992409:With all button`];function D(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,w),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-example",2),s["\u0275\u0275i18nAttributes"](3,F),s["\u0275\u0275element"](4,"tui-filter-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](6,G),s["\u0275\u0275element"](7,"tui-filter-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"tui-doc-example",4),s["\u0275\u0275i18nAttributes"](9,z),s["\u0275\u0275element"](10,"tui-filter-example-3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"tui-doc-example",5),s["\u0275\u0275i18nAttributes"](12,N),s["\u0275\u0275element"](13,"tui-filter-example-4"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",e.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example3),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example4)}}function R(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-filter",14),s["\u0275\u0275listener"]("toggledItem",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"](2).onToggledItemChange(t)})),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("formControl",e.control)("badgeHandler",e.badgeHandler)("disabledItemHandler",e.disabledItemHandler)("items",e.items)("size",e.size)}}var k,L,j,B,Z,J,K,Q,W;function U(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,k),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function Y(e,t){1&e&&s["\u0275\u0275i18n"](0,L)}function X(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,j),s["\u0275\u0275element"](1,"div"),s["\u0275\u0275element"](2,"strong"),s["\u0275\u0275i18nEnd"]())}function q(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,B),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275element"](2,"strong"),s["\u0275\u0275i18nEnd"]())}function ee(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,Z),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function te(e,t){1&e&&s["\u0275\u0275i18n"](0,J)}function ne(e,t){1&e&&s["\u0275\u0275i18n"](0,K)}function oe(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo",6),s["\u0275\u0275template"](1,R,1,5,"ng-template"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-documentation"),s["\u0275\u0275template"](3,U,2,0,"ng-template",7),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().badgeHandler=t})),s["\u0275\u0275template"](4,Y,1,0,"ng-template",8),s["\u0275\u0275template"](5,X,3,0,"ng-template",9),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().disabledItemHandler=t})),s["\u0275\u0275template"](6,q,3,0,"ng-template",10),s["\u0275\u0275template"](7,ee,2,0,"ng-template",11),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().items=t})),s["\u0275\u0275template"](8,te,1,0,"ng-template",12),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().size=t})),s["\u0275\u0275template"](9,ne,1,0,"ng-template",13),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("control",e.control),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("documentationPropertyValues",e.badgeHandlerVariants)("documentationPropertyValue",e.badgeHandler),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size)}}function ae(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",15),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,Q),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,W),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",17),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.exampleModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.exampleHtml)}}k=$localize`:␟cd98273289fb99517690cbce1b1d0d11f8d0d0c8␟5781311404027237254: Function that gets and item and returns a badge value. Uses ${"\ufffd#1\ufffd"}:START_TAG_CODE:valueOf${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: to get a number to show by default `,L=$localize`:␟3e711c8b413963d30140ff282746aa85e58af981␟9103376824632144211: Template for custom content in filter `,j=$localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\ufffd#1\ufffd"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,B=$localize`:␟5d5550b6d81d9ae6434fc11a40439f0f0325dd5a␟8367237806229821940: Function that matches value and items, e.g. if objects are copied. Uses ${"\ufffd#1\ufffd"}:START_TAG_CODE:===${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: by default. ${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,Z=$localize`:␟81389767cdcd4e6282691e8eecc5bd1cdf2a1307␟7860704213160462565: Filter items. Can be an array of strings or an array of objects. If no custom template provided, it uses ${"\ufffd#1\ufffd"}:START_TAG_CODE:toString${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: for view `,J=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,K=$localize`:␟0ff47041d2860cb4d3a45fbce5b410bdabb3aabf␟4387032186612939582: toggled event of item `,Q=$localize`:␟1ab787c2eb6660c931fda91647e7159854cb6941␟8315740496990906089: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFilterModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,W=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;class re{constructor(e,t){this.text=e,this.badgeValue=t}toString(){return this.text}valueOf(){return this.badgeValue?this.badgeValue:null}}let ie=(()=>{class e{constructor(e){this.alertService=e,this.exampleModule=n.e(698).then(n.bind(null,"Q+oZ")),this.exampleHtml=n.e(699).then(n.bind(null,"UOr2")),this.example1={TypeScript:n.e(690).then(n.bind(null,"R47X")),HTML:n.e(689).then(n.bind(null,"FFGJ"))},this.example2={TypeScript:n.e(692).then(n.bind(null,"z1ZW")),HTML:n.e(691).then(n.bind(null,"wAPO"))},this.example3={TypeScript:n.e(694).then(n.bind(null,"Un9b")),HTML:n.e(693).then(n.bind(null,"Xhj3"))},this.example4={TypeScript:n.e(697).then(n.bind(null,"1mn1")),HTML:n.e(695).then(n.bind(null,"ZM1n")),LESS:n.e(696).then(n.bind(null,"h1sv"))},this.initialItems=["Alex Inkin","Roman Sedov"],this.itemsVariants=[["Alex Inkin","Roman Sedov"],[new re("Focused Zone",10),new re("Dropdown",100),new re("Menu Items",30),new re("Accordion")]],this.badgeHandlerVariants=[e=>Number(e),e=>String(e).length],this.badgeHandler=this.badgeHandlerVariants[0],this.disabledItemHandlerVariants=[c.a,e=>"Roman Sedov"===e,e=>(e.valueOf()||0)>=30],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.items=this.itemsVariants[0],this.control=new a.FormControl(this.initialItems),this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[1]}onToggledItemChange(e){this.alertService.open(String(e)).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](l.Y))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-filters"]],decls:4,vars:0,consts:[["header","Filter","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","badge",3,"content",6,"heading"],["id","custom",3,"content",6,"heading"],["id","all",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","badgeHandler","documentationPropertyMode","input","documentationPropertyType","TuiHandler<T>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","content","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent<any>"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<T>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","identityMatcher","documentationPropertyMode","input","documentationPropertyType","TuiIdentityMatcher"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","T[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS | TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","toggledItem","documentationPropertyMode","output","documentationPropertyType","T"],[3,"formControl","badgeHandler","disabledItemHandler","items","size","toggledItem"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,D,14,4,"ng-template",1),s["\u0275\u0275template"](2,oe,10,9,"ng-template",1),s["\u0275\u0275template"](3,ae,10,2,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[u.a,p.a,f.a,h,C,T,I,O.a,H.a,$.a,g.a,a.NgControlStatus,a.FormControlDirective,A.a],encapsulation:2,changeDetection:0}),e})(),le=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[d.c,m.S,l.ab,m.Kb,l.Vb,o.c,a.FormsModule,a.ReactiveFormsModule,i.m,r.f.forChild(Object(i.u)(ie))]]}),e})()}}]);