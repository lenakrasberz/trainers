"use strict";

const DATA = [
  {
    id: 1,
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./img/trainers/trainer-m1.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "8 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    id: 2,
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./img/trainers/trainer-f1.png",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    id: 3,
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./img/trainers/trainer-m2.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    id: 4,
    "first name": "Тетяна",
    "last name": "Мороз",
    photo: "./img/trainers/trainer-f2.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
  },
  {
    id: 5,
    "first name": "Сергій",
    "last name": "Коваленко",
    photo: "./img/trainers/trainer-m3.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
  },
  {
    id: 6,
    "first name": "Олена",
    "last name": "Лисенко",
    photo: "./img/trainers/trainer-f3.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
  },
  {
    id: 7,
    "first name": "Андрій",
    "last name": "Волков",
    photo: "./img/trainers/trainer-m4.jpg",
    specialization: "Бійцівський клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
  },
  {
    id: 8,
    "first name": "Наталія",
    "last name": "Романенко",
    photo: "./img/trainers/trainer-f4.jpg",
    specialization: "Дитячий клуб",
    category: "спеціаліст",
    experience: "3 роки",
    description:
      "Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
  },
  {
    id: 9,
    "first name": "Віталій",
    "last name": "Козлов",
    photo: "./img/trainers/trainer-m5.jpg",
    specialization: "Тренажерний зал",
    category: "майстер",
    experience: "10 років",
    description:
      "Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
  },
  {
    id: 10,
    "first name": "Юлія",
    "last name": "Кравченко",
    photo: "./img/trainers/trainer-f5.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
  },
  {
    id: 11,
    "first name": "Олег",
    "last name": "Мельник",
    photo: "./img/trainers/trainer-m6.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "12 років",
    description:
      "Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
  },
  {
    id: 12,
    "first name": "Лідія",
    "last name": "Попова",
    photo: "./img/trainers/trainer-f6.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
  },
  {
    id: 13,
    "first name": "Роман",
    "last name": "Семенов",
    photo: "./img/trainers/trainer-m7.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
  },
  {
    id: 14,
    "first name": "Анастасія",
    "last name": "Гончарова",
    photo: "./img/trainers/trainer-f7.jpg",
    specialization: "Басейн",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
  },
  {
    id: 15,
    "first name": "Валентин",
    "last name": "Ткаченко",
    photo: "./img/trainers/trainer-m8.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
  },
  {
    id: 16,
    "first name": "Лариса",
    "last name": "Петренко",
    photo: "./img/trainers/trainer-f8.jpg",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "7 років",
    description:
      "Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
  },
  {
    id: 17,
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./img/trainers/trainer-m9.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "11 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    id: 18,
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./img/trainers/trainer-f9.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    id: 19,
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./img/trainers/trainer-m10.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    id: 20,
    "first name": "Наталія",
    "last name": "Бондаренко",
    photo: "./img/trainers/trainer-f10.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "8 років",
    description:
      "Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
  },
  {
    id: 21,
    "first name": "Андрій",
    "last name": "Семенов",
    photo: "./img/trainers/trainer-m11.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
  },
  {
    id: 22,
    "first name": "Софія",
    "last name": "Мельник",
    photo: "./img/trainers/trainer-f11.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "6 років",
    description:
      "Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
  },
  {
    id: 23,
    "first name": "Дмитро",
    "last name": "Ковальчук",
    photo: "./img/trainers/trainer-m12.png",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
  },
  {
    id: 24,
    "first name": "Олена",
    "last name": "Ткаченко",
    photo: "./img/trainers/trainer-f12.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "5 років",
    description:
      "Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
  },
];

//Глобальна змінна, що зберігає відфільтровані дані
let filteredData = [...DATA];

//Пункт Картки тренерів

document.addEventListener("DOMContentLoaded", () => {
  const containerCards = document.querySelector(".trainers-cards__container");
  const filter = document.querySelector(".sidebar");
  const sorting = document.querySelector(".sorting");

  function showCards(data) {
    containerCards.innerHTML = "";
    data.forEach((trainer) => {
      const template = document
        .querySelector("#trainer-card")
        .content.cloneNode(true);
      template.querySelector(".trainer__img").src = trainer.photo;
      template.querySelector(
        ".trainer__name"
      ).textContent = `${trainer["first name"]} ${trainer["last name"]}`;
      template.querySelector(".trainer__show-more").dataset.id = trainer.id;
      containerCards.appendChild(template);
    });
  }
  showCards(filteredData);
  filter.removeAttribute("hidden");
  sorting.removeAttribute("hidden");
});

//Пункт Модальне вікно з інформацією про тренера

const modalTemplate = document.querySelector("#modal-template");
const trainersContainer = document.querySelector(".trainers-cards__container");

function showModalWindow(trainer) {
  const modalElement = modalTemplate.content
    .cloneNode(true)
    .querySelector(".modal");
  modalElement.querySelector(
    ".modal__name"
  ).textContent = `${trainer["last name"]} ${trainer["first name"]} `;
  modalElement.querySelector(".modal__point--category").textContent =
    trainer.category;
  modalElement.querySelector(".modal__point--experience").textContent =
    trainer.experience;
  modalElement.querySelector(".modal__point--specialization").textContent =
    trainer.specialization;
  modalElement.querySelector(".modal__text").textContent = trainer.description;
  const modalImg = modalElement.querySelector(".modal__img");
  modalImg.src = trainer.photo;

  document.body.append(modalElement);

  document.body.style.overflow = "hidden";
  const btnModalClose = document.querySelector(".modal__close");
  btnModalClose.addEventListener("click", closeModalWindow);
}
function closeModalWindow() {
  const modalElement = document.querySelector(".modal");
  if (modalElement) {
    modalElement.remove();
  }
  document.body.style.overflow = "auto";
}

trainersContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("trainer__show-more")) {
    const trainerId = event.target.dataset.id;
    const trainer = DATA.find((t) => t.id === parseInt(trainerId, 10));
    if (trainer) {
    }

    showModalWindow(trainer);
  }
});

//Пункт Сортування карток тренерів

const sortedBtn = document.querySelectorAll(".sorting__btn");
const trainerContainer = document.querySelector(".trainers-cards__container");

function showCards(data) {
  trainerContainer.innerHTML = "";
  data.forEach((trainer) => {
    const template = document
      .querySelector("#trainer-card")
      .content.cloneNode(true);
    template.querySelector(".trainer__img").src = trainer.photo;
    template.querySelector(
      ".trainer__name"
    ).textContent = `${trainer["first name"]} ${trainer["last name"]}`;
    template.querySelector(".trainer__show-more").dataset.id = trainer.id;
    trainerContainer.append(template);
  });
}

function sorting(property, asc = true) {
  filteredData = [...filteredData].sort((a, b) => {
    let aValue = a[property];
    let bValue = b[property];
    if (typeof aValue === "string" && property === "experience") {
      aValue = parseInt(aValue.split(" ")[0], 10);
      bValue = parseInt(bValue.split(" ")[0], 10);
    }
    if (typeof aValue === "number" && typeof bValue === "number") {
      return asc ? aValue - bValue : bValue - aValue;
    }
    return asc ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });
  showCards(filteredData);
}

sortedBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    sortedBtn.forEach((btn) => btn.classList.remove("sorting__btn--active"));
    button.classList.add("sorting__btn--active");
    localStorage.setItem("checkedValue", index);

    if (button.textContent.includes("ЗА ПРІЗВИЩЕМ")) {
      sorting("last name", true);
    } else if (button.textContent.includes("ЗА ДОСВІДОМ")) {
      sorting("experience", false);
    } else {
      filteredData = [...DATA];
      showCards(filteredData);
    }
  });
  window.addEventListener("load", () => {
    const savedIndex = localStorage.getItem("checkedValue");
    if (savedIndex !== null) {
      sortedBtn.forEach((btn) => btn.classList.remove("sorting__btn--active"));
      const activeButton = sortedBtn[savedIndex];
      activeButton.classList.add("sorting__btn--active");
      if (activeButton.textContent.includes("ЗА ПРІЗВИЩЕМ")) {
        sorting("last name", true);
      } else if (activeButton.textContent.includes("ЗА ДОСВІДОМ")) {
        sorting("experience", false);
      } else {
        filteredData = [...DATA];
        showCards(filteredData);
      }
    } else {
      showCards(filteredData);
    }
  });
  // if (localStorage.getItem("checkedValue") === true) {
  //   document.body.classList.add("sorting__btn--active");
  // }
});

//Пункт Фільтрація карток тренерів

const cardContainer = document.querySelector(".trainers-cards__container");
const sideBarForm = document.querySelector(".sidebar__filters");

function showCard(data) {
  cardContainer.innerHTML = "";
  data.forEach((trainer) => {
    const template = document
      .querySelector("#trainer-card")
      .content.cloneNode(true);
    template.querySelector(".trainer__img").src = trainer.photo;
    template.querySelector(
      ".trainer__name"
    ).textContent = `${trainer["first name"]} ${trainer["last name"]}`;
    template.querySelector(".trainer__show-more").dataset.id = trainer.id;
    cardContainer.append(template);
  });
}
showCard(DATA);

const directionMapping = {
  all: "all",
  "fight club": "Бійцівський клуб",
  gym: "Тренажерний зал",
  "kids club": "Дитячий клуб",
  "swimming pool": "Басейн",
};

const categoryMapping = {
  all: "all",
  master: "майстер",
  specialist: "спеціаліст",
  instructor: "інструктор",
};

function filterCards() {
  const selectedDirectionValue = sideBarForm.direction.value;
  const selectedCategoryValue = sideBarForm.category.value;

  filteredData = DATA.filter((trainer) => {
    const direction =
      selectedDirectionValue === "all" ||
      trainer.specialization === directionMapping[selectedDirectionValue];
    const category =
      selectedCategoryValue === "all" ||
      trainer.category === categoryMapping[selectedCategoryValue];
    return direction && category;
  });
  showCard(filteredData);
  localStorage.setItem("selectedDirection", selectedDirectionValue);
  localStorage.setItem("selectedCategory", selectedCategoryValue);
}
window.addEventListener("load", () => {
  const savedDirection = localStorage.getItem("selectedDirection");
  const savedCategory = localStorage.getItem("selectedCategory");
  if (savedDirection) {
    sideBarForm.direction.value = savedDirection;
  }
  if (savedCategory) {
    sideBarForm.category.value = savedCategory;
  }
  filterCards();
});
sideBarForm.addEventListener("submit", (event) => {
  event.preventDefault();
  filterCards();
});

//Preloader

window.addEventListener("load", function () {
  document.getElementById("preloader").style.display = "none";
  document.querySelector(".content").style.display = "block";
});
