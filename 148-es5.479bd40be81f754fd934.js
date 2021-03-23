function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241fdaecd9318a412b6e447ed3e701d10a2b79afedc7\u241f1909998837191870850: Use pipe into template with function and its arguments: "]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f589535f5788c7779cc0693fd5c80cb2fe695fba2\u241f423248318659210107: Import ",":START_TAG_CODE:TuiMapperPipeModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241fb0b72f5e45815fce4228ebe382754ba91f31a634\u241f3252806397437770551: Arguments for mapper function "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f1ab82441123c99c8dd04a9bd29732e9c87d8cf7c\u241f9012156491743993431: Mapper function "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f359c6fb442255c5f16d763434fffa823a09b8ee9\u241f2247220793678713694:Transform: ",":INTERPOLATION:"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241ffb80ae46e3f1bd1e6d6b602499d96fba7252cfe5\u241f1983258699805298929: Pipe to transform a value with a function "]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{Raxz:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiMapperModule",(function(){return x}));var a,r,o,p,i,c,l=n("2kYt"),u=n("sEIs"),m=n("SVIu"),d=n("l4xa"),s=n("EM62"),f=n("OZlg"),g=n("e0eB"),b=n("yHor"),y=n("zGJC"),_=n("u8jZ"),O=n("M03u");function h(e,t){1&e&&s["\u0275\u0275i18n"](0,a)}function C(e,t){1&e&&s["\u0275\u0275i18n"](0,o)}function P(e,t){1&e&&s["\u0275\u0275i18n"](0,p)}function T(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"p",2),s["\u0275\u0275i18n"](1,r),s["\u0275\u0275pipe"](2,"tuiMapper"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-doc-documentation"),s["\u0275\u0275template"](4,C,1,0,"ng-template",3),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().mapper=e})),s["\u0275\u0275template"](5,P,1,0,"ng-template",4),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().args=e})),s["\u0275\u0275elementEnd"]()}if(2&e){var a=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275i18nExp"](s["\u0275\u0275pipeBind3"](2,5,a.value,a.mapper,a.args)),s["\u0275\u0275i18nApply"](1),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("documentationPropertyValues",a.mapperVariants)("documentationPropertyValue",a.mapper),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",a.argsVariants)("documentationPropertyValue",a.args)}}function j(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",5),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,i),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,c),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",n.exampleImportModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}a=$localize(_templateObject()),r=$localize(_templateObject2(),"\ufffd0\ufffd"),o=$localize(_templateObject3()),p=$localize(_templateObject4()),i=$localize(_templateObject5(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),c=$localize(_templateObject6());var M,v,V=((v=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiMapperPipeModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiMapperPipeModule\n    ],\n...\n",this.exampleInsertTemplate="{{item | tuiMapper: mapper: someArg}}\n",this.value=5,this.mapperVariants=[function(e){return String(e)},function(e){return"Hello!"},function(e,t){return e*e+t}],this.mapper=this.mapperVariants[0],this.argsVariants=["",10],this.args=this.argsVariants[0]}).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=s["\u0275\u0275defineComponent"]({type:v,selectors:[["example-tui-mapper"]],decls:4,vars:0,consts:[["header","Mapper","package","CDK","type","pipes"],["pageTab",""],[1,"text"],["documentationPropertyName","mapper","documentationPropertyMode","input","documentationPropertyType","TuiMapper",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","args","documentationPropertyMode","input","documentationPropertyType","any",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,h,1,0,"ng-template",1),s["\u0275\u0275template"](2,T,6,9,"ng-template",1),s["\u0275\u0275template"](3,j,10,2,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[f.a,g.a,b.a,y.a,_.a],pipes:[O.a],styles:[".text[_ngcontent-%COMP%]{font-size:19px}"],changeDetection:0}),v),x=((M=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:M}),M.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||M)},imports:[[d.TuiMapperPipeModule,l.c,m.h,u.f.forChild(Object(m.o)(V))]]}),M)}}]);