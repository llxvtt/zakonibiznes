<script setup>
import { ref } from "vue";
import Button from "@/components/Button.vue";
const emit = defineEmits(["close"]);

const accordions = ref({
      foreigners: false,
      legal: false,
      personal: false,
});

const toggleAccordion = (key) => {
      accordions.value[key] = !accordions.value[key];
};
</script>

<template>
      <header class="header-menu">
            <div class="container">
                  <div class="header-menu__top">
                        <div class="header-menu__top-wrapper">
                              <a href="#!" class="header-menu__logo">
                                    <img src="../assets/images/logo.svg" alt="logo" />
                              </a>
                              <button class="header-menu__top-burger" @click="emit('close')">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M15 13.2325L21.1875 7.045L22.955 8.8125L16.7675 15L22.955 21.1875L21.1875 22.955L15 16.7675L8.81248 22.955L7.04498 21.1875L13.2325 15L7.04498 8.8125L8.81248 7.045L15 13.2325Z" fill="#1D4279" fill-opacity="0.5" />
                                    </svg>
                              </button>
                        </div>

                        <div class="header-menu__search">
                              <input type="text" class="header-menu__search-input" placeholder="Поиск по сайту" />
                              <button class="header-menu__search-btn">
                                    <img src="/icons/search.svg" alt="icon" />
                              </button>
                        </div>
                  </div>

                  <nav class="header-menu__nav">
                        <ul class="header-menu__menu">
                              <li class="header-menu__menu-item">
                                    <router-link to="/" class="header-menu__menu-link">Главная</router-link>
                              </li>

                              <li class="header-menu__menu-item">
                                    <button class="header-menu__menu-link" @click.stop="toggleAccordion('foreigners')">
                                          Для иностранцев
                                          <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
                                                <path :class="{ open: accordions.foreigners }" d="M7 5.46973L12.4697 0L14 1.53027L7 8.53027L0 1.53027L1.53027 0L7 5.46973Z" fill="#9B2D30" />
                                          </svg>
                                    </button>
                                    <transition name="accordion">
                                          <ul v-show="accordions.foreigners" class="header-menu__submenu" @click="emit('close')">
                                                <li><a href="#!">Получение квоты</a></li>
                                                <li><a href="#!">Получение РВП РФ</a></li>
                                                <li><a href="#!">Получение ВНЖ</a></li>
                                                <li><a href="#!">Получение гражданства РФ</a></li>
                                                <li><a href="#!">Получение статуса НРЯ</a></li>
                                                <li><a href="#!">Судебная защита</a></li>
                                                <li><a href="#!">Получение ИНН</a></li>
                                                <li><a href="#!">Получение СНИЛС</a></li>
                                                <li><a href="#!">Восстановление документов</a></li>
                                                <li><a href="#!">Подача запросов</a></li>
                                          </ul>
                                    </transition>
                              </li>

                              <li class="header-menu__menu-item">
                                    <button class="header-menu__menu-link" @click.stop="toggleAccordion('legal')">
                                          Для юр лиц
                                          <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
                                                <path :class="{ open: accordions.legal }" d="M7 5.46973L12.4697 0L14 1.53027L7 8.53027L0 1.53027L1.53027 0L7 5.46973Z" fill="#9B2D30" />
                                          </svg>
                                    </button>
                                    <transition name="accordion">
                                          <ul v-show="accordions.legal" class="header-menu__submenu" @click="emit('close')">
                                                <li><a href="#!">Подготовка трудового договора</a></li>
                                                <li><a href="#!">Уведомление о приеме иностранца</a></li>
                                                <li><a href="#!">Регистрация иностранцев</a></li>
                                                <li><a href="#!">Судебная защита работодателей</a></li>
                                                <li><a href="#!">Миграционный аудит</a></li>
                                                <li><a href="#!">Оформление ИНН</a></li>
                                                <li><a href="#!">Оформление СНИЛС</a></li>
                                                <li><a href="#!">Как принять на работу мигранта</a></li>
                                          </ul>
                                    </transition>
                              </li>

                              <li class="header-menu__menu-item">
                                    <button class="header-menu__menu-link" @click.stop="toggleAccordion('personal')">
                                          Для физ лиц
                                          <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
                                                <path :class="{ open: accordions.personal }" d="M7 5.46973L12.4697 0L14 1.53027L7 8.53027L0 1.53027L1.53027 0L7 5.46973Z" fill="#9B2D30" />
                                          </svg>
                                    </button>
                                    <transition name="accordion">
                                          <ul v-show="accordions.personal" class="header-menu__submenu" @click="emit('close')">
                                                <li><a href="#!">Подготовка трудового договора</a></li>
                                                <li><a href="#!">Регистрация иностранцев</a></li>
                                                <li><a href="#!">Уведомление о приеме на работу</a></li>
                                          </ul>
                                    </transition>
                              </li>

                              <li class="header-menu__menu-item"><router-link to="/about" class="header-menu__menu-link">О компании</router-link></li>
                              <li class="header-menu__menu-item"><router-link to="/blog" class="header-menu__menu-link">Блог</router-link></li>
                              <li class="header-menu__menu-item"><router-link to="/contacts" class="header-menu__menu-link">Контакты</router-link></li>
                        </ul>
                  </nav>

                  <div class="header-menu__contacts">
                        <a href="tel:+74954310120" class="header-menu__contacts-phone">
                              <img class="header__phone-icon" src="/icons/device.svg" alt="icon" />
                              <span class="header__phone-number">+7 (495) 431-01-20</span>
                        </a>
                        <Button class="header-menu__contacts-btn" :green="true" size="small" title="Написать в WhatsApp">
                              <template #icon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M6.46 19.57L7.3 20.07C8.73 20.9 10.35 21.33 12 21.33C13.84 21.33 15.65 20.78 17.18 19.76C18.72 18.73 19.91 17.27 20.62 15.57C21.32 13.86 21.51 11.98 21.15 10.17C20.79 8.36 19.9 6.7 18.59 5.4C17.29 4.09 15.63 3.2 13.82 2.84C12.01 2.48 10.13 2.67 8.42 3.37C6.72 4.08 5.26 5.27 4.23 6.81C3.21 8.35 2.66 10.15 2.66 12C2.66 13.67 3.1 15.28 3.93 16.69L4.42 17.53L3.66 20.33L6.46 19.57Z" fill="white" />
                                    </svg>
                              </template>
                        </Button>
                  </div>
            </div>
      </header>
</template>

<style scoped>
.header-menu__submenu {
      overflow: hidden;
      padding-top: 24px;
      padding-left: 10px;
      display: grid;
      gap: 14px;
}
.accordion-enter-active,
.accordion-leave-active {
      transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
      max-height: 0;
      opacity: 0;
}
.accordion-enter-to,
.accordion-leave-from {
      max-height: 500px;
      opacity: 1;
}
.header-menu__menu-link svg {
      transition: transform 0.3s ease;
}
.header-menu__menu-link svg path.open {
      transform: rotate(180deg);
      transform-origin: center;
}
.header-menu__submenu li a {
      font-size: 15px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
      color: var(--text-darkblue);
      display: block;
      padding: 5px 0;
      transition: 0.3s ease;
}
.header-menu__submenu li a:hover {
      color: var(--text-red);
}
</style>
