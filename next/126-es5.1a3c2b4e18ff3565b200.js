function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,a=_getPrototypeOf(t);if(e){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _templateObject7(){var t=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject7=function(){return t},t}function _templateObject6(){var t=_taggedTemplateLiteral([":\u241f73eaf225138c2038b3b0db8d96d9c6a3c8c5fa54\u241f2397818192884899200: Import ",":START_TAG_CODE:TuiManualHintModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject6=function(){return t},t}function _templateObject5(){var t=_taggedTemplateLiteral([":\u241f402b0978874aa99343a9ae1d9c7fc1a460f92eff\u241f2409354495697805229: Show/hide hint "]);return _templateObject5=function(){return t},t}function _templateObject4(){var t=_taggedTemplateLiteral([":\u241fee84d3c7de163b96c6606f2d0af612463026e07d\u241f741899295101860675: Content "]);return _templateObject4=function(){return t},t}function _templateObject3(){var t=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject3=function(){return t},t}function _templateObject2(){var t=_taggedTemplateLiteral([":\u241fc8c45ebec06566ef7a3a59ef2384321feec36e37\u241f3855161587228143615:Directive to show a hint manually"]);return _templateObject2=function(){return t},t}function _templateObject(){var t=_taggedTemplateLiteral([":\u241fc01d98fae0457dce1ea0bdafcfd9341fc129086b\u241f1000000166819693231:ManualHint"]);return _templateObject=function(){return t},t}function _taggedTemplateLiteral(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{"0WYk":function(t,e,n){"use strict";n.r(e),n.d(e,"ExampleTuiManualHintModule",(function(){return G}));var a=n("2kYt"),o=n("sEIs"),i=n("SVIu"),r=n("Qq0t"),l=n("kiPw"),u=n("Piem"),c=n("EM62"),p=n("PGvk"),m=n("K/iL"),s=n("OZlg"),f=n("e0eB"),d=n("iyc4"),h=n("zV1d"),b=n("IrCu"),y=n("TxeG"),_=n("yZWP");function g(t,e){1&t&&(c["\u0275\u0275elementStart"](0,"div",2),c["\u0275\u0275text"](1," Use "),c["\u0275\u0275elementStart"](2,"a",3),c["\u0275\u0275text"](3,"Hint"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]())}var O,v,w=((O=function(){function t(){_classCallCheck(this,t),this.hintShown=!1}return _createClass(t,[{key:"toggleHint",value:function(){this.hintShown=!this.hintShown}}]),t}()).\u0275fac=function(t){return new(t||O)},O.\u0275cmp=c["\u0275\u0275defineComponent"]({type:O,selectors:[["tui-manual-hint-example-1"]],decls:4,vars:2,consts:[["tuiButton","","type","button",3,"tuiManualHint","tuiManualHintShow","click"],["template",""],["tuiMode","onDark"],["tuiLink","","routerLink","hint",1,"link"]],template:function(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"button",0),c["\u0275\u0275listener"]("click",(function(){return e.toggleHint()})),c["\u0275\u0275text"](1," Hint\n"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](2,g,4,0,"ng-template",null,1,c["\u0275\u0275templateRefExtractor"])),2&t){var n=c["\u0275\u0275reference"](3);c["\u0275\u0275property"]("tuiManualHint",n)("tuiManualHintShow",e.hintShown)}},directives:[h.a,b.a,y.a,_.a,o.e],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),O),M=n("EPR0"),C=n("yHor"),S=n("zGJC"),H=n("FSyC"),P=n("u8jZ"),j=["header",$localize(_templateObject())];v=$localize(_templateObject2());var x,T,k,E,L=["heading",$localize(_templateObject3())];function R(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18n"](1,v),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-example",2),c["\u0275\u0275i18nAttributes"](3,L),c["\u0275\u0275element"](4,"tui-manual-hint-example-1"),c["\u0275\u0275elementEnd"]()),2&t){var n=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",n.example1)}}function D(t,e){1&t&&c["\u0275\u0275i18n"](0,x)}function I(t,e){1&t&&c["\u0275\u0275i18n"](0,T)}function z(t,e){if(1&t){var n=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo"),c["\u0275\u0275elementStart"](1,"button",3),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](n),c["\u0275\u0275nextContext"]().sayHi()})),c["\u0275\u0275text"](2," A strange button "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-doc-documentation"),c["\u0275\u0275template"](4,D,1,0,"ng-template",4),c["\u0275\u0275template"](5,I,1,0,"ng-template",5),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](n),c["\u0275\u0275nextContext"]().show=t})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](6,"inherited-documentation")}if(2&t){var a=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("tuiManualHintShow",a.show)("tuiHintMode",a.mode)("tuiHintDirection",a.direction),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("documentationPropertyValue",a.show)}}function V(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"ol",6),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,k),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,E),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&t){var n=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",n.exampleImportModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}x=$localize(_templateObject4()),T=$localize(_templateObject5()),k=$localize(_templateObject6(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),E=$localize(_templateObject7());var B,A,$=((B=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments)).exampleImportModule="import {TuiManualHintModule} from '@taiga-ui/core'; \n\n... \n@NgModule({\n    imports: [\n        ... \n        TuiManualHintModule \n    ], \n...\n",t.exampleInsertTemplate='<button\n    tuiButton\n    type="button"\n    tuiManualHint="Custom host with text tooltip"\n    [tuiManualHintShow]="true"\n>\n    Press me\n</button>\n\n<button\n  tuiButton\n  type="button"\n  [tuiManualHint]="template"\n  [tuiManualHintShow]="true"\n>\n    Press that \u2191\n</button>\n\n<ng-template #template>\n    Reusable template\n</ng-template>\n',t.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\n\n@Component({\n    selector: 'tui-manual-hint-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n})\nexport class TuiManualHintExample1 {\n    hintShown = false;\n\n    toggleHint() {\n        this.hintShown = !this.hintShown;\n    }\n}\n",HTML:'<button\n    tuiButton\n    type="button"\n    [tuiManualHint]="template"\n    [tuiManualHintShow]="hintShown"\n    (click)="toggleHint()"\n>\n    Hint\n</button>\n\n<ng-template #template>\n    <div tuiMode="onDark">\n        Use <a tuiLink class="link" routerLink="hint">Hint</a>\n    </div>\n</ng-template>\n'},t.show=!1,t}return _createClass(n,[{key:"sayHi",value:function(){console.log("Hi all!")}}]),n}(p.a)).\u0275fac=function(t){return N(t||B)},B.\u0275cmp=c["\u0275\u0275defineComponent"]({type:B,selectors:[["example-manual-hint"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:m.a,useExisting:Object(c.forwardRef)((function(){return B}))}]),c["\u0275\u0275InheritDefinitionFeature"]],decls:5,vars:0,consts:[["package","CORE","type","directives",6,"header"],["pageTab",""],["id","base",3,"content",6,"heading"],["tuiButton","","type","button","tuiManualHint","It says 'Hi all!' into console",3,"tuiManualHintShow","tuiHintMode","tuiHintDirection","click"],["documentationPropertyName","tuiManualHint","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","tuiManualHintShow","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(t,e){1&t&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275i18nAttributes"](1,j),c["\u0275\u0275template"](2,R,5,1,"ng-template",1),c["\u0275\u0275template"](3,z,7,4,"ng-template",1),c["\u0275\u0275template"](4,V,10,2,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[s.a,f.a,d.a,w,M.a,h.a,b.a,C.a,S.a,H.a,P.a],encapsulation:2,changeDetection:0}),B),N=c["\u0275\u0275getInheritedFactory"]($),G=((A=function t(){_classCallCheck(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:A}),A.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||A)},imports:[[r.TuiButtonModule,r.TuiManualHintModule,r.TuiLinkModule,r.TuiModeModule,l.c,a.c,u.a,i.h,o.f.forChild(Object(i.o)($))]]}),A)}}]);