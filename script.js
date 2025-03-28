document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    document.querySelector('.theme-toggle').addEventListener('click', () => {
      root.setAttribute('data-theme', root.getAttribute('data-theme') === 'dark' ? '' : 'dark');
    });
    document.querySelector('.hamburger').addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('show');
    });
    document.querySelectorAll('.reveal').forEach(el => {
      new IntersectionObserver(entries => {
        if(entries[0].isIntersecting) { el.classList.add('active'); }
      }, { threshold: 0.2 }).observe(el);
    });
  });