import{a as i,o as n,b as c,i as t,h as e,A as o,B as l,C as a}from"./entry-db4fce61.mjs";const r={},_={class:"container-fluid"},d=t("div",{class:"row header"},[t("div",{class:"col-12"},[t("h1",{class:"contest-type"},"Quarterly Totals"),t("p",{class:"pt-3 fs-5"},' This section takes a look at the total amount of funding / spending for every candidate in the current quarter. "Contributions" refers to all money coming into a campaign while "Expenditures" shows how each candidate spent the money they raised. ')])],-1),u={class:"row"},h={class:"col-sm-12 col-md-6 col-xl-6 mb-5"},p={class:"card p-0"},y=t("div",{class:"card-header"},"Contributions",-1),m={class:"list-group list-group-flush"},g={class:"list-group-item"},f=a("Money Raised by Category"),v={class:"list-group-item"},x=a("Individual Contributions by State"),b={class:"col-sm-12 col-md-6 col-xl-6 mb-5"},k={class:"card p-0"},C=t("div",{class:"card-header"},"Expenditures",-1),w={class:"list-group list-group-flush"},q={class:"list-group-item"},B=a("Money Spent by Category"),N={class:"list-group-item"},S=a("Money Spent by State");function E(M,T){const s=l;return n(),c("div",_,[d,t("div",u,[t("div",h,[t("div",p,[y,t("ul",m,[t("li",g,[e(s,{to:"/totals/con_quarterly_type_total",class:"nav-link","aria-current":"page"},{default:o(()=>[f]),_:1})]),t("li",v,[e(s,{to:"/totals/con_quarterly_raised_by_state",class:"nav-link","aria-current":"page"},{default:o(()=>[x]),_:1})])])])]),t("div",b,[t("div",k,[C,t("ul",w,[t("li",q,[e(s,{to:"/totals/exp_quarterly_spending_total_by_type",class:"nav-link","aria-current":"page"},{default:o(()=>[B]),_:1})]),t("li",N,[e(s,{to:"/totals/exp_quarterly_spending_by_state",class:"nav-link","aria-current":"page"},{default:o(()=>[S]),_:1})])])])])])])}var A=i(r,[["render",E]]);export{A as default};