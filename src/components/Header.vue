<script setup>
import { ref } from "vue";
import Button from "@/components/Button.vue";
import HeaderBurgerMenu from "@/components/HeaderBurgerMenu.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
      <header class="header">
            <div class="header__top">
                  <div class="container">
                        <div class="header__top-wrapper">
                              <!-- header logo  -->
                              <a href="#!" class="header__logo">
                                    <!-- logo  -->
                                    <img src="../assets/images/logo.svg" alt="logo" />
                              </a>
                              <!-- burger button  -->
                              <button class="header__top-burger" @click="isMenuOpen = true">
                                    <img src="/icons/burger.svg" alt="icon" />
                              </button>
                        </div>
                        <!-- header search  -->
                        <div class="header__search">
                              <input type="text" class="header__search-input" placeholder="Поиск по сайту" />
                              <button class="header__search-btn">
                                    <img src="/icons/search.svg" alt="icon" />
                              </button>
                        </div>

                        <!-- header contacts -->
                        <div class="header__contact">
                              <a href="tel:+74954310120" class="header__contact-phone">
                                    <img class="header__phone-icon" src="/icons/device.svg" alt="icon" />
                                    <span class="header__phone-number">+7 (495) 431-01-20</span>
                              </a>
                              <!-- header contact button  -->
                              <Button class="header__contact-btn" :green="true" size="small" title="Написать в WhatsApp">
                                    <template #icon>
                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.46189 19.5763L7.30656 20.0698C8.73099 20.9006 10.3511 21.3367 12.0001 21.3333C13.846 21.3333 15.6505 20.786 17.1854 19.7604C18.7202 18.7348 19.9165 17.2772 20.6229 15.5717C21.3293 13.8663 21.5142 11.9897 21.1541 10.1792C20.7939 8.36868 19.905 6.70564 18.5997 5.40035C17.2944 4.09506 15.6314 3.20614 13.8209 2.84601C12.0104 2.48589 10.1338 2.67072 8.42834 3.37713C6.7229 4.08355 5.26523 5.27983 4.23967 6.81469C3.21411 8.34955 2.66672 10.1541 2.66672 12C2.66672 13.6753 3.10656 15.2818 3.93139 16.6947L4.42372 17.5393L3.66189 20.3405L6.46189 19.5763ZM0.338056 23.6667L1.91539 17.8707C0.876051 16.089 0.330002 14.0627 0.33339 12C0.33339 5.55651 5.55656 0.333344 12.0001 0.333344C18.4436 0.333344 23.6667 5.55651 23.6667 12C23.6667 18.4435 18.4436 23.6667 12.0001 23.6667C9.9383 23.67 7.91282 23.1244 6.13172 22.0858L0.338056 23.6667ZM7.78956 6.52601C7.94589 6.51434 8.10339 6.51434 8.25972 6.52134C8.32272 6.52601 8.38572 6.53301 8.44872 6.54001C8.63422 6.56101 8.83839 6.67418 8.90722 6.83051C9.25489 7.61918 9.59322 8.41368 9.91989 9.21051C9.99222 9.38784 9.94906 9.61534 9.81139 9.83701C9.71671 9.9869 9.61429 10.1318 9.50456 10.271C9.37272 10.4402 9.08922 10.7505 9.08922 10.7505C9.08922 10.7505 8.97372 10.8882 9.01806 11.0597C9.03439 11.125 9.08806 11.2195 9.13706 11.2988L9.20589 11.4097C9.50456 11.9078 9.90589 12.413 10.3959 12.889C10.5359 13.0243 10.6724 13.1632 10.8194 13.2927C11.3654 13.7745 11.9837 14.1677 12.6511 14.4593L12.6569 14.4617C12.7561 14.5048 12.8062 14.5282 12.9509 14.59C13.0232 14.6203 13.0979 14.6472 13.1737 14.667C13.2521 14.687 13.3346 14.6832 13.4108 14.6562C13.4871 14.6292 13.5536 14.5802 13.6019 14.5153C14.4466 13.4922 14.5236 13.4257 14.5306 13.4257V13.428C14.5892 13.3733 14.659 13.3317 14.735 13.3062C14.8111 13.2806 14.8917 13.2716 14.9716 13.2798C15.0416 13.2845 15.1127 13.2973 15.1781 13.3265C15.7976 13.61 16.8114 14.0522 16.8114 14.0522L17.4904 14.3567C17.6047 14.4115 17.7086 14.541 17.7121 14.6658C17.7167 14.744 17.7237 14.87 17.6969 15.101C17.6596 15.4032 17.5686 15.766 17.4776 15.9562C17.4152 16.086 17.3325 16.2049 17.2326 16.3085C17.1148 16.4321 16.986 16.5446 16.8476 16.6445C16.7997 16.6805 16.7511 16.7155 16.7017 16.7495C16.5566 16.8416 16.4075 16.9272 16.2549 17.0062C15.9545 17.1657 15.6227 17.2573 15.2831 17.2745C15.0672 17.2862 14.8514 17.3025 14.6344 17.2908C14.6251 17.2908 13.9717 17.1893 13.9717 17.1893C12.313 16.7531 10.779 15.9357 9.49172 14.8023C9.22806 14.5702 8.98422 14.3205 8.73456 14.072C7.69622 13.0395 6.91222 11.9253 6.43622 10.873C6.19259 10.3565 6.06098 9.79431 6.05006 9.22334C6.04525 8.515 6.27679 7.82529 6.70806 7.26334C6.79322 7.15368 6.87372 7.03934 7.01256 6.90751C7.16072 6.76751 7.25406 6.69284 7.35556 6.64151C7.49051 6.57388 7.63773 6.5342 7.78839 6.52484L7.78956 6.52601Z" fill="white" />
                                          </svg>
                                    </template>
                              </Button>

                              <button class="header__burger" @click="isMenuOpen = true">
                                    <img src="/icons/burger.svg" alt="icon" />
                              </button>
                        </div>
                  </div>
            </div>
            <nav class="header__nav">
                  <div class="container">
                        <ul class="header__menu">
                              <li class="header__menu-item"><a href="/" class="header__menu-link">Главная</a></li>
                              <li class="header__menu-item">
                                    <a href="#" class="header__menu-link"
                                          >Для иностранцев
                                          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99986 6.36725L13.7749 0.592247L15.4245 2.24191L7.99986 9.66658L0.575195 2.24191L2.22486 0.592247L7.99986 6.36725Z" fill="#9B2D30" fill-opacity="0.5" />
                                          </svg>
                                    </a>

                                    <div class="header__menu-dropdown">
                                          <ul class="header__menu-dropdown-links">
                                                <li><a href="#!">Получение квоты</a></li>
                                                <li><a href="#!">получение рвп рф</a></li>
                                                <li><a href="#!">получение рвпо</a></li>
                                                <li><a href="#!">получение внж</a></li>
                                                <li><a href="#!">пОЛУЧЕНИЕ ГРАЖДАНСТВА РФ</a></li>
                                                <li><a href="#!">пОЛУЧЕНИЕ СТАТУСА НРЯ</a></li>
                                                <li><a href="#!">СУДЕБНАЯ ЗАЩИТА</a></li>
                                                <li><a href="#!">ПОЛУЧЕНИЕ ИНН</a></li>
                                                <li><a href="#!">ПОЛУЧЕНИЕ СНИЛС</a></li>
                                                <li><a href="#!">ВОССТАНОВЛЕНИЕ ДОКУМЕНТОВ</a></li>
                                                <li><a href="#!">ПОДАЧА ЗАПРОСОВ</a></li>
                                          </ul>
                                    </div>
                              </li>
                              <li class="header__menu-item">
                                    <a href="#" class="header__menu-link"
                                          >Для юр лиц
                                          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99986 6.36725L13.7749 0.592247L15.4245 2.24191L7.99986 9.66658L0.575195 2.24191L2.22486 0.592247L7.99986 6.36725Z" fill="#9B2D30" fill-opacity="0.5" />
                                          </svg>
                                    </a>
                                    <div class="header__menu-dropdown">
                                          <ul class="header__menu-dropdown-links">
                                                <li><a href="#!">Подготовка трудового договора</a></li>
                                                <li><a href="#!">уведомление о приеме на работу иностранца</a></li>
                                                <li><a href="#!">регистрация иностранцев</a></li>
                                                <li><a href="#!">судебная защита работодателей</a></li>
                                                <li><a href="#!">миграционный аудит</a></li>
                                                <li><a href="#!">оформление инн для иностранца</a></li>
                                                <li><a href="#!">оформление снилс для иностранца</a></li>
                                                <li><a href="#!">как принять на работу мигранта</a></li>
                                          </ul>
                                    </div>
                              </li>
                              <li class="header__menu-item">
                                    <a href="#" class="header__menu-link"
                                          >Для физ лиц
                                          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99986 6.36725L13.7749 0.592247L15.4245 2.24191L7.99986 9.66658L0.575195 2.24191L2.22486 0.592247L7.99986 6.36725Z" fill="#9B2D30" fill-opacity="0.5" />
                                          </svg>
                                    </a>

                                    <div class="header__menu-dropdown">
                                          <ul class="header__menu-dropdown-links">
                                                <li><a href="#!">ПОДГОТОВКА ТРУДОВОГО ДОГОВОРА</a></li>
                                                <li><a href="#!">РЕГИСТРАЦИЯ ИНОСТРАНЦЕВ</a></li>
                                                <li><a href="#!">УВЕДОМЛЕНИЕ О ПРИЕМЕ НА РАБОТУ</a></li>
                                          </ul>
                                    </div>
                              </li>
                              <li class="header__menu-item"><a to="/about" class="header__menu-link">О компании</a></li>
                              <li class="header__menu-item"><a to="/blog" class="header__menu-link">Блог</a></li>
                              <li class="header__menu-item"><a to="/contacts" class="header__menu-link">Контакты</a></li>
                        </ul>
                  </div>
            </nav>
            <!-- header burger menu  -->
            <transition name="slide">
                  <HeaderBurgerMenu v-if="isMenuOpen" @close="toggleMenu" />
            </transition>
      </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
      transition: all 0.4s ease;
}
.slide-enter-from,
.slide-leave-to {
      opacity: 0;
      transform: translateX(-100%);
}
</style>
