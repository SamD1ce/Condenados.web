// Animación de parallax y aparición de todos los elementos
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelector('.hero .background').style.transform = `translateY(${scrollY * 0.2}px)`;

  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add('active');
  });
});
