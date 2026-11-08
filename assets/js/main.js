// Typed headline
const words=["financial platforms","event-driven architectures","AI-augmented engineering","high-performing global teams"];
const el=document.getElementById('typed');let w=0,i=0,del=false;
(function type(){const cur=words[w];el.textContent=cur.slice(0,i);
 if(!del&&i++===cur.length){del=true;return setTimeout(type,1600)}
 if(del&&i--===0){del=false;w=(w+1)%words.length}
 setTimeout(type,del?35:70)})();

// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(n=>io.observe(n));

// Counters
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;
 const n=e.target,t=+n.dataset.count,s=n.dataset.suffix||'';let c=0;
 const step=()=>{c+=Math.max(1,t/40);if(c>=t){n.textContent=t+s}else{n.textContent=Math.floor(c)+s;requestAnimationFrame(step)}};step();co.unobserve(n)}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(n=>co.observe(n));

// Network-of-nodes background (a nod to distributed systems)
const cv=document.getElementById('bg'),cx=cv.getContext('2d');let P=[],mx=-999,my=-999;
function size(){cv.width=innerWidth;cv.height=innerHeight;P=Array.from({length:Math.min(80,innerWidth/18)},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))}
addEventListener('resize',size);addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});size();
(function draw(){cx.clearRect(0,0,cv.width,cv.height);
 P.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>cv.width)p.vx*=-1;if(p.y<0||p.y>cv.height)p.vy*=-1;
  cx.fillStyle='rgba(0,212,255,.7)';cx.beginPath();cx.arc(p.x,p.y,1.6,0,7);cx.fill();
  for(let j=i+1;j<P.length;j++){const q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<130){cx.strokeStyle=`rgba(124,92,255,${.25*(1-d/130)})`;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke()}}
  const dm=Math.hypot(p.x-mx,p.y-my);if(dm<160){cx.strokeStyle=`rgba(255,107,203,${.5*(1-dm/160)})`;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(mx,my);cx.stroke()}});
 requestAnimationFrame(draw)})();
