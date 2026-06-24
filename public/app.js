function toggleMenu(){document.querySelector('.mobile-menu')?.classList.toggle('open')}
function year(){document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear())}
window.addEventListener('DOMContentLoaded',year)
