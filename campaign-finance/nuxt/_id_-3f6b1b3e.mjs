import{_ as d}from"./Table-1a42c858.mjs";import{f as _,w as i,o as l,b as p,h as m,u as e}from"./entry-db4fce61.mjs";import{u as n}from"./fetch-bd8210ee.mjs";import"./state-7a33620b.mjs";const u={class:"container"},C={__name:"[id]",async setup(f){let a,t;const s=_(),{data:o}=([a,t]=i(()=>n(`/api/candidates/${s.params.id}`,{initialCache:!1},"$cbKnwFZ0Sq")),a=await a,t(),a),{data:c}=([a,t]=i(()=>n("/api/tables",{initialCache:!1},"$BBnDUjWpaR")),a=await a,t(),a);return(h,w)=>{const r=d;return l(),p("div",u,[m(r,{data:e(o),details:e(c).candidates[e(s).params.id]},null,8,["data","details"])])}}};export{C as default};