<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Button from "@/components/Button.vue";

const buttonTitle = ref("Бесплатная консультация");

const updateButtonTitle = () => {
      if (window.innerWidth <= 576) {
            buttonTitle.value = "Консультация";
      } else {
            buttonTitle.value = "Бесплатная консультация";
      }
};

onMounted(() => {
      updateButtonTitle();
      window.addEventListener("resize", updateButtonTitle);
});

onBeforeUnmount(() => {
      window.removeEventListener("resize", updateButtonTitle);
});
</script>

<template>
      <section class="hero">
            <div class="container">
                  <div class="hero__info">
                        <!-- title  -->
                        <h1 class="hero__info-title"><span>Миграционные услуги</span> в москве</h1>
                        <!-- list -->
                        <ul class="hero__info-list">
                              <li class="hero__info-list--item">Оформление КВОТЫ,</li>
                              <li class="hero__info-list--item">Получение РВП РФ,</li>
                              <li class="hero__info-list--item">Получение ВНЖ РФ,</li>
                              <li class="hero__info-list--item">Помощь юрлицам</li>
                              <li class="hero__info-list--item">Получение гражданства РФ,</li>
                        </ul>
                        <Button class="hero__info-btn" :title="buttonTitle" :primary="true" size="large" />
                  </div>
                  <img class="hero__image" src="/src/assets/images/haro.webp" alt="hero-image" />
            </div>
      </section>
</template>
