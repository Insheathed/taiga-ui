(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[46654],{46654:(t,e,n)=>{n.d(e,{__:()=>ne,sJ:()=>m,ZD:()=>k,nS:()=>O,gJ:()=>D,Ey:()=>ce,lx:()=>ae,al:()=>ue,JO:()=>X,bI:()=>te,i7:()=>et,Jx:()=>ot,Zx:()=>tt,hO:()=>wt,z8:()=>pt,z2:()=>K,ke:()=>Rt,Br:()=>nt,zv:()=>kt,Wf:()=>Vt});var i=n(16727),s=n(75407),o=n(80572),r=n(85360);const a=(0,o.ET)((0,r.Y6)("showHideText")),c=(0,o.ET)((0,r.Y6)("paginationTexts"));var u=n(43707),l=n(50364),h=n(59996);const d=(0,o.gc)({icons:{hide:"@tui.eye-off",show:"@tui.eye",drag:"@tui.grip-vertical"}});var p=n(39599);function g(t,e){if(1&t&&(s.qex(0),s.EFF(1),s.bVm()),2&t){const t=e.polymorpheusOutlet;s.R7$(1),s.SpI(" ",t," ")}}const f=function(t,e){return{$implicit:t,index:e}};function b(t,e){if(1&t){const t=s.RV6();s.j41(0,"tui-tile")(1,"div",2)(2,"div",3),s.nrm(3,"tui-icon",4),s.DNE(4,g,2,1,"ng-container",5),s.k0s(),s.j41(5,"button",6),s.bIt("click",(function(){const e=s.eBV(t).$implicit,n=s.XpG();return s.Njj(n.toggle(e))}))("keydown.arrowDown.prevent",(function(){const e=s.eBV(t).index,n=s.XpG();return s.Njj(n.move(e,1))}))("keydown.arrowUp.prevent",(function(){const e=s.eBV(t).index,n=s.XpG();return s.Njj(n.move(e,-1))})),s.EFF(6),s.nI1(7,"async"),s.k0s()()()}if(2&t){const t=e.$implicit,n=e.index,i=s.XpG();s.xc7("order",i.order.get(n)),s.R7$(1),s.AVh("t-item_disabled",!i.isEnabled(t)),s.R7$(2),s.Y8G("icon",i.options.icons.drag),s.R7$(1),s.Y8G("polymorpheusOutlet",i.content)("polymorpheusOutletContext",s.l_i(11,f,t,n)),s.R7$(1),s.Y8G("iconStart",i.getIcon(t)),s.R7$(1),s.SpI(" ",s.bMT(7,9,i.showHideText$)," ")}}let m=(()=>{var t;class e{constructor(){this.dragging=!1,this.order=new Map,this.unsortedItems=[],this.options=(0,s.WQX)(d),this.showHideText$=(0,s.WQX)(a),this.enabled=[],this.itemsChange=new s.bkB,this.enabledChange=new s.bkB,this.content=({$implicit:t})=>String(t)}set items(t){t.length===this.unsortedItems.length&&t.every((t=>this.unsortedItems.includes(t)))||(this.unsortedItems=t)}onDrag(){this.dragging=!0}onDrop(){this.dragging&&(this.dragging=!1,this.updateItems())}isEnabled(t){return this.enabled.includes(t)}getIcon(t){return this.isEnabled(t)?this.options.icons.hide:this.options.icons.show}toggle(t){this.enabled=this.isEnabled(t)?this.enabled.filter((e=>e!==t)):this.enabled.concat(t),this.updateEnabled()}move(t,e){const n=this.order.get(t)??t;if(!n&&e<0||n===this.unsortedItems.length-1&&e>0)return;const i=n+e,s=Array.from(this.order.values()).findIndex((t=>t===i));this.order.set(t,i),this.order.set(s,n),this.order=new Map(this.order),this.updateItems()}getSortedItems(){const t=new Array(this.unsortedItems.length);return this.unsortedItems.forEach(((e,n)=>{t[this.order.get(n)??n]=e})),t}updateItems(){this.itemsChange.emit(this.getSortedItems()),this.updateEnabled()}updateEnabled(){const t=this.getSortedItems().filter((t=>this.isEnabled(t)));this.enabled=t,this.enabledChange.emit(t)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=s.VBU({type:t,selectors:[["tui-reorder"]],hostBindings:function(t,e){1&t&&s.bIt("focusout.stop",(function(){return 0}))("pointerdown.silent",(function(){return e.onDrag()}))("pointerup.silent",(function(){return e.onDrop()}),!1,s.EBC)},inputs:{enabled:"enabled",items:"items",content:"content"},outputs:{itemsChange:"itemsChange",enabledChange:"enabledChange"},standalone:!0,features:[s.aNF],decls:2,vars:2,consts:[[1,"t-wrapper",3,"order","orderChange"],[3,"order",4,"ngFor","ngForOf"],[1,"t-item"],["tuiTileHandle","",1,"t-draggable"],[1,"t-icon",3,"icon"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-button",3,"iconStart","click","keydown.arrowDown.prevent","keydown.arrowUp.prevent"]],template:function(t,e){1&t&&(s.j41(0,"tui-tiles",0),s.bIt("orderChange",(function(t){return e.order=t})),s.DNE(1,b,8,14,"tui-tile",1),s.k0s()),2&t&&(s.Y8G("order",e.order),s.R7$(1),s.Y8G("ngForOf",e.unsortedItems))},dependencies:[i.Jj,i.Sq,h.xr,u.p,l.q,p.JK,p.T$,p.h$],styles:["[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;user-select:none}.t-wrapper[_ngcontent-%COMP%]{grid-auto-rows:2rem}.t-draggable[_ngcontent-%COMP%]{cursor:ns-resize;flex:1 1 auto}.t-item[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;block-size:2rem;align-items:center;padding:0 .75rem;background:var(--tui-background-base)}.t-item_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}.t-item_disabled[_ngcontent-%COMP%]   .t-button[_ngcontent-%COMP%]{color:var(--tui-text-primary);opacity:1}.t-item[_ngcontent-%COMP%]:hover{background:var(--tui-background-base-alt)}.t-item[_ngcontent-%COMP%]:hover   .t-button[_ngcontent-%COMP%]{opacity:1}.t-icon[_ngcontent-%COMP%]{margin-right:.5rem;color:var(--tui-text-tertiary);border-width:.25rem}.t-button[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;opacity:0}.t-button[_ngcontent-%COMP%]:focus{opacity:1}"],changeDetection:0}),e})();const C=["tuiCaption",""],y=["*"];let k=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=s.VBU({type:t,selectors:[["caption","tuiCaption",""]],standalone:!0,features:[s.aNF],attrs:C,ngContentSelectors:y,decls:1,vars:0,template:function(t,e){1&t&&(s.NAR(),s.SdG(0))},styles:["caption[tuiCaption]{caption-side:bottom;text-align:start;padding:.75rem 0;color:var(--tui-text-secondary)}caption[tuiCaption]>*:not(:first-child){margin-inline-start:.5rem}caption[tuiCaption] tui-pagination:not(:first-child),caption[tuiCaption] tui-pager:not(:first-child){display:inline-flex;vertical-align:middle}\n"],encapsulation:2,changeDetection:0}),e})(),O=(()=>{var t;class e{constructor(){this.tuiCell="",this.template=(0,s.WQX)(s.C4Q)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=s.FsC({type:t,selectors:[["ng-template","tuiCell",""]],inputs:{tuiCell:"tuiCell"},standalone:!0}),e})();var v=n(55514);const _=(0,o.gc)({sticky:!1,resizable:!1,open:!0,size:"m",direction:1,requiredSort:!1,sortIcons:{asc:"@tui.chevron-up",desc:"@tui.chevron-down",off:"@tui.chevrons-up-down"}});var x=n(91780),M=n(40483),w=n(56564),P=n(68052),z=n(10726),T=n(1377),I=n(15585),$=n(98398),G=n(31446),F=n(40933),S=n(45423);let R=(()=>{var t;class e{constructor(){this.stuck=(0,I.ot)((0,s.WQX)(x.PZ).pipe((0,v.T)((t=>(t[t.length-1]?.intersectionRatio??0)<1)),(0,G.F)(),(0,$.Eb)(),(0,F.W)((()=>S.w))))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=s.FsC({type:t,selectors:[["never"]],hostVars:2,hostBindings:function(t,e){2&t&&s.AVh("_stuck",e.stuck())},standalone:!0,features:[s.Jv_([x.PZ,{provide:x.ZZ,useValue:[0,1]}])]}),e})(),E=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=s.VBU({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-table"],standalone:!0,features:[s.aNF],decls:0,vars:0,template:function(t,e){},styles:["table[tuiTable]{border-collapse:separate}table[tuiTable] [tuiCell]{padding:0}table[tuiTable] [tuiTitle]{white-space:nowrap}table[tuiTable] [tuiTitle] tui-icon{font-size:1rem}table[tuiTable] [tuiSubtitle]{color:var(--tui-text-secondary)}table[tuiTable] [tuiTh] [tuiCell],table[tuiTable] [tuiTh] [tuiTitle]{font:inherit;color:inherit}\n"],encapsulation:2,changeDetection:0}),e})(),D=(()=>{var t;class e{constructor(){this.options=(0,s.WQX)(_),this.cdr=(0,s.WQX)(s.gRc),this.nothing=(0,o.Ty)(E),this.columns=[],this.direction=this.options.direction,this.directionChange=new s.bkB,this.sorterChange=new s.bkB,this.appearance=(0,s.vPA)("table"),this.size=(0,s.vPA)(this.options.size),this.cleaner=(0,s.vPA)(!1),this.change$=new T.B,this.sorter=()=>0}set sizeSetter(t){this.size.set(t)}updateSorterAndDirection(t){this.sorter===t?this.updateDirection(1===this.direction?-1:1):(this.updateSorter(t),this.updateDirection(1))}ngOnChanges(){this.change$.next()}ngAfterViewInit(){this.cdr.detectChanges()}updateSorter(t){this.sorter=t||(()=>0),this.sorterChange.emit(this.sorter),this.change$.next()}updateDirection(t){this.direction=t,this.directionChange.emit(this.direction),this.change$.next()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=s.FsC({type:t,selectors:[["table","tuiTable",""]],hostVars:1,hostBindings:function(t,e){2&t&&s.BMQ("data-size",e.size())},inputs:{columns:"columns",direction:"direction",sizeSetter:["size","sizeSetter"],sorter:"sorter"},outputs:{directionChange:"directionChange",sorterChange:"sorterChange"},standalone:!0,features:[s.Jv_([{provide:x.Hc,useValue:"10000px 10000px 10000px 0px"},(0,o.QU)(M.KB,t),(0,u.e)({size:"s"}),(0,w.bw)({size:"m",appearance:"neutral"}),(0,P.cK)({size:"xxs",appearance:"neutral"}),(0,z.zF)({size:"s",color:"var(--tui-text-action)"})]),s.OA$,s.nM4([R])]}),e})(),X=(()=>{var t;class e{constructor(){this.tuiHead="",this.template=(0,s.WQX)(s.C4Q)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=s.FsC({type:t,selectors:[["","tuiHead",""]],inputs:{tuiHead:"tuiHead"},standalone:!0}),e})();var B=n(86677),N=n(75941),V=n(25358),Q=n(64409);let j=(()=>{var t;class e{constructor(){this.doc=(0,s.WQX)(i.qQ),this.el=(0,N.qW)(),this.tuiResized=(0,$.xM)(this.el,"mousedown").pipe((0,$.QA)(),(0,V.n)((()=>{const{width:t,right:e}=this.el.closest("th")?.getBoundingClientRect()||B.Lo;return(0,$.xM)(this.doc,"mousemove").pipe((0,G.F)(),(0,v.T)((({clientX:n})=>t+n-e)),(0,Q.Q)((0,$.xM)(this.doc,"mouseup")))})))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=s.FsC({type:t,selectors:[["","tuiResized",""]],outputs:{tuiResized:"tuiResized"},standalone:!0}),e})();var Y=n(94935),q=n(70948),W=n(57487);const A=["tuiTh",""];function J(t,e){if(1&t){const t=s.RV6();s.j41(0,"button",3),s.bIt("click",(function(){s.eBV(t);const e=s.XpG();return s.Njj(e.updateSorterAndDirection())})),s.eu8(1,4),s.EFF(2),s.nI1(3,"async"),s.nrm(4,"tui-icon",5),s.k0s()}if(2&t){const t=s.XpG(),e=s.sdS(2);s.AVh("t-sort_sorted",t.isCurrent),s.R7$(1),s.Y8G("ngTemplateOutlet",e),s.R7$(1),s.SpI(" ",s.bMT(3,5,t.table&&t.table.change$)," "),s.R7$(2),s.Y8G("icon",t.icon)}}function H(t,e){1&t&&s.SdG(0)}function U(t,e){if(1&t){const t=s.RV6();s.j41(0,"div",6),s.bIt("tuiResized",(function(e){s.eBV(t);const n=s.XpG();return s.Njj(n.onResized(e))})),s.k0s()}}const Z=["*"];let K=(()=>{var t;class e{constructor(){this.options=(0,s.WQX)(_),this.head=(0,s.WQX)(X,{optional:!0}),this.width=null,this.table=(0,s.WQX)((0,s.Rfq)((()=>D)),{optional:!0}),this.sorter=this.head?(t,e)=>(0,o._J)(t[this.key],e[this.key]):null,this.resizable=this.options.resizable,this.sticky=this.options.sticky,this.requiredSort=this.options.requiredSort}get key(){if(!this.head)throw new L;return this.head.tuiHead}get isCurrent(){return!!this.sorter&&!!this.table&&this.sorter===this.table.sorter}get icon(){return this.isCurrent?1===this.table?.direction?this.options.sortIcons.asc:this.options.sortIcons.desc:this.options.sortIcons.off}updateSorterAndDirection(){const t=this.requiredSort?this.sorter:null;this.table?.updateSorterAndDirection(this.isCurrentAndDescDirection?t:this.sorter)}onResized(t){this.width=t}get isCurrentAndDescDirection(){return this.sorter===this.table?.sorter&&-1===this.table?.direction}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=s.VBU({type:t,selectors:[["th","tuiTh",""]],hostVars:8,hostBindings:function(t,e){2&t&&(s.xc7("min-width",e.width,"px")("width",e.width,"px")("max-width",e.width,"px"),s.AVh("_sticky",e.sticky))},inputs:{sorter:"sorter",resizable:"resizable",sticky:"sticky",requiredSort:"requiredSort"},standalone:!0,features:[s.aNF],attrs:A,ngContentSelectors:Z,decls:4,vars:3,consts:[["type","button","class","t-sort",3,"t-sort_sorted","click",4,"ngIf","ngIfElse"],["content",""],["class","t-bar",3,"tuiResized",4,"ngIf"],["type","button",1,"t-sort",3,"click"],[3,"ngTemplateOutlet"],[1,"t-icon",3,"icon"],[1,"t-bar",3,"tuiResized"]],template:function(t,e){if(1&t&&(s.NAR(),s.DNE(0,J,5,7,"button",0),s.DNE(1,H,1,0,"ng-template",null,1,s.C5r),s.DNE(3,U,1,0,"div",2)),2&t){const t=s.sdS(2);s.Y8G("ngIf",e.sorter&&e.table)("ngIfElse",t),s.R7$(3),s.Y8G("ngIf",e.resizable)}},dependencies:[i.Jj,i.bT,i.T3,l.q,j],styles:['[_nghost-%COMP%]{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;block-size:var(--tui-height-m);font:var(--tui-font-text-s);text-align:start;font-weight:700;color:var(--tui-text-secondary);background:var(--tui-background-base);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-border-normal);filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:not(:first-child){border-inline-start:none}._sticky[_nghost-%COMP%], ._stuck   ._sticky[_nghost-%COMP%]{position:sticky;z-index:30}._sticky[_nghost-%COMP%]:first-child, ._stuck   ._sticky[_nghost-%COMP%]:first-child{left:0}._sticky[_nghost-%COMP%]:after, ._stuck   ._sticky[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;inline-size:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}._stuck   [_nghost-%COMP%]{z-index:20}tr:not(:first-child)[_nghost-%COMP%], tr:not(:first-child)   [_nghost-%COMP%]{border-block-start:none}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{block-size:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:700;padding:0 1rem}table[data-size="s"][_nghost-%COMP%], table[data-size="s"]   [_nghost-%COMP%]{block-size:var(--tui-height-s);font:var(--tui-font-text-s);font-weight:700;padding:0 .5rem}thead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%]{position:sticky}table._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after{opacity:1}thead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #edededb3}[tuiTheme="dark"]._sticky[_nghost-%COMP%]:after, [tuiTheme="dark"]   ._sticky[_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}[tuiTheme="dark"]   thead[tuiThead]._stuck[_nghost-%COMP%], [tuiTheme="dark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #3c3c3ce6}[tuiTheme="dark"]   thead[tuiThead]._stuck[_nghost-%COMP%]:first-child, [tuiTheme="dark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-l)}table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-m)}table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-s)}.t-sort[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:inline-flex;flex-direction:inherit;align-items:center;outline:none;font-weight:700;cursor:pointer}.t-sort_sorted[_ngcontent-%COMP%]{color:var(--tui-text-primary)}.t-sort[_ngcontent-%COMP%]:focus-visible{background:var(--tui-service-selection-background)}.t-sort[_ngcontent-%COMP%]:hover{color:var(--tui-text-primary)}.t-bar[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;inline-size:3px;justify-self:flex-end;border-inline-start:2px solid transparent;background:var(--tui-status-warning);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active{opacity:1}.t-icon[_ngcontent-%COMP%]{border-width:.25rem}'],changeDetection:0}),e})();class L extends Error{constructor(){super("")}}let tt=(()=>{var t;class e{constructor(){this.table=(0,s.WQX)(D),this.th=(0,s.WQX)(K),this.sortBy=(0,s.WQX)((0,s.Rfq)((()=>et))),this.sorter=()=>0}get key(){return this.th.key}ngOnChanges(){this.sortable?(this.sorter=this.match?this.table.sorter:this.sorter,this.th.sorter=this.sorter):this.th.sorter=null}check(){this.match&&this.table.sorter!==this.sorter&&this.table.updateSorter(this.sorter)}get match(){return this.sortBy.tuiSortBy===this.key}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=s.FsC({type:t,selectors:[["th","tuiTh","","tuiSortable",""]],inputs:{sortable:["tuiSortable","sortable",W.he]},standalone:!0,features:[s.GFd,s.OA$]}),e})(),et=(()=>{var t;class e{constructor(){this.sortables=B.xQ,this.table=(0,s.WQX)(D),this.tuiSortByChange=this.table.sorterChange.pipe((0,Y.c)(0),(0,q.p)((()=>!!this.sortables.length)),(0,v.T)((t=>this.getKey(t)))),this.tuiSortBy=null}set sortBy(t){this.tuiSortBy=t,this.checkSortables()}checkSortables(){this.sortables.forEach((t=>t.check()))}getKey(t){return this.sortables.find((e=>e.sorter===t))?.key||null}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=s.FsC({type:t,selectors:[["table","tuiTable","","tuiSortBy",""]],contentQueries:function(t,e,n){if(1&t&&s.wni(n,tt,5),2&t){let t;s.mGM(t=s.lsd())&&(e.sortables=t)}},inputs:{sortBy:["tuiSortBy","sortBy"]},outputs:{tuiSortByChange:"tuiSortByChange"},standalone:!0}),e})(),nt=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=s.FsC({type:t,selectors:[["thead","tuiThead",""]],standalone:!0,features:[s.Jv_([{provide:x.Hc,useValue:"0px 10000px 10000px 10000px"}]),s.nM4([R])]}),e})();var it,st=n(97270);class ot{constructor(){this.table=(0,s.WQX)(D)}transform(t){return this.sort(t??[],this.table.sorter,this.table.direction)}sort(t,e,n){return[...t].sort(((t,i)=>n*e(t,i)))}}(it=ot).ɵfac=function(t){return new(t||it)},it.ɵpipe=s.EJ8({name:"tuiTableSort",type:it,pure:!1,standalone:!0}),(0,st.Cg)([o.PE],ot.prototype,"sort",null);const rt=[{provide:D,deps:[[new s.kdw,D]],useFactory:t=>(t.change$.pipe((0,$.Eb)(),(0,I.pQ)()).subscribe(),t)}];var at=n(78881),ct=n(73308),ut=n(55755),lt=n(6057);const ht=["tuiTd",""],dt=["*"];let pt=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=s.VBU({type:t,selectors:[["th","tuiTd",""],["td","tuiTd",""]],contentQueries:function(t,e,n){if(1&t&&s.wni(n,lt.OH,5),2&t){let t;s.mGM(t=s.lsd())&&(e.control=t.first)}},hostVars:2,hostBindings:function(t,e){2&t&&s.AVh("_editable",e.control)},standalone:!0,features:[s.aNF],attrs:ht,ngContentSelectors:dt,decls:1,vars:0,template:function(t,e){1&t&&(s.NAR(),s.SdG(0))},styles:['[_nghost-%COMP%]{position:relative;text-align:start;background:var(--tui-background-base);border:1px solid var(--tui-border-normal);border-block-start:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:first-child{left:0}[_nghost-%COMP%]:not(:first-child){border-inline-start:none}._editable[_nghost-%COMP%]:focus-within{z-index:1}._editable[_nghost-%COMP%]{padding:0!important;vertical-align:top}th[_nghost-%COMP%]{position:sticky;z-index:1}th[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;inline-size:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}th[_nghost-%COMP%]:focus-within:not(:disabled){z-index:11}[tuiTheme="dark"][_nghost-%COMP%]:after, [tuiTheme="dark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%]{z-index:10}table._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after{opacity:1}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{block-size:var(--tui-height-l);font:var(--tui-font-text-m);padding:1rem}table[data-size="m"][_nghost-%COMP%], table[data-size="m"]   [_nghost-%COMP%]{block-size:var(--tui-height-m);font:var(--tui-font-text-s);padding:.75rem}table[data-size="s"][_nghost-%COMP%], table[data-size="s"]   [_nghost-%COMP%]{block-size:var(--tui-height-s);font:var(--tui-font-text-s);padding:.25rem .5rem}td[_nghost-%COMP%]:focus-within{z-index:1}td[_nghost-%COMP%]:not(:focus-within){z-index:0}'],changeDetection:0}),e})();const gt=["tuiTr",""];function ft(t,e){if(1&t&&(s.j41(0,"td",6),s.EFF(1),s.k0s()),2&t){const t=e.ngIf,n=s.XpG(2).$implicit;s.R7$(1),s.SpI(" ",t[n]," ")}}function bt(t,e){if(1&t&&(s.DNE(0,ft,2,1,"td",5),s.nI1(1,"async")),2&t){const t=s.XpG(3);s.Y8G("ngIf",s.bMT(1,1,t.item$))}}function mt(t,e){if(1&t&&(s.qex(0,3),s.DNE(1,bt,2,3,"ng-template",null,4,s.C5r),s.bVm()),2&t){const t=e.$implicit,n=s.sdS(2),i=s.XpG().ngIf;s.Y8G("ngTemplateOutlet",i[t]&&i[t].template||n)}}function Ct(t,e){if(1&t&&(s.qex(0),s.DNE(1,mt,3,1,"ng-container",2),s.bVm()),2&t){const t=s.XpG();s.R7$(1),s.Y8G("ngForOf",t.table.columns)}}function yt(t,e){1&t&&s.nrm(0,"td")}let kt=(()=>{var t;class e{constructor(){this.cells=B.xQ,this.body=(0,s.WQX)((0,s.Rfq)((()=>wt))),this.contentReady$=new ut.m(1),this.table=(0,s.WQX)((0,s.Rfq)((()=>D))),this.cells$=this.contentReady$.pipe((0,V.n)((()=>(0,$.MJ)(this.cells))),(0,v.T)((t=>t.reduce(((t,e)=>({...t,[e.tuiCell]:e})),{})))),this.item$=this.contentReady$.pipe((0,V.n)((()=>(0,$.MJ)(this.body.rows))),(0,v.T)((t=>this.body.data[t.findIndex((t=>t===this))])))}ngAfterContentInit(){var t=this;return(0,ct.A)((function*(){yield Promise.resolve(),t.contentReady$.next(!0)}))()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=s.VBU({type:t,selectors:[["tr","tuiTr",""]],contentQueries:function(t,e,n){if(1&t&&s.wni(n,O,4),2&t){let t;s.mGM(t=s.lsd())&&(e.cells=t)}},standalone:!0,features:[s.Jv_([rt]),s.aNF],attrs:gt,decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["dummy",""],[3,"ngTemplateOutlet",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["plain",""],["tuiTd","",4,"ngIf"],["tuiTd",""]],template:function(t,e){if(1&t&&(s.DNE(0,Ct,2,1,"ng-container",0),s.nI1(1,"async"),s.DNE(2,yt,1,0,"ng-template",null,1,s.C5r)),2&t){const t=s.sdS(3);s.Y8G("ngIf",s.bMT(1,2,e.cells$))("ngIfElse",t)}},dependencies:[i.Jj,i.Sq,i.bT,i.T3,pt],encapsulation:2,changeDetection:0}),e})();const Ot=["tuiTbody",""];function vt(t,e){if(1&t&&(s.qex(0),s.EFF(1),s.bVm()),2&t){const t=e.polymorpheusOutlet;s.R7$(1),s.SpI(" ",t," ")}}function _t(t,e){if(1&t){const t=s.RV6();s.j41(0,"tr")(1,"th",1)(2,"button",2),s.bIt("click",(function(){s.eBV(t);const e=s.XpG();return s.Njj(e.onClick())})),s.j41(3,"span",3),s.DNE(4,vt,2,1,"ng-container",4),s.k0s(),s.nrm(5,"tui-icon",5),s.k0s()()()}if(2&t){const t=s.XpG();s.R7$(1),s.Y8G("colSpan",t.table.columns.length),s.R7$(3),s.Y8G("polymorpheusOutlet",t.heading),s.R7$(1),s.Y8G("tuiChevron",t.open)}}function xt(t,e){1&t&&(s.qex(0),s.SdG(1),s.bVm())}const Mt=["*"];let wt=(()=>{var t;class e{constructor(){this.options=(0,s.WQX)(_),this.table=(0,s.WQX)((0,s.Rfq)((()=>D))),this.rows=B.xQ,this.data=[],this.open=this.options.open,this.openChange=new s.bkB}onClick(){this.open=!this.open,this.openChange.emit(this.open)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=s.VBU({type:t,selectors:[["tbody","tuiTbody",""]],contentQueries:function(t,e,n){if(1&t&&s.wni(n,kt,4),2&t){let t;s.mGM(t=s.lsd())&&(e.rows=t)}},inputs:{data:"data",heading:"heading",open:"open"},outputs:{openChange:"openChange"},standalone:!0,features:[s.Jv_(rt),s.aNF],attrs:Ot,ngContentSelectors:Mt,decls:2,vars:2,consts:[[4,"ngIf"],[1,"t-heading",3,"colSpan"],["type","button",1,"t-expand",3,"click"],[1,"t-name"],[4,"polymorpheusOutlet"],[1,"t-chevron",3,"tuiChevron"]],template:function(t,e){1&t&&(s.NAR(),s.DNE(0,_t,6,3,"tr",0),s.DNE(1,xt,2,0,"ng-container",0)),2&t&&(s.Y8G("ngIf",e.heading),s.R7$(1),s.Y8G("ngIf",e.open))},dependencies:[i.bT,h.xr,at.k,l.q],styles:['[_nghost-%COMP%]{border-color:var(--tui-border-normal)}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:inherit}.t-expand[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:flex;inline-size:100%;block-size:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:700;cursor:pointer;border-color:inherit}.t-expand[_ngcontent-%COMP%]:focus-visible   .t-name[_ngcontent-%COMP%]{background:var(--tui-service-selection-background)}.t-expand[_ngcontent-%COMP%]:before, .t-expand[_ngcontent-%COMP%]:after{content:"";position:sticky;block-size:100%;border-inline-start:1px solid;border-color:inherit}.t-expand[_ngcontent-%COMP%]:before{left:0}.t-expand[_ngcontent-%COMP%]:after{right:0}.t-heading[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;block-size:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-background-neutral-1);border-block-end:1px solid var(--tui-border-normal);border-color:inherit}.t-heading[_ngcontent-%COMP%]:hover{background:var(--tui-background-neutral-1-hover)}table[data-size="l"][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);block-size:var(--tui-height-l)}.t-name[_ngcontent-%COMP%]{position:sticky;left:.75rem;display:inline-block}table[data-size="l"][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-name[_ngcontent-%COMP%]{left:1rem}.t-chevron[_ngcontent-%COMP%]{position:sticky;right:.75rem;margin:0 .6875rem 0 auto}'],changeDetection:0}),e})();var Pt=n(64204);const zt=["tuiThGroup",""],Tt=function(t){return{$implicit:t}};function It(t,e){if(1&t&&s.eu8(0,3),2&t){const t=e.$implicit,n=s.XpG().ngIf,i=s.sdS(3);s.Y8G("ngTemplateOutlet",n[t]&&n[t].template||i)("ngTemplateOutletContext",s.eq3(2,Tt,t))}}function $t(t,e){if(1&t&&(s.j41(0,"th",5),s.EFF(1),s.k0s()),2&t){const t=s.XpG().$implicit;s.R7$(1),s.SpI(" ",t.toString()," ")}}function Gt(t,e){if(1&t&&s.DNE(0,$t,2,1,"th",4),2&t){const t=s.XpG(2);s.Y8G("ngIf",!t.th&&!t.heads.length)}}function Ft(t,e){if(1&t&&(s.qex(0),s.DNE(1,It,1,4,"ng-container",1),s.DNE(2,Gt,1,1,"ng-template",null,2,s.C5r),s.bVm()),2&t){const t=s.XpG();s.R7$(1),s.Y8G("ngForOf",t.table.columns)}}const St=["*"];let Rt=(()=>{var t;class e{constructor(){this.heads=B.xQ,this.heads$=null,this.table=(0,s.WQX)((0,s.Rfq)((()=>D)))}ngAfterContentInit(){this.heads$=this.heads.changes.pipe((0,Pt.Z)(null),(0,v.T)((()=>this.heads.reduce(((t,e)=>({...t,[e.tuiHead]:e})),{}))))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=s.VBU({type:t,selectors:[["tr","tuiThGroup",""]],contentQueries:function(t,e,n){if(1&t&&(s.wni(n,K,5),s.wni(n,X,4)),2&t){let t;s.mGM(t=s.lsd())&&(e.th=t.first),s.mGM(t=s.lsd())&&(e.heads=t)}},standalone:!0,features:[s.Jv_([rt]),s.aNF],attrs:zt,ngContentSelectors:St,decls:3,vars:3,consts:[[4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],["plain",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["tuiTh","",4,"ngIf"],["tuiTh",""]],template:function(t,e){1&t&&(s.NAR(),s.SdG(0),s.DNE(1,Ft,4,1,"ng-container",0),s.nI1(2,"async")),2&t&&(s.R7$(1),s.Y8G("ngIf",s.bMT(2,1,e.heads$)))},dependencies:[i.Jj,i.Sq,i.bT,i.T3,K],encapsulation:2,changeDetection:0}),e})();var Et=n(63387),Dt=n(19526),Xt=n(13523);const Bt={sizeOptionContent:function({$implicit:t}){return`${t}`},showPages:!0,items:[10,20,50,100],size:10},Nt=(0,o.gc)(Bt);function Vt(t){return(0,o.eC)(Nt,t,Bt)}var Qt=n(18331);function jt(t,e){if(1&t&&(s.qex(0),s.EFF(1),s.j41(2,"strong",6),s.EFF(3),s.k0s(),s.bVm()),2&t){const t=s.XpG().ngIf,e=s.XpG();s.R7$(1),s.SpI(" ",t.pages," "),s.R7$(2),s.JRh(e.pages)}}function Yt(t,e){if(1&t){const t=s.RV6();s.j41(0,"button",7),s.bIt("tuiDropdownOpenChange",(function(e){s.eBV(t);const n=s.XpG(2);return s.Njj(n.open=e)})),s.j41(1,"strong"),s.EFF(2),s.k0s()()}if(2&t){s.XpG();const t=s.sdS(9),e=s.XpG();s.Y8G("tuiDropdown",t)("tuiDropdownOpen",e.open),s.R7$(2),s.Lme("",e.start+1,"–",e.end,"")}}function qt(t,e){1&t&&(s.j41(0,"strong"),s.EFF(1,"0 - 0"),s.k0s())}function Wt(t,e){if(1&t&&(s.qex(0),s.EFF(1),s.bVm()),2&t){const t=e.polymorpheusOutlet;s.R7$(1),s.SpI(" ",t," ")}}function At(t,e){if(1&t&&s.nrm(0,"tui-icon",14),2&t){const t=s.XpG(4);s.Y8G("icon",t.commonIcons.check)}}function Jt(t,e){1&t&&s.nrm(0,"span",15)}const Ht=function(t,e){return{$implicit:t,total:e}};function Ut(t,e){if(1&t){const t=s.RV6();s.qex(0),s.j41(1,"button",10),s.bIt("click",(function(){const e=s.eBV(t).$implicit,n=s.XpG(3);return s.Njj(n.onItem(e))})),s.DNE(2,Wt,2,1,"ng-container",11),s.DNE(3,At,1,1,"tui-icon",12),s.DNE(4,Jt,1,0,"ng-template",null,13,s.C5r),s.k0s(),s.bVm()}if(2&t){const t=e.$implicit,n=s.sdS(5),i=s.XpG(3);s.R7$(2),s.Y8G("polymorpheusOutlet",i.sizeOptionContent)("polymorpheusOutletContext",s.l_i(4,Ht,t,i.total)),s.R7$(1),s.Y8G("ngIf",t===i.size)("ngIfElse",n)}}function Zt(t,e){if(1&t&&(s.j41(0,"tui-data-list",8),s.DNE(1,Ut,6,7,"ng-container",9),s.k0s()),2&t){const t=s.XpG(2);s.R7$(1),s.Y8G("ngForOf",t.items)}}function Kt(t,e){if(1&t){const t=s.RV6();s.qex(0),s.j41(1,"button",16),s.bIt("click",(function(){s.eBV(t);const e=s.XpG(2);return s.Njj(e.back())})),s.EFF(2),s.k0s(),s.j41(3,"button",17),s.bIt("click",(function(){s.eBV(t);const e=s.XpG(2);return s.Njj(e.forth())})),s.EFF(4),s.k0s(),s.bVm()}if(2&t){const t=e.ngIf,n=s.XpG(2);s.R7$(1),s.Y8G("disabled",n.leftDisabled)("iconStart",n.icons.decrement),s.R7$(1),s.SpI(" ",t[0]," "),s.R7$(1),s.Y8G("disabled",n.rightDisabled)("iconStart",n.icons.increment),s.R7$(1),s.SpI(" ",t[1]," ")}}function Lt(t,e){if(1&t&&(s.qex(0),s.j41(1,"span",1),s.DNE(2,jt,4,2,"ng-container",0),s.k0s(),s.j41(3,"span",2),s.EFF(4),s.DNE(5,Yt,3,4,"button",3),s.DNE(6,qt,2,0,"ng-template",null,4,s.C5r),s.DNE(8,Zt,2,1,"ng-template",null,5,s.C5r),s.EFF(10),s.j41(11,"strong",6),s.EFF(12),s.k0s()(),s.DNE(13,Kt,5,6,"ng-container",0),s.nI1(14,"async"),s.bVm()),2&t){const t=e.ngIf,n=s.sdS(7),i=s.XpG();s.R7$(2),s.Y8G("ngIf",i.showPages),s.R7$(2),s.SpI(" ",t.linesPerPage," "),s.R7$(1),s.Y8G("ngIf",0!==i.total)("ngIfElse",n),s.R7$(5),s.SpI(" ",t.of," "),s.R7$(2),s.JRh(i.total),s.R7$(1),s.Y8G("ngIf",s.bMT(14,7,i.spinTexts$))}}let te=(()=>{var t;class e{constructor(){this.options=(0,s.WQX)(Nt),this.open=!1,this.icons=(0,s.WQX)(Xt.dx),this.spinTexts$=(0,s.WQX)(Xt.Pt),this.texts$=(0,s.WQX)(c),this.commonIcons=(0,s.WQX)(Xt._Z),this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.paginationChange=new s.bkB}onItem(t){const{start:e}=this;this.size=t,this.open=!1,this.page=Math.floor(e/this.size),this.paginationChange.emit(this.pagination)}get pages(){return Math.ceil(this.total/this.size)}get showPages(){return this.options.showPages}get sizeOptionContent(){return this.options.sizeOptionContent}get start(){return Math.min(this.page*this.size,Math.max(this.total-this.size,0))}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}back(){this.page--,this.paginationChange.emit(this.pagination)}forth(){this.page++,this.paginationChange.emit(this.pagination)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=s.VBU({type:t,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{paginationChange:"paginationChange"},standalone:!0,features:[s.aNF],decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],["tuiLink","","type","button",3,"tuiDropdown","tuiDropdownOpen","tuiDropdownOpenChange",4,"ngIf","ngIfElse"],["zeroTotal",""],["content",""],[1,"t-strong"],["tuiLink","","type","button",3,"tuiDropdown","tuiDropdownOpen","tuiDropdownOpenChange"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","","type","button",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"icon",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"icon"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","iconStart","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","iconStart","click"]],template:function(t,e){1&t&&(s.DNE(0,Lt,15,9,"ng-container",0),s.nI1(1,"async")),2&t&&s.Y8G("ngIf",s.bMT(1,1,e.texts$))},dependencies:[i.Jj,i.Sq,i.bT,h.xr,u.p,Qt.uE,Qt.aO,Dt.pU,Dt.iE,l.q,Et.Jc],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-tertiary)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-primary)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-inline-size:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-inline-size:1rem;font-size:1rem;margin-inline-start:.25rem}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),e})();class ee{}let ne=(()=>{var t;class e extends ee{constructor(){super(...arguments),this.filter=B.z9}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=s.xGo(t)))(n||t)}}(),t.ɵdir=s.FsC({type:t,selectors:[["","tuiGenericFilter",""]],inputs:{filter:["tuiGenericFilter","filter"]},standalone:!0,features:[s.Jv_([(0,o.QU)(ee,t)]),s.Vt3]}),e})();var ie=n(87742),se=n(36366),oe=n(85122),re=n(95309);let ae=(()=>{var t;class e{constructor(){this.refresh$=new ut.m(1),this.filters=[]}register(t){this.filters=this.filters.concat(t),this.update()}unregister(t){this.filters=this.filters.filter((e=>e!==t)),this.update()}filter(t){return this.refresh$.pipe((0,V.n)(re.D),(0,Pt.Z)(null),(0,v.T)((()=>t.filter((t=>this.check(t))))))}check(t){return this.filters.every((e=>e.filter(t)))}update(){this.refresh$.next((0,oe.h)(...this.filters.map((({refresh$:t})=>t))))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=s.FsC({type:t,selectors:[["","tuiTableFilters",""]],standalone:!0}),e})(),ce=(()=>{var t;class e{constructor(){this.head=(0,s.WQX)(X,{optional:!0}),this.delegate=(0,s.WQX)(ee),this.control=(0,s.WQX)(ie.vO),this.filters=(0,s.WQX)(ae),this.refresh$=(0,se.v)((()=>(0,oe.h)(this.control.valueChanges||S.w,this.control.statusChanges?.pipe((0,G.F)())||S.w)))}ngOnInit(){this.filters.register(this)}ngOnDestroy(){this.filters.unregister(this)}filter(t){const{disabled:e,value:n}=this.control;return!!e||!this.key||this.delegate.filter(t[this.key],n)}get key(){return this.tuiTableFilter||this.head?.tuiHead}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=s.FsC({type:t,selectors:[["","tuiTableFilter",""]],inputs:{tuiTableFilter:"tuiTableFilter"},standalone:!0}),e})(),ue=(()=>{var t;class e{constructor(){this.filters=(0,s.WQX)(ae)}transform(t){return this.filters.filter(t)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=s.EJ8({name:"tuiTableFilters",type:t,pure:!0,standalone:!0}),e})()}}]);