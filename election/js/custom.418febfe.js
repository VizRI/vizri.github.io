(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["custom"],{"107c":function(t,e,n){var a=n("d039"),c=n("da84"),o=c.RegExp;t.exports=a((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var a=n("d784"),c=n("44e7"),o=n("825a"),r=n("1d80"),l=n("4840"),i=n("8aa5"),s=n("50c4"),u=n("577e"),d=n("dc4a"),f=n("14c3"),b=n("9263"),p=n("9f7f"),v=n("d039"),g=p.UNSUPPORTED_Y,h=[].push,x=Math.min,m=4294967295,O=!v((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));a("split",(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=u(r(this)),o=void 0===n?m:n>>>0;if(0===o)return[];if(void 0===t)return[a];if(!c(t))return e.call(a,t,o);var l,i,s,d=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,f+"g");while(l=b.call(v,a)){if(i=v.lastIndex,i>p&&(d.push(a.slice(p,l.index)),l.length>1&&l.index<a.length&&h.apply(d,l.slice(1)),s=l[0].length,p=i,d.length>=o))break;v.lastIndex===l.index&&v.lastIndex++}return p===a.length?!s&&v.test("")||d.push(""):d.push(a.slice(p)),d.length>o?d.slice(0,o):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var c=r(this),o=void 0==e?void 0:d(e,t);return o?o.call(e,c,n):a.call(u(c),e,n)},function(t,c){var r=o(this),d=u(t),b=n(a,r,d,c,a!==e);if(b.done)return b.value;var p=l(r,RegExp),v=r.unicode,h=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(g?"g":"y"),O=new p(g?"^(?:"+r.source+")":r,h),j=void 0===c?m:c>>>0;if(0===j)return[];if(0===d.length)return null===f(O,d)?[d]:[];var y=0,w=0,k=[];while(w<d.length){O.lastIndex=g?0:w;var I,E=f(O,g?d.slice(w):d);if(null===E||(I=x(s(O.lastIndex+(g?w:0)),d.length))===y)w=i(d,w,v);else{if(k.push(d.slice(y,w)),k.length===j)return k;for(var C=1;C<=E.length-1;C++)if(k.push(E[C]),k.length===j)return k;w=y=I}}return k.push(d.slice(y)),k}]}),!O,g)},"14c3":function(t,e,n){var a=n("825a"),c=n("1626"),o=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if(c(n)){var l=n.call(t,e);return null!==l&&a(l),l}if("RegExp"===o(t))return r.call(t,e);throw TypeError("RegExp#exec called on incompatible receiver")}},"1dde":function(t,e,n){var a=n("d039"),c=n("b622"),o=n("2d00"),r=c("species");t.exports=function(t){return o>=51||!a((function(){var e=[],n=e.constructor={};return n[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,n){"use strict";var a=n("23e7"),c=n("5a34"),o=n("1d80"),r=n("577e"),l=n("ab13");a({target:"String",proto:!0,forced:!l("includes")},{includes:function(t){return!!~r(o(this)).indexOf(r(c(t)),arguments.length>1?arguments[1]:void 0)}})},"3e41":function(t,e,n){},"44e7":function(t,e,n){var a=n("861d"),c=n("c6b6"),o=n("b622"),r=o("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==c(t))}},"466d":function(t,e,n){"use strict";var a=n("d784"),c=n("825a"),o=n("50c4"),r=n("577e"),l=n("1d80"),i=n("dc4a"),s=n("8aa5"),u=n("14c3");a("match",(function(t,e,n){return[function(e){var n=l(this),a=void 0==e?void 0:i(e,t);return a?a.call(e,n):new RegExp(e)[t](r(n))},function(t){var a=c(this),l=r(t),i=n(e,a,l);if(i.done)return i.value;if(!a.global)return u(a,l);var d=a.unicode;a.lastIndex=0;var f,b=[],p=0;while(null!==(f=u(a,l))){var v=r(f[0]);b[p]=v,""===v&&(a.lastIndex=s(l,o(a.lastIndex),d)),p++}return 0===p?null:b}]}))},"4de4":function(t,e,n){"use strict";var a=n("23e7"),c=n("b727").filter,o=n("1dde"),r=o("filter");a({target:"Array",proto:!0,forced:!r},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,n){var a=n("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5e6f":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("159b"),n("4de4"),n("a15b"),n("caad"),n("2532"),n("ac1f"),n("466d"),n("1276"),n("8ba4"),n("a9e3");var a=n("7a23"),c=(n("a434"),{class:"accordion accordion-flush mt-1",id:"accordionFlushExample"}),o={class:"accordion-item"},r={class:"accordion-header",id:"flush-headingOne"},l=["data-bs-target"],i=["id"],s={class:"table table-hover"},u=["onClick"],d={class:"clickable checkbox-col"},f={class:"form-check"},b=["value","onUpdate:modelValue"],p={class:"clickable col-12"},v={props:{contestData:Object,electionName:String,idx:Number},setup:function(t){var e=t;if(localStorage.contests){var n=localStorage.getItem("contests").split(",");n.forEach((function(t){var e=document.querySelector("input[value='"+t+"']");e&&(e.checked=!0)}))}function v(t,e){if(localStorage.contests)var n=localStorage.getItem("contests").split(",");else n=[];if(e){var a=n.indexOf(t);n.splice(a,1),localStorage.contests=n}else n.push(t),localStorage.contests=n}function g(t){var e=document.querySelector("input[value='"+t+"']");e.checked?(e.checked=!1,v(t,!0)):(e.checked=!0,v(t,!1))}return function(n,v){return Object(a["t"])(),Object(a["f"])("div",c,[Object(a["g"])("div",o,[Object(a["g"])("h2",r,[Object(a["g"])("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse-"+t.idx},Object(a["C"])(e.electionName),9,l)]),Object(a["g"])("div",{id:"collapse-"+t.idx,class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},[Object(a["g"])("table",s,[Object(a["g"])("tbody",null,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(e.contestData,(function(t,e){return Object(a["t"])(),Object(a["f"])("tr",{key:e,onClick:function(e){return g(t.contest_num)}},[Object(a["g"])("td",d,[Object(a["g"])("div",f,[Object(a["I"])(Object(a["g"])("input",{class:"form-check-input",name:"contest-list",type:"checkbox",disabled:"",value:t.contest_num,"onUpdate:modelValue":function(e){return t.contest=e},id:"CheckBox"},null,8,b),[[a["E"],t.contest]])])]),Object(a["g"])("td",p,Object(a["C"])(t.contest_name),1)],8,u)})),128))])])],8,i)])])}}},g=(n("7090"),n("6b0d")),h=n.n(g);const x=h()(v,[["__scopeId","data-v-7e1a600c"]]);var m=x,O=function(t){return Object(a["w"])("data-v-1af2e0b6"),t=t(),Object(a["u"])(),t},j={class:"container-fluid"},y={class:"row header"},w=O((function(){return Object(a["g"])("div",{class:"col-sm-12 col-md-6"},[Object(a["g"])("h1",{class:"contest-type"},"Create a Custom List")],-1)})),k={class:"col-sm-12 col-md-6 text-end data-buttons"},I=O((function(){return Object(a["g"])("div",{class:"container"},[Object(a["g"])("p",null," Clicking on a category below will expand the choice to give you a list of all available contest within that option. Check off all the contest you wish to view and hit the submit button at the bottom of the page. This will provide you a custom view of only races you're interested in. If you aren't sure who the candidates are in the contest, clicking on the info button to the right will provide a list of all the candidates. ")],-1)})),E={class:"row"},C={id:"Searchbar",class:"d-flex justify-content-center mb-4 p-4"},R={key:0,id:"myInputautocomplete-list",class:"autocomplete-items list-group text-left"},S=["onClick"],A={class:"row"},T={class:"container mb-4"},F={class:"modal fade",id:"exportModal",tabindex:"-1","aria-labelledby":"exportModalLabel","aria-hidden":"true"},L={class:"modal-dialog"},_={class:"modal-content"},M=O((function(){return Object(a["g"])("div",{class:"modal-header"},[Object(a["g"])("h5",{class:"modal-title",id:"exportModalLabel"},"Export Contests"),Object(a["g"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)})),N={class:"modal-body"},U=["value"],D=O((function(){return Object(a["g"])("div",{class:"modal-header"},[Object(a["g"])("h5",{class:"modal-title",id:"importModalLabel"},"Import Contests"),Object(a["g"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)})),P=O((function(){return Object(a["g"])("div",{class:"modal-body"},[Object(a["g"])("textarea",{type:"text text-break",class:"form-control",value:"",id:"importFavorites",rows:"7",placeholder:"paste contests or upload file..."},"\r\n          ")],-1)})),B={setup:function(t){var e=Object(a["x"])([]),n=Object(a["x"])([]),c=Object(a["y"])(""),o=Object(a["y"])(""),r=Object(a["y"])(!1);fetch(window.APP_URL+"/data/scaffold.json").then((function(t){return t.json()})).then((function(t){t.forEach((function(t){e.push(t)}))})),fetch(window.APP_URL+"/data/candidates.json").then((function(t){return t.json()})).then((function(t){t.forEach((function(t){n.push(t)}))}));var l=Object(a["b"])((function(){return c.value.length>=4?n.filter((function(t){return-1!=t.toLowerCase().indexOf(c.value.toLowerCase())})):[]}));function i(t){r.value=!1,c.value=t}var s=Object(a["b"])((function(){return e.filter((function(t){var n=t.data.filter((function(t){return-1!=t.candidates.join(", ").toLowerCase().indexOf(c.value.toLowerCase())}));if(!n.every((function(t){return!0===t})))return e}))}));function u(t){return t.filter((function(e){var n=e.candidates.filter((function(e){if(e.toLowerCase().includes(c.value.toLowerCase()))return t}));if(!n.every((function(t){return!0===t})))return t}))}function d(){localStorage.contests="";var t=document.querySelectorAll("input[type=checkbox]");t.forEach((function(t){t.checked=!1}))}function f(){localStorage.getItem("contests").length>0?o.value=localStorage.getItem("contests"):o.value="No Contests Selected - to select a contest down below click a location and then a desired contest."}function b(){var t=document.getElementById("exportFavorites");t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value)}function p(){var t=document.createElement("a");t.href="data:text/plain;charset=UTF-8,"+escape(o.value),t.download="my-favorite-contests.txt",t.click()}function v(){var t=document.getElementById("importFavorites");t.value.length>0?(h(t.value),t.value=""):alert("You have to paste a list of contests.")}function g(){var t=document.createElement("input");t.setAttribute("type","file"),t.addEventListener("change",(function(){var e=t.files[0];if(e.type.match(/text.*/)){var n=new FileReader;n.onload=function(){var t=n.result;h(t),alert("Your selected Contests were sucessfully imported.")},n.readAsText(e)}else alert("File type is not supported.")})),t.click()}function h(t){var e=[];t.split(",").forEach((function(t){var n=document.querySelector("input[value='"+t+"']");Number.isInteger(parseInt(t))?n&&(n.checked=!0):e.push(t)})),e.length<1&&(localStorage.contests=t)}return function(t,e){return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("main",null,[Object(a["g"])("div",j,[Object(a["g"])("div",y,[w,Object(a["g"])("div",k,[Object(a["g"])("button",{type:"button",class:"btn btn-primary",onClick:f,"data-bs-toggle":"modal","data-bs-target":"#exportModal"},"Export"),Object(a["g"])("button",{type:"button",class:"btn btn-secondary",onClick:e[0]||(e[0]=function(){return t.importContests&&t.importContests.apply(t,arguments)}),"data-bs-toggle":"modal","data-bs-target":"#importModal"},"Import"),Object(a["g"])("button",{type:"button",class:"btn btn-danger",onClick:d},"Delete")])]),I,Object(a["g"])("div",E,[Object(a["g"])("div",C,[Object(a["I"])(Object(a["g"])("input",{type:"text",placeholder:"search candidates...",class:"form-control form-control-lg","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.value=t}),onFocus:e[2]||(e[2]=function(t){return r.value=!0})},null,544),[[a["F"],c.value]]),r.value?(Object(a["t"])(),Object(a["f"])("div",R,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(Object(a["D"])(l),(function(t,e){return Object(a["t"])(),Object(a["f"])("li",{class:"list-group-item list-group-item-action",key:e,onClick:function(e){return i(t)}},Object(a["C"])(t),9,S)})),128))])):Object(a["e"])("",!0)])]),Object(a["g"])("div",A,[Object(a["g"])("div",T,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(Object(a["D"])(s),(function(t,e){return Object(a["t"])(),Object(a["f"])("div",{key:e},[Object(a["j"])(m,{electionName:t.location,idx:e,contestData:u(t.data)},null,8,["electionName","idx","contestData"])])})),128))])])])]),Object(a["g"])("div",F,[Object(a["g"])("div",L,[Object(a["g"])("div",_,[M,Object(a["g"])("div",N,[Object(a["g"])("textarea",{type:"text text-break",class:"form-control",value:o.value,id:"exportFavorites",rows:"7",readonly:""},null,8,U)]),Object(a["g"])("div",{class:"modal-footer"},[Object(a["g"])("button",{type:"button",class:"btn btn-secondary",onClick:b,"data-bs-dismiss":"modal"},"Copy Text"),Object(a["g"])("button",{type:"button",class:"btn btn-primary",onClick:p,id:"download"},"Export to File")])])])]),Object(a["g"])("div",{class:"modal fade",id:"importModal",tabindex:"-1","aria-labelledby":"importModalLabel","aria-hidden":"true"},[Object(a["g"])("div",{class:"modal-dialog"},[Object(a["g"])("div",{class:"modal-content"},[D,P,Object(a["g"])("div",{class:"modal-footer"},[Object(a["g"])("button",{type:"button",class:"btn btn-secondary",onClick:v,"data-bs-dismiss":"modal"},"Import Text"),Object(a["g"])("button",{type:"button",class:"btn btn-primary",onClick:g},"Import File")])])])])],64)}}};n("ffcc");const Y=h()(B,[["__scopeId","data-v-1af2e0b6"]]);e["default"]=Y},"5e89":function(t,e,n){var a=n("861d"),c=Math.floor;t.exports=function(t){return!a(t)&&isFinite(t)&&c(t)===t}},7090:function(t,e,n){"use strict";n("3e41")},8418:function(t,e,n){"use strict";var a=n("a04b"),c=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var r=a(e);r in t?c.f(t,r,o(0,n)):t[r]=n}},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},"8ba4":function(t,e,n){var a=n("23e7"),c=n("5e89");a({target:"Number",stat:!0},{isInteger:c})},9263:function(t,e,n){"use strict";var a=n("577e"),c=n("ad6d"),o=n("9f7f"),r=n("5692"),l=n("7c73"),i=n("69f3").get,s=n("fce3"),u=n("107c"),d=RegExp.prototype.exec,f=r("native-string-replace",String.prototype.replace),b=d,p=function(){var t=/a/,e=/b*/g;return d.call(t,"a"),d.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),v=o.UNSUPPORTED_Y||o.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],h=p||g||v||s||u;h&&(b=function(t){var e,n,o,r,s,u,h,x=this,m=i(x),O=a(t),j=m.raw;if(j)return j.lastIndex=x.lastIndex,e=b.call(j,O),x.lastIndex=j.lastIndex,e;var y=m.groups,w=v&&x.sticky,k=c.call(x),I=x.source,E=0,C=O;if(w&&(k=k.replace("y",""),-1===k.indexOf("g")&&(k+="g"),C=O.slice(x.lastIndex),x.lastIndex>0&&(!x.multiline||x.multiline&&"\n"!==O.charAt(x.lastIndex-1))&&(I="(?: "+I+")",C=" "+C,E++),n=new RegExp("^(?:"+I+")",k)),g&&(n=new RegExp("^"+I+"$(?!\\s)",k)),p&&(o=x.lastIndex),r=d.call(w?n:x,C),w?r?(r.input=r.input.slice(E),r[0]=r[0].slice(E),r.index=x.lastIndex,x.lastIndex+=r[0].length):x.lastIndex=0:p&&r&&(x.lastIndex=x.global?r.index+r[0].length:o),g&&r&&r.length>1&&f.call(r[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(r[s]=void 0)})),r&&y)for(r.groups=u=l(null),s=0;s<y.length;s++)h=y[s],u[h[0]]=r[h[1]];return r}),t.exports=b},"9f7f":function(t,e,n){var a=n("d039"),c=n("da84"),o=c.RegExp;e.UNSUPPORTED_Y=a((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,n){"use strict";var a=n("23e7"),c=n("44ad"),o=n("fc6a"),r=n("a640"),l=[].join,i=c!=Object,s=r("join",",");a({target:"Array",proto:!0,forced:i||!s},{join:function(t){return l.call(o(this),void 0===t?",":t)}})},a434:function(t,e,n){"use strict";var a=n("23e7"),c=n("23cb"),o=n("a691"),r=n("50c4"),l=n("7b0b"),i=n("65f0"),s=n("8418"),u=n("1dde"),d=u("splice"),f=Math.max,b=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,a,u,d,g,h,x=l(this),m=r(x.length),O=c(t,m),j=arguments.length;if(0===j?n=a=0:1===j?(n=0,a=m-O):(n=j-2,a=b(f(o(e),0),m-O)),m+n-a>p)throw TypeError(v);for(u=i(x,a),d=0;d<a;d++)g=O+d,g in x&&s(u,d,x[g]);if(u.length=a,n<a){for(d=O;d<m-a;d++)g=d+a,h=d+n,g in x?x[h]=x[g]:delete x[h];for(d=m;d>m-a+n;d--)delete x[d-1]}else if(n>a)for(d=m-a;d>O;d--)g=d+a-1,h=d+n-1,g in x?x[h]=x[g]:delete x[h];for(d=0;d<n;d++)x[d+O]=arguments[d+2];return x.length=m-a+n,u}})},ab13:function(t,e,n){var a=n("b622"),c=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[c]=!1,"/./"[t](e)}catch(a){}}return!1}},ac1f:function(t,e,n){"use strict";var a=n("23e7"),c=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},caad:function(t,e,n){"use strict";var a=n("23e7"),c=n("4d64").includes,o=n("44d2");a({target:"Array",proto:!0},{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),c=n("9263"),o=n("d039"),r=n("b622"),l=n("9112"),i=r("species"),s=RegExp.prototype;t.exports=function(t,e,n,u){var d=r(t),f=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),b=f&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[i]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!f||!b||n){var p=/./[d],v=e(d,""[t],(function(t,e,n,a,o){var r=e.exec;return r===c||r===s.exec?f&&!o?{done:!0,value:p.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}));a(String.prototype,t,v[0]),a(s,d,v[1])}u&&l(s[d],"sham",!0)}},f3a8:function(t,e,n){},fce3:function(t,e,n){var a=n("d039"),c=n("da84"),o=c.RegExp;t.exports=a((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},ffcc:function(t,e,n){"use strict";n("f3a8")}}]);
//# sourceMappingURL=custom.418febfe.js.map