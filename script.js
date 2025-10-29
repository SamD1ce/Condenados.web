// Parallax header y animación de secciones
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelector('.hero .background').style.transform = `translateY(${scrollY * 0.3}px)`;

  document.querySelectorAll('.reveal').forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) sec.classList.add('active');
  });
});
