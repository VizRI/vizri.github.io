import{_ as d,r as _,a,b as t,F as h,d as p,o as s,e as u,w,f as v,t as f,p as m,g as y,h as b}from"./index-BlGRqcNw.js";const k=e=>(m("data-v-6d209aa9"),e=e(),y(),e),S={class:"container-fluid"},g=k(()=>t("div",{class:"row header"},[t("div",{class:"container"},[t("h1",{class:"mb-4"},"Select a City or Town"),t("p",null," Click on a city or town below to be redirected to a page specific to that location. This will show you every contest available to be voted on within the chosen location. Precinct counts for local contests are shown as city/town total. ")])],-1)),x={class:"row"},C={class:"container"},I={class:"card-columns"},T={__name:"Local",setup(e){const c=_([]);return fetch(window.STATIC_URL+"/static/cities.json").then(o=>o.json()).then(o=>{o.forEach(n=>{c.value.push(n)})}),(o,n)=>{const r=b("router-link");return s(),a("main",null,[t("div",S,[g,t("div",x,[t("div",C,[t("ul",I,[(s(!0),a(h,null,p(c.value,(i,l)=>(s(),a("li",{class:"city-select",key:l},[u(r,{to:i.city_url,"aria-current":"page"},{default:w(()=>[v(f(i.city_name),1)]),_:2},1032,["to"])]))),128))])])])])])}}},B=d(T,[["__scopeId","data-v-6d209aa9"]]);export{B as default};