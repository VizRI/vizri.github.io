import{o as i,b as l,d as t,t as r,x as v,F as u,_ as g,r as w,j as b,g as h,i as y,f as p,q as k,e as D,s as $,p as x,h as S}from"./index-C9s4TIqk.js";const C={class:"fs-6 contest-title text-break pb-0 m-0"},E={class:"card-body"},N={class:"row"},T={class:"col-7 my-auto"},q={class:"fs-5 fw-bold m-0"},I={class:"col-5"},j={class:"fs-7 text-end m-0"},B={class:"fs-4 text-end m-0"},F={__name:"AppCard",props:{contest:String,candidate:String,party:String,rank:Number,diff:Number},setup(d){const e=d;function n(o){return o==1?"winning":"losing"}function _(o){return o==1?"ahead":"down"}return(o,c)=>(i(),l(u,null,[t("p",C,r(e.contest),1),t("div",{class:v(["card shadow",n(e.rank)])},[t("div",E,[t("div",N,[t("div",T,[t("p",q,r(e.candidate),1)]),t("div",I,[t("p",j,"votes "+r(_(e.rank))+" by",1),t("p",B,r(e.diff.toLocaleString()),1)])])])],2)],64))}},f=d=>(x("data-v-bd7acf3c"),d=d(),S(),d),L={class:"container-fluid"},V={class:"row header"},A=f(()=>t("div",{class:"col-sm-12 col-md-6"},[t("h1",{class:"contest-type"},"Endorsed Cadndidates")],-1)),P={class:"col-sm-12 col-md-6"},U={class:"last-updated"},z=f(()=>t("small",null,"updated: ",-1)),R={class:"refresh"},G=f(()=>t("p",{class:"mt-4 fs-6"}," This shows all endorsed candidates for single-vote contests that have at least 1 challenger. The cards are a simple design, a gray card means the candidate is losing, blue means they are winning. The positive number to the right shows how far ahead a candidate is from the 2nd place opponent and a negative number shows how far behind they are from the leader. ",-1)),H={class:"row"},J={__name:"Endorsed",setup(d){let e=w(null);const n=b({endorsedData:[]});function _(c){n.requestData=c,o(n.requestData),n.requestData=!1}function o(){let c=[];fetch(window.APP_URL+"/data/endorsed.json").then(a=>a.json()).then(a=>{e.value===a.last_updated?console.log("no update yet"):(e.value=a.last_updated,a.endorsed.forEach(s=>{c.push(s)}),n.endorsedData=c)})}return o(),(c,a)=>(i(),l("main",null,[t("div",L,[t("div",V,[A,t("div",P,[t("h3",U,[z,h(r(y(e)),1)]),t("h3",R,[h("data refresh: "),p(k,{onUpdate:a[0]||(a[0]=s=>_(s))}),h(" minutes ")])]),G]),t("div",H,[(i(!0),l(u,null,D(n.endorsedData,(s,m)=>(i(),l("div",{class:"col-sm-12 col-md-6 item p-3",key:m},[p(F,{rank:s.rank,candidate:s.candidate_name,party:s.party,contest:s.contest_title,diff:s.vote_diff},null,8,["rank","candidate","party","contest","diff"])]))),128))]),p($)])]))}},M=g(J,[["__scopeId","data-v-bd7acf3c"]]);export{M as default};