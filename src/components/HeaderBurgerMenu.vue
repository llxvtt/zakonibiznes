<script setup>
import Button from "@/components/Button.vue";

const emit = defineEmits(["close"]);
</script>

<template>
      <header class="header-menu">
            <div class="container">
                  <div class="header-menu__top">
                        <div class="header-menu__top-wrapper">
                              <!-- header-menu logo  -->
                              <a href="#!" class="header-menu__logo">
                                    <img src="../assets/images/logo.svg" alt="logo" />
                              </a>

                              <!-- close burger button -->
                              <button class="header-menu__top-burger" @click="emit('close')">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M15 13.2325L21.1875 7.045L22.955 8.8125L16.7675 15L22.955 21.1875L21.1875 22.955L15 16.7675L8.81248 22.955L7.04498 21.1875L13.2325 15L7.04498 8.8125L8.81248 7.045L15 13.2325Z" fill="#1D4279" fill-opacity="0.5" />
                                    </svg>
                              </button>
                        </div>

                        <!-- header-menu search  -->
                        <div class="header-menu__search">
                              <input type="text" class="header-menu__search-input" placeholder="Поиск по сайту" />
                              <button class="header-menu__search-btn">
                                    <img src="/icons/search.svg" alt="icon" />
                              </button>
                        </div>
                  </div>

                  <nav class="header-menu__nav">
                        <ul class="header-menu__menu" @click="emit('close')">
                              <li class="header-menu__menu-item">
                                    <router-link to="/" class="header-menu__menu-link">Главная</router-link>
                              </li>
                              <li class="header-menu__menu-item header-menu__menu-item--dropdown">
                                    <a href="#" class="header-menu__menu-link"> Для иностранцев <img src="/icons/arrow-down.svg" alt="icon" /> </a>
                              </li>
                              <li class="header-menu__menu-item header-menu__menu-item--dropdown">
                                    <a href="#" class="header-menu__menu-link"> Для юр лиц <img src="/icons/arrow-down.svg" alt="icon" /> </a>
                              </li>
                              <li class="header-menu__menu-item header-menu__menu-item--dropdown">
                                    <a href="#" class="header-menu__menu-link"> Для физ лиц <img src="/icons/arrow-down.svg" alt="icon" /> </a>
                              </li>
                              <li class="header-menu__menu-item">
                                    <router-link to="/about" class="header-menu__menu-link">О компании</router-link>
                              </li>
                              <li class="header-menu__menu-item">
                                    <router-link to="/blog" class="header-menu__menu-link">Блог</router-link>
                              </li>
                              <li class="header-menu__menu-item">
                                    <router-link to="/contacts" class="header-menu__menu-link">Контакты</router-link>
                              </li>
                        </ul>
                  </nav>

                  <div class="header-menu__contacts">
                        <a href="tel:+74954310120" class="header-menu__contacts-phone">
                              <img class="header__phone-icon" src="/icons/device.svg" alt="icon" />
                              <span class="header__phone-number">+7 (495) 431-01-20</span>
                        </a>

                        <!-- header contact button -->
                        <Button class="header-menu__contacts-btn" :green="true" size="small" title="Написать в WhatsApp">
                              <template #icon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M6.46189 19.5763L7.30656 20.0698C8.73099 20.9006 10.3511 21.3367 12.0001 21.3333C13.846 21.3333 15.6505 20.786 17.1854 19.7604C18.7202 18.7348 19.9165 17.2772 20.6229 15.5717C21.3293 13.8663 21.5142 11.9897 21.1541 10.1792C20.7939 8.36868 19.905 6.70564 18.5997 5.40035C17.2944 4.09506 15.6314 3.20614 13.8209 2.84601C12.0104 2.48589 10.1338 2.67072 8.42834 3.37713C6.7229 4.08355 5.26523 5.27983 4.23967 6.81469C3.21411 8.34955 2.66672 10.1541 2.66672 12C2.66672 13.6753 3.10656 15.2818 3.93139 16.6947L4.42372 17.5393L3.66189 20.3405L6.46189 19.5763ZM0.338056 23.6667L1.91539 17.8707C0.876051 16.089 0.330002 14.0627 0.33339 12C0.33339 5.55651 5.55656 0.333344 12.0001 0.333344C18.4436 0.333344 23.6667 5.55651 23.6667 12C23.6667 18.4435 18.4436 23.6667 12.0001 23.6667C9.9383 23.67 7.91282 23.1244 6.13172 22.0858L0.338056 23.6667Z" fill="white" />
                                    </svg>
                              </template>
                        </Button>
                  </div>
            </div>
      </header>
</template>

<style scoped></style>
