async function setLanguage(lang) {
  try {
    const response = await fetch('/static/translations/' + lang + '.json');

    if (!response.ok) {
      throw new Error(`Failed to load ${lang}.json`);
    }

    const translations = await response.json();

    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.dataset.key;

      if (translations[key]) {
        if (el.tagName === 'INPUT') {
          if (el.type === 'submit') {
            el.value = translations[key];
          } else {
            el.placeholder = translations[key];
          }
        } else if (el.tagName === 'TEXTAREA') {
          el.placeholder = translations[key];
        } else {
          el.textContent = translations[key];
        }
      }

      if (el.dataset.placeholder && translations[el.dataset.placeholder]) {
        el.placeholder = translations[el.dataset.placeholder];
      }
    });

    if (translations.page_title) {
      document.title = translations.page_title;
    }

    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);

  } catch (error) {
    console.error('Translation load error:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language');
  const browserLang = navigator.language.startsWith('ka') ? 'ka' : 'en';
  setLanguage(savedLang || browserLang);
});
