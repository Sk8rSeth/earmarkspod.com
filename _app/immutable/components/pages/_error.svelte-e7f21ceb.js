import{S as W,i as X,s as Y,w as Q,a as A,k as m,q as C,x as R,c as B,l as c,m as u,r as F,h as o,n as a,y as T,b as G,D as t,u as J,f as K,t as O,z as U,Q as Z}from"../../chunks/index-c5aa93ba.js";import{p as ee}from"../../chunks/stores-e4c2fa2f.js";import{H as te,F as ae}from"../../chunks/footer-edc69d04.js";function se(d){var P;let s,v,n,l,f,r,x,E=(d[0].status??"404")+"",S,D,$,y=(((P=d[0].error)==null?void 0:P.message)??"Not found")+"",k,N,g,p,H,V,q,h,b;return s=new te({props:{page:{title:d[0].status.toString()??"404",path:d[0].url.pathname}}}),h=new ae({props:{sticky:!0,class:"flex-1 md:flex-initial"}}),{c(){Q(s.$$.fragment),v=A(),n=m("div"),l=m("div"),f=m("article"),r=m("main"),x=m("h1"),S=C(E),D=A(),$=m("h2"),k=C(y),N=A(),g=m("div"),p=m("a"),H=m("span"),V=C(`
            Back to Home`),q=A(),Q(h.$$.fragment),this.h()},l(e){R(s.$$.fragment,e),v=B(e),n=c(e,"DIV",{class:!0});var i=u(n);l=c(i,"DIV",{class:!0});var _=u(l);f=c(_,"ARTICLE",{itemscope:!0,itemtype:!0,class:!0});var I=u(f);r=c(I,"MAIN",{itemprop:!0,class:!0});var w=u(r);x=c(w,"H1",{class:!0});var j=u(x);S=F(j,E),j.forEach(o),D=B(w),$=c(w,"H2",{class:!0});var L=u($);k=F(L,y),L.forEach(o),N=B(w),g=c(w,"DIV",{class:!0});var M=u(g);p=c(M,"A",{href:!0,class:!0});var z=u(p);H=c(z,"SPAN",{class:!0}),u(H).forEach(o),V=F(z,`
            Back to Home`),z.forEach(o),M.forEach(o),w.forEach(o),I.forEach(o),q=B(_),R(h.$$.fragment,_),_.forEach(o),i.forEach(o),this.h()},h(){a(x,"class","opacity-20 text-6xl md:text-[12rem] -mt-2 mb-0"),a($,"class","-mt-12 md:-mt-24"),a(H,"class","i-heroicons-outline-home -ml-1 mr-2"),a(p,"href","/"),a(p,"class","btn btn-neutral no-underline shadow-xl hover:shadow-2xl mt-8"),a(g,"class","card-actions"),a(r,"itemprop","articleBody"),a(r,"class","card-body prose urara-prose"),a(f,"itemscope",""),a(f,"itemtype","https://schema.org/BlogPosting"),a(f,"class","card bg-base-100 rounded-none md:rounded-box shadow-xl md:mb-8 z-10"),a(l,"class","flex-none w-full max-w-screen-md mx-auto xl:mx-0"),a(n,"class","flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap")},m(e,i){T(s,e,i),G(e,v,i),G(e,n,i),t(n,l),t(l,f),t(f,r),t(r,x),t(x,S),t(r,D),t(r,$),t($,k),t(r,N),t(r,g),t(g,p),t(p,H),t(p,V),t(l,q),T(h,l,null),b=!0},p(e,[i]){var I;const _={};i&1&&(_.page={title:e[0].status.toString()??"404",path:e[0].url.pathname}),s.$set(_),(!b||i&1)&&E!==(E=(e[0].status??"404")+"")&&J(S,E),(!b||i&1)&&y!==(y=(((I=e[0].error)==null?void 0:I.message)??"Not found")+"")&&J(k,y)},i(e){b||(K(s.$$.fragment,e),K(h.$$.fragment,e),b=!0)},o(e){O(s.$$.fragment,e),O(h.$$.fragment,e),b=!1},d(e){U(s,e),e&&o(v),e&&o(n),U(h)}}}function re(d,s,v){let n;return Z(d,ee,l=>v(0,n=l)),[n]}class ie extends W{constructor(s){super(),X(this,s,re,se,Y,{})}}export{ie as default};
