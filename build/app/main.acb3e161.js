!function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],f=0,d=[];f<o.length;f++)r=o[f],i[r]&&d.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);for(u&&u(e);d.length;)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},i={0:0},a=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="./";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([17,1]),n()}([,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,function(t){t.exports={a:"1.0.0-beta.0"}},function(t,e,n){t.exports=n(42)},,,,,,function(t,e,n){"use strict";var s=n(5);n.n(s).a},,function(t,e,n){"use strict";var s=n(6);n.n(s).a},,function(t,e,n){"use strict";var s=n(7);n.n(s).a},,,function(t,e,n){"use strict";var s=n(8);n.n(s).a},,function(t,e,n){"use strict";var s=n(9);n.n(s).a},,function(t,e,n){"use strict";var s=n(10);n.n(s).a},,function(t,e,n){"use strict";var s=n(11);n.n(s).a},,function(t,e,n){"use strict";var s=n(12);n.n(s).a},,function(t,e,n){"use strict";var s=n(13);n.n(s).a},,function(t,e,n){"use strict";n.r(e);var s=n(2),i=n.n(s),a=n(1),r=n(15),o=n(16),c={computed:{view:function(){return this.$store.state.view},local:function(){return this.$store.state._},sync:function(){return this.$store.state.meta.syncData},icon:function(){return this.sync?"fa-ellipsis-h":"fa-exclamation-circle"}},methods:{active:function(t){return this.view.tab==t&&!this.view.info},switchTab:function(t){this.update("view",{tab:t})},config:function(){this.update("view",{config:!this.view.config})},close:function(){this.update("local",{mobile:!this.local.mobile})},toggle:function(){this.update("view",{sidebar:!this.view.sidebar})},update:function(t,e){this.$store.commit("update_"+t,e),this.$store.commit("update_local",{mobile:!1})}}},l=(n(23),n(0)),u=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{class:{open:t.view.sidebar,mobile:t.local.mobile},attrs:{id:"sidebar"}},[n("a",{staticClass:"logo display-md-down",attrs:{href:"#"},on:{click:function(e){t.close()}}},[n("i",{staticClass:"fas fa-times"}),t._v(" "),n("strong",[t._v("Tabbi")])]),t._v(" "),n("a",{staticClass:"logo display-lg-up",attrs:{href:"#"},on:{click:function(e){t.toggle()}}},[n("i",{staticClass:"fas fa-bars"}),t._v(" "),n("strong",[t._v("Tabbi")])]),t._v(" "),n("div",{staticStyle:{height:"2em"}}),t._v(" "),n("a",{attrs:{href:"#"},on:{click:function(e){t.$emit("newBoard")}}},[n("i",{staticClass:"fas fa-plus-square"}),t._v(" "),n("strong",[t._v("New Board")])]),t._v(" "),n("div",{staticStyle:{height:"2em"}}),t._v(" "),n("a",{class:{active:t.active("boards")},attrs:{href:"#"},on:{click:function(e){t.switchTab("boards")}}},[n("i",{staticClass:"fas fa-thumbtack"}),t._v(" "),n("strong",[t._v("Boards")])]),t._v(" "),n("a",{class:{active:t.active("sessions")},attrs:{href:"#"},on:{click:function(e){t.switchTab("sessions")}}},[n("i",{staticClass:"fas fa-book-open"}),t._v(" "),n("strong",[t._v("Sessions")])]),t._v(" "),n("a",{class:{active:t.active("trash")},attrs:{href:"#"},on:{click:function(e){t.switchTab("trash")}}},[n("i",{staticClass:"fas fa-trash-alt"}),t._v(" "),n("strong",[t._v("Trash")])]),t._v(" "),n("a",{class:{active:t.view.config,bottom:1},attrs:{href:"#"},on:{click:function(e){t.config()}}},[n("i",{class:["fas",t.icon]}),t._v(" "),n("strong",[t._v("Options")])])])},[],!1,null,"2d0d84d0",null);u.options.__file="SideBar.vue";var f=u.exports,d={computed:{mobile:function(){return this.$store.state._.mobile}},methods:{show:function(){this.$store.commit("update_local",{mobile:!this.mobile})},setFilter:function(t){var e=this.$filter.run(t);this.$store.commit("update_local",{filter:e}),"Enter"==t.key&&this.openFiltered(e)},openFiltered:function(t){var e=[],n="board"==t.by;for(var s in this.$store.state.boards){var i=this.$store.state.boards[s];if(i.links)for(var a=i.links.length-1;a>=0;a--){var r=i.links[a],o=n?i:r;this.$filter.out(t,o,n)||e.push(r.link)}}return this.$$.openAll(e)}}},h=(n(25),Object(l.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"toolbar"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"row"},[n("div",{staticClass:"side col display-md-down"},[n("a",{attrs:{href:"#"},on:{click:function(e){t.show()}}},[n("i",{staticClass:"fas fa-bars"})])]),t._v(" "),n("div",{staticClass:"col col-xs-10"},[n("input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"text",placeholder:"Type to filter"},on:{keyup:t.setFilter}})])])])])},[],!1,null,"a2cb725a",null));h.options.__file="ToolBar.vue";var v=h.exports;function p(t,e,n,s,i,a,r){try{var o=t[a](r),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(s,i)}var m={data:function(){return{accord:1,about:!1}},computed:{view:function(){return this.$store.state.view},synced:function(){return this.$store.state.meta.syncData}},methods:{close:function(){this.$store.commit("update_view",{config:!1})},setLinks:function(t){this.$store.commit("update_view",{links:t.target.value})},setSync:function(){this.$store.dispatch(this.synced?"disable_sync":"enable_sync",this.$sync)},getImport:function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise(function(s,i){var a=t.apply(e,n);function r(t){p(a,s,i,r,o,"next",t)}function o(t){p(a,s,i,r,o,"throw",t)}r(void 0)})}}(i.a.mark(function t(e){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$importer(e.target.files[0]);case 2:n=t.sent,this.$store.commit("import_bookmarks",n);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},b=(n(27),Object(l.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"info"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"logo row"},[n("div",{staticClass:"col"},[n("h5",{staticClass:"float-right"},[n("a",{attrs:{href:"#"},on:{click:function(e){t.close()}}},[n("i",{staticClass:"fas fa-times"})])]),t._v(" "),n("h3",[t._v("Tabbi")]),t._v(" "),n("h6",[t._v("your (new) new tab page")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col col-lg-4"},[n("h6",[t._v("Already Have Bookmarks?")]),t._v(" "),n("p",[t._v("You can export them to an HTML file, and then import them here.")]),t._v(" "),n("input",{attrs:{type:"file",id:"import"},on:{change:t.getImport}}),t._v(" "),n("label",{staticClass:"align-center full button button-primary",attrs:{for:"import"}},[t._v("\n          Import (*.html)\n        ")])]),t._v(" "),n("div",{staticClass:"col col-lg-4"},[n("h6",[t._v("Keep Data In Sync")]),t._v(" "),n("p",[t._v("Tabbi can sync with your Google Drive so you don't lose data.")]),t._v(" "),n("button",{staticClass:"full button-primary",on:{click:function(e){t.setSync()}}},[t._v("\n          Drive Sync: "+t._s(t.synced?"On":"Off")+"\n          "),t.synced?t._e():n("i",{staticClass:"fas fa-exclamation-circle"})])]),t._v(" "),n("div",{staticClass:"col col-lg-4"},[n("h6",[t._v("Tabbi Options")]),t._v(" "),t._m(0),t._v(" "),n("select",{domProps:{value:t.view.links},on:{change:t.setLinks}},[n("option",{attrs:{value:"3"}},[t._v("3 Links")]),t._v(" "),n("option",{attrs:{value:"5"}},[t._v("5 Links")]),t._v(" "),n("option",{attrs:{value:"10"}},[t._v("10 Links")]),t._v(" "),n("option",{attrs:{value:"25"}},[t._v("25 Links")])])])]),t._v(" "),n("div",{staticClass:"row"},[t._m(1),t._v(" "),n("div",{staticClass:"col col-lg-8 col-xlg-9 align-right"},[n("a",{staticClass:"button button-primary-outlined button-small",attrs:{href:"#"},on:{click:function(e){t.about=!0}}},[t._v("\n          About\n        ")]),t._v(" "),n("a",{staticClass:"button button-primary-outlined button-small",attrs:{href:"https://github.com/12px/tabbi",target:"_blank"}},[t._v("\n          On Github\n        ")]),t._v(" "),n("a",{staticClass:"button button-primary-outlined button-small",attrs:{href:"https://reddit.com/r/tabbi",target:"_blank"}},[t._v("\n          On Reddit\n        ")]),t._v(" "),n("a",{staticClass:"button button-primary button-small",attrs:{href:"https://chrome.google.com/webstore/detail/ilonjmcjjkcnhndjfkaoekocdfhedlfd",target:"_blank"}},[t._v("\n          For Chrome\n        ")])])])]),t._v(" "),t.about?n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal"},[t._m(2),t._v(" "),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"accordian"},[n("h5",{on:{click:function(e){t.accord=1}}},[n("i",{staticClass:"fas fa-plus"}),t._v(" Bookmark Focused")]),t._v(" "),1==t.accord?n("div",[t._m(3),t._v(" "),n("p",[t._v("Using an extension, you can even save whole sessions of links!")])]):t._e(),t._v(" "),n("h5",{on:{click:function(e){t.accord=2}}},[n("i",{staticClass:"fas fa-plus"}),t._v(" Use Anywhere")]),t._v(" "),2==t.accord?n("div",[n("p",[t._v("Tabbi is available as a static website and a browser extension. Since you can sync your data with google drive, you can use it anywhere.")]),t._v(" "),n("p",[t._v("Use a browser extension on your desktop, and set it as your home page on mobile.")])]):t._e(),t._v(" "),n("h5",{on:{click:function(e){t.accord=3}}},[n("i",{staticClass:"fas fa-plus"}),t._v(" Features")]),t._v(" "),3==t.accord?n("div",[t._m(4),t._v(" "),t._m(5)]):t._e()])]),t._v(" "),n("div",{staticClass:"modal-footer align-right"},[n("small",[t._v("v"+t._s(t.$root.version))]),t._v(" "),n("button",{staticClass:"button-primary",on:{click:function(e){t.about=!1}}},[t._v("Close")])])])]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Visible Links - ")]),this._v(" How many links shown per card before collapsing.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col col-lg-4 col-xlg-3"},[e("small",[this._v("\n          Use Reddit or Github to request features and report bugs.\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-head"},[e("strong",{staticClass:"modal-title"},[this._v("About Tabbi")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Tabbi")]),this._v(" puts all the links you save front and center, so you never have to dig for them. The filter bar it makes it find whichever link you're looking for, and quickly.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n              Filtering by Title, Tag or Board. "),n("br"),t._v(" "),n("strong",[t._v(":key")]),t._v(" filters boards - \n              "),n("strong",[t._v("#key")]),t._v(" filters tags "),n("br"),t._v(" "),n("em",[t._v("Hit 'Enter' to open all visible links you've filtered")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Session Saving")]),this._v(" will save all of your open tabs into a new session, for re-opening later. (Extension Required)")])}],!1,null,"5b11261f",null));b.options.__file="InfoPane.vue";var _=b.exports,g=n(14),k=n.n(g),y={props:["id","self","source"],computed:{filter:function(){return this.$store.state._.filter},tagged:function(){return this.self.tags&&this.self.tags.length},prefix:function(){return this.tagged?"fa-tag":"fa-sort"},option:function(){return"boards"==this.source?"fa-pencil-alt":"fa-trash-alt"},tags:function(){return this.filter.active&&"tag"==this.filter.by},board:function(){var t=this.$$.xById(this.$store.state.boards,this.self.board);return this.$store.state.boards[t]}},methods:{filtered:function(){return this.$filter.out(this.filter,this.self)},doOption:function(){return this.$emit("trash"!=this.source?"editItem":"remItem")},handleLink:function(t){chrome.identity&&this.$root.popup&&(console.log(t),chrome.tabs.create({url:t.target.href}))}}},w=(n(30),Object(l.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!t.filtered(),expression:"!filtered()"}],staticClass:"item has-hint"},["sessions"!=t.source?n("i",{class:["grab mute fas",t.prefix]}):t._e(),t._v(" "),n("a",{staticClass:"link",attrs:{href:t.self.link},on:{click:t.handleLink}},[t._v("\n    "+t._s(t.self.name)+"\n  ")]),t._v(" "),"trash"==t.source&&"links"==t.id?n("a",{staticClass:"hint",attrs:{href:"#"},on:{click:function(e){t.$emit("resItem")}}},[n("i",{staticClass:"mute fas fa-history"})]):t._e(),t._v(" "),"sessions"!=t.source?n("a",{staticClass:"hint",attrs:{href:"#"},on:{click:function(e){t.doOption()}}},[n("i",{class:["mute fas",t.option]})]):t._e()])},[],!1,null,"ffa13fcc",null));w.options.__file="CardItem.vue";var C=w.exports,$={props:["board","item","source"],data:function(){return{newTag:"",newBoard:0}},computed:{self:function(){return this.$store.state[this.source][this.board]},link:function(){return this.self.links[this.item]},none:function(){return this.link?""==this.link.name:!this.self.links.length}},methods:{addTag:function(){if(!this.newTag)return this.$$.toast("No Tag Specified.");this.link.tags.push(this.newTag),this.newTag=""},remTag:function(t){this.link.tags.splice(t,1)},trash:function(){this.link?this.$store.commit("trash_link",{board:this.board,item:this.item}):"boards"==this.source?this.$store.commit("trash_board",this.board):"sessions"==this.source&&this.$store.commit("trash_session",this.board),this.finish()},finish:function(){var t={old:this.board,new:this.newBoard,item:this.item};return this.newBoard>0&&this.$store.commit("change_board",t),this.$store.commit("refresh"),this.$emit("finished")}}},x=(n(32),Object(l.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor",on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"escape",void 0,e.key,void 0))return null;t.finish()}}},[t.link?t._e():n("div",[n("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.self.name,expression:"self.name"}],attrs:{type:"text",placeholder:"Board Name"},domProps:{value:t.self.name},on:{keup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.finish()},input:function(e){e.target.composing||t.$set(t.self,"name",e.target.value)}}})]),t._v(" "),t.link?n("div",{staticClass:"link"},[n("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.link.name,expression:"link.name"}],attrs:{type:"text",placeholder:"Link Name"},domProps:{value:t.link.name},on:{keup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.finish()},input:function(e){e.target.composing||t.$set(t.link,"name",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.link.link,expression:"link.link"}],attrs:{type:"text",placeholder:"Link URL"},domProps:{value:t.link.link},on:{keup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.finish()},input:function(e){e.target.composing||t.$set(t.link,"link",e.target.value)}}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.newBoard,expression:"newBoard"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.newBoard=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"0",selected:""}},[t._v("Change Board")]),t._v(" "),t._l(t.$store.state.boards,function(e,s){return t.self.id!=e.id?n("option",{domProps:{value:s}},[t._v("\n        "+t._s(e.name)+"\n      ")]):t._e()})],2),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTag,expression:"newTag"}],attrs:{type:"text",placeholder:"Add Tag"},domProps:{value:t.newTag},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.addTag()},input:function(e){e.target.composing||(t.newTag=e.target.value)}}}),t._v(" "),n("ul",{staticClass:"tags"},t._l(t.link.tags,function(e,s){return n("li",{key:s,staticClass:"tag",on:{click:function(e){t.remTag(s)}}},[n("strong",[t._v("\n          #"+t._s(e)+"\n        ")])])}))]):t._e(),t._v(" "),n("div",{staticClass:"bottom row align-center"},[n("div",{staticClass:"col col-xs-4"},[n("a",{attrs:{href:"#"},on:{click:function(e){t.finish()}}},[n("i",{staticClass:"mute fas fa-times"})])]),t._v(" "),n("div",{staticClass:"col col-xs-4"},[n("a",{attrs:{href:"#"},on:{click:function(e){t.trash()}}},[n("i",{staticClass:"bad fas fa-trash-alt"})])]),t._v(" "),n("div",{staticClass:"col col-xs-4"},[n("a",{attrs:{href:"#"},on:{click:function(e){t.finish()}}},[n("i",{staticClass:"good fas fa-check"})])])])])},[],!1,null,"eab60cae",null));x.options.__file="CardEditor.vue";var T=x.exports,S={props:["id","self","source","sesh"],data:function(){return{show:!1,drag:!1,edit:{item:!1,active:!1}}},computed:{session:function(){return"sessions"==this.source},filter:function(){return this.$store.state._.filter},trash:function(){return this.$store.state.trash},links:function(){return this.$store.state.view.links},overflow:function(){return this.self.links.length>this.links},hasLinks:function(){return this.self.links&&this.self.links.length}},methods:{finished:function(){return this.edit.active=!1},filtered:function(){return this.$filter.out(this.filter,this.self,!0)},amend:function(t){this.edit.item=t,this.edit.active=!this.edit.active},openCard:function(){return this.$$.openAll(this.self.links)},visible:function(t){return!this.edit.active&&(this.show||t<this.links||this.filter.active||this.drag)},finishDrag:function(){this.drag=!1,this.$store.commit("refresh")},create:function(){this.$store.commit("create_link",{board:this.id}),this.amend(this.self.links.length-1)},remove:function(t){t||0===t?this.self.links.splice(t,1):"links"==this.id?this.self.links=[]:this.sesh?this.trash.sessions.splice(this.id,1):this.trash.boards.splice(this.id,1),this.$store.commit("refresh")},restore:function(t,e){if(t){var n=this.$$.xById(this.$store.state.boards,t.board);if(n<0)return this.$$.toast("Unknown Board.");delete t.board,this.$store.state.boards[n].links.push(t),this.trash.links.splice(e,1)}else if("links"!=this.id)this.sesh?(this.$store.state.sessions.push(this.trash.sessions[this.id]),this.trash.sessions.splice(this.id,1)):(this.$store.state.boards.push(this.trash.boards[this.id]),this.trash.boards.splice(this.id,1));else for(var s=this.trash.links.length-1;s>=0;s--)this.restore(this.trash.links[s],s);this.$store.commit("refresh")}},components:{Draggable:k.a,CardItem:C,CardEditor:T}},I=(n(34),Object(l.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!t.filtered(),expression:"!filtered()"}]},[n("div",{staticClass:"card has-hint"},[n("h6",{class:{grab:"trash"!=t.source}},[t._v("\n      "+t._s(t.self.name)+"\n\n      "),"trash"!=t.source?n("a",{staticClass:"hint tooltip float-right",attrs:{href:"#"},on:{click:function(e){t.openCard()}}},[n("i",{staticClass:"mute fas fa-external-link-alt"}),t._v(" "),n("span",{staticClass:"tooltip-text"},[t._v("\n          Open "+t._s(t.self.links.length)+" Links\n        ")])]):t._e()]),t._v(" "),n("draggable",{attrs:{options:{handle:".grab",group:"items"}},on:{start:function(e){t.drag=!0},end:function(e){t.finishDrag()}},model:{value:t.self.links,callback:function(e){t.$set(t.self,"links",e)},expression:"self.links"}},[t._l(t.self.links,function(e,s){return n("card-item",{directives:[{name:"show",rawName:"v-show",value:t.visible(s),expression:"visible(key)"}],key:e.id,attrs:{id:t.id,self:e,source:t.source},on:{editItem:function(e){t.amend(s)},remItem:function(e){t.remove(s)},resItem:function(n){t.restore(e,s)}}})}),t._v(" "),t.hasLinks||t.edit.active?t._e():n("div",{staticClass:"nothing align-center"},[t._v("\n        There's nothing here.\n      ")])],2),t._v(" "),t.edit.active?n("card-editor",{attrs:{board:t.id,source:t.source,item:t.edit.item},on:{finished:t.finished}}):t._e(),t._v(" "),n("div",{staticClass:"overflow row align-center"},[n("div",{staticClass:"col-xs-4"},["trash"!=t.source?n("a",{staticClass:"hint",attrs:{href:"#"},on:{click:function(e){t.amend("board")}}},[n("strong",[t._v("Edit")])]):t._e(),t._v(" "),"trash"==t.source?n("a",{staticClass:"hint bad",attrs:{href:"#"},on:{click:function(e){t.remove()}}},[n("strong",[t._v("Delete")])]):t._e()]),t._v(" "),n("div",{staticClass:"col-xs-4"},[n("a",{attrs:{href:"#"},on:{click:function(e){t.show=!t.show}}},[n("i",{staticClass:"mute fas fa-ellipsis-h"})])]),t._v(" "),n("div",{staticClass:"col-xs-4"},["boards"==t.source?n("a",{staticClass:"hint",attrs:{href:"#"},on:{click:function(e){t.create()}}},[n("strong",[t._v("New")])]):t._e(),t._v(" "),"trash"==t.source?n("a",{staticClass:"hint good",attrs:{href:"#"},on:{click:function(e){t.restore()}}},[n("strong",[t._v("Restore")])]):t._e()])])],1)])},[],!1,null,"7ef2d751",null));I.options.__file="CardBoard.vue";var O=I.exports,P={computed:{source:function(){return this.$store.state.view.tab},trash:function(){return this.$store.state.trash},boards:function(){return this.$store.state.boards},sessions:function(){return this.$store.state.sessions},stack:{get:function(){return this[this.source]},set:function(t){return this.$store.commit("update_"+this.source,t)}},columns:function(){return"col col-md-6 col-lg-4 col-xlg-2-5"},notEmpty:function(){return this.stack&&!this.stack.length&&"trash"!=this.source}},components:{Draggable:k.a,CardBoard:O}},E=(n(36),Object(l.a)(P,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cardStack"}},["trash"!=t.source?n("draggable",{staticClass:"row",attrs:{options:{handle:".grab"}},model:{value:t.stack,callback:function(e){t.stack=e},expression:"stack"}},t._l(t.stack,function(e,s){return t.stack&&t.stack.length?n("card-board",{key:t.stack.id,class:t.columns,attrs:{source:t.source,id:s,self:e}}):t._e()})):t._e(),t._v(" "),"trash"==t.source?n("div",{staticClass:"row"},[n("card-board",{class:t.columns,attrs:{source:t.source,self:t.trash,id:"links"}}),t._v(" "),t._l(t.trash.boards,function(e,s){return n("card-board",{key:t.stack.id,class:t.columns,attrs:{source:t.source,type:"boards",id:s,self:e}})}),t._v(" "),t._l(t.trash.sessions,function(e,s){return n("card-board",{key:t.stack.id,class:t.columns,attrs:{source:t.source,sesh:!0,id:s,self:e}})})],2):t._e(),t._v(" "),n("div",{staticClass:"row"},[t.notEmpty?n("div",{class:t.columns},[n("div",{staticClass:"card align-center"},[t._v("\n        You don't have any "+t._s(t.source)+" yet.\n      ")])]):t._e()])],1)},[],!1,null,"e5bb6ea0",null));E.options.__file="CardStack.vue";var L=E.exports,B={data:function(){return{board:this.$store.state.meta.lastBoard,name:"",link:"",tabs:[],session:!1,label:"Session On "+(new Date).toLocaleDateString("en-US")}},computed:{hasTabs:function(){return this.tabs.length>1},hasLink:function(){return this.name&&this.link},isBrowser:function(){return(this.hasLink||this.hasTabs)&&this.$root.popup}},methods:{saveLink:function(){this.$store.commit("create_link",{board:this.board,name:this.name,link:this.link}),this.cancel()},saveSession:function(){this.$store.commit("create_session",{name:this.label,links:this.tabs}),this.cancel()},cancel:function(){this.name="",this.link="",this.tabs=[]}},created:function(){var t=this;this.$browser().then(function(e){if(e)for(var n=0;n<e.length;n++)"chrome://newtab/"!=e[n].url&&(t.tabs.push({name:e[n].title,link:e[n].url}),e[n].active&&(t.name=e[n].title,t.link=e[n].url))})}},j=(n(38),Object(l.a)(B,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"popup"}},[t.isBrowser?n("div",{staticClass:"row"},[n("div",{staticClass:"col col-md-6 col-lg-4 col-xlg-2-5"},[t.session&&t.hasTabs?n("div",{staticClass:"input-box"},[t._l(t.tabs,function(t){return n("input",{attrs:{disabled:"",type:"text"},domProps:{value:t.name}})}),t._v(" "),n("input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"text",placeholder:"Session Name"},domProps:{value:t.label},on:{keup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.saveSession()}}}),t._v(" "),n("button",{staticClass:"full button-primary",on:{click:function(e){t.saveSession()}}},[t._v("\n          Save Session\n        ")])],2):t._e(),t._v(" "),!t.session&&t.hasTabs?n("button",{staticClass:"full button-primary-outlined",on:{click:function(e){t.session=!0}}},[t._v("\n        Save Session ("+t._s(t.tabs.length)+")\n      ")]):t._e(),t._v(" "),!t.session&&t.hasLink?n("div",{staticClass:"input-box"},[n("input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"text",placeholder:"Link Name"},domProps:{value:t.name},on:{keup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.saveLink()}}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.board,expression:"board"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.board=e.target.multiple?n:n[0]}}},t._l(t.$store.state.boards,function(e,s){return n("option",{domProps:{value:s}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),t._v(" "),n("button",{staticClass:"full button-primary",on:{click:function(e){t.saveLink()}}},[t._v("\n          Save Link\n        ")])]):t._e(),t._v(" "),t.session&&t.hasLink?n("button",{staticClass:"full button-primary-outlined",on:{click:function(e){t.session=!1}}},[t._v("\n        Save Link\n      ")]):t._e()])]):t._e()])},[],!1,null,"18a6a826",null));j.options.__file="ExtPopup.vue";var A={methods:{newBoard:function(){var t=this;this.$store.commit("update_view",{tab:"boards"}),this.$store.commit("update_local",{mobile:!1}),this.$store.commit("create_board"),this.$nextTick().then(function(){t.$refs.cardStack.$children[0].$children[0].amend("board")})}},created:function(){var t=this;if(this.$store.state.meta.syncData){var e=function(){return t.$store.dispatch("enable_sync",t.$sync)};window.addEventListener("focus",function(){return e()}),this.$store.state._.syncing||e()}window.location.href.indexOf("popup=true")>-1&&(this.$root.popup=!0)},components:{SideBar:f,ToolBar:v,InfoPane:_,CardStack:L,ExtPopup:j.exports}},D=(n(40),Object(l.a)(A,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tabbi"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"escape",void 0,e.key,void 0))return null;t.$store.dispatch("esc")}}},[n("side-bar",{on:{newBoard:function(e){t.newBoard()}}}),t._v(" "),n("div",{class:{open:t.$store.state.view.sidebar},attrs:{id:"content"}},[n("div",{staticClass:"wrap"},[n("div",{attrs:{id:"toast"}}),t._v(" "),n("ext-popup"),t._v(" "),n("tool-bar"),t._v(" "),t.$store.state.view.config?n("info-pane"):t._e(),t._v(" "),n("card-stack",{ref:"cardStack",attrs:{source:t.$store.state.view.tab}})],1)])],1)},[],!1,null,null,null));D.options.__file="App.vue";var N=D.exports,F={apiKey:"AIzaSyANEWNcTsXZau98evL6qnDc3IXOrJwEuPs",clientId:"645077009967-ttvthb5jpctk45q6524k87k5rm3n2r4p.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/drive.appdata",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]},q={q:'name="tabbi.json"',spaces:"appDataFolder",fields:"nextPageToken, files(id, name)"},R={disable:function(){return console.info("Disabling Sync."),new Promise(function(t,e){gapi.auth2.getAuthInstance().signOut().then(function(){return t()})})},enable:function(t){var e=this;return console.info("Enabling Sync."),new Promise(function(n,s){var i=!1;try{i=!!chrome&&chrome.identity}catch(t){i=!1}if(i)if(i.getAuthToken)Promise.resolve(i.getAuthToken({interactive:!0},function(s){Promise.all([gapi.client.load("drive","v3"),gapi.client.init({apiKey:F.apiKey}),gapi.client.setToken({access_token:s})]).then(function(){e.fetch(t).then(function(t){return n(t)})})}));else{i.launchWebAuthFlow({interactive:!0,url:"https://accounts.google.com/o/oauth2/auth?client_id=".concat(F.clientId,"&response_type=token&redirect_uri=").concat(encodeURIComponent(i.getRedirectURL()),"&scope=").concat(encodeURIComponent(["openid","profile","email"].join(" ")))}).then(function(t){console.log(t)})}else Promise.resolve(gapi.client.load("drive","v3")).then(function(){gapi.client.init(F).then(function(){var s=gapi.auth2.getAuthInstance();return s.isSignedIn.get()?e.fetch(t).then(function(t){return n(t)}):Promise.resolve(s.signIn()).then(function(){e.fetch(t).then(function(t){return n(t)})})})})})},fetch:function(t){var e=this;return new Promise(function(n,s){Promise.resolve(gapi.client.load("drive","v3")).then(function(){gapi.client.drive.files.list(q).then(function(s){if(s.result.files.length){console.info("Retreiving Data...");var i=s.result.files[0].id;gapi.client.drive.files.get({alt:"media",fileId:i}).then(function(s){return e.handle(t,s).then(function(t){return n(t)})})}else console.info("No Sync Data Found, Creating..."),e.create().then(function(){e.save(t).then(function(){return n({sync:!0})})})})})})},handle:function(t,e){return new Promise(function(n,s){var i=JSON.parse(e.body);t.meta,i.meta;return console.info("Loading Synced Data"),n({sync:!0,state:i})})},create:function(){return new Promise(function(t,e){gapi.client.drive.files.create({fields:"id",resource:{name:"tabbi.json",parents:["appDataFolder"]}}).then(function(e){return t()})})},save:function(t){return new Promise(function(e,n){gapi.client.drive.files.list(q).then(function(n){gapi.client.request({path:"/upload/drive/v3/files/"+n.result.files[0].id,method:"PATCH",params:{uploadType:"media"},body:JSON.stringify(t)}).then(function(t){e(t)})})})}},U={sync:R,install:function(t){t.prototype.$sync=R}},H={install:function(t){var e=function(t,e){for(var n=[],s=e.length-1;s>=0;s--)if("str"==t)n.push(e[s].name);else if(e[s].tags&&e[s].tags.length)for(var i=e[s].tags.length-1;i>=0;i--)n.push(e[s].tags[i]);return n};t.prototype.$filter={run:function(t){var e=t.target.value;"Enter"!=t.key&&"Escape"!=t.key||(e="");var n={key:"",type:"string",active:!1};if(e){var s=e.charAt(0);n.type=":"==s?"board":"#"==s?"tag":"string",n.key="string"==n.type?e:e.substr(1),n.active=!0}return n},out:function(t,n,s){var i=[];return!!t.active&&(s&&"board"==t.type&&(i=n.name),s&&"tag"==t.type&&(i=e("tags",n.links)),s&&"string"==t.type&&(i=e("str",n.links)),!(!s&&"board"==t.type)&&(s||"tag"!=t.type||(i=n.tags),s||"string"!=t.type||(i=n.name),function(t,e){if(!e)return!0;var n=t.toLowerCase();if(e.constructor===Array){if(!e.length)return!0;for(var s=e.length-1;s>=0;s--)if(e[s].toLowerCase().indexOf(n)>-1)return!1;return!0}return e.toLowerCase().indexOf(n)<0}(t.key,i)))}}}};function M(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var J={install:function(t){t.prototype.$importer=function(t){return new Promise(function(e,n){if(!t)return alert("No file uploaded!");var s=new FileReader;s.onload=function(t){var n={},s=document.createElement("html");s.innerHTML=t.target.result;for(var i=s.getElementsByTagName("a"),a=function(t){return"Bookmarks"==t||"Bookmarks Bar"==t},r=i.length-1;r>=0;r--){for(var o=i[r],c={tags:[]},l=o.closest("DL").previousElementSibling,u=l.innerText;l.closest("DL");)a((l=l.closest("DL").previousElementSibling).innerText)||(c.tags.push(u),u=l.innerText);var f=o.getAttribute("tags");f&&(c.tags=M(c.tags).concat(M(f.split(",")))),n[u]||(n[u]={name:u,links:[]}),c.link=o.href,c.name=o.innerText?o.innerText:o.href,n[u].links.push(c)}e(n)},s.readAsText(t)})}}},K={xById:function(t,e){return t.findIndex(function(t){return t.id==e})},toasts:[],toasting:!1,toast:function(t){this.toasts.push(t),this.popup(this.toasts,this.popup)},popup:function(t,e){var n=this,s=document.querySelector("#toast");if(t.length){var i='<p class="alert alert-info alert-border">\n                       '.concat(t.shift(),"\n                     </p>");s.classList.add("active"),s.innerHTML=i,this.toasting||(this.toasting=setTimeout(function(){n.toasting=!1,e(t,e)},2e3))}else s.classList.remove("active"),s.innerHTML=""},openAll:function(t){var e="You're trying to open ".concat(t.length," links"),n="".concat(e,", try refining your search."),s="".concat(e,", continue?"),i=function(t){for(var e=0;e<t.length;e++){var n="string"==typeof t[e].link?t[e].link:t[e];if(chrome.identity)chrome.tabs.create({url:n});else{var s=window.open(n);try{s.focus()}catch(t){this.toast("You'll need to allow popups to use this feature!");break}}}};return t.length>20?this.toast(n):t.length<5?i(t):void(window.confirm(s)&&i(t))}},Y={install:function(t){t.prototype.$$=K,t.directive("focus",{inserted:function(t){return"text"==t.getAttribute("type")?t.focus():t.querySelector("input").focus()}})}},G={install:function(t){t.prototype.$browser=function(){return new Promise(function(t,e){chrome.tabs?chrome.tabs.query({},function(e){return t(e)}):t(!1)})}}},W={meta:{ver:1,linkIndex:1,boardIndex:2,lastBoard:0,updatedAt:0,createdAt:Date.now(),syncData:!1},view:{links:5,config:!0,sidebar:!0,tab:"boards"},boards:[{id:1,name:"Inbox",links:[]}],sessions:[],trash:{name:"Trash",links:[],boards:[],sessions:[]},_:{mobile:!1,filter:{key:"",type:"string",active:!1}}},X={esc:function(t){var e=t.commit,n=t.state;return n._.mobile?e("update_local",{mobile:!1}):n.view.config?e("update_view",{config:!1}):n._.filter.active?e("update_local",{filter:{key:"",active:!1}}):void 0},enable_sync:function(t,e){var n=t.commit,s=t.state;s._.syncing=!0,e.enable(s).then(function(t){t.state?(n("update_meta",t.state.meta),n("update_view",t.state.view),n("update_trash",t.state.trash),n("update_boards",t.state.boards),n("update_sessions",t.state.sessions)):n("update_meta",{syncData:t.sync}),s._.syncing=!1})},disable_sync:function(t,e){var n=t.commit;t.state,e.disable().then(function(){n("update_meta",{syncData:!1})})}};function z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){V(t,e,n[e])})}return t}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Z={refresh:function(t){return t},update_local:function(t,e){return t._=z({},t._,e)},update_meta:function(t,e){return t.meta=z({},t.meta,e)},update_view:function(t,e){return t.view=z({},t.view,e)},update_trash:function(t,e){return t.trash=z({},t.trash,e)},update_boards:function(t,e){return t.boards=e},update_sessions:function(t,e){return t.sessions=e},create_session:function(t,e){var n={id:t.meta.boardIndex,name:e.name?e.name:"",links:e.links?e.links:[]};t.sessions.unshift(n),t.meta.boardIndex+=1},create_board:function(t,e){var n={id:t.meta.boardIndex,name:e||"",links:[]};t.boards.unshift(n),t.meta.boardIndex+=1},create_link:function(t,e){var n=e.board?e.board:0,s={id:t.meta.linkIndex,name:e.name?e.name:"",link:e.link?e.link:"",tags:e.tags?e.tags:[]};t.boards[n].links.push(s),t.meta.linkIndex+=1,e.board&&(t.meta.lastBoard=e.board)},change_board:function(t,e){t.boards[e.new].links.push(link),t.boards[e.old].links.splice(e.item,1)},trash_board:function(t,e){var n=t.boards[e];if(n.links.length){t.trash.boards.push(n);for(var s=t.trash.links.length-1;s>=0;s--)t.trash.links[s].board==n.id&&(delete t.trash.links[s].board,n.links.push(t.trash.links[s]),t.trash.links.splice(s,1))}t.boards.splice(e,1)},trash_session:function(t,e){var n=t.sessions[e];n.links.length&&t.trash.sessions.push(n),t.sessions.splice(e,1)},trash_link:function(t,e){var n=t.boards[e.board],s=n.links[e.item];(""!=s.name||""!=s.link||s.tags.length)&&t.trash.links.push(z({},s,{board:n.id})),t.boards[e.board].links.splice(e.item,1)},import_bookmarks:function(t,e){for(var n in e){for(var s in e[n].id=t.meta.boardIndex,t.meta.boardIndex+=1,e[n].links){e[n].links[s].id=t.meta.linkIndex,t.meta.linkIndex+=1}t.boards.push(e[n])}},sync:function(t,e){return e.save(t)}},Q=n(3),tt=n.n(Q);function et(t,e,n,s,i,a,r){try{var o=t[a](r),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(s,i)}a.a.use(r.a),a.a.use(U),a.a.use(H),a.a.use(J),a.a.use(Y),a.a.use(G),tt.a.config({storeName:"tabbi",driver:tt.a.indexedDB});var nt=function(t){t.subscribe(function(t,e){e.meta.updatedAt=Date.now(),tt.a.setItem("state",e),e.meta.syncData&&U.sync.save(e)})};function st(){return(st=function(t){return function(){var e=this,n=arguments;return new Promise(function(s,i){var a=t.apply(e,n);function r(t){et(a,s,i,r,o,"next",t)}function o(t){et(a,s,i,r,o,"throw",t)}r(void 0)})}}(i.a.mark(function t(){var e,n,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tt.a.getItem("state");case 2:if(e=t.sent){for(n in W.trash=e.trash,W.boards=e.boards,W.sessions=e.sessions,e.meta)W.meta[n]=e.meta[n];for(n in e.view)W.view[n]=e.view[n]}s=new r.a.Store({state:W,mutations:Z,actions:X,plugins:[nt]}),new a.a({store:s,el:"#app",data:{version:o.a,popup:!1},render:function(t){return t(N)}});case 6:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}a.a.config.productionTip=!1,function(){st.apply(this,arguments)}()}]);
//# sourceMappingURL=main.acb3e161.js.map