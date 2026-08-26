/** Scroll to an in-page section id. Safe on home; from other routes go to / with scroll state */
export function goToSection(navigate, sectionId = 'contact') {
  const id = sectionId.replace(/^#/, '');
  if (window.location.pathname === '/') {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
      return;
    }
  }
  navigate('/', { replace: false, state: { scrollTo: id } });
}
