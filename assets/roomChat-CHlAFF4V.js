import{n as e,t}from"./fonts-CZeuTP-8.js";import"./protocol-BaY3Lwmp.js";var n=`cot-room-chat-style`;function r(){if(document.getElementById(n))return;let r=document.createElement(`style`);r.id=n,r.textContent=`
.cot-room-chat{position:fixed;z-index:46;left:max(18px,env(safe-area-inset-left));
  top:clamp(270px,50%,calc(100vh - 230px));bottom:auto;transform:translateY(-50%);
  width:min(380px,calc(50vw - 34px));min-width:280px;display:grid;gap:7px;pointer-events:none;
  color:#e5edf3;font-family:${e};text-shadow:0 1px 3px rgba(0,0,0,.95)}
.cot-room-chat[hidden]{display:none}.cot-room-chat *{box-sizing:border-box}
.cot-room-chat-log{max-height:146px;overflow:hidden;display:flex;flex-direction:column;
  justify-content:flex-end;gap:3px;padding:6px 8px;transition:opacity .45s ease}
.cot-room-chat.quiet:not(.open) .cot-room-chat-log{opacity:.18}
.cot-room-chat:hover .cot-room-chat-log,.cot-room-chat.open .cot-room-chat-log{opacity:1}
.cot-room-chat:not(.open) .cot-room-chat-message:nth-last-child(n+6){display:none}
.cot-room-chat-message{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:baseline;
  gap:7px;padding:3px 7px;border-left:2px solid rgba(159,178,192,.45);
  background:linear-gradient(90deg,rgba(5,9,13,.82),rgba(5,9,13,.14));
  font-size:11px;line-height:1.35;overflow-wrap:anywhere}
.cot-room-chat-message.alpha{border-left-color:#6fbcff}.cot-room-chat-message.bravo{border-left-color:#ff8479}
.cot-room-chat-message.self{background:linear-gradient(90deg,rgba(50,35,14,.88),rgba(10,10,8,.16));
  border-left-color:#edaa43}.cot-room-chat-name{font:800 9px/1 ${t};letter-spacing:.1em;
  color:#aebdca;text-transform:uppercase;white-space:nowrap}.cot-room-chat-message.alpha .cot-room-chat-name{color:#9bd2ff}
.cot-room-chat-message.bravo .cot-room-chat-name{color:#ffaaa3}.cot-room-chat-message.self .cot-room-chat-name{color:#ffd18a}
.cot-room-chat-text{min-width:0}.cot-room-chat-controls{display:flex;align-items:stretch;gap:7px;
  padding:8px;border:1px solid rgba(166,185,199,.25);border-left:3px solid #eaa340;
  background:linear-gradient(100deg,rgba(7,11,15,.95),rgba(12,17,22,.88));
  box-shadow:0 10px 30px rgba(0,0,0,.34);pointer-events:auto}
.cot-room-chat:not(.open) .cot-room-chat-controls{justify-self:start;padding:4px}
.cot-room-chat-toggle{flex:0 0 auto;min-width:70px;border:1px solid rgba(177,196,210,.26);
  background:rgba(17,24,30,.92);color:#c9d5de;font:800 9px ${t};letter-spacing:.13em;
  text-transform:uppercase;cursor:pointer}.cot-room-chat-toggle b{color:#f1ae49;font-size:11px}
.cot-room-chat-toggle:hover,.cot-room-chat-toggle:focus-visible{border-color:#eaa340;color:#fff;outline:none}
.cot-room-chat-form{position:relative;min-width:0;flex:1;display:none;grid-template-columns:minmax(0,1fr) auto;gap:7px}
.cot-room-chat.open .cot-room-chat-form{display:grid}.cot-room-chat.open .cot-room-chat-toggle{display:none}
.cot-room-chat-input{min-width:0;height:34px;border:1px solid rgba(180,199,213,.3);outline:0;
  background:rgba(2,6,9,.9);color:#f1f5f8;padding:0 10px;font:12px ${e};caret-color:#ffbd5f}
.cot-room-chat-input:focus{border-color:#eaa340;box-shadow:inset 0 -1px #eaa340}
.cot-room-chat-send{height:34px;min-width:60px;border:1px solid #ba7727;background:#4b2e0e;
  color:#ffd291;font:800 9px ${t};letter-spacing:.14em;text-transform:uppercase;cursor:pointer}
.cot-room-chat-send:disabled{opacity:.4;cursor:not-allowed}.cot-room-chat-count{position:absolute;right:79px;
  bottom:-13px;color:#8494a0;font:700 8px ${t};letter-spacing:.08em}.cot-room-chat-count.over{color:#ff867d}
body.cot-touch-layout .cot-room-chat{left:max(9px,env(safe-area-inset-left));top:180px;bottom:auto;
  width:min(58vw,390px);min-width:0;z-index:48;transform:none}
body.cot-touch-layout .cot-room-chat-log{max-height:105px;padding-left:0}
body.cot-touch-layout .cot-room-chat-message{font-size:10px}
body.cot-touch-layout .cot-room-chat-controls{padding:6px}
body.cot-touch-layout .cot-room-chat-toggle{min-width:82px;height:38px;background:rgba(7,11,15,.9)}
@media(max-height:700px){.cot-room-chat{top:50%}.cot-room-chat-log{max-height:105px}}
@media(max-width:760px){.cot-room-chat{top:clamp(340px,calc(50% + 20px),calc(100vh - 80px));
    bottom:auto;width:min(360px,44vw);min-width:220px}
  .cot-room-chat-log{max-height:clamp(48px,calc(100vh - 440px),92px)}
  body.cot-touch-layout .cot-room-chat{top:180px}}
@media(prefers-reduced-motion:reduce){.cot-room-chat-log{transition:none}}
`,document.head.appendChild(r)}function i(e){return!!e&&(e.tagName===`INPUT`||e.tagName===`TEXTAREA`||e.tagName===`SELECT`||e.isContentEditable)}function a({input:e,onSend:t=()=>!1,isAvailable:n=()=>!0,shouldRelock:a=()=>!1}={}){r();let o=document.createElement(`section`);o.className=`cot-room-chat quiet`,o.hidden=!0,o.dataset.testid=`room-chat`,o.setAttribute(`aria-label`,`Room chat`);let s=document.createElement(`div`);s.className=`cot-room-chat-log`,s.dataset.testid=`room-chat-log`,s.setAttribute(`role`,`log`),s.setAttribute(`aria-live`,`polite`),s.setAttribute(`aria-relevant`,`additions`);let c=document.createElement(`div`);c.className=`cot-room-chat-controls`;let l=document.createElement(`button`);l.className=`cot-room-chat-toggle`,l.type=`button`,l.dataset.testid=`room-chat-toggle`,l.innerHTML=`<b>↵</b>&nbsp; Room chat`,l.setAttribute(`aria-label`,`Open room chat`),l.setAttribute(`aria-keyshortcuts`,`Enter`);let u=document.createElement(`form`);u.className=`cot-room-chat-form`;let d=document.createElement(`input`);d.className=`cot-room-chat-input`,d.dataset.testid=`room-chat-input`,d.type=`text`,d.autocomplete=`off`,d.spellcheck=!0,d.enterKeyHint=`send`,d.placeholder=`Message everyone in this room`,d.setAttribute(`aria-label`,`Room chat message`);let f=document.createElement(`button`);f.className=`cot-room-chat-send`,f.dataset.testid=`room-chat-send`,f.type=`submit`,f.textContent=`Send`;let p=document.createElement(`span`);p.className=`cot-room-chat-count`,p.setAttribute(`aria-hidden`,`true`),u.append(d,f,p),c.append(l,u),o.append(s,c),document.body.appendChild(o);let m=!1,h=!1,g=``,_=null,v=new Set;function y(){return[...d.value].length}function b(){let e=y();p.textContent=`${e}/240`,p.classList.toggle(`over`,e>240),f.disabled=e===0||e>240}function x({relock:t=!0}={}){h&&(h=!1,o.classList.remove(`open`),d.blur(),e?.setEnabled?.(!0),b(),t&&a()&&e?.requestLock?.())}function S(){return!m||!n()||h?!1:(h=!0,o.classList.add(`open`),e?.setEnabled?.(!1),document.pointerLockElement&&document.exitPointerLock&&document.exitPointerLock(),d.focus({preventScroll:!0}),b(),!0)}function C(){let e=y();return e<1||e>240||!t(d.value)?!1:(d.value=``,b(),x(),!0)}function w(e){if(!(!m||!n()||e.isComposing))if(e.code===`Enter`){if(!h&&i(e.target))return;e.preventDefault(),e.stopImmediatePropagation(),h?C():S()}else h&&e.code===`Escape`&&(e.preventDefault(),e.stopImmediatePropagation(),x())}function T(){o.classList.remove(`quiet`),_&&clearTimeout(_),_=setTimeout(()=>o.classList.add(`quiet`),9e3)}function E(e){if(!e||v.has(e.id))return!1;v.add(e.id);let t=document.createElement(`div`);t.className=`cot-room-chat-message ${e.team||`spectator`}`+(e.senderId===g?` self`:``),t.dataset.messageId=String(e.id||``),t.dataset.senderId=String(e.senderId||``);let n=document.createElement(`span`);n.className=`cot-room-chat-name`,n.textContent=e.senderName||`Player`;let r=document.createElement(`span`);for(r.className=`cot-room-chat-text`,r.textContent=e.text||``,t.append(n,r),s.appendChild(t);s.childElementCount>48;){let e=s.firstElementChild;e?.dataset.messageId&&v.delete(e.dataset.messageId),e?.remove()}return s.scrollTop=s.scrollHeight,T(),!0}l.addEventListener(`click`,S),u.addEventListener(`submit`,e=>{e.preventDefault(),C()}),d.addEventListener(`input`,b);for(let e of[`pointerdown`,`mousedown`,`mouseup`,`wheel`])o.addEventListener(e,e=>e.stopPropagation());return window.addEventListener(`keydown`,w,!0),b(),{root:o,append:E,open:S,close:x,setPlayer(e){g=String(e||``);for(let e of s.children)e.classList.toggle(`self`,e.dataset.senderId===g)},setActive(e){m=!!e,o.hidden=!m,m||x({relock:!1})},clear(){s.replaceChildren(),v.clear(),d.value=``,b()},get isOpen(){return h},dispose(){_&&clearTimeout(_),window.removeEventListener(`keydown`,w,!0),o.remove()}}}export{a as createRoomChat};