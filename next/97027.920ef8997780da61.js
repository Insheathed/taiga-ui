(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97027],{97027:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var i=n(16727),o=n(75407),s=n(19908),c=n(56366),a=n(7826),r=n(61204),l=n(55514),u=n(70948),p=n(25358),d=n(64204),m=n(76145),g=n(44046);const b=["preview"];function h(e,t){1&e&&(o.qex(0),o.j41(1,"div",9),o.nrm(2,"tui-icon",10),o.j41(3,"div"),o.EFF(4,"Preview unavailable"),o.k0s()(),o.bVm())}function f(e,t){if(1&e&&o.nrm(0,"img",11),2&e){const e=t.ngIf;o.Y8G("src",e,o.B4B)}}function w(e,t){1&e&&o.nrm(0,"tui-loader",12)}function v(e,t){if(1&e){const e=o.RV6();o.j41(0,"tui-preview",2),o.nI1(1,"async"),o.nI1(2,"async"),o.nI1(3,"async"),o.j41(4,"tui-preview-title"),o.EFF(5),o.nI1(6,"async"),o.k0s(),o.j41(7,"tui-preview-pagination",3),o.bIt("indexChange",(function(t){o.eBV(e);const n=o.XpG();return o.Njj(n.index$$.next(t))})),o.k0s(),o.j41(8,"button",4),o.bIt("click",(function(){o.eBV(e);const t=o.XpG();return o.Njj(t.download())})),o.EFF(9," Download "),o.k0s(),o.j41(10,"button",5),o.bIt("click",(function(){const t=o.eBV(e).$implicit;return o.Njj(t.complete())})),o.EFF(11," Close "),o.k0s(),o.DNE(12,h,5,0,"ng-container",6),o.nI1(13,"async"),o.DNE(14,f,1,1,"img",7),o.nI1(15,"async"),o.DNE(16,w,1,0,"tui-loader",8),o.nI1(17,"async"),o.k0s()}if(2&e){const e=o.XpG();o.Y8G("rotatable",!o.bMT(1,8,e.contentUnavailable$))("zoomable",!o.bMT(2,10,e.contentUnavailable$)&&!o.bMT(3,12,e.loading$)),o.R7$(5),o.JRh(o.bMT(6,14,e.title$)),o.R7$(2),o.Y8G("index",e.index$$.value)("length",e.items.length),o.R7$(5),o.Y8G("ngIf",o.bMT(13,16,e.contentUnavailable$)),o.R7$(2),o.Y8G("ngIf",o.bMT(15,18,e.imageSrc$)),o.R7$(2),o.Y8G("ngIf",o.bMT(17,20,e.loading$))}}const $=(()=>{var e;class t{constructor(){this.previewDialogService=(0,o.WQX)(a.s6r),this.items=[{title:"some table.xlsx",hasPreview:!1},{title:"Content #2",hasPreview:!0}],this.index$$=new r.t(0),this.item$=this.index$$.pipe((0,l.T)((e=>this.items[e])),(0,u.p)(s.Ajz)),this.title$=this.item$.pipe((0,l.T)((e=>e.title))),this.contentUnavailable$=this.item$.pipe((0,l.T)((e=>!e.hasPreview))),this.imageSrc$=this.item$.pipe((0,p.n)((e=>e.hasPreview?this.emulateBackendRequest().pipe((0,d.Z)("")):(0,m.of)(null)))),this.loading$=this.imageSrc$.pipe((0,l.T)((e=>""===e)))}show(){this.previewDialogService.open(this.preview||"").subscribe()}download(){console.info("downloading...")}emulateBackendRequest(){return(0,g.O)(1500).pipe((0,l.T)((()=>"https://ng-web-apis.github.io/dist/assets/images/web-api.svg")))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=o.VBU({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){if(1&e&&o.GBs(b,5),2&e){let e;o.mGM(e=o.lsd())&&(t.preview=e.first)}},standalone:!0,exportAs:"Example4",features:[o.aNF],decls:4,vars:0,consts:[["size","m","tuiButton","","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],[3,"rotatable","zoomable"],[3,"index","length","indexChange"],["iconStart","@tui.download","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["iconStart","@tui.x","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],[4,"ngIf"],["alt","img source","height","512","width","512",3,"src",4,"ngIf"],["size","xl","class","t-loader",4,"ngIf"],["tuiTheme","dark",1,"t-container"],["icon","@tui.file",1,"t-icon"],["alt","img source","height","512","width","512",3,"src"],["size","xl",1,"t-loader"]],template:function(e,t){1&e&&(o.j41(0,"button",0),o.bIt("click",(function(){return t.show()})),o.EFF(1," Show preview\n"),o.k0s(),o.DNE(2,v,18,22,"ng-template",null,1,o.C5r))},dependencies:[i.Jj,i.bT,c.paf,c.qo5,c.apU,a.ooG,a.bq3,a.PMc,a.vPw],styles:[".content[_ngcontent-%COMP%]{background-color:#f5f1f1;inline-size:25rem;block-size:37.5rem;padding:2.5rem;border-radius:.75rem}.t-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:var(--tui-text-secondary)}.t-icon[_ngcontent-%COMP%]{margin-bottom:.75rem;inline-size:5rem;block-size:5rem}.t-loader[_ngcontent-%COMP%]{inline-size:4rem}"],changeDetection:0}),t})()}}]);