webpackJsonp([26,35],{102:function(t,s,a){var i,n;a(410),i=a(326);var l=a(492);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=l.render,n.staticRenderFns=l.staticRenderFns,n._scopeId="data-v-22d973ae",t.exports=i},326:function(t,s){},370:function(t,s,a){s=t.exports=a(71)(),s.push([t.i,".button[data-v-22d973ae]{margin:5px 0 0}","",{version:3,sources:["/./client/views/ui/Buttons.vue"],names:[],mappings:"AACA,yBACE,cAAgB,CACjB",file:"Buttons.vue",sourcesContent:["\n.button[data-v-22d973ae] {\n  margin: 5px 0 0;\n}\n"],sourceRoot:"webpack://"}])},410:function(t,s,a){var i=a(370);"string"==typeof i&&(i=[[t.i,i,""]]);a(72)(i,{});i.locals&&(t.exports=i.locals)},492:function(t,s){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement;return s("div",[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-parent is-4"},[s("article",{staticClass:"tile is-child box"},[s("h1",{staticClass:"title"},["Options"])," ",s("div",{staticClass:"block"},[s("button",{staticClass:"button"},["Button"])," ",s("button",{staticClass:"button is-white"},["White"])," ",s("button",{staticClass:"button is-light"},["Light"])," ",s("button",{staticClass:"button is-dark"},["Dark"])," ",s("button",{staticClass:"button is-black"},["Black"])," ",s("button",{staticClass:"button is-link"},["Link"])])," ",s("div",{staticClass:"block"},[s("button",{staticClass:"button is-primary"},["Primary"])," ",s("button",{staticClass:"button is-info"},["Info"])," ",s("button",{staticClass:"button is-success"},["Success"])," ",s("button",{staticClass:"button is-warning"},["Warning"])," ",s("button",{staticClass:"button is-danger"},["Danger"])])])])," ",s("div",{staticClass:"tile is-parent is-4"},[s("article",{staticClass:"tile is-child box"},[s("h1",{staticClass:"title"},["Sizes"])," ",s("a",{staticClass:"button is-small"},["Small"])," ",s("a",{staticClass:"button"},["Normal"])," ",s("a",{staticClass:"button is-medium"},["Medium"])," ",s("a",{staticClass:"button is-large"},["Large"])])])," ",s("div",{staticClass:"tile is-parent is-4"},[s("article",{staticClass:"tile is-child box"},[s("h1",{staticClass:"title"},["Styles"])," ",s("div",{staticClass:"block"},[s("h2",{staticClass:"subtitle"},["Outlined"])," ",s("a",{staticClass:"button is-outlined"},["Outlined"])," ",s("a",{staticClass:"button is-primary is-outlined"},["Outlined"])," ",s("a",{staticClass:"button is-info is-outlined"},["Outlined"])," ",s("a",{staticClass:"button is-success is-outlined"},["Outlined"])," ",s("a",{staticClass:"button is-danger is-outlined"},["Outlined"])])," ",s("h2",{staticClass:"subtitle"},["Inverted (the text color becomes the background color, and vice-versa)"])," ",s("div",{staticClass:"notification is-primary"},[s("a",{staticClass:"button is-primary is-inverted"},["Inverted"])," ",s("a",{staticClass:"button is-info is-inverted"},["Inverted"])," ",s("a",{staticClass:"button is-success is-inverted"},["Inverted"])," ",s("a",{staticClass:"button is-danger is-inverted"},["Inverted"])])])])])," ",s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child box"},[s("h1",{staticClass:"title"},["States"])," ",s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h2",{staticClass:"subtitle"},["Loading"])," ",s("a",{staticClass:"button is-loading"},["Loading"])," ",s("a",{staticClass:"button is-primary is-loading"},["Loading"])," ",s("a",{staticClass:"button is-info is-loading"},["Loading"])," ",s("a",{staticClass:"button is-success is-loading"},["Loading"])," ",s("a",{staticClass:"button is-warning is-loading"},["Loading"])," ",s("a",{staticClass:"button is-danger is-loading"},["Loading"])])," ",s("div",{staticClass:"column"},[s("h2",{staticClass:"subtitle"},["Active"])," ",s("a",{staticClass:"button is-active"},["Active"])," ",s("a",{staticClass:"button is-primary is-active"},["Active"])," ",s("a",{staticClass:"button is-info is-active"},["Active"])," ",s("a",{staticClass:"button is-success is-active"},["Active"])," ",s("a",{staticClass:"button is-warning is-active"},["Active"])," ",s("a",{staticClass:"button is-danger is-active"},["Active"])])," ",s("div",{staticClass:"column"},[s("h2",{staticClass:"subtitle"},["Disabled"])," ",s("a",{staticClass:"button is-disabled"},["Disabled"])," ",s("a",{staticClass:"button is-primary is-disabled"},["Disabled"])," ",s("a",{staticClass:"button is-info is-disabled"},["Disabled"])," ",s("a",{staticClass:"button is-success is-disabled"},["Disabled"])," ",s("a",{staticClass:"button is-warning is-disabled"},["Disabled"])," ",s("a",{staticClass:"button is-danger is-disabled"},["Disabled"])])," ",s("div",{staticClass:"column"},[s("h2",{staticClass:"subtitle"},["With Font Awesome icons"])," ",s("a",{staticClass:"button"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-github"})])," ",s("span",["GitHub"])])," ",s("a",{staticClass:"button is-primary"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-twitter"})])," ",s("span",["Twitter"])])," ",s("a",{staticClass:"button is-success"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-check"})])," ",s("span",["Save"])])," ",s("a",{staticClass:"button is-danger"},[s("span",["Delete"])," ",s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-times"})])])," ",s("a",{staticClass:"button is-danger is-outlined"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-times"})])," ",s("span",["Delete"])])])])])])])," ",s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child box"},[s("h1",{staticClass:"title"},["Button group"])," ",s("h2",{staticClass:"subtitle"},["If you want to group buttons together, use the is-grouped modifier on the control container:"])," ",s("div",{staticClass:"control is-grouped"},[s("p",{staticClass:"control"},[s("a",{staticClass:"button is-primary"},["\n              Save changes\n            "])])," ",s("p",{staticClass:"control"},[s("a",{staticClass:"button"},["\n              Cancel\n            "])])," ",s("p",{staticClass:"control"},[s("a",{staticClass:"button is-danger"},["\n              Delete post\n            "])])])])])," ",s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child box"},[s("h1",{staticClass:"title"},["Button addons"])," ",s("h2",{staticClass:"subtitle"},["If you want to use buttons as addons, use the has-addons modifier on the control container:"])," ",s("p",{staticClass:"control has-addons"},[s("a",{staticClass:"button"},[s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fa fa-align-left"})])," ",s("span",["Left"])])," ",s("a",{staticClass:"button"},[s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fa fa-align-center"})])," ",s("span",["Center"])])," ",s("a",{staticClass:"button"},[s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fa fa-align-right"})])," ",s("span",["Right"])])])])])])])}]}}});
//# sourceMappingURL=26.f9adf4b7d7a44b3e5cad.js.map