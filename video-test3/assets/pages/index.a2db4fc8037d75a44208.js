webpackJsonp([2],{"+ptz":function(t,e,i){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("Container",{attrs:{lib:"vue-youtube"}})};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},"/TYz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("QPyP"),r=i("+ptz"),o=!1;var a=function(t){o||i("05it")},s=i("VU/8")(n.a,r.a,!1,a,null,null);s.options.__file="pages/index.vue",e.default=s.exports},"/uWo":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".wrapper{max-width:720px;margin:20px auto}.video-wrapper{text-align:center;margin:0 auto}.sep{clear:both}",""])},"/v3u":function(t,e,i){"use strict";var n=i("sFat");e.a={name:"Menu",components:{MenuItem:n.a},data:function(){return{videos:["crhCen-uYig","AcZrSn48X4o","1S0aBV-Waeo","6RNKtwAGvqc","vhiiia1_hC4","NTfOnGZUZDk"]}}}},"05it":function(t,e,i){var n=i("TlQw");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("6cda46b8",n,!1,{sourceMap:!1})},"3NYX":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},"4mIW":function(t,e,i){var n=i("3NYX");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("7c21e355",n,!1,{sourceMap:!1})},AAwP:function(t,e,i){"use strict";var n=i("/v3u"),r=i("didd"),o=!1;var a=function(t){o||i("erYe")},s=i("VU/8")(n.a,r.a,!1,a,null,null);s.options.__file="components/Menu.vue",e.a=s.exports},C24Q:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("Menu"),e("div",{staticClass:"sep"}),e("div",{staticClass:"video-wrapper"},["vue-plyr"===this.lib?e("YPlyr",{attrs:{vid:this.vid}}):"vue-videojs"===this.lib?e("YVideojs",{attrs:{vid:this.vid}}):e("YFrame",{attrs:{vid:this.vid}})],1)],1)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},DnHm:function(t,e,i){"use strict";e.a={name:"MenuItem",props:["vid"],methods:{handleClick:function(t){this.$nuxt.$emit("changeVideo",t)}}}},EyQf:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},Hvzl:function(t,e,i){"use strict";var n=i("rjd3"),r=i("C24Q"),o=!1;var a=function(t){o||i("qDyJ")},s=i("VU/8")(n.a,r.a,!1,a,null,null);s.options.__file="components/Container.vue",e.a=s.exports},P33e:function(t,e,i){"use strict";e.a={created:function(){var t=this;this.$nuxt.$on("changeVideo",function(e){t.localVid=e})},beforeUpdate:function(){this.player.source={type:"video",sources:[{src:this.youtubeUrl,provider:"youtube"}]}},name:"Youtube",props:["vid"],data:function(){return{localVid:this.vid,player:{}}},computed:{youtubeUrl:function(){return"https://www.youtube.com/embed/"+this.localVid+"?iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"}},methods:{setPlayer:function(t){this.player=t}}}},QPyP:function(t,e,i){"use strict";var n=i("Hvzl");e.a={components:{Container:n.a}}},TlQw:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},VIpT:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".switch-menu a{width:160px;float:left;padding:20px;border:1px solid gray;margin:10px;text-decoration:none}.switch-menu a:hover{color:#fff;background-color:#9932cc}.sep{clear:both}",""])},WJZu:function(t,e,i){var n=i("EyQf");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("7a3766cb",n,!1,{sourceMap:!1})},XCns:function(t,e,i){"use strict";var n=i("lsZO"),r=i("eCEy"),o=!1;var a=function(t){o||i("4mIW")},s=i("VU/8")(n.a,r.a,!1,a,null,null);s.options.__file="components/YVideojs.vue",e.a=s.exports},Y7qI:function(t,e,i){var n=i("eelA");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("4e239f6d",n,!1,{sourceMap:!1})},ZGn0:function(t,e,i){"use strict";var n=i("P33e"),r=i("r+Qz"),o=i("VU/8")(n.a,r.a,!1,null,null,null);o.options.__file="components/YPlyr.vue",e.a=o.exports},didd:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"switch-menu"},[i("nuxt-link",{attrs:{to:"/"}},[t._v("vue-youtube")]),i("nuxt-link",{attrs:{to:"/plyr"}},[t._v("vue-plyr")]),i("nuxt-link",{attrs:{to:"/video-js"}},[t._v("video.js")])],1),i("div",{staticClass:"sep"}),i("ul",t._l(t.videos,function(e){return i("MenuItem",{key:e,attrs:{vid:e}},[t._v("\n      "+t._s(e)+"\n    ")])}))])};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},eCEy:function(t,e,i){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("video",{staticClass:"video-js vjs-default-skin",attrs:{playsinline:"",id:"myPlayer",width:"640",height:"360",controls:"",preload:"auto","data-setup":this.initOption}})};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},eelA:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"li{cursor:pointer;border:1px solid #a9a9a9;padding:10px;margin:10px;list-style:none;float:left;width:120px;white-space:nowrap;font-size:80%}li:hover{color:#fff;background-color:#8b008b}",""])},erYe:function(t,e,i){var n=i("VIpT");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("104a2334",n,!1,{sourceMap:!1})},f7e4:function(t,e,i){"use strict";var n=i("ihfA"),r=i("qKLF"),o=!1;var a=function(t){o||i("WJZu")},s=i("VU/8")(n.a,r.a,!1,a,null,null);s.options.__file="components/YFrame.vue",e.a=s.exports},hqP3:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("li",{on:{click:function(e){t.handleClick(t.vid)}}},[t._v(t._s(t.vid))])};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},ihfA:function(t,e,i){"use strict";e.a={name:"YFrame",created:function(){var t=this;this.$nuxt.$on("changeVideo",function(e){t.localVid=e})},props:["vid"],data:function(){return{localVid:this.vid,player:{}}}}},lsZO:function(t,e,i){"use strict";var n=i("mvHQ"),r=i.n(n);window.videojs=i("Dia2"),e.a={name:"YVideojs",props:["vid"],created:function(){var t=this;this.$nuxt.$on("changeVideo",function(e){t.localVid=e})},data:function(){return{player:{},localVid:this.vid}},computed:{initOption:function(){return r()({techOrder:["youtube"],sources:[{type:"video/youtube",src:this.youtubeUrl}]})},youtubeUrl:function(){return"https://www.youtube.com/embed/"+this.localVid+"?iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"}},mounted:function(){this.player=videojs("myPlayer"),this.playerSetSrc()},beforeUpdate:function(){this.playerSetSrc()},beforeDestroy:function(){this.player.dispose()},methods:{playerSetSrc:function(){this.player.src([{type:"video/youtube",src:this.youtubeUrl}])}}}},qDyJ:function(t,e,i){var n=i("/uWo");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("fbc83688",n,!1,{sourceMap:!1})},qKLF:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("no-ssr",{attrs:{placeholder:"Loading..."}},[e("div",{staticClass:"plyr__video-wrapper plyr__video-embed",staticStyle:{"padding-bottom":"56.25%"}},[e("youtube",{attrs:{"video-id":this.localVid}})],1)])};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},"r+Qz":function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("vue-plyr",{attrs:{options:{hideYouTubeDOMError:!0,debug:!1}},on:{player:this.setPlayer}},[e("div",{staticClass:"plyr__video-embed"},[e("iframe",{attrs:{src:this.youtubeUrl,allowfullscreen:"",allowtransparency:"",allow:"autoplay"}})])])};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},rjd3:function(t,e,i){"use strict";var n=i("AAwP"),r=i("f7e4"),o=i("ZGn0"),a=i("XCns");e.a={name:"Container",props:["lib"],components:{Menu:n.a,YFrame:r.a,YPlyr:o.a,YVideojs:a.a},data:function(){return{vid:"crhCen-uYig"}}}},sFat:function(t,e,i){"use strict";var n=i("DnHm"),r=i("hqP3"),o=!1;var a=function(t){o||i("Y7qI")},s=i("VU/8")(n.a,r.a,!1,a,null,null);s.options.__file="components/MenuItem.vue",e.a=s.exports}});