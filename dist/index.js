"use strict";var c=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var y=c(function(D,l){
var b=require('@stdlib/math-base-assert-is-nan/dist');function j(a,e,r,s,n){var i,t,u,v,o,q;for(i=r.data,t=r.accessors[0],u=r.accessors[1],v=n,o=0;o<a;o++)q=t(i,v),b(q)&&u(i,v,e),v+=s;return r}l.exports=j
});var f=c(function(E,d){
var k=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/array-base-arraylike2object/dist'),O=y();function P(a,e,r,s,n){var i,t,u;if(a<=0)return r;if(t=m(r),t.accessorProtocol)return O(a,e,t,s,n),r;for(i=n,u=0;u<a;u++)k(r[i])&&(r[i]=e),i+=s;return r}d.exports=P
});var p=c(function(F,g){
var R=require('@stdlib/strided-base-stride2offset/dist'),w=f();function z(a,e,r,s){return w(a,e,r,s,R(a,s))}g.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=p(),B=f();A(N,"ndarray",B);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
