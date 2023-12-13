(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[82944],{82944:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiInputDateTimeModule:()=>W});var o=n(12057),i=n(23738),a=n(33982),u=n(52404),r=n(64862),d=n(26485),c=n(75695),l=n(74788),p=n(4797),m=n(82880),s=n(98204),T=n(43560),Z=n(93525),f=n(66596),g=n(33772),h=n(79121),y=n(19233),A=n(64731),_=n(91030);let x=(()=>{class e{constructor(){this.testForm=new i.cw({testValue:new i.NI([new p.TuiDay(2017,2,15),null])})}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-input-date-time-example-1"]],decls:10,vars:4,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue"],["placeholder","OCT 26 1985 01:22","tuiTextfield",""]],template:function(e,t){1&e&&(l.TgZ(0,"form",0),l.TgZ(1,"tui-input-date-time",1),l._uU(2," Choose date and time "),l._UZ(3,"input",2),l.qZA(),l.TgZ(4,"p"),l._uU(5,"Form value:"),l.qZA(),l.TgZ(6,"pre"),l.TgZ(7,"code"),l._uU(8),l.ALo(9,"json"),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.Q6J("formGroup",t.testForm),l.xp6(8),l.Oqu(l.lcZ(9,2,t.testForm.value)))},directives:[i._Y,i.JL,i.sg,y.u,A.c,i.JJ,i.u,_.M],pipes:[o.Ts],encapsulation:2,changeDetection:0}),e})(),U=(()=>{class e{constructor(){this.testForm=new i.cw({testValue:new i.NI([new p.TuiDay(2017,2,15),null])})}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-input-date-time-example-2"]],decls:19,vars:4,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","timeMode","HH:MM"],["formControlName","testValue","timeMode","HH:MM:SS"],["formControlName","testValue","timeMode","HH:MM:SS.MSS"]],template:function(e,t){1&e&&(l.TgZ(0,"form",0),l.TgZ(1,"p"),l._uU(2,"Default:"),l.qZA(),l.TgZ(3,"tui-input-date-time",1),l._uU(4," Choose date and time "),l.qZA(),l.TgZ(5,"p"),l._uU(6,"With seconds:"),l.qZA(),l.TgZ(7,"tui-input-date-time",2),l._uU(8," Choose date and time "),l.qZA(),l.TgZ(9,"p"),l._uU(10,"With SS and MS:"),l.qZA(),l.TgZ(11,"tui-input-date-time",3),l._uU(12," Choose date and time "),l.qZA(),l.TgZ(13,"p"),l._uU(14,"Form value:"),l.qZA(),l.TgZ(15,"pre"),l.TgZ(16,"code"),l._uU(17),l.ALo(18,"json"),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.Q6J("formGroup",t.testForm),l.xp6(17),l.Oqu(l.lcZ(18,2,t.testForm.value)))},directives:[i._Y,i.JL,i.sg,y.u,A.c,i.JJ,i.u],pipes:[o.Ts],encapsulation:2,changeDetection:0}),e})(),M=(()=>{class e{constructor(){this.control=new i.NI([new p.TuiDay(2017,2,15),new p.TuiTime(12,30)])}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-input-date-time-example-3"]],features:[l._Bn([{provide:p.TUI_DATE_FORMAT,useValue:"YMD"},{provide:p.TUI_DATE_SEPARATOR,useValue:"/"}])],decls:2,vars:1,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-input-date-time",0),l._uU(1," Choose date and time\n"),l.qZA()),2&e&&l.Q6J("formControl",t.control)},directives:[y.u,A.c,i.JJ,i.oH],encapsulation:2,changeDetection:0}),e})(),V=(()=>{class e extends p.AbstractTuiValueTransformer{constructor(){super(...arguments),this.separator=", "}fromControlValue(e){const[t,n=""]=e.split(this.separator);return t?[p.TuiDay.normalizeParse(t),n?p.TuiTime.fromString(n):null]:[null,null]}toControlValue([e,t]){return e?e.toString()+(t?`${this.separator}${t.toString()}`:""):""}}return e.ɵfac=function(){let t;return function(n){return(t||(t=l.n5z(e)))(n||e)}}(),e.ɵprov=l.Yz7({token:e,factory:e.ɵfac}),e})(),q=(()=>{class e{constructor(){this.control=new i.NI("19.01.2022, 12:33")}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-input-date-time-example-4"]],features:[l._Bn([{provide:d.TUI_DATE_TIME_VALUE_TRANSFORMER,useClass:V}])],decls:7,vars:2,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-input-date-time",0),l._uU(1," Choose date and time\n"),l.qZA(),l.TgZ(2,"p"),l._uU(3,"Stringified control value:"),l.qZA(),l.TgZ(4,"p"),l.TgZ(5,"code"),l._uU(6),l.qZA(),l.qZA()),2&e&&(l.Q6J("formControl",t.control),l.xp6(6),l.Oqu(t.control.value))},directives:[y.u,A.c,i.JJ,i.oH],encapsulation:2,changeDetection:0}),e})();var w=n(64374);let P=(()=>{class e{constructor(){this.testForm=new i.cw({testValue:new i.NI([new p.TuiDay(2017,2,15),new p.TuiTime(12,30)])})}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-input-date-time-example-5"]],features:[l._Bn([(0,d.tuiInputDateOptionsProvider)({nativePicker:!0})])],decls:4,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue",3,"tuiTextfieldCleaner"],["placeholder","10.10.1998 01:22","tuiTextfield",""]],template:function(e,t){1&e&&(l.TgZ(0,"form",0),l.TgZ(1,"tui-input-date-time",1),l._uU(2," Choose date and time "),l._UZ(3,"input",2),l.qZA(),l.qZA()),2&e&&(l.Q6J("formGroup",t.testForm),l.xp6(1),l.Q6J("tuiTextfieldCleaner",!0))},directives:[i._Y,i.JL,i.sg,y.u,A.c,i.JJ,i.u,w.b,_.M],encapsulation:2,changeDetection:0}),e})();var C=n(10977),b=n(61544),D=n(60404),v=n(54218),H=n(69956),J=n(84848),I=n(3729),S=n(68874),N=n(10200),Y=n(83074);function L(e,t){if(1&e&&(l.TgZ(0,"div",2),l.TgZ(1,"code"),l._uU(2,"InputDateTime"),l.qZA(),l._uU(3," allows to input date and time "),l.qZA(),l.TgZ(4,"h3"),l._uU(5,"DI-tokens for date localization:"),l.qZA(),l.TgZ(6,"dl"),l.TgZ(7,"dt"),l.TgZ(8,"code"),l._uU(9,"TUI_DATE_FORMAT"),l.qZA(),l.qZA(),l.TgZ(10,"dd",3),l._uU(11," active date format ( "),l.TgZ(12,"code"),l._uU(13,"'DMY' | 'MDY' | 'YMD'"),l.qZA(),l._uU(14," ) "),l.qZA(),l.TgZ(15,"dt"),l.TgZ(16,"code"),l._uU(17,"TUI_DATE_SEPARATOR"),l.qZA(),l.qZA(),l.TgZ(18,"dd"),l._uU(19,"single-character date's separator (dot, slash etc.)"),l.qZA(),l.qZA(),l.TgZ(20,"p",2),l.TgZ(21,"a",4),l._uU(22," See example "),l.qZA(),l._uU(23," with the usage of these tokens. "),l.qZA(),l.TgZ(24,"h3"),l._uU(25,"DI-tokens for input-configurations:"),l.qZA(),l.TgZ(26,"dl"),l.TgZ(27,"dt"),l.TgZ(28,"code"),l._uU(29,"TUI_DATE_TIME_VALUE_TRANSFORMER"),l.qZA(),l.qZA(),l.TgZ(30,"dd"),l._uU(31," custom format of control output ( "),l.TgZ(32,"code"),l._uU(33,"[TuiDay | null, TuiTime | null]"),l.qZA(),l._uU(34," is default). "),l.TgZ(35,"p"),l.TgZ(36,"a",5),l._uU(37," See example "),l.qZA(),l._uU(38," with string as control's output. "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(39,"tui-doc-example",6),l.TgZ(40,"tui-notification",7),l._uU(41," If you need to set some attributes or listen to events on native "),l.TgZ(42,"code"),l._uU(43,"input"),l.qZA(),l._uU(44," , you can put it inside with "),l.TgZ(45,"code"),l._uU(46,"Textfield"),l.qZA(),l._uU(47," directive as shown below "),l.qZA(),l._UZ(48,"tui-input-date-time-example-1"),l.qZA(),l.TgZ(49,"tui-doc-example",8),l._UZ(50,"tui-input-date-time-example-2"),l.qZA(),l.TgZ(51,"tui-doc-example",9),l._UZ(52,"tui-input-date-time-example-3"),l.qZA(),l.TgZ(53,"tui-doc-example",10),l._UZ(54,"tui-input-date-time-example-4"),l.qZA(),l.TgZ(55,"tui-doc-example",11),l.TgZ(56,"tui-notification",3),l._uU(57," Please note that native input datetime only supports HH:MM time mode "),l.qZA(),l._UZ(58,"tui-input-date-time-example-5"),l.qZA()),2&e){const e=l.oxw();l.xp6(39),l.Q6J("content",e.example1),l.xp6(10),l.Q6J("content",e.example2),l.xp6(2),l.Q6J("content",e.example3),l.xp6(2),l.Q6J("content",e.example4),l.xp6(2),l.Q6J("content",e.example5)}}function F(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"tui-input-date-time",22),l.NdJ("tuiDropdownOpenChange",(function(t){return l.CHM(e),l.oxw(2).dropdownOpen.next(t)})),l.ALo(1,"async"),l._uU(2," Choose date and time "),l.qZA()}if(2&e){const e=l.oxw(2);l.Udp("text-align",e.textAlign),l.Q6J("defaultActiveYearMonth",e.defaultActiveYearMonth)("disabledItemHandler",e.disabledItemHandler)("focusable",e.focusable)("formControl",e.control)("max",e.max)("min",e.min)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("timeMode",e.mode)("tuiDropdownOpen",!!l.lcZ(1,21,e.dropdownOpen))("tuiHintAppearance",e.hintAppearance)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)}}function O(e,t){1&e&&(l._uU(0," Disabled state (use "),l.TgZ(1,"code"),l._uU(2,"formControl.disable()"),l.qZA(),l._uU(3," ) "))}function Q(e,t){1&e&&(l.TgZ(0,"div"),l._uU(1,"A handler that gets a date and returns true if it is disabled."),l.qZA(),l.TgZ(2,"strong"),l._uU(3,"Must be a pure function"),l.qZA())}function E(e,t){1&e&&l._uU(0," Min date ")}function k(e,t){1&e&&l._uU(0," Max date ")}function z(e,t){1&e&&l._uU(0," The default active month that is shown when you opens calendar for the first time ")}function R(e,t){1&e&&l._uU(0," Time modes for SS and MS support ")}function B(e,t){1&e&&l._uU(0," Custom align content by text-align ")}function G(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"tui-doc-demo",12),l.YNc(1,F,3,23,"ng-template"),l.qZA(),l.TgZ(2,"tui-doc-documentation"),l.YNc(3,O,4,0,"ng-template",13),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().disabled=t})),l.YNc(4,Q,4,0,"ng-template",14),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().disabledItemHandler=t})),l.YNc(5,E,1,0,"ng-template",15),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().min=t})),l.YNc(6,k,1,0,"ng-template",16),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().max=t})),l.YNc(7,z,1,0,"ng-template",17),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().defaultActiveYearMonth=t})),l.YNc(8,R,1,0,"ng-template",18),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().mode=t})),l.qZA(),l._UZ(9,"inherited-documentation",19),l.TgZ(10,"tui-doc-documentation",20),l.YNc(11,B,1,0,"ng-template",21),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().textAlign=t})),l.qZA()}if(2&e){const e=l.oxw();l.Q6J("control",e.control),l.xp6(3),l.Q6J("documentationPropertyValue",e.disabled),l.xp6(1),l.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),l.xp6(1),l.Q6J("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),l.xp6(1),l.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),l.xp6(1),l.Q6J("documentationPropertyValues",e.defaultActiveYearMonthVariants)("documentationPropertyValue",e.defaultActiveYearMonth),l.xp6(1),l.Q6J("documentationPropertyValues",e.modeVariants)("documentationPropertyValue",e.mode),l.xp6(1),l.Q6J("dropdown",!0),l.xp6(2),l.Q6J("documentationPropertyValues",e.textAlignVariants)("documentationPropertyValue",e.textAlign)}}function X(e,t){if(1&e&&(l.TgZ(0,"ol",23),l.TgZ(1,"li"),l.TgZ(2,"p"),l._uU(3," Import an Angular module for forms and "),l.TgZ(4,"code"),l._uU(5,"TuiInputDateTimeModule"),l.qZA(),l._uU(6," in the same module where you want to use our component: "),l.qZA(),l._UZ(7,"tui-doc-code",24),l.qZA(),l.TgZ(8,"li"),l.TgZ(9,"p"),l._uU(10," Declare a form ( "),l.TgZ(11,"code"),l._uU(12,"FormGroup"),l.qZA(),l._uU(13," ) or a control ( "),l.TgZ(14,"code"),l._uU(15,"FormControl"),l.qZA(),l._uU(16," ) in your component: "),l.qZA(),l._UZ(17,"tui-doc-code",25),l.qZA(),l.TgZ(18,"li"),l._uU(19," Use in template: "),l._UZ(20,"tui-doc-code",26),l.qZA(),l.qZA()),2&e){const e=l.oxw();l.xp6(7),l.Q6J("code",e.exampleModule),l.xp6(10),l.Q6J("code",e.exampleForm),l.xp6(3),l.Q6J("code",e.exampleHtml)}}let j=(()=>{class e extends m.b{constructor(){super(...arguments),this.today=p.TuiDay.currentLocal(),this.exampleForm=n.e(93995).then(n.t.bind(n,93995,17)),this.exampleModule=n.e(13284).then(n.t.bind(n,13284,17)),this.exampleHtml=n.e(90794).then(n.t.bind(n,90794,17)),this.example1={TypeScript:n.e(12039).then(n.t.bind(n,12039,17)),HTML:n.e(41018).then(n.t.bind(n,41018,17))},this.example2={TypeScript:n.e(42673).then(n.t.bind(n,42673,17)),HTML:n.e(85654).then(n.t.bind(n,85654,17))},this.example3={TypeScript:n.e(34516).then(n.t.bind(n,34516,17)),HTML:n.e(17152).then(n.t.bind(n,17152,17))},this.example4={TypeScript:n.e(44010).then(n.t.bind(n,74832,17)),HTML:n.e(30855).then(n.t.bind(n,30855,17)),"value-transformer.ts":n.e(6014).then(n.t.bind(n,6014,17))},this.example5={TypeScript:n.e(62093).then(n.t.bind(n,62093,17)),HTML:n.e(32353).then(n.t.bind(n,32353,17))},this.minVariants=[p.TUI_FIRST_DAY,new p.TuiDay(2017,2,5),new p.TuiDay(1900,0,1),new p.TuiDay((new Date).getFullYear()+3,1,1),[this.today.append({day:-1}),new p.TuiTime(12,20)]],this.min=this.minVariants[0],this.maxVariants=[p.TUI_LAST_DAY,new p.TuiDay(2017,11,11),new p.TuiDay(2020,2,5),new p.TuiDay(2300,0,1),[this.today.append({day:1}),new p.TuiTime(16,20)]],this.max=this.maxVariants[0],this.defaultActiveYearMonthVariants=[p.TuiMonth.currentLocal(),new p.TuiMonth(2020,2),new p.TuiMonth(2017,2)],this.defaultActiveYearMonth=this.defaultActiveYearMonthVariants[0],this.disabledItemHandlerVariants=[p.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.itemsVariants=[[],[new d.TuiNamedDay(p.TUI_LAST_DAY.append({year:-1}),"Until today")]],this.items=this.itemsVariants[0],this.cleaner=!1,this.control=new i.NI(null,i.kI.required),this.modeVariants=["HH:MM","HH:MM:SS","HH:MM:SS.MSS"],this.mode=this.modeVariants[0]}}return e.ɵfac=function(){let t;return function(n){return(t||(t=l.n5z(e)))(n||e)}}(),e.ɵcmp=l.Xpm({type:e,selectors:[["example-tui-input-date-time"]],features:[l._Bn([{provide:s.x,useExisting:(0,l.Gpc)((()=>e))}]),l.qOj],decls:4,vars:0,consts:[["header","InputDateTime","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-9"],[1,"tui-space_bottom-5"],["fragment","date-localization","routerLink",".","tuiLink",""],["fragment","string-control-output","routerLink",".","tuiLink",""],["id","base","heading","Basic",3,"content"],[1,"tui-space_bottom-4","b-form"],["id","modes","heading","Modes",3,"content"],["id","date-localization","heading","Date localization",3,"content"],["id","string-control-output","heading","With control's output as string",3,"content"],["id","native","heading","Native input datetime",3,"content"],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","TuiDay | [TuiDay, TuiTime] | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","TuiDay | [TuiDay, TuiTime] | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","defaultActiveYearMonth","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","timeMode","documentationPropertyType","TuiTimeMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.text-align","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"defaultActiveYearMonth","disabledItemHandler","focusable","formControl","max","min","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","timeMode","tuiDropdownOpen","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiDropdownOpenChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-doc-page",0),l.YNc(1,L,59,5,"ng-template",1),l.YNc(2,G,12,15,"ng-template",1),l.YNc(3,X,21,3,"ng-template",1),l.qZA())},directives:[T.q,Z.n,a.yS,f.V,g.f,h.L,x,U,M,q,P,C.F,b.z,D.B,v.w,y.u,A.c,i.JJ,i.oH,H.o,J.bZ,w.b,I.a,S.x,N.s,Y.c],pipes:[o.Ov],encapsulation:2,changeDetection:0}),e})(),W=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=l.oAB({type:e}),e.ɵinj=l.cJS({imports:[[u.fV,c.f,i.UX,i.u5,o.ez,r.TuiLinkModule,d.TuiInputDateTimeModule,r.TuiHintModule,r.TuiTextfieldControllerModule,r.TuiNotificationModule,a.Bz.forChild((0,u.Ve)(j)),r.TuiDropdownModule]]}),e})()}}]);