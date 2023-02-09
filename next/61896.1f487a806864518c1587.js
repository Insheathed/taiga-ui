"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[61896],{61896:(B,p,o)=>{o.r(p),o.d(p,{ExampleTuiEditorEmbedYoutubeModule:()=>R});var c=o(12057),s=o(24751),E=o(33982),g=o(29851),d=o(48014),T=o(68339),r=o(76040),t=o(74788),h=o(88331),v=o(66596),f=o(57068),F=o(64762),M=o(91211),y=o(69303),O=o(62939),D=o(33250),x=o(76189),C=o(17163),b=o(87623);const S=["dropdown"];function Z(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",4),t.TgZ(1,"label",5),t.TgZ(2,"div",6),t._uU(3,"Youtube URL"),t.qZA(),t.TgZ(4,"div",7),t.TgZ(5,"tui-input-inline",8),t.NdJ("ngModelChange",function(l){return t.CHM(n),t.oxw().url=l})("keydown.enter",function(){t.CHM(n);const l=t.oxw();return l.insertYoutubeVideo(l.url)}),t._uU(6),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=i.$implicit,u=t.oxw();t.Q6J("tuiActiveZoneParent",n),t.xp6(5),t.ekj("t-input_filled",u.url),t.Q6J("ngModel",u.url),t.xp6(1),t.hij(" ",u.placeholder," ")}}let U=(()=>{class e{constructor(n){this.editor=n,this.youtubeLogo='<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'><svg height="24px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x33_95-youtube"><g><path d="M476.387,144.888c-5.291-19.919-20.878-35.608-40.67-40.933C399.845,94.282,256,94.282,256,94.282    s-143.845,0-179.719,9.674c-19.791,5.325-35.378,21.013-40.668,40.933c-9.612,36.105-9.612,111.438-9.612,111.438    s0,75.334,9.612,111.438c5.29,19.92,20.877,34.955,40.668,40.281C112.155,417.719,256,417.719,256,417.719    s143.845,0,179.717-9.674c19.792-5.326,35.379-20.361,40.67-40.281c9.612-36.104,9.612-111.438,9.612-111.438    S485.999,180.994,476.387,144.888z" style="fill:#FF0000;"/><polygon points="208.954,324.723 208.954,187.93 329.18,256.328   " style="fill:#FFFFFF;"/></g></g><g id="Layer_1"/></svg>',this.placeholder="https://www.youtube.com/embed/j2_NnV7nU6s",this.url=""}insertYoutubeVideo(n){var u;if(n){const l=this.editor.state.selection.anchor;this.editor.enter(),this.editor.setTextSelection(l),this.editor.setYoutubeVideo({src:n,width:"100%"}),this.url="",null===(u=this.dropdown)||void 0===u||u.close()}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.TuiTiptapEditorService))},e.\u0275cmp=t.Xpm({type:e,selectors:[["youtube-tool"]],viewQuery:function(n,u){if(1&n&&t.Gf(S,5),2&n){let l;t.iGM(l=t.CRH())&&(u.dropdown=l.first)}},decls:5,vars:4,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["tuiIconButton","","type","button","size","s","appearance","icon","automation-id","youtube-tool__button",1,"tool-button",3,"icon","pseudoActive","focusable"],["youtubeDropdown",""],[1,"youtube-tool-content",3,"tuiActiveZoneParent"],[1,"t-label"],[1,"t-label-properties"],[1,"t-url"],["tuiAutoFocus","",1,"t-input",3,"ngModel","ngModelChange","keydown.enter"]],template:function(n,u){if(1&n&&(t.TgZ(0,"tui-hosted-dropdown",0,1),t._UZ(2,"button",2),t.YNc(3,Z,7,5,"ng-template",null,3,t.W1O),t.qZA()),2&n){const l=t.MAs(1),m=t.MAs(4);t.Q6J("content",m),t.xp6(2),t.Q6J("icon",u.youtubeLogo)("pseudoActive",l.open)("focusable",l.open)}},directives:[O.o,D.Ek,x.v,C.e,b.l,s.JJ,s.On],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.youtube-tool-content[_ngcontent-%COMP%]{display:flex;min-height:4rem;align-items:center;padding-right:.75rem}.t-label[_ngcontent-%COMP%]{height:var(--tui-height-l);box-sizing:border-box;padding:.4375rem 1rem;min-width:12.5rem;max-width:25rem;width:100%}.t-input[_ngcontent-%COMP%]{flex:1;color:var(--tui-text-02)}.t-input_filled[_ngcontent-%COMP%]{color:var(--tui-text-01)}"],changeDetection:0}),e})();var Y=o(82707),A=o(34880);class a{constructor(i){this.sanitizer=i,this.builtInTools=[d.TuiEditorTool.Undo],this.control=new s.NI('\n        <p>Editor now supports YouTube embeds!</p>\n        <div data-youtube-video>\n            <iframe width="100%" src="https://www.youtube.com/watch?v=KdO8CFCXQu0"></iframe>\n        </div>\n        <p>Try adding your own video to this editor!</p>\n    ',s.kI.required)}safe(i){return this.sanitizer.bypassSecurityTrustHtml(i)}}a.\u0275fac=function(i){return new(i||a)(t.Y36(M.H7))},a.\u0275cmp=t.Xpm({type:a,selectors:[["tui-editor-embed-youtube-example-1"]],features:[t._Bn([{provide:d.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(o.bind(o,2823)).then(({StarterKit:e})=>e),o.e(89325).then(o.bind(o,89325)).then(({Youtube:e})=>e)]}])],decls:13,vars:4,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"],[3,"innerHTML"]],template:function(i,n){1&i&&(t.TgZ(0,"tui-editor",0),t.ynx(1,1),t._UZ(2,"youtube-tool",2),t.TgZ(3,"span",3),t._UZ(4,"tui-svg",4),t._uU(5," click it "),t.qZA(),t.BQk(),t.qZA(),t.TgZ(6,"h4"),t._uU(7,"HTML:"),t.qZA(),t._UZ(8,"div",5),t.TgZ(9,"h4"),t._uU(10,"Text:"),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA()),2&i&&(t.Q6J("formControl",n.control)("tools",n.builtInTools),t.xp6(8),t.Q6J("innerHTML",n.safe(n.control.value),t.oJD),t.xp6(4),t.Oqu(n.control.value))},directives:[y.a,s.JJ,s.oH,U,Y.w,A.P],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),(0,F.gn)([T.tuiPure],a.prototype,"safe",null);let L=(()=>{class e{constructor(){this.example1={HTML:o.e(67844).then(o.t.bind(o,67844,17)),TypeScript:o.e(93400).then(o.t.bind(o,93400,17)),LESS:o.e(75005).then(o.t.bind(o,75005,17)),"youtube-tool/youtube-tool.component.ts":o.e(76852).then(o.t.bind(o,76852,17)),"youtube-tool/youtube-tool.template.html":o.e(79648).then(o.t.bind(o,79648,17)),"youtube-tool/youtube-tool.styles.less":o.e(58706).then(o.t.bind(o,58706,17)),"youtube-tool/youtube-tool.module.ts":o.e(90667).then(o.t.bind(o,90667,17))}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["editor-embed-youtube"]],features:[t._Bn([{provide:d.TUI_EDITOR_EXTENSIONS,useValue:d.defaultEditorExtensions}])],decls:7,vars:1,consts:function(){let i,n;return i=$localize`:␟c1a95de6ffd08f110496afe73d9e3e9631407ea9␟2361436632859407436: Rich Text Editor based on ${"\ufffd#3\ufffd"}:START_LINK: TipTap Editor ${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_LINK: for using with Angular forms. For safety reasons use a ${"\ufffd#4\ufffd"}:START_LINK_1: sanitizer ${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_LINK: with this component. `,i=t.Zx4(i),n=$localize`:␟a1757207e52c5549c40ea1e5226ef65eaf679bf7␟5543283447328929958:Youtube extension`,[["header","Editor - Youtube","package","ADDON-EDITOR","type","components"],i,["tuiLink","","href","https://www.tiptap.dev/"],["tuiLink","","routerLink","/icon-set","fragment","sanitizer"],["id","youtube","heading",n,3,"content"]]},template:function(n,u){1&n&&(t.TgZ(0,"tui-doc-page",0),t.TgZ(1,"p"),t.tHW(2,1),t._UZ(3,"a",2),t._UZ(4,"a",3),t.N_p(),t.qZA(),t.TgZ(5,"tui-doc-example",4),t._UZ(6,"tui-editor-embed-youtube-example-1"),t.qZA(),t.qZA()),2&n&&(t.xp6(5),t.Q6J("content",u.example1))},directives:[h.q,v.V,E.yS,f.f,a],encapsulation:2,changeDetection:0}),e})();var N=o(48611);let I=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,r.TuiButtonModule,r.TuiHostedDropdownModule,T.TuiActiveZoneModule,r.TuiDropdownModule,N.TuiInputInlineModule,s.u5]]}),e})(),R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,T.TuiActiveZoneModule,r.TuiSvgModule,r.TuiLinkModule,r.TuiHostedDropdownModule,r.TuiButtonModule,g.fV,s.u5,s.UX,d.TuiEditorModule,d.TuiEditorSocketModule,I,E.Bz.forChild((0,g.Ve)(L))]]}),e})()}}]);