function navigations() {
    const navLinks = document.querySelectorAll('.nav-item');

    if (!navLinks.length) {
        return;
    }

    const pagePath = window.location.pathname
            .replace('/', '')
            .split('.')[0];

    navLinks.forEach(item => {
        const pageId = item.dataset.page;

        if (pageId === pagePath || pageId === 'index' && !pagePath) {
            item.classList.add('current');
        } else {
            item.classList.remove('current');
        }
    });
}

export { navigations };