document.documentElement.classList.add('js');
const preference=matchMedia('(prefers-reduced-motion: reduce)'),button=document.querySelector('.motion'),photo=document.querySelector('.hero-photo'),image=photo.querySelector('img');let paused=false,queued=false;
function paint(){queued=false;const off=paused||preference.matches,r=photo.getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight-r.top)/(innerHeight+r.height)));const travel=r.height*(innerWidth<701?.18:.26),scale=innerWidth<701?1.20:1.28;image.style.transform=off?'none':`translateY(${(p-.5)*travel}px) scale(${scale})`;document.documentElement.style.setProperty('--reading-progress',`${Math.min(100,100*scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight))}%`)}
function schedule(){if(!queued){queued=true;requestAnimationFrame(paint)}}
function state(){const off=paused||preference.matches;document.body.classList.toggle('motion-off',off);button.textContent=off?'Ruch: wyłączony':'Ruch: włączony';button.setAttribute('aria-pressed',String(off));button.disabled=preference.matches;schedule()}
button.addEventListener('click',()=>{paused=!paused;state()});preference.addEventListener('change',state);addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);state();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.06});document.querySelectorAll('.label,h2,.body-copy p,.brief-list li,.campaign-photo,.section-banner,.pending-panel,.season-grid').forEach(e=>{e.classList.add('reveal');observer.observe(e)});
document.addEventListener('focusin',e=>{for(let node=e.target;node&&node!==document.body;node=node.parentElement)if(node.classList.contains('reveal'))node.classList.add('visible')});

// Native carousel: one-card navigation, responsive sizing and no autoplay.
document.querySelectorAll('[data-carousel]').forEach(carousel=>{
  const track=carousel.querySelector('.inspiration-track'),unit=carousel.dataset.unit;
  const cards=[...track.querySelectorAll('.inspiration-card')],prev=carousel.querySelector('.carousel-prev'),next=carousel.querySelector('.carousel-next'),count=carousel.querySelector('.carousel-count');
  let carouselTimer;
  const step=()=>cards[0].getBoundingClientRect().width+parseFloat(getComputedStyle(track).gap);
  function updateCarousel(){
    const left=track.scrollLeft,max=track.scrollWidth-track.clientWidth;
    prev.disabled=left<2;next.disabled=left>=max-2;
    const first=Math.min(cards.length,Math.floor((left+2)/step())+1),last=Math.min(cards.length,Math.ceil((left+track.clientWidth-2)/step()));
    count.textContent=first===last?`${String(first).padStart(2,'0')} / ${cards.length} ${unit}`:`${String(first).padStart(2,'0')}–${String(last).padStart(2,'0')} / ${cards.length} ${unit}`;
  }
  function advance(direction){
    const current=Math.round(track.scrollLeft/step());
    track.scrollTo({left:Math.max(0,(current+direction)*step()),behavior:paused||preference.matches?'instant':'smooth'});
  }
  prev.addEventListener('click',()=>advance(-1));next.addEventListener('click',()=>advance(1));
  track.addEventListener('keydown',e=>{if(e.target!==track)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();advance(e.key==='ArrowRight'?1:-1)}});
  track.addEventListener('scroll',()=>{clearTimeout(carouselTimer);carouselTimer=setTimeout(updateCarousel,100)},{passive:true});
  new ResizeObserver(updateCarousel).observe(track);updateCarousel();
});
