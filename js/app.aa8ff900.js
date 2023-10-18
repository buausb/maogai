(function(){"use strict";var n={459:function(n,e,t){var o=t(9242),r=t(3396);function l(n,e,t,o,l,u){const i=(0,r.up)("ProblemCom");return(0,r.wg)(),(0,r.iD)("div",{class:"page",onScroll:e[0]||(e[0]=(...n)=>o.addContent&&o.addContent(...n)),id:"problem"},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.context.problems,((n,e)=>((0,r.wg)(),(0,r.j4)(i,{key:e,question:n,num:e},null,8,["question","num"])))),128))],32)}var u=t(4161),i=t(4870),s=(t(7658),t(7139));const c={class:"panel"},a={class:"question"},f=(0,r._)("br",null,null,-1),m=(0,r._)("hr",null,null,-1),p=["name"],v=["type","name","value"],d=(0,r._)("br",null,null,-1),b=(0,r._)("br",null,null,-1),g=(0,r._)("br",null,null,-1),w=(0,r._)("span",null,"Answer: ",-1),h=(0,r._)("div",{class:"space"},null,-1);var k={__name:"ProblemCom",props:{question:Object,num:Number},setup(n){const e=n;let t=e.question.Answer.length>1?"checkbox":"radio",l=(0,i.iH)(!1),u=(0,i.iH)(!1);function k(){l.value=!l.value}function y(){localStorage.removeItem("max",e.num),u.value=!u.value;var n=document.getElementsByName(e.num),t=document.getElementsByName(e.question.Description);if(u.value){var o=[];for(var r in n)n[r].checked?(o.push(n[r].value),e.question.Answer.includes(n[r].value)?(console.log("correct answer"),t[r].style.backgroundColor="#3df158"):t[r].style.backgroundColor="#e35555"):e.question.Answer.includes(n[r].value)&&(t[r].style.backgroundColor="#3df158");l.value=!0}else for(l.value=!1,r=0;r<n.length;r++)t[r].style.backgroundColor="white",n[r].checked=!1}return(e,_)=>((0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",a,[(0,r.Uk)("  "+(0,s.zw)(n.num+1)+". ",1),f,(0,r.Uk)("   "+(0,s.zw)(n.question.Description),1)]),m,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.question.Choice,((e,o)=>((0,r.wg)(),(0,r.iD)("div",{class:"choices",key:o,name:n.question.Description},[(0,r._)("input",{type:(0,i.SU)(t),name:n.num,value:e.slice(0,1)},null,8,v),(0,r.Uk)("   "+(0,s.zw)(e),1)],8,p)))),128)),d,b,g,(0,r.Uk)("    "),w,(0,r.wy)((0,r._)("span",null,(0,s.zw)(n.question.Answer),513),[[o.F8,(0,i.SU)(l)]]),(0,r.Uk)("    "),(0,r._)("button",{onClick:k},(0,s.zw)((0,i.SU)(l)?"Hide Answer":"Show Answer"),1),h,(0,r._)("button",{onClick:y},(0,s.zw)((0,i.SU)(u)?"Try Again":"Check Answer"),1)]))}};const y=k;var _=y,C={name:"App",components:{ProblemCom:_},setup(){let n=(0,i.qj)({problems:[]});var e;function t(t){let o=t.target.scrollTop,r=t.target.clientHeight,l=t.target.scrollHeight,u=n.problems.length;o+r>=l-500&&(n.problems=[...n.problems,...e.slice(u+1,u+25)])}return u.Z.get("/maogai/problems.txt").then((t=>{e=t.data,n.problems=e.slice(0,25)})),{context:n,addContent:t}}},q=t(89);const O=(0,q.Z)(C,[["render",l]]);var x=O;(0,o.ri)(x).mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var l=e[o]={exports:{}};return n[o].call(l.exports,l,l.exports,t),l.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,l){if(!o){var u=1/0;for(a=0;a<n.length;a++){o=n[a][0],r=n[a][1],l=n[a][2];for(var i=!0,s=0;s<o.length;s++)(!1&l||u>=l)&&Object.keys(t.O).every((function(n){return t.O[n](o[s])}))?o.splice(s--,1):(i=!1,l<u&&(u=l));if(i){n.splice(a--,1);var c=r();void 0!==c&&(e=c)}}return e}l=l||0;for(var a=n.length;a>0&&n[a-1][2]>l;a--)n[a]=n[a-1];n[a]=[o,r,l]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,l,u=o[0],i=o[1],s=o[2],c=0;if(u.some((function(e){return 0!==n[e]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(s)var a=s(t)}for(e&&e(o);c<u.length;c++)l=u[c],t.o(n,l)&&n[l]&&n[l][0](),n[l]=0;return t.O(a)},o=self["webpackChunkmao_mind"]=self["webpackChunkmao_mind"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(459)}));o=t.O(o)})();
//# sourceMappingURL=app.aa8ff900.js.map