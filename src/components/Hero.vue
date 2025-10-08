<script setup>
import Button from "@/components/Button.vue";
</script>

<template>
      <section class="hero">
            <div class="container">
                  <div class="hero__info">
                        <!-- hero info title  -->
                        <h1 class="hero__info-title"><span>Миграционные услуги</span> в москве</h1>
                        <!-- hero info description  -->
                        <ul class="hero__info-list">
                              <li class="hero__info-list--item">Оформление КВОТЫ,</li>
                              <li class="hero__info-list--item">Получение РВП РФ,</li>
                              <li class="hero__info-list--item">Получение ВНЖ РФ,</li>
                              <li class="hero__info-list--item">Получение гражданства РФ,</li>
                              <li class="hero__info-list--item">Помощь юрлицам</li>
                        </ul>
                        <!-- hero info buttons  -->
                        <Button class="hero__info-btn" title="Бесплатная консультация" :primary="true" size="large" />
                  </div>
                  <!-- hero image  -->
                  <img class="hero__image" src="/src/assets/images/haro.png" alt="hero-image" />
            </div>
      </section>
</template>
