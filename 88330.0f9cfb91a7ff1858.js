(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[88330,61386,31629,20332,78446,10802,33530,37419,99503,50517,11820,61505,99781,11116,50023,11944,61702,30191,98323,15262,37573,1001,35402,12086],{93459:(t,e,i)=>{i.d(e,{_:()=>o});var n=i(20755),s=i(47880);const r=[[["","tuiCheckbox",""]],"*"],a=["[tuiCheckbox]","*"];let o=(()=>{var t;class e{constructor(){this.active=!1,this.color="",this.text="",this.size="m",this.disabled=!1}get computedColor(){return"var(--tui-primary)"===this.color?null:this.color}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["tui-legend-item"]],hostVars:5,hostBindings:function(t,e){2&t&&(n.uIk("data-size",e.size),n.Udp("--tui-primary",e.computedColor),n.ekj("_disabled",e.disabled))},inputs:{active:"active",color:"color",text:"text",size:"size",disabled:"disabled"},ngContentSelectors:a,decls:7,vars:4,consts:[["appearance","whiteblock","size","s","tuiButton","","type","button",1,"t-button",3,"pseudoHover"],[1,"t-wrapper"],[1,"t-dot"],[1,"t-text"]],template:function(t,e){1&t&&(n.F$t(r),n.TgZ(0,"button",0)(1,"div",1),n.Hsn(2),n._UZ(3,"span",2),n.TgZ(4,"span",3),n._uU(5),n.qZA(),n.Hsn(6,1),n.qZA()()),2&t&&(n.Q6J("pseudoHover",e.active||null),n.xp6(3),n.Udp("background-color",e.color||"var(--tui-primary)"),n.xp6(2),n.Oqu(e.text))},dependencies:[s.v],styles:["[_nghost-%COMP%]{display:inline-block}.t-button[_ngcontent-%COMP%]{height:2rem;font-weight:700}[data-size=m][_nghost-%COMP%]   .t-button[_ngcontent-%COMP%]{height:2.25rem;font:var(--tui-font-text-m);font-weight:700}.t-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;pointer-events:none}._disabled[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{color:var(--tui-text-03)}.t-dot[_ngcontent-%COMP%]{width:.5rem;height:.5rem;border-radius:100%;flex-shrink:0}._disabled[_nghost-%COMP%]   .t-dot[_ngcontent-%COMP%]{background:var(--tui-base-04)}.t-dot[_ngcontent-%COMP%]:not(:first-child){display:none}.t-text[_ngcontent-%COMP%]{margin:0 .5rem;font-weight:400}"],changeDetection:0}),e})()},25096:(t,e,i)=>{i.d(e,{W:()=>I});var n,s=i(84911),r=i(20755),a=i(58733),o=i(64064),u=i(69781),c=i(8610),h=i(77355),d=i(42463),l=i(96954),m=i(76893),p=i(17085),g=i(2255);const v=function(t){return{$implicit:t}};function f(t,e){if(1&t){const t=r.EpF();r.O4$(),r.TgZ(0,"path",5),r.NdJ("tuiHoveredChange",(function(e){const i=r.CHM(t).$implicit,n=r.oxw();return r.KtG(n.onHovered(e,i))})),r.qZA()}if(2&t){const t=e.$implicit,i=r.oxw();r.Udp("color",i.getColor(t)),r.Q6J("tuiHint",i.hintContent)("tuiHintContext",r.VKq(6,v,t))("tuiPieChart",i.segments[t]),r.uIk("transform",i.getTransform(t))}}const C={xs:"50",s:"50",m:"77.8",l:"81.9",xl:"81.3"},x={xs:1.15,s:1.25,m:1.11,l:1.09,xl:1.08};class I{constructor(){this.hintOptions=(0,r.f3M)(o.TuiHintOptionsDirective,{optional:!0}),this.autoIdString=(0,r.f3M)(a.TuiIdService).generate(),this.value=[],this.size="m",this.masked=!1,this.activeItemIndex=NaN,this.activeItemIndexChange=new r.vpe,this.hintOptions&&(this.hintOptions.showDelay=0,this.hintOptions.hideDelay=0)}get empty(){return!this.getSum(this.value)}get hintContent(){return this.hintOptions?.content||""}get maskId(){return`tui-ring-chart-${this.autoIdString}`}get mask(){return this.masked?`url(#${this.maskId})`:null}get radius(){return C[this.size]}get segments(){return this.getSegments(this.value)}getTransform(t){const e=this.masked?`scale(${x[this.size]})`:`scale(${x.xs})`;return t===this.activeItemIndex?e:null}onHovered(t,e){this.updateActiveItemIndex(t?e:NaN)}getColor(t){return`var(--tui-chart-${t})`}getSum(t){return(0,a.tuiSum)(...t)}getSegments(t){return t.map(((t,e,i)=>i.reduce(((t,i,n)=>n<e?this.getDeg(i)+t:t),this.getDeg(t)))).map(((t,e,i)=>[i[e-1]||0,Math.min(t,359.9999)]))}getDeg(t){return t/this.getSum(this.value)*360}updateActiveItemIndex(t){t!==this.activeItemIndex&&(this.activeItemIndex=t,this.activeItemIndexChange.next(t))}}(n=I).ɵfac=function(t){return new(t||n)},n.ɵcmp=r.Xpm({type:n,selectors:[["tui-pie-chart"]],hostVars:3,hostBindings:function(t,e){2&t&&(r.uIk("data-size",e.size),r.ekj("_empty",e.empty))},inputs:{value:"value",size:"size",masked:"masked",activeItemIndex:"activeItemIndex"},outputs:{activeItemIndexChange:"activeItemIndexChange"},features:[r._Bn([],[(0,o.tuiHintOptionsProvider)({direction:"top-right",appearance:"onDark"})])],decls:8,vars:5,consts:[["focusable","false","height","100%","viewBox","-100 -100 200 200","width","100%","xmlns","http://www.w3.org/2000/svg",1,"t-svg"],["fill","white","height","400","width","400","x","-200","y","-200"],["cx","0","cy","0"],["cx","0","cy","0","r","100",1,"t-placeholder"],["automation-id","tui-pie-chart__segment","d","","fill","currentColor","tuiHintPointer","","class","t-segment",3,"color","tuiHint","tuiHintContext","tuiPieChart","tuiHoveredChange",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["automation-id","tui-pie-chart__segment","d","","fill","currentColor","tuiHintPointer","",1,"t-segment",3,"tuiHint","tuiHintContext","tuiPieChart","tuiHoveredChange"]],template:function(t,e){1&t&&(r.O4$(),r.TgZ(0,"svg",0)(1,"defs")(2,"mask"),r._UZ(3,"rect",1)(4,"circle",2),r.qZA()(),r.TgZ(5,"g"),r._UZ(6,"circle",3),r.YNc(7,f,1,8,"path",4),r.qZA()()),2&t&&(r.xp6(2),r.uIk("id",e.maskId),r.xp6(2),r.uIk("r",e.radius),r.xp6(1),r.Udp("mask",e.mask),r.xp6(2),r.Q6J("tuiRepeatTimesOf",e.segments.length))},dependencies:[u.X,c.c,h.D,d.x,l.t,m.q,p.D,g.K],styles:["[_nghost-%COMP%]{position:relative;display:block}[data-size=xs][_nghost-%COMP%]{width:2rem;height:2rem;pointer-events:none}[data-size=s][_nghost-%COMP%]{width:4rem;height:4rem}[data-size=m][_nghost-%COMP%]{width:9rem;height:9rem}[data-size=l][_nghost-%COMP%]{width:11rem;height:11rem}[data-size=xl][_nghost-%COMP%]{width:16rem;height:16rem}.t-svg[_ngcontent-%COMP%]{position:relative;overflow:visible;transform:rotate(-90deg)}.t-segment[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}._empty[_nghost-%COMP%]   .t-segment[_ngcontent-%COMP%]{display:none}.t-placeholder[_ngcontent-%COMP%]{fill:var(--tui-base-03)}"],changeDetection:0}),(0,s.gn)([a.tuiPure],I.prototype,"getSum",null),(0,s.gn)([a.tuiPure],I.prototype,"getSegments",null)},2255:(t,e,i)=>{i.d(e,{K:()=>p});var n=i(20755),s=i(5393),r=i(569),a=i(58733),o=i(64064),u=i(56424),c=i(74114),h=i(84787),d=i(92425),l=i(85228),m=i(81749);let p=(()=>{var t;class e{constructor(){this.sector$=new u.X([0,0]);const t=(0,n.f3M)(n.SBq).nativeElement,e=(0,n.f3M)(s.KS),i=(0,n.f3M)(s.L1),p=(0,n.f3M)(o.TUI_ANIMATIONS_SPEED);this.sector$.pipe((0,c.G)(),(0,h.w)((([t,n])=>{const s=e.now(),r=n[0]-t[0],u=n[1]-t[1];return i.pipe((0,d.U)((t=>(0,a.tuiEaseInOutQuad)((0,a.tuiClamp)((t-s)/(0,o.tuiGetDuration)(p),0,1)))),(0,l.o)((t=>t<1),!0),(0,d.U)((e=>[t[0]+r*e,n[1]>359?n[1]:t[1]+u*e])))})),(0,a.tuiZonefree)((0,n.f3M)(n.R0b)),(0,m.R)((0,n.f3M)(a.TuiDestroyService,{self:!0}))).subscribe((([e,i])=>t.setAttribute("d",(0,r.IP)(e,i))))}set tuiPieChart(t){this.sector$.next(t)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=n.lG2({type:t,selectors:[["path","tuiPieChart",""]],inputs:{tuiPieChart:"tuiPieChart"},features:[n._Bn([a.TuiDestroyService])]}),e})()},10802:(t,e,i)=>{i.d(e,{i:()=>a});var n=i(20755),s=i(25096);const r=["*"];let a=(()=>{var t;class e{constructor(){this.value=[],this.size="m",this.activeItemIndex=NaN,this.activeItemIndexChange=new n.vpe}onActiveItemIndexChange(t){this.updateActiveItemIndex(t)}updateActiveItemIndex(t){t!==this.activeItemIndex&&(this.activeItemIndex=t,this.activeItemIndexChange.next(t))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["tui-ring-chart"]],hostVars:1,hostBindings:function(t,e){2&t&&n.uIk("data-size",e.size)},inputs:{value:"value",size:"size",activeItemIndex:"activeItemIndex"},outputs:{activeItemIndexChange:"activeItemIndexChange"},ngContentSelectors:r,decls:5,vars:4,consts:[[1,"t-content"],[1,"t-wrapper"],[3,"activeItemIndex","masked","size","value","activeItemIndexChange"],[1,"t-shield"]],template:function(t,e){1&t&&(n.F$t(),n.TgZ(0,"div",0)(1,"div",1),n.Hsn(2),n.qZA()(),n.TgZ(3,"tui-pie-chart",2),n.NdJ("activeItemIndexChange",(function(t){return e.onActiveItemIndexChange(t)})),n.qZA(),n._UZ(4,"div",3)),2&t&&(n.xp6(3),n.Q6J("activeItemIndex",e.activeItemIndex)("masked",!0)("size",e.size)("value",e.value))},dependencies:[s.W],styles:["[_nghost-%COMP%]{position:relative;display:block}[data-size=s][_nghost-%COMP%]{width:4rem;height:4rem}[data-size=m][_nghost-%COMP%]{width:9rem;height:9rem}[data-size=l][_nghost-%COMP%]{width:11rem;height:11rem}[data-size=xl][_nghost-%COMP%]{width:16rem;height:16rem}.t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;font:var(--tui-font-text-m);max-height:100%;flex-direction:column;justify-content:center;text-align:center;padding:1.5rem;border-radius:100%;box-sizing:border-box;overflow:hidden;word-break:break-word;white-space:pre-wrap;color:var(--tui-text-02)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-xs)}.t-wrapper[_ngcontent-%COMP%]:first-line{color:var(--tui-text-01)}[data-size=l][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-text-l);font-weight:700}[data-size=m][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-text-m);font-weight:700}.t-shield[_ngcontent-%COMP%]{position:absolute;top:25%;left:25%;right:25%;bottom:25%;border-radius:100%}"],changeDetection:0}),e})()},569:(t,e,i)=>{i.d(e,{IP:()=>r,iP:()=>u});var n=i(58733);const s="M 100 0 A 100 100 0 1 1 100 0 L 0 0";function r(t,e){const i=(0,n.tuiToRadians)(t),r=(0,n.tuiToRadians)(e),a=100*Math.cos(i),o=100*Math.sin(i),u=100*Math.cos(r),c=100*Math.sin(r),h=["M",a,o,"A 100 100 0",(0,n.tuiToInt)(e-t>180),1,u,c,"L 0 0"];return Number.isNaN(u)?s:h.join(" ")}function a(t,e,i,n=!1,s=.2){const r=e||t,a=i||t,o=function(t,e){const i=e[0]-t[0],n=e[1]-t[1];return Math.atan2(n,i)}(r,a)+(n?Math.PI:0),u=function(t,e){const i=e[0]-t[0],n=e[1]-t[1];return Math.sqrt(i**2+n**2)}(r,a)*s;return[t[0]+Math.cos(o)*u,t[1]+Math.sin(o)*u]}const o=500;function u(t,e,i){return i?function(t,e,i){const[n,s]=a(t[e-1],t[e-2],t[e],!1,i),[r,o]=a(t[e],t[e-1],t[e+1],!0,i);return`C ${n},${s} ${r},${o} ${t[e][0]},${t[e][1]}`}(t,e,i/o):`L ${[t[e][0],t[e][1]]}`}},10882:(t,e,i)=>{i.d(e,{Fb:()=>a,UR:()=>s,bM:()=>r});var n=i(58733);const s={currency:null,currencyAlign:"right",sign:"negative-only"},r=(0,n.tuiCreateToken)(s);function a(t){return(0,n.tuiProvideOptions)(r,t,s)}},61386:(t,e,i)=>{i.d(e,{E:()=>c});var n=i(20755),s=i(93517),r=i(58733),a=i(64064),o=i(92425),u=i(10882);let c=(()=>{var t;class e{constructor(){this.options=(0,n.f3M)(u.bM),this.format=(0,n.f3M)(a.TUI_NUMBER_FORMAT)}transform(t,e=this.options.currency,i=this.options.currencyAlign){return this.format.pipe((0,o.U)((n=>{const o=(0,s.$v)(t,this.options.sign),u=(0,s.BP)(e),c=(0,a.tuiFormatNumber)(Math.abs(t),{...n,precision:Number.isNaN(n.precision)?2:n.precision}),h=u?.length>1||"right"===i?r.CHAR_NO_BREAK_SPACE:"";return"right"===i?`${o}${c}${h}${u}`:`${o}${u}${h}${c}`})))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=n.Yjl({name:"tuiAmount",type:t,pure:!0,standalone:!0}),e})()},37419:(t,e,i)=>{i.d(e,{f:()=>h});var n=i(20755),s=i(72133),r=i(58733),a=i(64064),o=i(81749),u=i(17841);const c=["type","checkbox","tuiCheckbox",""];let h=(()=>{var t;class e{constructor(){this.appearance=(0,n.f3M)(a.TuiAppearanceDirective),this.options=(0,n.f3M)(u.Y2),this.resolver=(0,n.f3M)(a.TUI_ICON_RESOLVER),this.destroy$=(0,n.f3M)(r.TuiDestroyService,{self:!0}),this.el=(0,n.f3M)(n.SBq).nativeElement,this.size=this.options.size,this.control=(0,n.f3M)(s.a5,{optional:!0})}ngOnInit(){this.control?.valueChanges&&(0,r.tuiControlValue)(this.control).pipe((0,o.R)(this.destroy$)).subscribe((t=>{this.el.indeterminate=null===t}))}ngDoCheck(){this.appearance.tuiAppearance=this.options.appearance(this.el)}getIcon(t){const e=this.options.icons[t],i=(0,r.tuiIsString)(e)?e:e(this.size);return`url(${this.resolver(i)})`}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["input","type","checkbox","tuiCheckbox",""]],hostVars:8,hostBindings:function(t,e){2&t&&(n.Ikx("disabled",!e.control||e.control.disabled),n.uIk("data-size",e.size),n.Udp("--t-checked",e.getIcon("checked"))("--t-indeterminate",e.getIcon("indeterminate")),n.ekj("_readonly",!e.control))},inputs:{size:"size"},features:[n._Bn([r.TuiDestroyService]),n.zW0([{directive:a.TuiAppearanceDirective,inputs:["tuiAppearance","appearance","tuiAppearanceState","tuiAppearanceState","tuiAppearanceFocus","tuiAppearanceFocus"]},r.TuiNativeValidatorDirective])],attrs:c,decls:0,vars:0,template:function(t,e){},styles:['[_nghost-%COMP%]{--t-size: 1.5rem;--t-radius: var(--tui-radius-s);width:var(--t-size);height:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;width:100%;height:100%;content:"";background:currentColor;-webkit-mask:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>\') center / 100%;mask:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>\') center / 100%;transform:scale(0);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out}[_nghost-%COMP%]:disabled._readonly{opacity:1}[_nghost-%COMP%]:checked:before, [_nghost-%COMP%]:indeterminate:before{-webkit-mask-image:var(--t-checked);mask-image:var(--t-checked);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out,-webkit-mask 0s ease-in-out}[_nghost-%COMP%]:indeterminate:before{-webkit-mask-image:var(--t-indeterminate);mask-image:var(--t-indeterminate)}[data-size=s][_nghost-%COMP%]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}'],changeDetection:0}),e})()},17841:(t,e,i)=>{i.d(e,{Y2:()=>r,im:()=>a});var n=i(58733);const s={size:"m",appearance:t=>t.checked||t.indeterminate?"primary":"whiteblock",icons:{checked:t=>"m"===t?"tuiIconCheckLarge":"tuiIconCheck",indeterminate:t=>"m"===t?"tuiIconMinusLarge":"tuiIconMinus"}},r=(0,n.tuiCreateToken)(s);function a(t){return(0,n.tuiProvideOptions)(r,t,s)}}}]);