import{$i as e,$n as t,Ln as n,Qi as r,Qn as i,Si as a,Zt as o,an as s,dn as c,fn as l,hi as u,in as d,jr as f,or as p,pr as m,rr as h,sn as g,sr as _,xn as v}from"./specialActions-CWA0lXJm.js";var y=Object.freeze([200,430]);function b(e,t=2){let n=y[0]*(t===0?1.1:.9),r=y[1]*(t<=1?1.1:.9);return e<n?0:e<r?1:2}function x(e){return[e<y[0]?0:e<y[1]?1:2]}function S(e,t,n,r=null){let i=-1,a=-1,o=1/0,s=!1;for(let r=0;r<e.length;r++){let c=e[r],l=Math.hypot(t-c.cx,n-c.cz),u=b(l,c.level),d=c.present||c.lods;if(!d[u]){(i<0||!s||l<o)&&(i=r,a=u,o=l,s=!0);continue}if(s)continue;let f=-1;u===2&&l<y[1]+125?f=1:u===1&&l<y[0]+125&&(f=0),f>=0&&!d[f]&&(i<0||l<o)&&(i=r,a=f,o=l,s=!1)}if(i<0)return null;let c=r||{};return c.index=i,c.level=a,c.distanceM=o,c.urgent=s,c}var C=.5*(Math.sqrt(3)-1),w=(3-Math.sqrt(3))/6,T=1/3,E=1/6,D=(Math.sqrt(5)-1)/4,O=(5-Math.sqrt(5))/20,k=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),A=new Float64Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),j=new Uint8Array([0,1,2,3,0,1,3,2,0,0,0,0,0,2,3,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,0,0,2,1,3,0,0,0,0,0,3,1,2,0,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,3,0,0,0,0,1,3,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,3,0,1,2,3,1,0,1,0,2,3,1,0,3,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,1,0,0,0,0,2,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,1,2,3,0,2,1,0,0,0,0,3,1,2,0,2,1,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,1,0,2,0,0,0,0,3,2,0,1,3,2,1,0]),M=class{constructor(e=Math){let t=new Int32Array(256);for(let n=0;n<256;n++)t[n]=Math.floor(e.random()*256);let n=new Int32Array(512),r=new Int32Array(512),i=new Int32Array(512);for(let e=0;e<512;e++){let a=t[e&255];n[e]=a,r[e]=a%12,i[e]=a%32}this._perm=n,this._pm12=r,this._pm32=i}noise(e,t){let n=this._perm,r=this._pm12,i,a,o,s=(e+t)*C,c=Math.floor(e+s),l=Math.floor(t+s),u=(c+l)*w,d=c-u,f=l-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+w,v=m-g+w,y=p-1+2*w,b=m-1+2*w,x=c&255,S=l&255,T=r[x+n[S]]*3,E=r[x+h+n[S+g]]*3,D=r[x+1+n[S+1]]*3,O=.5-p*p-m*m;O<0?i=0:(O*=O,i=O*O*(k[T]*p+k[T+1]*m));let A=.5-_*_-v*v;A<0?a=0:(A*=A,a=A*A*(k[E]*_+k[E+1]*v));let j=.5-y*y-b*b;return j<0?o=0:(j*=j,o=j*j*(k[D]*y+k[D+1]*b)),70*(i+a+o)}noise3d(e,t,n){let r=this._perm,i=this._pm12,a,o,s,c,l=(e+t+n)*T,u=Math.floor(e+l),d=Math.floor(t+l),f=Math.floor(n+l),p=(u+d+f)*E,m=u-p,h=d-p,g=f-p,_=e-m,v=t-h,y=n-g,b,x,S,C,w,D;_>=v?v>=y?(b=1,x=0,S=0,C=1,w=1,D=0):_>=y?(b=1,x=0,S=0,C=1,w=0,D=1):(b=0,x=0,S=1,C=1,w=0,D=1):v<y?(b=0,x=0,S=1,C=0,w=1,D=1):_<y?(b=0,x=1,S=0,C=0,w=1,D=1):(b=0,x=1,S=0,C=1,w=1,D=0);let O=_-b+E,A=v-x+E,j=y-S+E,M=_-C+2*E,N=v-w+2*E,P=y-D+2*E,F=_-1+3*E,I=v-1+3*E,ee=y-1+3*E,L=u&255,R=d&255,te=f&255,z=i[L+r[R+r[te]]]*3,ne=i[L+b+r[R+x+r[te+S]]]*3,re=i[L+C+r[R+w+r[te+D]]]*3,ie=i[L+1+r[R+1+r[te+1]]]*3,ae=.6-_*_-v*v-y*y;ae<0?a=0:(ae*=ae,a=ae*ae*(k[z]*_+k[z+1]*v+k[z+2]*y));let B=.6-O*O-A*A-j*j;B<0?o=0:(B*=B,o=B*B*(k[ne]*O+k[ne+1]*A+k[ne+2]*j));let V=.6-M*M-N*N-P*P;V<0?s=0:(V*=V,s=V*V*(k[re]*M+k[re+1]*N+k[re+2]*P));let H=.6-F*F-I*I-ee*ee;return H<0?c=0:(H*=H,c=H*H*(k[ie]*F+k[ie+1]*I+k[ie+2]*ee)),32*(a+o+s+c)}noise4d(e,t,n,r){let i=this._perm,a=this._pm32,o,s,c,l,u,d=(e+t+n+r)*D,f=Math.floor(e+d),p=Math.floor(t+d),m=Math.floor(n+d),h=Math.floor(r+d),g=(f+p+m+h)*O,_=f-g,v=p-g,y=m-g,b=h-g,x=e-_,S=t-v,C=n-y,w=r-b,T=((x>S?32:0)+(x>C?16:0)+(S>C?8:0)+(x>w?4:0)+(S>w?2:0)+ +(C>w))*4,E=j[T],k=j[T+1],M=j[T+2],N=j[T+3],P=+(E>=3),F=+(k>=3),I=+(M>=3),ee=+(N>=3),L=+(E>=2),R=+(k>=2),te=+(M>=2),z=+(N>=2),ne=+(E>=1),re=+(k>=1),ie=+(M>=1),ae=+(N>=1),B=x-P+O,V=S-F+O,H=C-I+O,U=w-ee+O,oe=x-L+2*O,se=S-R+2*O,ce=C-te+2*O,le=w-z+2*O,ue=x-ne+3*O,de=S-re+3*O,fe=C-ie+3*O,pe=w-ae+3*O,W=x-1+4*O,G=S-1+4*O,K=C-1+4*O,q=w-1+4*O,J=f&255,Y=p&255,me=m&255,X=h&255,he=a[J+i[Y+i[me+i[X]]]]*4,ge=a[J+P+i[Y+F+i[me+I+i[X+ee]]]]*4,_e=a[J+L+i[Y+R+i[me+te+i[X+z]]]]*4,ve=a[J+ne+i[Y+re+i[me+ie+i[X+ae]]]]*4,ye=a[J+1+i[Y+1+i[me+1+i[X+1]]]]*4,be=.6-x*x-S*S-C*C-w*w;be<0?o=0:(be*=be,o=be*be*(A[he]*x+A[he+1]*S+A[he+2]*C+A[he+3]*w));let xe=.6-B*B-V*V-H*H-U*U;xe<0?s=0:(xe*=xe,s=xe*xe*(A[ge]*B+A[ge+1]*V+A[ge+2]*H+A[ge+3]*U));let Se=.6-oe*oe-se*se-ce*ce-le*le;Se<0?c=0:(Se*=Se,c=Se*Se*(A[_e]*oe+A[_e+1]*se+A[_e+2]*ce+A[_e+3]*le));let Ce=.6-ue*ue-de*de-fe*fe-pe*pe;Ce<0?l=0:(Ce*=Ce,l=Ce*Ce*(A[ve]*ue+A[ve+1]*de+A[ve+2]*fe+A[ve+3]*pe));let Z=.6-W*W-G*G-K*K-q*q;return Z<0?u=0:(Z*=Z,u=Z*Z*(A[ye]*W+A[ye+1]*G+A[ye+2]*K+A[ye+3]*q)),27*(o+s+c+l+u)}},N=`/claude-of-tanks/textures/terrain`,P=`/claude-of-tanks/textures/buildings`,F=(e,t)=>({color:`${e}/${t}_1K-JPG_Color.jpg`,normal:`${e}/${t}_1K-JPG_NormalGL.jpg`,rough:`${e}/${t}_1K-JPG_Roughness.jpg`,ao:`${e}/${t}_1K-JPG_AmbientOcclusion.jpg`}),I={grass:F(N,`Grass004`),dryGrass:((e,t)=>({color:`${e}/${t}_diff_1k.jpg`,normal:`${e}/${t}_nor_gl_1k.jpg`,rough:`${e}/${t}_rough_1k.jpg`,ao:`${e}/${t}_ao_1k.jpg`}))(N,`withered_grass`),dirt:F(N,`Ground071`),sand:F(N,`Ground093C`),snow:F(N,`Snow010A`),rock:F(N,`Rock058`),rockWarm:F(N,`Rock063`),cobble:F(N,`PavingStones046`),plaster:F(P,`Plaster007`),roof:F(P,`RoofingTiles012A`),wood:F(P,`Planks023A`),brick:F(P,`Bricks097`)},ee={verdant:{G:{set:`grass`,roughMul:1.25},D:{set:`dirt`,tint:[.82,.8,.76],roughMul:1.3},R:`rock`,M:null},desert:{G:{set:`sand`,tint:[.88,.845,.78],roughMul:1.2},D:{set:`sand`,tint:[.74,.675,.58],roughMul:1.25},R:null,M:null},winter:{G:{set:`snow`,roughMul:1.15},D:{set:`dirt`,tint:[.74,.73,.72],roughMul:1.3},R:{set:`rock`,tint:[1.52,1.55,1.62],roughMul:1.1},M:null},urban:{G:{set:`grass`,tint:[.92,.92,.88],roughMul:1.25},D:{set:`dirt`,tint:[.78,.77,.75],roughMul:1.3},R:{set:`cobble`,tint:[1,.94,.84],roughMul:1.45},M:null},coastal:{G:{set:`grass`,tint:[1.04,.99,.84],roughMul:1.25},D:{set:`sand`,tint:[.92,.87,.76],roughMul:1.25},R:{set:`rock`,tint:[1.06,1.05,1.02],roughMul:1.15},M:null},autumn:{G:{set:`grass`,tint:[1.22,1.04,.68],roughMul:1.25},D:{set:`dirt`,tint:[.84,.78,.7],roughMul:1.3},R:{set:`rock`,tint:[1.02,1,.94],roughMul:1.15},M:null},steppe:{G:{set:`dryGrass`,tint:[.8,.82,.58],roughMul:1.25},D:{set:`dirt`,tint:[.84,.78,.62],roughMul:1.3},R:{set:`rock`,tint:[1.26,1.12,.9],roughMul:1.15},M:null},railyard:{G:{set:`grass`,tint:[.8,.78,.66],roughMul:1.3},D:{set:`dirt`,tint:[.66,.64,.6],roughMul:1.35},R:{set:`cobble`,tint:[.88,.88,.86],roughMul:1.5},M:null},frontier:{G:{set:`grass`,tint:[.96,.94,.76],roughMul:1.28},D:{set:`dirt`,tint:[.8,.75,.64],roughMul:1.3},R:{set:`rock`,tint:[1.02,1,.92],roughMul:1.15},M:null},fjord:{G:{set:`grass`,tint:[.76,.86,.8],roughMul:1.28},D:{set:`dirt`,tint:[.68,.7,.68],roughMul:1.35},R:{set:`rock`,tint:[1.12,1.17,1.22],roughMul:1.15},M:null},delta:{G:{set:`grass`,tint:[.68,.94,.6],roughMul:1.22},D:{set:`dirt`,tint:[.67,.59,.43],roughMul:1.28},R:{set:`rock`,tint:[.88,.94,.78],roughMul:1.18},M:null},badlands:{G:{set:`sand`,tint:[.9,.68,.52],roughMul:1.24},D:{set:`sand`,tint:[.7,.46,.36],roughMul:1.28},R:null,M:null},monsoon:{G:{set:`grass`,tint:[.57,.82,.58],roughMul:1.22},D:{set:`dirt`,tint:[.59,.55,.44],roughMul:1.3},R:{set:`rock`,tint:[.76,.84,.76],roughMul:1.15},M:null},alpine:{G:{set:`snow`,roughMul:1.15},D:{set:`dirt`,tint:[.7,.7,.71],roughMul:1.32},R:{set:`rock`,tint:[1.48,1.53,1.62],roughMul:1.1},M:null},caldera:{G:{set:`dirt`,tint:[.43,.4,.34],roughMul:1.34},D:{set:`dirt`,tint:[.3,.28,.27],roughMul:1.4},R:{set:`rock`,tint:[.42,.4,.39],roughMul:1.2},M:null},foundry:{G:{set:`grass`,tint:[.66,.65,.56],roughMul:1.32},D:{set:`dirt`,tint:[.52,.51,.48],roughMul:1.38},R:{set:`cobble`,tint:[.76,.77,.76],roughMul:1.52},M:null}},L=new Map;function R(e){return L.has(e)||L.set(e,new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>n(Error(`sourced texture missing: ${e}`)),r.src=e})),L.get(e)}function te(e,t,n,{roughInAlpha:r=!1,roughMul:i=1,tint:a=null,desat:s=0,lift:c=0}={}){let l=Math.min(e.width,o(1024)),u=document.createElement(`canvas`);u.width=u.height=l;let d=u.getContext(`2d`);d.drawImage(e,0,0,l,l);let f=d.getImageData(0,0,l,l),p=f.data,m=null,h=null;if(t){let e=document.createElement(`canvas`);e.width=e.height=l;let n=e.getContext(`2d`);n.drawImage(t,0,0,l,l),m=n.getImageData(0,0,l,l).data}if(n){let e=document.createElement(`canvas`);e.width=e.height=l;let t=e.getContext(`2d`);t.drawImage(n,0,0,l,l),h=t.getImageData(0,0,l,l).data}let g=a?a[0]:1,_=a?a[1]:1,v=a?a[2]:1;for(let e=0;e<p.length;e+=4){let t=m?m[e]/255:1,n=p[e]*t*g,a=p[e+1]*t*_,o=p[e+2]*t*v;if(s>0){let e=n*.299+a*.587+o*.114;n+=(e-n)*s,a+=(e-a)*s,o+=(e-o)*s}c>0&&(n+=c*255,a+=c*255,o+=c*255),p[e]=Math.min(255,n),p[e+1]=Math.min(255,a),p[e+2]=Math.min(255,o),p[e+3]=r?Math.max(8,Math.min(255,(h?h[e]:230)*i)):255}return d.putImageData(f,0,0),u}function z(e){let t=Math.min(e.width,o(1024)),n=document.createElement(`canvas`);return n.width=n.height=t,n.getContext(`2d`).drawImage(e,0,0,t,t),n}function ne(e,t){e.dispose(),e.image=t,e.needsUpdate=!0}async function re(e,t,n){let r=I[e],[i,a,o,s]=await Promise.all([R(r.color),R(r.normal),r.rough?R(r.rough).catch(()=>null):null,r.ao?R(r.ao).catch(()=>null):null]);ne(t.albedo,te(i,s,o,n)),ne(t.normal,z(a))}function ie(e,t,n={}){let r=ee[e]||ee.verdant;for(let i of[`G`,`D`,`R`,`M`]){if(!r[i]||!t[i])continue;let a=typeof r[i]==`string`?{set:r[i]}:r[i],o=(i===`M`?n.mudRough??1:1)*(a.roughMul??1);re(a.set,t[i],{roughInAlpha:!0,roughMul:o,tint:a.tint||null}).catch(t=>console.warn(`[sourcedTextures] terrain ${e}/${i}:`,t.message))}}var ae={urban:{roof:[.52,.55,.62],plaster:[.88,.86,.82]},desert:{plaster:[1.08,.92,.7],wood:[1.05,.95,.8]},winter:{roof:{tint:[.96,1.02,1.14],desat:.62,lift:.1}},coastal:{plaster:[1.04,1.02,.96],wood:{tint:[.82,.83,.84],desat:.3}},autumn:{plaster:[1.02,.97,.88],wood:[.94,.86,.74]},steppe:{plaster:[1.06,1,.86],wood:[1,.92,.78]},railyard:{plaster:{tint:[.84,.83,.8],desat:.25},roof:{tint:[.88,.9,.94],desat:.6,lift:.05},wood:{tint:[.78,.76,.72],desat:.2},stone:{tint:[1.1,.98,.88],desat:.1}},frontier:{plaster:[1,.96,.86],wood:[.92,.84,.7]},fjord:{plaster:[1.03,1.04,1.02],roof:{tint:[.77,.84,.91],desat:.48,lift:.02},wood:{tint:[.72,.76,.78],desat:.38}},delta:{plaster:[1.04,.96,.78],wood:[.8,.7,.53]},badlands:{plaster:[1.08,.79,.58],wood:[.83,.69,.52]},monsoon:{plaster:[.78,.81,.72],wood:[.67,.66,.54]},alpine:{roof:{tint:[.94,1.01,1.14],desat:.68,lift:.11}},caldera:{plaster:{tint:[.62,.59,.55],desat:.45},roof:{tint:[.57,.57,.58],desat:.78},wood:[.58,.54,.48],stone:[.67,.61,.55]},foundry:{plaster:{tint:[.75,.74,.71],desat:.32},roof:{tint:[.67,.7,.74],desat:.75,lift:.025},wood:{tint:[.65,.63,.59],desat:.28},stone:{tint:[.94,.76,.62],desat:.18}}};function B(e,t){let n={plaster:`plaster`,roof:`roof`,wood:`wood`};(t===`urban`||t===`railyard`||t===`foundry`||t===`caldera`)&&e.stone&&(n.stone=`brick`),t===`urban`&&delete n.roof;for(let[r,i]of Object.entries(n)){if(!e[r])continue;let n=(ae[t]||{})[r]||null,a=n&&!Array.isArray(n)?n:{tint:n};re(i,e[r],{roughInAlpha:!1,...a}).catch(e=>console.warn(`[sourcedTextures] building ${r}:`,e.message))}}function V(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function H(e,t,n){return e<t?t:e>n?n:e}function U(e,t,n){let r=H((n-e)/(t-e),0,1);return r*r*(3-2*r)}function oe(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}var se={verdant:`rolling`,desert:`mesa`,winter:`alpine`,urban:`escarpment`},ce={rolling(e,t,n){let r=t.noise(Math.cos(e)*n.f0+11,Math.sin(e)*n.f0-7)*.5+.5,i=t.noise(Math.cos(e)*n.f1-3,Math.sin(e)*n.f1+9)*.5+.5,a=r**1.4;return n.base+(a*.75+i*.25)*n.amp},alpine(e,t,n){let r=e+t.noise(Math.cos(e)*1.15+55,Math.sin(e)*1.15-41)*.13,i=t.noise(Math.cos(r)*n.f0*.52+21,Math.sin(r)*n.f0*.52-14)*.5+.5,a=t.noise(Math.cos(r)*n.f0*1.18-37,Math.sin(r)*n.f0*1.18+28)*.5+.5,o=t.noise(Math.cos(e)*n.f0*2.65+83,Math.sin(e)*n.f0*2.65-61)*.5+.5,s=.58+U(.18,.86,t.noise(Math.cos(e)*.58+3.1,Math.sin(e)*.58-8.7)*.5+.5)*.5,c=U(.12,.92,i)*.68+U(.18,.88,a)*.24+(o-.5)*.08;return n.base+H(c,.12,1)*s*n.amp},mesa(e,t,n){let r=t.noise(Math.cos(e)*n.f0+41,Math.sin(e)*n.f0-27)*.5+.5,i=t.noise(Math.cos(e)*n.f1*2.3-13,Math.sin(e)*n.f1*2.3+33)*.5+.5,a=r+(t.noise(Math.cos(e)*n.f0*4.6-71,Math.sin(e)*n.f0*4.6+15)*.042+t.noise(Math.cos(e)*n.f0*9.7+133,Math.sin(e)*n.f0*9.7-55)*.018),o=U(.36,.45,a),s=U(.62,.7,a),c=U(.8,.86,i)*(1-s),l=U(.14,.52,a)*.17,u=1+.05*t.noise(Math.cos(e)*9+3,Math.sin(e)*9-8)+.028*t.noise(Math.cos(e)*23-17,Math.sin(e)*23+41);return n.base+(l+o*.45+s*.34+c*.3)*n.amp*u},escarpment(e,t,n){let r=t.noise(Math.cos(e)*n.f0*.7+61,Math.sin(e)*n.f0*.7-47)*.5+.5,i=t.noise(Math.cos(e)*n.f1-9,Math.sin(e)*n.f1+19)*.5+.5,a=U(.3,.62,r);return n.base+(a*.62+i**2.2*.38)*n.amp*.72}};function le(e,t,n,r,i){let a=new Float32Array(n);for(let r=0;r<8;r++){for(let r=0;r<n;r++){let i=(r-1+n)%n,o=(r+1)%n;a[r]=e[t+i]*.24+e[t+r]*.52+e[t+o]*.24}for(let r=0;r<n;r++)e[t+r]=a[r]}let o=1.35+r.amp*i*.035;for(let r=0;r<3;r++){for(let r=0;r<n;r++){let i=(r-1+n)%n;e[t+r]=H(e[t+r],e[t+i]-o,e[t+i]+o)}for(let r=n-1;r>=0;r--){let i=(r+1)%n;e[t+r]=H(e[t+r],e[t+i]-o,e[t+i]+o)}}}function ue(e,{banding:t,snowline:n,treeline:r,grainAmp:i,gullyAmp:a=1,coolRock:s=!1}){let l=o(512),d=o(192),f=document.createElement(`canvas`);f.width=l,f.height=d;let p=f.getContext(`2d`),m=p.createImageData(l,d),h=m.data,_=Math.PI*2,v=(t,n,r,i,a)=>e.noise3d(Math.cos(t*_)*r*.5+a,Math.sin(t*_)*r*.5-a*.7,n*i+a*1.31);for(let e=0;e<d;e++){let o=1-e/(d-1);for(let c=0;c<l;c++){let u=c/l,d=1,f=r>0?1-U(r*.85,r*1.08,o):0,p=r>0?0:1;d+=(v(u,o,90,100,17)*.05+v(u,o,34,38,5)*.06)*i*p;let m=U(.25,.75,v(u,o*.25,9,1.1,77)*.5+.5),g=1-Math.abs(v(u,o,46,2.6,9)),_=.45+.55*U(.3,.72,v(u,o,31,9.5,118)*.5+.5),y=U(.86,.985,g)*a*(.35+.65*m)*_,b=U(.72,.92,g)*(1-y)*a*m*_;d*=1-y*.13+b*.04;let x=v(u,o,64,46,205);if(d*=1+x*.045*(.5+.5*a)*p,d*=r>0?1+v(u,o,7,3.6,41)*.05:1+v(u,o,7,11,41)*.06,t>.003){let e=v(u,o,2.2,.6,23)*.45,n=Math.sin(o*46+e)*.5+Math.sin(o*13.5+e*.6+1.7)*.5,r=.55+.45*(v(u,o,1.5,9,311)*.5+.5);d*=1+n*t*1.35*r;let i=U(.75,.95,Math.sin(o*6.2+e*.4+.6));d*=1-i*t*.65,d*=1+U(.72,.95,o)*.07-(1-U(.05,.4,o))*.08}let S=d*(s?.978:1),C=d*(s?.998:.995),w=d*(s?1.022:.975);if(s){let e=v(u,o,2.6,.7,143)*.35,t=Math.sin(o*34+e)*.55+Math.sin(o*11.5+e*.7+2.1)*.45,n=.55+.45*(v(u,o,1.7,8,517)*.5+.5),r=v(u,o,30,11,653),i=v(u,o,12,4.6,719),a=U(.82,.97,1-Math.abs(v(u,o,40,3.4,787))),s=(1+t*.115*n)*(1+r*.075+i*.1)*(1-a*.16);S*=s,C*=s,w*=s*.995;let c=U(.55,.95,t)*n*.5*U(.06,.16,o);S+=(1.06-S)*c,C+=(1.08-C)*c,w+=(1.12-w)*c}if(r>0&&o<r*1.08){let e=f,t=e*.4;S*=1-t*1.05,C*=1-t*.42,w*=1-t*.95;let n=v(u,o,48,40,631),i=v(u,o,20,16,733),a=v(u,o+.01,48,40,631)-v(u,o-.01,48,40,631),s=H(1+(n*.025+i*.05+a*.05)*e,.6,1.5);S*=s,C*=s,w*=s;let c=v(u,o,9,5.5,217)*.5+.5,l=v(u,o,3.4,2.1,305)*.5+.5,d=v(u,o,1.3,.9,419)*.5+.5,p=U(.56,.86,l)*e;S*=1+p*.16,C*=1+p*.1,w*=1-p*.1;let m=U(.6,.88,1-c)*e;S*=1-m*.22,C*=1-m*.12,w*=1-m*.08;let h=(d-.5)*.14*e;S*=1+h,C*=1+h,w*=1+h;let g=U(.62,.86,v(u,o,8,4.6,841)*.5+.5)*e;S*=1+g*.22,C*=1+g*.2,w*=1+g*.06;let _=U(.8,.94,v(u,o,16,4.5,947)*.5+.5)*e*U(r*.35,r*.75,o);S+=(.72-S)*_*.6,C+=(.72-C)*_*.6,w+=(.7-w)*_*.6}if(n<=1){let e=U(n-.02,n+.09,o+v(u,o,24,24,51)*.05),t=v(u,o,30,17,361)*.5+v(u,o,14,7,409)*.5,r=v(u,o,5.5,3.2,477),i=U(.9,.99,g),a=U(.5,.8,v(u,o*.4,13,2,533)*.5+.5),s=U(.7,.92,v(u,o,26,6.5,601)*.5+.5)*U(.3,.55,o)*(1-U(.8,.95,o)),c=v(u,o,11,4.8,861),l=U(.3,.62,v(u,o,12,26,997)*.5+.5),d=1.03+t*.26+r*.34+c*.18-y*.1-i*a*_*l*.18,f=d*.98,p=d*1,m=d*1.04;f+=(.6-f)*s*.85,p+=(.63-p)*s*.85,m+=(.7-m)*s*.85,S+=(f-S)*e*.94,C+=(p-C)*e*.94,w+=(m-w)*e*.94}let T=(e*l+c)*4;h[T]=H(S*159,0,255),h[T+1]=H(C*159,0,255),h[T+2]=H(w*159,0,255),h[T+3]=255}}p.putImageData(m,0,0);let y=new g(f);return y.wrapS=u,y.wrapT=c,y.anisotropy=r>0?2:t>.003?16:2,y}function de(e){let t=document.createElement(`canvas`);t.width=256,t.height=256;let n=t.getContext(`2d`),r=n.createImageData(256,256),i=r.data,a=[[8,.5],[24,.32],[64,.18]],o=a.map(([t])=>{let n=new Float32Array(t*t);for(let t=0;t<n.length;t++)n[t]=e();return n}),s=e=>e*e*(3-2*e);for(let e=0;e<256;e++)for(let t=0;t<256;t++){let n=0;for(let r=0;r<a.length;r++){let i=a[r][0],c=a[r][1],l=o[r],u=t/256*i,d=e/256*i,f=Math.floor(u)%i,p=Math.floor(d)%i,m=(f+1)%i,h=(p+1)%i,g=s(u-Math.floor(u)),_=s(d-Math.floor(d)),v=l[p*i+f],y=l[p*i+m],b=l[h*i+f],x=l[h*i+m];n+=(v+(y-v)*g+(b+(x-b)*g-(v+(y-v)*g))*_-.5)*c}let r=H(128+n*255,0,255),c=(e*256+t)*4;i[c]=r,i[c+1]=r,i[c+2]=r,i[c+3]=255}n.putImageData(r,0,0);let c=new g(t);return c.wrapS=u,c.wrapT=u,c.anisotropy=2,c}function fe(e){let t=o(768),n=o(128),r=document.createElement(`canvas`);r.width=t,r.height=n;let i=r.getContext(`2d`);i.clearRect(0,0,t,n);let a=n-2,s=e=>`rgb(${Math.round(157*e)},${Math.round(172*e)},${Math.round(112*e)})`,l=(e,t,n)=>{let r=i.createLinearGradient(e,0,t,0);return r.addColorStop(0,s(n*1.14)),r.addColorStop(1,s(n*.74)),r};for(let r=0;r<3;r++){let o=r===0?.5:r===1?.64:.8,c=r===0?.58:r===1?.46:.34,l=-20,u=n*c*(.75+e()*.4);for(;l<t+20;){let t=30+e()*52;u=H(u+(e()-.5)*n*.09,n*.09,n*c);let r=u*.55;for(let n=0;n<3;n++){let n=(e()-.5)*t*.5,c=(e()-.3)*r*.5;i.fillStyle=s(o*(.78+e()*.44)),i.beginPath(),i.ellipse(l+t/2+n,a-u+r+c,t*(.34+e()*.3),r*(.55+e()*.4),e()*Math.PI,0,Math.PI*2),i.fill()}l+=t*(.42+e()*.3)}}let d=2,f=e()*9.7;for(;d<t-24;){let t=.62+.55*(Math.sin(d*.006+f)*.5+.5)+e()*.18,n=e()<.55,r=.72+e()*.42,o=2+e()*4|0,c=(70+e()*90)*t,u=(58+e()*64)*t;if(n){for(let n=0;n<o;n++){let s=d+(n+.5)/o*c+(e()-.5)*c*.2,f=u*(.55+e()*.45),p=Math.max(f*(.55+e()*.25),26*t);for(let t=0;t<3;t++){let n=a-f*(t+1)/3,o=p*(1-t/3*.62);i.fillStyle=l(s-p/2,s+p/2,r*(.8+t/2*.34)),i.beginPath(),i.moveTo(s-o/2,n+f/3*1.5),i.lineTo(s+o/2,n+f/3*1.5),i.lineTo(s+(e()-.5)*6,n),i.closePath(),i.fill()}}d+=c*(.72+e()*.4)}else{for(let t=0;t<o;t++){let n=d+(t+.5)/o*c+(e()-.5)*c*.25,l=u*(.5+e()*.5),f=l*(1.15+e()*.6),p=a-l*.52;for(let t=0;t<4;t++){let t=(e()-.5)*f*.45,a=(e()-.5)*l*.3;i.fillStyle=s(r*H(.86-a/(l*.3)*.2-t/(f*.45)*.18,.62,1.2)),i.beginPath(),i.ellipse(n+t,p+a,f*(.3+e()*.2),l*(.26+e()*.16),e()*Math.PI,0,Math.PI*2),i.fill()}}d+=c*(.75+e()*.4)}e()<.2&&(d+=30+e()*60)}let p=i.getImageData(0,0,t,n),m=p.data;for(let e=0;e<m.length;e+=4)m[e+3]<40&&(m[e]=138,m[e+1]=152,m[e+2]=100);i.putImageData(p,0,0);let h=new g(r);return h.wrapS=u,h.wrapT=c,h.anisotropy=2,h}function pe(t,n,r){let i=n&&n.horizon||{},a=n&&n.id||`verdant`,o=i.style||se[a]||`rolling`,c=ce[o]||ce.rolling,u=i.amp??1,f=i.haze??1,m=i.grain??1,h=new l(i.baseHex??5991500),g=new l((n&&n.sky&&n.sky.fogTintHex)??9413565),v=new l(i.rockHex??(o===`mesa`?9067064:6709854)),y=new l(i.snowHex??15659767),b=new l(i.forestHex??4415290),x=i.snowline??(o===`alpine`?.42:2),S=i.treeline??(o===`rolling`?.9:o===`escarpment`?.88:0),C=i.banding??(o===`mesa`?.16:0),w=o===`rolling`?.22:o===`escarpment`?.3:.78,T=new M({random:V((r^31249^oe(a))>>>0)}),E=new M({random:V((r^13255^oe(a))>>>0)}),D={default:[{r:428,base:-22,amp:0,f0:6,f1:11,aer:.1,skirt:!0},{r:470,base:26,amp:14,f0:6,f1:11,aer:.1,skirt:!0},{r:585,base:50,amp:52,f0:3.1,f1:6.2,aer:.12},{r:760,base:62,amp:96,f0:2.1,f1:4.6,aer:.24},{r:990,base:84,amp:128,f0:1.5,f1:3.3,aer:.42},{r:1240,base:88,amp:96,f0:1.1,f1:2.4,aer:.6}],rolling:[{r:428,base:-22,amp:0,f0:6,f1:11,aer:.1,skirt:!0},{r:470,base:22,amp:12,f0:6,f1:11,aer:.1,skirt:!0},{r:600,base:32,amp:38,f0:3,f1:6.4,aer:.12},{r:800,base:45,amp:72,f0:2,f1:4.4,aer:.32},{r:1050,base:60,amp:112,f0:1.4,f1:3.1,aer:.54},{r:1330,base:72,amp:120,f0:1,f1:2.2,aer:.72}],escarpment:[{r:428,base:-22,amp:0,f0:6,f1:11,aer:.1,skirt:!0},{r:470,base:24,amp:12,f0:6,f1:11,aer:.1,skirt:!0},{r:600,base:36,amp:44,f0:2.8,f1:6,aer:.14},{r:800,base:50,amp:82,f0:2,f1:4.4,aer:.34},{r:1050,base:66,amp:116,f0:1.4,f1:3.1,aer:.54},{r:1330,base:76,amp:106,f0:1,f1:2.2,aer:.7}],alpine:[{r:428,base:-22,amp:0,f0:6,f1:11,aer:.1,skirt:!0},{r:470,base:26,amp:14,f0:6,f1:11,aer:.1,skirt:!0},{r:585,base:50,amp:52,f0:3.1,f1:6.2,aer:.1},{r:650,base:52,amp:64,f0:2.8,f1:5.7,aer:.14},{r:720,base:56,amp:76,f0:2.6,f1:5.2,aer:.18},{r:870,base:66,amp:102,f0:1.9,f1:4,aer:.3},{r:940,base:74,amp:114,f0:1.7,f1:3.6,aer:.36},{r:1040,base:82,amp:128,f0:1.5,f1:3.3,aer:.44},{r:1240,base:88,amp:100,f0:1.1,f1:2.4,aer:.6}]},O=D[o]||D.default,k=520*O.length,A=new Float32Array(k*3),j=new Float32Array(k),N=1,P=O.length===9?[-34,22,95,150,200,340,430,540,800]:O.length===7?[-34,22,95,200,340,540,800]:[-34,22,95,280,520,800];for(let e=0;e<O.length;e++){let t=O[e];for(let n=0;n<520;n++){let r=n/520*Math.PI*2,i=512/Math.max(Math.abs(Math.cos(r)),Math.abs(Math.sin(r))),a=Math.max(t.r,i+(P[e]??300))*(1+.03*T.noise(Math.cos(r)*4+e*13,Math.sin(r)*4-e*7)),o;o=t.skirt?t.base+(T.noise(Math.cos(r)*t.f0,Math.sin(r)*t.f0)*.5+.5)*t.amp:c(r,T,t),o*=u;let s=e*520+n;j[s]=o,!t.skirt&&o>N&&(N=o),A[s*3]=Math.cos(r)*a,A[s*3+1]=o,A[s*3+2]=Math.sin(r)*a}if(o===`alpine`&&!t.skirt){let n=e*520;le(j,n,520,t,u);for(let e=0;e<520;e++)A[(n+e)*3+1]=j[n+e]}}let F=O,I=A,ee=j;if(o===`alpine`){let e=[],t=[],n=[],r=(r,i)=>{e.push(r);for(let e=0;e<520;e++){let r=i+e;t.push(A[r*3],A[r*3+1],A[r*3+2]),n.push(j[r])}};for(let i=0;i<O.length;i++){if(r(O[i],i*520),i>=O.length-1||O[i].skirt||O[i+1].skirt)continue;let a=O[i],o=O[i+1];for(let r=1;r<=2;r++){let s=r/3;e.push({r:a.r+(o.r-a.r)*s,base:a.base+(o.base-a.base)*s,amp:a.amp+(o.amp-a.amp)*s,f0:a.f0,f1:a.f1,aer:a.aer+(o.aer-a.aer)*s});let c=6.5+r*2.3;for(let e=0;e<520;e++){let a=e/520*Math.PI*2,o=i*520+e,l=(i+1)*520+e,u=j[o],d=j[l],f=(T.noise(Math.cos(a)*c+i*23.7+r*17.1,Math.sin(a)*c-i*11.3+r*7.7)*.72+T.noise(Math.cos(a)*14+r*41+i*3,Math.sin(a)*14-r*23)*.28)*(Math.abs(d-u)*.16+7),p=1+.011*T.noise(Math.cos(a)*9-r*13+i*5,Math.sin(a)*9+r*29);t.push((A[o*3]+(A[l*3]-A[o*3])*s)*p,u+(d-u)*s+f,(A[o*3+2]+(A[l*3+2]-A[o*3+2])*s)*p),n.push(u+(d-u)*s+f)}}}F=e,I=new Float32Array(t),ee=new Float32Array(n)}let L=520*F.length,R=new Float32Array(L*3),te=new Float32Array(L*2);for(let e=0;e<F.length;e++)for(let t=0;t<520;t++){let n=e*520+t;te[n*2]=t/520*10,te[n*2+1]=H(ee[n]/N,0,1)}let z=((n&&n.sky&&n.sky.sunAzimuthDeg)??115)*Math.PI/180,ne=((n&&n.sky&&n.sky.sunElevationDeg)??32)*Math.PI/180,re=Math.sin(z)*Math.cos(ne),ie=Math.sin(ne),ae=Math.cos(z)*Math.cos(ne),B=new Float32Array(ee);for(let e=0;e<3;e++)for(let e=0;e<F.length;e++){let t=B.slice(e*520,e*520+520);for(let n=0;n<520;n++)B[e*520+n]=t[(n-1+520)%520]*.27+t[n]*.46+t[(n+1)%520]*.27}let pe=new Float32Array(L),W=new Float32Array(L),G=new Float32Array(L);for(let e=0;e<F.length;e++){let t=F[e];for(let n=0;n<520;n++){let r=e*520+n,i=B[e*520+(n-1+520)%520],a=(B[e*520+(n+1)%520]-i)/(2*Math.PI*t.r/520*2),o=e>0?B[(e-1)*520+n]:B[r],s=((e<F.length-1?B[(e+1)*520+n]:B[r])-o)/((e<F.length-1?F[e+1].r:t.r)-(e>0?F[e-1].r:t.r)||1);pe[r]=H(Math.hypot(a,s*2.2)*1.6,0,1),W[r]=a,G[r]=s*2.2}}for(let e=0;e<5;e++)for(let e=0;e<F.length;e++){let t=pe.slice(e*520,e*520+520),n=W.slice(e*520,e*520+520),r=G.slice(e*520,e*520+520);for(let i=0;i<520;i++){let a=(i-1+520)%520,o=(i+1)%520;pe[e*520+i]=t[a]*.27+t[i]*.46+t[o]*.27,W[e*520+i]=n[a]*.27+n[i]*.46+n[o]*.27,G[e*520+i]=r[a]*.27+r[i]*.46+r[o]*.27}}let K=new l,q=new l;for(let e=0;e<F.length;e++){let t=F[e];for(let n=0;n<520;n++){let r=n/520*Math.PI*2,i=e*520+n,a=H(ee[i]/N,0,1),s=pe[i];K.copy(h),K.multiplyScalar(.82+a*.34);let c=U(.34,.8,s)*(t.skirt?.25:w);if(K.lerp(v,c),S>0){let t=E.noise(Math.cos(r)*7+3+a*3.1,Math.sin(r)*7+e-a*2.4)*.5+.5,n=(1-U(S*.55,S,a))*(1-s*.4)*(.5+.5*t);K.lerp(b,H(n,0,1)*.6)}if(C>.001){let e=U(.3,.7,s);q.setRGB(K.r*1.08,K.g*.89,K.b*.75),K.lerp(q,e*.4)}if(x<=1){let e=U(x,x+.16,a+E.noise(Math.cos(r)*6-9,Math.sin(r)*6+4)*.07),t=1-U(.38,.78,s),n=U(.52,.8,a),i=Math.min(1,t+n*.9);K.lerp(y,H(e*.95+(1-e)*.38,0,1)*i)}{let e=W[i]*Math.sin(r)-G[i]*Math.cos(r),n=-W[i]*Math.cos(r)-G[i]*Math.sin(r),a=1/Math.hypot(e,1,n),s=(e*re+ie+n*ae)*a,c=t.skirt?.08:o===`alpine`?.1:o===`mesa`?.34:.26,l=Math.max(s,0),u=Math.max(-s,0);K.multiplyScalar(1-c*.85+c*1.6*l),K.lerp(q.setRGB(K.r*1.05,K.g*1,K.b*.92),l*.3),K.lerp(q.setRGB(K.r*.88,K.g*.93,K.b*1.08),u*.35)}let l=E.noise(Math.cos(r)*5.5+e*.7+a*2.6,Math.sin(r)*5.5-e*.4-a*1.9);K.multiplyScalar(1+l*.045*m);let u=t.aer*f+(1-a)*.07;t.skirt&&(u=t.aer*f),K.lerp(g,H(u,0,.94)),R[i*3]=K.r,R[i*3+1]=K.g,R[i*3+2]=K.b}}if(globalThis.__HORIZON_DEBUG){let e=[[1,.4,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1]];for(let t=0;t<F.length;t++){let n=e[t%e.length];for(let e=0;e<520;e++){let r=t*520+e;R[r*3]=n[0],R[r*3+1]=n[1],R[r*3+2]=n[2]}}}let J=[];for(let e=0;e<F.length-1;e++)for(let t=0;t<520;t++){let n=(t+1)%520,r=e*520+t,i=e*520+n,a=(e+1)*520+t,o=(e+1)*520+n;J.push(r,a,i,i,a,o)}let Y=new s;if(Y.setAttribute(`position`,new d(I,3)),Y.setAttribute(`color`,new d(R,3)),Y.setAttribute(`uv`,new d(te,2)),Y.setIndex(J),Y.computeVertexNormals(),o===`alpine`){let e=Y.attributes.normal;for(let t=0;t<F.length;t++)for(let n=0;n<520;n++){let r=t*520+n,i=n/520*Math.PI*2,a=W[r]*Math.sin(i)-G[r]*Math.cos(i),o=-W[r]*Math.cos(i)-G[r]*Math.sin(i),s=1/Math.hypot(a,1,o);e.setXYZ(r,a*s,s,o*s)}}let me=new _({vertexColors:!0,side:2,map:ue(E,{banding:C,snowline:x,treeline:S,grainAmp:m,gullyAmp:o===`alpine`?.06:o===`mesa`?.14:0,coolRock:o===`alpine`})});me.color.setRGB(1.61,1.61,1.61),o===`alpine`&&me.color.setRGB(1.26,1.26,1.26);{let t=de(V((r^3383^oe(a))>>>0)),n=o===`alpine`?.4:0,i=+(o===`alpine`),s=+(o===`alpine`),c=+(o===`mesa`);me.onBeforeCompile=r=>{r.uniforms.uDetail2={value:t},r.uniforms.uSunDirW={value:new e(re,ie,ae)},r.uniforms.uFragRel={value:n},r.uniforms.uSlopeSplat={value:i},r.uniforms.uMaxH={value:N*1},r.uniforms.uWallFix={value:s},r.uniforms.uCapFix={value:c},r.vertexShader=r.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vHNrm;
varying vec3 vHPos;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vHNrm = normal;
vHPos = position;`),r.fragmentShader=`uniform sampler2D uDetail2;
uniform vec3 uSunDirW;
uniform float uFragRel;
uniform float uSlopeSplat;
uniform float uMaxH;
uniform float uWallFix;
uniform float uCapFix;
varying vec3 vHNrm;
varying vec3 vHPos;
`+r.fragmentShader.replace(`#include <map_fragment>`,`#include <map_fragment>
        {
          vec3 hnW0 = normalize(vHNrm);
          float steepF0 = smoothstep(0.30, 0.60, 1.0 - hnW0.y) * uWallFix;
          float capF0 = smoothstep(0.84, 0.96, hnW0.y) * uCapFix;
          float fixW = max(steepF0, capF0);
          if (fixW > 0.004) {
            // broad smear-free base tone: the same texel at a deep mip
            vec3 mapSmooth = texture2D(map, vMapUv, 4.0).rgb;
            // triplanar world-anchored mottle, two feature scales
            vec3 awF = abs(hnW0);
            awF /= (awF.x + awF.y + awF.z);
            float wA = texture2D(uDetail2, vHPos.zy * 0.0052 + vec2(0.11, 0.71)).r * awF.x
                     + texture2D(uDetail2, vHPos.xy * 0.0052 + vec2(0.53, 0.29)).r * awF.z
                     + texture2D(uDetail2, vHPos.xz * 0.0052).r * awF.y;
            float wB = texture2D(uDetail2, vHPos.zy * 0.0175 + vec2(0.67, 0.13)).r * awF.x
                     + texture2D(uDetail2, vHPos.xy * 0.0175 + vec2(0.23, 0.87)).r * awF.z
                     + texture2D(uDetail2, vHPos.xz * 0.0175 + vec2(0.37, 0.61)).r * awF.y;
            vec3 fixCol = mapSmooth * (1.0 + (wA - 0.5) * 0.46 + (wB - 0.5) * 0.34);
            diffuseColor.rgb = diffuseColor.rgb / max(texture2D(map, vMapUv).rgb, vec3(1e-3))
              * mix(texture2D(map, vMapUv).rgb, fixCol, fixW * 0.85);
          }
          float dA = texture2D(uDetail2, vMapUv * vec2(64.0, 26.0)).r - 0.5;
          float dB = texture2D(uDetail2, vMapUv * vec2(17.0, 7.0) + vec2(0.37, 0.11)).r - 0.5;
          // amplitudes sized to SURVIVE the baked haze lerp + scene fog: the
          // wall multiplies this onto an already fog-flattened vertex color,
          // so ±0.1 authored contrast reads as ~±0.04 on screen (still-flat
          // first cut). ±0.29 lands at the crown-mottle read real hills give.
          // r7: the vMapUv-based overlay is itself u-degenerate on grazed
          // walls — fade it where the triplanar fix takes over.
          diffuseColor.rgb *= 1.0 + (dA * 0.28 + dB * 0.30) * (1.0 - fixW * 0.8);
          if (uSlopeSplat > 0.001) {
            vec3 hn = normalize(vHNrm);
            float slopeF = 1.0 - clamp(hn.y, 0.0, 1.0);
            // aerial attenuation: the outer ranges stay fog-flattened
            float farAtt = 1.0 - smoothstep(700.0, 1400.0, length(vHPos.xz)) * 0.62;
            // r6 (content_breadth) TRIPLANAR boundary noise. The old fields
            // sampled vHPos.xz only — constant straight DOWN a steep face, so
            // the rock/snow mix varied laterally but never vertically and the
            // whole wall broke into full-height light/dark runnels (the
            // critique's "rain streaks" on the winter massif). Blend the
            // horizontal-plane sample with the two vertical-plane projections
            // by the smooth normal, exactly like the terrain-side steep-slope
            // splat: steep faces now sample laterally-AND-vertically and the
            // boundary breaks into patches down the face. A third ~45 m field
            // (nD) adds the within-face patch scale the two broad fields lack.
            vec3 awT = abs(hn);
            awT /= (awT.x + awT.y + awT.z);
            #define HTRIP(s, o) (texture2D(uDetail2, vHPos.xz * (s) + (o)).r * awT.y               + texture2D(uDetail2, vHPos.zy * (s) + (o) + vec2(0.41, 0.07)).r * awT.x               + texture2D(uDetail2, vHPos.xy * (s) + (o) + vec2(0.13, 0.61)).r * awT.z)
            float nB = HTRIP(0.0016, vec2(0.0)) - 0.5;
            float nC = HTRIP(0.0071, vec2(0.29, 0.53)) - 0.5;
            float nD = HTRIP(0.0230, vec2(0.71, 0.19)) - 0.5;
            float hT = clamp(vHPos.y / max(uMaxH, 1.0), 0.0, 1.0);
            // rock exposure on steep faces; the highest crests hold snow
            float rockW = smoothstep(0.30, 0.58, slopeF + nB * 0.34 + nC * 0.20 + nD * 0.14)
                        * (1.0 - smoothstep(0.55, 0.85, hT) * 0.70) * uSlopeSplat * farAtt;
            vec3 rockCol = diffuseColor.rgb * vec3(0.47, 0.50, 0.58);
            // constant-altitude strata relief on the exposed rock
            float bedR = sin(vHPos.y * 0.42 + nB * 9.0) * 0.6
                       + sin(vHPos.y * 0.13 + nC * 5.0) * 0.4;
            rockCol *= 1.0 + bedR * 0.16;
            diffuseColor.rgb = mix(diffuseColor.rgb, rockCol, rockW * 0.85);
            // per-fragment N·L relight (smooth normals -> no planar facets)
            float ndl = dot(hn, uSunDirW);
            float rel = uFragRel * farAtt;
            diffuseColor.rgb *= 1.0 - rel * 0.85 + rel * 1.6 * max(ndl, 0.0);
            diffuseColor.rgb = mix(diffuseColor.rgb,
              diffuseColor.rgb * vec3(0.90, 0.94, 1.07), max(-ndl, 0.0) * 0.32 * farAtt);
          }
        }`)},me.customProgramCacheKey=()=>`horizon-ring-r7te-`+o}let X=new p(Y,me);if(X.name=`horizon-ring`,X.castShadow=!1,X.receiveShadow=!1,X.matrixAutoUpdate=!1,X.userData.aoExclude=!0,S>0){let e=fe(V((r^24301^oe(a))>>>0)),t=[2,3,4,5],n=S*N,i=[],o=[],c=[],l=[],u=0,f=[];for(let e of t)f.push([e,0],[e,1]);for(let[e,t]of f){let r=F[e],a=Math.max(8,Math.round(Math.PI*2*r.r/56));for(let s=0;s<=520;s++){let l=s%520,u=e*520+l,d=I[u*3],f=I[u*3+1],p=I[u*3+2],m=1-U(n*.8,n*1.12,f),h=l/520*Math.PI*2,_=E.noise(Math.cos(h)*5.3+e*9+t*3.7,Math.sin(h)*5.3-e*5-t*2.9)*.5+.5,v=E.noise(Math.cos(h)*19.7+e*3.1+t*7.3,Math.sin(h)*19.7+e*11.9)*.5+.5,y=(5+(8+_*12)*(.85+r.r/2600))*m*(t?.85:1)*(.72+v*.56),b=t?1.004:.995,x=t?5+y*.4:5;i.push(d*b,f-x,p*b,d*b,f-x+y,p*b);let S=Math.min(.92,r.aer*.66+(t?.28:.16)),C=Math.min(1.9,R[u*3]*(t?1.8:2.1)),w=Math.min(1.9,R[u*3+1]*(t?1.8:2.1)),T=Math.min(1.9,R[u*3+2]*(t?1.8:2.1));C+=(g.r-C)*S,w+=(g.g-w)*S,T+=(g.b-T)*S,o.push(C,w,T,C,w,T);let D=s/520*a+(t?.5:0);c.push(D,0,D,1)}for(let e=0;e<520;e++){let t=u+e*2,n=t+1,r=t+2,i=r+1;l.push(t,r,n,n,r,i)}u+=521*2}for(let[e,t,r]of[[1,2,.28],[1,2,.6],[1,2,.86],[2,3,.3],[2,3,.58],[2,3,.84],[3,4,.4],[3,4,.74]]){let a=F[e],s=F[t],d=a.r+(s.r-a.r)*r,f=a.aer+(s.aer-a.aer)*r,p=Math.max(8,Math.round(Math.PI*2*d/56));for(let a=0;a<=520;a++){let s=a%520,l=e*520+s,u=t*520+s,m=I[l*3]+(I[u*3]-I[l*3])*r,h=I[l*3+1]+(I[u*3+1]-I[l*3+1])*r,_=I[l*3+2]+(I[u*3+2]-I[l*3+2])*r,v=1-U(n*.8,n*1.12,h),y=s/520*Math.PI*2,b=E.noise(Math.cos(y)*5.3+e*7+r*17,Math.sin(y)*5.3-t*5-r*11)*.5+.5,x=U(.34,.58,E.noise(Math.cos(y)*2.1+e*13+r*29,Math.sin(y)*2.1-t*9+r*41)*.5+.5),S=(5+(8+b*12)*(.85+d/2600))*v*.9*x;h+=E.noise(Math.cos(y)*3.7-e*5+r*7,Math.sin(y)*3.7+t*3-r*13)*S*.4,i.push(m,h-S*.35,_,m,h+S*.65,_);let C=Math.min(.9,f*.5+.1),w=Math.min(1.9,(R[l*3]+(R[u*3]-R[l*3])*r)*2),T=Math.min(1.9,(R[l*3+1]+(R[u*3+1]-R[l*3+1])*r)*2),D=Math.min(1.9,(R[l*3+2]+(R[u*3+2]-R[l*3+2])*r)*2);w+=(g.r-w)*C,T+=(g.g-T)*C,D+=(g.b-D)*C,o.push(w,T,D,w,T,D);let O=a/520*p+r*.71;c.push(O,0,O,.5)}for(let e=0;e<520;e++){let t=u+e*2,n=t+1,r=t+2,i=r+1;l.push(t,r,n,n,r,i)}u+=521*2}let m=new s;m.setAttribute(`position`,new d(new Float32Array(i),3)),m.setAttribute(`color`,new d(new Float32Array(o),3)),m.setAttribute(`uv`,new d(new Float32Array(c),2)),m.setIndex(l);let h=new p(m,new _({map:e,vertexColors:!0,alphaTest:.45,alphaToCoverage:!0,side:2}));h.name=`horizon-treeline`,h.castShadow=!1,h.receiveShadow=!1,h.matrixAutoUpdate=!1,h.userData.aoExclude=!0,X.add(h)}return X}function W(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var G=512,K=1024;function q(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}function J(e,t,n){return e<t?t:e>n?n:e}function Y(){let e=[];for(let t=-512;t<=G;t+=32)e.push([10+26*Math.sin(t*.0062)+8*Math.sin(t*.017+2.1),t]);let t=[];for(let e=-512;e<=G;e+=32)t.push([e,46+34*Math.sin(e*.0043+1)+7*Math.sin(e*.013-.6)]);return[e,t]}function me(e){let t=[],n=e.jitter??2.5,r=e=>typeof e==`number`?{at:e,lo:-512,hi:G}:{at:e.at,lo:e.lo??-512,hi:e.hi??G};for(let i=0;i<e.xs.length;i++){let{at:a,lo:o,hi:s}=r(e.xs[i]),c=[];for(let e=o;e<=s;e+=32)c.push([a+Math.sin(e*.011+i*2.3)*n,e]);t.push(c)}for(let i=0;i<e.zs.length;i++){let{at:a,lo:o,hi:s}=r(e.zs[i]),c=[];for(let e=o;e<=s;e+=32)c.push([e,a+Math.sin(e*.011+i*1.7)*n]);t.push(c)}return t}function X(e){let t=[];for(let n of e||[]){if(!Array.isArray(n)||n.length<2)continue;let e=[];for(let t=0;t<n.length-1;t++){let[r,i]=n[t],[a,o]=n[t+1],s=Math.max(1,Math.ceil(Math.hypot(a-r,o-i)/32));for(let t=0;t<s;t++){let n=t/s;e.push([r+(a-r)*n,i+(o-i)*n])}}e.push([...n[n.length-1]]),t.push(e)}return t}var he={hillScale:1,microScale:1,rimH:24,village:{x0:-60,x1:80,z0:-40,z1:120,cx:10,cz:40,feather:42,flatten:.85},marshes:[{x:220,z:-140,r:38},{x:-190,z:-210,r:48},{x:-330,z:330,r:30}],lakes:[],frozenMarshes:!1,dunes:null,mesas:null,landforms:[],roads:`country`},ge={player:{x:14,z:-78},enemies:[{x:-30,z:320},{x:140,z:350},{x:265,z:235},{x:-215,z:270},{x:-330,z:140},{x:330,z:130},{x:15,z:430}]};function _e(e){let t={...he,...e&&e.terrain?e.terrain:{}};t.landforms=(t.landforms||[]).map(e=>{let t=h.degToRad(e.yawDeg||0);return{...e,_c:Math.cos(t),_s:Math.sin(t)}});let n={...he.village,...t.village||{}},r=e&&e.spawns||ge,i={...r.player},a=r.enemies.map(e=>({...e})),o=0,s=0;for(let e of a)o+=e.x,s+=e.z;o/=a.length||1,s/=a.length||1,i.yaw=Math.atan2(o-i.x,s-i.z);for(let e of a)e.yaw=Math.atan2(i.x-e.x,i.z-e.z);let c;return t.roads===`country`||!t.roads?c=Y():(c=[],t.roads.grid&&c.push(...me(t.roads.grid)),t.roads.paths&&c.push(...X(t.roads.paths)),c.length===0&&(c=Y())),{village:n,marshes:(t.marshes||[]).map(e=>({dip:2.6,...e})),lakes:(t.lakes||[]).map(e=>({...e})),spawns:{player:i,enemies:a},roads:c,terrain:t}}function ve(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s,l=c>0?((e-n)*o+(t-r)*s)/c:0;l=J(l,0,1);let u=n+o*l-e,d=r+s*l-t;return{d:Math.sqrt(u*u+d*d),t:l}}function ye(e,t,n){let r=t-e.x,i=n-e.z,a=e._c??Math.cos(h.degToRad(e.yawDeg||0)),o=e._s??Math.sin(h.degToRad(e.yawDeg||0)),s=r*a+i*o,c=-r*o+i*a,l=e.height||0;if(e.kind===`ridge`){let t=Math.max(1,(e.length||100)*.5),n=Math.max(1,e.width||45),r=1-q(t*.72,t,Math.abs(s)),i=1-q(n*.22,n,Math.abs(c)),a=i*i*(3-2*i);return l*r*a}let u=Math.max(1,e.rx||e.r||70),d=Math.max(1,e.rz||e.r||u),f=1-q(.12,1,Math.sqrt(s*s/(u*u)+c*c/(d*d)));return l*f*f*(3-2*f)}function be(t=1337,n=null){let r=_e(n),i=r.terrain,a=r.village,o=r.marshes,s=r.lakes,c=r.spawns.player,l=r.spawns.enemies,u=new M({random:W((t^2654435769)>>>0)});function d(e,t){let n=u.noise(e*.0016+13.7,t*.0016-4.2)*80,r=u.noise(e*.0016-27.1,t*.0016+9.3)*80,i=1-Math.abs(u.noise((e+n)*.0026+51,(t+r)*.0026-33)),a=i*i*6.5,o=u.noise(e*.0038+101,t*.0038-71)*8.5,s=u.noise(e*.0079-11,t*.0079+177)*4.1,c=a+o+s;c+=u.noise(e*.0152+301,t*.0152+41)*1.9,c+=u.noise(e*.0313-222,t*.0313-97)*.85,c+=u.noise(e*.064+77,t*.064+13)*.35,c+=u.noise(e*.131-8,t*.131+259)*.14;let l=a*.5+o+s*.45;return{d:c,s:l}}let f=K/256,p=new Float32Array(257*257).fill(1e9),m=new Float32Array(257*257),h=new Int16Array(257*257),g=new Int16Array(257*257),_=new Float32Array(257*257),v=new Float32Array(257*257),y=r.roads,b=[c,...l].map(e=>[e.x,e.z,a.cx,a.cz]);for(let e=0;e<257;e++){let t=e*f-G;for(let n=0;n<257;n++){let r=n*f-G,i=e*257+n;for(let e=0;e<y.length;e++){let n=y[e];for(let a=0;a<n.length-1;a++){let{d:o,t:s}=ve(r,t,n[a][0],n[a][1],n[a+1][0],n[a+1][1]);o<p[i]&&(p[i]=o,h[i]=e,g[i]=a,_[i]=s)}}let a=0;for(let e of b){let{d:n}=ve(r,t,e[0],e[1],e[2],e[3]);a=Math.max(a,1-q(8,30,n))}v[i]=a}}function x(e,t,n){let r=J((t+G)/f,0,255.9999),i=J((n+G)/f,0,255.9999),a=r|0,o=i|0,s=r-a,c=i-o,l=o*257+a,u=e[l]+(e[l+1]-e[l])*s;return u+(e[l+257]+(e[l+257+1]-e[l+257])*s-u)*c}function S(e,t){let n=u.noise(e*9e-4+77,t*9e-4-31)*95;return u.noise((e+n)*.0014-310,(t-n*.8)*.0014+208)*.5+.5}let C=d(a.cx,a.cz).s;function w(e,t){let n=Math.max(a.x0-e,e-a.x1,0),r=Math.max(a.z0-t,t-a.z1,0);return(1-q(0,a.feather,Math.hypot(n,r)))*(a.flatten??.85)}let T=new Float64Array(8),E=[c,...l],D=new Float64Array(Math.max(1,s.length));function O(e,t,n,r,c=!0){e=J(e,-512,G),t=J(t,-512,G);let{d:l,s:f}=d(e,t),h=x(v,e,t),g=(l+(f-l)*(h*.72))*i.hillScale,_=w(e,t);_>0&&(g+=(C*i.hillScale+(f-C)*(a.relief??.1)-g)*_);let y=0;for(let n of o){let r=Math.hypot(e-n.x,t-n.z);if(r<n.r){let e=1-r/n.r;g-=n.dip*e*e*(3-2*e),y=Math.max(y,e)}}let b=1;if(i.dunes||i.mesas||i.landforms.length)for(let n=0;n<E.length;n++){let r=Math.hypot(e-E[n].x,t-E[n].z);r<90&&(b=Math.min(b,q(36,90,r)))}if(i.dunes){let n=1-Math.abs(u.noise(e*.0021+402,t*.0046+91)),r=1-Math.abs(u.noise((e-12.8)*.0021+402,(t-9.6)*.0046+91)),a=u.noise(e*.0064-55,t*.0064+233)*.5+.5,o=n*.62+r*.38,s=r*.65+n*.35,c=o*o*(3-2*o),l=J((c-s*s*(3-2*s))*2,-.28,.28),d=c*i.dunes.amp*(.7+a*.5)*(1+l*.55);d+=q(.55,.95,c)*u.noise(e*.041+17,t*.041-63)*.45*i.dunes.amp*.08,g+=d*(1-h*.7)*(1-_)*b}if(i.mesas){let n=S(e,t),r=i.mesas.thr1-i.mesas.thr0,a=i.mesas.wallWidth??.42,o=i.mesas.tierWidth??.045,s=q(i.mesas.thr0,i.mesas.thr0+r*a,n),c=q(i.mesas.thr1+.04,i.mesas.thr1+.04+o,n),l=i.mesas.tierScale??.45,d=.97+.03*u.noise(e*.012+31,t*.012-74),f=1-h*(1-(i.mesas.corridorFloor??0));g+=(s+c*l)*i.mesas.amp*d*f*(1-_)*(1-y)*b}for(let n=0;n<i.landforms.length;n++){let r=i.landforms[n],a=r.corridorScale??.62,o=r.settlementScale??.45,s=r.wetScale??.3,c=(1-h*(1-a))*(1-_*(1-o))*(1-y*(1-s));g+=ye(r,e,t)*b*c}{let n=u.noise(e*.0104+610,t*.0104-320),r=u.noise(e*.0233-105,t*.0233+77),a=1-Math.abs(n);a*=a;let o=q(.42,.92,a)*(2.1+r*.8)-q(.55,.92,r)*1.5;o*=(1-h*.55)*(1-_)*(1-y)*i.microScale,g+=o}{let n=u.noise(e*.143+88,t*.143-141),r=u.noise(e*.317-260,t*.317+33);g+=(n*.16+r*.07)*(1-_)*(1-y*.7)*i.microScale}let O=q(430,G,Math.max(Math.abs(e),Math.abs(t)));if(g+=O*O*i.rimH,c)for(let n=0;n<s.length;n++){let r=s[n],i=Math.hypot(e-r.x,t-r.z);if(i<r.r*1.32){let e=q(r.r*1.32,r.r*.94,i);g+=(D[n]-g)*e}}if(n)for(let n=0;n<E.length;n++){let r=Math.hypot(e-E[n].x,t-E[n].z);r<22&&(g+=(T[n]-g)*(1-q(9,22,r)))}if(r){let n=x(p,e,t);if(n<14&&(g+=(x(m,e,t)-g)*(1-q(3.8,14,n))),n>4&&n<22){let r=.5+.5*u.noise(e*.031+71,t*.031-44),i=Math.exp(-(((n-7)/1.9)**2))*.26*r,a=-Math.exp(-(((n-11.5)/2.4)**2))*.2*(1-r*.5);g+=(i+a)*(1-_)*(1-y)}}return g}let k=y.map(e=>e.map(([e,t])=>O(e,t,!1,!1)));for(let e of k)for(let t=0;t<4;t++){let t=e.slice();for(let n=1;n<e.length-1;n++)e[n]=t[n-1]*.25+t[n]*.5+t[n+1]*.25}for(let e=0;e<y.length;e++)for(let t=e+1;t<y.length;t++){let n=0,r=0,i=1e9;for(let a=0;a<y[e].length;a++)for(let o=0;o<y[t].length;o++){let s=Math.hypot(y[e][a][0]-y[t][o][0],y[e][a][1]-y[t][o][1]);s<i&&(i=s,n=a,r=o)}if(i>40)continue;let a=(k[e][n]+k[t][r])*.5;for(let i=-3;i<=3;i++){let o=(1-Math.abs(i)/4)*.85;k[e][n+i]!==void 0&&(k[e][n+i]+=(a-k[e][n+i])*o),k[t][r+i]!==void 0&&(k[t][r+i]+=(a-k[t][r+i])*o)}}for(let e=0;e<257*257;e++){let t=k[h[e]],n=g[e];m[e]=t[n]+(t[n+1]-t[n])*_[e]}for(let e=0;e<s.length;e++){let t=s[e],n=1/0;for(let e=0;e<12;e++){let r=O(t.x+Math.cos(e*.5236)*t.r*.95,t.z+Math.sin(e*.5236)*t.r*.95,!1,!1,!1);r<n&&(n=r)}D[e]=t.level??Math.min(n,O(t.x,t.z,!1,!1,!1))-(t.depth??1.4)}for(let e=0;e<E.length;e++)T[e]=O(E[e].x,E[e].z,!1,!0);let A=(e,t)=>O(e,t,!0,!0),j=1025,N=Math.ceil(K/32),P=new Float32Array(j*j),F=new Uint8Array(N*N);function I(e,t){let n=e*32,r=t*32,i=Math.min(K,n+32),a=Math.min(K,r+32);for(let e=r;e<=a;e++)for(let t=n;t<=i;t++)P[e*j+t]=O(t-G,e-G,!0,!0);F[t*N+e]=1}function ee(e,t){let n=J(e+G,0,K-1e-4),r=J(t+G,0,K-1e-4),i=n|0,a=r|0,o=i/32|0,s=a/32|0;F[s*N+o]||I(o,s);let c=n-i,l=r-a,u=a*j+i,d=P[u]+(P[u+1]-P[u])*c;return d+(P[u+j]+(P[u+j+1]-P[u+j])*c-d)*l}function*L(e){let t=new Set;for(let n of e||[]){if(!n)continue;let e=Math.max(0,Number(n.radiusM)||0),r=J(R(n.x)+G-e,0,K-1e-4),i=J(R(n.z)+G-e,0,K-1e-4),a=J(R(n.x)+G+e,0,K-1e-4),o=J(R(n.z)+G+e,0,K-1e-4),s=(r|0)/32|0,c=(i|0)/32|0,l=(a|0)/32|0,u=(o|0)/32|0;for(let e=c;e<=u;e++)for(let n=s;n<=l;n++)t.add(e*N+n)}for(let e of t){let t=e%N,n=e/N|0;F[e]||(I(t,n),yield e)}}function R(e){return Number.isFinite(e)?e:0}let te=new e,z=1.2;function ne(e,t){let n=A(e-z,t),r=A(e+z,t),i=A(e,t-z),a=A(e,t+z);return te.set(n-r,2*z,i-a).normalize()}function re(e,t){if(x(p,e,t)<4.3)return`hard`;for(let n of s)if(Math.hypot(e-n.x,t-n.z)<n.r*.95)return i.softLakes?`soft`:`hard`;for(let n of o){let r=Math.hypot(e-n.x,t-n.z);if(r<n.r&&1-r/n.r>.35)return i.frozenMarshes?`hard`:`soft`}return`medium`}function ie(e,t){if(i.frozenMarshes||!n?.splat?.seaLake)return 0;for(let n=0;n<s.length;n++){let r=s[n],i=Math.max(.001,r.r*.95),a=Math.hypot(e-r.x,t-r.z);if(a<i)return Math.max(0,Math.min(1,(i-a)/Math.max(2,i*.08)))}for(let n=0;n<o.length;n++){let r=o[n],i=Math.max(.001,r.r),a=1-Math.hypot(e-r.x,t-r.z)/i;if(a>.35)return Math.max(0,Math.min(1,(a-.35)/.12))}return 0}function ae(e,t){for(let n of s)if(Math.hypot(e-n.x,t-n.z)<n.r*1.04)return!0;for(let n of o)if(i.frozenMarshes&&Math.hypot(e-n.x,t-n.z)<n.r||i.clearMarshVeg&&Math.hypot(e-n.x,t-n.z)<n.r*.55)return!0;return!1}let B=1/0,V=-1/0;for(let e=0;e<=128;e++)for(let t=0;t<=128;t++){let n=A(t*8-G,e*8-G);n<B&&(B=n),n>V&&(V=n)}let H=i.mesas?(e,t)=>{let n=S(e,t),r=i.mesas.thr1-i.mesas.thr0,a=q(i.mesas.thr0-r*.55,i.mesas.thr0+r*(i.mesas.wallWidth??.42),n),o=q(408,468,Math.max(Math.abs(e),Math.abs(t)));return Math.max(a,o)}:null;return{getHeightAt:A,getHeightAtFast:ee,warmFastTilesAround:L,getNormalAt:ne,getGroundType:re,getWaterMaskAt:ie,size:K,minY:B,maxY:V,_roadDist:(e,t)=>x(p,e,t),_villageMask:w,_noVeg:ae,_layout:r,_mesaW:H}}var xe=new l,Se={h:0,s:0,l:0};function Ce(e,t){if(!t)return e;for(let n=0;n<e.length;n+=4){xe.setRGB(e[n]/255,e[n+1]/255,e[n+2]/255),xe.getHSL(Se);let[r,i,a]=t(Se.h,Se.s,Se.l);xe.setHSL((r%1+1)%1,J(i,0,1),J(a,0,1)),e[n]=xe.r*255,e[n+1]=xe.g*255,e[n+2]=xe.b*255}return e}function Z(e,t,{srgb:n=!1,anisotropy:r=16,repeat:i=!0}={}){let o=document.createElement(`canvas`);o.width=o.height=t,o.getContext(`2d`).putImageData(new ImageData(e,t,t),0,0);let s=new g(o);return s.wrapS=s.wrapT=i?u:c,s.anisotropy=r,n&&(s.colorSpace=a),s}function we(t,n,r,i){let a=new Uint8ClampedArray(n*n*4),o=(e,r)=>t[(r+n)%n*n+(e+n)%n],s=new e;for(let e=0;e<n;e++)for(let t=0;t<n;t++){let i=o(t+1,e-1)+2*o(t+1,e)+o(t+1,e+1)-(o(t-1,e-1)+2*o(t-1,e)+o(t-1,e+1)),c=o(t-1,e+1)+2*o(t,e+1)+o(t+1,e+1)-(o(t-1,e-1)+2*o(t,e-1)+o(t+1,e-1));s.set(-i*r,-c*r,1).normalize();let l=(e*n+t)*4;a[l]=s.x*127.5+127.5,a[l+1]=s.y*127.5+127.5,a[l+2]=s.z*127.5+127.5,a[l+3]=255}return Z(a,n,{anisotropy:i})}function Q(e,t,n,r,i,a){let o=t*Math.PI*2*r,s=n*Math.PI*2*i,c=r*.55,l=i*.55;return e.noise4d(Math.cos(o)*c+a,Math.sin(o)*c-a*.7,Math.cos(s)*l+a*1.3,Math.sin(s)*l+a*.35)}var Te=null,Ee=256;function De(){if(Te)return Te;let e=Ee,t=new M({random:W(3011)}),n=new Float32Array(e*e),r=new Float32Array(e*e);for(let i=0;i<e;i++)for(let a=0;a<e;a++){let o=a/e,s=i/e,c=i*e+a;n[c]=Q(t,o,s,4,4,3)*.6+Q(t,o,s,9,9,27)*.4,r[c]=Q(t,o,s,2,2,55)*.7+Q(t,o,s,5,5,91)*.3}return Te={a:n,b:r},Te}function Oe(e,t,n){let r=Ee,i=t*r-.5,a=n*r-.5,o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s,u=r-1;o&=u,s&=u;let d=o+1&u,f=s+1&u,p=e[s*r+o],m=e[s*r+d],h=e[f*r+o],g=e[f*r+d];return p+(m-p)*c+(h-p)*l+(p-m-h+g)*c*l}function ke(e){return e-Math.floor(e)}function Ae(e,t,n=null){let r=De(),i=ke(e*9e-4+.53),a=ke(t*9e-4+.17),o=Oe(r.a,i,a),s=Oe(r.b,i,a),c=e+o*.5*48,l=t+s*.5*48,u=Oe(r.a,ke(c*.0117),ke(l*.0117)),d=Oe(r.b,ke(c*.0031+.41),ke(l*.0031+.13)),f=Oe(r.a,ke(c*.0121+.63),ke(l*.0121+.29))*.62+Oe(r.b,ke(c*.00779+.19),ke(l*.00779+.71))*.38,p=n||{};return p.n1=u*.5+.5,p.n2=d*.5+.5,p.mA=f*.5+.5,p}var $=new l;function je(e,t,n){return $.setHSL(e,t,n),$.getStyle()}function Me(e,t,n){for(let r of[-t,0,t])for(let i of[-t,0,t])e.save(),e.translate(r,i),n(),e.restore()}function Ne(e,t,n=null){let r=o(256),i=new M({random:W(e)}),a=W(e^32586),s=document.createElement(`canvas`);s.width=s.height=r;let c=s.getContext(`2d`),l=c.createImageData(r,r);for(let e=0;e<r;e++){let t=e/r;for(let n=0;n<r;n++){let a=n/r,o=(e*r+n)*4,s=Q(i,a,t,3,3,11)*.6+Q(i,a,t,7,7,23)*.4,c=Q(i,a,t,43,43,61)*.5+.5,u=s*.5+.5,d=q(.54,.88,u),f=q(.34,.1,u);$.setHSL(.192+s*.03-d*.075-f*.085,.245-d*.075-f*.1,.16+u*.07+c*.05-f*.015),l.data[o]=$.r*255,l.data[o+1]=$.g*255,l.data[o+2]=$.b*255,l.data[o+3]=255}}c.putImageData(l,0,0),c.lineCap=`round`;for(let e=0;e<3400;e++){let e=a()*r,t=a()*r,n=a()<.24,i=.16+a()*.17+(n?.12:0);c.strokeStyle=n?je(.1+a()*.035,.26+a()*.08,i):je(.175+a()*.075,.26+a()*.13,i),c.lineWidth=1.1+a()*1.4;let o=7+a()*12,s=a()*Math.PI*2,l=(a()-.5)*8;Me(c,r,()=>{c.beginPath(),c.moveTo(e,t),c.quadraticCurveTo(e+Math.cos(s)*o*.5-Math.sin(s)*l,t+Math.sin(s)*o*.5+Math.cos(s)*l,e+Math.cos(s)*o,t+Math.sin(s)*o),c.stroke()})}for(let e=0;e<420;e++){let e=a()*r,t=a()*r,n=1+a()*2;c.fillStyle=je(.26+a()*.05,.4,.2+a()*.16),Me(c,r,()=>{c.beginPath(),c.arc(e,t,n,0,Math.PI*2),c.fill()})}let u=c.getImageData(0,0,r,r),d=new Uint8ClampedArray(u.data),f=new Float32Array(r*r);for(let e=0;e<r*r;e++){let t=d[e*4+1]/255;f[e]=t,d[e*4+3]=J(.9-t*.1,.03,1)*255}return Ce(d,n),{albedo:Z(d,r,{srgb:!0,anisotropy:t}),normal:we(f,r,2.4,t)}}function Pe(e,t,n=null){let r=o(256),i=new M({random:W(e)}),a=W(e^11921),s=document.createElement(`canvas`);s.width=s.height=r;let c=s.getContext(`2d`),l=c.createImageData(r,r);for(let e=0;e<r;e++){let t=e/r;for(let n=0;n<r;n++){let a=n/r,o=(e*r+n)*4,s=Q(i,a,t,4,4,7)*.65+Q(i,a,t,9,9,31)*.35,c=Q(i,a,t,47,47,3)*.5+.5,u=s*.5+.5;$.setHSL(.077+s*.014,.25-c*.05,.16+u*.1+c*.045),l.data[o]=$.r*255,l.data[o+1]=$.g*255,l.data[o+2]=$.b*255,l.data[o+3]=255}}c.putImageData(l,0,0);for(let e=0;e<110;e++){let e=a()*r,t=a()*r,n=8+a()*22,i=n*(.5+a()*.7),o=a()*Math.PI,s=a()<.5;c.globalAlpha=.14+a()*.14,c.fillStyle=je(.075+a()*.015,.24,s?.12:.3),Me(c,r,()=>{c.beginPath(),c.ellipse(e,t,n,i,o,0,Math.PI*2),c.fill()})}c.globalAlpha=1,c.lineCap=`round`;for(let e=0;e<26;e++){let e=a()*r,t=a()*r,n=a()*Math.PI*2;c.strokeStyle=je(.07,.25,.075+a()*.035),c.lineWidth=.9+a()*1.2;let i=4+a()*5|0,o=[e],s=[t];for(let r=0;r<i;r++)n+=(a()-.5)*1.2,e+=Math.cos(n)*(7+a()*12),t+=Math.sin(n)*(7+a()*12),o.push(e),s.push(t);Me(c,r,()=>{c.beginPath(),c.moveTo(o[0],s[0]);for(let e=1;e<o.length;e++)c.lineTo(o[e],s[e]);c.stroke()})}for(let e=0;e<640;e++){let e=a()*r,t=a()*r,n=.8+a()**1.8*3.2,i=.2+a()*.2,o=je(.075,.2,.08),s=je(.075+a()*.02,.1+a()*.12,i);Me(c,r,()=>{c.beginPath(),c.arc(e+n*.4,t+n*.5,n,0,Math.PI*2),c.fillStyle=o,c.fill(),c.beginPath(),c.arc(e,t,n,0,Math.PI*2),c.fillStyle=s,c.fill()})}let u=c.getImageData(0,0,r,r),d=new Uint8ClampedArray(u.data),f=new Float32Array(r*r);for(let e=0;e<r*r;e++){let t=(d[e*4]*.45+d[e*4+1]*.4+d[e*4+2]*.15)/255;f[e]=t,d[e*4+3]=J(.98-t*.09,.03,1)*255}return Ce(d,n),{albedo:Z(d,r,{srgb:!0,anisotropy:t}),normal:we(f,r,3,t)}}function Fe(e,t){let n=o(256),r=new M({random:W(e)}),i=W(e^7397),a=document.createElement(`canvas`);a.width=a.height=n;let s=a.getContext(`2d`),c=s.createImageData(n,n);for(let e=0;e<n;e++){let t=e/n;for(let i=0;i<n;i++){let a=i/n,o=(e*n+i)*4,s=Q(r,a,t,2,2,9)*.6+Q(r,a,t,5,5,41)*.4,l=Q(r,a,t,11,11,77)*.5+.5,u=q(.45,.88,1-(s*.5+.5));$.setHSL(.535+s*.015,.055+u*.06,.37-u*.27+l*.03),c.data[o]=$.r*255,c.data[o+1]=$.g*255,c.data[o+2]=$.b*255,c.data[o+3]=255}}s.putImageData(c,0,0),s.lineCap=`round`;function l(e,t,r,a,o){let c=[e],u=[t];for(let n=0;n<a;n++)r+=(i()-.5)*.9,e+=Math.cos(r)*(14+i()*22),t+=Math.sin(r)*(14+i()*22),c.push(e),u.push(t);Me(s,n,()=>{s.strokeStyle=je(.58,.1,.36),s.lineWidth=o+2.2,s.globalAlpha=.4,s.beginPath(),s.moveTo(c[0],u[0]);for(let e=1;e<c.length;e++)s.lineTo(c[e],u[e]);s.stroke(),s.strokeStyle=je(.575,.05,.93),s.lineWidth=o,s.globalAlpha=.95,s.beginPath(),s.moveTo(c[0],u[0]);for(let e=1;e<c.length;e++)s.lineTo(c[e],u[e]);s.stroke(),s.globalAlpha=1}),a>3&&i()<.7&&l(c[2],u[2],r+(i()<.5?.9:-.9),a-2,o*.7)}for(let e=0;e<13;e++)l(i()*n,i()*n,i()*Math.PI*2,5+i()*4|0,2.2+i()*1.6);let u=.6;for(let e=0;e<60;e++){let e=i()*n,t=i()*n,r=30+i()*90,a=2+i()*7;s.globalAlpha=.1+i()*.22,s.strokeStyle=je(.58,.04,.88),s.lineWidth=a,Me(s,n,()=>{s.beginPath(),s.moveTo(e,t),s.quadraticCurveTo(e+Math.cos(u)*r*.5,t+Math.sin(u)*r*.5+(i()-.5)*8,e+Math.cos(u)*r,t+Math.sin(u)*r),s.stroke()})}s.globalAlpha=1;let d=s.getImageData(0,0,n,n),f=new Uint8ClampedArray(d.data),p=new Float32Array(n*n);for(let e=0;e<n*n;e++){let t=(f[e*4]*.3+f[e*4+1]*.45+f[e*4+2]*.25)/255;p[e]=t*.5+.25;let n=q(.72,.9,t);f[e*4+3]=J(.1+n*.72,.05,1)*255}return{albedo:Z(f,n,{srgb:!0,anisotropy:t}),normal:we(p,n,.8,t)}}function Ie(e,t,n=null){let r=o(256),i=new M({random:W(e)}),a=W(e^24225),s=document.createElement(`canvas`);s.width=s.height=r;let c=s.getContext(`2d`),l=c.createImageData(r,r);for(let e=0;e<r;e++){let t=e/r;for(let n=0;n<r;n++){let a=n/r,o=(e*r+n)*4,s=Q(i,a,t,2,3,19)*.6+Q(i,a,t,5,7,47)*.4,c=Q(i,a,t,23,23,83)*.5+.5,u=s*.5+.5,d=q(.6,.9,1-u);$.setHSL(.545-u*.035,.3+d*.1-c*.05,.135+u*.075-d*.05+c*.025),l.data[o]=$.r*255,l.data[o+1]=$.g*255,l.data[o+2]=$.b*255,l.data[o+3]=255}}c.putImageData(l,0,0);let u=.5;c.lineCap=`round`;for(let e=0;e<42;e++){let e=a()*r,t=a()*r,n=24+a()*70,i=1.2+a()*2.6;c.globalAlpha=.07+a()*.14,c.strokeStyle=je(.52,.1,.62+a()*.2),c.lineWidth=i,Me(c,r,()=>{c.beginPath(),c.moveTo(e,t),c.quadraticCurveTo(e+Math.cos(u)*n*.5,t+Math.sin(u)*n*.5+(a()-.5)*10,e+Math.cos(u)*n,t+Math.sin(u)*n),c.stroke()})}c.globalAlpha=1;let d=c.getImageData(0,0,r,r),f=new Uint8ClampedArray(d.data),p=new Float32Array(r*r);for(let e=0;e<r*r;e++){let t=(f[e*4]*.3+f[e*4+1]*.45+f[e*4+2]*.25)/255;p[e]=t*.6+.2;let n=q(.4,.62,t);f[e*4+3]=J(.08+n*.7,.05,1)*255}return Ce(f,n),{albedo:Z(f,r,{srgb:!0,anisotropy:t}),normal:we(p,r,1,t)}}function Le(e,t,n=null){let r=o(256),i=new M({random:W(e)}),a=W(e^23117),s=[];{let e=0;for(;e<r;){let t=a()<.16,n=t?4+a()*6:34+a()*76;s.push({y0:e,y1:e+n,marker:t,tone:a(),hueJ:a(),hard:a()}),e+=n}}function c(e){for(let t of s)if(e>=t.y0&&e<t.y1)return t;return s[s.length-1]}let l=new Uint8ClampedArray(r*r*4),u=new Float32Array(r*r);for(let e=0;e<r;e++)for(let t=0;t<r;t++){let n=t/r,a=e/r,o=e*r+t,s=o*4,d=Q(i,n,a,2,2,7)*2.2+Q(i,n,a,6,6,33)*.8,f=((e+d)%r+r)%r,p=c(f),m=(f-p.y0)/Math.max(1,p.y1-p.y0),h=1-J(Math.min(f-p.y0,p.y1-f)/3.2,0,1),g=Q(i,n,a,38,38,61)*.5+.5,_=Q(i,n,a,13,13,99)*.5+.5,v=Q(i,n,a*.15,3,1,145)*.5+.5,y=.062+p.hueJ*.022-.006*_,b=.33+p.hueJ*.08-g*.06,x=p.marker?.185+p.tone*.05:.315+p.tone*.2+(m-.5)*.03+g*.05+(v-.5)*.07;x*=1-h*.38,$.setHSL(y,J(b,0,1),J(x,.04,.75)),l[s]=$.r*255,l[s+1]=$.g*255,l[s+2]=$.b*255;let S=.4+p.hard*.42+g*.1-(p.marker?.26:0);S-=h*.3,u[o]=J(S,0,1),l[s+3]=J(.86-g*.06,.45,1)*255}return Ce(l,n),{albedo:Z(l,r,{srgb:!0,anisotropy:t}),normal:we(u,r,2.6,t)}}function Re(e,t,n,r=null,i=1){let a=o(256),s=new M({random:W(e)}),c=new Uint8ClampedArray(a*a*4),l=new Float32Array(a*a),u=2;for(let e=0;e<a;e++){let n=e/a;for(let r=0;r<a;r++){let o=r/a,d=e*a+r,f=d*4,p=.9,m=.5;if(t===`rock`){let e=Q(s,o,n,3,3,17)*.5+.5,t=1-Math.abs(Q(s,o,n,6,6,41)),r=1-Math.abs(Q(s,o,n,15,15,8)),i=q(.86,.985,t*.62+r*.38);m=.72-i*.62+(e-.5)*.34,$.setHSL(.082,.055+e*.035,(.4+e*.14)*(1-i*.45)),p=.76+i*.12-e*.06,u=3}else{let e=Q(s,o,n,3,3,29)*.5+.5,t=Q(s,o,n,42,42,13)*.5+.5,r=q(.56,.76,e);m=e*.55+t*.18-r*.28+.25,$.setHSL(.068,.27-r*.12,.145+(1-r)*.075+t*.028),p=.84-r*.1,u=1.5}m=J(m,0,1),l[d]=m;let h=.72+.28*m;c[f]=$.r*h*255,c[f+1]=$.g*h*255,c[f+2]=$.b*h*255,c[f+3]=J(p*i,.45,1)*255}}return Ce(c,r),{albedo:Z(c,a,{srgb:!0,anisotropy:n}),normal:we(l,a,u,n)}}function ze(e,n,r=null){let a=n.village,s=[...n.marshes,...n.lakes],l=o(512),u=l/K,d=null,p=K/256;if(r){d=new Float32Array(257*257);for(let e=0;e<257;e++)for(let t=0;t<257;t++)d[e*257+t]=J(r(t*p-G,e*p-G),0,1)}function m(e,t){let n=J((e+G)/p,0,255.9999),r=J((t+G)/p,0,255.9999),i=n|0,a=r|0,o=n-i,s=r-a,c=a*257+i,l=d[c]+(d[c+1]-d[c])*o;return l+(d[c+257]+(d[c+257+1]-d[c+257])*o-l)*s}let h=new Float32Array(l*l).fill(1e9);for(let e of n.roads)for(let t=0;t<e.length-1;t++){let[n,r]=e[t],[i,a]=e[t+1],o=J(Math.floor((Math.min(n,i)-14+G)*u),0,l-1),s=J(Math.ceil((Math.max(n,i)+14+G)*u),0,l-1),c=J(Math.floor((Math.min(r,a)-14+G)*u),0,l-1),d=J(Math.ceil((Math.max(r,a)+14+G)*u),0,l-1);for(let e=c;e<=d;e++)for(let t=o;t<=s;t++){let{d:o}=ve(t/u-G,e/u-G,n,r,i,a),s=e*l+t;o<h[s]&&(h[s]=o)}}let g=new Uint8ClampedArray(l*l*4);for(let t=0;t<l;t++){let n=t/u-G;for(let r=0;r<l;r++){let i=r/u-G,o=t*l+r,c=o*4,f=h[o];if(f<13){let t=e.noise(i*.055,n*.055)*.8+e.noise(i*.21,n*.21)*.35,r=e.noise(i*.011+41,n*.011-17)*1.5,a=1-q(3.3+t+r,4.4+t+r,f);a*=.34+.66*q(.25,.95,f+t*.12),g[c]=a*255;let o=.55+.45*(e.noise(i*.019-3,n*.019+8)*.5+.5),s=Math.exp(-(((f-1.55)/.55)**2));g[c+1]=s*a*245*o}let p=0;for(let t of s){let r=Math.hypot(i-t.x,n-t.z);if(r<t.r+24)if(t.depth!==void 0){let a=t.r*(1+.04*e.noise(i*.03+7,n*.03-3));p=Math.max(p,1-q(a*.8,a*.96,r))}else{let a=t.r*(1+.18*e.noise(i*.02+7,n*.02-3));p=Math.max(p,1-q(a*.45,a,r))}}g[c+2]=(d?m(i,n):p)*255;let _=Math.max(a.x0-i,i-a.x1,0),v=Math.max(a.z0-n,n-a.z1,0),y=1-q(0,26,Math.hypot(_,v));if(y>0){let t=.45+.55*(e.noise(i*.045-19,n*.045+8)*.5+.5);g[c+3]=y*t*.8*255}}}let _=new v(new Uint8Array(g.buffer),l,l,f);return _.flipY=!1,_.wrapS=_.wrapT=c,_.minFilter=t,_.magFilter=i,_.generateMipmaps=!0,_.anisotropy=4,_.needsUpdate=!0,_}function Be(e){let t=Ee,{a:n,b:r}=De(),i=new Uint8ClampedArray(t*t*4);for(let e=0;e<t*t;e++)i[e*4]=(n[e]*.5+.5)*255,i[e*4+1]=(r[e]*.5+.5)*255,i[e*4+2]=128,i[e*4+3]=255;return Z(i,t,{anisotropy:16})}function Ve(e,t,n){let r=e.replace(t,n);if(r===e)throw Error(`world/terrain: shader anchor missing: ${t}`);return r}var He=`
varying vec3 vWPos;
varying vec3 vWNormal;
uniform sampler2D uAlbG, uAlbD, uAlbR, uAlbM;
uniform sampler2D uNrmG, uNrmD, uNrmR, uNrmM;
uniform sampler2D uMask, uNoise;
uniform vec3 uTintA, uTintB, uTintC, uRoadTint;
uniform float uMarshGloss;
uniform float uMicroAmp, uStrata, uRoadTex, uTownWear, uIceDrift, uMidRelief, uFieldPatch;
uniform vec3 uRipple; // xy = wind dir, z = ripple normal amplitude
uniform float uSandMacro; // r3: desert macro variation (gravel basins / scour sheets)
uniform vec3 uIceSky;     // r3: fresnel sky tint reflected by clear lake ice
uniform float uMidFar;    // r3: far edge of the mid-relief dapple band (m)
uniform float uRockGate;  // r6: 1 = slope-rock takeover keyed to the mask-B landform weight (desert mesas)
uniform float uSea;       // maps r1: 1 = M layer is OPEN WATER (sea/river), 0 = legacy mud/ice
uniform float uSeaFoam;   // maps r1: surf/whitecap strength (0 disables)
uniform vec2 uSeaRamp;    // maps r1: fM band that ramps to open water (sea wide, river tight)
vec3 gSplatAlbedo; float gSplatRough; vec3 gSplatNrm; float gSplatFar; float gSplatSteepAtt;
float gSeaFoam; // maps r1: foam coverage this fragment (mattes the water gloss)
// r7 axis-triplanar wall basis (set in splatCompute): two FIXED world-axis
// projections + a pow-sharpened blend weight. The r6 tangent projection built
// its U axis from the interpolated normal — on undulating cliff walls that
// frame rotated per-fragment, dragging the sample coordinate back and forth
// across the face (the melted-taffy smear on the desert mesas).
vec2 gWallUVx; vec2 gWallUVz; float gWallW;
float gTileMix; // r8 anti-tiling: stochastic rotation-blend weight (set in splatCompute)
float gCliffJ;  // r8: per-cliff jitter field (set with the wall basis)
vec4 splatSamp(sampler2D t, vec2 uv, float df, float mb) {
  vec4 nearS = texture2D(t, uv, mb);
  if (df < 0.004) return nearS;
  // r5 terrain_environment: the far variant re-samples the SAME hand-painted
  // blade-stroke sheet at 0.2317x scale — its 7-12 px curved strokes became
  // half-meter Van Gogh brush swirls across the whole 45-160 m band (the
  // "painterly swirl" critique on the player_view midfield). A constant
  // +1.6 mip bias melts the stroke shapes into isotropic tonal breakup while
  // the macro clump variation the far variant exists for survives.
  vec4 farS = texture2D(t, uv * 0.2317 + vec2(0.5), mb + 1.6);
  // r8: past the mid ring, ease the far variant toward its tile MEAN (deep
  // mip). The 16x anisotropic sampler otherwise keeps the ~18 m repeat's
  // blade/clod features crisp to the horizon, where they resolve as periodic
  // stipple rows on bright sand/snow albedo (mb tracks farM: 0 inside 90 m,
  // 2 by 330 m -> mean weight 0..0.66).
  // r6: mean weight floor 0.18 -> 0.30 — the far variant's 2-6 m macro blobs
  // repeated on the 18 m tile grid as a visible mottled-blotch print across
  // the 50-150 m midground (critique); softer far contrast + the uncorrelated
  // octave in splatCompute carry that band instead
  farS = mix(farS, texture2D(t, uv * 0.2317 + vec2(0.5), 6.0), min(0.30 + mb * 0.33, 0.74));
  return mix(nearS, farS, df);
}
// r8 anti-tiling ground samplers: every ground layer tiles at ONE fixed world
// period (4.2 m near / 18 m far variant) — from the establishing camera the
// repeats compress into periodic stipple ROWS and the far variant's macro
// blobs stamp a hard-edged patchwork grid (worst on the winter snow set).
// Blend a second sampling of the SAME texture, rotated ~42 deg and rescaled
// x1.16 with an offset, masked by the warped ~10-20 m noise patches (n1w):
// no world-periodic feature survives more than ~one tile in any direction.
const mat2 TILEROT = mat2(0.7431, 0.6691, -0.6691, 0.7431);
vec4 groundSamp(sampler2D t, vec2 uv, float df, float mb) {
  vec4 sA = splatSamp(t, uv, df, mb);
  vec4 sB = splatSamp(t, TILEROT * uv * 1.16 + vec2(0.37, 0.61), df, mb);
  return mix(sA, sB, gTileMix);
}
// normal-map variant: the rotated sample's tangent-space xy must be counter-
// rotated back into the world frame or its bump lighting points 42 deg off
vec4 groundNrm(sampler2D t, vec2 uv, float df, float mb) {
  vec4 sA = splatSamp(t, uv, df, mb);
  vec4 sB = splatSamp(t, TILEROT * uv * 1.16 + vec2(0.37, 0.61), df, mb);
  vec2 nB = sB.xy * 2.0 - 1.0;
  sB.xy = vec2(0.7431 * nB.x + 0.6691 * nB.y, -0.6691 * nB.x + 0.7431 * nB.y) * 0.5 + 0.5;
  return mix(sA, sB, gTileMix);
}
vec4 wallSamp(sampler2D t, float sc, float df, float mb) {
  return mix(splatSamp(t, gWallUVx * sc, df, mb), splatSamp(t, gWallUVz * sc, df, mb), gWallW);
}
vec3 wallTex(sampler2D t, float sc) {
  return mix(texture2D(t, gWallUVx * sc).xyz, texture2D(t, gWallUVz * sc).xyz, gWallW);
}
float wallNoiseG(float sc, vec2 off) {
  return mix(texture2D(uNoise, gWallUVx * sc + off).g, texture2D(uNoise, gWallUVz * sc + off).g, gWallW);
}
void splatCompute() {
  vec3 wp = vWPos;
  vec3 wn = normalize(vWNormal);
  vec2 mUV = (wp.xz + 512.0) * (1.0 / 1024.0);
  vec4 mk = texture2D(uMask, mUV);
  // r6 terrain_environment: on landform-gated maps (desert) the mask B
  // channel carries the MESA/RIM weight instead of marsh/ice — decode it and
  // zero the marsh weight so none of the wet/ice paths fire on sand.
  float mkB = mk.b;
  float rockGate = 1.0;
  if (uRockGate > 0.5) {
    rockGate = smoothstep(0.10, 0.45, mkB);
    mkB = 0.0;
  }
  float camDist = distance(wp, cameraPosition);
  // FOV-aware detail distance: meters-per-pixel footprint normalized to the
  // 60-deg/1080p arcade view, so x8 sniper zoom re-resolves near-scale
  // detail instead of magnifying the blurred far variant (hud_ui r2).
  // min() keeps wide establishing shots byte-identical (footprint >= camDist
  // there); only narrow-FOV (zoomed) frames take the shorter effective
  // distance.
  float effDist = min(camDist, length(fwidth(wp.xz)) * 935.0);
  float df = smoothstep(45.0, 160.0, effDist);
  float farM = smoothstep(90.0, 330.0, effDist);
  // detail fade: positive mip bias at range kills the single-frequency
  // speckle shimmer that anisotropic filtering keeps resolving
  float mipB = farM * 2.0;
  vec2 uv = wp.xz;
  float n1 = texture2D(uNoise, uv * 0.0117).r;
  float n1h = texture2D(uNoise, uv * 0.047).r; // high-freq edge breaker
  float n2 = texture2D(uNoise, uv * 0.0031 + vec2(0.41, 0.13)).g;
  // r6 DOMAIN WARP for every macro-variation threshold below: thresholding
  // the bilinear-filtered 256px noise texture directly bakes axis-aligned
  // staircase borders into the dirt/meadow patches (the checkerboard blotch
  // artifact at 10-40 m). Warping the sample coordinates by a smooth low-
  // frequency vector field makes every patch border organic. CPU twin:
  // sampleSplatNoise in this file MUST keep the same warp so vegetation
  // thinning stays aligned with the visible dirt.
  vec2 wOff = (texture2D(uNoise, uv * 0.0009 + vec2(0.53, 0.17)).rg - 0.5) * 48.0;
  vec2 uvW = uv + wOff;
  float n1w = texture2D(uNoise, uvW * 0.0117).r;
  float n2w = texture2D(uNoise, uvW * 0.0031 + vec2(0.41, 0.13)).g;
  // r8: rotation-blend mask for the anti-tiling ground samplers — the warped
  // ~10-20 m n1w patches are aperiodic at exactly the scale the detail tiles
  // repeat, so neither sampling's period can line up across more than a tile
  gTileMix = smoothstep(0.36, 0.64, n1w);
  float slope = 1.0 - clamp(wn.y, 0.0, 1.0);
  // distance-attenuated edge breaker: full crispness near the camera, eased
  // toward its mean at range so the road blend never shows dither stipple
  // at 50-100 m
  float n1hs = mix(n1h, 0.5, farM * 0.85);
  // road masks: crisp noise-broken compacted core + wider soft dirt shoulder
  float roadCore = smoothstep(0.38, 0.70, mk.r + (n1hs - 0.5) * 0.30);
  float shoulder = smoothstep(0.04, 0.60, mk.r + (n1hs - 0.5) * 0.20);
  float rut = mk.g * (0.62 + 0.38 * n1hs);
  // r7: the road mask is an XZ projection — where a road runs along a mesa
  // rim it painted its compacted-earth tint DOWN the cliff face below as a
  // vertical light streak; no road holds on a >30-deg face
  {
    float notCliff = 1.0 - smoothstep(0.28, 0.45, slope);
    roadCore *= notCliff; shoulder *= notCliff; rut *= notCliff;
  }
  // dirt patches: noise-broken threshold => small worn patches with ragged
  // edges instead of giant airbrushed smears. r6: warped samples + slightly
  // softer band — the hard 0.62-0.78 step on unwarped texels was the
  // axis-aligned checkerboard tell beside the player tank
  // r4 terrain_environment: worn band widened (0.60-0.82 -> 0.55-0.80) and
  // weight 0.62 -> 0.74 — the gameplay-camera near field read as one uniform
  // green noise carpet with "no macro albedo variation" (critique); more
  // visible dirt/dry-patch breakup is the cheapest macro signal at 5-60 m
  // r7: 0.74 -> 0.84 — bare-dirt splats must read as real ground breakup
  // between the road decals (ground-cover critique), not a faint stain
  float worn = smoothstep(0.55, 0.80, n2w + (n1w - 0.5) * 0.45);
  float fD = clamp(max(worn * 0.84, max(shoulder, mk.a * uTownWear * (0.35 + 0.65 * n1))), 0.0, 1.0);
  float fM = mkB;
  // marsh/ice sheets only live on near-flat ground: without this the graded
  // banks around a frozen lake inherit the sheet's glossy blue ice response
  // and read as icy walls — anything steeper than ~10 deg is snow bank
  fM *= 1.0 - smoothstep(0.03, 0.08, slope);
  // >>> maps r1 (ADDITIVE, uSea-gated — uSea is 0 on every pre-existing map,
  // so fMs == fM and everything below is bit-identical there). Open-water
  // mode splits fM's wide shore ramp into: a bare sand/mud apron (seaSand,
  // fed from the D layer), a surf waterline, and the open-water weight fMs.
  gSeaFoam = 0.0;
  float fMs = fM;
  float seaSand = 0.0;
  if (uSea > 0.5) {
    fMs = smoothstep(uSeaRamp.x, uSeaRamp.y, fM);
    seaSand = smoothstep(0.02, uSeaRamp.x, fM) * (1.0 - fMs);
  }
  // <<< maps r1 ---------------------------------------------------------------
  // r6 terrain_environment LANDFORM ROCK GATE (rockGate, decoded above): with
  // uRockGate on (desert), the slope-driven rock/sandstone takeover only
  // fires where the mask-B landform weight says the terrain IS mesa/rim rock.
  // Slope alone cannot tell a mesa wall from a dune slip face, so every steep
  // DUNE face used to inherit the BEDDED sandstone layer and print horizontal
  // terracing — the critique's "heightmap quantization" bands on the dunes.
  // Dunes now stay sand at any slope (the steep-sand ripple/grain pass below
  // carries their detail).
  // r5: breakup widened 0.07 -> 0.16 — the moderate-slope band used to hold
  // 30-60% rock alpha EVERYWHERE, dusting whole hill flanks with uniform
  // speckle fur; with stronger noise the same band resolves into distinct
  // rock outcrop patches separated by clean ground
  float fR = smoothstep(0.095, 0.235, slope + (n1 - 0.5) * 0.16) * rockGate;
  // rock takeover on steep faces: cliff walls and cut banks always read as
  // rock. r3: WIDE, noise-dithered band — the old razor 0.32-0.50 threshold
  // cut giant hard-edged maroon swaths diagonally across the dunes; the low-
  // freq n1 term wanders the boundary while n1hs keeps near-field raggedness
  fR = max(fR, smoothstep(0.28, 0.58, slope + (n1 - 0.5) * 0.10 + (n1hs - 0.5) * 0.08) * rockGate);
  // ...except inside marsh/ice sheet margins: lake banks are snow/soil
  // slumps, and the pale winter rock on them read as a glassy blue cliff
  // wall ringing the frozen lake
  fR *= 1.0 - mkB * 0.85;
  // r6: any face steep enough for the wall-plane projection below is FULLY
  // rock — partial-fR bands left the planar-projected sand layer showing
  // through mid-flank, and its UV stretch was the residual melted-wax smear
  // r8: 0.18-0.40 -> 0.14-0.34 (with the matching steepW change below) — the
  // 15-30 deg mesa flank band still held planar XZ sand UVs and its texture
  // stretched downslope as taffy; wall projection now owns faces from ~28 deg
  // r4 terrain_environment: 0.14-0.34 -> 0.20-0.42 — at 0.14 every moderate
  // DUNE flank flipped to the banded sandstone layer and carried its beds as
  // "pink contour marbling on sand" (desert critique). Rock now takes over
  // from ~37 deg; the 30-37 deg band stays sand (ripples own it).
  fR = max(fR, smoothstep(0.20, 0.42, slope) * (1.0 - mkB * 0.85) * 0.95 * rockGate);
  // triplanar side projection on steep faces: planar XZ UVs smear vertically
  // down cliff walls (the classic heightmap-stretch tell on the mesa cliffs)
  // — resample the rock layer in the wall's own plane and take it over as
  // the slope rises, so cliffs read as stratified rock instead of dragged
  // paint
  float steepW = smoothstep(0.20, 0.42, slope) * (1.0 - mkB * 0.85) * rockGate; // r4: tracks the fR band (marbling fix); r6: landform-gated
  // r7: SHARPENED AXIS TRIPLANAR replaces the r6 tangent projection. The
  // tangent frame was derived from the interpolated normal, so on undulating
  // walls it rotated per-fragment and the sample coordinate wandered — the
  // melted-taffy smear. Two fixed world-axis projections keep every texel
  // anchored in world space; pow(|n|,6) weights keep the crossover band on
  // diagonal faces narrow enough to be invisible on self-similar rock.
  {
    float wSx = pow(abs(wn.x) + 1e-5, 6.0);
    float wSz = pow(abs(wn.z) + 1e-5, 6.0);
    gWallW = wSz / (wSx + wSz);
    gWallUVx = vec2(wp.z * sign(wn.x), -wp.y);
    gWallUVz = vec2(-wp.x * sign(wn.z), -wp.y);
    // r8 per-cliff bed de-sync: the sandstone layer's bed sequence repeats
    // every ~6.5 m of altitude and every face at the same world height showed
    // the SAME stripes ("uniform synthetic strata on every cliff"). A slow
    // world-XZ field (constant down a vertical column, drifting along the
    // wall run) offsets the V coordinate and stretches bed thickness ±13%
    // per cliff, so bed sequences undulate and never sync between faces.
    float cliffJ = texture2D(uNoise, wp.xz * 0.0013 + vec2(0.57, 0.23)).g;
    float cliffJ2 = texture2D(uNoise, wp.xz * 0.0047 + vec2(0.91, 0.13)).r;
    float wallVScale = 0.87 + cliffJ * 0.26;
    float wallVOff = cliffJ * 9.7 + cliffJ2 * 2.3;
    gWallUVx.y = gWallUVx.y * wallVScale + wallVOff;
    gWallUVz.y = gWallUVz.y * wallVScale + wallVOff;
    gCliffJ = cliffJ;
  }
  // r5 terrain_environment: TRUE TRIPLANAR for the GROUND layers, decoupled
  // from the rock takeover. The 24-45 deg dune/mesa-flank band stayed sand
  // (fR/steepW only start at ~37 deg) but kept PLANAR XZ UVs — the 16x aniso
  // sampler dutifully resolved the 1/cos-stretched texels into long downslope
  // strands: the "vertical corduroy" striations on every desert dune face
  // (top critique item). From ~28 deg the base layer re-samples in the two
  // fixed wall planes (same texture, world-anchored), so steep sand reads as
  // bedded sand instead of dragged paint. MATERIAL choice keeps its own
  // thresholds; only the PROJECTION switches early.
  float triW = smoothstep(0.12, 0.30, slope);
  float projW = max(steepW, triW); // gate for every planar-projected extra
  vec4 a = groundSamp(uAlbG, uv * 0.240, df, mipB);
  vec4 n = groundNrm(uNrmG, uv * 0.240, df, mipB);
  // r5 anti-tiling: the ground texture's clump pattern repeats at ONE fixed
  // world scale, so every distance ring shows same-size dark blobs — the
  // "camo carpet" read. Re-sample the same layer at a ~2.3x coarser scale and
  // blend it in over ~35 m noise patches: the characteristic pattern scale
  // now wanders across the map instead of stamping uniformly.
  {
    float scMix = smoothstep(0.40, 0.78, texture2D(uNoise, uvW * 0.0071 + vec2(0.23, 0.51)).g);
    if (scMix > 0.003) {
      a = mix(a, groundSamp(uAlbG, uv * 0.1043, df, mipB), scMix * 0.7);
      n = mix(n, groundNrm(uNrmG, uv * 0.1043, df, mipB), scMix * 0.7);
    }
  }
  if (triW > 0.003) {
    a = mix(a, wallSamp(uAlbG, 0.240, df, mipB), triW);
    n = mix(n, wallSamp(uNrmG, 0.240, df, mipB), triW);
  }
  // dirt patches are an XZ-projected field — on slopes they compressed into
  // downslope smears ("dirt/grime streaks" critique); steep faces run clean
  fD *= 1.0 - triW * 0.7;
  a = mix(a, groundSamp(uAlbD, uv * 0.210, df, mipB), fD); n = mix(n, groundNrm(uNrmD, uv * 0.210, df, mipB), fD);
  if (seaSand > 0.003) { // maps r1: bare shoreline apron under the surf line
    a = mix(a, groundSamp(uAlbD, uv * 0.210, df, mipB), seaSand);
    n = mix(n, groundNrm(uNrmD, uv * 0.210, df, mipB), seaSand);
  }
  a = mix(a, groundSamp(uAlbM, uv * 0.190, df, mipB), fMs); n = mix(n, groundNrm(uNrmM, uv * 0.190, df, mipB), fMs);
  // rock layer: pre-blend planar/wall by triW so the partial-fR band (24-45
  // deg) never lays stretched planar rock over the triplanar sand
  {
    vec4 aR = groundSamp(uAlbR, uv * 0.155, df, mipB);
    vec4 nR = groundNrm(uNrmR, uv * 0.155, df, mipB);
    if (triW > 0.003) {
      aR = mix(aR, wallSamp(uAlbR, 0.155, df, mipB), triW);
      nR = mix(nR, wallSamp(uNrmR, 0.155, df, mipB), triW);
    }
    a = mix(a, aR, fR); n = mix(n, nR, fR);
  }
  // wall-coherent low-freq noise: the planar n2 field is near-degenerate down
  // a vertical face (grazing-angle gradient = wavy banding along cliff tops)
  float n2Wall = wallNoiseG(0.0031, vec2(0.41, 0.13));
  if (steepW > 0.001) {
    vec4 aS = wallSamp(uAlbR, 0.155, df, mipB);
    vec4 nS = wallSamp(uNrmR, 0.155, df, mipB);
    a = mix(a, aS, steepW);
    n = mix(n, nS, steepW);
  }
  // meadow macro variation, three scales (~80 m, ~230 m, ~600 m): dry-straw
  // patches, dark clover, and broad field-to-field tone shifts so open ground
  // never reads as one continuous green wash at any distance
  // r7 terrain_environment: meadowA is a TWO-SCALE composite. The single
  // 0.0121 sample of the 256-texel noise repeats every ~83 m and the dry-
  // straw patchwork visibly restamped on that period (critique: "mottle
  // pattern visibly repeats, ~50-70 m period"). A second incommensurate
  // scale (~128 m, other channel) breaks the period; CPU twin
  // (sampleSplatNoise) mirrors this exactly for grass/dirt correlation.
  float meadowA = texture2D(uNoise, uvW * 0.0121 + vec2(0.63, 0.29)).r * 0.62
                + texture2D(uNoise, uvW * 0.00779 + vec2(0.19, 0.71)).g * 0.38;
  float meadowB = texture2D(uNoise, uvW * 0.0043 + vec2(0.11, 0.87)).g;
  float meadowC = texture2D(uNoise, uvW * 0.0016 + vec2(0.37, 0.55)).r;
  // strength capped ~0.30-0.35 with n1 edge breakup so patch borders are
  // ragged at the ~10 m scale — full-strength smoothstep bands read as a
  // broken cloud-shadow projector in wide shots. DARK-CLOVER (uTintB, the
  // only darkening tint) capped at ~0.22 (lighting_post r1): stacked with
  // canopy shadows + grade contrast the old 0.34 max read as amorphous
  // dark masses / a broken cloud-shadow projector in battlefield.png.
  // r7: meadow tints are planar-projected — on cliff walls they stretched
  // into full-height tint stripes (a big taffy-smear contributor); gate them
  // off steep faces and let the wall macro octave below carry the variation
  float meadowG = (1.0 - fD) * (1.0 - projW);
  // r4: tint strengths raised ~30% (A 0.22+0.18 -> 0.28+0.20, B 0.14+0.08 ->
  // 0.17+0.09, C 0.16+0.14 -> 0.21+0.16) — the macro dry-straw/clover fields
  // were too subtle to register from the chase camera and the ground read as
  // one continuous green wash (critique: "no macro albedo variation")
  // r7: band recentred for the two-scale composite's lower variance + one
  // more strength step — the dry-straw fields must read from the chase cam
  a.rgb = mix(a.rgb, a.rgb * uTintA, smoothstep(0.52, 0.80, meadowA) * (0.33 + 0.20 * n1) * meadowG);
  a.rgb = mix(a.rgb, a.rgb * uTintB, smoothstep(0.58, 0.85, 1.0 - meadowB) * (0.17 + 0.09 * n1) * meadowG);
  a.rgb = mix(a.rgb, a.rgb * uTintC, smoothstep(0.52, 0.9, meadowC) * (0.21 + 0.16 * n1) * meadowG);
  a.rgb *= mix(0.93 + meadowC * 0.14, 1.0, projW);
  // mid-frequency relief + mottle (25-450 m): stroke-free bump from the
  // SMOOTH noise field gradient (texture normals reused at giant scales read
  // as scratch marks), so the midground never collapses into smooth felt
  {
    // r3: far edge is per-map (uMidFar; desert extends it to ~820 m so the
    // dapple carries the open erg past the old 480 m cutoff)
    float dMid = smoothstep(20.0, 55.0, effDist) * (1.0 - smoothstep(uMidFar * 0.46, uMidFar, effDist));
    vec2 uvA = uv * 0.017;
    float ha = texture2D(uNoise, uvA).r;
    vec2 ga = vec2(texture2D(uNoise, uvA + vec2(0.006, 0.0)).r - ha,
                   texture2D(uNoise, uvA + vec2(0.0, 0.006)).r - ha);
    vec2 uvB = uv * 0.0052;
    float hb = texture2D(uNoise, uvB).g;
    vec2 gb = vec2(texture2D(uNoise, uvB + vec2(0.005, 0.0)).g - hb,
                   texture2D(uNoise, uvB + vec2(0.0, 0.005)).g - hb);
    // uMidRelief: per-map scale — bright low-sun sand turns this dapple into
    // a leopard-spot shadow field, so the desert runs it well under 1.0 and
    // leans on the anisotropic wind ripples for mid-frequency character
    // r5 terrain_environment: planar-noise dapple gated off slopes — its
    // gradient is meaningless down a face and printed streaks (corduroy kin)
    float dapG = 1.0 - triW * 0.85;
    n.xy -= (ga * 1.4 + gb * 2.0) * dMid * uMidRelief * dapG;
    float midN2 = texture2D(uNoise, uv * 0.0089 + vec2(0.71, 0.23)).g;
    a.rgb *= 1.0 + ((ha - 0.5) * 0.09 * dMid
                 + (midN2 - 0.5) * 0.12 * smoothstep(30.0, 90.0, camDist)) * uMidRelief * dapG;
    // rock gets its own coarse relief so cliff faces stay craggy at range —
    // wall-plane sample takes over on steep faces (r5). Mix the SAMPLES, not
    // the coordinates: coordinate blending smeared diagonal fur across every
    // partially-steep slope.
    vec3 dnRa = texture2D(uNrmR, uv * 0.041).xyz;
    vec3 dnRb = wallTex(uNrmR, 0.041);
    vec3 dnR = mix(dnRa, dnRb, steepW) * 2.0 - 1.0;
    n.xy += dnR.xy * fR * 0.9 * dMid;
  }
  // horizontal strata banding on steep faces (mesa cliff walls), world-Y driven
  // r4 terrain_environment: band start 0.24 -> 0.36 slope (~31 deg -> ~40 deg)
  // — moderate DUNE flanks fell inside the old band and carried the sin-bed
  // stripes as "pink contour-band marbling over the sand" (desert critique);
  // strata now live only on genuine cliff faces
  if (uStrata > 0.001) {
    float steep = smoothstep(0.36, 0.58, slope) * rockGate; // r6: beds only on real mesa rock
    // r7: bed phase warped by the WALL-plane noise, not planar n2 — planar
    // n2 is sampled at grazing angles down a vertical face, so its rapid
    // horizontal gradient sheared the beds into wavy taffy along cliff tops.
    // n2Wall drifts slowly ALONG the wall: beds wander gently, stay bedded.
    // r8: per-cliff frequency/phase modulation — the fixed 1.9/0.57 wp.y
    // frequencies printed the SAME band ladder on every face at equal
    // altitude ("uniform synthetic strata"); gCliffJ wanders the frequency
    // ±30% and slides the phase several radians per cliff, and the band
    // amplitude itself breathes so some faces are strongly bedded, others
    // nearly massive rock.
    float bedF = 0.76 + gCliffJ * 0.60;
    float band = sin(wp.y * 1.9 * bedF + n2Wall * 2.2 + gCliffJ * 9.3) * 0.55
               + sin(wp.y * 0.57 * bedF + n2Wall * 1.9 + gCliffJ * 5.1) * 0.45;
    a.rgb *= 1.0 + band * uStrata * steep * (0.65 + gCliffJ * 0.7);
    // pale caprock marker beds: wide constant-altitude stripes that survive
    // distance where the fine beds mip away
    float bed = smoothstep(0.55, 0.9, sin(wp.y * 0.23 * bedF + n2Wall * 1.1 + 0.8 + gCliffJ * 3.7));
    a.rgb = mix(a.rgb, a.rgb * vec3(1.16, 1.12, 1.04), bed * steep * 0.4);
    // r8 per-cliff color drift: warm iron-stained faces vs paler washed faces
    // r4: 0.5 -> 0.30 and flush 0.22 -> 0.12 — the stacked warm shifts were
    // the residual PINK cast in the marbled-cliff read
    a.rgb = mix(a.rgb, a.rgb * vec3(1.07, 0.985, 0.91), steep * gCliffJ * 0.30);
    a.rgb = mix(a.rgb, a.rgb * vec3(1.03, 0.95, 0.88), steep * 0.12); // baked iron-oxide faces
    // r7 macro-variation octave (wall-space): breaks the uniform band print
    // into distinct rock masses / weathered faces along the wall run
    float wallMac = wallNoiseG(0.011, vec2(0.19, 0.67));
    a.rgb *= 1.0 + (wallMac - 0.5) * 0.30 * steep;
  }
  // far-cliff detail rescue: the mip-biased macro fade flattens steep rock
  // faces past ~300 m into featureless sheets — re-project the rock layer at
  // a coarse world scale + its normals so distant mesa/cut walls stay craggy
  {
    float farRock = fR * farM;
    if (farRock > 0.003) {
      // wall-plane sample takes over on steep faces (r5). Mix SAMPLES, not
      // coordinates — coordinate blending smeared diagonal fur streaks across
      // every partially-steep slope (the gold "furry" mesa flanks).
      vec4 rr = vec4(mix(texture2D(uAlbR, uv * 0.031).rgb, wallTex(uAlbR, 0.031), steepW), 1.0);
      // LUMINANCE-only modulation at reduced strength (r3): the rgb multiply
      // compounded the rock tint with itself and saturated far walls toward
      // maroon; value-only variation keeps the crag without the color drift
      float rrL = dot(rr.rgb, vec3(0.36, 0.42, 0.22));
      a.rgb = mix(a.rgb, a.rgb * (0.80 + rrL * 0.40), farRock * 0.45);
      vec3 rn = mix(texture2D(uNrmR, uv * 0.019).xyz, wallTex(uNrmR, 0.019), steepW) * 2.0 - 1.0;
      // 0.55 (r5, was 0.9): under a low sun the full-strength coarse normals
      // rendered far flanks as glittery fur instead of crag
      n.xy += rn.xy * farRock * 0.55;
    }
  }
  // wind-aligned sand ripples: anisotropic normal waves instead of dot noise.
  // Two wavelengths: ~2 m gameplay-range ripples + ~11 m dune-face waves that
  // still resolve in establishing shots.
  if (uRipple.z > 0.001) {
    float rphase = dot(uv, uRipple.xy);
    // r8: the ~11 m dune-face wave now fades by 300 m (was 420) and its
    // amplitude is modulated by a ~150 m noise field — past ~300 m the sin
    // rows compressed to a few px apart and aliased into uniform horizontal
    // moire stripe rows across the whole midground (part of the desert
    // "stipple row" artifact); the modulation stops the surviving band from
    // printing one continuous corduroy field
    float rMod = 0.55 + 0.9 * texture2D(uNoise, uv * 0.0064 + vec2(0.83, 0.41)).g;
    float rw = (sin(rphase * 2.9 + texture2D(uNoise, uv * 0.019).r * 7.0)
                  * (1.0 - smoothstep(40.0, 150.0, camDist))
              + sin(rphase * 0.55 + texture2D(uNoise, uv * 0.006).g * 4.0) * 1.1
                  * (1.0 - smoothstep(110.0, 300.0, camDist)) * rMod)
              * uRipple.z * (1.0 - fR) * (1.0 - triW * 0.9);
    n.xy += uRipple.xy * rw;
    // r3 terrain_environment: DUNE BEDFORMS that survive the establishing
    // shot. Both ripple octaves above die by 300 m, so the whole central
    // bowl rendered as one blown cream sheet from the wide camera. A ~26 m
    // wind-transverse wave carried in ALBEDO (normals mip away out there):
    // shadowed slip faces vs lit crests, amplitude wandering on a ~150-300 m
    // field so the waves read as dune trains, not corduroy. Ramps IN past
    // 60 m (the fine ripples own the near field) and never fades out.
    float bedPhase = rphase * 0.24 + texture2D(uNoise, uv * 0.0021 + vec2(0.19, 0.57)).g * 5.0;
    float bedMod = smoothstep(0.30, 0.72, texture2D(uNoise, uvW * 0.0035 + vec2(0.67, 0.23)).r);
    float bed = sin(bedPhase);
    float bedW = min(uRipple.z * 2.2, 1.0) * bedMod * (1.0 - fR) * (1.0 - roadCore)
               * (1.0 - triW) * smoothstep(60.0, 170.0, effDist);
    // r4: 0.105 -> 0.15 — the dune trains must survive the establishing shot
    // (the mid-map otherwise reads as one blown "whipped cream" sheet)
    a.rgb *= 1.0 + bed * 0.15 * bedW;
    n.xy += uRipple.xy * bed * 0.55 * bedW;
    // r6 terrain_environment STEEP-SAND DETAIL: both planar ripple octaves
    // above are gated OFF steep faces (their planar UVs stretch), and with
    // the landform rock gate the dunes no longer borrow the sandstone layer
    // — so steep slip faces would render as bare smooth sand (the critique's
    // "near-textureless bright faces"). Re-project sand grain + avalanche
    // flow in the two fixed WALL planes (samples mixed, never coordinates):
    // fine granular normal, down-slope flow streak, and a gentle slip-face
    // albedo darkening so lit faces keep surface definition.
    float sandFaceW = triW * (1.0 - fR);
    if (sandFaceW > 0.01) {
      vec3 wg1 = texture2D(uNrmG, gWallUVx * 0.55).xyz;
      vec3 wg2 = texture2D(uNrmG, gWallUVz * 0.55).xyz;
      vec3 wgn = mix(wg1, wg2, gWallW) * 2.0 - 1.0;
      // r7: fade 320 -> 560 m — the 300-500 m dune flanks lost every detail
      // pass at once and any residual shading isoline printed bare (part of
      // the "terracing" read); the wall-plane grain now carries those faces
      n.xy += wgn.xy * 0.65 * sandFaceW * (1.0 - smoothstep(160.0, 560.0, effDist));
      // slope-aligned ripple detail on the same faces: anisotropic waves in
      // the wall frame (V = world height, so crests run along the contour —
      // real wind ripples on a slip face) mask any residual banding
      {
        float wRip = mix(sin(gWallUVx.y * 7.3 + texture2D(uNoise, gWallUVx * 0.05).r * 4.0),
                         sin(gWallUVz.y * 7.3 + texture2D(uNoise, gWallUVz * 0.05).r * 4.0), gWallW);
        float wRipW = sandFaceW * (1.0 - smoothstep(200.0, 620.0, effDist)) * 0.30;
        vec2 hDir = wn.xz / max(length(wn.xz), 1e-4); // fall-line in the map plane
        a.rgb *= 1.0 + wRip * 0.12 * wRipW;
        n.xy += hDir * wRip * wRipW;
      }
      // avalanche flow tongues: value streaks running down the fall line
      // (variation ALONG the wall run = vertical flow structure)
      float flow = mix(
        sin(gWallUVx.x * 1.7 + texture2D(uNoise, gWallUVx * 0.06).r * 5.0),
        sin(gWallUVz.x * 1.7 + texture2D(uNoise, gWallUVz * 0.06).r * 5.0), gWallW);
      float wgA = mix(texture2D(uAlbG, gWallUVx * 0.10, 1.0).g,
                      texture2D(uAlbG, gWallUVz * 0.10, 1.0).g, gWallW);
      a.rgb *= (1.0 + flow * 0.05 * sandFaceW) * (0.88 + wgA * 0.24 * sandFaceW + (1.0 - sandFaceW) * 0.12);
      a.rgb *= 1.0 - sandFaceW * 0.07; // slip-face definition vs the blown flats
    }
  }
  // r3 terrain_environment: desert macro sheet variation — the bowl between
  // the mesas was near-uniform pale cream at establishing range. Broad
  // (~120-400 m) warped fields: darker granular gravel-lag basins and pale
  // wind-scoured sheets, gated off rock/road so the landforms keep their own
  // material response.
  if (uSandMacro > 0.001) {
    float smA = texture2D(uNoise, uvW * 0.0024 + vec2(0.13, 0.83)).r;
    float smB = texture2D(uNoise, uvW * 0.0009 + vec2(0.77, 0.31)).g;
    float openW = (1.0 - fR) * (1.0 - roadCore) * (1.0 - projW) * uSandMacro;
    float gravelW = smoothstep(0.56, 0.82, smA + (n1 - 0.5) * 0.24) * openW;
    float grainG = texture2D(uNoise, uv * 0.11 + vec2(0.41, 0.09)).r;
    vec3 gravelCol = a.rgb * vec3(0.80, 0.755, 0.70) * (0.90 + grainG * 0.20);
    a.rgb = mix(a.rgb, gravelCol, gravelW * 0.8);
    a.a = mix(a.a, max(a.a, 0.92), gravelW * 0.5); // lag surfaces run matte
    float scourW = smoothstep(0.60, 0.90, smB) * openW * (1.0 - gravelW);
    a.rgb = mix(a.rgb, a.rgb * vec3(1.055, 1.035, 1.0), scourW * 0.55);
    // r6: brightest-texel shoulder — open sand at ~1.2+ linear tonemapped to
    // blown paper (critique: "bright sand faces partially blown out"); trim
    // only the top of the albedo range so texture survives the ACES shoulder
    float sandLum = dot(a.rgb, vec3(0.34, 0.42, 0.24));
    a.rgb *= 1.0 - smoothstep(0.60, 0.95, sandLum) * 0.10 * uSandMacro;
  }
  // r6 terrain_environment: UNCORRELATED mid-band octave. Every macro term
  // above keys off the SAME two noise fields (n1/n2 and their warps), and the
  // far-variant tile repeats at ~18 m — together the 50-150 m midground read
  // as one repeating mottled-blotch print (critique). A third pair of fields
  // at fresh offsets/scales (~34 m and ~13 m), band-limited to 35-260 m,
  // decorrelates the repeat without touching the near field.
  {
    float decoW = smoothstep(35.0, 90.0, effDist) * (1.0 - smoothstep(160.0, 260.0, effDist))
      * (1.0 - fM) * (1.0 - roadCore);
    if (decoW > 0.004) {
      float dcA = texture2D(uNoise, uv * 0.0293 + vec2(0.83, 0.07)).r;
      float dcB = texture2D(uNoise, uv * 0.0741 + vec2(0.29, 0.63)).g;
      a.rgb *= 1.0 + ((dcA - 0.5) * 0.11 + (dcB - 0.5) * 0.07) * decoW;
    }
  }
  // 0-48 m detail pass: layered micro normals + albedo speckle + road gravel
  float dNear = 1.0 - smoothstep(18.0, 48.0, camDist);
  if (dNear > 0.001) {
    vec3 dn = texture2D(uNrmD, uv * 1.07).xyz * 2.0 - 1.0;
    n.xy += dn.xy * 0.85 * dNear;
    float micro = texture2D(uNoise, uv * 0.171).r;
    a.rgb *= 1.0 + (micro - 0.5) * 0.30 * dNear * uMicroAmp;
    vec4 grav = texture2D(uAlbR, uv * 0.83);
    a.rgb = mix(a.rgb, grav.rgb * vec3(1.02, 0.96, 0.86), roadCore * 0.42 * dNear);
    // sub-10 m second octave: clod/blade relief right under the camera
    // r6 terrain_environment: band widened (5-15 -> 6-26 m) and the octave
    // now carries ALBEDO as well as normal — the 5-20 m meadow read as one
    // smeared macro-noise wash with "no visible detail" (critique). The
    // ~0.9 m re-projection of the ground layer is the blade/clod-scale
    // signal that resolves right in front of the hull.
    float dNear2 = 1.0 - smoothstep(6.0, 26.0, camDist);
    if (dNear2 > 0.001) {
      vec3 dn2 = texture2D(uNrmG, uv * 2.71).xyz * 2.0 - 1.0;
      n.xy += dn2.xy * 0.75 * dNear2;
      // zero-mean albedo octave: deep-mip sample = local tile mean, so the
      // modulation is exposure-neutral on every map palette (sand vs turf)
      float gl2 = dot(texture2D(uAlbG, uv * 2.71).rgb, vec3(0.36, 0.42, 0.22));
      float glM = dot(texture2D(uAlbG, uv * 2.71, 6.0).rgb, vec3(0.36, 0.42, 0.22));
      a.rgb *= 1.0 + clamp((gl2 - glM) * 1.5, -0.22, 0.26) * dNear2;
    }
  }
  {
    // compacted earth road: two-track profile — lightened compacted core,
    // dark wheel ruts, damp borders. uRoadTex (0..1) cross-fades to PAVED
    // town streets: the rock layer (cobble/sett) laid across the full
    // carriageway at every distance, ruts nearly gone.
    float dW = roadCore * 0.9 * (1.0 - uRoadTex);
    // pull the compacted core toward NEUTRAL packed earth: tint, then
    // partially desaturate so the carriageway never glows orange against
    // the graded green field
    vec3 roadCol = a.rgb * uRoadTint + vec3(0.014, 0.010, 0.006);
    roadCol = mix(roadCol, vec3(dot(roadCol, vec3(0.34, 0.45, 0.21))), 0.26);
    a.rgb = mix(a.rgb, roadCol, dW);
    // r6: paved rut wear 0.10 -> 0.30 — town streets need visible dark
    // wheel-wear lanes or the carriageway reads as one clean bright sheet
    // terrain_environment r2: the mask G channel mip-averages away past
    // ~250 m and distant roads collapsed into uniform beige ribbons — boost
    // the surviving rut signal with distance so the two-track read holds
    a.rgb *= 1.0 - min(rut * (1.0 + farM * 0.9), 1.0) * mix(0.55, 0.30, uRoadTex);
    if (uRoadTex > 0.01) {
      // r5: HARDER pavement edge (0.10-0.26 with less noise wobble) — paved
      // town streets end at a kerb line, they do not alpha-fade into lawn.
      // Patch/repair tone variation breaks the uniform sett sheet.
      // r6: harder pavement edge (0.15-0.24, noise wobble halved) — the wide
      // noise-feathered 0.10-0.26 ramp read as water-eroded banks; a paved
      // street must end on a near-kerb line
      float paveCore = smoothstep(0.15, 0.24, mk.r + (n1hs - 0.5) * 0.025) * uRoadTex;
      vec4 pav = splatSamp(uAlbR, uv * 0.31, df, mipB);
      vec4 pnn = splatSamp(uNrmR, uv * 0.31, df, mipB);
      float pvar = texture2D(uNoise, uv * 0.037 + vec2(0.77, 0.19)).r; // NB: "patch" is a reserved word in GLSL ES
      // r6: 0.86+0.26 -> 0.72+0.22 — the near-white sett sheet under a blue
      // sky ambient read as a frozen canal; darker worn stone keeps the
      // street below the facade value range
      pav.rgb *= 0.72 + smoothstep(0.35, 0.75, pvar) * 0.22;
      a.rgb = mix(a.rgb, pav.rgb * uRoadTint, paveCore * 0.94);
      a.a = mix(a.a, pav.a, paveCore * 0.85);
      n = mix(n, pnn, paveCore * 0.85);
      // gutter shading: a darkened seam just inside the pavement edge gives
      // the street a built profile even before the kerb geometry resolves
      float gutter = smoothstep(0.06, 0.20, mk.r) * (1.0 - smoothstep(0.22, 0.42, mk.r));
      a.rgb *= 1.0 - gutter * 0.18 * uRoadTex;
    }
  }
  // r4: 0.09 -> 0.16 + a dusty desaturation pull — road shoulders must read
  // as worn verge (tracked dirt spilling off the carriageway), not clean lawn
  // running flush to the wheel ruts (critique: "no decals along road edges")
  // r7: NOISE-RAGGED edge band + gravel spill — the road met the grass as
  // one uniform soft feather (decal-ecosystem critique); the worn verge now
  // breaks up on the ~6 m noise and scatters gravel speckle off the
  // carriageway shoulder
  float edgeBand = shoulder * (1.0 - roadCore) * (0.55 + 0.90 * n1hs);
  a.rgb *= 1.0 - edgeBand * 0.16;
  a.rgb = mix(a.rgb, vec3(dot(a.rgb, vec3(0.34, 0.45, 0.21))) * vec3(1.06, 1.0, 0.88), edgeBand * 0.22);
  {
    float gravSpill = shoulder * (1.0 - roadCore) * smoothstep(0.58, 0.9, n1h)
      * (1.0 - smoothstep(30.0, 90.0, effDist));
    if (gravSpill > 0.004) {
      vec4 gravE = texture2D(uAlbR, uv * 0.83);
      a.rgb = mix(a.rgb, gravE.rgb * vec3(1.02, 0.97, 0.88), gravSpill * 0.5);
    }
  }
  // rut relief from the mask G gradient (visible well past the near ring)
  {
    float texel = 1.4 / 1024.0;
    vec2 rutG;
    rutG.x = texture2D(uMask, mUV + vec2(texel, 0.0)).g - texture2D(uMask, mUV - vec2(texel, 0.0)).g;
    rutG.y = texture2D(uMask, mUV + vec2(0.0, texel)).g - texture2D(uMask, mUV - vec2(0.0, texel)).g;
    // r2: attenuation eased (1-df -> 1-df*0.55) so rut relief survives into
    // the midfield instead of dying at the 160 m detail fade
    n.xy += rutG * 0.9 * (1.0 - df * 0.55);
  }
  // wind-blown snow drifts across the ice sheet + snowbank shoreline blend
  // (maps r1: the whole sheet block reads fMs — identical to fM everywhere
  // uSea is 0, i.e. on every pre-existing map)
  float driftW = 0.0;
  if (uIceDrift > 0.001 && fMs > 0.02) {
    // macro ice re-projection: the detail ice layer tiles every ~5 m, so its
    // cracks/depth blotches average away by 150 m and the whole sheet read
    // as snowfield in establishing shots — overlay the same texture at a
    // ~75 m tile so pressure cracks and dark clear-ice patches survive at
    // range and the lake reads as ICE from the wide camera
    // LUMINANCE-only macro modulation (r5): multiplying the sheet by its own
    // RGB squared the blue saturation — the garish swimming-pool ellipse.
    // Value variation alone keeps the gray-white ice albedo authored in the
    // layer while the cracks/depth blotches still read at range.
    vec4 iceMacro = texture2D(uAlbM, uv * 0.0134);
    float iceLum = dot(iceMacro.rgb, vec3(0.30, 0.45, 0.25));
    // r6: macro contrast up (0.55+0.80 -> 0.45+1.00) so the 75 m-scale
    // pressure cracks and clear-ice fields dominate at range...
    // r4: 0.45+1.00 -> 0.36+1.18 — one more contrast step (see makeIceLayer)
    a.rgb = mix(a.rgb, a.rgb * (0.36 + iceLum * 1.18), fMs * 0.9);
    // ...and DESATURATE the sheet with distance: the 5 m detail tile can only
    // resolve as blue salt-speckle from the establishing camera — pull the
    // far sheet toward a cool gray so it reads as one ice surface with crack
    // veins, not a blue static field
    float iceGrey = dot(a.rgb, vec3(0.30, 0.45, 0.25));
    a.rgb = mix(a.rgb, vec3(iceGrey) * vec3(0.965, 1.0, 1.05), fMs * farM * 0.6 * (1.0 - uSea));
    float drift = smoothstep(0.52, 0.78,
      texture2D(uNoise, uv * 0.021 + vec2(0.31, 0.77)).r + (n1h - 0.5) * 0.30);
    float bank = 1.0 - smoothstep(0.25, 0.75, fMs); // shoreline band drifts hardest
    driftW = clamp(drift * uIceDrift * (0.48 + bank * 0.52), 0.0, 1.0) * fMs;
    // maps r1: sand/mud shoals belong in the SHALLOWS — deep-water "drift"
    // read as pale mottling across the whole sheet (uSea=0: multiplier 1)
    driftW *= mix(1.0, 0.30 + bank * 0.70, uSea);
    if (uSea > 0.5) { // maps r1: open water "drifts" are sand shoals, not snow
      a = mix(a, groundSamp(uAlbD, uv * 0.210, df, mipB), driftW * 0.85);
      n = mix(n, groundNrm(uNrmD, uv * 0.210, df, mipB), driftW * 0.85);
    } else {
      a = mix(a, groundSamp(uAlbG, uv * 0.240, df, mipB), driftW);
      n = mix(n, groundNrm(uNrmG, uv * 0.240, df, mipB), driftW);
    }
    // r6: pressure ridges — concentric normal waves + a bright refrozen crest
    // following the shoreline contour (fM isolines via the mask-B gradient).
    // Real lake ice buckles against its banks; the flat noise disc was the
    // last tell. Ridges fade where snow drifts bury the sheet.
    float ridgeBand = smoothstep(0.08, 0.38, fMs) * (1.0 - smoothstep(0.55, 0.88, fMs))
      * (1.0 - uSea); // maps r1: pressure ridges are an ICE feature
    if (ridgeBand > 0.004) {
      float texelR = 2.0 / 1024.0;
      vec2 gM;
      gM.x = texture2D(uMask, mUV + vec2(texelR, 0.0)).b - texture2D(uMask, mUV - vec2(texelR, 0.0)).b;
      gM.y = texture2D(uMask, mUV + vec2(0.0, texelR)).b - texture2D(uMask, mUV - vec2(0.0, texelR)).b;
      float gl = length(gM);
      if (gl > 1e-5) {
        vec2 gd = gM / gl;
        // ~14 cycles across the shore ramp (the first 44 aliased into a
        // moire groove pattern from the establishing camera); n1 breaks the
        // ring phase so buckle lines wander instead of tracing isolines
        float ridge = sin(fMs * 14.0 + n1h * 2.2 + n1 * 4.0) * ridgeBand * (1.0 - driftW);
        n.xy += gd * ridge * 0.45;
        a.rgb *= 1.0 + max(ridge, 0.0) * 0.07;
      }
    }
    // r3 terrain_environment: FRESNEL sky sheen on clear ice — the sheet had
    // no view-dependent response at all and read as a flat blue stain. At the
    // near-grazing establishing camera the clear-ice fields now pick up the
    // cold sky tint (drifted snow stays matte), which together with the
    // lowered roughness floor below gives the lake a real ice identity.
    // (first cut at 0.55 toward a bright tint WASHED the sheet whiter than
    // the snow — the sheen must stay a cool mid-tone glaze over DARK ice)
    // r6 terrain_environment: BLUE DEPTH GRADIENT — the sheet read as one
    // flat single-tone disc (critique). Deep water under the interior ice
    // darkens and cools it; the drifted shore band stays snow-toned. Plus a
    // macro normal waviness from the ice layer's own normal map so the
    // fresnel/sun response breaks into streaks instead of one flat sheen.
    {
      float deepW = smoothstep(0.45, 0.95, fMs) * (1.0 - driftW);
      // maps r1: open water deepens toward a darker blue-green (uSea-gated);
      // ice keeps its pale blue depth cue
      vec3 deepTint = mix(vec3(0.74, 0.86, 1.05), vec3(0.34, 0.56, 0.66), uSea);
      a.rgb *= mix(vec3(1.0), deepTint, deepW * mix(0.5, 0.72, uSea));
      vec3 iceN = texture2D(uNrmM, uv * 0.0134).xyz * 2.0 - 1.0;
      n.xy += iceN.xy * 0.5 * fMs * (1.0 - driftW);
    }
    {
      vec3 vDirIce = normalize(cameraPosition - wp);
      float fresI = pow(1.0 - clamp(dot(vDirIce, wn), 0.0, 1.0), 3.0);
      float clearIce = fMs * (1.0 - driftW);
      // r4: 0.30 -> 0.48 — the sheet still read as a matte pale splat from
      // the establishing camera; a stronger grazing sky sheen (plus the 0.14
      // roughness floor below) finally gives it a specular ice identity
      // lighting_post r4: 0.48 -> 0.62 — winter.js envIntensity dropped
      // 0.60 -> 0.32 to kill the albedo-independent pale wash on props; the
      // ice sheet keeps its DIRECTIONAL sheen by leaning harder on its own
      // fresnel term instead of the scene-wide env (ice vs snow separation).
      // maps r1: open water runs the sheen a step weaker than clear ice —
      // at establishing grazing angles the full 0.62 painted the whole
      // sea/river pale sky-grey (uSea=0 keeps the winter value exactly)
      // Liquid water should reflect the sky without becoming a white sheet.
      // The sea keeps the same draw path as ice, but uses a lower-energy
      // grazing glaze so the authored depth and chop remain visible.
      a.rgb = mix(a.rgb, uIceSky, fresI * clearIce * mix(0.62, 0.24, uSea));
    }
    // >>> maps r1 (uSea-gated): surf line + sparse whitecaps. The surf band
    // rides the RAW fM ramp (it peaks just shoreward of where fMs starts),
    // broken by two noise octaves so the foam edge is ragged, never a ring.
    if (uSea > 0.5 && uSeaFoam > 0.001) {
      // the surf band hugs the fMs waterline whatever ramp the map runs
      float surfBand = smoothstep(0.012, 0.10, fMs) * (1.0 - smoothstep(0.30, 0.62, fMs));
      float fno = texture2D(uNoise, uv * 0.045 + vec2(0.63, 0.17)).r * 0.55
                + texture2D(uNoise, uv * 0.17 + vec2(0.29, 0.83)).g * 0.45;
      float foam = surfBand * smoothstep(0.42, 0.78, fno + (n1h - 0.5) * 0.20) * uSeaFoam;
      float caps = fMs * smoothstep(0.87, 0.97, texture2D(uNoise, uvW * 0.031 + vec2(0.51, 0.07)).r)
                 * 0.45 * uSeaFoam * (1.0 - farM * 0.6);
      gSeaFoam = clamp(foam + caps, 0.0, 1.0);
      a.rgb = mix(a.rgb, vec3(0.68, 0.80, 0.84), gSeaFoam * 0.72);
    }
    // <<< maps r1 -------------------------------------------------------------
  }
  // r7: the unconditional macro term reads the PLANAR n2 field — degenerate
  // down vertical faces, it printed full-height value stripes (taffy smear);
  // steep faces take the wall-coherent sample instead
  a.rgb *= 0.90 + mix(n2, n2Wall, projW) * 0.20;
  // wet/dark shoreline band where ground meets a marsh or ice sheet: the
  // sheet blends into darkened damp banks instead of ending on a hard seam
  // maps r1: in open-water mode the damp band hugs the waterline instead of
  // spanning the whole beach apron (which would read as one wet smear)
  float shoreW = uSea > 0.5
    ? smoothstep(0.16, 0.36, fM) * (1.0 - smoothstep(0.48, 0.78, fM))
    : smoothstep(0.04, 0.30, fM) * (1.0 - smoothstep(0.55, 0.95, fM));
  a.rgb *= 1.0 - shoreW * 0.30 * (1.0 - driftW);
  // >>> terrain_environment r2: agrarian field patchwork + far turf relief. --
  // The 150-800 m band used to collapse into one smooth green wash (the bald
  // "gumdrop" midground hills behind the village): by 330 m every detail
  // layer is mip-faded flat and the soft meadow tints carry no structure.
  // (a) per-plot crop-tone variation on a ~92 m warped grid with darker
  //     field-margin lines (hedgerow/verge read from the air),
  // (b) straight mowing/crop strips inside each plot (~20 m pitch),
  // (c) a coarse re-projection of the grass layer's normal+albedo (same trick
  //     as the far-cliff rescue) so distant hills shade like turf-covered
  //     terrain instead of smooth clay.
  {
    // r4: band pulled in 70-150 -> 40-110 m — plowed/mowed field patches must
    // be visible from the gameplay camera, not only in establishing shots
    float fieldW = uFieldPatch * smoothstep(40.0, 110.0, effDist)
      * (1.0 - fD) * (1.0 - fM) * (1.0 - shoulder) * (1.0 - fR) * (1.0 - projW)
      * (1.0 - mk.a);
    if (fieldW > 0.004) {
      vec2 plotUv = uvW * (1.0 / 92.0);
      vec2 pid = floor(plotUv);
      float pr = texture2D(uNoise, pid * 0.1371 + vec2(0.29, 0.71)).r;
      float pg = texture2D(uNoise, pid * 0.2117 + vec2(0.61, 0.37)).g;
      // per-plot crop tone: hay-gold / dark clover / neutral pasture
      float cropSel = smoothstep(0.40, 0.72, pr);
      vec3 cropTint = mix(vec3(1.0),
        pg > 0.5 ? vec3(1.10, 1.04, 0.80) : vec3(0.84, 0.94, 0.82),
        cropSel * 0.55);
      a.rgb *= mix(vec3(1.0), cropTint, fieldW);
      // straight mowing strips: direction + pitch vary per plot
      float mAng = pr * 6.2832 + pg * 2.1;
      vec2 mdir = vec2(cos(mAng), sin(mAng));
      float strip = sin(dot(uv, mdir) * (0.24 + pg * 0.22));
      a.rgb *= 1.0 + strip * 0.05 * fieldW * (0.35 + cropSel);
      // darker margin line along plot borders
      vec2 fr2 = abs(fract(plotUv) - 0.5);
      float margin = smoothstep(0.44, 0.492, max(fr2.x, fr2.y));
      a.rgb *= 1.0 - margin * 0.10 * fieldW;
    }
    // coarse turf relief at range (all maps): the far band keeps macro
    // normal structure where the per-texel detail normals have faded out
    float farG = farM * (1.0 - fR) * (1.0 - fM) * (1.0 - projW);
    if (farG > 0.003) {
      // 1.5: SPLAT_NORMAL_FRAG rolls detail normals to ~0.29 strength in the
      // far band — pre-compensate so the coarse relief survives out there
      vec3 gnF = texture2D(uNrmG, uv * 0.021).xyz * 2.0 - 1.0;
      n.xy += gnF.xy * farG * 1.5;
      float gLum = dot(texture2D(uAlbG, uv * 0.0137).rgb, vec3(0.36, 0.42, 0.22));
      a.rgb *= mix(1.0, 0.86 + gLum * 0.30, farG * 0.55);
    }
  }
  // <<< terrain_environment r2 ------------------------------------------------
  // distant mottling: forest-floor/heather patches keep far hills from reading
  // as one flat green wash
  float mot = texture2D(uNoise, uv * 0.0022 + vec2(0.17, 0.71)).g;
  // r7: planar-projected far mottling gated off steep faces (vertical stripes)
  float motG = farM * (1.0 - projW);
  // r8: darkening 0.20 -> 0.13 with a wider, later ramp — at 0.20 the term
  // stamped muddy cloud-shadow blotches across mid-distance sand/meadow
  a.rgb *= 1.0 - motG * 0.13 * smoothstep(0.55, 0.95, mot);
  a.rgb *= 1.0 + motG * 0.13 * smoothstep(0.55, 0.85, n1) * (1.0 - smoothstep(0.48, 0.82, mot));
  // >>> gameplay_feel r4: grazing-view meadow rescue. ------------------------
  // Driving toward rising ground the chase/scope camera sees the meadow at a
  // few degrees of incidence: the projected pixel footprint stretches far
  // past the 16x aniso budget, the sampler mip-blurs everything along the
  // compressed (view) axis, and the smooth-noise meadow tint bands smear
  // into kilometer-long "aurora" streaks — the whole face collapses to a
  // featureless green wall (r4 drive critique, drive_chase.png: 85% of the
  // frame). Slope alone is NOT the trigger (the r4 wall measures ~6-15 deg);
  // VIEW GRAZING is. Fix: where the view grazes the surface, resample the
  // grass layer in a view-aligned surface basis with the texture COUNTER-
  // STRETCHED along the compressed axis — content elongates toward the
  // camera exactly like real grass read at grazing, and its cross-view
  // frequency stays resolvable by the sampler at any incidence. Gated off
  // roads/dirt/marsh/rock and off the near field (< ~35 m resolves fine).
  {
    vec3 vDirN = normalize(cameraPosition - wp);
    float dNV = saturate(dot(vDirN, wn));
    // r6 terrain_environment: band tightened 0.16-0.40 -> 0.07-0.22. The
    // rescue exists for NEAR-TANGENT chase views (dNV < ~0.1, where the 16x
    // aniso sampler genuinely runs out); at 0.40 it was still partially
    // active for the ~30-70 deg establishing camera and its counter-
    // stretched resample printed the directional "combed fabric" weave
    // across the 80-150 m midground (the mottled-blotch critique).
    float grazeW = (1.0 - smoothstep(0.07, 0.22, dNV))
                 * smoothstep(30.0, 70.0, camDist)
                 * (1.0 - smoothstep(320.0, 480.0, camDist))
                 * (1.0 - projW)
                 * (1.0 - fD) * (1.0 - fM) * (1.0 - roadCore) * (1.0 - fR);
    if (grazeW > 0.004) {
      // surface basis: e1 = cross-view tangent (fine axis), e2 = down-view
      // tangent (compressed axis, counter-stretched ~4.5:1)
      vec3 e1 = normalize(cross(wn, vDirN));
      vec3 e2 = cross(e1, wn);
      // r2: counter-stretch eased 0.22 -> 0.32 — the 4.5:1 stretch printed a
      // visible directional combing band across the 60-130 m midfield
      // r3 terrain_environment: eased again 0.32 -> 0.48 (~2:1) — the r2
      // stretch still resolved as an anisotropic combed smear right of the
      // road in player_view; a gentler counter-stretch plus ISOTROPIC value
      // breakup (planar-warped n1w below) keeps the grazing rescue without
      // printing a directional texture band
      vec2 uvG = vec2(dot(wp, e1), dot(wp, e2) * 0.58);
      vec4 aG = splatSamp(uAlbG, uvG * 0.240, df, 0.0);
      vec4 nG = splatSamp(uNrmG, uvG * 0.240, df, 0.0);
      // value breakup in the SAME stretched space (replaces the smeared
      // planar tint bands instead of re-projecting them)
      float n1G = texture2D(uNoise, uvG * 0.0117).r;
      float n2G = texture2D(uNoise, uvG * 0.0031 + vec2(0.41, 0.13)).g;
      aG.rgb *= (0.88 + n1G * 0.18) * (0.94 + n2G * 0.12);
      // isotropic planar patch tone re-applied over the stretched sample so
      // the band cannot read as one combed direction
      aG.rgb *= 0.92 + n1w * 0.16;
      // r2: 0.80 -> 0.62 — full-strength replacement stamped its own combed
      // texture band; a partial blend keeps the planar patchwork visible
      // r3: 0.62 -> 0.48, same reasoning one more step
      float gMix = grazeW * 0.38;
      a = mix(a, aG, gMix);
      n = mix(n, nG, gMix);
    }
    // steep NEAR faces (a genuine 15-30 deg climb face inside ~60 m) also
    // get their blade/clod relief back in the face's own plane — this is
    // what restores grass detail right in front of the hull on a climb.
    float faceW = smoothstep(0.02, 0.085, slope) * (1.0 - steepW)
                * (1.0 - smoothstep(20.0, 60.0, camDist))
                * (1.0 - fD) * (1.0 - fM) * (1.0 - roadCore) * (1.0 - fR);
    if (faceW > 0.004) {
      vec2 hn2 = wn.xz / max(length(wn.xz), 1e-4);
      vec2 uvFace = vec2(dot(wp.xz, vec2(-hn2.y, hn2.x)),
                         dot(wp.xz, hn2) / max(wn.y, 0.30));
      vec3 dnF = texture2D(uNrmD, uvFace * 1.07).xyz * 2.0 - 1.0;
      n.xy += dnF.xy * 0.85 * faceW;
    }
  }
  // <<< gameplay_feel r4 -----------------------------------------------------
  gSplatAlbedo = a.rgb;
  float iceW = clamp(fMs * uMarshGloss * 1.3, 0.0, 1.0) * (1.0 - driftW);
  float rough0 = clamp(a.a * (1.0 - roadCore * 0.12) * (1.0 + rut * 0.1)
    * (1.0 - fMs * uMarshGloss * (1.0 - driftW)), 0.05, 1.0);
  // ice roughness floor: at 0.05 the grazing-angle Fresnel term mirrors the
  // bright sky across the whole sheet and buries the crack/depth albedo —
  // ~0.45 keeps a satin sheen while the ice texture stays legible from the
  // near-grazing establishing camera
  // r6: 0.45 -> 0.30 — under the overcast winter sky the 0.45 floor killed
  // the sheet's specular response entirely (flat noise disc critique); 0.30
  // gives a believable satin ice sheen while the macro cracks stay legible
  // r9: 0.30 -> 0.20 — with the raised winter envIntensity the sheet still
  // read matte from the establishing camera; 0.20 picks up a real sky sheen
  // on the clear-ice fields while drifted snow (driftW) stays matte
  // terrain_environment r3: 0.20 -> 0.17 — pairs with the fresnel sky tint
  // above; the clear-ice fields need a genuine specular identity (0.13 let
  // the bright overcast env reflection blow the sheet out to snow-white)
  // r4: 0.17 -> 0.14 — one step glossier with the stronger fresnel term
  // maps r1: water is choppier than clear ice — a higher roughness floor
  // stops the sun's GGX lobe washing the whole sheet bright (uSea=0: 0.14)
  rough0 = max(rough0, iceW * mix(0.14, 0.54, uSea));
  rough0 = max(rough0, gSeaFoam * 0.88); // maps r1: foam is matte (0 off sea maps)
  // Dry terrain stays truly matte. The previous 0.78 floor left a broad GGX
  // sun lobe on dirt/snow at grazing angles, making the ground look wet even
  // when its albedo and normal detail were correct. Ice and open water keep
  // their authored response through iceW; every dry texel is >= 0.92.
  gSplatRough = max(rough0, 0.92 * (1.0 - iceW) + shoreW * -0.04);
  gSplatNrm = n.xyz * 2.0 - 1.0;
  gSplatFar = farM;
  // steep faces beyond gameplay range: their per-texel normal shading is the
  // strand-noise generator under a low sun — hand the shading to the
  // geometric normal early (from ~50 m out) on cliffs specifically
  gSplatSteepAtt = smoothstep(0.20, 0.45, slope) * smoothstep(50.0, 160.0, camDist) * 0.62;
}
`,Ue=`
{
  vec3 dN = gSplatNrm;
  vec3 gN = normalize(vWNormal);
  // r5: detail-normal strength falls off with distance (0.9 -> ~0.30 by the
  // far band). Past ~300 m per-texel normal shading cannot resolve — on
  // steep faces under a low sun it rendered as high-contrast bright/dark
  // strand noise ("furry" mesa flanks); the geometric normal carries the
  // far shading instead.
  float dk = 0.9 * (1.0 - max(gSplatFar * 0.68, gSplatSteepAtt));
  vec3 wN = normalize(vec3(gN.x + dN.x * dk, max(gN.y, 0.02), gN.z + dN.y * dk));
  normal = normalize((viewMatrix * vec4(wN, 0.0)).xyz);
}
`;function We(t,n,i,a=`verdant`,o=null){let s=i||{},c=Math.max(16,t.anisotropy??4),l={G:Ne(3e3,c,s.grassTone||null),D:Pe(3001,c,s.dirtTone||null),R:s.sandstone?Le(3002,c,s.rockTone||null):Re(3002,`rock`,c,s.rockTone||null),M:s.iceLake?Fe(3003,c):s.seaLake?Ie(3003,c,s.mudTone||null):Re(3003,`mud`,c,s.mudTone||null,s.mudRough??1)};ie(a,l,s);let u=ze(new M({random:W(3010)}),n,o),d=Be(3011),f=s.tintA||[1.16,1.08,.76],p=s.tintB||[.78,.9,.72],h=s.tintC||[1.1,1.04,.84],g=s.roadTint||[1.08,1.04,.96],_=new m({color:16777215,roughness:1,metalness:0});return _.side=2,t.setupShadowMaterial(_,t=>{t.uniforms.uAlbG={value:l.G.albedo},t.uniforms.uAlbD={value:l.D.albedo},t.uniforms.uAlbR={value:l.R.albedo},t.uniforms.uAlbM={value:l.M.albedo},t.uniforms.uNrmG={value:l.G.normal},t.uniforms.uNrmD={value:l.D.normal},t.uniforms.uNrmR={value:l.R.normal},t.uniforms.uNrmM={value:l.M.normal},t.uniforms.uMask={value:u},t.uniforms.uNoise={value:d},t.uniforms.uTintA={value:new e(...f)},t.uniforms.uTintB={value:new e(...p)},t.uniforms.uTintC={value:new e(...h)},t.uniforms.uRoadTint={value:new e(...g)},t.uniforms.uMarshGloss={value:s.marshGloss??0},t.uniforms.uMicroAmp={value:s.microAmp??1},t.uniforms.uStrata={value:s.strata??0},t.uniforms.uRoadTex={value:s.pavedRoads?1:J(s.roadTexMix??0,0,1)},t.uniforms.uTownWear={value:s.townWear??1},t.uniforms.uIceDrift={value:s.iceLake||s.seaLake?s.iceDrift??.85:0},t.uniforms.uSea={value:+!!s.seaLake},t.uniforms.uSeaFoam={value:s.seaLake?s.seaFoam??.8:0},t.uniforms.uSeaRamp={value:new r(...s.seaRamp||[.4,.78])},t.uniforms.uMidRelief={value:s.midRelief??1},t.uniforms.uFieldPatch={value:s.fieldPatch??0},t.uniforms.uSandMacro={value:s.sandMacro??0},t.uniforms.uIceSky={value:new e(...s.iceSky||[.66,.72,.82])},t.uniforms.uMidFar={value:s.midReliefFar??480},t.uniforms.uRockGate={value:+!!o};{let n=s.rippleDir||[.8,.6],r=Math.hypot(n[0],n[1])||1;t.uniforms.uRipple={value:new e(n[0]/r,n[1]/r,s.rippleAmp??0)}}t.vertexShader=Ve(t.vertexShader,`#include <common>`,`#include <common>
varying vec3 vWPos;
varying vec3 vWNormal;`),t.vertexShader=Ve(t.vertexShader,`#include <worldpos_vertex>`,`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWNormal = normalize(mat3(modelMatrix) * objectNormal);`),t.fragmentShader=Ve(t.fragmentShader,`#include <common>`,`#include <common>
`+He),t.fragmentShader=Ve(t.fragmentShader,`#include <map_fragment>`,`splatCompute();
diffuseColor.rgb *= gSplatAlbedo;`),t.fragmentShader=Ve(t.fragmentShader,`#include <roughnessmap_fragment>`,`float roughnessFactor = roughness * gSplatRough;`),t.fragmentShader=Ve(t.fragmentShader,`#include <normal_fragment_maps>`,Ue)}),_.customProgramCacheKey=()=>`world-terrain-splat-v21`,_}var Ge=8,Ke=K/Ge,qe=[96,48,24],Je=6.5,Ye=96;function Xe(e,t,n){let r=Ke/Ye,i=new Float64Array(9801);for(let a=0;a<99;a++)for(let o=0;o<99;o++)i[a*99+o]=e.getHeightAt(t+(o-1)*r,n+(a-1)*r);return{hgrid:i,pn:99,stepF:r}}function Ze(e,t,n,r,i){let a=r+1,o=Ke/r,c=Ye/r,l=i?.hgrid||null,u=i?.pn||0,f=i?.stepF||Ke/Ye,p=4*r,m=a*a+p,h=new Float32Array(m*3),g=new Float32Array(m*3),_=1/(2*f),v=0;for(let r=0;r<a;r++)for(let i=0;i<a;i++){let a=t+i*o,s=n+r*o,d=l?(r*c+1)*u+(i*c+1):0,p=l?l[d]:e.getHeightAt(a,s);h[v*3]=a,h[v*3+1]=p,h[v*3+2]=s;let m=l?l[d-1]:e.getHeightAt(a-f,s),y=l?l[d+1]:e.getHeightAt(a+f,s),b=l?l[d-u]:e.getHeightAt(a,s-f),x=l?l[d+u]:e.getHeightAt(a,s+f),S=(m-y)*_,C=(b-x)*_,w=1/Math.sqrt(S*S+1+C*C);g[v*3]=S*w,g[v*3+1]=w,g[v*3+2]=C*w,v++}let y=[];for(let e=0;e<r;e++)y.push(e);for(let e=0;e<r;e++)y.push(e*a+(a-1));for(let e=r;e>0;e--)y.push((a-1)*a+e);for(let e=r;e>0;e--)y.push(e*a);let b=t+Ke/2,x=n+Ke/2;for(let e=0;e<p;e++){let t=y[e],n=a*a+e;h[n*3]=h[t*3],h[n*3+1]=h[t*3+1]-Je,h[n*3+2]=h[t*3+2];let r=h[t*3]-b,i=h[t*3+2]-x,o=Math.hypot(r,i)||1;r/=o,i/=o;let s=-.55,c=1/Math.hypot(r,s,i);g[n*3]=r*c,g[n*3+1]=s*c,g[n*3+2]=i*c}let S=new Uint32Array(r*r*6+p*6),C=0;for(let e=0;e<r;e++)for(let t=0;t<r;t++){let n=e*a+t,r=n+1,i=n+a,o=i+1;S[C++]=n,S[C++]=i,S[C++]=r,S[C++]=r,S[C++]=i,S[C++]=o}for(let e=0;e<p;e++){let t=y[e],n=y[(e+1)%p],r=a*a+e,i=a*a+(e+1)%p;S[C++]=t,S[C++]=r,S[C++]=n,S[C++]=n,S[C++]=r,S[C++]=i}let w=new s;return w.setAttribute(`position`,new d(h,3)),w.setAttribute(`normal`,new d(g,3)),w.setIndex(new d(S,1)),w.computeBoundingSphere(),w}function Qe(e,t,n=null){let r=et(e,t,n),i=r.next();for(;!i.done;)i=r.next();return i.value}async function $e(e,t,n=null,r=null,i=!1,a=null){let o=et(e,t,n,a),s=o.next();for(;!s.done;)r&&(i||s.value[2])&&await r(s.value[0],s.value[1]),s=o.next();return s.value}function*et(e,t,r,i=null){let a=new n;a.name=`terrain`,a.add(pe(t,r,1337)),yield[0,66,!0];let o=We(t,e._layout,r?r.splat:null,r&&r.id||`verdant`,e._mesaW||null),s=[],c=i?.streamFarLods===!0,l=i?.focus||e._layout?.spawns?.player||{x:0,z:0},u=0,d=0;yield[1,66,!0];for(let t=0;t<Ge;t++)for(let n=0;n<Ge;n++){let r=-512+n*Ke,i=-512+t*Ke,f=r+Ke/2,m=i+Ke/2,h=Math.hypot(l.x-f,l.z-m),g=c?x(h):[0,1,2],_=!c||g.some(e=>e<2)?Xe(e,r,i):null;_&&d++;let v=[null,null,null];for(let t of g)v[t]=Ze(e,r,i,qe[t],_),u++;let y=c?g[0]:2,b=new p(v[y],o);b.receiveShadow=!0,b.castShadow=!1,b.matrixAutoUpdate=!1,b.updateMatrix(),a.add(b),s.push({mesh:b,lods:v,fine:c&&g.length<qe.length?_:null,level:y,cx:f,cz:m,cx0:r,cz0:i}),yield[2+t*Ge+n+1,66,n===Ge-1]}let f={enabled:c,totalGeometryCount:Ge*Ge*qe.length,initialGeometryCount:u,initialFineGridCount:d,streamedGeometryCount:0},m=0,h={index:-1,level:-1,distanceM:0,urgent:!1};return a.userData.updateLOD=t=>{for(let e of s){let n=b(Math.hypot(t.x-e.cx,t.z-e.cz),e.level);n!==e.level&&e.lods[n]&&(e.level=n,e.mesh.geometry=e.lods[n])}if(!c||++m&3)return;let n=S(s,t.x,t.z,h);if(!n)return;let r=s[n.index];!r.fine&&n.level<2&&(r.fine=Xe(e,r.cx0,r.cz0)),r.lods[n.level]=Ze(e,r.cx0,r.cz0,qe[n.level],r.fine),r.lods.every(Boolean)&&(r.fine=null),f.streamedGeometryCount++;let i=b(Math.hypot(t.x-r.cx,t.z-r.cz),r.level);i===n.level&&(r.level=i,r.mesh.geometry=r.lods[i])},a.userData.streamingStats=f,a}var tt=Object.freeze([Object.freeze({id:`repair`,label:`Repair Kit`,cooldownS:35}),Object.freeze({id:`first_aid`,label:`First Aid Kit`,cooldownS:45}),Object.freeze({id:`extinguisher`,label:`Fire Extinguisher`,cooldownS:25})]);function nt(e,t){return Math.max(0,(Number(t)||0)-(Number(e)||0))}function rt(e,t,n){let r=tt[t];if(!r||!Array.isArray(e))return null;let i=nt(n,e[t]);return i>0?{ok:!1,remainingS:i}:(e[t]=n+r.cooldownS,{ok:!0,cooldownS:r.cooldownS,readyAt:e[t]})}function it(e){for(let t=0;t<tt.length;t++)e[t]=0}export{Ce as a,be as c,B as d,M as f,rt as i,_e as l,nt as n,Qe as o,it as r,$e as s,tt as t,Ae as u};