import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Welcome to TayiraJs": "Welcome to TayiraJs",
      "This is a beautiful and attractive page.": "This is a beautiful and attractive page.",
      "Get Start": "Get Start",
      "Translate (ar)": "Translate (ar)",
      "Created At": "Created At",
      "Open your editor": "Open your editor",
      "Start editing in": "Start editing in",
      "OK!": "OK!"
    }
  },
  ar: {
    translation: {
      "Welcome to TayiraJs": "مرحبًا بك في TayiraJs",
      "This is a beautiful and attractive page.": "هذه صفحة جميلة وجذابة.",
      "Get Start": "ابدأ",
      "Translate (ar)": "ترجمة (عربي)",
      "Created At": "تم الإنشاء في",
      "Open your editor": "افتح محررك",
      "Start editing in": "ابدأ التحرير في",
      "OK!": "حسنًا!"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
