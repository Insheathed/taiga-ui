(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[44097],{44097:(e,t,i)=>{i.r(t),i.d(t,{default:()=>U});var n=i(4594),o=i(35548),c=i(7233),a=i(20764),s=i(75331),l=i(60902),r=i(51160),u=i(13591),g=i(275),p=i(905),d=i(97318),h=i(84439),m=i(82174),w=i(45962),f=i(96799),v=i(7443);const x=["preview"];function b(e,t){1&e&&(o.ynx(0),o.TgZ(1,"div",9),o._UZ(2,"tui-icon",10),o.TgZ(3,"div"),o._uU(4,"Preview unavailable"),o.qZA()(),o.BQk())}function Z(e,t){if(1&e&&o._UZ(0,"img",11),2&e){const e=t.ngIf;o.Q6J("src",e,o.LSH)}}function $(e,t){1&e&&o._UZ(0,"tui-loader",12)}function A(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"tui-preview",2),o.ALo(1,"async"),o.ALo(2,"async"),o.ALo(3,"async"),o.TgZ(4,"tui-preview-title"),o._uU(5),o.ALo(6,"async"),o.qZA(),o.TgZ(7,"tui-preview-pagination",3),o.NdJ("indexChange",(function(t){o.CHM(e);const i=o.oxw();return o.KtG(i.index$$.next(t))})),o.qZA(),o.TgZ(8,"button",4),o.NdJ("click",(function(){o.CHM(e);const t=o.oxw();return o.KtG(t.download())})),o._uU(9," Download "),o.qZA(),o.TgZ(10,"button",5),o.NdJ("click",(function(){const t=o.CHM(e).$implicit;return o.KtG(t.complete())})),o._uU(11," Close "),o.qZA(),o.YNc(12,b,5,0,"ng-container",6),o.ALo(13,"async"),o.YNc(14,Z,1,1,"img",7),o.ALo(15,"async"),o.YNc(16,$,1,0,"tui-loader",8),o.ALo(17,"async"),o.qZA()}if(2&e){const e=o.oxw();o.Q6J("rotatable",!o.lcZ(1,8,e.contentUnavailable$))("zoomable",!o.lcZ(2,10,e.contentUnavailable$)&&!o.lcZ(3,12,e.loading$)),o.xp6(5),o.Oqu(o.lcZ(6,14,e.title$)),o.xp6(2),o.Q6J("index",e.index$$.value)("length",e.items.length),o.xp6(5),o.Q6J("ngIf",o.lcZ(13,16,e.contentUnavailable$)),o.xp6(2),o.Q6J("ngIf",o.lcZ(15,18,e.imageSrc$)),o.xp6(2),o.Q6J("ngIf",o.lcZ(17,20,e.loading$))}}const U=(()=>{var e;class t{constructor(){this.previewDialogService=(0,o.f3M)(s.TuiPreviewDialogService),this.items=[{title:"some table.xlsx",hasPreview:!1},{title:"Content #2",hasPreview:!0}],this.index$$=new l.X(0),this.item$=this.index$$.pipe((0,r.U)((e=>this.items[e])),(0,u.h)(c.tuiIsPresent)),this.title$=this.item$.pipe((0,r.U)((e=>e.title))),this.contentUnavailable$=this.item$.pipe((0,r.U)((e=>!e.hasPreview))),this.imageSrc$=this.item$.pipe((0,g.w)((e=>e.hasPreview?this.emulateBackendRequest().pipe((0,p.O)("")):(0,d.of)(null)))),this.loading$=this.imageSrc$.pipe((0,r.U)((e=>""===e)))}show(){this.previewDialogService.open(this.preview||"").subscribe()}download(){console.info("downloading...")}emulateBackendRequest(){return(0,h.H)(1500).pipe((0,r.U)((()=>"https://ng-web-apis.github.io/dist/assets/images/web-api.svg")))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=o.Xpm({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){if(1&e&&o.Gf(x,5),2&e){let e;o.iGM(e=o.CRH())&&(t.preview=e.first)}},standalone:!0,exportAs:"ExampleComponent4",features:[o.jDz],decls:4,vars:0,consts:[["size","m","tuiButton","","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],[3,"rotatable","zoomable"],[3,"index","length","indexChange"],["iconLeft","@tui.download","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["iconLeft","@tui.x","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],[4,"ngIf"],["alt","img source","height","512","width","512",3,"src",4,"ngIf"],["size","xl","class","t-loader",4,"ngIf"],[1,"t-container"],["icon","@tui.file",1,"t-icon"],["alt","img source","height","512","width","512",3,"src"],["size","xl",1,"t-loader"]],template:function(e,t){1&e&&(o.TgZ(0,"button",0),o.NdJ("click",(function(){return t.show()})),o._uU(1," Show preview\n"),o.qZA(),o.YNc(2,A,18,22,"ng-template",null,1,o.W1O))},dependencies:[a.TuiButton,s.TuiPreview,m.m,w.v,f.S,v.i,n.Ov,n.O5,a.TuiIcon,a.TuiLoader],styles:[".content[_ngcontent-%COMP%]{background-color:#f5f1f1;width:25rem;height:37.5rem;padding:2.5rem;border-radius:.75rem}.t-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:var(--tui-text-02-night)}.t-icon[_ngcontent-%COMP%]{margin-bottom:.75rem;transform:scale(4);height:5rem}.t-loader[_ngcontent-%COMP%]{width:4rem}"],changeDetection:0}),t})()}}]);