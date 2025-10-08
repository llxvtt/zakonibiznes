<script setup>
import Button from "@/components/Button.vue";
</script>

<template>
      <header class="header">
            <div class="header__top">
                  <div class="container">
                        <!-- header logo  -->
                        <a href="#!" class="header__logo"><img src="../assets/images/logo.svg" alt="logo" /></a>
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
                              <Button title="Написать в WhatsApp" size="small" :green="true" icon="/icons/whatsapp.svg" />
                        </div>
                  </div>
            </div>
            <nav class="header__nav">
                  <div class="container">
                        <ul class="header__menu">
                              <li class="header__menu-item"><a href="#" class="header__menu-link">Главная</a></li>
                              <li class="header__menu-item header__menu-item--dropdown">
                                    <a href="#" class="header__menu-link">Для иностранцев <img src="/icons/arrow-down.svg" alt="icon" /></a>
                              </li>
                              <li class="header__menu-item header__menu-item--dropdown">
                                    <a href="#" class="header__menu-link">Для юр лиц <img src="/icons/arrow-down.svg" alt="icon" /></a>
                              </li>
                              <li class="header__menu-item header__menu-item--dropdown">
                                    <a href="#" class="header__menu-link">Для физ лиц <img src="/icons/arrow-down.svg" alt="icon" /></a>
                              </li>
                              <li class="header__menu-item"><a href="#" class="header__menu-link">О компании</a></li>
                              <li class="header__menu-item"><a href="#" class="header__menu-link">Блог</a></li>
                              <li class="header__menu-item"><a href="#" class="header__menu-link">Контакты</a></li>
                        </ul>
                  </div>
            </nav>
      </header>
</template>
