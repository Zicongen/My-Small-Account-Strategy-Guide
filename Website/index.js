
  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, (entry.target.dataset.delay || 0));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.quality-card, .criteria-item, .rule-card, .present-card, .reveal, .broker-card').forEach((el, i) => {
    el.dataset.delay = (i % 4) * 80;
    observer.observe(el);
  });

  // Active nav link highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.id;
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === '#' + current
        ? 'var(--pro-white)' : '';
      link.style.background = link.getAttribute('href') === '#' + current
        ? 'rgba(112,94,236,0.12)' : '';
      link.style.borderColor = link.getAttribute('href') === '#' + current
        ? 'var(--pro-border)' : 'transparent';
    });
  });
