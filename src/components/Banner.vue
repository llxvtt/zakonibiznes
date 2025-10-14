<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Button from "./Button.vue";

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
      <div class="container">
            <div class="banner">
                  <div class="banner__wrapper">
                        <!-- banner info title  -->
                        <h4 class="banner__title">Получить бесплатную консультацию</h4>
                        <!-- banner info buttons  -->
                        <Button class="banner__btn" :secondary="true" size="large" :title="buttonTitle" />
                  </div>
            </div>
      </div>
</template>
