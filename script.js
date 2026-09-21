const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
if(menuToggle){
  menuToggle.addEventListener('click',()=>{
    const open=navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(open));
  });
}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.menu-tabs button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.menu-tabs button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    document.querySelectorAll('.menu-card').forEach(card=>{
      card.classList.toggle('hidden',filter!=='all' && card.dataset.category!==filter);
    });
  });
});

const form=document.getElementById('contactForm');
const status=document.getElementById('formStatus');
form.addEventListener('submit',e=>{
  e.preventDefault();
  if(!form.checkValidity()){
    form.reportValidity();
    return;
  }
  // Frontend-only demo: intentionally no network request and no localStorage.
  status.textContent='Thank you! Your enquiry is ready to be connected to a secure backend.';
  status.style.color='#557360';
  form.reset();
});

document.getElementById('year').textContent=new Date().getFullYear();
