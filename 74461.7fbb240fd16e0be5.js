(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[74461],{74461:(t,e,n)=>{n.r(e),n.d(e,{default:()=>x});var o=n(4594),i=n(35548),s=n(66094),r=n(47167),c=n(90339),u=n(77798),a=n(27830),l=n(2004),h=n(51160),p=n(70705),g=n(7911),f=n(41636);function d(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",8),i.NdJ("click",(function(){i.CHM(t);const e=i.oxw(2);return i.KtG(e.toggle(!1))})),i.TgZ(1,"tui-avatar",9),i.ALo(2,"tuiAutoColor"),i.ALo(3,"tuiInitials"),i.qZA(),i._uU(4),i.qZA()}if(2&t){const t=e.$implicit;i.xp6(1),i.Udp("background",i.lcZ(2,4,t)),i.Q6J("src",i.lcZ(3,6,t)),i.xp6(3),i.hij(" ",t," ")}}function m(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"header",2)(1,"tui-input",3),i.NdJ("mousedown.prevent",(function(){i.CHM(t);const e=i.oxw();return i.KtG(e.onFocus())})),i._uU(2," Find user "),i.qZA()(),i.TgZ(3,"div",4),i.NdJ("tuiSwipe",(function(e){i.CHM(t);const n=i.oxw();return i.KtG(n.onSwipe(e.direction))})),i.ALo(4,"async"),i.YNc(5,d,5,8,"button",5),i.ALo(6,"async"),i.qZA(),i.TgZ(7,"footer",6)(8,"button",7),i.NdJ("click",(function(){i.CHM(t);const e=i.oxw();return i.KtG(e.toggle(!1))})),i._uU(9," Invite more users "),i.qZA(),i._uU(10," Opens a separate app "),i.qZA()}if(2&t){const t=i.oxw();i.xp6(1),i.Q6J("formControl",t.search),i.xp6(2),i.Udp("height",i.lcZ(4,4,t.height$)),i.xp6(2),i.Q6J("ngForOf",i.lcZ(6,6,t.users$))}}const J=function(){return["29rem"]},v=function(t,e){return{stops:t,offset:e}},w=["John Doe","Jane Doe","John Smith","Jane Smith","John Johnson","Jane Johnson","John Williams","Jane Williams","John Brown","Jane Brown","John Davis","Jane Davis","John Miller","Jane Miller","John Wilson","Jane Wilson"],x=(()=>{var t;class e{constructor(){this.size$=(0,i.f3M)(c.TUI_WINDOW_SIZE),this.open=!1,this.offset=16,this.search=new s.NI(""),this.users$=(0,c.tuiControlValue)(this.search).pipe((0,h.U)((t=>w.filter((e=>(0,c.TUI_DEFAULT_MATCHER)(e,t)))))),this.height$=this.size$.pipe((0,h.U)((({height:t})=>`calc(${t-this.offset}px - 14rem`)))}toggle(t){this.open=t,t&&this.search.setValue("")}onSwipe(t){"top"===t&&this.scroll()}onFocus(){this.scroll(),this.input?.nativeFocusableElement?.focus()}scroll(){const t=this.input?.nativeFocusableElement,e=t?.closest("tui-sheet-dialog");e&&(e.scrollTop=e.clientHeight)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&i.Gf(l.K3Z,5),2&t){let t;i.iGM(t=i.CRH())&&(e.input=t.first)}},standalone:!0,exportAs:"ExampleComponent4",features:[i.jDz],decls:3,vars:6,consts:[["tuiButton","","type","button",3,"click"],[3,"tuiSheetDialog","tuiSheetDialogOptions","tuiSheetDialogChange"],[1,"header"],["tuiTextfieldIconLeft","@tui.search",3,"formControl","mousedown.prevent"],[1,"container",3,"tuiSwipe"],["class","item",3,"click",4,"ngFor","ngForOf"],[1,"footer"],["tuiButton","",3,"click"],[1,"item",3,"click"],["size","s",3,"src"]],template:function(t,e){1&t&&(i.TgZ(0,"button",0),i.NdJ("click",(function(){return e.toggle(!0)})),i._uU(1," Show/Hide\n"),i.qZA(),i.YNc(2,m,11,8,"ng-template",1),i.NdJ("tuiSheetDialogChange",(function(t){return e.toggle(t)}))),2&t&&(i.xp6(2),i.Q6J("tuiSheetDialog",e.open)("tuiSheetDialogOptions",i.WLB(3,v,i.DdM(2,J),e.offset)))},dependencies:[u.TuiButton,r.TuiSheetDialog,l.QfL,p.K,g.w,l.cnw,f.a,s.UX,s.JJ,s.oH,o.Ov,c.TuiSwipe,o.sg,a.TuiAvatar,u.TuiInitialsPipe,u.TuiAutoColorPipe],styles:[".header[_ngcontent-%COMP%]{padding:.25rem 0 1rem;background:var(--tui-elevation-01);z-index:1}.container[_ngcontent-%COMP%]{width:100%;padding-right:2rem;overflow:auto;overscroll-behavior:contain}.item[_ngcontent-%COMP%]{all:unset;height:3rem;display:flex;align-items:center;gap:1rem}.footer[_ngcontent-%COMP%]{position:sticky;bottom:0;display:flex;flex-direction:column;gap:1rem;text-align:center;margin:0 -1rem -1rem;padding:1rem;font:var(--tui-font-text-s);color:var(--tui-text-02);background:var(--tui-elevation-01);box-shadow:0 -1px var(--tui-base-03)}"],changeDetection:0}),e})()}}]);