import{d as y,M as N,o as i,j as d,q as s,t as o,F as V,s as $,L as S,an as B,a5 as C,l as F,m as P,p as n,x as a}from"./index-1692ea73.js";import{_ as v}from"./index-05feb1a0.js";import{b as I}from"./route-block-83d24a4e.js";import"./browser-d6f85d19.js";import"./index-cdc677a5.js";const j={key:0,class:"bg-base-100 px-4 pt-3 pb-4 rounded mt-5"},w={class:"text-base mb-3 text-main"},A={class:"grid grid-cols-2 md:!grid-cols-4 lg:!grid-cols-5 2xl:!grid-cols-6 gap-4"},D={class:"text-xs mb-2 text-secondary capitalize"},L={class:"text-base text-main"},_=y({__name:"CardParameter",props:{cardItem:{type:Object}},setup(x){const t=x,p=N();function g(e){if(Array.isArray(e))return e[0]&&e[0].amount||"-";if(String(e).search(/^\d+s$/g)>-1)return B(e);const r=Number(e);return`${r}`=="NaN"||typeof e=="boolean"?e:r<1&&r>0?p.formatDecimalToPercent(e):r}function f(e){return e?e.replace(/_/g," "):""}return(e,r)=>{var l,m,u,b,h;return(l=t.cardItem)!=null&&l.items&&((u=(m=t.cardItem)==null?void 0:m.items)==null?void 0:u.length)>0?(i(),d("div",j,[s("div",w,o((b=t.cardItem)==null?void 0:b.title),1),s("div",A,[(i(!0),d(V,null,$((h=t.cardItem)==null?void 0:h.items,(c,k)=>(i(),d("div",{key:k,class:"rounded-sm bg-active px-4 py-2"},[s("div",D,o(f(c==null?void 0:c.subtitle)),1),s("div",L,o(g(c==null?void 0:c.value)),1)]))),128))])])):S("",!0)}}}),M={class:"overflow-hidden"},T={class:"bg-base-100 px-4 pt-3 pb-4 rounded"},q={class:"text-base mb-3 text-main"},z={class:"grid grid-cols-2 md:!grid-cols-4 lg:!grid-cols-5 2xl:!grid-cols-6 gap-4"},E={class:"text-xs mb-2 text-secondary"},O={class:"text-base text-main"},G={class:"bg-base-100 px-4 pt-3 pb-4 rounded-sm mt-6"},H={class:"text-base mb-3 text-main"},J={class:"bg-base-100 px-4 pt-3 pb-4 rounded-sm mt-6"},K={class:"text-base mb-3 text-main"},Q=y({__name:"index",setup(x){const t=C(),p=F(t.chain);return P(()=>{t.initial()}),(g,f)=>{var e,r,l,m;return i(),d("div",M,[s("div",T,[s("div",q,o(p.value.title),1),s("div",z,[(i(!0),d(V,null,$(p.value.items,(u,b)=>(i(),d("div",{key:b,class:"rounded-sm bg-active px-4 py-2"},[s("div",E,o(u.subtitle),1),s("div",O,o(u.value),1)]))),128))])]),n(_,{cardItem:a(t).mint},null,8,["cardItem"]),n(_,{cardItem:a(t).staking},null,8,["cardItem"]),n(_,{cardItem:a(t).gov},null,8,["cardItem"]),n(_,{cardItem:a(t).distribution},null,8,["cardItem"]),n(_,{cardItem:a(t).slashing},null,8,["cardItem"]),s("div",G,[s("div",H,o((e=a(t).appVersion)==null?void 0:e.title),1),n(v,{value:(r=a(t).appVersion)==null?void 0:r.items,thead:!1},null,8,["value"])]),s("div",J,[s("div",K,o((l=a(t).nodeVersion)==null?void 0:l.title),1),n(v,{value:(m=a(t).nodeVersion)==null?void 0:m.items,thead:!1},null,8,["value"])])])}}});typeof I=="function"&&I(Q);export{Q as default};
