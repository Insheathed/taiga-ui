(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[81533],{81533:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiTextareaModule:()=>ne});var o=n(12057),a=n(23738),i=n(33982),r=n(52404),u=n(64862),l=n(26485),c=n(75695),d=n(74788),s=n(82880),p=n(98204),m=n(43560),x=n(93525),h=n(33772),g=n(15193),f=n(56735);let T=(()=>{class e{constructor(){this.testForm=new a.cw({testValue1:new a.NI("A field",a.kI.required),testValue2:new a.NI("This one can be expanded",a.kI.required)})}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-textarea-example-1"]],decls:7,vars:2,consts:[[3,"formGroup"],["formControlName","testValue1"],["formControlName","testValue2",1,"tui-space_top-4",3,"expandable"]],template:function(e,t){1&e&&(d.TgZ(0,"p"),d._uU(1," It has a fixed size and content scroll by default. But there is also an expandable mode with height increase from content inside\n"),d.qZA(),d.TgZ(2,"form",0),d.TgZ(3,"tui-textarea",1),d._uU(4,"Type a text"),d.qZA(),d.TgZ(5,"tui-textarea",2),d._uU(6," Type a text "),d.qZA(),d.qZA()),2&e&&(d.xp6(2),d.Q6J("formGroup",t.testForm),d.xp6(3),d.Q6J("expandable",!0))},directives:[a._Y,a.JL,a.sg,g.FC,f.B,a.JJ,a.u],encapsulation:2,changeDetection:0}),e})(),Z=(()=>{class e{constructor(){this.testForm=new a.cw({testValue1:new a.NI("A field",a.kI.required)})}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-textarea-example-2"]],decls:9,vars:4,consts:[[3,"formGroup"],["formControlName","testValue1",1,"tui-space_bottom-4","field-large"],["formControlName","testValue1",1,"tui-space_bottom-4","field-small",3,"expandable"],["formControlName","testValue1",1,"field-medium",3,"expandable","maxLength"]],template:function(e,t){1&e&&(d.TgZ(0,"p"),d._uU(1,"You can set a custom min-height for component"),d.qZA(),d.TgZ(2,"form",0),d.TgZ(3,"tui-textarea",1),d._uU(4," Type a text "),d.qZA(),d.TgZ(5,"tui-textarea",2),d._uU(6," Type a text "),d.qZA(),d.TgZ(7,"tui-textarea",3),d._uU(8," Type a text "),d.qZA(),d.qZA()),2&e&&(d.xp6(2),d.Q6J("formGroup",t.testForm),d.xp6(3),d.Q6J("expandable",!1),d.xp6(2),d.Q6J("expandable",!0)("maxLength",30))},directives:[a._Y,a.JL,a.sg,g.FC,f.B,a.JJ,a.u],styles:[".field-large[_ngcontent-%COMP%]{min-height:9.375rem}.field-small[_ngcontent-%COMP%]{min-height:3.5rem}.field-medium[_ngcontent-%COMP%]{min-height:5rem}"],changeDetection:0}),e})();var y=n(88135),b=n(68874);let _=(()=>{class e{constructor(){this.testForm=new a.cw({testValue1:new a.NI("A field",a.kI.required)})}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-textarea-example-3"]],decls:7,vars:2,consts:[[3,"formGroup"],["tuiLabel","Type a text"],["formControlName","testValue1",3,"tuiTextfieldLabelOutside"]],template:function(e,t){1&e&&(d.TgZ(0,"p"),d._uU(1," You can use label outside mode with "),d.TgZ(2,"code"),d._uU(3,"tuiLabel"),d.qZA(),d.qZA(),d.TgZ(4,"form",0),d.TgZ(5,"label",1),d._UZ(6,"tui-textarea",2),d.qZA(),d.qZA()),2&e&&(d.xp6(4),d.Q6J("formGroup",t.testForm),d.xp6(2),d.Q6J("tuiTextfieldLabelOutside",!0))},directives:[a._Y,a.JL,a.sg,y.A,g.FC,f.B,a.JJ,a.u,b.x],encapsulation:2,changeDetection:0}),e})();var A=n(4797),C=n(84848),w=n(36951),U=n(7114);const q=function(){return[]};function L(e){return`Maximum length — ${e.requiredLength}`}let P=(()=>{class e{constructor(){this.maxLength=97,this.testForm=new a.cw({testValue1:new a.NI("\nIn Java: everything is an object.\nIn Clojure: everything is a list.\nIn JavaScript: everything is a terrible mistake.\n".trim(),[a.kI.required,a.kI.maxLength(this.maxLength)])})}ngAfterViewInit(){(0,A.tuiMarkControlAsTouchedAndValidate)(this.testForm)}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-textarea-example-4"]],features:[d._Bn([{provide:l.TUI_VALIDATION_ERRORS,useValue:{required:"Enter this!",maxlength:L}}])],decls:20,vars:10,consts:[[1,"description"],[1,"steps"],[1,"steps_optional"],[3,"formGroup"],["tuiLabel","Write a wise thought"],["formControlName","testValue1","tuiHintContent","it's just a joke",3,"expandable","maxLength","tuiTextfieldLabelOutside"],["formControlName","testValue1",3,"error"]],template:function(e,t){1&e&&(d.TgZ(0,"div",0),d._uU(1," To highlight extra characters: "),d.TgZ(2,"ul",1),d.TgZ(3,"li"),d._uU(4," use "),d.TgZ(5,"code"),d._uU(6,"maxLength"),d.qZA(),d._uU(7," input "),d.qZA(),d.TgZ(8,"li",2),d._uU(9," (Optional) Don't forget to set form validator (for example, "),d.TgZ(10,"code"),d._uU(11,"Validators.maxLength"),d.qZA(),d._uU(12," ) if you want to make field invalid on exceeding the characters limit "),d.qZA(),d.qZA(),d.qZA(),d.TgZ(13,"form",3),d.TgZ(14,"label",4),d.TgZ(15,"tui-textarea",5),d._uU(16," Type it "),d.qZA(),d._UZ(17,"tui-error",6),d.ALo(18,"async"),d.ALo(19,"tuiFieldError"),d.qZA(),d.qZA()),2&e&&(d.xp6(13),d.Q6J("formGroup",t.testForm),d.xp6(2),d.Q6J("expandable",!0)("maxLength",t.maxLength)("tuiTextfieldLabelOutside",!0),d.xp6(2),d.Q6J("error",d.lcZ(18,5,d.lcZ(19,7,d.DdM(9,q)))))},directives:[a._Y,a.JL,a.sg,y.A,g.FC,f.B,a.JJ,a.u,C.bZ,b.x,w.v],pipes:[o.Ov,U.A],styles:[".description[_ngcontent-%COMP%]{margin-bottom:2rem}.steps[_ngcontent-%COMP%]{list-style-type:disc;padding-left:.9375rem;margin:1rem 0}.steps_optional[_ngcontent-%COMP%]{list-style-type:circle}"],changeDetection:0}),e})();var V=n(79121),v=n(91030);let J=(()=>{class e{constructor(){this.value=""}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-textarea-example-5"]],decls:3,vars:1,consts:[[1,"b-form",3,"ngModel","ngModelChange"],["maxlength","97","placeholder","Write a few words about yourself","tuiTextfield",""]],template:function(e,t){1&e&&(d.TgZ(0,"tui-textarea",0),d.NdJ("ngModelChange",(function(e){return t.value=e})),d._uU(1," Bio "),d._UZ(2,"textarea",1),d.qZA()),2&e&&d.Q6J("ngModel",t.value)},directives:[g.FC,f.B,a.JJ,a.On,v.M],encapsulation:2,changeDetection:0}),e})();var M=n(64374);let N=(()=>{class e{constructor(){this.value="مونتى پايثون و ساعات معروفين انهم ذى پايثونز كانو مجموعة كوميديا سرياليه من بريطانيا"}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-textarea-example-6"]],decls:3,vars:3,consts:[["tuiHintContent","معلومات شخصيه","tuiHintDirection","bottom-right",1,"input",3,"maxLength","tuiTextfieldCleaner","ngModel","ngModelChange"],["tuiTextfield",""]],template:function(e,t){1&e&&(d.TgZ(0,"tui-textarea",0),d.NdJ("ngModelChange",(function(e){return t.value=e})),d._uU(1," مونتى بايثون "),d._UZ(2,"textarea",1),d.qZA()),2&e&&d.Q6J("maxLength",100)("tuiTextfieldCleaner",!0)("ngModel",t.value)},directives:[g.FC,f.B,C.bZ,M.b,a.JJ,a.On,v.M],styles:[".input[_ngcontent-%COMP%]{width:20rem;direction:rtl;text-align:right}"],changeDetection:0}),e})();var I=n(10977),Q=n(6707),F=n(88494),H=n(3729),O=n(10200),S=n(61544),k=n(60404),D=n(54218),B=n(66596),Y=n(91473),z=n(83074);function E(e,t){if(1&e&&(d.TgZ(0,"p"),d._uU(1,"Textfield for multiline input. It can grow with its content."),d.qZA(),d.TgZ(2,"tui-doc-example",2),d._UZ(3,"tui-textarea-example-1"),d.qZA(),d.TgZ(4,"tui-doc-example",3),d._UZ(5,"tui-textarea-example-2"),d.qZA(),d.TgZ(6,"tui-doc-example",4),d._UZ(7,"tui-textarea-example-3"),d.qZA(),d.TgZ(8,"tui-doc-example",5),d._UZ(9,"tui-textarea-example-4"),d.qZA(),d.TgZ(10,"tui-doc-example",6),d.TgZ(11,"tui-notification",7),d._uU(12," If you need to set some attributes or listen to events on native "),d.TgZ(13,"code"),d._uU(14,"textarea"),d.qZA(),d._uU(15," , you can put it inside with "),d.TgZ(16,"code"),d._uU(17,"Textfield"),d.qZA(),d._uU(18," directive as shown below "),d.qZA(),d._UZ(19,"tui-textarea-example-5"),d.qZA(),d.TgZ(20,"tui-doc-example",8),d._UZ(21,"tui-textarea-example-6"),d.qZA()),2&e){const e=d.oxw();d.xp6(2),d.Q6J("content",e.example1),d.xp6(2),d.Q6J("content",e.example2),d.xp6(2),d.Q6J("content",e.example3),d.xp6(2),d.Q6J("content",e.example4),d.xp6(2),d.Q6J("content",e.example5),d.xp6(10),d.Q6J("content",e.example6)}}function G(e,t){1&e&&d._uU(0," Disabled state (formControl.disable()) ")}function X(e,t){1&e&&d._uU(0," Control height can be expanded to show all content ")}function j(e,t){1&e&&(d._uU(0," Use maxLength for highlighting extra characters. If you want to limit the number of characters, add "),d._UZ(1,"code",19),d._uU(2," with native maxlength attribute. "))}function R(e,t){1&e&&(d._uU(0," A number of visible rows in "),d.TgZ(1,"code"),d._uU(2,"expandable"),d.qZA(),d._uU(3," mode "))}function W(e,t){1&e&&d._uU(0," Icon content. If content is a string, it is used as stringified svg or a name of an icon ")}function K(e,t){1&e&&d._uU(0," Text displayed in a text field when the it has no value ")}function $(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"tui-doc-demo"),d.TgZ(1,"tui-textarea",9),d._uU(2," Textfield for multiline input. It can grow with its content. "),d._UZ(3,"textarea",10),d.qZA(),d.qZA(),d.TgZ(4,"tui-doc-documentation"),d.YNc(5,G,1,0,"ng-template",11),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().disabled=t})),d.YNc(6,X,1,0,"ng-template",12),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().expandable=t})),d.YNc(7,j,3,0,"ng-template",13),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().maxLength=t})),d.YNc(8,R,4,0,"ng-template",14),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().rows=t})),d.YNc(9,W,1,0,"ng-template",15),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().icon=t})),d.qZA(),d._UZ(10,"inherited-documentation"),d.TgZ(11,"tui-doc-documentation",16),d.TgZ(12,"p"),d._uU(13," Learn more how to set some attributes or listen to events on native textarea in this "),d.TgZ(14,"a",17),d._uU(15," example "),d.qZA(),d.qZA(),d.YNc(16,K,1,0,"ng-template",18),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().placeholder=t})),d.qZA()}if(2&e){const e=d.oxw();d.xp6(1),d.Q6J("expandable",e.expandable)("focusable",e.focusable)("formControl",e.control)("maxLength",e.maxLength)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("rows",e.rows)("tuiHintAppearance",e.hintAppearance)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldCustomContent",e.customContent)("tuiTextfieldIcon",e.icon)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size),d.xp6(2),d.Q6J("placeholder",e.placeholder),d.xp6(2),d.Q6J("documentationPropertyValue",e.disabled),d.xp6(1),d.Q6J("documentationPropertyValue",e.expandable),d.xp6(1),d.Q6J("documentationPropertyValues",e.maxLengthVariants)("documentationPropertyValue",e.maxLength),d.xp6(1),d.Q6J("documentationPropertyValues",e.rowsVariants)("documentationPropertyValue",e.rows),d.xp6(1),d.Q6J("documentationPropertyValues",e.iconVariants)("documentationPropertyValue",e.icon),d.xp6(7),d.Q6J("documentationPropertyValue",e.placeholder)}}function ee(e,t){if(1&e&&(d.TgZ(0,"ol",20),d.TgZ(1,"li"),d.TgZ(2,"p"),d._uU(3," Import "),d.TgZ(4,"code"),d._uU(5,"TuiTextareaModule"),d.qZA(),d._uU(6," into a module where you want to use our component "),d.qZA(),d._UZ(7,"tui-doc-code",21),d.qZA(),d.TgZ(8,"li"),d.TgZ(9,"p"),d._uU(10," Declare a form ( "),d.TgZ(11,"code"),d._uU(12,"FormGroup"),d.qZA(),d._uU(13," ) or a control ( "),d.TgZ(14,"code"),d._uU(15,"FormControl"),d.qZA(),d._uU(16," ) in your component: "),d.qZA(),d._UZ(17,"tui-doc-code",22),d.qZA(),d.TgZ(18,"li"),d.TgZ(19,"p"),d._uU(20,"Add to the template:"),d.qZA(),d._UZ(21,"tui-doc-code",23),d.qZA(),d.qZA()),2&e){const e=d.oxw();d.xp6(7),d.Q6J("code",e.exampleModule),d.xp6(10),d.Q6J("code",e.exampleForm),d.xp6(4),d.Q6J("code",e.exampleHtml)}}let te=(()=>{class e extends s.b{constructor(){super(...arguments),this.example1={TypeScript:n.e(96927).then(n.t.bind(n,96927,17)),HTML:n.e(60409).then(n.t.bind(n,60409,17))},this.example2={TypeScript:n.e(85153).then(n.t.bind(n,85153,17)),HTML:n.e(28990).then(n.t.bind(n,28990,17)),LESS:n.e(52410).then(n.t.bind(n,52410,17))},this.example3={TypeScript:n.e(53597).then(n.t.bind(n,53597,17)),HTML:n.e(80162).then(n.t.bind(n,80162,17))},this.example4={TypeScript:n.e(46052).then(n.t.bind(n,46052,17)),HTML:n.e(59819).then(n.t.bind(n,59819,17)),LESS:n.e(60930).then(n.t.bind(n,60930,17))},this.example5={TypeScript:n.e(99438).then(n.t.bind(n,99438,17)),HTML:n.e(83140).then(n.t.bind(n,83140,17))},this.example6={TypeScript:n.e(27887).then(n.t.bind(n,27887,17)),HTML:n.e(79285).then(n.t.bind(n,79285,17)),LESS:n.e(10875).then(n.t.bind(n,10875,17))},this.exampleModule=n.e(57614).then(n.t.bind(n,57614,17)),this.exampleHtml=n.e(65499).then(n.t.bind(n,65499,17)),this.exampleForm=n.e(60330).then(n.t.bind(n,60330,17)),this.maxLengthVariants=[50,100,500],this.maxLength=null,this.iconVariants=["","tuiIconSearchLarge","tuiIconCalendarLarge"],this.icon=this.iconVariants[0],this.rowsVariants=[8,15,30],this.rows=this.rowsVariants[0],this.expandable=!1,this.control=new a.NI,this.sizeVariants=["m","l"],this.size=this.sizeVariants[1],this.placeholder="Placeholder"}}return e.ɵfac=function(){let t;return function(n){return(t||(t=d.n5z(e)))(n||e)}}(),e.ɵcmp=d.Xpm({type:e,selectors:[["example-tui-textarea"]],features:[d._Bn([{provide:p.x,useExisting:(0,d.Gpc)((()=>e))},(0,r.PR)(["tuiTextfieldPrefix","tuiTextfieldPostfix","tuiTextfieldFiller"])]),d.qOj],decls:4,vars:0,consts:[["header","Textarea","package","KIT","type","components"],["pageTab",""],["id","base","heading","A simple field and expandable",3,"content"],["id","large","heading","Custom size",3,"content"],["id","label-outside","heading","With label outside",3,"content"],["id","extra-chars-highlight","heading","With extra characters highlight",3,"content"],["id","native","heading","Native attributes",3,"content"],[1,"tui-space_bottom-4","b-form"],["id","rtl","heading","Direction: RTL",3,"content"],[1,"b-form",3,"expandable","focusable","formControl","maxLength","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","rows","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldIcon","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldSize"],["tuiTextfield","",3,"placeholder"],["documentationPropertyMode","input","documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","expandable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxLength","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","rows","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiTextfieldIcon","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["heading","Native <textarea> inside TuiTextarea"],["fragment","native","routerLink","/components/textarea","tuiLink",""],["documentationPropertyMode","input","documentationPropertyName","placeholder","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["tuiText","<textarea tuiTextfield></textarea>"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-doc-page",0),d.YNc(1,E,22,6,"ng-template",1),d.YNc(2,$,17,28,"ng-template",1),d.YNc(3,ee,22,3,"ng-template",1),d.qZA())},directives:[m.q,x.n,h.f,T,Z,_,P,V.L,J,N,I.F,g.FC,f.B,a.JJ,a.oH,C.bZ,M.b,Q.B,F.A,H.a,b.x,O.s,v.M,S.z,k.B,D.w,i.yS,B.V,Y.v,z.c],encapsulation:2,changeDetection:0}),e})(),ne=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({imports:[[l.TuiTextareaModule,r.fV,c.f,a.UX,a.u5,u.TuiSvgModule,o.ez,l.TuiRadioListModule,u.TuiButtonModule,u.TuiLinkModule,u.TuiLabelModule,u.TuiTextfieldControllerModule,u.TuiHintModule,u.TuiNotificationModule,u.TuiErrorModule,l.TuiFieldErrorPipeModule,i.Bz.forChild((0,r.Ve)(te)),r.Zp]]}),e})()}}]);