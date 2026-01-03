const translations = {
  en: {
    home: "HOME",
    signup: "SIGN UP",
    choose_destination: "Choose Your Destination",
    socials: "Socials",
    tours: "Tours",
    individual_tours: "Individual Tours",
    group_tours: "Group Tours",
    events: "Events",
    location: "Location",

    adjara: "Adjara",
    guria: "Guria",
    imereti: "Imereti",
    kakheti: "Kakheti",
    kvemo_kartli: "Kvemo Kartli",
    mtskheta_mtianeti: "Mtskheta Mtianeti",
    samegrelo: "Samegrelo",
    samtskhe_javakheti: "Samtskhe Javakheti",
    shida_kartli: "Shida Kartli",
    svaneti: "Svaneti",

    name_label: "Name:",
    email_label: "Email:",
    password_label: "Password:",
    gender: "Gender:",
    male: "Male",
    female: "Female",
    submit: "Sign Up",

    name_placeholder: "Enter Your Name",
    email_placeholder: "Enter Your Email",
    password_placeholder: "Enter Your Password",
  },

  ka: {
    home: "მთავარი",
    signup: "რეგისტრაცია",
    choose_destination: "აირჩიე შენი მიმართულება",
    socials: "სოციალური ქსელები",
    tours: "ტურები",
    individual_tours: "ინდივიდუალური ტურები",
    group_tours: "ჯგუფური ტურები",
    events: "ღონისძიებები",
    location: "მდებარეობა",

    adjara: "აჭარა",
    guria: "გურია",
    imereti: "იმერეთი",
    kakheti: "კახეთი",
    kvemokartli: "ქვემო ქართლი",
    mtskhetamtianeti: "მცხეთა მთიანეთი",
    samegrelo: "სამეგრელო",
    samtskhejavakheti: "სამცხე ჯავახეთი",
    shidakartli: "შიდა ქართლი",
    svaneti: "სვანეთი",

    name_label: "სახელი:",
    email_label: "ელ.ფოსტა:",
    password_label: "პაროლი:",
    gender: "სქესი:",
    male: "მამრობითი",
    female: "მდედრობითი",
    submit: "რეგისტრაცია",

    name_placeholder: "შეიყვანეთ სახელი",
    email_placeholder: "შეიყვანეთ ელ.ფოსტა",
    password_placeholder: "შეიყვანეთ პაროლი",
  },
};

function setLanguage(lang) {
  // Text content
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      if (el.tagName === "INPUT" && el.type === "submit") {
        el.value = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Placeholders
  document.querySelectorAll("[data-placeholder]").forEach(el => {
    const key = el.getAttribute("data-placeholder");
    el.placeholder = translations[lang][key];
  });

  localStorage.setItem("language", lang);
}

// Load saved language
const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);