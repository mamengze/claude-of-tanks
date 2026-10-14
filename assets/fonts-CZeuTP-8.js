var e=`'Inter','Segoe UI',Roboto,Helvetica,Arial,sans-serif`,t=`'Arial Narrow','Avenir Next Condensed','Helvetica Neue Condensed','Roboto Condensed','Liberation Sans Narrow',Arial,sans-serif`,n=[500,600,700,800],r=`/* stats and timers line up: lining tabular figures across every overlay */
.cot-garage,.cot-hud,.cot-settings,.cot-dp,.cot-hints,.cot-end{
  font-variant-numeric:lining-nums tabular-nums;}
/* weight floor 500 for every overlay root: unweighted text never renders at
   book/regular (explicit 600/700/800 hierarchy steps are unaffected) */
.cot-garage,.cot-hud,.cot-settings,.cot-dp,.cot-hints,.cot-end,
.cot-bl,.cot-si,.cot-kc,.cot-touch,.cot-studio{
  font-weight:500;font-optical-sizing:auto;}`,i=!1;function a(){if(!document.getElementById(`cot-fonts`)){let e=document.createElement(`style`);e.id=`cot-fonts`,e.textContent=r,document.head.appendChild(e)}if(!i&&document.fonts&&document.fonts.load){i=!0;for(let e of n)document.fonts.load(`${e} 16px 'Inter'`).catch(()=>{})}}export{e as n,a as r,t};