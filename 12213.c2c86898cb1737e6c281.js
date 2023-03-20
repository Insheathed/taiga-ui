"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[12213],{12213:(I,g,a)=>{a.r(g),a.d(g,{ExampleTuiTablePaginationModule:()=>Y});var c=a(12057),r=a(33982),s=a(29851),u=a(36256),t=a(74788),T=a(88331),d=a(37159),P=a(57068),m=a(56946);let x=(()=>{class e{constructor(){this.page=3,this.size=10}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-table-pagination-example-1"]],decls:5,vars:5,consts:[[3,"total","page","size","pageChange","sizeChange"]],template:function(n,i){1&n&&(t.TgZ(0,"tui-table-pagination",0),t.NdJ("pageChange",function(l){return i.page=l})("sizeChange",function(l){return i.size=l}),t.qZA(),t.TgZ(1,"p"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA()),2&n&&(t.Q6J("total",237)("page",i.page)("size",i.size),t.xp6(2),t.hij("Current page: ",i.page,""),t.xp6(2),t.hij("Items per page: ",i.size,""))},directives:[m.W],encapsulation:2,changeDetection:0}),e})();const h=({$implicit:e,total:o})=>{switch(e){case 10:return"Ten";case o:return"Show all rows";default:return e}};let y=(()=>{class e{constructor(){this.total=350,this.sizeOptions=[10,50,100,this.total]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-table-pagination-example-2"]],features:[t._Bn([(0,u.tuiTablePaginationOptionsProvider)({sizeOptionContent:h})])],decls:1,vars:2,consts:[[3,"total","items"]],template:function(n,i){1&n&&t._UZ(0,"tui-table-pagination",0),2&n&&t.Q6J("total",i.total)("items",i.sizeOptions)},directives:[m.W],encapsulation:2,changeDetection:0}),e})(),C=(()=>{class e{constructor(){this.total=350,this.sizeOptions=[10,50,100,this.total]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-table-pagination-example-3"]],features:[t._Bn([(0,u.tuiTablePaginationOptionsProvider)({showPages:!1})])],decls:1,vars:2,consts:[[3,"total","items"]],template:function(n,i){1&n&&t._UZ(0,"tui-table-pagination",0),2&n&&t.Q6J("total",i.total)("items",i.sizeOptions)},directives:[m.W],encapsulation:2,changeDetection:0}),e})();var f=a(31823),Z=a(54476),b=a(17023),_=a(76349);function E(e,o){1&e&&(t._uU(0," You can customize the component via DI-token "),t.TgZ(1,"code"),t._uU(2,"TUI_TABLE_PAGINATION_OPTIONS"),t.qZA(),t._uU(3," . "),t.TgZ(4,"p",6),t._uU(5," Use function "),t.TgZ(6,"code"),t._uU(7,"tuiTablePaginationOptionsProvider"),t.qZA(),t._uU(8," to provide new value of this token. "),t.qZA())}function U(e,o){if(1&e&&(t.TgZ(0,"p"),t._uU(1,"Component to show pagination in table footer"),t.qZA(),t.TgZ(2,"tui-doc-example",2),t._UZ(3,"tui-table-pagination-example-1"),t.qZA(),t.TgZ(4,"tui-doc-example",3),t.YNc(5,E,9,0,"ng-template",null,4,t.W1O),t._UZ(7,"tui-table-pagination-example-2"),t.qZA(),t.TgZ(8,"tui-doc-example",5),t._UZ(9,"tui-table-pagination-example-3"),t.qZA()),2&e){const n=t.MAs(6),i=t.oxw();t.xp6(2),t.Q6J("content",i.example1),t.xp6(2),t.Q6J("description",n)("content",i.example2),t.xp6(4),t.Q6J("content",i.example3)}}function z(e,o){1&e&&t._uU(0," Total amount of items/lines in the table. ")}function A(e,o){1&e&&(t._uU(0," Items/Lines per page. "),t.TgZ(1,"p"),t._uU(2," Uses the first element inside "),t.TgZ(3,"code"),t._uU(4,"items"),t.qZA(),t._uU(5," by default. "),t.qZA())}function v(e,o){1&e&&(t._uU(0," Current page. "),t.TgZ(1,"p"),t._uU(2,"Indexing starts at zero."),t.qZA())}function M(e,o){1&e&&t._uU(0," Options to select amount of lines per page. ")}function N(e,o){1&e&&t._uU(0," Emits the selected page when user navigates by spin\xa0buttons or selects new size of items per page. ")}function V(e,o){1&e&&(t._uU(0," Emits the new "),t.TgZ(1,"code"),t._uU(2,"size"),t.qZA(),t._uU(3," -property (user selects new amount of lines per page). "))}function J(e,o){1&e&&(t._uU(0," Event emits when "),t.TgZ(1,"code"),t._uU(2,"page"),t.qZA(),t._uU(3," or "),t.TgZ(4,"code"),t._uU(5,"size"),t.qZA(),t._uU(6," changes. "))}function O(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"tui-doc-demo"),t.TgZ(1,"tui-table-pagination",7),t.NdJ("pageChange",function(p){return t.CHM(n),t.oxw().page=p})("sizeChange",function(p){return t.CHM(n),t.oxw().size=p})("pageChange",function(p){return t.CHM(n),t.MAs(8).emitEvent(p)})("sizeChange",function(p){return t.CHM(n),t.MAs(10).emitEvent(p)}),t.qZA(),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,z,1,0,"ng-template",8),t.NdJ("documentationPropertyValueChange",function(p){return t.CHM(n),t.oxw().total=p}),t.YNc(4,A,6,0,"ng-template",9),t.NdJ("documentationPropertyValueChange",function(p){return t.CHM(n),t.oxw().size=p}),t.YNc(5,v,3,0,"ng-template",10),t.NdJ("documentationPropertyValueChange",function(p){return t.CHM(n),t.oxw().page=p}),t.YNc(6,M,1,0,"ng-template",11),t.NdJ("documentationPropertyValueChange",function(p){return t.CHM(n),t.oxw().items=p}),t.YNc(7,N,1,0,"ng-template",12,13,t.W1O),t.YNc(9,V,4,0,"ng-template",14,15,t.W1O),t.YNc(11,J,7,0,"ng-template",16,17,t.W1O),t.qZA()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("items",n.items)("total",n.total)("page",n.page)("size",n.size),t.xp6(2),t.Q6J("documentationPropertyValue",n.total),t.xp6(1),t.Q6J("documentationPropertyValue",n.size),t.xp6(1),t.Q6J("documentationPropertyValue",n.page),t.xp6(1),t.Q6J("documentationPropertyValues",n.itemsVariants)("documentationPropertyValue",n.items)}}function H(e,o){if(1&e&&(t.TgZ(0,"ol",18),t.TgZ(1,"li"),t.TgZ(2,"p"),t._uU(3," Import an Angular module for forms and "),t.TgZ(4,"code"),t._uU(5,"TuiTablePaginationModule"),t.qZA(),t._uU(6," in the same module where you want to use our component: "),t.qZA(),t._UZ(7,"tui-doc-code",19),t.qZA(),t.TgZ(8,"li"),t.TgZ(9,"p"),t._uU(10,"Add to the template:"),t.qZA(),t._UZ(11,"tui-doc-code",20),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(7),t.Q6J("code",n.exampleModule),t.xp6(4),t.Q6J("code",n.exampleHtml)}}let Q=(()=>{class e{constructor(){this.itemsVariants=[[10,20,50,100],[10,100,500]],this.total=1e3,this.page=5,this.items=this.itemsVariants[0],this.size=this.items[0],this.example1={HTML:a.e(29456).then(a.t.bind(a,29456,17)),TypeScript:a.e(11495).then(a.t.bind(a,11495,17))},this.example2={TypeScript:a.e(3467).then(a.t.bind(a,3467,17)),HTML:a.e(61420).then(a.t.bind(a,61420,17))},this.example3={TypeScript:a.e(55433).then(a.t.bind(a,50590,17)),HTML:a.e(27334).then(a.t.bind(a,27334,17))},this.exampleModule=a.e(77406).then(a.t.bind(a,77406,17)),this.exampleHtml=a.e(40328).then(a.t.bind(a,40328,17))}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["example-tui-table-pagination"]],decls:4,vars:0,consts:[["header","TablePagination","package","ADDON-TABLE","type","components"],["pageTab",""],["id","usage","heading","Usage",3,"content"],["id","custom-size-option-content","heading","Custom size-option content",3,"description","content"],["tokenDescription",""],["id","toggle-pages-label","heading","Toggle pages label",3,"content"],[1,"tui-space_bottom-0"],[3,"items","total","page","size","pageChange","sizeChange"],["documentationPropertyName","total","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","page","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","pageChange","documentationPropertyMode","output","documentationPropertyType","number"],["documentationPropertyPageChange","documentationProperty"],["documentationPropertyName","sizeChange","documentationPropertyMode","output","documentationPropertyType","number"],["documentationPropertySizeChange","documentationProperty"],["documentationPropertyName","paginationChange","documentationPropertyMode","output","documentationPropertyType","TuiTablePagination"],["documentationPropertyPaginationChange","documentationProperty"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(n,i){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,U,10,4,"ng-template",1),t.YNc(2,O,13,9,"ng-template",1),t.YNc(3,H,12,2,"ng-template",1),t.qZA())},directives:[T.q,d.n,P.f,x,y,C,f.F,m.W,Z.z,b.B,_.c],encapsulation:2,changeDetection:0}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,u.TuiTablePaginationModule,s.fV,r.Bz.forChild((0,s.Ve)(Q))]]}),e})()}}]);