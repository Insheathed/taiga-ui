(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{GNRe:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiColorPickerModule",(function(){return _}));var o=n("2kYt"),r=n("nIj0"),l=n("sEIs"),c=n("SVIu"),i=n("vgRF"),a=n("l4xa"),d=n("Qq0t"),u=n("EM62"),p=n("OZlg"),m=n("e0eB"),s=n("iyc4"),f=n("kT+k"),g=n("2wTY");let b=(()=>{class e{constructor(){this.color="#ffdd2d",this.palette=i.j}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-color-picker-example-1"]],decls:6,vars:6,consts:[[1,"b-form",3,"colors","ngModel","ngModelChange"],["tuiTextfieldSize","m",1,"b-form","tui-space_vertical-2",3,"colors","ngModel","ngModelChange"],["tuiTextfieldSize","s",1,"b-form",3,"colors","ngModel","ngModelChange"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-input-color",0),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),u["\u0275\u0275text"](1," Background color\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-input-color",1),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),u["\u0275\u0275text"](3," Background color\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"tui-input-color",2),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),u["\u0275\u0275text"](5," Background color\n"),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color))},directives:[f.a,r.NgControlStatus,r.NgModel,g.b],encapsulation:2,changeDetection:0}),e})();var h=n("e4iD"),y=n("q7Lq"),x=n("SUM+"),C=n("zV1d"),S=n("RZBz"),k=n("4hRd");function M(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-color-selector",3),u["\u0275\u0275listener"]("colorChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().color=t})),u["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("tuiActiveZoneParent",e)("color",n.color)}}let w=(()=>{class e{constructor(e){this.sanitizer=e,this.color="#ffdd2d"}get background(){return this.sanitizer.bypassSecurityTrustStyle(this.color)}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](h.DomSanitizer))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-color-picker-example-2"]],decls:5,vars:6,consts:[["tuiDropdownAlign","left",3,"content","tuiDropdownMaxHeight"],["tuiButton","","type","button","appearance",""],["picker",""],[3,"tuiActiveZoneParent","color","colorChange"]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),u["\u0275\u0275elementStart"](1,"button",1),u["\u0275\u0275text"](2," Color me Kubrick "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](3,M,1,2,"ng-template",null,2,u["\u0275\u0275templateRefExtractor"])),2&e){const e=u["\u0275\u0275reference"](4);u["\u0275\u0275property"]("content",e)("tuiDropdownMaxHeight",999),u["\u0275\u0275advance"](1),u["\u0275\u0275styleProp"]("background",t.background,u["\u0275\u0275defaultStyleSanitizer"])("color",t.background)}},directives:[y.a,x.a,C.a,S.a,k.a],styles:["[_nghost-%COMP%]     tui-wrapper{-webkit-filter:invert(1);filter:invert(1)}"],changeDetection:0}),e})();var v,T=n("EPR0"),E=n("x/Ht"),D=n("yHor"),z=n("zGJC"),P=n("u8jZ");v=$localize`:␟67c85c212962109b4b2d7a72c9ed553cd211284c␟5926592895853516779: ColorPicker allows to pick a color and its transparency. InputColor and ColorSelector are made with ColorPicker `;const A=["heading",$localize`:␟076f197d00bec1e1eadd0578f26163a0094bb3c6␟1095933938236110379:InputColor`],I=["heading",$localize`:␟c58615eb54ebf60ebca6fd2305cf40aaae4abb01␟4818970173940003343:ColorSelector in dropdown`];function B(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18n"](1,v),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-doc-example",2),u["\u0275\u0275i18nAttributes"](3,A),u["\u0275\u0275element"](4,"tui-color-picker-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-doc-example",3),u["\u0275\u0275i18nAttributes"](6,I),u["\u0275\u0275element"](7,"tui-color-picker-example-2"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("content",e.example1),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",e.example2)}}var j,Z,$;function H(e,t){1&e&&u["\u0275\u0275i18n"](0,j)}function R(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-demo"),u["\u0275\u0275element"](1,"tui-color-picker"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-doc-documentation"),u["\u0275\u0275template"](3,H,1,0,"ng-template",4),u["\u0275\u0275elementEnd"]())}function N(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",5),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,Z),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18n"](8,$),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](9,"tui-doc-code",7),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",e.exampleImportModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}j=$localize`:␟a4186ff325aca7ae0746ccba7533a67b83b1a7cf␟2059122116780340968: RGBA color tuple `,Z=$localize`:␟de4baf53f9bdd6800c22f1d929dc1a6cb224739d␟8354653081173686360: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiColorPickerModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,$=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let O=(()=>{class e{constructor(){this.exampleImportModule="import {TuiColorPickerModule} from '@taiga-ui/addon-editor';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiColorPickerModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-color-picker [(color)]="color"></tui-color-picker>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {defaultEditorColors} from '@taiga-ui/addon-editor';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-color-picker-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiColorPickerExample1 {\n    color = '#ffdd2d';\n\n    readonly palette = defaultEditorColors;\n}\n",HTML:'<tui-input-color class="b-form" [colors]="palette" [(ngModel)]="color">\n    Background color\n</tui-input-color>\n<tui-input-color\n    class="b-form tui-space_vertical-2"\n    tuiTextfieldSize="m"\n    [colors]="palette"\n    [(ngModel)]="color"\n>\n    Background color\n</tui-input-color>\n<tui-input-color\n    class="b-form"\n    tuiTextfieldSize="s"\n    [colors]="palette"\n    [(ngModel)]="color"\n>\n    Background color\n</tui-input-color>\n'},this.example2={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {DomSanitizer, SafeStyle} from '@angular/platform-browser';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-color-picker-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiColorPickerExample2 {\n    color = '#ffdd2d';\n\n    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}\n\n    get background(): SafeStyle {\n        return this.sanitizer.bypassSecurityTrustStyle(this.color);\n    }\n}\n",HTML:'<tui-hosted-dropdown\n    tuiDropdownAlign="left"\n    [content]="picker"\n    [tuiDropdownMaxHeight]="999"\n>\n    <button\n        tuiButton\n        type="button"\n        appearance=""\n        [style.background]="background"\n        [style.color]="background"\n    >\n        Color me Kubrick\n    </button>\n</tui-hosted-dropdown>\n<ng-template #picker let-activeZone>\n    <tui-color-selector\n        [tuiActiveZoneParent]="activeZone"\n        [(color)]="color"\n    ></tui-color-selector>\n</ng-template>\n',LESS:":host {\n    /* stylelint-disable */\n    ::ng-deep tui-wrapper {\n        filter: invert(1);\n    }\n    /* stylelint-enable */\n}\n"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-color-picker"]],decls:4,vars:0,consts:[["header","ColorPicker","package","ADDON-editor","type","components"],["pageTab",""],["id","input",3,"content",6,"heading"],["id","dropdown",3,"content",6,"heading"],["documentationPropertyName","color","documentationPropertyMode","input-output","documentationPropertyType","[number, number, number, number]"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275template"](1,B,8,2,"ng-template",1),u["\u0275\u0275template"](2,R,4,0,"ng-template",1),u["\u0275\u0275template"](3,N,10,2,"ng-template"),u["\u0275\u0275elementEnd"]())},directives:[p.a,m.a,s.a,b,w,T.a,E.a,D.a,z.a,P.a],encapsulation:2,changeDetection:0}),e})(),_=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,d.TuiButtonModule,d.TuiHostedDropdownModule,i.c,i.d,a.TuiActiveZoneModule,d.TuiDropdownControllerModule,i.h,d.TuiTextfieldControllerModule,c.h,l.f.forChild(Object(c.o)(O)),r.FormsModule]]}),e})()}}]);