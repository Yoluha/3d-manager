function setLegalLang(lang) {
    document.querySelectorAll('[lang-block]').forEach(el => el.classList.toggle('active', el.getAttribute('lang-block') === lang));
    document.querySelectorAll('.langtoggle button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    document.documentElement.lang = lang;
    localStorage.setItem('ryu_pricing_lang_legal', lang);
}
setLegalLang((localStorage.getItem('ryu_pricing_lang_legal') || localStorage.getItem('ryu_pricing_lang') || 'pt') === 'en' ? 'en' : 'pt');
