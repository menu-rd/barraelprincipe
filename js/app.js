const TR=`[00_00_00-00_00_99] Hola.
[00_00_99-00_04_81] En este video te explico cómo funciona este menú digital
[00_04_81-00_08_05] cómo lo usa un cliente para pedir y cómo lo maneja el
[00_08_05-00_09_60] dueño para agregar
[00_09_60-00_12_11] editar o eliminar productos.
[00_12_11-00_14_96] El cliente abre el enlace y ve el logo
[00_14_96-00_18_92] el nombre del negocio y si está abierto o cerrado.
[00_18_92-00_22_40] Más abajo aparecen los productos recomendados.
[00_22_40-00_23_61] Para buscar algo
[00_23_61-00_25_41] toca la lupa y escribe.
[00_25_41-00_26_78] Si prefiere explorar
[00_26_78-00_29_34] toca las tres rayitas y salta directo a
[00_29_34-00_31_47] la categoría que quiera.
[00_31_47-00_32_83] Al tocar un producto
[00_32_83-00_33_62] ve la foto
[00_33_62-00_36_03] la descripción y el precio.
[00_36_03-00_37_48] Elige sus opciones.
[00_37_48-00_39_00] Ajusta la cantidad.
[00_39_00-00_41_09] Puede dejar un comentario
[00_41_09-00_43_83] como sin cebolla y toca agregar.
[00_43_83-00_47_47] Abajo aparece ver pedido con el total.
[00_47_47-00_49_03] Allí revisa todo.
[00_49_03-00_51_16] Escribe su nombre y su dirección.
[00_51_16-00_54_07] Y toca enviar pedido por WhatsApp.
[00_54_07-00_56_97] El pedido llega al negocio completo y listo para
[00_56_97-00_58_17] preparar.
[00_58_17-01_00_55] Ahora la parte del dueño.
[01_00_55-01_02_62] Baja hasta el final del menú
[01_02_62-01_03_49] toca admin
[01_03_49-01_06_23] escribe la contraseña y entra.
[01_06_23-01_09_29] Aparece la barra de modo administrador y botones nuevos
[01_09_29-01_11_15] en cada categoría.
[01_11_15-01_13_22] Para agregar un producto
[01_13_22-01_14_32] toca producto
[01_14_32-01_15_58] sube la foto
[01_15_58-01_17_23] escribe el nombre
[01_17_23-01_20_79] el precio y la descripción y toca guardar.
[01_20_79-01_21_61] Para editar
[01_21_61-01_22_78] toca el producto.
[01_22_78-01_25_83] Cambia lo que necesites y guarda.
[01_25_83-01_29_64] Desde esa misma ventana también puedes moverlo de posición o
[01_29_64-01_30_71] eliminarlo.
[01_30_71-01_31_88] Y antes de borrar
[01_31_88-01_33_38] te pide confirmación.
[01_33_38-01_34_18] En ajustes
[01_34_18-01_35_25] cambias el logo
[01_35_25-01_35_89] el banner
[01_35_89-01_36_95] el WhatsApp
[01_36_95-01_39_44] la ubicación y los horarios.
[01_39_44-01_42_84] Cada cambio se guarda al instante y los clientes lo ven
[01_42_84-01_44_13] enseguida.
[01_44_13-01_45_47] Así de fácil.
[01_45_47-01_47_82] Gracias por ver el video.`;
const sec=s=>{const[m,x,c]=s.split('_').map(Number);return m*60+x+c/100};
const L=TR.split('\n').map(l=>{const m=l.match(/\[(\S+)-(\S+)\]\s*(.*)/);return[sec(m[1]),sec(m[2]),m[3]]});
// [inicio, fin, texto, y(px en el teléfono), lado]
const CO=[[13,15,'🏷️ Logo',223,0],[15,17,'🏪 Nombre',240,1],[17,18.9,'🟢 Abierto / Cerrado',277,0],[18.9,22.4,'⭐ Recomendados',250,1],[23.1,26.5,'🔍 Lupa',513,1],[26.8,31.4,'☰ Categorías',513,0],[33,36,'📸 Foto · 📝 Descripción · 💲 Precio',330,1],[36.3,37.6,'✅ Opciones',470,0],[37.7,39,'➕ Cantidad',985,1],[39.3,41.5,'💬 Comentario',800,0],[41.8,43.8,'Agregar',985,1],[44.2,47.4,'🧾 Total',980,0],[49.4,51.2,'📍 Nombre y dirección',820,1],[51.4,54,'WhatsApp 💚',975,0],[62.4,63.5,'👆 Admin',890,1],[64.8,66.1,'🔐 Contraseña',500,0],[66.2,69.3,'🛠️ Modo administrador',20,1],[73.2,75.5,'➕ Producto',505,0],[75.6,77.2,'📸 Foto',360,1],[77.2,79.2,'✏️ Nombre',460,0],[79.3,81,'💲 Precio y descripción',620,1],[81.6,85.3,'✏️ Editar',400,0],[85.4,91.7,'⬆️⬇️ Mover · 🗑️ Eliminar',860,1],[91.8,93.4,'⚠️ Confirmación',490,0],[94.2,99.5,'⚙️ Ajustes',90,1],[99.6,104,'⚡ Al instante',700,0]];
const st=document.getElementById('st'),a=document.getElementById('a'),cap=document.getElementById('cap'),chip=document.getElementById('chip');
const cos=CO.map(c=>{const e=document.createElement('div');e.className='co';e.dataset.t=c[0];e.dataset.u=c[1];e.dataset.x='p';e.textContent=c[2];e.style.top=(230+c[3])+'px';e.style[c[4]?'left':'right']='790px';e.style.animationDuration=(5+Math.random()*3)+'s';e.style.animationDelay=(-Math.random()*5)+'s';e.style.transform='';st.appendChild(e);return e});
const fr=document.getElementById('fr'),rg=document.getElementById('rg'),K=532/390;
const W=()=>fr.contentWindow,D=()=>fr.contentDocument;
function loadReal(){fr.onload=()=>{try{const w=W();w.open=()=>({});w.confirm=()=>false;const e=w.document.createElement('script');e.textContent='persist=function(){};pushRemote=function(){}';w.document.body.appendChild(e);w.document.documentElement.style.scrollBehavior='smooth'}catch(e){}};fr.src='menu/index.html'}
function tap(sel,fn,sc){try{const d=D(),el=typeof sel=='string'?d.querySelector(sel):sel;if(!el)return;if(sc)el.scrollIntoView({block:'center',behavior:'instant'});const r=el.getBoundingClientRect();rg.style.left=(r.left+r.width/2)*K+'px';rg.style.top=(r.top+r.height/2)*K+'px';rg.classList.remove('show');void rg.offsetWidth;rg.classList.add('show');sfx('k');setTimeout(()=>{try{fn?fn():el.click()}catch(e){}},260)}catch(e){}}
function typeInto(sel,txt,dur){const el=D().querySelector(sel);if(!el)return;el.focus&&el.focus();let i=0;const n=txt.length,iv=setInterval(()=>{i++;el.value=txt.slice(0,i);el.dispatchEvent(new (W().Event)('input',{bubbles:true}));sfx('k');if(i>=n)clearInterval(iv)},dur*1000/n)}
const sc=(y,x)=>{try{W().scrollTo({top:y,behavior:'smooth'})}catch(e){}};
function mscroll(f){try{const d=D();const m=[...d.querySelectorAll('#md,#md *')].find(e=>e.scrollHeight>e.clientHeight+20&&/auto|scroll/.test(W().getComputedStyle(e).overflowY));m&&m.scrollTo({top:(m.scrollHeight-m.clientHeight)*f,behavior:'smooth'})}catch(e){}}
const EV=s=>{const d=D(),e=d.createElement('script');e.textContent=s;d.body.appendChild(e)};
const ACTS=[
[18.9,()=>D().getElementById('rec').scrollIntoView({behavior:'smooth',block:'start'})],
[22.4,()=>sc(0)],[23.2,()=>tap('[data-act=srch]')],[23.9,()=>typeInto('#q',"yaroa",1.3)],
[26.2,()=>tap('[data-act=srch]')],[26.9,()=>tap('[data-act=cats]')],[29.4,()=>tap('.cat[data-go=c0]')],
[31.6,()=>tap('.row[data-p="0.0"]',0,1)],
[36.2,()=>tap('#mods .opt',0,1)],[37.9,()=>tap('#pl')],[39.4,()=>tap('#cmt',0,1)],[39.8,()=>typeInto('#cmt','sin cebolla',1.7)],[42.3,()=>tap('#add',0,1)],
[47.0,()=>tap('#bar')],[49.3,()=>{tap('#nm');typeInto('#nm','María',0.9)}],[50.1,()=>{tap('#ad');typeInto('#ad','Calle 5 #12',0.9)}],[51.5,()=>tap('#send')],
[58.4,()=>loadReal()],[60.7,()=>sc(1e6)],[62.5,()=>tap('#alink',0,1)],[64.6,()=>typeInto('#apw','clave123',1.3)],
[66.1,()=>{EV("adm=true;admUI();shut(document.getElementById('md'));redraw()")}],[67.0,()=>D().getElementById('c2').scrollIntoView({behavior:'smooth',block:'start'})],
[73.1,()=>tap('[data-ac=add][data-ci="2"]',0,1)],[75.6,()=>tap('.fbtn',()=>{try{EV("var p=C[2][2][0];pend=(typeof PIMG==\"function\"?PIMG(p):IM[p[2]])||null;if(pend)document.getElementById('epi').src=pend")}catch(e){}})],
[77.3,()=>{tap('#epn');typeInto('#epn',"Pechurina 8 Piezas XL",1.3)}],[79.4,()=>{tap('#epp');typeInto('#epp',"565",.6)}],[80.1,()=>typeInto('#epd',"Con salsa de la casa",.9)],[81.0,()=>tap('#eps',0,1)],
[82.0,()=>tap('.row[data-p="2.1"]',()=>W().editProd(2,1),1)],[83.4,()=>{tap('#epp');typeInto('#epp',"285",.6)}],[86.0,()=>tap('#epu',()=>{},1)],[88.4,()=>tap('#epv',()=>{},1)],[90.3,()=>tap('#epx',()=>{},1)],
[93.4,()=>EV("shut(document.getElementById('md'))")],[93.9,()=>tap('[data-ad=cfg]')],
[95.3,()=>mscroll(.3)],[96.0,()=>mscroll(.55)],[96.9,()=>mscroll(.8)],[97.9,()=>mscroll(1)],[99.6,()=>{try{W().toast('Cambios guardados al instante ✓')}catch(e){}}]];
const CH2=[[12.1,'CLIENTE · ABRE EL ENLACE'],[22.4,'CLIENTE · BUSCA Y EXPLORA'],[31.5,'CLIENTE · ELIGE'],[43.8,'CLIENTE · PIDE'],[60.5,'DUEÑO · ENTRA'],[69.3,'DUEÑO · AGREGA Y EDITA'],[93.4,'DUEÑO · AJUSTES']];
function setChip(t){if(t<12.1||t>=104.1||(t>=57.9&&t<60.5))return;const c=CH2.filter(x=>t>=x[0]).pop()[1];if(c!=cur){cur=c;chip.classList.add('sw');setTimeout(()=>{chip.textContent=c;chip.classList.remove('sw')},180)}}
let ai=0,lt=0;
function runActs(t){setChip(t);if(t<lt-1)ai=0;lt=t;while(ai<ACTS.length&&ACTS[ai][0]<=t){const A=ACTS[ai++];if(t-A[0]<.6)try{A[1]()}catch(e){}}}

function fit(){const k=Math.min(innerWidth/1080,innerHeight/1920);st.style.transform=`scale(${k}) translate(-50%,-50%)`;st.style.left='50%';st.style.top='50%';st.style.transformOrigin='0 0';st.style.marginLeft=0}
addEventListener('resize',fit);fit();
const S=[...document.querySelectorAll('[data-s]')].map(e=>({e,a:+e.dataset.s.split(',')[0],b:+e.dataset.s.split(',')[1]}));
const T=[...document.querySelectorAll('[data-t]')].map(e=>({e,t:+e.dataset.t,u:e.dataset.u?+e.dataset.u:1e9,x:e.dataset.x||'k'}));
let AX,MG,tm=0,last=0,cur='';
function ax(){if(!AX){AX=new (window.AudioContext||webkitAudioContext)();MG=AX.createGain();MG.gain.value=1;MG.connect(AX.destination)}return AX}
function tone(f,d,ty='sine',v=.12,f2){const c=ax(),o=c.createOscillator(),g=c.createGain(),n=c.currentTime;o.type=ty;o.frequency.setValueAtTime(f,n);if(f2)o.frequency.exponentialRampToValueAtTime(f2,n+d);g.gain.setValueAtTime(v,n);g.gain.exponentialRampToValueAtTime(.001,n+d);o.connect(g).connect(MG);o.start(n);o.stop(n+d)}
function whoosh(){const c=ax(),n=c.currentTime,b=c.createBuffer(1,c.sampleRate*.6,c.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;const s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=b;f.type='bandpass';f.Q.value=2;f.frequency.setValueAtTime(300,n);f.frequency.exponentialRampToValueAtTime(4000,n+.5);g.gain.setValueAtTime(.001,n);g.gain.linearRampToValueAtTime(.18,n+.2);g.gain.exponentialRampToValueAtTime(.001,n+.6);s.connect(f).connect(g).connect(MG);s.start()}
const SFX={p:()=>tone(500,.14,'sine',.14,900),k:()=>tone(1800,.04,'square',.04),w:whoosh,d:()=>{tone(880,.4,'sine',.1);setTimeout(()=>tone(1318,.5,'sine',.1),110)}};
function sfx(k){try{SFX[k]()}catch(e){}}
// música de fondo suave
let step=0,mi;const CH=[[220,261.6,329.6],[174.6,220,261.6],[196,246.9,293.7],[164.8,207.6,246.9]];
function music(){const c=ax();if(step%8==0){const ch=CH[(step/8|0)%4];ch.forEach(f=>tone(f,3.2,'triangle',.018))}if(step%4==0)tone(110,.3,'sine',.07,45);if(step%2)tone(7000,.03,'square',.004);if(step%8==4)tone(CH[(step/8|0)%4][0]/2,.5,'sine',.05);step++}
// tecleo
let ty=0;
function frame(){const t=a.currentTime;
S.forEach(o=>{const on=t>=o.a&&t<o.b;if(on!=o.e.classList.contains('on')){o.e.classList.toggle('on',on);if(on&&!a.paused&&t-last<.4&&o.e.dataset.x=='w')sfx('w');if(on&&o.e.dataset.chip&&o.e.dataset.chip!=cur){cur=o.e.dataset.chip;chip.classList.add('sw');setTimeout(()=>{chip.textContent=cur;chip.classList.remove('sw')},180)}}});
if(!a.paused)runActs(t);const cs=S.find(o=>o.e.dataset.chip&&t>=o.a&&t<o.b);
T.forEach(o=>{const on=t>=o.t&&t<o.u;const was=o.e.classList.contains('show');if(on!=was){o.e.classList.toggle('show',on);if(on&&!a.paused&&t-last<.4&&o.x!='k')sfx(o.x)}});
const l=L.find(x=>t>=x[0]&&t<x[1])||L[L.length-1];const w=l[2].split(' ');
if(cap.dataset.k!=l[0]){cap.dataset.k=l[0];cap.innerHTML=w.map(x=>`<span>${x}</span>`).join('')}
const p=(t-l[0])/(l[1]-l[0]);[...cap.children].forEach((s,i)=>s.classList.toggle('w',p>=i/w.length&&p<(i+1)/w.length+.02));
const q=document.getElementById('q');if(q)q.textContent=t>=38.4?'2':'1';
document.getElementById('pg').style.width=(t/a.duration*100||0)+'%';last=t;requestAnimationFrame(frame)}
// anillos de toque
[[23.2,170,120],[26.9,480,100],[42,300,980],[44.2,300,980],[51.4,300,780],[62.4,500,1010],[67.6,300,1000],[73.2,300,1000],[80.9,300,1000]].forEach(r=>{});
let started=0;
function startPlay(){loadReal();document.getElementById('go').style.display='none';ax().resume();a.currentTime=0;a.play();clearInterval(mi);mi=setInterval(()=>{if(!a.paused)music()},375);if(!started){started=1;frame()}}
document.getElementById('pl').onclick=startPlay;
let REC=null,chunks=[],DST,MS;
async function exportVideo(){const s=document.getElementById('exs');try{
s.textContent='Elige «Esta pestaña» en el aviso del navegador…';
document.body.classList.add('exp');const c=ax();if(!DST){DST=c.createMediaStreamDestination();MG.connect(DST);MS=c.createMediaElementSource(a);MS.connect(c.destination);MS.connect(DST)}
let tg=null;if(window.CropTarget)try{tg=await CropTarget.fromElement(st)}catch(e){}
const ds=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:30},audio:false,preferCurrentTab:true,selfBrowserSurface:'include'});
const vt=ds.getVideoTracks()[0];if(tg&&vt.cropTo)try{await vt.cropTo(tg)}catch(e){}
s.textContent='Preparando… no toques nada';await new Promise(r=>setTimeout(r,1500));
const mt=['video/mp4;codecs=avc1.42E01E,mp4a.40.2','video/mp4','video/webm;codecs=vp9,opus','video/webm'].find(m=>MediaRecorder.isTypeSupported(m));
REC=new MediaRecorder(new MediaStream([vt,...DST.stream.getAudioTracks()]),{mimeType:mt,videoBitsPerSecond:3e6,audioBitsPerSecond:96e3});chunks=[];
REC.ondataavailable=e=>e.data.size&&chunks.push(e.data);
REC.onstop=()=>{document.body.classList.remove('exp');ds.getTracks().forEach(x=>x.stop());const ext=mt.startsWith('video/mp4')?'mp4':'webm',l=document.createElement('a');l.href=URL.createObjectURL(new Blob(chunks,{type:mt}));l.download='barra-el-principe-menu-digital.'+ext;l.click();s.textContent=ext=='mp4'?'Listo: se descargó el .mp4':'Tu navegador solo graba .webm: se descargó como .webm'};
document.getElementById('go').style.display='none';REC.start(1000);startPlay();
}catch(e){document.body.classList.remove('exp');document.getElementById('go').style.display='flex';s.textContent='No se pudo exportar aquí ('+(e.name||e)+'). Abre el enlace en su propia pestaña, en Chrome de escritorio, e inténtalo de nuevo.'}}
document.getElementById('ex').onclick=exportVideo;
a.onended=()=>{if(REC&&REC.state!='inactive')setTimeout(()=>REC.stop(),600);document.getElementById('go').style.display='flex';document.getElementById('pl').textContent='↺ Ver otra vez'};
st.onclick=()=>{a.paused?a.play():a.pause()};
