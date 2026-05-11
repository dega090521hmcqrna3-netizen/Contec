// ─── NAV SCROLL ───
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('back-top').classList.toggle('show', window.scrollY > 400);
}, { passive: true });

// ─── SCROLL REVEAL ───
const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// ─── HAMBURGER ───
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
document.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', () => {
    hamburger.classList.remove('open'); mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
}));

// ─── BILLING TOGGLE ───
const btnMensual = document.getElementById('toggle-mensual');
const btnAnual = document.getElementById('toggle-anual');
const panelM = document.getElementById('panel-mensual');
const panelA = document.getElementById('panel-anual');

btnMensual.addEventListener('click', () => {
    btnMensual.classList.add('active');
    btnAnual.classList.remove('active');
    panelM.style.display = '';
    panelA.style.display = 'none';
    // re-trigger reveals
    panelM.querySelectorAll('.reveal').forEach(el => { el.classList.remove('visible'); setTimeout(() => el.classList.add('visible'), 50); });
});
btnAnual.addEventListener('click', () => {
    btnAnual.classList.add('active');
    btnMensual.classList.remove('active');
    panelM.style.display = 'none';
    panelA.style.display = '';
    panelA.querySelectorAll('.reveal').forEach(el => { el.classList.remove('visible'); setTimeout(() => el.classList.add('visible'), 50); });
});

// ─── FAQ ACCORDION ───
document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    });
});

// ─── BACK TO TOP ───
document.getElementById('back-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Nav always scrolled on this page (no hero background needed)
setTimeout(() => nav.classList.add('scrolled'), 10);