(function(){"use strict";var n={733:function(n,e,t){var o=t(9242),r=t(3396);function u(n,e,t,o,u,l){const i=(0,r.up)("ProblemCom");return(0,r.wg)(),(0,r.iD)("div",{class:"page",onScroll:e[0]||(e[0]=(...n)=>o.addContent&&o.addContent(...n)),id:"problem"},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.context.problems,((n,e)=>((0,r.wg)(),(0,r.j4)(i,{key:e,question:n,num:e},null,8,["question","num"])))),128))],32)}var l=t(4161),i=t(4870),c=(t(7658),t(7139));const s={class:"panel"},a={class:"question"},f=(0,r._)("br",null,null,-1),m=(0,r._)("hr",null,null,-1),p=["name"],v=["type","name","value"],d=(0,r._)("br",null,null,-1),b=(0,r._)("br",null,null,-1),g=(0,r._)("br",null,null,-1),w=(0,r._)("span",null,"Answer: ",-1);var h={__name:"ProblemCom",props:{question:Object,num:Number},setup(n){const e=n;let t=e.question.Answer.length>1?"checkbox":"radio",u=(0,i.iH)(!1),l=(0,i.iH)(!1);function h(){u.value=!u.value}function k(){localStorage.removeItem("max",e.num),l.value=!l.value;var n=document.getElementsByName(e.num),t=document.getElementsByName(e.question.Description);if(l.value){var o=[];for(var r in n)n[r].checked?(o.push(n[r].value),e.question.Answer.includes(n[r].value)?(console.log("correct answer"),t[r].style.backgroundColor="#3df158"):t[r].style.backgroundColor="#e35555"):e.question.Answer.includes(n[r].value)&&(t[r].style.backgroundColor="#3df158");u.value=!0}else for(u.value=!1,r=0;r<n.length;r++)t[r].style.backgroundColor="white",n[r].checked=!1}return(e,y)=>((0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",a,[(0,r.Uk)("  "+(0,c.zw)(n.num+1)+". ",1),f,(0,r.Uk)("   "+(0,c.zw)(n.question.Description),1)]),m,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.question.Choice,((e,o)=>((0,r.wg)(),(0,r.iD)("div",{class:"choices",key:o,name:n.question.Description},[(0,r._)("input",{type:(0,i.SU)(t),name:n.num,value:e.slice(0,1)},null,8,v),(0,r.Uk)("   "+(0,c.zw)(e),1)],8,p)))),128)),d,b,g,(0,r.Uk)("    "),w,(0,r.wy)((0,r._)("span",null,(0,c.zw)(n.question.Answer),513),[[o.F8,(0,i.SU)(u)]]),(0,r.Uk)("    "),(0,r._)("button",{onClick:h},(0,c.zw)((0,i.SU)(u)?"Hide Answer":"Show Answer"),1),(0,r.Uk)("       "),(0,r._)("button",{onClick:k},(0,c.zw)((0,i.SU)(l)?"Try Again":"Check Answer"),1)]))}};const k=h;var y=k,_={name:"App",components:{ProblemCom:y},setup(){let n=(0,i.qj)({problems:[]});var e;function t(t){let o=t.target.scrollTop,r=t.target.clientHeight,u=t.target.scrollHeight,l=n.problems.length;o+r>=u-500&&(n.problems=[...n.problems,...e.slice(l+1,l+25)])}return l.Z.get("/maogai/problems.txt").then((t=>{e=t.data,n.problems=e.slice(0,25)})),{context:n,addContent:t}}},C=t(89);const q=(0,C.Z)(_,[["render",u]]);var O=q;(0,o.ri)(O).mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var u=e[o]={exports:{}};return n[o].call(u.exports,u,u.exports,t),u.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,u){if(!o){var l=1/0;for(a=0;a<n.length;a++){o=n[a][0],r=n[a][1],u=n[a][2];for(var i=!0,c=0;c<o.length;c++)(!1&u||l>=u)&&Object.keys(t.O).every((function(n){return t.O[n](o[c])}))?o.splice(c--,1):(i=!1,u<l&&(l=u));if(i){n.splice(a--,1);var s=r();void 0!==s&&(e=s)}}return e}u=u||0;for(var a=n.length;a>0&&n[a-1][2]>u;a--)n[a]=n[a-1];n[a]=[o,r,u]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,u,l=o[0],i=o[1],c=o[2],s=0;if(l.some((function(e){return 0!==n[e]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var a=c(t)}for(e&&e(o);s<l.length;s++)u=l[s],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return t.O(a)},o=self["webpackChunkmao_mind"]=self["webpackChunkmao_mind"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(733)}));o=t.O(o)})();
//# sourceMappingURL=app.74f5db55.js.map